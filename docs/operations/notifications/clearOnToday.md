<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# clearOnToday

mutation · domain `notifications` · requires the WRITE scope

"Dealt with": the row leaves the key owner's Today until something newer than anchorAt happens to it. subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.

## Call

```ts
const result = await client.notifications.clearOnToday({ subjectGrn: '<text>', kind: '<text>', anchorAt: <DateTime> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ClearOnTodayMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ClearOnTodayMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `subjectGrn` | `String!` | yes | — |
| `kind` | `String!` | yes | — |
| `anchorAt` | `DateTime!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subjectStateMutation": {
    "clear": {
      "subjectGrn": true,
      "kind": true,
      "seenThroughAt": true
    }
  }
}
```
