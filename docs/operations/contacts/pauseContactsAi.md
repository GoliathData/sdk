<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# pauseContactsAi

mutation · domain `contacts` · requires the WRITE scope

pauseContactAi (same mode and pausedUntil) for many contacts, as a bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.

## Call

```ts
const result = await client.contacts.pauseContactsAi({ contactIds: ['<text>'], mode: <ContactAiPauseMode> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PauseContactsAiMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PauseContactsAiMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `mode` | `ContactAiPauseMode!` | yes | — |
| `pausedUntil` | `DateTime` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "pauseContactsAi": {
      "bulkTaskId": true
    }
  }
}
```
