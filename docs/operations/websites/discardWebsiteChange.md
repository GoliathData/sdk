<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# discardWebsiteChange

mutation · domain `websites` · requires the ADMIN scope

Throw a website's open change away for good. Org admins only, on the person's yes. Bound to the preview it names (previewId from getWebsiteChange): a newer one refuses STALE_PREVIEW.

## Call

```ts
const result = await client.websites.discardWebsiteChange({ websiteId: '<text>', previewId: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DiscardWebsiteChangeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DiscardWebsiteChangeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "discard": {
      "ok": true,
      "published": true,
      "refused": true,
      "details": true
    }
  }
}
```
