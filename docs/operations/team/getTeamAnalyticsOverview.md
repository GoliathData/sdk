<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTeamAnalyticsOverview

query · domain `team` · requires the ADMIN scope

Team performance (SEVEN_DAYS | FOURTEEN_DAYS | THIRTY_DAYS | YEAR_TO_DATE; default THIRTY_DAYS): totals, deltas, per-agent rows. NIGHTLY as of asOfDate, never today; say which numbers are nightly and which live (getTeamCallStats, countOutboundTexts). filterContacts awaitingReply: unanswered texts/emails. avgSpeedToFirst{Call,Message}Minutes: minutes from a lead being ASSIGNED to the member to their first call / text or email.

## Call

```ts
const result = await client.team.getTeamAnalyticsOverview()
// → Promise<GetTeamAnalyticsOverviewQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTeamAnalyticsOverviewQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "agentTeamOverview": {
      "asOfDate": true,
      "period": true,
      "reportingPeriod": true,
      "startDate": true,
      "endDate": true,
      "summary": {
        "agentCount": true,
        "calls": true,
        "completedCalls": true,
        "conversationCalls": true,
        "callsDeltaPct": true,
        "texts": true,
        "textsDeltaPct": true,
        "emails": true,
        "emailsDeltaPct": true,
        "tasks": true,
        "tasksDeltaPct": true,
        "appointments": true,
        "appointmentsDeltaPct": true,
        "newLeads": true,
        "newLeadsDeltaPct": true,
        "notActedOnCount": true,
        "activeLeadsCount": true,
        "warmLeadsCount": true,
        "coolingLeadsCount": true,
        "coldLeadsCount": true,
        "deadLeadsCount": true
      },
      "agents": {
        "userId": true,
        "userName": true,
        "userEmail": true,
        "calls": true,
        "texts": true,
        "emails": true,
        "tasks": true,
        "appointments": true,
        "newLeads": true,
        "notActedOnCount": true,
        "avgSpeedToFirstCallMinutes": true,
        "avgSpeedToFirstMessageMinutes": true,
        "activeLeadsCount": true,
        "warmLeadsCount": true,
        "coolingLeadsCount": true,
        "coldLeadsCount": true,
        "deadLeadsCount": true,
        "score": true,
        "conversationRate": true
      },
      "pipelineExposure": {
        "pipelineId": true,
        "pipelineName": true,
        "userId": true,
        "userName": true,
        "wonDealsCount": true,
        "lostDealsCount": true,
        "commissionEarnedCents": true
      }
    }
  }
}
```
