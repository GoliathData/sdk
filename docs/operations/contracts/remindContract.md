<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# remindContract

mutation · domain `contracts` · requires the WRITE scope

Email a fresh link to every signer whose turn it is; their earlier links stop working. `expectedRevisionNumber` as sendContract. Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.remindContract({ contractId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemindContractMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemindContractMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contractId` | `ID!` | yes | — |
| `expectedRevisionNumber` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "remindContract": {
      "id": true,
      "title": true,
      "status": true,
      "revisionNumber": true
    }
  }
}
```
