<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPipelineItemCustomFieldOption

mutation · domain `pipelineItems` · requires the WRITE scope

Append ONE option to a DROPDOWN pipeline item custom field (id from listPipelineItemCustomFields). Never removes anything, unlike updatePipelineItemCustomField whose `options` replace the list; a label already there (any case) is kept as is. Returns the field with its options.

## Call

```ts
const result = await client.pipelineItems.addPipelineItemCustomFieldOption({ customFieldId: '<id>', label: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPipelineItemCustomFieldOptionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPipelineItemCustomFieldOptionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldId` | `ID!` | yes | — |
| `label` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemCustomFieldMutation": {
    "addOption": {
      "id": true,
      "name": true,
      "options": {
        "id": true,
        "label": true
      }
    }
  }
}
```
