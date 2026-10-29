<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createFormContactLink

mutation · domain `forms` · requires the WRITE scope

A link to an ACTIVE form for one contact, opening prefilled with their details; their answers land on their contact. url for an email's link, shortUrl for a text.

## Call

```ts
const result = await client.forms.createFormContactLink({ formId: '<id>', contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateFormContactLinkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateFormContactLinkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormMutation": {
    "createContactLink": {
      "id": true,
      "url": true,
      "shortUrl": true,
      "formName": true,
      "prefill": true,
      "prefillFieldCount": true
    }
  }
}
```
