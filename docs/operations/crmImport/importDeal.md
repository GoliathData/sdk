<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# importDeal

mutation · domain `crmImport` · requires the IMPORT scope

Create-or-get a deal migrated from an external system. Keyed on (sourceSystem, externalId): replaying the same record returns the existing deal with wasCreated=false instead of duplicating. Honors historical createdAt/updatedAt (must be in the past) and suppresses live side effects — no workflow triggers (neither DEAL stage-entered nor per-contact deal-created events fire), no notifications. The deal field takes the same shape as createDeal: stageId from listPipelineStages, linked contacts/users by id, propertyStrings for unresolved addresses, customFieldValues from listDealCustomFields. The create is atomic — the deal row and every link (contacts, properties, users, splits) commit together or not at all, so a failed call leaves nothing behind and a retry re-creates cleanly. A replay (wasCreated=false) never rewrites the existing deal — links and edits made since the import are left alone — with one deliberate exception: custom-field values are filled where still MISSING (crash-retry recovery for the one write applied after the create) and never overwritten.

## Call

```ts
const result = await client.crmImport.importDeal({ input: <ImportDealInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ImportDealMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ImportDealMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `ImportDealInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "crmImportMutation": {
    "importDeal": {
      "dealId": true,
      "wasCreated": true
    }
  }
}
```
