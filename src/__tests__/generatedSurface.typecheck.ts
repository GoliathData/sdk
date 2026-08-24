// Compile-time contract checks for the generated surface — never executed
// (mirrors server/src/routes/developerApi/__tests__/operationKinds.typecheck.ts).
// Type-checked by tsconfig.tests.json via `yarn typecheck`; a generator change
// that weakens these guarantees fails the build, not a runtime test.

import type {
  CreateContactMutationVariables,
  GetTeamAnalyticsOverviewQueryVariables,
} from '../generated/operationTypes'
import type { GoliathClient } from '../index'

declare const client: GoliathClient
declare const createContactVariables: CreateContactMutationVariables
declare const analyticsVariables: Omit<GetTeamAnalyticsOverviewQueryVariables, 'orgId'>

// EVERY mutation accepts an Idempotency-Key — sends…
void client.contacts.createContact(createContactVariables, { idempotencyKey: 'order-123' })

// …and creates alike: a timed-out create retried with its key replays instead
// of duplicating, so the type surface must invite the key on every write.
void client.deals.createDeal({ title: 'x' } as never, { idempotencyKey: 'order-123' })

// An IdempotentRequestOptions VARIABLE flows the same way (excess-property
// checks only cover literals, so this pins structural assignability too).
declare const idempotentOptions: import('../runtime/types').IdempotentRequestOptions
void client.deals.createDeal({ title: 'x' } as never, idempotentOptions)

// Reads still reject the key at compile time, matching the gateway's 400:
// their options are plain RequestOptions, whose `idempotencyKey?: never`
// refuses a real string.
// @ts-expect-error idempotencyKey is a write concept — read operations reject it
void client.deals.getPipelineAnalytics(undefined, { idempotencyKey: 'order-123' })

// Org-bound variables are gateway-injected: the caller-facing type omits them…
void client.team.getTeamAnalyticsOverview(analyticsVariables)

// …and supplying one is a compile error, not a silently overwritten value.
// @ts-expect-error orgId is derived from the API key, never caller-supplied
void client.team.getTeamAnalyticsOverview({ ...analyticsVariables, orgId: 'someone-elses-org' })

// Fully-optional-variable operations are callable with no arguments at all.
void client.deals.getPipelineAnalytics()
