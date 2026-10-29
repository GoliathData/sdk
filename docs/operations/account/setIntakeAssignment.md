<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setIntakeAssignment

mutation · domain `account` · requires the ADMIN scope

Replace who gets the contacts an owner's inbound traffic creates: assigneeUserIds (in order; 2+ rotate), participants, teams, tags, AI employees attached (agentAssigneeIds) and workflows fired (workflowGroupIds). owner is { kind, id }: ORG (the org id, the default), LINE (a phone line), META_PAGE (a Page id) or WORKFLOW (an EVENT workflow group). Send the whole policy (read it first: getPhoneRouting, getLineIntakeAssignments, getMetaPageIntakeAssignments, getWorkflowIntakeAssignment). A WORKFLOW owner takes no AI employees or workflows: send both []. Admins only.

## Call

```ts
const result = await client.account.setIntakeAssignment({ owner: <AssignmentPolicyOwnerInput>, assigneeUserIds: ['<id>'], participantUserIds: ['<id>'], teamIds: ['<id>'], tags: ['<text>'], agentAssigneeIds: ['<id>'], workflowGroupIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetIntakeAssignmentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetIntakeAssignmentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `owner` | `AssignmentPolicyOwnerInput!` | yes | — |
| `assigneeUserIds` | `[ID!]!` | yes | — |
| `participantUserIds` | `[ID!]!` | yes | — |
| `teamIds` | `[ID!]!` | yes | — |
| `tags` | `[String!]!` | yes | — |
| `agentAssigneeIds` | `[ID!]!` | yes | — |
| `workflowGroupIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "assignmentPolicyMutation": {
    "set": {
      "id": true,
      "assigneeUserIds": true,
      "agentAssigneeIds": true,
      "workflowGroupIds": true
    }
  }
}
```
