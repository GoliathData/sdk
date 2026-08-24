<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createDealCustomField

mutation · domain `deals` · requires the WRITE scope

Create a custom-field DEFINITION on a deal pipeline you OWN (pipelineId from listPipelines): name + type (TEXT | NUMBER | DOLLAR | DATE | LINK | DROPDOWN; `options` required and non-empty for DROPDOWN; `allowMultiple`/`defaultValue` optional). Applied synchronously. Deal custom fields are per-pipeline, and a shared pipeline cannot be modified. Returns the pipeline's field set; read the new id back by matching the name (or use listDealCustomFields), then write values via the deal's customFieldValues input on createDeal / updateDeal.

## Call

```ts
const result = await client.deals.createDealCustomField({ input: <CreateDealCustomFieldInput>, pipelineId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateDealCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateDealCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `CreateDealCustomFieldInput!` | yes | — |
| `pipelineId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealCustomFieldMutation": {
    "createCustomField": {
      "getPipelineCustomFields": {
        "id": true,
        "name": true,
        "type": true
      }
    }
  }
}
```
