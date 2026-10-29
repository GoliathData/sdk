<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addLibraryFileFromArtifact

mutation · domain `workflows` · requires the WRITE scope

Add a file the person attached (or you made) to the content library by its artifactId, under a name, with an optional description and folderId (listContentTemplateFolders). Templates can then attach it.

## Call

```ts
const result = await client.workflows.addLibraryFileFromArtifact({ artifactId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddLibraryFileFromArtifactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddLibraryFileFromArtifactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `artifactId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |
| `description` | `String` | no | — |
| `folderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "createLibraryFileFromArtifact": {
      "id": true,
      "name": true,
      "folderId": true,
      "contentType": true
    }
  }
}
```
