<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContractSendDraft

query · domain `contracts` · requires the READ scope

Step 1 of preparing a contract: a PUBLISHED template filled for one contact (optionally a deal, and contactBId for a co-seller). Returns the template version, the CRM-filled `values` (a `required` one left blank needs a value: their words or ask, never an invented price, date or address), `missingTokens`, one suggested recipient per role, and the subject, message and expiry. Needs the manage contracts capability. Then prepareContract.

## Call

```ts
const result = await client.contracts.getContractSendDraft({ input: <AdminContractSendStartInput> })
// → Promise<GetContractSendDraftQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContractSendDraftQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `AdminContractSendStartInput!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsQuery": {
    "sendDraft": {
      "templateId": true,
      "templateVersionId": true,
      "templateName": true,
      "title": true,
      "dealId": true,
      "contact": {
        "id": true,
        "name": true,
        "emails": true,
        "phones": true
      },
      "contactB": {
        "id": true,
        "name": true,
        "emails": true,
        "phones": true
      },
      "values": {
        "key": true,
        "label": true,
        "source": true,
        "required": true,
        "value": true,
        "record": true
      },
      "missingTokens": true,
      "roles": {
        "key": true,
        "label": true,
        "kind": true,
        "order": true
      },
      "recipients": {
        "roleKey": true,
        "displayName": true,
        "email": true,
        "phone": true,
        "contactId": true,
        "signingOrder": true
      },
      "subject": true,
      "message": true,
      "expiryDays": true,
      "reminderIntervalDays": true
    }
  }
}
```
