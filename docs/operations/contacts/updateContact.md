<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateContact

mutation · domain `contacts` · requires the WRITE scope

Update a contact by contactId — the general-purpose per-contact write, and a broader one than its name suggests. Everything below is threaded and applied; the whole input is one variable, so the discovery docs cannot expand it and this list is the contract. Identity: `name`, `isArchived` (pass false to RESTORE one archived contact — unarchiveContacts is the selection-wide form), `importantNote` (the pinned note on the record, not a timeline note — addContactNote writes those). Channels: addPhoneNumbers / updatePhoneNumbers / removePhoneNumbers, addEmails / updateEmails / removeEmails, addMailingAddresses / updateMailingAddresses / removeMailingAddresses (an edit is remove-then-add: removeMailingAddresses takes the MAPPING-row id from mailingAddresses[].id, not an address id). Subject properties: addProperties / updateProperties / removeProperties — this is how "add 123 Oak St to this contact" is done; addProperties takes a propertyId from findProperties/getProperty plus a verificationStatus. Relatives: `subContacts` (upsert — omit the id to create) and removeSubContacts. Custom fields: updateCustomFieldValues, each entry { contactId, customFieldId, and exactly ONE of textValue / numberValue / dateValue / dropdownSelectedValues per the field type — see getContact for the per-type read-back shape }; the response echoes `customFields` so you can confirm the value landed instead of assuming it. Files: deleteFileIds (detaches by UploadedFile id). Tags, lists, teammates and teams: addTagIds/removeTagIds, addToListIds/removeFromListIds, addCollaborators/removeCollaborators, addUserGroupIds/removeUserGroupIds. Everything is synchronous and reflected in the returned contact. Omitted fields are untouched; each add*/remove* pair is a delta, not a replacement. For the same changes across MANY contacts use the bulk ops (addContactTags/removeContactTags, addContactsToList/removeContactsFromList, assignContact/unassignContact, archiveContacts/unarchiveContacts), which are async and return a bulkTaskId.

## Call

```ts
const result = await client.contacts.updateContact({ input: <UpdateContactInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `UpdateContactInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "updateContact": {
      "id": true,
      "name": true,
      "isArchived": true,
      "emails": {
        "id": true,
        "email": true,
        "verificationStatus": true
      },
      "phoneNumbers": {
        "id": true,
        "phoneNumber": true,
        "phoneType": true,
        "verificationStatus": true
      },
      "tags": {
        "id": true,
        "name": true
      },
      "lists": {
        "id": true,
        "name": true
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
      }
    }
  }
}
```
