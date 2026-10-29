<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findSharedPropertyAddresses

query · domain `contacts` · requires the READ scope

Groups of 2+ contacts linked to the same property address (the parcel, else the mailing address row, else the text folded for case and punctuation), largest first, in ONE call: address, propertyId, members with how each is linked (OWNS, MAILING, FORMER_OWNER, RELATED_TO_OWNER). totalCount = groups across everything you see.

## Call

```ts
const result = await client.contacts.findSharedPropertyAddresses()
// → Promise<FindSharedPropertyAddressesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindSharedPropertyAddressesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 50 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "sharedPropertyAddressGroups": {
      "groups": {
        "address": true,
        "propertyId": true,
        "members": {
          "id": true,
          "name": true,
          "relations": true
        }
      },
      "totalCount": true,
      "truncated": true,
      "hasMore": true
    }
  }
}
```
