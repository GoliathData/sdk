<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# hideTaskSourceOnToday

mutation · domain `notifications` · requires the WRITE scope

Hide from the key owner's Today every task one workflow (`WorkflowGroup_<id>`) or AI employee (`Agent_<id>`) made. The tasks stay in the task list.

## Call

```ts
const result = await client.notifications.hideTaskSourceOnToday({ sourceGrn: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<HideTaskSourceOnTodayMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `HideTaskSourceOnTodayMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `sourceGrn` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "subjectStateMutation": {
    "hideTodaySource": {
      "subjectGrn": true,
      "kind": true,
      "dismissedAt": true
    }
  }
}
```
