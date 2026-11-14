<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createFolder

mutation · domain `properties` · requires the WRITE scope

Create a folder on one surface (`scope`: CONTACT for the Contacts sidebar's lists and filters, PROPERTY, PIPELINE_ITEM (never the retired DEAL), FORM, …; workflow folders are createWorkflowFolder, Library ones createSpaceFolder), at the top level or nested inside another folder of the same surface (`parentId`, from listFolders). `personal: true` puts it in your own tree, else it is shared with the team; a child takes its parent's side. A name a sibling already has is refused, and so is nesting past the surface's depth or a personal folder where it has none (the error says which). Returns the new folder's id; file things into it with moveItemsToFolder.

## Call

```ts
const result = await client.properties.createFolder({ scope: <FolderScope>, name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `scope` | `FolderScope!` | yes | — |
| `name` | `String!` | yes | — |
| `parentId` | `ID` | no | — |
| `personal` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "createFolder": {
      "id": true,
      "name": true,
      "scope": true,
      "parentId": true,
      "ownerUserId": true
    }
  }
}
```
