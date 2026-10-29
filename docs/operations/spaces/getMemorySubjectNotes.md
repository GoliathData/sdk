<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMemorySubjectNotes

query · domain `spaces` · requires the READ scope

Memory: one subject's notes — `shelf` PERSON with no `subjectId` is yours, TEAM is the organization's, otherwise the subject's id — in reading order (rules, preferences, decisions, procedures, facts …), or with `retired: true` the forgotten ones, each with its kind, whether a person stated it or Goliath derived it, whether it is pinned, and where it was learned. `limit` notes per page (default 100, at most 300); page with `after` = `endCursor` while `hasNextPage`. Null subject when you may not open it.

## Call

```ts
const result = await client.spaces.getMemorySubjectNotes({ shelf: <SpacesMemoryShelf> })
// → Promise<GetMemorySubjectNotesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMemorySubjectNotesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `shelf` | `SpacesMemoryShelf!` | yes | — |
| `subjectId` | `ID` | no | — |
| `retired` | `Boolean` | no | — |
| `limit` | `Int` | no | 100 |
| `after` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 300.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "memorySubject": {
      "shelf": true,
      "subjectId": true,
      "name": true,
      "noteCount": true,
      "updatedAt": true,
      "lastDreamAt": true
    },
    "memoryNotes": {
      "notes": {
        "id": true,
        "kind": true,
        "text": true,
        "origin": true,
        "pinned": true,
        "retired": true,
        "source": {
          "kind": true,
          "name": true,
          "contactId": true
        },
        "updatedAt": true
      },
      "endCursor": true,
      "hasNextPage": true
    }
  }
}
```
