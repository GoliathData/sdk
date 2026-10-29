<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContract

query · domain `contracts` · requires the READ scope

One contract: its values, each signer's status (viewed, signed, declined with their reason, a deliveryProblem when their link never arrived) and short-lived PDF links (`signedPdfUrl` once everyone signed). READY means prepared but not sent. Send, Remind, Correct and Void are buttons on `/contracts/<id>` (and, for a developer-API key, sendContract, remindContract, correctContract, voidContract).

## Call

```ts
const result = await client.contracts.getContract({ contractId: '<id>' })
// → Promise<GetContractQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContractQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contractId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsQuery": {
    "contract": {
      "id": true,
      "title": true,
      "category": true,
      "status": true,
      "held": true,
      "contactId": true,
      "contactName": true,
      "revisionNumber": true,
      "subject": true,
      "message": true,
      "expiryDays": true,
      "reminderIntervalDays": true,
      "sentAt": true,
      "expiresAt": true,
      "completedAt": true,
      "unsignedPdfUrl": true,
      "signedPdfUrl": true,
      "deal": {
        "id": true,
        "title": true
      },
      "values": {
        "key": true,
        "label": true,
        "value": true
      },
      "recipients": {
        "id": true,
        "roleLabel": true,
        "kind": true,
        "displayName": true,
        "email": true,
        "phone": true,
        "signingOrder": true,
        "status": true,
        "firstViewedAt": true,
        "signedAt": true,
        "declinedAt": true,
        "declineReason": true,
        "deliveryProblem": true
      }
    }
  }
}
```
