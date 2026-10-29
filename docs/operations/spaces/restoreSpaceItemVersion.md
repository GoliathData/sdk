<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# restoreSpaceItemVersion

mutation · domain `spaces` · requires the WRITE scope

Make an older version of a file you can edit current again, as a NEW version — nothing is lost; the version it replaces stays in the history.

## Call

```ts
const result = await client.spaces.restoreSpaceItemVersion({ itemId: '<id>', versionId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RestoreSpaceItemVersionMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RestoreSpaceItemVersionMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `itemId` | `ID!` | yes | — |
| `versionId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "restoreVersion": {
      "id": true,
      "name": true,
      "currentVersion": {
        "id": true,
        "versionNumber": true
      },
      "updatedAt": true
    }
  }
}
```
