<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# checkContactEmails

mutation · domain `emailChecks` · requires the ADMIN scope

Check every never-checked email address on the selected contacts, the contacts table’s bulk Check emails. Addresses checked before are skipped and cost nothing; when the credits run out the rest stay unchecked. Async: poll getBulkTask(bulkTaskId); its `emailChecks` gives checkedCount, undeliverableCount and notCheckedCount once it finishes, and each result is on the address (getContact). getContactEmailCheckSummary first says how many addresses it would check. One email-verification credit per address checked, the same credits as the app (plan allowance first, then bought; checkBillingAction with action EMAIL_VERIFICATION says how many are left), so name the count and have the person agree before a large one. ADMIN: the key owner must currently be an org admin. SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.emailChecks.checkContactEmails(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<CheckContactEmailsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CheckContactEmailsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectCount` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "emailCheckMutation": {
    "checkContactEmails": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
