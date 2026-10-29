<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# prepareContract

mutation · domain `contracts` · requires the WRITE scope

Step 2: freeze a contract READY to send, with its unsigned PDF. Build `input.contract` from getContractSendDraft's result (change what the person asked): `values` as { key, value } for every value to set, required blanks included; one recipient per role with exactly one of email or phone. Pass `idempotencyKey` (a new UUID) and resend it unchanged on a retry, so a lost response never makes a second contract. A template published again since step 1 is refused: start over. Needs the manage contracts capability. It reaches no signer: the person presses Send on `/contracts/<id>`, or a developer-API key calls sendContract.

## Call

```ts
const result = await client.contracts.prepareContract({ input: <AdminContractPrepareInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PrepareContractMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PrepareContractMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `AdminContractPrepareInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "prepareContract": {
      "id": true,
      "title": true,
      "status": true,
      "revisionNumber": true,
      "contactName": true,
      "unsignedPdfUrl": true
    }
  }
}
```
