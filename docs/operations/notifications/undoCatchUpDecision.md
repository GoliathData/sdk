<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# undoCatchUpDecision

mutation · domain `notifications` · requires the WRITE scope

Take back a decideCatchUpCard: the same cardId and verb, `suggestionIds` the rows it decided (its ticked rows less `remainingIds`), and for an ACCEPT `setAsideIds` its unticked `shownIds` (only rows it set aside come back). Dismissals and set-asides come back; an applied row (a merge, a spend, a send) stands and is counted in `refused`. Card decisions only: trust and memory moves are the person's, in the app.

## Call

```ts
const result = await client.notifications.undoCatchUpDecision({ cardId: '<id>', verb: <WorkThroughVerb>, suggestionIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UndoCatchUpDecisionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UndoCatchUpDecisionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `cardId` | `ID!` | yes | — |
| `verb` | `WorkThroughVerb!` | yes | — |
| `suggestionIds` | `[ID!]!` | yes | — |
| `setAsideIds` | `[ID!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workThroughMutation": {
    "undoDecision": {
      "undone": true,
      "refused": true,
      "refusalMessage": true
    }
  }
}
```
