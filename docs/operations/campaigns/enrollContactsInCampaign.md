<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# enrollContactsInCampaign

mutation · domain `campaigns` · requires the WRITE scope

Add contacts to a campaign's recipient roster (campaignId + contactIds) — the same action as the campaign audience controls in the app, and the way to answer 'put this person in that campaign'. Returns enrolledCount, rejectedCount and skippedDetachedReplierCount for the batch; read all three before reporting an outcome, because a batch routinely splits across them. WHEN IT IS AVAILABLE: while the campaign is a DRAFT or PAUSED — those only stage the audience, and nothing goes out until a person launches or resumes it. Against an ACTIVE (already-launched) campaign it is refused, because enrolling into a live campaign starts that contact through the running sequence immediately, which is materially an outbound send; bulk and single sending both need a per-contact consent attestation only a person in the app can make. The refusal arrives as a 403 sends_unavailable, or — if the campaign went live while your request was in flight — as a FORBIDDEN error carrying the same sentence; treat them as one answer. That refusal is about the campaign being live — NOT about campaigns, this contact, or this key — so the honest report is "this campaign is already running, so it has to be done from the campaign's audience controls in the app", and the workable alternatives are a draft/paused campaign here or a person in the app. WHAT IT DOES NOT DO: it does not record consent and does not bypass any consent, do-not-contact, opt-out or quiet-hour gate — those are evaluated per contact when the campaign actually starts sending to them, exactly as for a person doing this in the app. It does not launch anything (launchCampaign is itself refused here). WHY A CONTACT MAY NOT LAND: rejectedCount counts contacts already live in another campaign on this channel (one live campaign per channel per contact) plus any whose slot was taken concurrently — re-enrolling someone already in THIS campaign is an idempotent no-op, not a rejection; remove them from the other campaign first (removeContactsFromCampaign) if you mean to move them. skippedDetachedReplierCount counts contacts the campaign’s reply employee was deliberately detached from; they are held back rather than silently re-attached, and the revive action that clears them is app-side and not exposed here (see getCampaignAudienceCounts). A campaign that has been ENDED takes no new members and returns all-zero counts. If any contactId belongs to another organization the WHOLE batch is refused. Confirm the result with listCampaignContacts or getCampaignAudienceCounts rather than assuming the requested ids enrolled.

## Call

```ts
const result = await client.campaigns.enrollContactsInCampaign({ campaignId: '<id>', contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EnrollContactsInCampaignMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EnrollContactsInCampaignMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `campaignId` | `ID!` | yes | — |
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "campaignsMutation": {
    "enrollContactsInCampaign": {
      "enrolledCount": true,
      "rejectedCount": true,
      "skippedDetachedReplierCount": true
    }
  }
}
```
