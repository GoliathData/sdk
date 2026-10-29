<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeContactAi

mutation · domain `contacts` · requires the WRITE scope

Turn AI back on for one contact (a contact with no pause is a no-op); its AI employees can text and email it again. No card when AI is already on or a person paused it; lifting a pause an AI employee, a workflow or a named job set asks on the card (approvedLive).

## Call

```ts
const result = await client.contacts.resumeContactAi({ contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeContactAiMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeContactAiMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "resumeContactAi": {
      "id": true
    }
  }
}
```
