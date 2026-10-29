<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listSpaceRoots

query · domain `spaces` · requires the READ scope

Library's roots (files and folders only; Team's templates, forms, contracts and tables: listContentTemplates, listForms, listContractTemplates, listWorkflowTables). The organization's file-system roots you can open: Team (everyone in the org), your own My files (`isMine`, private), and the read-only system folders Goliath writes (Uploads, Downloads, Records). Each `id` is the `spaceId` (the root: My files, Team or a system folder) every other Library operation takes; a root's folder id is null. Start here.

## Call

```ts
const result = await client.spaces.listSpaceRoots()
// → Promise<ListSpaceRootsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListSpaceRootsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "roots": {
      "id": true,
      "kind": true,
      "name": true,
      "isMine": true,
      "viewerRole": true,
      "abilities": {
        "addChildren": true
      }
    }
  }
}
```
