<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# editMyHomeLayout

mutation · domain `notifications` · requires the WRITE scope

Change tiles on your own Home, in order, all or nothing: each change names one tile by `pageId` (a page tile) or `tileId` (getMyHomeLayout), and sets its `size` or `style`, `remove`s it, `keep`s a draft, or `moveTo` a 0-based index (Catch up holds 0 and stays first; its sizes are hero, full and compact). Refused whole, writing nothing, when any change names no tile or does not fit it. Returns Home after it.

## Call

```ts
const result = await client.notifications.editMyHomeLayout({ changes: [<HomeTileChangeInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EditMyHomeLayoutMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EditMyHomeLayoutMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `changes` | `[HomeTileChangeInput!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "todayMutation": {
    "editMyHomeLayout": {
      "layoutId": true,
      "tiles": {
        "tileId": true,
        "kind": true,
        "pageId": true,
        "size": true,
        "style": true,
        "draft": true
      }
    }
  }
}
```
