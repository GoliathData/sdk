<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createPipeline

mutation · domain `deals` · requires the WRITE scope

Create a deal pipeline in your organization. Requires a title; optionally a description and an ordered list of initial stages (each: name, plus optional description, order, isTerminal, terminalType WON|LOST|NEUTRAL, winProbability 0-100). Returns the created pipeline: its id, name, description and stages in order.

## Call

```ts
const result = await client.deals.createPipeline({ title: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreatePipelineMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreatePipelineMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `title` | `String!` | yes | — |
| `description` | `String` | no | — |
| `stages` | `[PipelineStageCreateInput!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "createPipeline": {
      "id": true,
      "name": true,
      "description": true,
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
