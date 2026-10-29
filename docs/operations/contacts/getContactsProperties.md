<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactsProperties

query · domain `contacts` · requires the READ scope

Many contacts' linked properties in ONE read: `contactIds` in (a bulk selection's ids, up to 200), each contact's `properties[]` out (`propertyString`, and `property.id`, the property id a skip trace, export or PROPOSE_BULK_TASK selection takes; null when the address never matched a parcel, so it cannot be traced). Use it to turn contacts into their properties, never one getContact per contact. Every id must be one of this workspace's contacts (one outside it refuses the call); a contact you may not open is left out, and a merged id is not followed, so use the ids filterContacts or findContacts returned.

## Call

```ts
const result = await client.contacts.getContactsProperties({ contactIds: ['<id>'] })
// → Promise<GetContactsPropertiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactsPropertiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "getContacts": {
      "id": true,
      "name": true,
      "isArchived": true,
      "properties": {
        "propertyString": true,
        "status": true,
        "property": {
          "id": true
        }
      }
    }
  }
}
```
