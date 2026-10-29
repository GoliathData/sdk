<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setEmployeeDefaultAssignees

mutation · domain `employees` · requires the WRITE scope

Who becomes the owner of a contact an AI employee works when the contact has no owner. `mode` decides what `assigneeUserIds` holds (teammate user ids, listTeamMembers): TEAM_RANDOM (the default, any active teammate), NONE (nobody) and SAME_AS_NEW_LEADS (the organization's lead routing) take `[]`; SPECIFIC_USER exactly one; ROUND_ROBIN_LIST two or more, in rotation order. A mismatched pair is refused.

## Call

```ts
const result = await client.employees.setEmployeeDefaultAssignees({ employeeId: '<id>', mode: <ContactAgentDefaultAssigneeMode>, assigneeUserIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetEmployeeDefaultAssigneesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetEmployeeDefaultAssigneesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `mode` | `ContactAgentDefaultAssigneeMode!` | yes | — |
| `assigneeUserIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setContactAgentDefaultAssignees": {
      "id": true,
      "defaultAssignees": {
        "mode": true,
        "assigneeUserIds": true
      },
      "updatedAt": true
    }
  }
}
```
