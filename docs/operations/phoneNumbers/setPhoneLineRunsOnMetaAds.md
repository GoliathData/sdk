<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPhoneLineRunsOnMetaAds

mutation · domain `phoneNumbers` · requires the WRITE scope

Mark a tracking number as one the org runs only on Meta ads (its calls are attributed there), or false to clear it. Admins only.

## Call

```ts
const result = await client.phoneNumbers.setPhoneLineRunsOnMetaAds({ phoneLineId: '<id>', runsOnMetaAds: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPhoneLineRunsOnMetaAdsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPhoneLineRunsOnMetaAdsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineId` | `ID!` | yes | — |
| `runsOnMetaAds` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "twilioMutation": {
    "setPhoneLineRunsOnMetaAds": {
      "id": true,
      "runsOnMetaAds": true
    }
  }
}
```
