<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# archiveDeal

mutation · domain `deals` · requires the WRITE scope

Archive or RESTORE one deal by id (isArchived true or false); archiveDeals archives many. Reversible: archiving takes the deal off the pipeline BOARD and deletes nothing. findDeals finds archived ones with isArchived: true. Archiving triggers no workflow, so it never sends a message. The deal must be in a pipeline owned by or shared with your organization.

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
