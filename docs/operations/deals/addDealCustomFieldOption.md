<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addDealCustomFieldOption

mutation · domain `deals` · requires the WRITE scope

Append ONE option to a DROPDOWN deal custom field (id from listDealCustomFields). Never removes anything, unlike updateDealCustomField whose `options` replace the list; a label already there (any case) is kept as is. Returns the field with its options.

## Call

```ts
const result = await client.deals.addDealCustomFieldOption({ customFieldId: '<id>', label: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddDealCustomFieldOptionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddDealCustomFieldOptionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "dealCustomFieldMutation": {
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
