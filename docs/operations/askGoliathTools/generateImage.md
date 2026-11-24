<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# generateImage

mutation · domain `askGoliathTools` · requires the WRITE scope

Draw an image from `prompt` (subject, style, colors; words that must appear go in double quotes) and save it to the key owner's My files as `name`.jpg. `shape`: square, landscape or portrait. `quality`: low, medium or high (high costs most). Only from inside one of their own Ask Goliath chat turns, so a key's own call is refused; a per-person hourly limit applies.

## Call

```ts
const result = await client.askGoliathTools.generateImage({ prompt: '<text>', name: '<text>', shape: '<text>', quality: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<GenerateImageMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GenerateImageMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `prompt` | `String!` | yes | — |
| `name` | `String!` | yes | — |
| `shape` | `String!` | yes | — |
| `quality` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "agentChatMutation": {
    "generateImage": true
  }
}
```
