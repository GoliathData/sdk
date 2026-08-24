<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getFormSubmission

query · domain `forms` · requires the READ scope

Fetch one form submission (lead) by id - its submitted field values (submittedData) and the linked CRM contactId.

## Call

```ts
const result = await client.forms.getFormSubmission({ submissionId: '<id>' })
// → Promise<GetFormSubmissionQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetFormSubmissionQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `submissionId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "getSubmission": {
      "id": true,
      "embedFormId": true,
      "contactId": true,
      "submittedData": true,
      "createdAt": true
    }
  }
}
```
