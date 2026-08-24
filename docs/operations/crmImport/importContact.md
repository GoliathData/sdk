<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# importContact

mutation · domain `crmImport` · requires the IMPORT scope

Create-or-get a contact migrated from an external system. Keyed on (sourceSystem, externalId): replaying the same record returns the existing contact with wasCreated=false instead of duplicating. Honors historical createdAt/updatedAt (must be in the past) and suppresses live side effects — no workflow triggers, no notifications, no default assignments. The contact field takes the same shape as createContact.

## Call

```ts
const result = await client.crmImport.importContact({ input: <ImportContactInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ImportContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ImportContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `ImportContactInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "crmImportMutation": {
    "importContact": {
      "contactId": true,
      "wasCreated": true
    }
  }
}
```
