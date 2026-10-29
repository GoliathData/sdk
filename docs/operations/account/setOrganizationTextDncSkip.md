<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationTextDncSkip

mutation · domain `account` · requires the ADMIN scope

Turn "Always skip National DNC numbers when texting" on or off. On, every workflow text step and AI employee text skips numbers on the National Do Not Call registry, whatever the step says. Calls and exports are not affected. Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationTextDncSkip({ alwaysExcludeDncTexts: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationTextDncSkipMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationTextDncSkipMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `alwaysExcludeDncTexts` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationTextCompliance": {
      "id": true,
      "alwaysExcludeDncTexts": true
    }
  }
}
```
