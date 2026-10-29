<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationInboxDefaultView

mutation · domain `account` · requires the ADMIN scope

What the inbox shows before a person chooses: INDIVIDUAL (their own lines) or TEAM (every line, for members who may view all phones; it grants no one that permission). Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationInboxDefaultView({ view: <InboxDefaultView> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationInboxDefaultViewMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationInboxDefaultViewMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `view` | `InboxDefaultView!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationInboxDefaultView": {
      "id": true,
      "inboxDefaultView": true
    }
  }
}
```
