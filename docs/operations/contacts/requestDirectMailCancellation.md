<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# requestDirectMailCancellation

mutation · domain `contacts` · requires the WRITE scope

Ask the mail provider to cancel one letter (listContactDirectMail id). contactId must be the contact the letter is on: the `id` getContact returns, which differs from a merged-away id (this write does not follow merges). It reads Canceled only once the provider confirms; asking again returns the same open request. Refused once the provider is producing or mailing it. Needs permission to manage workflows and mail.

## Call

```ts
const result = await client.contacts.requestDirectMailCancellation({ contactId: '<id>', pieceId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RequestDirectMailCancellationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RequestDirectMailCancellationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `pieceId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "requestDirectMailCancellation": {
      "id": true,
      "status": true
    }
  }
}
```
