<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getDeletionImpact

query · domain `deals` · requires the READ scope

Preview what deleting an org-owned record affects, for every delete op that takes a dependencyResolution. Pass targetKind + targetId; returns impactVersion (hand it back to the matching delete op), requiresReplacement, the dependent records grouped, and replacementRequirements (what needs a new home, with its valid options). Supported targetKinds: DEAL (deleteDeal), DEAL_PIPELINE / DEAL_STAGE (deletePipeline / deletePipelineStage), CONTACT_CUSTOM_FIELD (deleteContactCustomField), CONTACT_CUSTOM_FIELD_OPTION / DEAL_CUSTOM_FIELD_OPTION (a dropdown option dropped by updateContactCustomField / updateDealCustomField's optionDependencyResolutions), CONTACT_TAG (deleteContactTags), CONTACT_LIST (deleteContactLists), and CONTENT_TEMPLATE (deleteContentTemplate). WORKFLOW_GROUP (a workflow's or appointment reminder's group id): deleteAppointmentReminder takes the result as its dependencyResolution; for a workflow it is read-only (deleteWorkflow takes no impactVersion). isBlocking=false items (e.g. pending AI suggestions) never block and retire automatically. Never delete a saved filter to free an option: re-point or trim it. Always call this first; impactVersion goes stale when anything changes, so re-read rather than reuse it.

## Call

```ts
const result = await client.deals.getDeletionImpact({ targetKind: <DependencyTargetKind>, targetId: '<id>' })
// → Promise<GetDeletionImpactQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetDeletionImpactQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `targetKind` | `DependencyTargetKind!` | yes | — |
| `targetId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dependencyQuery": {
    "getDeletionImpact": {
      "impactVersion": true,
      "requiresReplacement": true,
      "warnings": true,
      "groups": {
        "groupKind": true,
        "title": true,
        "count": true
      },
      "replacementRequirements": {
        "targetKind": true,
        "targetId": true,
        "title": true,
        "options": {
          "id": true,
          "label": true,
          "subtitle": true
        }
      }
    }
  }
}
```
