<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateOrganizationAreasOfOperation

mutation · domain `account` · requires the ADMIN scope

Replace the organization's markets: `{version: 1, regions, polygons, updatedAt}`, a region `{kind: "county"|"city"|"zip", fips|cityId|zip, label}` (searchCounties/searchCities). Send back all you keep of getOrganizationAreasOfOperation, polygons too. An added market can buy phone numbers once the number plan buys: confirm first. Admins only.

## Call

```ts
const result = await client.account.updateOrganizationAreasOfOperation({ areasOfOperation: <JSON> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateOrganizationAreasOfOperationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateOrganizationAreasOfOperationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `areasOfOperation` | `JSON!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationAreasOfOperation": {
      "id": true,
      "areasOfOperation": true
    }
  }
}
```
