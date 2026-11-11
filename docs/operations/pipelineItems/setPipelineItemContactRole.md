<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setPipelineItemContactRole

mutation · domain `pipelineItems` · requires the WRITE scope

The CONTACT role a person on the pipeline item plays ("Seller"). roleId null clears it. An Only-one role moves off its previous holder.

## Call

```ts
const result = await client.pipelineItems.setPipelineItemContactRole({ pipelineItemId: '<id>', contactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetPipelineItemContactRoleMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetPipelineItemContactRoleMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `pipelineItemId` | `ID!` | yes | — |
| `contactId` | `ID!` | yes | — |
| `roleId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemMutation": {
    "setPipelineItemContactRole": {
      "id": true,
      "contactRoles": {
        "contactId": true,
        "role": {
          "id": true,
          "name": true
        }
      }
    }
  }
}
```
