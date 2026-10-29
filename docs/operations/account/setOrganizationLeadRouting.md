<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationLeadRouting

mutation · domain `account` · requires the ADMIN scope

Who gets the new leads a property-signal skip trace creates: active members' user ids (listTeammates). One person gets every lead, two or more split them evenly, an empty list sends them to nobody. Replaces what was set; setup no longer changes it after this. Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationLeadRouting({ assigneeUserIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationLeadRoutingMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationLeadRoutingMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `assigneeUserIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "setOrganizationLeadRouting": {
      "id": true,
      "leadRouting": {
        "assigneeUserIds": true
      }
    }
  }
}
```
