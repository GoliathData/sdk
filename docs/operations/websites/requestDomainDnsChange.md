<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# requestDomainDnsChange

mutation · domain `websites` · requires the ADMIN scope

Queue one DNS record edit (CREATE, UPDATE or DELETE by `recordId`), live within a minute. LOCKED records are refused; a MAIL record's `warning` says what a wrong value breaks. Org admins, on the person's yes.

## Call

```ts
const result = await client.websites.requestDomainDnsChange({ input: <RequestCustomerDnsChangeInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RequestDomainDnsChangeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RequestDomainDnsChangeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `RequestCustomerDnsChangeInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "customerDnsMutation": {
    "requestChange": {
      "outcome": true,
      "reason": true,
      "warning": true
    }
  }
}
```
