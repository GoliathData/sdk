<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setContactDoNotContact

mutation · domain `contacts` · requires the WRITE scope

Mark a contact Do Not Contact (optional reason): every text, email and call to it is blocked, its workflow runs stop for good and its AI employees come off. This API cannot clear it; it is cleared on the contact page in the app. Use the id getContact returns (a merged-away id writes the retired record). Confirm first. A card counts.

## Call

```ts
const result = await client.contacts.setContactDoNotContact({ contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetContactDoNotContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetContactDoNotContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `reason` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "setContactDoNotContact": {
      "id": true,
      "doNotContact": true
    }
  }
}
```
