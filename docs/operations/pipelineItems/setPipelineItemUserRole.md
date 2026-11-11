<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPipelineItemUserRole

mutation · domain `pipelineItems` · requires the WRITE scope

The USER role a teammate on the pipeline item plays. roleId null clears it. An Only-one role moves off its previous holder.

## Call

```ts
const result = await client.pipelineItems.setPipelineItemUserRole({ pipelineItemId: '<id>', userId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPipelineItemUserRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPipelineItemUserRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `userId` | `ID!` | yes | — |
| `roleId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "setPipelineItemUserRole": {
      "id": true,
      "userRoles": {
        "userId": true,
        "role": {
          "id": true,
          "name": true
        }
      }
    }
  }
}
```
