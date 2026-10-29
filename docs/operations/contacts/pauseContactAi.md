<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# pauseContactAi

mutation · domain `contacts` · requires the WRITE scope

Pause AI on one contact. mode ALL: no AI employee runs, and workflow AI employee steps that come due are skipped, not deferred; MESSAGES: runs go on but no AI text, email or Slack message is suggested or sent; DRAFTS (AI off): runs and suggestions go on, every AI text, email or contract waits for a person as a card, AI calls are refused, and pausedUntil is refused. A future pausedUntil ends it on its own; null lasts until resumeContactAi. Not Do Not Contact: people can still reach them.

## Call

```ts
const result = await client.contacts.pauseContactAi({ contactId: '<id>', mode: <ContactAiPauseMode> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PauseContactAiMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PauseContactAiMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `mode` | `ContactAiPauseMode!` | yes | — |
| `pausedUntil` | `DateTime` | no | — |
| `reason` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "pauseContactAi": {
      "id": true,
      "aiPause": {
        "mode": true,
        "pausedUntil": true
      }
    }
  }
}
```
