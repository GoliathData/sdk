<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unhideOnToday

mutation · domain `notifications` · requires the WRITE scope

Show a row again: undoes a skip, hide or "this is wrong". subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY. To undo hideTaskSourceOnToday instead, send that source's GRN with kind TODAY_TASKS.

## Call

```ts
const result = await client.notifications.unhideOnToday({ subjectGrn: '<text>', kind: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnhideOnTodayMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnhideOnTodayMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `subjectGrn` | `String!` | yes | — |
| `kind` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subjectStateMutation": {
    "unhide": {
      "subjectGrn": true,
      "kind": true,
      "dismissedAt": true,
      "snoozedUntil": true
    }
  }
}
```
