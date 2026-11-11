<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listPipelineRoles

query · domain `pipelineItems` · requires the READ scope

The org's roles of one `kind` (CONTACT when omitted): CONTACT a pipeline item's people, USER teammates, PROPERTY a pipeline item's properties, ITEM_LINK linked pipeline items, RELATIONSHIP related people, CONTACT_PROPERTY a contact's properties. `pipelineItemId`: the roles its pipeline owner offers. Ids for every set…Role op.

## Call

```ts
const result = await client.pipelineItems.listPipelineRoles()
// → Promise<ListPipelineRolesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListPipelineRolesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `kind` | `PipelineRoleKind` | no | — |
| `pipelineItemId` | `ID` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pipelineItemQuery": {
    "listPipelineRoles": {
      "id": true,
      "kind": true,
      "name": true,
      "onlyOne": true
    }
  }
}
```
