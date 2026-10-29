<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# disconnectSlack

mutation · domain `account` · requires the ADMIN scope

Disconnect the organization's Slack workspace (the Integrations page's Slack Disconnect). Slack notifications stop. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.

## Call

```ts
const result = await client.account.disconnectSlack(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<DisconnectSlackMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DisconnectSlackMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "oauthMutation": {
    "revokeSlackIntegration": {
      "connected": true
    }
  }
}
```
