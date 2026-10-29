<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderDealCustomFields

mutation · domain `deals` · requires the WRITE scope

Set the display order of one pipeline's custom fields: pass every field id of that pipeline (listDealCustomFields), first = top. An id from another pipeline is refused. Presentation only: no value, filter or workflow changes.

## Call

```ts
const result = await client.deals.reorderDealCustomFields({ pipelineId: '<id>', customFieldIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderDealCustomFieldsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderDealCustomFieldsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `customFieldIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealCustomFieldMutation": {
    "reorderCustomFields": {
      "getPipelineCustomFields": {
        "id": true,
        "name": true,
        "displayOrder": true
      }
    }
  }
}
```
