<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# moveFolder

mutation · domain `properties` · requires the WRITE scope

Put a folder under another folder of the same surface (`parentId`), or at the top level (`parentId: null`). Refused when it would cross between personal and shared, nest a folder inside itself, or go too deep.

## Call

```ts
const result = await client.properties.moveFolder({ folderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MoveFolderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MoveFolderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `folderId` | `ID!` | yes | — |
| `parentId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "folderMutation": {
    "moveFolder": {
      "id": true,
      "name": true,
      "parentId": true,
      "ownerUserId": true
    }
  }
}
```
