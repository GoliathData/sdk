<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# requestWebsiteChange

mutation · domain `websites` · requires the ADMIN scope

Ask Goliath to change one website, in the person's own words (new text, a new photo, a section moved). Org admins only. It runs in the background, about 5 minutes, one change per website at a time, and reports into the Ask Goliath chat that asked with a preview to review; nothing goes live until it is published. `photoArtifactIds`: images on that chat (PNG, JPEG, GIF or WebP), at most 10. Refused NO_CHAT outside a chat, CHANGE_OPEN while a change waits (publish or discard it first), STILL_WORKING while one is being made.

## Call

```ts
const result = await client.websites.requestWebsiteChange({ websiteId: '<text>', instruction: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RequestWebsiteChangeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RequestWebsiteChangeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `websiteId` | `String!` | yes | — |
| `instruction` | `String!` | yes | — |
| `photoArtifactIds` | `[ID!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "customerWebsiteMutation": {
    "requestChange": {
      "ok": true,
      "status": true,
      "error": true
    }
  }
}
```
