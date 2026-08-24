<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archiveDeal

mutation · domain `deals` · requires the WRITE scope

Archive or RESTORE one deal by id — isArchived: true archives, false restores. Fully reversible and single-record (THIS API exposes no bulk/select-all form; archive several by calling this once per id — and the app's deal board DOES have multi-select and select-all archive, so hand the user that surface for a whole-filter archive rather than reporting it impossible). Archiving takes the deal off the pipeline BOARD in the app; nothing is deleted. It does NOT drop the deal from findDeals — that op applies no archive filter unless you pass one, so an archived deal still comes back in a default search (sorted last) with isArchived: true on it. Pass findDeals(isArchived: false) for active-only, or findDeals(isArchived: true) to list archived deals and pick one to restore. Unlike a stage move, archiving triggers NO workflow automations, so it can never send a message — no confirmation needed on that count. Re-archiving an already-archived deal is a no-op. The deal must be in a pipeline owned by or shared with your organization.

## Call

```ts
const result = await client.deals.archiveDeal({ dealId: '<id>', isArchived: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ArchiveDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ArchiveDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `isArchived` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "changeArchiveStatus": {
      "id": true,
      "title": true,
      "isArchived": true
    }
  }
}
```
