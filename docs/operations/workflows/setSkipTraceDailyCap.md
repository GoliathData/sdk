<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setSkipTraceDailyCap

mutation · domain `workflows` · requires the ADMIN scope

Set the ORGANIZATION's daily cap on property-signal skip-trace workflow runs: the `dailyCap` getWorkflowThrottleUsage reports, shared by every PROPERTY_SIGNAL_SKIP_TRACE workflow in the org. Each run spends a skip-trace credit, so this arms real spend: ADMIN scope, and the key owner must be an org admin. A whole number, 1 to 1,000,000,000; a raise reaches an org already capped today within minutes. Returns the new cap. State the old cap (getWorkflowThrottleUsage on a skip-trace workflow) and the new one first; when it already is that cap, change nothing. Run it as a write code task whose approvedLive names it: that draws the person's yes/no card showing both caps, and only that yes sets it, so never ask a yes of your own. Never lower it unless asked: a lower cap throttles every skip-trace workflow.

## Call

```ts
const result = await client.workflows.setSkipTraceDailyCap({ dailyCap: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetSkipTraceDailyCapMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetSkipTraceDailyCapMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dailyCap` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "updatePropertySignalSkipTraceDailyCap": true
  }
}
```
