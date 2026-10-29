<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# lookupPartnerOrg

query · domain `partnerships` · requires the ADMIN scope

Resolve a prospective partner organization by exactly one of an admin's phone number or email. Returns the matched admin and their organization — use the organization id as partnerOrgId when sending a partnership invitation. For an organization you are ALREADY partnered with, listPartnerships has the id without a lookup.

## Call

```ts
const result = await client.partnerships.lookupPartnerOrg()
// → Promise<LookupPartnerOrgQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `LookupPartnerOrgQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneNumber` | `String` | no | — |
| `email` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipQuery": {
    "lookupInvitee": {
      "user": {
        "id": true,
        "firstName": true,
        "lastName": true,
        "email": true
      },
      "organization": {
        "id": true,
        "name": true
      }
    }
  }
}
```
