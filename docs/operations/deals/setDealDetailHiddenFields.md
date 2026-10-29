<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setDealDetailHiddenFields

mutation · domain `deals` · requires the WRITE scope

Hide fields from one pipeline's deal sheet and create/edit form, for everyone: `hiddenFieldKeys` REPLACES the hidden set (getDealPipelineLayout first; an empty list shows everything). Keys are `native:team|closeDate|dealValue|commission` or `custom:<fieldId>`; Stage is never hidden and an unknown key is dropped. Hiding keeps every value.

## Call

```ts
const result = await client.deals.setDealDetailHiddenFields({ pipelineId: '<id>', hiddenFieldKeys: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetDealDetailHiddenFieldsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetDealDetailHiddenFieldsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "dealCustomFieldMutation": {
    "updateDealDetailFieldVisibility": {
      "id": true,
      "hiddenDetailFieldKeys": true
    }
  }
}
```
