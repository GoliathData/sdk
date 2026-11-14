<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setUnownedWork

mutation · domain `account` · requires the ADMIN scope

Set who gets Catch up work no person holds: one active member (a user id from listTeammates), or null for the organization admins. Waiting cards move in the background. Organization admins only.

## Call

```ts
const result = await client.account.setUnownedWork(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetUnownedWorkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetUnownedWorkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationUnownedWork": {
      "id": true,
      "unownedWorkUserId": true
    }
  }
}
```
