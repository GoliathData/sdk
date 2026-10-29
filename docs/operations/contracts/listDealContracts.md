<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listDealContracts

query · domain `contracts` · requires the READ scope

A deal's contracts, held drafts included, newest first, at most 50.

## Call

```ts
const result = await client.contracts.listDealContracts({ dealId: '<id>' })
// → Promise<ListDealContractsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListDealContractsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsQuery": {
    "dealContracts": {
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
