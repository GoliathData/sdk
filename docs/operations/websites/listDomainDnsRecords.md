<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listDomainDnsRecords

query · domain `websites` · requires the READ scope

The organization's domains and their DNS records as last read: each record's id (what requestDomainDnsChange names), values and `access` (LOCKED: never editable; MAIL: carries email; OPEN), plus edits applying or refused in the last 15 minutes. Org admins; null while domains are off.

## Call

```ts
const result = await client.websites.listDomainDnsRecords()
// → Promise<ListDomainDnsRecordsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListDomainDnsRecordsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "customerDnsQuery": {
    "domains": {
      "domain": true,
      "hostnames": true,
      "origin": true,
      "status": true,
      "readAt": true,
      "awaitingSnapshot": true,
      "contentInCms": true,
      "records": {
        "id": true,
        "type": true,
        "name": true,
        "content": true,
        "ttl": true,
        "proxied": true,
        "priority": true,
        "access": true,
        "accessNote": true,
        "applying": true
      },
      "adding": {
        "type": true,
        "name": true,
        "content": true,
        "ttl": true,
        "proxied": true,
        "priority": true
      },
      "failures": {
        "action": true,
        "record": {
          "type": true,
          "name": true,
          "content": true,
          "ttl": true,
          "proxied": true,
          "priority": true
        },
        "reason": true,
        "settledAt": true
      }
    }
  }
}
```
