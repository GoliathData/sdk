<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteVoicemailTemplate

mutation · domain `communications` · requires the WRITE scope

Delete a voicemail drop. It leaves the dialer at once and nothing restores it: the person records it again.

## Call

```ts
const result = await client.communications.deleteVoicemailTemplate({ templateId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteVoicemailTemplateMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteVoicemailTemplateMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `templateId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsMutation": {
    "deleteVoicemailTemplate": true
  }
}
```
