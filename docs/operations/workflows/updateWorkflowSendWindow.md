<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateWorkflowSendWindow

mutation · domain `workflows` · requires the WRITE scope

Set the workflow's SENDING SCHEDULE, the hours its messages may go out. It belongs to the workflow (group id), not a version, so it applies to the LIVE workflow at once: every run reads it on its next send, whichever version it started on, with no draft or promote. A run already waiting for the old schedule's next opening keeps that wait and re-checks when it wakes. `sendWindow` is {timezone, days:[{day:"MON".."SUN", intervals:[{start:{hour,minute}, end:{hour,minute}}]}], timezoneMode?}, with the rules updateWorkflowGraph gives under SEND WINDOW; an absent day is CLOSED, and a window naming no days or hours is refused. null clears it to the platform default (Mon–Fri 09:00–19:00 org time). Read it from getWorkflow.sendWindow. The ONLY way to change it: updateWorkflowGraph refuses a graph carrying a different one.

## Call

```ts
const result = await client.workflows.updateWorkflowSendWindow({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateWorkflowSendWindowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateWorkflowSendWindowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `sendWindow` | `JSON` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "updateWorkflowGroupSendWindow": {
      "id": true,
      "name": true
    }
  }
}
```
