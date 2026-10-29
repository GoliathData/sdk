<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# disconnectCallTools

mutation · domain `account` · requires the ADMIN scope

Disconnect CallTools: revokes the organization's CallTools key and the webhook automations Goliath created there, so dispositions stop syncing. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.

## Call

```ts
const result = await client.account.disconnectCallTools(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<DisconnectCallToolsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DisconnectCallToolsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "oauthMutation": {
    "revokeCallToolsIntegration": {
      "id": true,
      "callToolsIntegrationStatus": {
        "connected": true
      }
    }
  }
}
```
