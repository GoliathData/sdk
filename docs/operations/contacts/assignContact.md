<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# assignContact

mutation · domain `contacts` · requires the WRITE scope

Assign a teammate to contacts (get userId from listTeammates). role defaults to POINT_PERSON; pass PARTICIPANT for a secondary assignment. The removal twin is unassignContact. Async bulk job — returns a bulkTaskId to poll with getBulkTask.

## Call

```ts
const result = await client.contacts.assignContact({ contactIds: ['<text>'], userId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AssignContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AssignContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `userId` | `ID!` | yes | — |
| `role` | `ContactToUserMappingStatus` | no | POINT_PERSON |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "bulkAssignUsersOnContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
