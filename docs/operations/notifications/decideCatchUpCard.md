<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# decideCatchUpCard

mutation · domain `notifications` · requires the WRITE scope

Decide one HARVEST or BUNDLE card (`family`; the others are answered through their own operations) as the decision bar does, on the person's word: `verb` ACCEPT or DISMISS, `shownIds` every row the card showed (listCatchUpCards), `suggestionIds` the ticked ones (ACCEPT sets the unticked aside; DISMISS dismisses them), `reason` for a DISMISS. An ACCEPT runs each row's action (a record change, a merge, a skip trace that spends credits and is queued as `bulkTaskId`, or a send). Behind the send consent attestation and Pause everything. `remainingIds` are rows still on the card.

## Call

```ts
const result = await client.notifications.decideCatchUpCard({ cardId: '<id>', verb: <WorkThroughVerb>, shownIds: ['<id>'], suggestionIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DecideCatchUpCardMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DecideCatchUpCardMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `cardId` | `ID!` | yes | — |
| `verb` | `WorkThroughVerb!` | yes | — |
| `shownIds` | `[ID!]!` | yes | — |
| `suggestionIds` | `[ID!]!` | yes | — |
| `reason` | `ContactSuggestionDismissReason` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workThroughMutation": {
    "decideCard": {
      "applied": true,
      "refused": true,
      "setAside": true,
      "queued": true,
      "alreadyDecided": true,
      "bulkTaskId": true,
      "retired": true,
      "refusalMessage": true,
      "remainingIds": true,
      "cardGone": true
    }
  }
}
```
