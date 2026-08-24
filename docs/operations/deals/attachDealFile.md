<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# attachDealFile

mutation · domain `deals` · requires the WRITE scope

Attach a file to a deal — the write twin of listDealFiles. Pass the artifactId of a file your organization already holds: the id the chat assistant sees on its artifact shelf (`(artifactId: …) [origin] filename`). The server resolves it to the underlying file, org-scoped, links it to dealId, and returns the file (id, fileName, fileUrl, createdAt); read it back with listDealFiles. The deal must be in a pipeline owned by or shared with your organization, and the artifact's file must belong to your organization — a foreign artifact is refused, so you cannot link another org's bytes onto a deal you own. There is no raw-bytes upload op yet: the shared upload key is content-addressed and not org-scoped, so a signed-PUT op would let one org overwrite another org's file — deferred until that key is org-scoped.

## Call

```ts
const result = await client.deals.attachDealFile({ dealId: '<id>', artifactId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AttachDealFileMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AttachDealFileMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `artifactId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "attachDealFileFromArtifact": {
      "id": true,
      "fileName": true,
      "fileUrl": true,
      "createdAt": true
    }
  }
}
```
