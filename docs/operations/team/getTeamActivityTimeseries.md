<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTeamActivityTimeseries

query · domain `team` · requires the ADMIN scope

Daily team activity rows for a reporting period (same period values as getTeamAnalyticsOverview) — calls, texts, emails, tasks, appointments, active agents, and new leads per day. For charting trends. Data is a nightly snapshot — see asOfDate. Requires the ADMIN scope (key owner must be a team admin).

## Call

```ts
const result = await client.team.getTeamActivityTimeseries()
// → Promise<GetTeamActivityTimeseriesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTeamActivityTimeseriesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `period` | `AgentAnalyticsPeriod` | no | THIRTY_DAYS |

## Gateway notes

- The organization is derived from your API key — do not send an `orgId` variable (any value sent is ignored).
- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamAnalyticsQuery": {
    "agentTeamActivityTimeseries": {
      "asOfDate": true,
      "rows": {
        "asOfDate": true,
        "calls": true,
        "texts": true,
        "emails": true,
        "tasks": true,
        "appointments": true,
        "activeAgents": true,
        "newLeads": true
      }
    }
  }
}
```
