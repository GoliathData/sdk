<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# applyTaskTemplate

mutation · domain `workflows` · requires the WRITE scope

Run a TASK template against a contact: creates one task, assigned to the acting user, linked to the contact (and any dealIds). Title/description render the template's merge fields + spintax against that contact, and the RELATIVE dueOffset resolves from now, snapped to its preferred time-of-day. Rejects a template not of type TASK. overrides { title?, description?, endDate?, timezone?, taskType?, autoCompleteOnNoteAdded?, autoCompleteOnReassignment? } replace what the template would produce for this one apply: an endDate override skips the relative due date, and what is not overridable (origin, supporting-file links, the contact/deal links) still applies. Send timezone with any endDate override: the task is stored and read back in it, and without it keeps the TEMPLATE's zone, so an instant chosen in one zone can render as a different day. Template ids: listContentTemplates(type: TASK). A whole saved SOP is applyTaskSet, not this per step.

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
| `overrides` | `ApplyTaskTemplateOverridesInput` | no | — |

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
