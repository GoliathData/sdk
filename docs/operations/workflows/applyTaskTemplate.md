<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# applyTaskTemplate

mutation · domain `workflows` · requires the WRITE scope

Run a TASK template against a contact: creates one real task from the template, assigned to the acting user, linked to the contact (and any dealIds). Title/description render the template’s merge fields + spintax against that contact, and the RELATIVE dueOffset resolves from now, snapped to the template’s preferred time-of-day. Rejects a template that is not type TASK. This is how a saved checklist/SOP gets instantiated for a customer — apply each step template in order. Get template ids from listContentTemplates(type: TASK).

## Call

```ts
const result = await client.workflows.applyTaskTemplate({ templateId: '<id>', contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ApplyTaskTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ApplyTaskTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "applyTaskTemplate": {
      "id": true,
      "title": true,
      "description": true,
      "endDate": true,
      "completedAt": true
    }
  }
}
```
