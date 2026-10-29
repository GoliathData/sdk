<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# submitFeedback

mutation · domain `askGoliath` · requires the WRITE scope

Send our team a BUG report, FEATURE_REQUEST or QUESTION as the key owner: a one-line `title`, the `message` (10+ characters) and optional `details`. It lands on our board (added to the organization's open card for the same problem, when there is one); keep the returned `ticket` name to refer to it.

## Call

```ts
const result = await client.askGoliath.submitFeedback({ kind: <ExternalFeedbackKind>, title: '<text>', message: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SubmitFeedbackMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SubmitFeedbackMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `kind` | `ExternalFeedbackKind!` | yes | — |
| `title` | `String!` | yes | — |
| `message` | `String!` | yes | — |
| `details` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "externalAgentChatMutation": {
    "submitFeedback": {
      "status": true,
      "ticket": {
        "ticket": true,
        "title": true,
        "stage": true
      },
      "otherOpenTickets": {
        "ticket": true,
        "title": true,
        "stage": true
      },
      "error": true
    }
  }
}
```
