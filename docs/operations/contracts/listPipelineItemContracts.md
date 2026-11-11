<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineItemContracts

query · domain `contracts` · requires the READ scope

A pipeline item's contracts, held drafts included, newest first, at most 50.

## Call

```ts
const result = await client.contracts.listPipelineItemContracts({ pipelineItemId: '<id>' })
// → Promise<ListPipelineItemContractsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelineItemContractsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsQuery": {
    "pipelineItemContracts": {
      "id": true,
      "title": true,
      "templateId": true,
      "status": true,
      "held": true,
      "contactId": true,
      "contactName": true,
      "signerCount": true,
      "signedCount": true,
      "sentAt": true,
      "expiresAt": true,
      "completedAt": true,
      "signers": {
        "displayName": true,
        "status": true,
        "signedAt": true
      }
    }
  }
}
```
