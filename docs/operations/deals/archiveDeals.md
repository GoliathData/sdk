<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archiveDeals

mutation · domain `deals` · requires the WRITE scope

Archive many deals of one pipeline by id (restore with archiveDeal); a whole filter is the board's own select-all Archive. Runs as a background task: follow `bulkTaskId` with getBulkTask.

## Call

```ts
const result = await client.deals.archiveDeals({ pipelineId: '<id>', dealIds: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ArchiveDealsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ArchiveDealsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineId` | `ID!` | yes | — |
| `dealIds` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "archiveDeals": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
