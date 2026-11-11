<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updatePipelineStage

mutation · domain `pipelineItems` · requires the WRITE scope

Update one pipeline stage (by stageId from listPipelineStages) — rename, change description, toggle isTerminal / terminalType (WON|LOST|NEUTRAL), or set winProbability (0-100). Only the fields you pass change, except that a new terminalType sent without winProbability also sets it to the outcome's (WON 100, LOST or NEUTRAL 0), and isTerminal false without a terminalType clears it. Owner-only: the stage's pipeline must be OWNED by your organization.

## Call

```ts
const result = await client.pipelineItems.updatePipelineStage({ stageId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdatePipelineStageMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdatePipelineStageMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `stageId` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `description` | `String` | no | — |
| `isTerminal` | `Boolean` | no | — |
| `terminalType` | `PipelineStageTerminalType` | no | — |
| `winProbability` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "updatePipelineStage": {
      "id": true,
      "name": true,
      "order": true,
      "description": true,
      "isTerminal": true,
      "terminalType": true,
      "winProbability": true
    }
  }
}
```
