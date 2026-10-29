<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPropertyOwners

query · domain `properties` · requires the READ scope

A property's people. `crmContacts`: your own contacts at it (linked, or at its street and ZIP), with `relation` (OWNS or null = owner; FORMER_OWNER, MAILING and the rest are not) and the phones and emails already on them. `people`: owners and relatives from public records, with phones and emails generally only after a skip trace. A crmContacts phone means you already have a number. Reading never spends a credit.

## Call

```ts
const result = await client.properties.getPropertyOwners({ propertyId: '<id>' })
// → Promise<GetPropertyOwnersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPropertyOwnersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `propertyId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "property": {
    "fetchProperty": {
      "id": true,
      "address": {
        "addressFull": true
      },
      "skipTraceStatus": true,
      "lastSkiptracedAt": true,
      "isStaleSkiptrace": true,
      "people": {
        "id": true,
        "firstName": true,
        "middleName": true,
        "lastName": true,
        "suffix": true,
        "age": true,
        "phoneNumbers": {
          "number": true,
          "type": true,
          "ranking": true,
          "dncStatus": {
            "isDnc": true,
            "isLitigator": true
          }
        },
        "emails": {
          "email": true,
          "ranking": true
        },
        "isRelative": true,
        "relativeIds": true,
        "ranking": true,
        "deceased": true,
        "isNameOnDeed": true
      },
      "crmContacts": {
        "relation": true,
        "matchedBy": true,
        "contact": {
          "id": true,
          "name": true,
          "doNotContact": true,
          "phoneNumbers": {
            "phoneNumber": true,
            "dncStatus": {
              "isDnc": true
            }
          },
          "emails": {
            "email": true
          }
        }
      }
    }
  }
}
```
