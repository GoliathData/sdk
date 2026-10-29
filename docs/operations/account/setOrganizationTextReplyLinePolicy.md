<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationTextReplyLinePolicy

mutation · domain `account` · requires the ADMIN scope

Which line a contact's text composer opens on: USER_PRIMARY_LINE (the sender's own line) or LAST_THREAD_LINE (the line the contact last talked to, which widens who may text from a line). Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationTextReplyLinePolicy({ policy: <TextReplyLinePolicy> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationTextReplyLinePolicyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationTextReplyLinePolicyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `policy` | `TextReplyLinePolicy!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationTextReplyLinePolicy": {
      "id": true,
      "textReplyLinePolicy": true
    }
  }
}
```
