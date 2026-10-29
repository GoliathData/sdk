<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# disconnectSmrtPhone

mutation · domain `account` · requires the ADMIN scope

Disconnect the smrtPhone dialer for the organization; its calls stop syncing. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.

## Call

```ts
const result = await client.account.disconnectSmrtPhone(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<DisconnectSmrtPhoneMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DisconnectSmrtPhoneMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "oauthMutation": {
    "disconnectSmrtPhoneIntegration": {
      "id": true,
      "smrtPhoneIntegrationStatus": {
        "connected": true
      }
    }
  }
}
```
