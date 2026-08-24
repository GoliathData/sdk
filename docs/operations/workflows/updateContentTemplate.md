<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateContentTemplate

mutation · domain `workflows` · requires the WRITE scope

Update a template by id (name, body, subject). The id is nested in the input object.

## Call

```ts
const result = await client.workflows.updateContentTemplate({ input: <UpdateContentTemplateInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateContentTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateContentTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `UpdateContentTemplateInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "updateContentTemplate": {
      "id": true,
      "name": true,
      "type": true,
      "updatedAt": true
    }
  }
}
```
