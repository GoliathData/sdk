<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# refreshDomainDnsRecords

mutation · domain `websites` · requires the ADMIN scope

Read one domain's DNS records again from Cloudflare now; listDomainDnsRecords shows them once read. Org admins only.

## Call

```ts
const result = await client.websites.refreshDomainDnsRecords({ domain: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RefreshDomainDnsRecordsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RefreshDomainDnsRecordsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `domain` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "customerDnsMutation": {
    "refresh": {
      "outcome": true,
      "reason": true,
      "warning": true
    }
  }
}
```
