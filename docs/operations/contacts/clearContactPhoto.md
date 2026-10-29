<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# clearContactPhoto

mutation · domain `contacts` · requires the WRITE scope

Remove a contact's photo; the image stays on the contact.

## Call

```ts
const result = await client.contacts.clearContactPhoto({ contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ClearContactPhotoMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ClearContactPhotoMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "clearContactPhoto": {
      "id": true
    }
  }
}
```
