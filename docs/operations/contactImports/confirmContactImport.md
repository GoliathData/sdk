<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# confirmContactImport

mutation · domain `contactImports` · requires the WRITE scope

Import every row of the spreadsheet as contacts: the step the Import page’s Import button runs. Rows that match an existing contact update it instead of duplicating it. Every import puts its contacts on its own list, “Contacts from <file name>”; tagName adds a second list of that name (optional; a list, not a tag), so pass it only for a list the person named or picked, never one you made from the file’s name. attestationAccepted records that the person affirmed they have a lawful basis to contact everyone on the list; the import is refused without it, so pass true only on their yes (in a chat, their yes on the import task’s approval card, which shows the attestation). reviveArchivedMatches (default true) restores archived contacts the file matches. optOutTagName is the tag the mapping puts on the file’s opt-outs (a DNC column or tag, for example "DNC"): when the import finishes, every contact it imported that carries that tag is marked Do Not Contact, as part of the import, so nothing waits on it to mark them; omit it when the file marks nobody. Only after the person has seen the preview and said yes to importing this file, with this list. It starts a background task and returns at once; the chat that started it is told when it finishes, so never wait on it.

## Call

```ts
const result = await client.contactImports.confirmContactImport({ fileProcessingTaskId: '<id>', attestationAccepted: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ConfirmContactImportMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ConfirmContactImportMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |
| `tagName` | `String` | no | — |
| `attestationAccepted` | `Boolean!` | yes | — |
| `reviveArchivedMatches` | `Boolean` | no | — |
| `optOutTagName` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskMutation": {
    "confirmContactTransformerUpload": {
      "id": true,
      "status": true
    }
  }
}
```
