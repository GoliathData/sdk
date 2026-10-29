<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# skipOnToday

mutation · domain `notifications` · requires the WRITE scope

"Not now": the row leaves the key owner's Today until their next local day, or sooner when something newer happens (anchorAt: when the row's event happened). subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.

## Call

```ts
const result = await client.notifications.skipOnToday({ subjectGrn: '<text>', kind: '<text>', anchorAt: <DateTime> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SkipOnTodayMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SkipOnTodayMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "skip": {
      "subjectGrn": true,
      "kind": true,
      "snoozedUntil": true
    }
  }
}
```
