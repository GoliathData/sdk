<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listMemoryShelves

query · domain `spaces` · requires the READ scope

Memory: the shelves you may open — PERSON (yours), TEAM (the organization's), EMPLOYEE, CONTACT (only the contacts the key owner may open in the CRM) and GROUP (the key owner's own teams) — and how many subjects each list shelf holds (null for PERSON and TEAM). The fleet's PROJECT shelf is never reachable through the API. A workflow's rule lives on TEAM. List a shelf with listMemorySubjects; read one subject with getMemorySubjectNotes.

## Call

```ts
const result = await client.spaces.listMemoryShelves()
// → Promise<ListMemoryShelvesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListMemoryShelvesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "memoryLibrary": {
      "shelves": {
        "shelf": true,
        "subjectCount": true
      }
    }
  }
}
```
