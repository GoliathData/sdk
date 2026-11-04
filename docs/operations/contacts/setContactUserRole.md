<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactUserRole

mutation · domain `contacts` · requires the WRITE scope

The USER role a teammate on the contact plays (getContact participants); the Agent stays the Agent. roleId null clears it. An Only-one role moves off its previous holder.

## Call

```ts
const result = await client.contacts.setContactUserRole({ contactId: '<id>', userId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetContactUserRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetContactUserRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `userId` | `ID!` | yes | — |
| `roleId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "setContactUserRole": {
      "id": true,
      "participants": {
        "status": true,
        "role": {
          "id": true,
          "name": true
        },
        "user": {
          "id": true,
          "firstName": true,
          "lastName": true
        }
      }
    }
  }
}
```
