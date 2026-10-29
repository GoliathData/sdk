<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# linkContactAsRelatedPerson

mutation · domain `contacts` · requires the WRITE scope

Connect linkedContactId to parentContactId as a related person, with an optional relation label. A pair already connected is refused ("already linked"). Writes the connection only.

## Call

```ts
const result = await client.contacts.linkContactAsRelatedPerson({ parentContactId: '<id>', linkedContactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<LinkContactAsRelatedPersonMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `LinkContactAsRelatedPersonMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `parentContactId` | `ID!` | yes | — |
| `linkedContactId` | `ID!` | yes | — |
| `relation` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "linkContactAsRelatedPerson": {
      "id": true,
      "parentContactId": true,
      "linkedContactId": true,
      "relation": true
    }
  }
}
```
