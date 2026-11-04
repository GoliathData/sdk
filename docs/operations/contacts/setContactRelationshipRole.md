<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactRelationshipRole

mutation · domain `contacts` · requires the WRITE scope

The RELATIONSHIP role (Spouse) of a related person's link to their main contact; `contactId` is the related person (getContact relatedPeople). roleId null clears the role AND the relation text. An Only-one role moves off its previous holder.

## Call

```ts
const result = await client.contacts.setContactRelationshipRole({ contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetContactRelationshipRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetContactRelationshipRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `roleId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "setContactRelationshipRole": {
      "id": true,
      "relationshipRole": {
        "id": true,
        "name": true
      },
      "relatedTo": {
        "mainContactId": true,
        "mainContactName": true,
        "relation": true
      }
    }
  }
}
```
