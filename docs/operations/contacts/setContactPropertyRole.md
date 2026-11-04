<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactPropertyRole

mutation · domain `contacts` · requires the WRITE scope

The CONTACT_PROPERTY role ("Tenant") on a getContact properties row (its `id`, not the property's). roleId null clears it. An Only-one role moves off its previous holder.

## Call

```ts
const result = await client.contacts.setContactPropertyRole({ contactId: '<id>', contactPropertyId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetContactPropertyRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetContactPropertyRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `contactPropertyId` | `ID!` | yes | — |
| `roleId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "setContactPropertyRole": {
      "id": true,
      "properties": {
        "id": true,
        "propertyString": true,
        "type": true,
        "role": {
          "id": true,
          "name": true
        }
      }
    }
  }
}
```
