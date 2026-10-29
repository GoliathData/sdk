<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPendingPartnershipInvites

query · domain `partnerships` · requires the READ scope

List the partnership invitations OTHER organizations have sent you that are still waiting on your answer (awaitingCurrentOrgResponse is always true here). Each row's partnerOrg.id is the partnerOrgId to pass to acceptPartnershipInvite or rejectPartnershipInvite. Invitations YOUR organization sent and is waiting on are not here — they appear in listPartnerships with status PENDING and awaitingCurrentOrgResponse false.

## Call

```ts
const result = await client.partnerships.listPendingPartnershipInvites()
// → Promise<ListPendingPartnershipInvitesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPendingPartnershipInvitesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipQuery": {
    "pendingInvitationsForCurrentOrg": {
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
