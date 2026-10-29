<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateSpacePage

mutation · domain `spaces` · requires the WRITE scope

Save a page's next version (`html`), rename it (`title`), or both. Pass `baseVersionId` to refuse a save over a newer one. `actorGrn` (required): the dev session.

## Call

```ts
const result = await client.spaces.updateSpacePage({ input: <UpdateSpacePageInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateSpacePageMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateSpacePageMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `UpdateSpacePageInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "updatePage": {
      "id": true,
      "spaceId": true,
      "parentId": true,
      "name": true,
      "fileType": true,
      "sizeBytes": true,
      "currentVersion": {
        "id": true,
        "versionNumber": true
      }
    }
  }
}
```
