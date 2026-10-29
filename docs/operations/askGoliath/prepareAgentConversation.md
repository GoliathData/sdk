<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# prepareAgentConversation

mutation · domain `askGoliath` · requires the WRITE scope

A voice assistant warming Ask Goliath up while the person is still speaking, before startAgentConversation with `spoken`. Opens no chat.

## Call

```ts
const result = await client.askGoliath.prepareAgentConversation(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<PrepareAgentConversationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PrepareAgentConversationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "externalAgentChatMutation": {
    "prepareAgentConversation": true
  }
}
```
