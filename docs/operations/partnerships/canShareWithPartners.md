<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# canShareWithPartners

query · domain `partnerships` · requires the READ scope

True when your organization has at least one ACTIVE partnership in a sending direction (SEND_ONLY or BIDIRECTIONAL from your side) — i.e. there is a partner your organization could share leads with. False means sharing a contact with a partner is not possible until an invitation is sent and accepted; check this before promising a user that a lead can be handed to a partner.

## Call

```ts
const result = await client.partnerships.canShareWithPartners()
// → Promise<CanShareWithPartnersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CanShareWithPartnersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipQuery": {
    "canShareWithPartners": true
  }
}
```
