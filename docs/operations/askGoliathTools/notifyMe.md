<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# notifyMe

mutation · domain `askGoliathTools` · requires the WRITE scope

Send the key owner themself, and no one else, an in-app notification, also in their five-minute email digest: `text` (up to 1,000 characters) under `title` (default "Ask Goliath"). Never a text message; a per-person hourly limit applies.

## Call

```ts
const result = await client.askGoliathTools.notifyMe({ text: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<NotifyMeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `NotifyMeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `text` | `String!` | yes | — |
| `title` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentChatMutation": {
    "notifyMe": true
  }
}
```
