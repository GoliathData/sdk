<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# keepContractAsTemplate

mutation · domain `contracts` · requires the WRITE scope

Keep a one-off contract as a template under a name and category: it joins the template list and pickers. templateId is the contract's own (listContracts, listContactContracts, listDealContracts). One-way.

## Call

```ts
const result = await client.contracts.keepContractAsTemplate({ templateId: '<id>', name: '<text>', category: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<KeepContractAsTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `KeepContractAsTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `templateId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |
| `category` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "saveAsTemplate": {
      "id": true,
      "name": true,
      "category": true,
      "oneOff": true
    }
  }
}
```
