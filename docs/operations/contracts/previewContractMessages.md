<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# previewContractMessages

mutation · domain `contracts` · requires the WRITE scope

What the first signers would be sent: the signing email's words (`email`) and the text (`text`), each null when no first signer is reached that way, worded by the send's own code. Takes what prepareContract takes as `input.contract`. Nothing is saved or sent.

## Call

```ts
const result = await client.contracts.previewContractMessages({ input: <AdminContractSendInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PreviewContractMessagesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PreviewContractMessagesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `AdminContractSendInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contractsMutation": {
    "previewMessages": {
      "email": {
        "to": true,
        "fromName": true,
        "subject": true,
        "heading": true,
        "senderName": true,
        "replyToFirstName": true,
        "message": true,
        "documentTitle": true,
        "documentDetail": true,
        "openBy": true
      },
      "text": {
        "to": true,
        "body": true
      }
    }
  }
}
```
