<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateMyProfile

mutation · domain `account` · requires the WRITE scope

Update the key owner's own profile. All three of firstName, lastName, and phoneNumber are required together (send the current values for the ones you're not changing — read them with getMyProfile). The phone number is normalized and must be unique across users; email is not editable here (parity with the app). Returns the updated profile.

## Call

```ts
const result = await client.account.updateMyProfile({ firstName: '<text>', lastName: '<text>', phoneNumber: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateMyProfileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateMyProfileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `firstName` | `String!` | yes | — |
| `lastName` | `String!` | yes | — |
| `phoneNumber` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "users": {
    "updateUserProfile": {
      "id": true,
      "firstName": true,
      "lastName": true,
      "email": true,
      "phoneNumber": true
    }
  }
}
```
