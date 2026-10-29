<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createPropertyList

mutation · domain `properties` · requires the WRITE scope

Get or create an org-wide PROPERTY list by exact name (synchronous). Returns `list { id, name }` and `created`: say you made one only when `created` is true, and use the returned `name` (a plain tag holding the name adds a number).

## Call

```ts
const result = await client.properties.createPropertyList({ listName: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreatePropertyListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreatePropertyListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `listName` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "createPropertyList": {
      "created": true,
      "list": {
        "id": true,
        "name": true
      }
    }
  }
}
```
