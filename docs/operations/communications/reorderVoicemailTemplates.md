<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# reorderVoicemailTemplates

mutation · domain `communications` · requires the WRITE scope

Set the order of a person's voicemail drops: items are { id, displayOrder } for that userId.

## Call

```ts
const result = await client.communications.reorderVoicemailTemplates({ userId: '<id>', items: [<ReorderVoicemailTemplateItemInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReorderVoicemailTemplatesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReorderVoicemailTemplatesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID!` | yes | — |
| `items` | `[ReorderVoicemailTemplateItemInput!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsMutation": {
    "reorderVoicemailTemplates": {
      "id": true,
      "name": true,
      "displayOrder": true
    }
  }
}
```
