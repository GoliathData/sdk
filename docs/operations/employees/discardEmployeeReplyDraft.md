<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# discardEmployeeReplyDraft

mutation · domain `employees` · requires the WRITE scope

Retired (#41897): always refused, since no reply is held any more. Do not call it; a reply waiting on a person is a reply card in the app.

## Call

```ts
const result = await client.employees.discardEmployeeReplyDraft({ draftId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DiscardEmployeeReplyDraftMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DiscardEmployeeReplyDraftMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `draftId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "discardAgentReplyDraft": {
      "id": true,
      "status": true
    }
  }
}
```
