<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# insertSpaceTextLines

mutation · domain `spaces` · requires the WRITE scope

Insert lines into a text file by line number (from getSpaceTextLines), every existing line left exactly as it was — headings, an intro, a summary — as a new version, like a save. `beforeLine` 1 is the top, `totalLines + 1` the end; several insertions before one line keep their order. Use it instead of saveSpaceTextFile whenever the file is too large to re-send whole.

## Call

```ts
const result = await client.spaces.insertSpaceTextLines({ input: <InsertSpaceTextLinesInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<InsertSpaceTextLinesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `InsertSpaceTextLinesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `InsertSpaceTextLinesInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "insertTextLines": {
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
