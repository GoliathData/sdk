<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restoreAutomationMapVersion

mutation · domain `automationMap` · requires the WRITE scope

Put an earlier Map version back, as the Map's Versions menu does: it is copied forward as the new current version, so nothing is lost and the step can be undone the same way. Changes the drawing only, never a workflow or AI employee.

## Call

```ts
const result = await client.automationMap.restoreAutomationMapVersion({ pageId: '<id>', version: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestoreAutomationMapVersionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestoreAutomationMapVersionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pageId` | `ID!` | yes | — |
| `version` | `Int!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "automationPagesMutation": {
    "restorePageVersion": {
      "id": true,
      "currentVersion": true,
      "updatedAt": true
    }
  }
}
```
