<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# hideOnToday

mutation · domain `notifications` · requires the WRITE scope

"Don't show this again" on the key owner's Today, until unhideOnToday. subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.

## Call

```ts
const result = await client.notifications.hideOnToday({ subjectGrn: '<text>', kind: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<HideOnTodayMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `HideOnTodayMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "hide": {
      "subjectGrn": true,
      "kind": true,
      "dismissedAt": true
    }
  }
}
```
