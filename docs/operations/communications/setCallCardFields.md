<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setCallCardFields

mutation · domain `communications` · requires the WRITE scope

Replace the contact custom fields shown on the call card (at most 8, in order). Admins only. Send the whole list.

## Call

```ts
const result = await client.communications.setCallCardFields({ customFieldIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetCallCardFieldsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetCallCardFieldsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `customFieldIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsMutation": {
    "setCallCardFields": {
      "callCardFieldIds": true
    }
  }
}
```
