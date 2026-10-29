<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveContentTemplateFolder

mutation · domain `workflows` · requires the WRITE scope

Move a template folder under another, or pass parentFolderId null for the root. Not into its own subtree.

## Call

```ts
const result = await client.workflows.moveContentTemplateFolder({ folderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveContentTemplateFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveContentTemplateFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |
| `parentFolderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "moveLibraryFolder": {
      "id": true,
      "parentFolderId": true
    }
  }
}
```
