<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyProfile

query · domain `account` · requires the READ scope

Fetch the key owner's own profile — id, name, email, phone number, profile picture URL — plus WHO THEY ARE IN THE ORGANIZATION and WHICH CLOCK THEY READ ON. organizationRole is their role (ADMIN | MEMBER | ISA): every ADMIN-scoped operation requires the key owner to be an ADMIN, so CHECK THIS BEFORE attempting one and, when it is not ADMIN, say that a team admin has to do it instead of relaying a refusal. organizationMembershipStatus is ACTIVE or SUSPENDED. organization carries the org's id, name and its own timezone (null = never set, NOT UTC). timezone is the zone the key owner CHOSE (null = never chosen, again not UTC); resolvedTimezone is the zone their times are ACTUALLY rendered on after the fallbacks (their availability schedule, then the organization's) — use resolvedTimezone whenever you state or interpret a time for them, and never assume UTC from a null. Permissions are a separate read: getMyCapabilities. Use this before updateMyProfile to read the current values (that mutation requires all of firstName, lastName, and phoneNumber together).

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
    "phoneNumber": true,
    "profilePictureUrl": true,
    "organizationRole": true,
    "organizationMembershipStatus": true,
    "timezone": true,
    "resolvedTimezone": true,
    "organization": {
      "id": true,
      "name": true,
      "timezone": true
    }
  }
}
```
