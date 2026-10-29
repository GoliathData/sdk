<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listMemorySubjects

query · domain `spaces` · requires the READ scope

Memory: one list shelf's subjects (EMPLOYEE, CONTACT or GROUP: AI employees, contacts as the CRM lets the key owner open them, or the key owner's teams), newest first, with how many notes each holds; `query` narrows by name. Page with `after` = `endCursor` while `hasNextPage`. Each `subjectId` opens with getMemorySubjectNotes.

## Call

```ts
const result = await client.spaces.listMemorySubjects({ shelf: <SpacesMemoryShelf> })
// → Promise<ListMemorySubjectsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListMemorySubjectsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `shelf` | `SpacesMemoryShelf!` | yes | — |
| `query` | `String` | no | — |
| `limit` | `Int` | no | 50 |
| `after` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "memorySubjects": {
      "subjects": {
        "shelf": true,
        "subjectId": true,
        "name": true,
        "noteCount": true,
        "updatedAt": true
      },
      "endCursor": true,
      "hasNextPage": true
    }
  }
}
```
