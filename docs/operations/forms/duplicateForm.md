<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# duplicateForm

mutation · domain `forms` · requires the WRITE scope

Copy a form: its fields, steps and settings, never its submissions or analytics. name defaults to "<name> copy". Returns the new form.

## Call

```ts
const result = await client.forms.duplicateForm({ formId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DuplicateFormMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DuplicateFormMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |
| `name` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormMutation": {
    "duplicate": {
      "id": true,
      "name": true
    }
  }
}
```
