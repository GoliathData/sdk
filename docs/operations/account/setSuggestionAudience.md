<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setSuggestionAudience

mutation · domain `account` · requires the ADMIN scope

Set who contact suggestion cards go to: WHOLE_TEAM or POINT_PERSON. Organization admins only.

## Call

```ts
const result = await client.account.setSuggestionAudience({ audience: <OrganizationSuggestionAudience> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetSuggestionAudienceMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetSuggestionAudienceMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `audience` | `OrganizationSuggestionAudience!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationSuggestionAudience": {
      "id": true,
      "suggestionAudience": true
    }
  }
}
```
