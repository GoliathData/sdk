<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# markWrongOnToday

mutation · domain `notifications` · requires the WRITE scope

"This is wrong": a hide with the person's reason and an optional note (at most 280 characters). subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.

## Call

```ts
const result = await client.notifications.markWrongOnToday({ subjectGrn: '<text>', kind: '<text>', reason: <SubjectDismissReason> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MarkWrongOnTodayMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MarkWrongOnTodayMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `subjectGrn` | `String!` | yes | — |
| `kind` | `String!` | yes | — |
| `reason` | `SubjectDismissReason!` | yes | — |
| `note` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subjectStateMutation": {
    "markWrong": {
      "subjectGrn": true,
      "kind": true,
      "dismissedAt": true,
      "dismissReason": true
    }
  }
}
```
