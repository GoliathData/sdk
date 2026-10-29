<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpacesSharedWithMe

query · domain `spaces` · requires the READ scope

The "Shared with me" view: folders and files teammates shared with you directly, newest first. Each item's `viewerRole` is your EFFECTIVE role on it (the share, or more through Team files, ownership or a folder above), not necessarily what the share alone granted; getSpaceAccessList lists each share's role.

## Call

```ts
const result = await client.spaces.listSpacesSharedWithMe()
// → Promise<ListSpacesSharedWithMeQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpacesSharedWithMeQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "sharedWithMe": {
      "id": true,
      "spaceId": true,
      "spaceName": true,
      "parentId": true,
      "kind": true,
      "name": true,
      "fileType": true,
      "sizeBytes": true,
      "viewerRole": true,
      "owner": {
        "id": true,
        "name": true
      },
      "path": {
        "id": true,
        "name": true
      },
      "updatedAt": true
    }
  }
}
```
