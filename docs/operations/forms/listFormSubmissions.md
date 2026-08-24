<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFormSubmissions

query · domain `forms` · requires the READ scope

List form submissions (leads), newest first, optionally filtered to one form via formId. Each row carries the submitted field values (submittedData) and the contactId of the CRM contact it created or matched - use that contactId with getContact, updateContact, or addContactNote. Returns a capped page plus the unpaged totalCount.

## Call

```ts
const result = await client.forms.listFormSubmissions()
// → Promise<ListFormSubmissionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFormSubmissionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID` | no | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "listAllSubmissions": {
      "submissions": {
        "id": true,
        "embedFormId": true,
        "contactId": true,
        "submittedData": true,
        "createdAt": true
      },
      "totalCount": true
    }
  }
}
```
