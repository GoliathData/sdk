<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createPipeline

mutation · domain `deals` · requires the WRITE scope

Create a deal pipeline in your organization. Requires a title; optionally a description and an ordered list of initial stages (each: name, plus optional description, order, isTerminal, terminalType WON|LOST|NEUTRAL, winProbability 0-100). Returns your full pipeline list including the new one. To get the new id reliably, call listPipelines FIRST and diff: the created pipeline is the one whose id was not in the prior list (names are not unique and the list is not creation-ordered — never match by name alone or by position). If concurrent creates from your org are possible, more than one new id may appear — disambiguate by matching your submitted title among the NEW ids only, and use a distinct title per concurrent call.

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
| `stages` | `[DealStageCreateInput!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "createDealPipeline": {
      "id": true,
      "myPipelines": {
        "id": true,
        "name": true,
        "description": true,
        "dealsCount": true
      }
    }
  }
}
```
