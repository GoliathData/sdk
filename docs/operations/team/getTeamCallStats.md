<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTeamCallStats

query · domain `team` · requires the READ scope

Per-member CALL COUNTS AND TALK TIME in a time window — one call, exact, live (not a nightly snapshot). The answer to "break down team talk time this week" and "who made the most calls". WINDOW: startDate (inclusive) and endDate (exclusive) as ISO datetimes WITH an offset — resolve "this week"/"since 9/28" in the USER's timezone yourself (getMyProfile.resolvedTimezone, or the organization timezone) before calling. At most 93 calendar days; a wider window is REFUSED with a message. WHAT IS COUNTED, per member, over the organization's calls created in the window and handled by that member: outboundCalls and inboundCalls (every status, missed and unanswered included); connectedCalls = status COMPLETED, the same "connects" the team analytics pages count as completedCalls; conversationCalls = connected AND (lasted at least 120 seconds, or a transcript or AI summary exists), team analytics' conversationCalls; talkSeconds = summed duration of the connected calls (a connected call with no recorded duration adds 0) — divide by 60 or 3600 yourself. A call an AI EMPLOYEE handled is not counted for any member, even when it carries one (a screened call the AI took over), and calls with no member at all (imported dialer history) are not counted — so these are human calling numbers, and can be lower than the analytics pages, which credit AI-handled calls to the member. byUser is ranked by talkSeconds (name null when the user is gone); totals sums the rows. On an org-wide read only members with at least one call appear; every member you NAME in userIds appears (zeros included). VISIBILITY (the inbox rule): with no userIds, a key owner holding VIEW_ALL_PHONES (org admins hold it) gets every member; anyone else gets ONLY THEIR OWN row — say so rather than presenting it as the team. Naming a teammate in userIds without VIEW_ALL_PHONES is REFUSED (an error, not zeros). getMyCapabilities says whether the key owner holds VIEW_ALL_PHONES. Teammate ids come from listTeammates.

## Call

```ts
const result = await client.team.getTeamCallStats({ startDate: <DateTime>, endDate: <DateTime> })
// → Promise<GetTeamCallStatsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTeamCallStatsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `startDate` | `DateTime!` | yes | — |
| `endDate` | `DateTime!` | yes | — |
| `userIds` | `[ID!]` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamAnalyticsQuery": {
    "callStats": {
      "startDate": true,
      "endDate": true,
      "totals": {
        "outboundCalls": true,
        "inboundCalls": true,
        "connectedCalls": true,
        "conversationCalls": true,
        "talkSeconds": true
      },
      "byUser": {
        "userId": true,
        "name": true,
        "outboundCalls": true,
        "inboundCalls": true,
        "connectedCalls": true,
        "conversationCalls": true,
        "talkSeconds": true
      }
    }
  }
}
```
