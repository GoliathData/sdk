<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# contactTagUsage

query · domain `contacts` · requires the READ scope

Free-form tags, least-used first: contactCount (visible, unarchived), orgContactCount (org, +archived; null w/o view-all: 0 proves nothing), dependents. maxContactCount 0 = unused (view-all). filterTree: MATCHING contacts per tag, carried tags first, no org count/dependents. Never countContacts per tag; getDeletionImpact before deleting.

## Call

```ts
const result = await client.contacts.contactTagUsage()
// → Promise<ContactTagUsageQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ContactTagUsageQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 50 |
| `offset` | `Int` | no | 0 |
| `maxContactCount` | `Int` | no | — |
| `filterTree` | `JSON` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contactTagUsage": {
      "tags": {
        "id": true,
        "name": true,
        "isEditable": true,
        "contactCount": true,
        "orgContactCount": true,
        "dependents": {
          "groupKind": true,
          "count": true
        }
      },
      "totalCount": true,
      "hasMore": true
    }
  }
}
```
