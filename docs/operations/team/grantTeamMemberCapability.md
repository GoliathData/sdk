<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# grantTeamMemberCapability

mutation · domain `team` · requires the ADMIN scope

Turn ONE permission on for a teammate, a switch in Manage permissions on their row. Off for a member unless granted: VIEW_ALL_CONTACTS, VIEW_ALL_DEALS, VIEW_ALL_PHONES (call and text from any team number), CONTRACTS_VIEW, CONTRACTS_MANAGE. On unless an admin turned them off (granting one gives it back): CAN_SKIPTRACE, CAN_EXPORT, CAN_WORKFLOW (run workflows), VIEW_TEAM_DIRECTORY (see who else is on the team), VIEW_TEAM_CALENDARS (see teammates' calendars on the Team calendar), VIEW_TEAM_CALLS_TEXTS (read teammates' calls and texts in the Team inbox; email only from mailboxes their owner shares), and the app sections CAN_USE_AUTOMATIONS (and workflow operations), CAN_USE_FILES, CAN_USE_MARKETPLACE, VIEW_ORGANIZATION_SETTINGS, CAN_USE_API_KEYS. Their role does not change: this is the answer to "give X access to Y" for a Member, never a promotion to Admin. userId comes from listTeamMembers. An Admin already holds every permission, so it changes nothing for one. Takes effect within a minute. Organization admins only; the person approves it on a card naming the teammate and the permission.

## Call

```ts
const result = await client.team.grantTeamMemberCapability({ userId: '<id>', capability: <OrganizationCapability> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<GrantTeamMemberCapabilityMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GrantTeamMemberCapabilityMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "grantTeamMemberCapability": {
      "id": true
    }
  }
}
```
