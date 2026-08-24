<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deletePipelineStage

mutation · domain `deals` · requires the WRITE scope

Delete a single pipeline stage (owner-only). Pass a dependencyResolution from getDeletionImpact (targetKind DEAL_STAGE): its impactVersion plus a replacement stage for any deals currently on the stage.

## Call

```ts
const result = await client.deals.deletePipelineStage({ stageId: '<id>', dependencyResolution: <DependencyResolutionInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeletePipelineStageMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeletePipelineStageMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `stageId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "deleteDealStage": {
      "id": true
    }
  }
}
```
