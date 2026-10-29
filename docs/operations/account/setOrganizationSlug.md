<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationSlug

mutation · domain `account` · requires the ADMIN scope

Set the organization's booking-link slug: lowercase letters, numbers and hyphens, not starting or ending with a hyphen, at most 100 characters. A taken or malformed slug is refused; the old slug keeps resolving as an alias. Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationSlug({ slug: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationSlugMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationSlugMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `slug` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationSlug": {
      "id": true,
      "slug": true
    }
  }
}
```
