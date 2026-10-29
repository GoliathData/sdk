<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# completeContract

mutation · domain `contracts` · requires the WRITE scope

Retry completing a contract whose last signature is in (sealing the signed PDF), or file and email a completed contract's signed copy to everyone again. Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.completeContract({ contractId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CompleteContractMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CompleteContractMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "completeContract": {
      "id": true,
      "title": true,
      "status": true,
      "revisionNumber": true
    }
  }
}
```
