<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editSpaceTextLines

mutation · domain `spaces` · requires the WRITE scope

Reorganize or rewrite part of a text file by line number (from getSpaceTextLines), as one new version like a save: each edit replaces a range `startLine`–`endLine` with `text` (empty deletes it), MOVES the range before `beforeLine` (no `text` — its characters are kept exactly, nothing re-sent), or with no range inserts `text` before `beforeLine`. Every number is the read version's, the edits apply together, and every line no edit names stays exactly as it was. Overlapping ranges, a target inside a range being changed, and a stale `baseVersionId` are refused. Use it to put a long file into sections, reorder it, or fix lines without re-sending the whole file.

## Call

```ts
const result = await client.spaces.editSpaceTextLines({ input: <EditSpaceTextLinesInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditSpaceTextLinesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditSpaceTextLinesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `EditSpaceTextLinesInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "editTextLines": {
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
