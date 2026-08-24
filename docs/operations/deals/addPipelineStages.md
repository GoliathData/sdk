<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPipelineStages

mutation · domain `deals` · requires the WRITE scope

Append one or more stages to a pipeline (by pipelineId). Each stage: name (required), plus optional description, order, isTerminal, terminalType (WON|LOST|NEUTRAL), winProbability (0-100). Owner-only: the pipeline must be OWNED by your organization. Returns the pipeline with its full, ordered stage list.

## Call

```ts
const result = await client.deals.addPipelineStages({ pipelineId: '<id>', stages: [<DealStageCreateInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPipelineStagesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPipelineStagesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `stages` | `[DealStageCreateInput!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "createDealStages": {
      "id": true,
      "name": true,
      "stages": {
        "id": true,
        "name": true,
        "order": true,
        "isTerminal": true,
        "terminalType": true,
        "winProbability": true
      }
    }
  }
}
```
