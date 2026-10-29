<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# disconnectDialer

mutation · domain `account` · requires the ADMIN scope

Disconnect a campaign dialer, provider ENZO or READYMODE, with EVERY campaign the organization linked to it (listIntegrations shows them); their calls stop syncing. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.

## Call

```ts
const result = await client.account.disconnectDialer({ provider: <CampaignDialerProvider> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DisconnectDialerMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DisconnectDialerMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `provider` | `CampaignDialerProvider!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "oauthMutation": {
    "disconnectAllDialerIntegrations": {
      "id": true,
      "dialerIntegrationStatus": {
        "connected": true
      }
    }
  }
}
```
