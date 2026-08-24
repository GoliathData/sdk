<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContentTemplate

query · domain `workflows` · requires the READ scope

Fetch one reusable template by id — name, type (EMAIL | SMS | NOTE | TASK), body, and folder. EMAIL/SMS/NOTE templates are the saved message content workflows reference; TASK templates are reusable checklist/SOP steps you instantiate with applyTaskTemplate.

## Call

```ts
const result = await client.workflows.getContentTemplate({ templateId: '<id>' })
// → Promise<GetContentTemplateQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContentTemplateQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `templateId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "contentTemplate": {
      "id": true,
      "name": true,
      "type": true,
      "bodyContent": true,
      "bodyFormat": true,
      "subjectContent": true,
      "folderId": true,
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
