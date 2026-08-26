<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# applyTaskSet

mutation · domain `workflows` · requires the WRITE scope

Run a whole TASK_SET against a contact: creates every step as a real task in one call, all assigned to the acting user and linked to the contact (and any dealIds). Each step’s due date is ITS OWN relative offset resolved from one shared “now” and snapped to its own preferred time-of-day — the referenced template’s own timing is ignored inside a set. Steps run in due order and stop at the FIRST failure, KEEPING what was already created: the payload then carries the tasks that landed plus failedStep { index, taskTemplateId, message }. It does NOT error for a step failure, so always read failedStep before reporting success. Rejects a template that is not type TASK_SET. Get set ids from listContentTemplates(type: TASK_SET).

## Call

```ts
const result = await client.workflows.applyTaskSet({ templateId: '<id>', contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ApplyTaskSetMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ApplyTaskSetMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `templateId` | `ID!` | yes | — |
| `contactId` | `ID!` | yes | — |
| `dealIds` | `[ID!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "applyTaskSet": {
      "tasks": {
        "id": true,
        "title": true,
        "description": true,
        "endDate": true,
        "completedAt": true
      },
      "failedStep": {
        "index": true,
        "taskTemplateId": true,
        "message": true
      }
    }
  }
}
```
