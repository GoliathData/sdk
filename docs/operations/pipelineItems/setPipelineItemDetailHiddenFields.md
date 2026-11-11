<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPipelineItemDetailHiddenFields

mutation · domain `pipelineItems` · requires the WRITE scope

Hide fields from one pipeline's pipeline item sheet and create/edit form, for everyone: `hiddenFieldKeys` REPLACES the hidden set (getPipelineLayout first; an empty list shows everything). Keys are `native:team|closeDate|dealValue|commission` or `custom:<fieldId>`; Stage is never hidden and an unknown key is dropped. Hiding keeps every value.

## Call

```ts
const result = await client.pipelineItems.setPipelineItemDetailHiddenFields({ pipelineId: '<id>', hiddenFieldKeys: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPipelineItemDetailHiddenFieldsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPipelineItemDetailHiddenFieldsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `hiddenFieldKeys` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemCustomFieldMutation": {
    "updatePipelineItemDetailFieldVisibility": {
      "id": true,
      "hiddenDetailFieldKeys": true
    }
  }
}
```
