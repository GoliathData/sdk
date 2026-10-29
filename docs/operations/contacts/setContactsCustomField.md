<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactsCustomField

mutation · domain `contacts` · requires the WRITE scope

Set ONE DROPDOWN custom field to the same value across a selection of contacts: the bulk form of updateContact’s updateCustomFieldValues. customFieldId from listContactCustomFields; read the result per contact with getContact (`customFields[].values.dropdownSelectedValues`). Async bulk job: returns a bulkTaskId to poll with getBulkTask, so an immediate read-back will not show the change. DROPDOWN FIELDS ONLY: dropdownSelectedValues is its only value channel, so a TEXT / NUMBER / DOLLAR / DATE / LINK field cannot be written here (use updateContact per contact). Values are option LABELS (matched case-insensitively, stored as the canonical label), NOT ids: an id or any string not among the options is refused. It REPLACES each contact’s selection rather than adding, so send every option the contact should end up with; an EMPTY array CLEARS the field on every selected contact. More than one value needs `allowMultiple`. WHERE REFUSALS LAND: only the id checks run before the response (a field id not among your organization’s custom fields is a 403). Everything else (not a DROPDOWN, an unknown label, several values on a single-select field) is checked by the worker, so the call returns 200 with a bulkTaskId and the failure shows as `status: FAILED` on getBulkTask with NOTHING written. A 200 means "queued", never "applied": poll the task before reporting the change. POTENTIALLY OUTBOUND: each contact goes through the normal contact-update path, so contact-mutation events fire and a CONTACT workflow triggered on this field can start a run and send.

## Call

```ts
const result = await client.contacts.setContactsCustomField({ contactIds: ['<text>'], customFieldId: '<text>', dropdownSelectedValues: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetContactsCustomFieldMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetContactsCustomFieldMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]!` | yes | — |
| `customFieldId` | `String!` | yes | — |
| `dropdownSelectedValues` | `[String!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "setContactsCustomField": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
