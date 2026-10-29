<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationCallLinePolicy

mutation · domain `account` · requires the ADMIN scope

Which line a manual dial to a contact defaults to: ASK_BEFORE_DIALING (ask when the contact last called on another line), USER_PRIMARY_LINE (the caller's own line) or LAST_CALL_LINE (the contact's last line, which widens who may dial from a line). Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationCallLinePolicy({ policy: <CallLinePolicy> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationCallLinePolicyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationCallLinePolicyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `policy` | `CallLinePolicy!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationCallLinePolicy": {
      "id": true,
      "callLinePolicy": true
    }
  }
}
```
