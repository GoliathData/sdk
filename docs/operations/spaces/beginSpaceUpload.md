<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# beginSpaceUpload

mutation · domain `spaces` · requires the WRITE scope

Start uploading a file of any type into a folder you can edit (or as `replacesItemId`'s next version). PUT the bytes to `uploadUrl` with exactly `contentType`, then call completeSpaceUpload.

## Call

```ts
const result = await client.spaces.beginSpaceUpload({ input: <BeginSpaceUploadInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<BeginSpaceUploadMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `BeginSpaceUploadMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `BeginSpaceUploadInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "beginUpload": {
      "uploadId": true,
      "uploadUrl": true,
      "contentType": true,
      "expiresAt": true
    }
  }
}
```
