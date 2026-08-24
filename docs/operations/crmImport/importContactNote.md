<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# importContactNote

mutation · domain `crmImport` · requires the IMPORT scope

Create-or-get a historical note on a contact, attributed to a real member of the organization (authorUserId). Keyed on (sourceSystem, externalId) — replays return the existing note. Honors historical createdAt so the note interleaves into the timeline at its true position; publishes no notifications. Optional metadata carries structured source-system provenance; the result echoes the STORED metadata, which a replay never overwrites.

## Call

```ts
const result = await client.crmImport.importContactNote({ input: <ImportContactNoteInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ImportContactNoteMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ImportContactNoteMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `ImportContactNoteInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "crmImportMutation": {
    "importContactNote": {
      "noteId": true,
      "contactId": true,
      "metadata": true
    }
  }
}
```
