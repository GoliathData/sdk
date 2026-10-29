<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSpaceAccessList

query · domain `spaces` · requires the READ scope

A folder or file's `audience` (ORGANIZATION = everyone in the org, OWNER = the owner of My files, RESTRICTED = only people granted access, here or on a parent folder, SYSTEM = everyone, read-only) and the people shared on THIS item directly, with their role. Grants on a parent folder also reach it and are NOT listed — for a full audit, read each ancestor folder's access list too. Needs view access.

## Call

```ts
const result = await client.spaces.getSpaceAccessList({ itemId: '<id>' })
// → Promise<GetSpaceAccessListQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetSpaceAccessListQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesQuery": {
    "accessList": {
      "item": {
        "id": true,
        "name": true,
        "accessMode": true
      },
      "audience": true,
      "entries": {
        "person": {
          "id": true,
          "name": true,
          "email": true
        },
        "role": true,
        "isOwner": true
      }
    }
  }
}
```
