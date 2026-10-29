<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteCallList

mutation · domain `callLists` · requires the WRITE scope

Delete a call list: it disappears from Call lists for everyone. The calls already made stay on each contact's history. Cannot be undone in the app, so confirm with the person first; prefer endCallList to keep a finished list. Needs you to have built the list or be an admin.

## Call

```ts
const result = await client.callLists.deleteCallList({ callListId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteCallListMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteCallListMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callListId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callListsMutation": {
    "deleteCallList": {
      "id": true
    }
  }
}
```
