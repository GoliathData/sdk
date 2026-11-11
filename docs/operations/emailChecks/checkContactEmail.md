<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# checkContactEmail

mutation · domain `emailChecks` · requires the ADMIN scope

Check one of a contact's email addresses now (`contactEmailId` from getContact `emails`) and save the result on it, as the contact page's Check does. Returns the address with its `emailCheck` (`result` DELIVERABLE, RISKY, UNDELIVERABLE or UNKNOWN). `skipReason` set means the check did not run (NO_CREDITS, PROVIDER_ERROR, …), nothing was spent and any earlier result stays. An address not on that contact is NOT_FOUND. One email-verification credit per address checked, the same credits as the app (plan allowance first, then bought; checkBillingAction with action EMAIL_VERIFICATION says how many are left), so name the count and have the person agree before a large one. ADMIN: the key owner must currently be an org admin.

## Call

```ts
const result = await client.emailChecks.checkContactEmail({ contactId: '<id>', contactEmailId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CheckContactEmailMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CheckContactEmailMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `contactEmailId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "emailCheckMutation": {
    "checkContactEmail": {
      "skipReason": true,
      "contactEmail": {
        "id": true,
        "email": true,
        "emailCheck": {
          "result": true,
          "reason": true,
          "checkedAt": true,
          "source": true,
          "checkedBy": true
        }
      }
    }
  }
}
```
