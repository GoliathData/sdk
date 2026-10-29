<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# resumeContactsAi

mutation · domain `contacts` · requires the WRITE scope

resumeContactAi for many contacts, as a bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.

## Call

```ts
const result = await client.contacts.resumeContactsAi({ contactIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ResumeContactsAiMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ResumeContactsAiMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "resumeContactsAi": {
      "bulkTaskId": true
    }
  }
}
```
