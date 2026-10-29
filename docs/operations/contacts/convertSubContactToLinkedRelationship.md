<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# convertSubContactToLinkedRelationship

mutation · domain `contacts` · requires the WRITE scope

Promote a relative (getContactConnections subContacts id) to its own contact, linked back as a related person; returns the link with `linkedContactId`. linkToExisting: true links the org's existing contact for the same person instead, and is refused when there is none.

## Call

```ts
const result = await client.contacts.convertSubContactToLinkedRelationship({ subContactId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ConvertSubContactToLinkedRelationshipMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ConvertSubContactToLinkedRelationshipMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `subContactId` | `String!` | yes | — |
| `linkToExisting` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "convertSubContactToLinkedRelationship": {
      "id": true,
      "linkedContactId": true
    }
  }
}
```
