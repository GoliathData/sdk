<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restDialingPoolNumber

mutation · domain `phoneNumbers` · requires the WRITE scope

Bench one rotation line for the standard rest window: it returns on its own at restUntil (say the date). Admins only.

## Call

```ts
const result = await client.phoneNumbers.restDialingPoolNumber({ phoneLineId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestDialingPoolNumberMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestDialingPoolNumberMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "restNumber": {
      "id": true,
      "dialing": {
        "restUntil": true
      }
    }
  }
}
```
