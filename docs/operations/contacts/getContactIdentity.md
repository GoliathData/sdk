<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactIdentity

query · domain `contacts` · requires the READ scope

A contact's own email addresses — never its related people's (sub-contacts'), and never one marked WRONG.

## Call

```ts
const result = await client.contacts.getContactIdentity({ contactId: '<id>' })
// → Promise<GetContactIdentityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactIdentityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contact": {
      "id": true,
      "emails": {
        "email": true
      }
    }
  }
}
```
