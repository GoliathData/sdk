<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameOrganization

mutation · domain `account` · requires the ADMIN scope

Rename the organization. The new name is carried into the AI employees' instructions, the voice agents and the onboarding drip. Organization admins only.

## Call

```ts
const result = await client.account.renameOrganization({ name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameOrganizationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameOrganizationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganization": {
      "id": true,
      "name": true
    }
  }
}
```
