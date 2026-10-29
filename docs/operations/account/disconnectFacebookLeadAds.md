<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# disconnectFacebookLeadAds

mutation · domain `account` · requires the ADMIN scope

Disconnect Facebook Lead Ads for the key owner's own Facebook account. Goliath's access is always removed; unsubscribing the Pages and deauthorizing the app at Facebook are best-effort, so read the result: pagesDisconnected is how many Pages were unsubscribed, and deauthorized false means the user should remove the app in their Facebook settings themselves. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.

## Call

```ts
const result = await client.account.disconnectFacebookLeadAds(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<DisconnectFacebookLeadAdsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DisconnectFacebookLeadAdsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "oauthMutation": {
    "disconnectFacebookAccount": {
      "pagesDisconnected": true,
      "deauthorized": true
    }
  }
}
```
