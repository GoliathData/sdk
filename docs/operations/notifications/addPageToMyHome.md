<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addPageToMyHome

mutation · domain `notifications` · requires the WRITE scope

Put a Page on your own Home as a tile: first after Catch up, or with `replaceTileId` in place of that idea tile (kind idea), which goes. `size`: small 1x1, wide 2x1, large 2x2 or full 4x1; `style`: plain, sky, sage, dusk or sand; `draft` true shows it with a Draft mark until the person keeps it. A page already on Home is not added twice: its tile takes the new size, style and draft. Refused for a page you cannot open and on a full Home. Returns Home after it.

## Call

```ts
const result = await client.notifications.addPageToMyHome({ pageId: '<id>', size: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddPageToMyHomeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddPageToMyHomeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pageId` | `ID!` | yes | — |
| `size` | `String!` | yes | — |
| `style` | `String` | no | — |
| `draft` | `Boolean` | no | — |
| `replaceTileId` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "todayMutation": {
    "addPageToMyHome": {
      "layoutId": true,
      "tileId": true,
      "added": true,
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
