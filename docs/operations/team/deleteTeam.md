<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteTeam

mutation · domain `team` · requires the ADMIN scope

Delete a team for good. Refused while workflows, forms or filters still use it: pass getDeletionImpact's dependencyResolution (targetKind USER_GROUP). Organization admins only.

## Call

```ts
const result = await client.team.deleteTeam({ teamId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteTeamMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteTeamMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `teamId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "userGroupMutation": {
    "delete": true
  }
}
```
