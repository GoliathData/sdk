<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteForm

mutation · domain `forms` · requires the WRITE scope

HARD-DELETE a lead-capture form by id. IRREVERSIBLE and CASCADING - this also permanently removes ALL of the form's submissions, events, and viewer/lead history. To turn a form off without losing data, use updateForm(status: INACTIVE) instead. Returns true on success.

## Call

```ts
const result = await client.forms.deleteForm({ formId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteFormMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteFormMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormMutation": {
    "delete": true
  }
}
```
