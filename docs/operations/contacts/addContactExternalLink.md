<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addContactExternalLink

mutation · domain `contacts` · requires the WRITE scope

Add a titled URL to a contact's Links card (getContactConnections externalLinks): a web address, or an app path starting with / (it becomes the app's own URL). Never for a Library file or page: those go on the contact's files with fileLibraryItemsOnContact.

## Call

```ts
const result = await client.contacts.addContactExternalLink({ contactId: '<id>', title: '<text>', url: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddContactExternalLinkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddContactExternalLinkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `title` | `String!` | yes | — |
| `url` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "createContactExternalLink": {
      "id": true
    }
  }
}
```
