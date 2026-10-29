<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateContact

mutation · domain `contacts` · requires the WRITE scope

Update a contact by contactId: the general-purpose per-contact write. All of it, contactId too, is one `input` variable the docs cannot expand, so this list is the contract. Identity: `name`, `isArchived` (false RESTORES one archived contact; unarchiveContacts for many), `importantNote` (the record's important-note field, not a timeline note: addContactNote writes those, changeNotePinned pins one). Channels: addPhoneNumbers (verificationStatus: UNVERIFIED unless the person was reached on it) / updatePhoneNumbers / removePhoneNumbers (updatePhoneNumbers sets only verificationStatus, phoneType, note, ranking: a new number is remove-then-add; a US number is stored as 10 digits and formatted for display, so reformatting needs no write), addEmails / updateEmails / removeEmails, addMailingAddresses / updateMailingAddresses / removeMailingAddresses (their home or mailing address: "lives at X, not Y" replaces it here, never as a property; an edit is remove-then-add; removeMailingAddresses takes the MAPPING-row id from mailingAddresses[].id, not an address id). Subject properties: addProperties / updateProperties / removeProperties, how "add 123 Oak St to this contact" is done; addProperties takes a propertyId from findProperties/getProperty plus a verificationStatus. Relatives: `subContacts` (upsert; omit the id to create) and removeSubContacts. Custom fields: updateCustomFieldValues, each { contactId, customFieldId, exactly ONE of textValue / numberValue / dateValue / dropdownSelectedValues per the field type (getContact shows the per-type read-back); dropdownSelectedValues takes the option LABELS (an option id is read as its label), and a value the field has no option for is refused with the field options listed }; the response echoes `customFields` so you can confirm the value landed. Files: deleteFileIds (detaches by UploadedFile id). Tags, lists, teammates, teams: addTagIds/removeTagIds, addToListIds/removeFromListIds, addCollaborators/removeCollaborators, addUserGroupIds/removeUserGroupIds. Synchronous; returns the contact. Omitted fields are untouched; each add*/remove* pair is a delta, not a replacement. For MANY contacts use the bulk ops (addContactTags/removeContactTags, addContactsToList/removeContactsFromList, assignContact/unassignContact, archiveContacts/unarchiveContacts), which are async and return a bulkTaskId.

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
