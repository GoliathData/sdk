<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveSpaceItems

mutation · domain `spaces` · requires the WRITE scope

Move up to 200 items into a folder or a root (`destination.folderId` omitted), all or nothing. Needs edit access on both sides; a move that would change who can see an item (out of a restricted folder, or between My files and Team) also needs MANAGER on it unless it was already open to the whole team — and an AI agent can never make that kind of move: ask the person to do it in Library. Folders move with everything in them.

## Call

```ts
const result = await client.spaces.moveSpaceItems({ input: <MoveSpaceItemsInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveSpaceItemsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveSpaceItemsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `MoveSpaceItemsInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "move": {
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
