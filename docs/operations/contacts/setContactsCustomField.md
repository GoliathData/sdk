<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactsCustomField

mutation · domain `contacts` · requires the WRITE scope

Set ONE DROPDOWN custom field to the same value across a whole selection of contacts — the bulk form of updateContact’s updateCustomFieldValues. customFieldId comes from listContactCustomFields; read the result back per contact with getContact (`customFields[].values.dropdownSelectedValues`). Async bulk job — returns a bulkTaskId to poll with getBulkTask, so an immediate read-back will not show the change. DROPDOWN FIELDS ONLY. dropdownSelectedValues is the only value channel this operation has, so a TEXT / NUMBER / DOLLAR / DATE / LINK field cannot be written here at all — use updateContact per contact for those. Values are the option LABEL strings (matched case-insensitively against the field’s defined options and stored as the canonical label), NOT option ids: an id, or any string that is not one of the field’s options, is refused. It REPLACES each contact’s selection for that field rather than adding to it, so send every option you want the contact to end up with; an EMPTY array CLEARS the field on every selected contact. More than one value requires the field’s `allowMultiple` to be true. WHERE THOSE REFUSALS LAND MATTERS: only the id checks run before the response — a field id that is not one of your organization’s custom fields is refused up front (403). Everything else (the field turning out not to be a DROPDOWN, an unknown option label, more than one value on a single-select field) is checked by the background worker, so the call still returns 200 with a bulkTaskId and the failure appears as `status: FAILED` on getBulkTask with NOTHING written. A 200 here therefore means "queued", never "applied" — always poll the task before reporting the change. POTENTIALLY OUTBOUND: each contact is written through the normal contact-update path, so contact-mutation events fire and a CONTACT workflow triggered on this field can start a run and send.

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
