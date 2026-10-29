<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# exportProperties

mutation · domain `files` · requires the ADMIN scope

Export properties (esIds) to a spreadsheet. Selection: `ids` (selectAll false), or a saved `filterId` with `selectAll: true` (every match; `excludeIds` leaves some out) or `selectCount: N` (the first N); `totalCount` is how many the selection holds (round up for a filter) and `estimatedItemCount` the same count. `fileName` names the file. `includeStreetViewImages` adds a Street View link per row. Spends export credits: the same credits as the app with no other cap (plan allowance first, then real money; checkBillingAction first), so name the count and the credits and have the person agree before a large one. Async: poll getBulkTask(bulkTaskId); the file is getExportReport(dataExportId) once it finishes. ADMIN: the key owner must currently be an org admin.

## Call

```ts
const result = await client.files.exportProperties({ totalCount: 0, estimatedItemCount: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ExportPropertiesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ExportPropertiesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `ids` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `selectAll` | `Boolean` | no | false |
| `selectCount` | `Int` | no | — |
| `excludeIds` | `[String!]` | no | — |
| `totalCount` | `Int!` | yes | — |
| `estimatedItemCount` | `Int!` | yes | — |
| `fileName` | `String` | no | — |
| `includeStreetViewImages` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "exportMutation": {
    "startStandardExport": {
      "dataExportId": true,
      "bulkTaskId": true
    }
  }
}
```
