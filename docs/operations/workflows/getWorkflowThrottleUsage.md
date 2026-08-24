<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getWorkflowThrottleUsage

query · domain `workflows` · requires the READ scope

Daily send-limit usage for a throttle-backed workflow (by group id) — usedToday vs dailyCap plus a per-day history over the last `rangeDays` (1–90, clamped). Returns null for workflows with no throttle (only skip-trace-category workflows have one). Answers "am I near my sending limit?".

## Call

```ts
const result = await client.workflows.getWorkflowThrottleUsage({ workflowGroupId: '<id>', rangeDays: 0 })
// → Promise<GetWorkflowThrottleUsageQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetWorkflowThrottleUsageQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `rangeDays` | `Int!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowGroupThrottleUsage": {
      "throttleType": true,
      "dailyCap": true,
      "usedToday": true,
      "history": {
        "day": true,
        "unitsSent": true
      }
    }
  }
}
```
