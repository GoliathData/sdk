<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# checkBillingAction

query · domain `billing` · requires the READ scope

The check the app runs before a skip trace, export or email verification of `count` records. Read `state` and `reason` first: a BLOCKED org (payment needed) shows 0 whatever it holds. For those three, `unitsAvailable` is what the action can spend, unused plan allowance (none during a trial) PLUS wallet credits (bought or granted): what answers "how many skip traces are left". For other actions it is not credits (null, or seat slots for an invite). It checks the org, not the person: skip traces still need an admin. `willTriggerAutoRecharge.chargeCents` is a card charge: say so and get a yes first; when null, mention no card. Read-only.

## Call

```ts
const result = await client.billing.checkBillingAction({ action: <BillingAction> })
// → Promise<CheckBillingActionQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CheckBillingActionQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `action` | `BillingAction!` | yes | — |
| `count` | `Int` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationQuery": {
    "canTakeAction": true
  }
}
```
