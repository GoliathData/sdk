<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unarchiveContractTemplate

mutation · domain `contracts` · requires the WRITE scope

Put an archived template back in the list and the pickers, as it was. A discarded one-off PDF is refused. Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.unarchiveContractTemplate({ input: <AdminContractArchiveTemplateInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnarchiveContractTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnarchiveContractTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `AdminContractArchiveTemplateInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "unarchiveTemplate": {
      "id": true,
      "name": true,
      "status": true
    }
  }
}
```
