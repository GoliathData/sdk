<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmailOptOuts

query · domain `deliveryHealth` · requires the READ scope

Who opted out of email (unsubscribed, a spam complaint, blocked by a teammate, imported), newest first: email, source, reason, optedOutAt and the contacts you can see carrying it. Addresses no contact you see carries are never listed (totalCount and notVisibleCount, null unless you may see every contact, count them). Hard bounces are not opt-outs and are left out (a bounced message reads deliveryStatus BOUNCED in getEmailThread). Texts: listSmsOptOuts.

## Call

```ts
const result = await client.deliveryHealth.listEmailOptOuts()
// → Promise<ListEmailOptOutsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmailOptOutsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 25 |
| `since` | `DateTime` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "emailOptOuts": {
      "items": {
        "email": true,
        "source": true,
        "reason": true,
        "optedOutAt": true,
        "contacts": {
          "id": true,
          "name": true
        }
      },
      "totalCount": true,
      "notVisibleCount": true,
      "hasMore": true,
      "truncated": true
    }
  }
}
```
