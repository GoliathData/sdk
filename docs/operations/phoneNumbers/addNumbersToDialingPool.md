<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addNumbersToDialingPool

mutation · domain `phoneNumbers` · requires the WRITE scope

Put numbers the org already owns (listCommunicationChannels) into the dialer's rotation. A teammate's line is allowed; an AI employee's is refused. Admins only.

## Call

```ts
const result = await client.phoneNumbers.addNumbersToDialingPool({ phoneLineIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddNumbersToDialingPoolMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddNumbersToDialingPoolMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dialingPoolMutation": {
    "addExistingNumbersToPool": {
      "id": true,
      "isDialingPoolLine": true
    }
  }
}
```
