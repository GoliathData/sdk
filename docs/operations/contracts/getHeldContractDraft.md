<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getHeldContractDraft

query · domain `contracts` · requires the READ scope

A held contract (a workflow or AI employee send stopped on a blank required value) reopened to fill in, shaped as getContractSendDraft. Prepare it with prepareContract and `heldContractId` set. Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.getHeldContractDraft({ contractId: '<id>' })
// → Promise<GetHeldContractDraftQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetHeldContractDraftQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contractId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsQuery": {
    "heldDraft": {
      "templateId": true,
      "templateVersionId": true,
      "templateName": true,
      "title": true,
      "dealId": true,
      "heldContractId": true,
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
