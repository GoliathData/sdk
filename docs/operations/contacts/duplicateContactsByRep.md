<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# duplicateContactsByRep

query · domain `contacts` · requires the READ scope

findDuplicateContactGroups tallied per assigned rep (point person) in ONE call: per rep, groupCount (groups holding one of their contacts) and contactCount; userId null = unassigned. totalGroups, truncated (past 500 groups).

## Call

```ts
const result = await client.contacts.duplicateContactsByRep()
// → Promise<DuplicateContactsByRepQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DuplicateContactsByRepQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `matchBy` | `DuplicateContactMatch` | no | NAME_AND_CONTACT_INFO |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "duplicateContactsByRep": {
      "reps": {
        "userId": true,
        "name": true,
        "groupCount": true,
        "contactCount": true
      },
      "totalGroups": true,
      "truncated": true
    }
  }
}
```
