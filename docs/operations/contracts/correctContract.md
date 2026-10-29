<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# correctContract

mutation · domain `contracts` · requires the WRITE scope

Correct a sent contract on the same template version, contact and deal: `input.contract` as prepareContract takes it with the changes, `reason` (emailed to the signers whose link stops working, and kept on the evidence chain), `expectedRevisionNumber` (getContract's revisionNumber; a correction since refuses this one), `expectedSignatureCount` (how many had signed; a signature since refuses it) and `idempotencyKey` (a new UUID, resent unchanged on a retry). Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.correctContract({ input: <AdminContractCorrectInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CorrectContractMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CorrectContractMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `AdminContractCorrectInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "correctContract": {
      "id": true,
      "title": true,
      "status": true,
      "revisionNumber": true
    }
  }
}
```
