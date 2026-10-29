<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# issueContractSigningLink

mutation · domain `contracts` · requires the WRITE scope

A working signing link for ONE signer whose turn it is (`recipientId`: getContract's recipients[].id), returned once for you to pass to that signer yourself. Nothing is emailed, and the emailed link keeps working; remindContract or voidContract retires both. Opening it still asks for the code we email the signer. Never for the key owner's own signature (they sign in the app). Needs the manage contracts capability.

## Call

```ts
const result = await client.contracts.issueContractSigningLink({ contractId: '<id>', recipientId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<IssueContractSigningLinkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `IssueContractSigningLinkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contractId` | `ID!` | yes | — |
| `recipientId` | `ID!` | yes | — |
| `expectedRevisionNumber` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "issueSigningLink": {
      "url": true,
      "expiresAt": true
    }
  }
}
```
