<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteFolder

mutation · domain `properties` · requires the WRITE scope

Delete a folder by id (listFolders). Its subfolders, filters, lists and forms move up a level, never deleted. A shared folder goes for the whole team.

## Call

```ts
const result = await client.properties.deleteFolder({ folderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "deleteFolder": true
  }
}
```
