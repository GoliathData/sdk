<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# requestSignalsInMyCounties

mutation · domain `properties` · requires the WRITE scope

Ask for signal types that are not live yet in every county the org works, as a builder's "Request it" does; the 2-week promise starts now. context names what was being built (`workflowGroup:<id>`, `filter:<id>`).

## Call

```ts
const result = await client.properties.requestSignalsInMyCounties({ signalTypes: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RequestSignalsInMyCountiesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RequestSignalsInMyCountiesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `signalTypes` | `[String!]!` | yes | — |
| `context` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "coverageRequestMutation": {
    "requestFromBuilder": {
      "signalType": true,
      "status": true,
      "promised": true,
      "liveCounties": true,
      "totalCounties": true
    }
  }
}
```
