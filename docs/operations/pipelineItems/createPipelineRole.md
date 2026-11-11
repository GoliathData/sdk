<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createPipelineRole

mutation · domain `pipelineItems` · requires the WRITE scope

Add a role of `kind` (CONTACT when omitted), as any member can. Names are unique per kind, case-folded: reuse a listPipelineRoles match. It is never Only one: that stays admin list upkeep in the app.

## Call

```ts
const result = await client.pipelineItems.createPipelineRole({ name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreatePipelineRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreatePipelineRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `name` | `String!` | yes | — |
| `kind` | `PipelineRoleKind` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "createPipelineRole": {
      "id": true,
      "kind": true,
      "name": true,
      "onlyOne": true
    }
  }
}
```
