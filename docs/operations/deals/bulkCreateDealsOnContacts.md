<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# bulkCreateDealsOnContacts

mutation · domain `deals` · requires the WRITE scope

A new deal per contact from a createDeal `deal` template (the bulk bar's Add to pipeline). propertyAttachmentMode ALL attaches each contact's properties as the bulk bar does (default NONE); skipContactsWithDeal skips contacts that have a deal; autoNameDeals titles each from its contact and property. A background task (`bulkTaskId`, getBulkTask). Every new deal has a contact, so it wakes stage and contact workflows: it needs their yes; a card's counts.

## Call

```ts
const result = await client.deals.bulkCreateDealsOnContacts({ contactIds: ['<text>'], deal: <CreatePipelineItemInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BulkCreateDealsOnContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BulkCreateDealsOnContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `deal` | `CreatePipelineItemInput!` | yes | — |
| `propertyAttachmentMode` | `BulkPipelineItemPropertyAttachmentMode` | no | — |
| `skipContactsWithDeal` | `Boolean` | no | — |
| `autoNameDeals` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "bulkCreateDealsOnContacts": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
