<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# clearChannelSuppression

mutation · domain `communications` · requires the WRITE scope

Lift an organization-wide opt-out (suppressChannel's undo): the value can be texted, called or emailed again on that `medium`, on every contact carrying it. Only on the person's own word: an opt-out is the recipient's, and lifting it without their consent breaks the law the opt-out exists for. Idempotent; a value that is not suppressed is a no-op. Returns organizationId, normalizedValue, medium.

## Call

```ts
const result = await client.communications.clearChannelSuppression({ value: '<text>', medium: <SuppressionMedium> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ClearChannelSuppressionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ClearChannelSuppressionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `value` | `String!` | yes | — |
| `medium` | `SuppressionMedium!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "clearSuppressionChannel": {
      "organizationId": true,
      "normalizedValue": true,
      "medium": true
    }
  }
}
```
