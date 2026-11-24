<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# lookupAddress

query · domain `properties` · requires the READ scope

An address property search does not find (a side door, a new build): placed, then matched to our property, else read from the county's public parcel record (`status` says which; ESTIMATE marks a parcel found only as the one nearest the point). `nearby` ({ radiusMeters, limit, useClasses }, each optional) lists parcels like it around the address instead. Free and read-only; rate-limited.

## Call

```ts
const result = await client.properties.lookupAddress({ address: '<text>' })
// → Promise<LookupAddressQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `LookupAddressQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `address` | `String!` | yes | — |
| `nearby` | `JSON` | no | — |

## Gateway notes

- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "lookupAddress": true
  }
}
```
