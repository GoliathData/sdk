<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContentTemplate

mutation · domain `workflows` · requires the WRITE scope

Create a reusable template. type is EMAIL | SMS | NOTE | TASK | TASK_SET. The nested input carries name, bodyContent (may include {{merge_fields}} and [a|b] spintax), and subjectContent (email only). TASK templates are the reusable checklist/SOP step the app shows under Automations → Templates: set type: TASK and pass input.taskConfig { title, taskType?, dueOffset { amount, unit }, preferredTimeOfDay { hour, minute, timezone }, autoCompleteOnNoteAdded?, autoCompleteOnReassignment? } — bodyContent holds the task description and the due date is RELATIVE, resolved when the template is applied. TASK_SET is the whole SOP as one saved thing: set type: TASK_SET, leave bodyContent empty and taskConfig unset, and pass input.taskSetSteps [{ taskTemplateId, dueOffset { amount, unit }, preferredTimeOfDay { hour, minute, timezone } }] (1–25 steps, each naming an existing TASK template; a step’s timing WINS over that template’s own, the same template may repeat, and a set may not contain a set). Apply the whole thing in one call with applyTaskSet.

## Call

```ts
const result = await client.workflows.createContentTemplate({ input: <CreateContentTemplateInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateContentTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateContentTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreateContentTemplateInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "createContentTemplate": {
      "id": true,
      "name": true,
      "type": true,
      "folderId": true,
      "taskSetSteps": {
        "id": true,
        "taskTemplate": {
          "id": true,
          "name": true
        },
        "dueOffset": {
          "amount": true,
          "unit": true
        },
        "preferredTimeOfDay": {
          "hour": true,
          "minute": true,
          "timezone": true
        }
      }
    }
  }
}
```
