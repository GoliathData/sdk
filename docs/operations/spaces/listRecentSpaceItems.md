<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listRecentSpaceItems

query · domain `spaces` · requires the READ scope

The "Recent" view: files you can see (pages and documents included), most recently CHANGED first, `limit` of them (default 100, at most 200), each with `createdAt` and `createdBy`. "What did I make yesterday / this week": `mine: true` (files the person owns: theirs, or made for them in their chats) with `createdAfter` / `createdBefore` at the window's edges in their time zone; count every row, and never present `updatedAt` as when a file was made. With `mine` or a window, only a full page (`limit` rows) can mean more.

## Call

```ts
const result = await client.spaces.listRecentSpaceItems()
// → Promise<ListRecentSpaceItemsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListRecentSpaceItemsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 100 |
| `createdAfter` | `DateTime` | no | — |
| `createdBefore` | `DateTime` | no | — |
| `mine` | `Boolean` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "recent": {
      "id": true,
      "name": true,
      "catalogKind": true,
      "createdBy": {
        "label": true
      },
      "path": {
        "name": true
      },
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
