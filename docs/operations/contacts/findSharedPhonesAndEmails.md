<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# findSharedPhonesAndEmails

query · domain `contacts` · requires the READ scope

Groups of 2+ contacts carrying the same phone number (kind PHONE, the default) or email (kind EMAIL), WHATEVER THEIR NAMES, largest first, in ONE call: value (10-digit number or lowercase email), memberCount (every contact you see carrying it: say this number), members (the first 25, VERIFIED holders first) with their statuses for it. "How many times does this number show up", "who else has this number", a household or family on one line: this, not findDuplicateContactGroups (same name only). Never counted: a number marked WRONG, a relative's (sub-contact) number, a reserved-domain email (example.com). totalCount = groups across everything you see.

## Call

```ts
const result = await client.contacts.findSharedPhonesAndEmails()
// → Promise<FindSharedPhonesAndEmailsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FindSharedPhonesAndEmailsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `kind` | `SharedContactInfoKind` | no | PHONE |
| `limit` | `Int` | no | 50 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "sharedContactInfoGroups": {
      "groups": {
        "value": true,
        "memberCount": true,
        "members": {
          "id": true,
          "name": true,
          "statuses": true
        }
      },
      "totalCount": true,
      "truncated": true,
      "hasMore": true
    }
  }
}
```
