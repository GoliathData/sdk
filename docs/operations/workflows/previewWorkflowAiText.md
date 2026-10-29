<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewWorkflowAiText

mutation · domain `workflows` · requires the WRITE scope

Preview what an AI text step with this systemPrompt would write to 1 to 5 contacts, through the real generation path. Sends nothing and saves nothing; one model call per contact. Each result has generatedText, or a declineReason (the prompt's own rules said not to text them, a valid no-send), or an errorMessage.

## Call

```ts
const result = await client.workflows.previewWorkflowAiText({ systemPrompt: '<text>', contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PreviewWorkflowAiTextMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewWorkflowAiTextMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `systemPrompt` | `String!` | yes | — |
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "simulateWorkflowTextGeneration": {
      "contactId": true,
      "contactName": true,
      "generatedText": true,
      "declineReason": true,
      "errorMessage": true
    }
  }
}
```
