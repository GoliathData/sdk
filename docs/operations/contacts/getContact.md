<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContact

query · domain `contacts` · requires the READ scope

MERGED IDS RESOLVE: an id merged into another contact returns the SURVIVING record, so the `id` that comes back can differ from the one you sent. Use the returned id from then on, never the old one; it is not an error. A merge chain that leads nowhere answers as not-found. Fetch one contact by id, the full record: identity, emails, phones (with DNC status), mailing addresses, subject properties (`property.id` feeds getRelatedProperties), tags, lists, CUSTOM-FIELD VALUES, teammates + roles, teams, notes (with `isPinned`, `isHidden` and `replies`), linked deals (`isArchived: true` is not live), seller-intent score, enrichment/archive flags. A note is the team's record, never a message from the contact; calls are not here (listContactActivities [CALL]). A note's or reply's `author` { kind: USER | AI, id, name } is who WROTE it; read that, not `createdByUser`, which is null on a note an AI assistant wrote for a teammate. A hidden note or reply is shown only to admins; `replies` also omits ones you may not see (e.g. an outside author's), so a missing reply is not proof it is gone. CUSTOM FIELDS: the ONLY read-back for values written via createContact.addCustomFieldValues / updateContact.updateCustomFieldValues (listContactCustomFields returns definitions, never values). `customFields` is the organization's field catalog, not this contact's answers, listed whether or not the contact has one, so its length says nothing about the contact (fields sharing a normalized name collapse to one entry, so it can differ from listContactCustomFields). The value is in `values`, NULL when this contact has none: null means UNSET, not missing, unreadable or an error. Read the ONE sub-field matching the field `type`; the other three stay null on every type: TEXT and LINK → `values.textValue`; NUMBER and DOLLAR → `values.numberValue` (DOLLAR is a plain number as written, NOT cents); DATE → `values.dateValue` (ISO 8601); DROPDOWN → `values.dropdownSelectedValues`, the selected option LABELS (not option ids), at most one entry unless `allowMultiple` is true. Reading the wrong one reports an unset field for a contact that has an answer. A LINK value is stored normalized (a bare host gains its scheme), so compare what you wrote with what comes back rather than assume byte equality.

## Call

```ts
const result = await client.contacts.getContact({ contactId: '<id>' })
// → Promise<GetContactQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
      "name": true,
      "createdAt": true,
      "isArchived": true,
      "isEnriched": true,
      "sellerIntentScore": true,
      "doNotContact": true,
      "doNotContactReason": true,
      "doNotContactSetAt": true,
      "doNotContactSetBy": {
        "id": true,
        "firstName": true,
        "lastName": true
      },
      "emails": {
        "id": true,
        "email": true,
        "verificationStatus": true
      },
      "phoneNumbers": {
        "id": true,
        "phoneNumber": true,
        "phoneType": true,
        "verificationStatus": true,
        "dncStatus": {
          "isDnc": true,
          "isLitigator": true
        }
      },
      "mailingAddresses": {
        "id": true,
        "rawText": true,
        "verificationStatus": true,
        "address": {
          "addressFull": true
        }
      },
      "properties": {
        "id": true,
        "propertyString": true,
        "status": true,
        "verificationStatus": true,
        "property": {
          "id": true
        }
      },
      "tags": {
        "id": true,
        "name": true
      },
      "lists": {
        "id": true,
        "name": true
      },
      "customFields": {
        "id": true,
        "name": true,
        "type": true,
        "allowMultiple": true,
        "values": {
          "textValue": true,
          "dateValue": true,
          "numberValue": true,
          "dropdownSelectedValues": true
        }
      },
      "participants": {
        "status": true,
        "user": {
          "id": true,
          "firstName": true,
          "lastName": true,
          "email": true
        }
      },
      "userGroups": {
        "id": true,
        "name": true
      },
      "notes": {
        "id": true,
        "body": true,
        "createdAt": true,
        "author": {
          "kind": true,
          "id": true,
          "name": true
        },
        "createdByUser": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "isPinned": true,
        "isHidden": true,
        "replies": {
          "id": true,
          "body": true,
          "isHidden": true,
          "author": {
            "kind": true,
            "id": true,
            "name": true
          }
        }
      },
      "deals": {
        "id": true,
        "title": true,
        "priceCents": true,
        "isArchived": true,
        "priceFormatted": true,
        "stage": {
          "id": true,
          "name": true
        }
      }
    }
  }
}
```
