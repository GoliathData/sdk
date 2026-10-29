<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# disconnectPhoneEnrichmentProvider

mutation · domain `account` · requires the ADMIN scope

Disconnect a phone-enrichment provider by providerKey (provider.key from listIntegrations phoneEnrichmentQuery.providers, e.g. Trestle); phone checks through it stop. Returns its new connectionStatus. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.

## Call

```ts
const result = await client.account.disconnectPhoneEnrichmentProvider({ providerKey: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DisconnectPhoneEnrichmentProviderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DisconnectPhoneEnrichmentProviderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `providerKey` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "phoneEnrichmentMutation": {
    "disconnectProvider": {
      "provider": {
        "key": true
      },
      "connectionStatus": true
    }
  }
}
```
