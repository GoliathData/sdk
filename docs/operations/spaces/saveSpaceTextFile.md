<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# saveSpaceTextFile

mutation · domain `spaces` · requires the WRITE scope

Save new text as the next version of a text file you can edit (earlier versions are kept and can be restored in the app). Pass `baseVersionId` — the `versionId` getSpaceTextContent returned — so a save over someone else's newer version is refused instead of overwriting it.

## Call

```ts
const result = await client.spaces.saveSpaceTextFile({ input: <SaveSpaceTextFileInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SaveSpaceTextFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SaveSpaceTextFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `SaveSpaceTextFileInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "saveTextFile": {
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
