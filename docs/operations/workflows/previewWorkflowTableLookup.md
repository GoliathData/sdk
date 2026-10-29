<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewWorkflowTableLookup

query · domain `workflows` · requires the READ scope

Call this before you say which row, or which value, a named contact, property, deal or appointment gets from a table: a county or key guessed from an address is not the answer. Which row of one Workflow Table a run on a record would use, and each column's value by `columnId` (names from getWorkflowTable): `input` takes `workflowTableId` and a `contactId`, `propertyId`, `dealId` or `appointmentId`, resolved exactly as a workflow run resolves it (fallback levels, ranges, composite keys). `match` DEFAULT means no key matched and the default row answered; NONE means nothing answered. `missingSubjects` names records the key needed and the record could not reach. Same gate as the rows.

## Call

```ts
const result = await client.workflows.previewWorkflowTableLookup({ input: <PreviewWorkflowTableLookupInput> })
// → Promise<PreviewWorkflowTableLookupQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewWorkflowTableLookupQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `PreviewWorkflowTableLookupInput!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "previewWorkflowTableLookup": {
      "key": true,
      "match": true,
      "rowId": true,
      "rowKey": true,
      "rowKeyLabel": true,
      "missingSubjects": true,
      "values": {
        "columnId": true,
        "value": true
      }
    }
  }
}
```
