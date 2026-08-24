<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContentTemplateFolder

mutation · domain `workflows` · requires the WRITE scope

Create a template folder. Pass parentFolderId to nest it under another folder.

## Call

```ts
const result = await client.workflows.createContentTemplateFolder({ name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateContentTemplateFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateContentTemplateFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
| `parentFolderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "createContentTemplateFolder": {
      "id": true,
      "name": true,
      "parentFolderId": true,
      "displayOrder": true
    }
  }
}
```
