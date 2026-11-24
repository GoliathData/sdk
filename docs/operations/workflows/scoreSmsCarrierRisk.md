<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# scoreSmsCarrierRisk

query · domain `workflows` · requires the READ scope

Check draft text messages for carrier-filter risk before they go in a workflow or a send, as the publish check scores them: each body's `score`, `band` (low, medium, high), whether publish would refuse it (`wouldBlockPublish`), the `reasons`, and the `phrases` pushing it toward a block. Rewrite against the phrases and score again: a reworded message that keeps them scores the same. `brandName` is the sender's business name, which is not counted against it. Reads and writes nothing.

## Call

```ts
const result = await client.workflows.scoreSmsCarrierRisk({ bodies: ['<text>'] })
// → Promise<ScoreSmsCarrierRiskQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ScoreSmsCarrierRiskQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `bodies` | `[String!]!` | yes | — |
| `brandName` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "smsCarrierRiskScores": {
      "body": true,
      "score": true,
      "band": true,
      "wouldBlockPublish": true,
      "reasons": true,
      "phrases": true
    }
  }
}
```
