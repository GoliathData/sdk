<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewComplianceSiteEdit

mutation · domain `complianceSites` · requires the WRITE scope

Preview a compliance-site edit (org admins): only the facts that change (tagline, contactEmail, contactPhone, contactName, contactTitle, markets; null clears). Refused when it would move the business name, legal entity or opt-in wording; else what the site would show and the previewId to republish. Nothing is published.

## Call

```ts
const result = await client.complianceSites.previewComplianceSiteEdit({ edit: <ComplianceSiteEditInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PreviewComplianceSiteEditMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewComplianceSiteEditMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `edit` | `ComplianceSiteEditInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "complianceSiteMutation": {
    "previewEdit": {
      "ok": true,
      "refusals": true,
      "previewId": true,
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
