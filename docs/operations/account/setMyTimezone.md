<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setMyTimezone

mutation · domain `account` · requires the WRITE scope

Set the key owner's own time zone (an IANA id such as "America/Chicago"); null or omitted CLEARS it, so their times fall back to the organization's zone (`resolvedTimezone` says which zone applies now).

## Call

```ts
const result = await client.account.setMyTimezone(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetMyTimezoneMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetMyTimezoneMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "users": {
    "updateMyTimezone": {
      "id": true,
      "timezone": true,
      "resolvedTimezone": true
    }
  }
}
```
