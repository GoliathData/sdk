<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# clearContactDoNotContact

mutation · domain `communications` · requires the WRITE scope

Take one contact off Do Not Contact, as the contact page's toggle does, so texts, calls, emails and workflows reach them again. Only when the contact asked to be contacted again. A value-level opt-out on one of their numbers or addresses stays until clearChannelSuppression lifts it. Returns the contact's id and doNotContact.

## Call

```ts
const result = await client.communications.clearContactDoNotContact({ contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ClearContactDoNotContactMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ClearContactDoNotContactMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "clearContactDoNotContact": {
      "id": true,
      "doNotContact": true
    }
  }
}
```
