<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getOrganizationAreasOfOperation

query · domain `account` · requires the READ scope

The organization's markets: `regions` and drawn `polygons`; null until set.

## Call

```ts
const result = await client.account.getOrganizationAreasOfOperation()
// → Promise<GetOrganizationAreasOfOperationQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetOrganizationAreasOfOperationQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "organization": {
      "id": true,
      "areasOfOperation": true
    }
  }
}
```
