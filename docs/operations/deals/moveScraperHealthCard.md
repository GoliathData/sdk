<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveScraperHealthCard

mutation · domain `deals` · requires the WRITE scope

Move a Scraper Health card to another stage of its OWN pipeline and record why — the stage change and its SCRAPER_HEALTH_MOVED event commit together or not at all, so a card never sits in a stage without its reasoning. input: { dealId, toStageId, expectedUpdatedAt?, event } with `event` exactly as on upsertScraperHealthCard. fromStage and toStage are the stage NAMES as the server reads them — never sent by you. ALWAYS pass expectedUpdatedAt — the card's updatedAt from the read you decided on (getScraperHealthCard or your previous write): when it is not the card's current version nothing is written and you get CONFLICT — re-read the card and its history, then decide again. Omitted, the server guards on its OWN read, which only catches an edit landing in the milliseconds before the write; a move someone made after your read would be silently overridden. After a failed or timed-out call, re-read the card before retrying: the move may have committed, and a retry that finds the card already in toStage records the verdict a second time. Moving to the stage the card is already in writes the event and changes no stage — how a verdict that leaves a card where it is gets recorded. A stage from another pipeline, or a deal that is not a Scraper Health card, is refused (BAD_USER_INPUT); an oversized or malformed event is refused before anything is written. It is an ordinary stage move underneath: the STAGE_CHANGED feed entry and the destination stage's workflow wake still happen. Returns the card with its new updatedAt.

## Call

```ts
const result = await client.deals.moveScraperHealthCard({ input: <MoveScraperHealthCardInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveScraperHealthCardMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveScraperHealthCardMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `MoveScraperHealthCardInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "moveScraperHealthCard": {
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
```
