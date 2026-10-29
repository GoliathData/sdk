<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameVoicemailTemplate

mutation · domain `communications` · requires the WRITE scope

Rename a voicemail drop (templateId from getCallWorkspaceSettings).

## Call

```ts
const result = await client.communications.renameVoicemailTemplate({ templateId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameVoicemailTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameVoicemailTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `templateId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsMutation": {
    "updateVoicemailTemplate": {
      "id": true,
      "name": true
    }
  }
}
```
