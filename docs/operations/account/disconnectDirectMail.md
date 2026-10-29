<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# disconnectDirectMail

mutation · domain `account` · requires the ADMIN scope

Disconnect one direct-mail provider connection by connectionId (from listIntegrations directMailConnectionQuery.list). New workflow mail sends through it are refused; mail already submitted to the provider is NOT cancelled and may still be delivered. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.

## Call

```ts
const result = await client.account.disconnectDirectMail({ connectionId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DisconnectDirectMailMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DisconnectDirectMailMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `connectionId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "directMailConnectionMutation": {
    "disconnect": true
  }
}
```
