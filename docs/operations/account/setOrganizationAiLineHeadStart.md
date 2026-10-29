<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationAiLineHeadStart

mutation · domain `account` · requires the ADMIN scope

How long, in seconds (0 to 3600), a person sharing a line with an AI employee gets to answer a new text before the AI replies. Null clears it (no head start). Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationAiLineHeadStart(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationAiLineHeadStartMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationAiLineHeadStartMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `seconds` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "updateOrganizationAiCoOwnedLineHeadStart": {
      "id": true,
      "aiCoOwnedLineHeadStartSeconds": true
    }
  }
}
```
