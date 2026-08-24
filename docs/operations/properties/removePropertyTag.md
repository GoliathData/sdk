<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removePropertyTag

mutation · domain `properties` · requires the WRITE scope

Remove one tag (by tag id) from a property. Returns the property with its updated tag set.

## Call

```ts
const result = await client.properties.removePropertyTag({ propertyId: '<id>', tagId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemovePropertyTagMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemovePropertyTagMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyId` | `ID!` | yes | — |
| `tagId` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "propertyMutation": {
    "removeTagFromProperty": {
      "id": true,
      "tags": {
        "id": true,
        "name": true,
        "folderId": true
      }
    }
  }
}
```
