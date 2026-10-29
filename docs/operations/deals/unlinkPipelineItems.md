<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unlinkPipelineItems

mutation · domain `deals` · requires the WRITE scope

Remove a deal link (getDeal linkedItems id).

## Call

```ts
const result = await client.deals.unlinkPipelineItems({ linkId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnlinkPipelineItemsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnlinkPipelineItemsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `linkId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "unlinkPipelineItems": true
  }
}
```
