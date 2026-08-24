<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPropertyTags

mutation · domain `properties` · requires the WRITE scope

Add existing tag(s) (by tag id) to a property. Get tag ids from searchPropertyTags. Returns the property with its updated tag set.

## Call

```ts
const result = await client.properties.addPropertyTags({ propertyId: '<id>', tagIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPropertyTagsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPropertyTagsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyId` | `ID!` | yes | — |
| `tagIds` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "propertyMutation": {
    "addTagToProperty": {
      "id": true,
      "address": {
        "line1": true,
        "city": true,
        "state": true,
        "zip": true,
        "addressFull": true
      },
      "tags": {
        "id": true,
        "name": true,
        "folderId": true
      }
    }
  }
}
```
