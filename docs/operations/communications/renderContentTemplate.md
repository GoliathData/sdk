<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renderContentTemplate

query · domain `communications` · requires the READ scope

Render a content template against a contact: collapse [a|b] spintax and substitute {{merge}} tokens. Returns the rendered subject/body plus missingVariables — every token that did NOT render, whether it had no value for this contact or could not render at all because contactId was omitted (contact tokens then remain as literal {{...}} text AND are listed as missing). Inspect missingVariables (empty = fully rendered). Sending itself happens in the app — the API does not offer send operations. Pass spintaxSeed for a deterministic variant. Omitting contactId previews spintax and user tokens only — never send a no-contact render of a template with contact tokens.

## Call

```ts
const result = await client.communications.renderContentTemplate({ templateId: '<id>' })
// → Promise<RenderContentTemplateQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenderContentTemplateQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `templateId` | `ID!` | yes | — |
| `contactId` | `ID` | no | — |
| `spintaxSeed` | `Int` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "renderContentTemplate": {
      "subject": true,
      "body": true,
      "bodyFormat": true,
      "missingVariables": true,
      "usedVariables": true
    }
  }
}
```
