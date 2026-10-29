<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# unrestDialingPoolNumber

mutation · domain `phoneNumbers` · requires the WRITE scope

Return a benched line to the rotation now, whoever benched it. Admins only.

## Call

```ts
const result = await client.phoneNumbers.unrestDialingPoolNumber({ phoneLineId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UnrestDialingPoolNumberMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UnrestDialingPoolNumberMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dialingPoolMutation": {
    "unrestNumber": {
      "id": true,
      "dialing": {
        "restUntil": true
      }
    }
  }
}
```
