<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createWorkflowFolder

mutation · domain `workflows` · requires the WRITE scope

Create an empty workflow folder, optionally nested under parentFolderId, and return its id.

## Call

```ts
const result = await client.workflows.createWorkflowFolder({ name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateWorkflowFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateWorkflowFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
| `parentFolderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "createWorkflowFolder": true
  }
}
```
