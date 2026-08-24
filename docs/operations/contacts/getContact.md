<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContact

query · domain `contacts` · requires the READ scope

MERGED IDS RESOLVE: if the id you pass was merged into another contact, this returns the SURVIVING record — so the `id` that comes back can differ from the one you sent. Use the returned id for anything that follows (it is the live record); do not re-send the old one and do not report the difference as an error. An id whose merge chain leads nowhere is not redirected and answers as not-found. Fetch one contact by id — the full record: identity, emails, phones (with DNC status), mailing addresses, subject properties, tags, lists, CUSTOM-FIELD VALUES, assigned teammates + roles, teams, notes, linked deals, seller-intent score, and enrichment/archive flags. Each note carries `author` — { kind: USER | AI, id, name } — which is who WROTE it: read that, not `createdByUser`, which is null on a note an AI assistant wrote on a teammate’s behalf. CUSTOM FIELDS — this is the read-back for values written via createContact.addCustomFieldValues / updateContact.updateCustomFieldValues, and the ONLY one (listContactCustomFields returns definitions, never values). `customFields` lists the organization’s custom fields — the catalog, not this contact’s answers — whether or not this contact has one, so the list length tells you nothing about the contact (fields sharing a normalized name are collapsed to one entry, so it is not always identical to listContactCustomFields either). The value is in `values`, and it is NULL when this contact has no recorded value for that field — null means UNSET, it does NOT mean the field is missing or unreadable, and it is not an error. Read the answer out of the ONE sub-field that matches the field `type`, because the other three stay null on every type: TEXT and LINK → `values.textValue`; NUMBER and DOLLAR → `values.numberValue` (DOLLAR is a plain number, NOT cents — it is stored exactly as written); DATE → `values.dateValue` (ISO 8601); DROPDOWN → `values.dropdownSelectedValues`, a list of the selected option LABELS (the option strings, NOT option ids), which holds at most one entry unless the field’s `allowMultiple` is true. A non-dropdown field never populates dropdownSelectedValues and a dropdown never populates textValue, so reading the wrong one reports an unset field for a contact that has an answer. A LINK value is stored normalized (a bare host comes back with its scheme), so compare what you wrote against what comes back rather than assuming byte equality.

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
        "status": true
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
        }
      },
      "deals": {
        "id": true,
        "title": true,
        "priceCents": true,
        "stage": {
          "id": true,
          "name": true
        }
      }
    }
  }
}
```
