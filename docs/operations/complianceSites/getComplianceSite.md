<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getComplianceSite

query · domain `complianceSites` · requires the READ scope

The organization's A2P compliance site (the pages Goliath hosts for its texting registration): domain, live URLs, the facts it shows and the saved ones, and which facts are locked or editable. Null when none.

## Call

```ts
const result = await client.complianceSites.getComplianceSite()
// → Promise<GetComplianceSiteQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetComplianceSiteQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "complianceSiteQuery": {
    "site": {
      "domain": true,
      "status": true,
      "homeUrl": true,
      "privacyUrl": true,
      "termsUrl": true,
      "contactUrl": true,
      "facts": {
        "businessName": true,
        "legalEntityName": true,
        "tagline": true,
        "contactEmail": true,
        "contactPhone": true,
        "contactName": true,
        "contactTitle": true,
        "markets": true,
        "seed": true
      },
      "saved": {
        "tagline": true,
        "contactEmail": true,
        "contactPhone": true,
        "contactName": true,
        "contactTitle": true,
        "markets": true
      },
      "lockedFacts": true,
      "editableFacts": true
    }
  }
}
```
