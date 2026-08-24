<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyProfile

query · domain `account` · requires the READ scope

Fetch the key owner's own profile — name, email, and phone number. Use before updateMyProfile to read the current values (that mutation requires all of firstName, lastName, and phoneNumber together).

## Call

```ts
const result = await client.account.getMyProfile()
// → Promise<GetMyProfileQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMyProfileQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "firstName": true,
    "lastName": true,
    "email": true,
    "phoneNumber": true
  }
}
```
