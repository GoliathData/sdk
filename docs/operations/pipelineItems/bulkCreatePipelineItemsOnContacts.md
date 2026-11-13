<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# bulkCreatePipelineItemsOnContacts

mutation · domain `pipelineItems` · requires the WRITE scope

A new pipeline item per contact from a createPipelineItem `pipelineItem` template (the bulk bar's Add to pipeline). propertyAttachmentMode ALL attaches each contact's properties as the bulk bar does (default NONE); skipContactsWithPipelineItem skips contacts that have a pipeline item; autoNamePipelineItems titles each from its contact and property. Field ids: listPipelineItemCustomFields. A background task (`bulkTaskId`, getBulkTask). Every new pipeline item has a contact, so it wakes stage and contact workflows: it needs their yes; a card's counts.

## Call

```ts
const result = await client.pipelineItems.bulkCreatePipelineItemsOnContacts({ contactIds: ['<text>'], pipelineItem: <CreatePipelineItemInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BulkCreatePipelineItemsOnContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BulkCreatePipelineItemsOnContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `pipelineItem` | `CreatePipelineItemInput!` | yes | — |
| `propertyAttachmentMode` | `BulkPipelineItemPropertyAttachmentMode` | no | — |
| `skipContactsWithPipelineItem` | `Boolean` | no | — |
| `autoNamePipelineItems` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "bulkCreatePipelineItemsOnContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
