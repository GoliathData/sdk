<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# countOutboundTexts

query · domain `team` · requires the READ scope

HOW MANY TEXTS WENT OUT in a time window — one call, exact, live (not a nightly snapshot). Use it for "how many texts did we send this week" instead of paging listInboxThreads, which is a preview feed and cannot count. WINDOW: startDate (inclusive) and endDate (exclusive) as ISO datetimes WITH an offset — resolve "this week"/"today"/"since 9/28" in the USER's timezone yourself (getMyProfile.resolvedTimezone, or the organization timezone) before calling; an offset-less time is read in the server zone. At most 93 calendar days; a wider window is REFUSED with a message (split it and add the parts). WHAT IS COUNTED: OUTBOUND texts created in the window on a line your organization owns or owned — the organization's texts whoever sent them, never another organization's. INBOUND texts are never counted. SKIPPED sends (the product declined to send — opt-out, Do-Not-Contact, throttle) are NOT counted. Each bucket reports sent (PENDING + SENT + DELIVERED: accepted for dispatch), delivered (the carrier-confirmed subset of sent) and failed (FAILED). byUser is each member's OWN sends: a text with an AI-employee or workflow stamp is never a member's, even when it went out on that member's line. otherSenders holds the rest: aiEmployees (texts an AI employee authored), workflows (texts a workflow or campaign step sent) and unattributed (a person's sends whose user was since removed). total is every bucket summed, so on an org-wide read it IS the whole organization's outbound volume. byUser is ranked by sent + failed, and a row's name is null when the user is gone; on an org-wide read only members with at least one counted text appear, while every member you NAME in userIds appears (zeros included). VISIBILITY (the inbox rule): with no userIds, a key owner holding VIEW_ALL_PHONES (org admins hold it) gets the WHOLE organization and otherSenders; anyone else gets ONLY THEIR OWN row and otherSenders null — so a non-admin's total is their own sends, not the team's; say so rather than reporting it as the org total. Naming a teammate in userIds without VIEW_ALL_PHONES is REFUSED (an error, not zeros); with it, userIds narrows to those members and otherSenders is null. getMyCapabilities says whether the key owner holds VIEW_ALL_PHONES. Teammate ids come from listTeammates.

## Call

```ts
const result = await client.team.countOutboundTexts({ startDate: <DateTime>, endDate: <DateTime> })
// → Promise<CountOutboundTextsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CountOutboundTextsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "outboundTextCounts": {
      "startDate": true,
      "endDate": true,
      "total": {
        "sent": true,
        "delivered": true,
        "failed": true
      },
      "byUser": {
        "userId": true,
        "name": true,
        "sent": true,
        "delivered": true,
        "failed": true
      },
      "otherSenders": {
        "aiEmployees": {
          "sent": true,
          "delivered": true,
          "failed": true
        },
        "workflows": {
          "sent": true,
          "delivered": true,
          "failed": true
        },
        "unattributed": {
          "sent": true,
          "delivered": true,
          "failed": true
        }
      }
    }
  }
}
```
