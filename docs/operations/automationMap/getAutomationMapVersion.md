<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getAutomationMapVersion

query · domain `automationMap` · requires the READ scope

One earlier version of the Map (`pageId`, `version`), with the `story` it was written with.

## Call

```ts
const result = await client.automationMap.getAutomationMapVersion({ pageId: '<id>', version: 0 })
// → Promise<GetAutomationMapVersionQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetAutomationMapVersionQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pageId` | `ID!` | yes | — |
| `version` | `Int!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "automationPagesQuery": {
    "page": {
      "id": true,
      "version": true,
      "story": true,
      "note": true,
      "createdAt": true,
      "authorName": true
    }
  }
}
```
