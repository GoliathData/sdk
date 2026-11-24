<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# planEnrollExistingMatches

query · domain `workflows` · requires the READ scope

What enrolling the records that ALREADY match a workflow's live trigger would do: `count` and the `liveVersionId` they would run on. A property workflow needs `signalWindowDays` (1 to 365) and counts properties with a signal in that window it has not run on; `spendsSkipTraces` says each run spends a credit (`creditsLeft` today). `available: false` says why in `reason`. Tell the person the number and what it spends, then call enrollExistingMatches with this `liveVersionId` and `count`.

## Call

```ts
const result = await client.workflows.planEnrollExistingMatches({ workflowGroupId: '<id>' })
// → Promise<PlanEnrollExistingMatchesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PlanEnrollExistingMatchesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `signalWindowDays` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowLiveMatchEnrollmentPlan": {
      "available": true,
      "reason": true,
      "liveVersionId": true,
      "count": true,
      "spendsSkipTraces": true,
      "creditsLeft": true
    }
  }
}
```
