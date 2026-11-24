<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# publishWebsiteChange

mutation · domain `websites` · requires the ADMIN scope

Put a website change live: merged and deployed to the public site (`published` false: it went to the team to put live). Org admins only, on the person's yes to that preview. Bound to the preview it names (previewId from getWebsiteChange): a newer one refuses STALE_PREVIEW.

## Call

```ts
const result = await client.websites.publishWebsiteChange({ websiteId: '<text>', previewId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PublishWebsiteChangeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PublishWebsiteChangeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `websiteId` | `String!` | yes | — |
| `previewId` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "customerWebsiteMutation": {
    "publish": {
      "ok": true,
      "published": true,
      "refused": true,
      "details": true
    }
  }
}
```
