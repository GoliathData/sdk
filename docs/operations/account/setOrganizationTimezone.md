<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationTimezone

mutation · domain `account` · requires the ADMIN scope

Set the organization's own clock: an IANA zone the product schedules in ("America/Chicago"; EST, CST, MST, AZ, PST and HST are accepted and normalized). Null clears it. New schedules start from it; stored ones are not rewritten. Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationTimezone(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationTimezoneMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationTimezoneMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `timezone` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationTimezone": {
      "id": true,
      "timezone": true
    }
  }
}
```
