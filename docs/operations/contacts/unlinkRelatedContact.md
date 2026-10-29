<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unlinkRelatedContact

mutation · domain `contacts` · requires the WRITE scope

Disconnect a related person (linkedRelationships id), for good. Both contacts stay.

## Call

```ts
const result = await client.contacts.unlinkRelatedContact({ relationshipId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnlinkRelatedContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnlinkRelatedContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `relationshipId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "unlinkRelatedContact": true
  }
}
```
