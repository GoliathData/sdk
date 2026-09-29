<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# upsertScraperHealthCard

mutation · domain `deals` · requires the WRITE scope

Open the Scraper Health card for one scraper benchmark, or get the one already open. input: { key, pipelineId, stageId, title, description?, event }. `key` names the benchmark (1-200 chars of lowercase letters, digits and : _ . -, starting with a letter or digit) and is namespaced by your organization. When your organization has no card for the key, one is created in stageId (which must be a stage of pipelineId) together with its first SCRAPER_HEALTH_MOVED event, in ONE transaction — so two callers racing on the same key still leave one card. When the card exists it is returned UNTOUCHED with created: false: no event is written and it is not moved, whatever stageId you sent — use moveScraperHealthCard to move it. `event` is { healthActor: MONITOR | DOCTOR | PERSON, why (required, max 4000 chars), checked?, found?, nextTime? (max 4000 each), delivered?, expected? (may be fractional), windowDays?, handoffSummary? (max 600 — the short "what happened, where it stands" a person reads first) }; stage names and the acting key owner are filled in by the server. An oversized or malformed event is rejected (BAD_USER_INPUT) before anything is written. Returns { created, card { id, title, pipelineId, stageId, stageName, updatedAt, sourceKey } }. A new card wakes the stage-entry workflows of its stage like any other new deal.

## Call

```ts
const result = await client.deals.upsertScraperHealthCard({ input: <UpsertScraperHealthCardInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpsertScraperHealthCardMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpsertScraperHealthCardMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `UpsertScraperHealthCardInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "upsertScraperHealthCard": {
      "created": true,
      "card": {
        "id": true,
        "title": true,
        "pipelineId": true,
        "stageId": true,
        "stageName": true,
        "updatedAt": true,
        "sourceKey": true
      }
    }
  }
}
```
