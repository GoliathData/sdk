<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContentTemplateFolder

mutation · domain `workflows` · requires the WRITE scope

Delete a template folder by id. Subfolders inside it are also deleted; templates in the deleted folders become ungrouped rather than deleted. Returns the remaining folders.

## Call

```ts
const result = await client.workflows.deleteContentTemplateFolder({ folderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteContentTemplateFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteContentTemplateFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "deleteContentTemplateFolder": {
      "listContentTemplateFolders": {
        "id": true,
        "name": true
      }
    }
  }
}
```
