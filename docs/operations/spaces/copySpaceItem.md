<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# copySpaceItem

mutation · domain `spaces` · requires the WRITE scope

Copy a FILE into a folder or root you can edit. The copy is yours and starts with no sharing; copying somewhere with a different audience needs MANAGER on the source unless it was already open to the whole team, and an AI agent can never make that kind of copy. Folders cannot be copied yet.

## Call

```ts
const result = await client.spaces.copySpaceItem({ input: <CopySpaceItemInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CopySpaceItemMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CopySpaceItemMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CopySpaceItemInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "copy": {
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
