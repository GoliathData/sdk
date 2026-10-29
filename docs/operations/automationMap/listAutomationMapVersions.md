<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listAutomationMapVersions

query · domain `automationMap` · requires the READ scope

The Map's version history, newest first (`pageId` from getAutomationMap): each version's number, note, when, who, and `bySession` (Ask Goliath wrote it rather than a person).

## Call

```ts
const result = await client.automationMap.listAutomationMapVersions({ pageId: '<id>' })
// → Promise<ListAutomationMapVersionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListAutomationMapVersionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pageId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "automationPagesQuery": {
    "pageVersions": {
      "version": true,
      "note": true,
      "createdAt": true,
      "authorName": true,
      "bySession": true
    }
  }
}
```
