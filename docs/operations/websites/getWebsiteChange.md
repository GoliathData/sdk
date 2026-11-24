<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWebsiteChange

query · domain `websites` · requires the READ scope

One website (`websiteId` from listWebsites) and its open change, to follow a requested change: `working` while Goliath queues or makes it, then `openChange` with its preview. Null when it is not one of the organization's.

## Call

```ts
const result = await client.websites.getWebsiteChange({ websiteId: '<text>' })
// → Promise<GetWebsiteChangeQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWebsiteChangeQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `websiteId` | `String!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "customerWebsiteQuery": {
    "website": {
      "id": true,
      "name": true,
      "primaryDomain": true,
      "liveUrl": true,
      "working": true,
      "openChangeUnreadable": true,
      "openChange": {
        "previewId": true,
        "preview": true,
        "previewUrl": true,
        "working": true,
        "sentForPublishing": true,
        "request": true,
        "agentNote": true
      }
    }
  }
}
```
