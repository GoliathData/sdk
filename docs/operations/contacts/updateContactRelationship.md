<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateContactRelationship

mutation · domain `contacts` · requires the WRITE scope

Set the relation label and note on a related person (getContactConnections linkedRelationships id). Both are written, so an omitted one is cleared: send the current note to keep it.

## Call

```ts
const result = await client.contacts.updateContactRelationship({ relationshipId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateContactRelationshipMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateContactRelationshipMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `relationshipId` | `ID!` | yes | — |
| `relation` | `String` | no | — |
| `note` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "updateContactRelationship": {
      "id": true,
      "relation": true,
      "note": true
    }
  }
}
```
