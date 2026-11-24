<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewTriggerMatchVolume

query · domain `workflows` · requires the READ scope

How many properties a PROPERTY workflow's signal trigger matches: `lastSevenDays` and `allTime`, the two numbers its trigger panel shows (`...IsLowerBound`: more than that). Reads the draft unless `useDraft: false` (the live version). Anything else (not a property workflow, no version, a trigger the panel cannot count) comes back `ok: false` with the sentence in `diagnostics`. Not on Workflows v2 yet.

## Call

```ts
const result = await client.workflows.previewTriggerMatchVolume({ workflowGroupId: '<id>' })
// → Promise<PreviewTriggerMatchVolumeQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewTriggerMatchVolumeQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `useDraft` | `Boolean` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowTriggerMatchVolume": {
      "ok": true,
      "diagnostics": true,
      "lastSevenDays": true,
      "lastSevenDaysIsLowerBound": true,
      "allTime": true,
      "allTimeIsLowerBound": true
    }
  }
}
```
