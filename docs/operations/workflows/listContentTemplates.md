<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContentTemplates

query · domain `workflows` · requires the READ scope

List the organization's reusable templates, optionally filtered by type (EMAIL | SMS | NOTE | TASK) or folderId. Pass type: TASK to find the saved checklist/SOP steps that applyTaskTemplate runs against a contact. Returns the template id to use in getContentTemplate / updateContentTemplate / applyTaskTemplate.

## Call

```ts
const result = await client.workflows.listContentTemplates()
// → Promise<ListContentTemplatesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContentTemplatesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `type` | `ContentTemplateType` | no | — |
| `folderId` | `ID` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "listContentTemplates": {
      "id": true,
      "name": true,
      "type": true,
      "folderId": true,
      "updatedAt": true,
      "taskSetSteps": {
        "id": true,
        "taskTemplate": {
          "id": true,
          "name": true
        },
        "dueOffset": {
          "amount": true,
          "unit": true
        },
        "preferredTimeOfDay": {
          "hour": true,
          "minute": true,
          "timezone": true
        }
      }
    }
  }
}
```
