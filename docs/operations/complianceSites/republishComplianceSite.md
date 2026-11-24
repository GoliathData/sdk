<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# republishComplianceSite

mutation · domain `complianceSites` · requires the ADMIN scope

Put a previewed compliance-site edit live (org admins): the same edit and its previewId. Verified against the carrier checklist on the live pages, or put back as it was (rolledBack) with the reasons.

## Call

```ts
const result = await client.complianceSites.republishComplianceSite({ edit: <ComplianceSiteEditInput>, previewId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RepublishComplianceSiteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RepublishComplianceSiteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `edit` | `ComplianceSiteEditInput!` | yes | — |
| `previewId` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "complianceSiteMutation": {
    "republish": {
      "ok": true,
      "refusals": true,
      "previewId": true,
      "draftUrl": true,
      "liveUrl": true,
      "rolledBack": true,
      "ignored": true,
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
      }
    }
  }
}
```
