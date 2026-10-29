<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContracts

query · domain `contracts` · requires the READ scope

The organization's contracts, newest first (at most 200), with status and who signed. `held` marks a workflow or AI employee send waiting on a blank required value (getHeldContractDraft).

## Call

```ts
const result = await client.contracts.listContracts()
// → Promise<ListContractsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContractsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsQuery": {
    "contracts": {
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
