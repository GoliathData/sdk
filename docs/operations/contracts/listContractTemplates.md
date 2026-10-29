<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContractTemplates

query · domain `contracts` · requires the READ scope

The organization's contract templates: name, category, status (only a PUBLISHED one with a currentVersionNumber can be sent), signer roles in signing order, and the records a send asks for (`uses`: Contact A, Contact B, Deal, Property), and how many contracts went out from it (`sentCount`) and came back signed (`signedCount`). Archived ones only with includeArchived.

## Call

```ts
const result = await client.contracts.listContractTemplates()
// → Promise<ListContractTemplatesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContractTemplatesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `includeArchived` | `Boolean` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsQuery": {
    "templates": {
      "id": true,
      "name": true,
      "category": true,
      "status": true,
      "currentVersionNumber": true,
      "signerRoles": true,
      "uses": true,
      "sentCount": true,
      "signedCount": true
    }
  }
}
```
