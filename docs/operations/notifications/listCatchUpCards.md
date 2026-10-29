<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listCatchUpCards

query · domain `notifications` · requires the READ scope

The key owner's Catch up deck, ranked as the app deals it: each card's id, kind, the sentence it asks (`ask`, else `title`), its rows (`bundleRows`, each `defaultChecked`) and `suggestionIds`. `nextCursor` continues the same ranking. What decideCatchUpCard takes.

## Call

```ts
const result = await client.notifications.listCatchUpCards()
// → Promise<ListCatchUpCardsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListCatchUpCardsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 50 |
| `after` | `String` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 200.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dashboardQuery": {
    "workThroughQueue": {
      "total": true,
      "nextCursor": true,
      "cards": {
        "id": true,
        "family": true,
        "kind": true,
        "contactId": true,
        "title": true,
        "ask": true,
        "why": true,
        "primaryLabel": true,
        "estSeconds": true,
        "costCredits": true,
        "records": true,
        "suggestionIds": true,
        "bundleRows": {
          "suggestionId": true,
          "contactId": true,
          "label": true,
          "sublabel": true,
          "defaultChecked": true,
          "kind": true
        }
      }
    }
  }
}
```
