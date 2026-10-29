<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addMemoryNote

mutation · domain `spaces` · requires the WRITE scope

Memory: add a note to a shelf the key owner may open, as a person stated it, pinned. PERSON with no `subjectId` is the owner's own, TEAM the organization's (its admins only), otherwise the EMPLOYEE or CONTACT id (listMemorySubjects). `kind` is RULE, PREFERENCE, DECISION, PROCEDURE, FACT or PROGRESS. The same words again return the existing note, re-pinned. In a chat, REMEMBER writes the person's own shelf, and TEAM for an org admin; this reaches the others.

## Call

```ts
const result = await client.spaces.addMemoryNote({ shelf: <SpacesMemoryShelf>, kind: <SpacesMemoryNoteKind>, text: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddMemoryNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddMemoryNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `shelf` | `SpacesMemoryShelf!` | yes | — |
| `subjectId` | `ID` | no | — |
| `kind` | `SpacesMemoryNoteKind!` | yes | — |
| `text` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "memoryAddNote": {
      "id": true,
      "kind": true,
      "text": true,
      "origin": true,
      "pinned": true
    }
  }
}
```
