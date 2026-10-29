// Ask Goliath over the developer API, as one call: send a message, wait for the reply.
//
// The operations (client.askGoliath.*) each hold a request at most 25 seconds; a reply that takes longer comes back
// RUNNING and is polled with getAgentTurn. This helper does that polling, so a caller writes
// `const turn = await askGoliath(client, { message: 'Which deals stalled this week?' })` and reads `turn.reply`.

import type { GoliathClient } from '../generated/domains'
import type { GetAgentTurnQuery } from '../generated/operationTypes'

export type AskGoliathTurn = NonNullable<NonNullable<GetAgentTurnQuery['externalAgentChatQuery']>['agentTurn']>

export type AskGoliathInput = {
  message: string
  /** Continue this chat; omit to start a new one. */
  conversationId?: string
  /** Give up waiting after this long (default 10 minutes). The reply keeps running; poll getAgentTurn to pick it up. */
  timeoutMs?: number
  /** Makes a retried send safe: the same key never posts the message twice. */
  idempotencyKey?: string
  signal?: AbortSignal
}

const DEFAULT_TIMEOUT_MS = 10 * 60 * 1000
const WAIT_SECONDS = 25

/**
 * Sends `message` to the key owner's Ask Goliath and resolves with the turn once its reply has finished: COMPLETED,
 * WAITING_FOR_CALLER (answer `turn.questions` with client.askGoliath.answerAgentQuestions), FAILED or CANCELLED. A
 * reply still RUNNING at `timeoutMs` resolves as it stands.
 */
export async function askGoliath(client: GoliathClient, input: AskGoliathInput): Promise<AskGoliathTurn> {
  const deadline = Date.now() + (input.timeoutMs ?? DEFAULT_TIMEOUT_MS)
  const options = {
    ...(input.idempotencyKey === undefined ? {} : { idempotencyKey: input.idempotencyKey }),
    ...(input.signal === undefined ? {} : { signal: input.signal }),
  }
  let turn =
    input.conversationId === undefined
      ? (
          await client.askGoliath.startAgentConversation(
            { message: input.message, waitSeconds: waitFor(deadline) },
            options
          )
        ).externalAgentChatMutation?.startAgentConversation
      : (
          await client.askGoliath.sendAgentMessage(
            { conversationId: input.conversationId, message: input.message, waitSeconds: waitFor(deadline) },
            options
          )
        ).externalAgentChatMutation?.postAgentMessage
  // Each poll holds up to 25 s server-side, so the loop never spins; under a second left, a poll would hold nothing.
  while (turn != null && turn.status === 'RUNNING' && waitFor(deadline) >= 1) {
    const read = await client.askGoliath.getAgentTurn(
      { conversationId: turn.conversationId, turnId: turn.turnId, waitSeconds: waitFor(deadline) },
      input.signal === undefined ? undefined : { signal: input.signal }
    )
    const next = read.externalAgentChatQuery?.agentTurn
    if (next == null) break
    turn = next
  }
  if (turn == null) throw new Error('Ask Goliath returned no turn.')
  return turn
}

/** How long one call may hold for the reply: the server's 25 s, or less when the caller's deadline is nearer. */
function waitFor(deadline: number): number {
  return Math.max(0, Math.min(WAIT_SECONDS, Math.floor((deadline - Date.now()) / 1000)))
}
