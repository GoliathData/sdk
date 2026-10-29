<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeNumbersFromDialingPool

mutation · domain `phoneNumbers` · requires the WRITE scope

Take numbers out of the rotation; they stay owned. Their warm-up restarts if they come back (addNumbersToDialingPool). Admins only.

## Call

```ts
const result = await client.phoneNumbers.removeNumbersFromDialingPool({ phoneLineIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveNumbersFromDialingPoolMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveNumbersFromDialingPoolMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "removeNumbersFromPool": {
      "id": true,
      "isDialingPoolLine": true
    }
  }
}
```
