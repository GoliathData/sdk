<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWebsites

query · domain `websites` · requires the READ scope

The organization's websites (id, name, domain, live URL) and each one's open change: its preview (state, URL once READY, previewId), the request and the editing agent's note, and whether Goliath is still working on it. Null while websites are off for the organization.

## Call

```ts
const result = await client.websites.listWebsites()
// → Promise<ListWebsitesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWebsitesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "customerWebsiteQuery": {
    "websites": {
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
