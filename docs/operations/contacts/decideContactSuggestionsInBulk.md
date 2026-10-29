<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# decideContactSuggestionsInBulk

mutation · domain `contacts` · requires the WRITE scope

Accept or dismiss many cards at once (`verb` ACCEPT or DISMISS, `suggestionIds` at most 500): each runs as its own Accept or Dismiss would, so an ACCEPT can send a reply per card. An id the key owner may not act on is dropped from the plan, not reported. `dismissReason` for a DISMISS. `rowDecisions` answers one card's own question for an ACCEPT ({ suggestionId, decisions }). Returns planned, applied, refused, truncated (only the first `planned` ran: call again) and unresolvedIds. An ACCEPT whose answer spends credits is refused (the app's costed bulk accept). Behind the send consent attestation and Pause everything, a DISMISS too.

## Call

```ts
const result = await client.contacts.decideContactSuggestionsInBulk({ verb: <SuggestionDecisionVerb>, suggestionIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DecideContactSuggestionsInBulkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DecideContactSuggestionsInBulkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `verb` | `SuggestionDecisionVerb!` | yes | — |
| `suggestionIds` | `[ID!]!` | yes | — |
| `dismissReason` | `ContactSuggestionDismissReason` | no | — |
| `rowDecisions` | `[ContactSuggestionRowDecisionsInput!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactSuggestionMutation": {
    "decideContactSuggestionsInBulk": {
      "planned": true,
      "applied": true,
      "refused": true,
      "truncated": true,
      "unresolvedIds": true
    }
  }
}
```
