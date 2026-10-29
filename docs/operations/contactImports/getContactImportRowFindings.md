<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactImportRowFindings

query · domain `contactImports` · requires the READ scope

The rows of an import whose phone the import cannot store (not a full US number): they come in without that phone. unstorablePhoneRowIndexes are 0-based, so row N is index + 1; checkedRows is how many of the file’s first rows were checked (up to 100): past them nothing was checked, so say so. Null when the check could not run. Read it once for the finish report (W20 BP14).

## Call

```ts
const result = await client.contactImports.getContactImportRowFindings({ fileProcessingTaskId: '<id>' })
// → Promise<GetContactImportRowFindingsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactImportRowFindingsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `fileProcessingTaskId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "fileProcessingTaskQuery": {
    "contactTransformerRowFindings": {
      "checkedRows": true,
      "unstorablePhoneRowIndexes": true
    }
  }
}
```
