<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listDealFiles

query · domain `deals` · requires the READ scope

Files attached to a deal, most-recent-first — screenshots, recordings, documents. Each entry carries id, fileName, contentType-bearing fileUrl and createdAt. fileUrl is a time-limited signed HTTPS URL: fetch it promptly and do not persist or share it, and re-read this op rather than caching the URL. Each URL is signed per file, so the page is small (limit defaults to 25 and is capped there) — a full page means there may be more, so page with offset. This is the ONLY way to reach an attachment's bytes — a Slack-sourced deal records its attachments as a bare filename at the end of the description (`Attachments: Screenshot ….png`), which names the file but cannot open it. To ADD a file your org already holds (by its artifactId), use attachDealFile; to detach one, removeDealFile. Returns an empty list for a deal with no files, which is different from a deal you cannot see: a foreign or unknown dealId is refused at the gateway.

## Call

```ts
const result = await client.deals.listDealFiles({ dealId: '<id>' })
// → Promise<ListDealFilesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListDealFilesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `limit` | `Int` | no | 25 |
| `offset` | `Int` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 25.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealQuery": {
    "getDeal": {
      "id": true,
      "files": {
        "id": true,
        "fileName": true,
        "fileUrl": true,
        "createdAt": true
      }
    }
  }
}
```
