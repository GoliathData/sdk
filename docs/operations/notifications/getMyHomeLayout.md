<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyHomeLayout

query · domain `notifications` · requires the READ scope

Your own Home's tiles, in order (`summaries`: each tile's tileId, kind, size, style and, for a page tile, its pageId and draft mark) and where they come from (USER: your own layout; ORG_TEMPLATE: the team's; DEFAULT). The tileIds editMyHomeLayout takes.

## Call

```ts
const result = await client.notifications.getMyHomeLayout()
// → Promise<GetMyHomeLayoutQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMyHomeLayoutQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dashboardQuery": {
    "myHomeLayout": {
      "source": true,
      "summaries": {
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
