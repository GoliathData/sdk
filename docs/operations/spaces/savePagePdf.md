<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# savePagePdf

mutation · domain `spaces` · requires the WRITE scope

Save a PAGE as a PDF file in Library ("turn this into a PDF", "give it to me as a PDF"): printed now as you see it, saved where the files you make for this person go (their chosen folder, else My files). Returns the new file and its `path`. A snapshot: later edits to the page do not change it. Only a page prints; for anything else make a page of it first.

## Call

```ts
const result = await client.spaces.savePagePdf({ itemId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SavePagePdfMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SavePagePdfMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "savePagePdf": {
      "id": true,
      "spaceId": true,
      "spaceName": true,
      "parentId": true,
      "name": true,
      "fileType": true,
      "sizeBytes": true,
      "path": {
        "id": true,
        "name": true
      }
    }
  }
}
```
