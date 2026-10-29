<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPartnerships

query · domain `partnerships` · requires the READ scope

List every partnership your organization has with another organization — ACTIVE, PENDING and TERMINATED — always viewed from your side: partnerOrg is the OTHER organization, and its id is the partnerOrgId every partnership mutation takes (terminatePartnership, updatePartnershipPermittedUsers, cancelPartnershipInvite). direction says whose leads flow to whom (SEND_ONLY: yours to theirs; RECEIVE_ONLY: theirs to yours; BIDIRECTIONAL). awaitingCurrentOrgResponse is true when the partner invited you and you have not answered — those are the rows listPendingPartnershipInvites returns. permittedUserIds are YOUR users the partner may see when sending leads (empty = all). This is the answer to "who are we partnered with?".

## Call

```ts
const result = await client.partnerships.listPartnerships()
// → Promise<ListPartnershipsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPartnershipsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipQuery": {
    "partnershipsForCurrentOrg": {
      "id": true,
      "status": true,
      "direction": true,
      "awaitingCurrentOrgResponse": true,
      "partnerOrg": {
        "id": true,
        "name": true
      },
      "permittedUserIds": true,
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
