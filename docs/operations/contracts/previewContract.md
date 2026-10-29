<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewContract

mutation · domain `contracts` · requires the WRITE scope

The filled PDF a contract would be (`pdfUrl`, short-lived) and any values that overflow their box or cannot print. Takes what prepareContract takes as `input.contract`. Nothing is saved.

## Call

```ts
const result = await client.contracts.previewContract({ input: <AdminContractSendInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PreviewContractMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewContractMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `AdminContractSendInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "previewContract": {
      "pdfUrl": true,
      "overflowing": true,
      "unprintable": true
    }
  }
}
```
