<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateContactExternalLink

mutation · domain `contacts` · requires the WRITE scope

Change a contact link's title or URL (an omitted one is kept).

## Call

```ts
const result = await client.contacts.updateContactExternalLink({ contactId: '<id>', linkId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateContactExternalLinkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateContactExternalLinkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `linkId` | `ID!` | yes | — |
| `title` | `String` | no | — |
| `url` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "updateContactExternalLink": {
      "id": true
    }
  }
}
```
