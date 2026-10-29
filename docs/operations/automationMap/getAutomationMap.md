<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getAutomationMap

query · domain `automationMap` · requires the READ scope

Your organization's Automations Map. When there is none, this read draws it from the organization's workflows and AI employees (no agent turn) and saves it; null when there is nothing to draw. `story` (a MapStory: journeys, steps, edges and each step's detail, as JSON), `refStates` (each workflow or AI employee a step stands for, with its state now: on, off or draft, and its setup as label/value `facts`), and `changedSince` (records saved after this version: the Map may be out of date until the Automations chat redraws it). `story` null means the current version cannot be read. `pageId` and `version` are what the version ops take.

## Call

```ts
const result = await client.automationMap.getAutomationMap()
// → Promise<GetAutomationMapQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetAutomationMapQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "automationPagesQuery": {
    "map": {
      "pageId": true,
      "version": true,
      "story": true,
      "refStates": {
        "kind": true,
        "id": true,
        "name": true,
        "state": true,
        "editing": true,
        "domain": true,
        "channels": true,
        "facts": {
          "label": true,
          "value": true
        }
      },
      "changedSince": {
        "kind": true,
        "id": true,
        "name": true,
        "onMap": true,
        "change": true
      }
    }
  }
}
```
