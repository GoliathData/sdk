<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listDealActivity

query · domain `deals` · requires the READ scope

One deal's activity feed, most-recent-first — the audit trail behind "who changed the price on this deal, and when did it get reassigned?". Each event carries eventType, createdAt, actor (the person, null for system/automation), and a SuperJSON `payload` whose `json` object holds the per-eventType detail. Pass `eventTypes` to narrow to the types you care about — a narrowed read pages at the DATABASE, so a sparse type's full history stays reachable however busy the rest of the feed is; omit it for the mixed feed, which caps at the 200 most recent events. Page with `offset`. THE FULL eventType VOCABULARY, with the payload keys under `payload.json` for each (there is no schema expansion for a SuperJSON scalar, so this text is the only description of the shape). Money keys are cents, `*Bps` are basis points, dates are ISO 8601, and a `from*` key is null when the field had no previous value: `STAGE_CHANGED` (fromStageId, fromStageName, toStageId, toStageName — names are snapshotted at write time, so they stay correct after a stage is renamed); `VALUE_CHANGED` (fromCents, toCents — the deal price); `COMMISSION_CHANGED` and `TEAM_SPLIT_CHANGED` (fromCents, toCents, fromBps, toBps — the pair that answers commission-history questions); `CLOSE_DATE_CHANGED` (fromDate, toDate); `ASSIGNED` and `UNASSIGNED` (userId, userName — the person the deal was assigned to or taken from, NOT the actor who did it); `CONTACT_LINKED` and `CONTACT_UNLINKED` (contactId, contactName); `TASK_ADDED` and `TASK_COMPLETED` (taskId, taskTitle, isAppointment — true means it was an appointment, not a to-do); `FILE_ADDED` and `FILE_REMOVED` (fileId, fileName); `DEAL_CREATED`, `DEAL_ARCHIVED`, `DEAL_RESTORED` (no payload keys beyond actor); `COMMENT` (body — the comment text; listDealComments is the same feed pre-narrowed to this type). Those seventeen are the whole vocabulary: an eventType outside this list does not exist. What the feed does NOT record is edits to a deal's title, description or custom-field values — no event type covers them, so their history is not reconstructable here.

## Call

```ts
const result = await client.deals.listDealActivity({ dealId: '<id>' })
// → Promise<ListDealActivityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListDealActivityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `limit` | `Int` | no | 50 |
| `offset` | `Int` | no | — |
| `eventTypes` | `[DealActivityEventType!]` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealQuery": {
    "getDeal": {
      "id": true,
      "events": {
        "id": true,
        "eventType": true,
        "createdAt": true,
        "actor": {
          "userId": true,
          "name": true
        },
        "payload": true
      }
    }
  }
}
```
