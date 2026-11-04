<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setDealAgent

mutation · domain `deals` · requires the WRITE scope

Make a teammate assigned to the deal its Agent (getDeal agent), who speaks for it.

## Call

```ts
const result = await client.deals.setDealAgent({ dealId: '<id>', userId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetDealAgentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetDealAgentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `userId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "setDealAgent": {
      "id": true,
      "agent": {
        "id": true,
        "firstName": true,
        "lastName": true
      }
    }
  }
}
```
