<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archiveContractTemplate

mutation · domain `contracts` · requires the WRITE scope

Take a template out of the list and the pickers (status ARCHIVED). Contracts already sent from it are not changed, but they leave the Contracts list with it for its Archived view, so tell the person how many went out first (listContractTemplates). Undo with unarchiveContractTemplate. A one-off PDF (sent without a template) is discarded for good instead. Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.archiveContractTemplate({ input: <AdminContractArchiveTemplateInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ArchiveContractTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ArchiveContractTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "archiveTemplate": {
      "id": true,
      "name": true,
      "status": true
    }
  }
}
```
