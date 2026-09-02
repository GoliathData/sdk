<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getDeletionImpact

query · domain `deals` · requires the READ scope

Preview what deleting an org-owned record affects before you do it — it serves every delete op that takes a dependencyResolution, not just the deal ones. Pass targetKind + targetId; returns impactVersion (hand it back to the matching delete op), requiresReplacement, the dependent records grouped, and — when replacement is required — the replacementRequirements (what needs a new home and the valid options). Supported targetKinds: DEAL_PIPELINE / DEAL_STAGE (deletePipeline / deletePipelineStage), CONTACT_CUSTOM_FIELD (deleteContactCustomField), CONTACT_CUSTOM_FIELD_OPTION (a dropdown option being dropped by updateContactCustomField's optionDependencyResolutions), CONTACT_TAG (deleteContactTags), CONTACT_LIST (deleteContactLists), and CONTENT_TEMPLATE (deleteContentTemplate). Always call this first: those delete ops need the impactVersion, and it goes stale if anything changes in between — re-read it rather than reusing an old one.

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
