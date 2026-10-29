<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSmsOptOuts

query · domain `contacts` · requires the READ scope

Who opted out of texts (texted STOP, unsubscribed, carrier opt-out, blocked by a teammate), newest first: source, optedOutAt, reason, phoneNumber and the contacts you can see carrying it. Numbers no contact you see carries are never listed. Undeliverable numbers excluded.

## Call

```ts
const result = await client.contacts.listSmsOptOuts()
// → Promise<ListSmsOptOutsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSmsOptOutsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "smsOptOuts": {
      "items": {
        "phoneNumber": true,
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
