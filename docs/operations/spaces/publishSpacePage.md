<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# publishSpacePage

mutation · domain `spaces` · requires the WRITE scope

Publish HTML as a Library Page that opens rendered (strict page CSP: HTML loading anything from outside Goliath is refused). Lands in `destination`, else your Pages folder. `actorGrn` (required): the dev session.

## Call

```ts
const result = await client.spaces.publishSpacePage({ input: <PublishSpacePageInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<PublishSpacePageMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `PublishSpacePageMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `PublishSpacePageInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "publishPage": {
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
