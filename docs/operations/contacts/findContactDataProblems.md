<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findContactDataProblems

query · domain `contacts` · requires the READ scope

Contact data problems in ONE call, never contact by contact: EMAIL_NOT_LOWERCASE, NAME_EMPTY, NAME_ONE_WORD (a first or last name missing; which is unknown), PHONE_NOT_NORMALIZED (not the 10-digit form phones are stored in; well-formed numbers are shown formatted, never stored so). Each: count of contacts you see, a sample (sampleSize ≤25) with the bad value, truncated. Pass problem for up to 500 of its contact ids past offset, what lowercaseContactEmails takes.

## Call

```ts
const result = await client.contacts.findContactDataProblems()
// → Promise<FindContactDataProblemsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindContactDataProblemsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `problem` | `ContactDataProblem` | no | — |
| `sampleSize` | `Int` | no | — |
| `offset` | `Int` | no | 0 |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contactDataProblems": {
      "problems": {
        "problem": true,
        "count": true,
        "truncated": true,
        "contacts": {
          "id": true,
          "name": true,
          "value": true
        }
      }
    }
  }
}
```
