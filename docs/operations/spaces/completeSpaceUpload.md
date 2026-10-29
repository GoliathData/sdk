<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# completeSpaceUpload

mutation · domain `spaces` · requires the WRITE scope

Finish an upload once its bytes are PUT: makes the file or its next version. A retry returns the same file. `actorGrn`: the dev session making it.

## Call

```ts
const result = await client.spaces.completeSpaceUpload({ uploadId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CompleteSpaceUploadMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CompleteSpaceUploadMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `uploadId` | `ID!` | yes | — |
| `expectedVersionId` | `ID` | no | — |
| `actorGrn` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "completeUpload": {
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
