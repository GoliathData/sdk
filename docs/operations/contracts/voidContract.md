<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# voidContract

mutation · domain `contracts` · requires the WRITE scope

Void a sent contract: every signing link stops working and the signers who were sent one are told, with `reason` (kept on the evidence chain). It cannot be un-voided; to go on, prepare a new one. Only on the person’s word. `expectedRevisionNumber` as sendContract. Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.voidContract({ contractId: '<id>', reason: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<VoidContractMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `VoidContractMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contractId` | `ID!` | yes | — |
| `reason` | `String!` | yes | — |
| `expectedRevisionNumber` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "voidContract": {
      "id": true,
      "title": true,
      "status": true,
      "revisionNumber": true
    }
  }
}
```
