<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewContactImport

query · domain `contactImports` · requires the READ scope

The first rows of an import as the contacts they will become, in the app’s own fields: name, phones, emails, property addresses, mailing addresses, tags, lists, deals, and custom fields (every custom field of the workspace is listed; the ones with values are the ones this row fills). contactTransformerRowCount is the number of rows the import will read. A row with error set and no contact will be skipped. contactTransformerRowFindings names the rows to tell the person about before they approve the import: a likely repeat of an earlier row (the same name and a shared phone or email, or for a nameless row a shared phone or email; the import usually merges it into that contact, so say it likely will, never that it will) and a row with no name (it lands under its phone or email), with 0-based row indexes, over the file’s first checkedRows rows; null means the check did not run, so never say the file has no repeats. limit is 1 to 10 (default 8). Show these rows to the person as a table, one row per contact, a column per field that any row fills, and say how many rows the file has. Read only; nothing is imported.

## Call

```ts
const result = await client.contactImports.previewContactImport({ fileProcessingTaskId: '<id>' })
// → Promise<PreviewContactImportQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewContactImportQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `limit` | `Int` | no | 8 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 10.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskQuery": {
    "contactTransformerRowCount": true,
    "contactTransformerRowFindings": {
      "checkedRows": true,
      "repeats": {
        "rowIndex": true,
        "sameAsRowIndex": true,
        "name": true
      },
      "namelessRowIndexes": true,
      "unstorablePhoneRowIndexes": true,
      "flaggedRowChannels": {
        "rowIndex": true,
        "name": true,
        "phone": true,
        "email": true,
        "droppedPhone": true
      }
    },
    "contactTransformerPreview": {
      "rowIndex": true,
      "error": true,
      "mappedNoteBody": true,
      "unlandedCells": true,
      "contact": {
        "name": true,
        "subContacts": {
          "name": true,
          "relation": true
        },
        "phoneNumbers": {
          "phoneNumber": true,
          "phoneType": true
        },
        "emails": {
          "email": true
        },
        "properties": {
          "propertyString": true
        },
        "mailingAddresses": {
          "rawText": true,
          "address": {
            "line1": true,
            "line2": true,
            "city": true,
            "state": true,
            "zip": true
          }
        },
        "tags": {
          "name": true
        },
        "lists": {
          "name": true
        },
        "deals": {
          "title": true,
          "stage": {
            "name": true
          },
          "pipeline": {
            "name": true
          }
        },
        "customFields": {
          "name": true,
          "values": {
            "textValue": true,
            "numberValue": true,
            "calendarDate": true,
            "dropdownSelectedValues": true
          }
        }
      }
    }
  }
}
```
