<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createSpaceFolder

mutation · domain `spaces` · requires the WRITE scope

Create a folder at a root (My files or Team; `folderId` omitted) or inside a folder you can edit. A name already used there gets " (2)". Pass `creationKey` (any unique string) to make a retry return the folder it already made.

## Call

```ts
const result = await client.spaces.createSpaceFolder({ input: <CreateSpaceFolderInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateSpaceFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateSpaceFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreateSpaceFolderInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "createFolder": {
      "id": true,
      "spaceId": true,
      "spaceName": true,
      "parentId": true,
      "kind": true,
      "name": true,
      "description": true,
      "fileType": true,
      "sizeBytes": true,
      "accessMode": true,
      "systemLocked": true,
      "viewerRole": true,
      "abilities": {
        "addChildren": true,
        "edit": true,
        "move": true,
        "trash": true,
        "share": true
      },
      "owner": {
        "id": true,
        "name": true
      },
      "createdBy": {
        "kind": true,
        "label": true
      },
      "childCount": true,
      "shareCount": true,
      "currentVersion": {
        "id": true,
        "versionNumber": true
      },
      "path": {
        "id": true,
        "name": true
      },
      "updatedAt": true,
      "trashedAt": true
    }
  }
}
```
