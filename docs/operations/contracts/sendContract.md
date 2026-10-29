<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# sendContract

mutation · domain `contracts` · requires the WRITE scope

Send a READY contract (prepareContract) for signature: the first signers in signing order get their links by email or text, and it becomes SENT. Confirm the contract and its signers with the person first (getContract). `expectedRevisionNumber` (getContract's revisionNumber) refuses the send if it was corrected since. Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.sendContract({ contractId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SendContractMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SendContractMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "sendContract": {
      "id": true,
      "title": true,
      "status": true,
      "revisionNumber": true
    }
  }
}
```
