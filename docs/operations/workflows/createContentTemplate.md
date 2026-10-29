<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContentTemplate

mutation · domain `workflows` · requires the WRITE scope

Create a reusable template. type is EMAIL | SMS | NOTE | TASK | TASK_SET. The nested input carries name, bodyContent (merge fields and [a|b] spintax allowed) and subjectContent (email only). Its merge fields are the vocabulary of WHATEVER NODE renders it, since a template has no domain of its own: from a CONTACT node or applyTaskTemplate, the CONTACT vocabulary listed under updateWorkflowGraph ({{firstName}}, {{contactPropertyAddress}}, {{userFirstName}}, …); from an APPOINTMENT text node, that PLUS the appointment fields ({{appointmentStartTime}}, …). Quote merge fields to the person as [First name], not raw keys, unless they check spelling. Keys match EXACTLY and case-sensitively, with no dotted or snake_case form: {{merge_fields}} and {{contact.firstName}} send the literal braces. TASK (the checklist/SOP step under Automations → Templates) takes input.taskConfig; bodyContent holds the task description and the due date is RELATIVE, resolved when applied. TASK_SET is a whole SOP: bodyContent "", no taskConfig, and input.taskSetSteps of 1–25 steps (their rules are on the input shape), applied in one call with applyTaskSet.

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
