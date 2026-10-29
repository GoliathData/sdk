<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeTeamMember

mutation · domain `team` · requires the ADMIN scope

Remove a teammate from the team, the team page's Remove from team. It is a SUSPENSION, not a delete: they lose access at once and stop using a seat, but stay on listTeamMembers as SUSPENDED and restoreTeamMember brings them back. On the way out their open tasks go to YOU (the key owner), their contacts' point-person seats are released (a contact left with no agent gets you), and they are taken out of the workflow steps and lead-routing forms that named them. Restoring does NOT hand any of that back; the person approves it on a card. Optional reason is kept on the member. You cannot remove yourself. Organization admins only. The result reports what the handover did: handover (NOT_NEEDED | REASSIGNED | REMOVED | FAILED), reassignedTaskCount, releasedContactSeatCount, handedOverContactCount, and openWorkTruncated / openWorkFailed when some work is still theirs; tell the user those.

## Call

```ts
const result = await client.team.removeTeamMember({ userId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveTeamMemberMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveTeamMemberMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |
| `reason` | `String` | no | — |

## Gateway notes

- The organization is derived from your API key — do not send an `organizationId` variable (any value sent is ignored).
- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "suspendOrganizationMemberWithImpact": {
      "userId": true,
      "handover": true,
      "handoverSourceCount": true,
      "intactSourceCount": true,
      "retainedPartnerGrantCount": true,
      "reassignedTaskCount": true,
      "releasedContactSeatCount": true,
      "handedOverContactCount": true,
      "openWorkTruncated": true,
      "openWorkFailed": true
    }
  }
}
```
