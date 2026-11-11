<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactEmailCheckSummary

query · domain `emailChecks` · requires the READ scope

What checkContactEmails would spend on a selection: `uncheckedEmailCount` is the addresses on those contacts never checked (at most that many credits), `totalContacts` the contacts it holds. SELECTION, one of two forms: `contactIds`, or a contact filter (`filterId` from listContactFilters, or an inline `filterTree` in saveFilter’s CONTACT DSL, parsed strictly) with `selectCount: N`, the first N matches: count the filter with countContacts and pass that count. A filter without selectCount, or beside contactIds, is refused. At most 20,000 contacts per call.

## Call

```ts
const result = await client.emailChecks.getContactEmailCheckSummary()
// → Promise<GetContactEmailCheckSummaryQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactEmailCheckSummaryQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectCount` | `Int` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contactEmailCheckSummaryForSelection": {
      "totalContacts": true,
      "uncheckedEmailCount": true
    }
  }
}
```
