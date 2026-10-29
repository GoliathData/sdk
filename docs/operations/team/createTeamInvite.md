<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createTeamInvite

mutation · domain `team` · requires the ADMIN scope

Create a team-member invitation. userType: ADMIN or MEMBER (default MEMBER). Either emails (each address is EMAILED its own single-use invite: say so) or isPermanent: true, the reusable link, which emails nobody and invites as MEMBER (a live older link is returned with its own role). No email-less one-time link exists. Never paste an acceptUrl in chat (it goes by email); show the permanent link only on request.

## Call

```ts
const result = await client.team.createTeamInvite(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateTeamInviteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateTeamInviteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userType` | `OrganizationToUserMappingType` | no | — |
| `emails` | `[String!]` | no | — |
| `isPermanent` | `Boolean` | no | — |
| `phoneRequired` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "createInvitationLink": {
      "id": true,
      "acceptUrl": true,
      "isAlive": true,
      "isPermanent": true,
      "phoneRequired": true,
      "userType": true,
      "email": true,
      "createdAt": true
    }
  }
}
```
