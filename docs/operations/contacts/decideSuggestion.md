<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# decideSuggestion

mutation · domain `contacts` · requires the WRITE scope

Accept or dismiss any card in the suggestion feed — a contact's, an AI employee's or an account card — by its id (`verb` ACCEPT or DISMISS), the same door Work through uses. DISMISS takes `reason` and optionally `note` (their words). An account card's ACCEPT runs only the actions named in `selectedProposalKeys`; a card with a question of its own takes its answer in `decisions`. Accepting a reply sends it, under every gate the app's Accept runs; an account card's accept needs an org admin. Only on the person's word. Behind the send consent attestation and Pause everything, a DISMISS too. Returns id, kind, status.

## Call

```ts
const result = await client.contacts.decideSuggestion({ suggestionId: '<id>', verb: <SuggestionDecisionVerb> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DecideSuggestionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DecideSuggestionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `suggestionId` | `ID!` | yes | — |
| `verb` | `SuggestionDecisionVerb!` | yes | — |
| `reason` | `ContactSuggestionDismissReason` | no | — |
| `note` | `String` | no | — |
| `acknowledgedWarning` | `String` | no | — |
| `selectedProposalKeys` | `[String!]` | no | — |
| `decisions` | `JSON` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "suggestionFeedMutation": {
    "decideSuggestion": {
      "id": true,
      "kind": true,
      "status": true
    }
  }
}
```
