<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# revokeTeamMemberCapability

mutation · domain `team` · requires the ADMIN scope

Turn ONE permission off for a teammate, the same switch and the same capabilities as grantTeamMemberCapability, which turns it back on. Their role does not change. An Admin holds every permission whatever is stored, so read getTeamMemberCapabilities first and never offer one for an Admin (their role changes first). Organization admins only; the person approves it on a card naming the teammate and the permission.

## Call

```ts
const result = await client.team.revokeTeamMemberCapability({ userId: '<id>', capability: <OrganizationCapability> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RevokeTeamMemberCapabilityMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RevokeTeamMemberCapabilityMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |
| `capability` | `OrganizationCapability!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamMutation": {
    "revokeTeamMemberCapability": {
      "id": true
    }
  }
}
```
