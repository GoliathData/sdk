<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSendingDomainStatus

query · domain `deliveryHealth` · requires the READ scope

The organization's domains (the ones Goliath serves for its website and sending): domain, hostnames (empty for a sending-only domain), status (ACTIVE, or PENDING while its nameservers are not pointed at us yet), readAt (when Goliath last read its DNS records; null when never), awaitingSnapshot, records being added, and edits that failed in the last 15 minutes with why. Organization admins only (refused otherwise); null while domains are not switched on for the organization.

## Call

```ts
const result = await client.deliveryHealth.getSendingDomainStatus()
// → Promise<GetSendingDomainStatusQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetSendingDomainStatusQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
      "adding": {
        "type": true,
        "name": true
      },
      "failures": {
        "action": true,
        "reason": true,
        "settledAt": true
      }
    }
  }
}
```
