<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameContentTemplateFolder

mutation · domain `workflows` · requires the WRITE scope

Rename a template folder by id.

## Call

```ts
const result = await client.workflows.renameContentTemplateFolder({ folderId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameContentTemplateFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameContentTemplateFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "renameContentTemplateFolder": {
      "id": true,
      "name": true
    }
  }
}
```
