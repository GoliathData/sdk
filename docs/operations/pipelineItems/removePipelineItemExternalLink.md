<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removePipelineItemExternalLink

mutation · domain `pipelineItems` · requires the WRITE scope

Remove a pipeline item link.

## Call

```ts
const result = await client.pipelineItems.removePipelineItemExternalLink({ pipelineItemId: '<id>', linkId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemovePipelineItemExternalLinkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemovePipelineItemExternalLinkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `linkId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "deletePipelineItemExternalLink": {
      "id": true,
      "externalLinks": {
        "id": true,
        "title": true,
        "url": true
      }
    }
  }
}
```
