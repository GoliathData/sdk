<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setAgentFilesFolder

mutation · domain `spaces` · requires the WRITE scope

Choose where the files you make in this person's chats are saved for them: a folder they can edit (`folderId`), or null for the root of My files, the default. Every later file goes there; files already saved stay where they are.

## Call

```ts
const result = await client.spaces.setAgentFilesFolder(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetAgentFilesFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetAgentFilesFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "setAgentFilesFolder": {
      "id": true,
      "spaceId": true,
      "name": true,
      "path": {
        "id": true,
        "name": true
      }
    }
  }
}
```
