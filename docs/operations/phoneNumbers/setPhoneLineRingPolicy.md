<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPhoneLineRingPolicy

mutation · domain `phoneNumbers` · requires the WRITE scope

Replace one line's own call routing, shaped as setOrgDefaultRingPolicy's (read it with getPhoneLineRingPolicy first). policy null deletes it and the line follows the org default. Say the new path in plain words.

## Call

```ts
const result = await client.phoneNumbers.setPhoneLineRingPolicy({ phoneLineId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPhoneLineRingPolicyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPhoneLineRingPolicyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineId` | `ID!` | yes | — |
| `policy` | `RingPolicyInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "ringPolicyMutation": {
    "setPhoneLineRingPolicy": {
      "id": true
    }
  }
}
```
