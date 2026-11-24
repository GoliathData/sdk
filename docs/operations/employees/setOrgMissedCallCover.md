<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrgMissedCallCover

mutation · domain `employees` · requires the WRITE scope

Point the organization's missed-call cover at this AI employee (`enable: true`, from the next call) or take it off (`false`). It needs calls switched on; a refusal is in `diagnostics`, and `changed: false` means it already stood so.

## Call

```ts
const result = await client.employees.setOrgMissedCallCover({ employeeId: '<id>', enable: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrgMissedCallCoverMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrgMissedCallCoverMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `enable` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesMutation": {
    "setOrgMissedCallCover": {
      "ok": true,
      "changed": true,
      "diagnostics": true
    }
  }
}
```
