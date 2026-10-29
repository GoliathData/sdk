<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpaceItemActivity

query · domain `spaces` · requires the READ scope

A folder or file's history, newest first — only the latest 50 events, so an older event's absence proves nothing: created, renamed, moved, edited, shared, trashed, restored, downloaded, attached — with who did it (a person, or an AI agent acting for one).

## Call

```ts
const result = await client.spaces.listSpaceItemActivity({ itemId: '<id>' })
// → Promise<ListSpaceItemActivityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpaceItemActivityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "activity": {
      "id": true,
      "action": true,
      "actor": {
        "kind": true,
        "label": true
      },
      "detail": true,
      "createdAt": true
    }
  }
}
```
