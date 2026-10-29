<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPhoneLineLabel

mutation · domain `phoneNumbers` · requires the WRITE scope

Name a phone line ("Facebook campaign"), or label null to clear it. Admins only.

## Call

```ts
const result = await client.phoneNumbers.setPhoneLineLabel({ phoneLineId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPhoneLineLabelMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPhoneLineLabelMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineId` | `ID!` | yes | — |
| `label` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "twilioMutation": {
    "setPhoneLineLabel": {
      "id": true,
      "label": true
    }
  }
}
```
