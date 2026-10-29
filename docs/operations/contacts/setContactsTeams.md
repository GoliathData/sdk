<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactsTeams

mutation · domain `contacts` · requires the WRITE scope

Put contacts on teams (addTeamIds, from listTeams) and take them off (removeTeamIds); replaceExisting makes addTeamIds the exact set. addTeamIds is required: pass [] to only take them off. A bulk task (bulkTaskId, getBulkTask).

## Call

```ts
const result = await client.contacts.setContactsTeams({ contactIds: ['<text>'], addTeamIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetContactsTeamsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetContactsTeamsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `addTeamIds` | `[ID!]!` | yes | — |
| `removeTeamIds` | `[ID!]` | no | — |
| `replaceExisting` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "bulkAssignUserGroupsOnContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
