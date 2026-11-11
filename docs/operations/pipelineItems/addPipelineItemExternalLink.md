<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPipelineItemExternalLink

mutation · domain `pipelineItems` · requires the WRITE scope

Add a titled URL to a pipeline item's Links card (getPipelineItem externalLinks). To change one, remove it and add it again.

## Call

```ts
const result = await client.pipelineItems.addPipelineItemExternalLink({ pipelineItemId: '<id>', title: '<text>', url: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPipelineItemExternalLinkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPipelineItemExternalLinkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `title` | `String!` | yes | — |
| `url` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "createPipelineItemExternalLink": {
      "id": true,
      "title": true,
      "url": true
    }
  }
}
```
