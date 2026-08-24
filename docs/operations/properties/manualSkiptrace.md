<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# manualSkiptrace

mutation · domain `properties` · requires the ADMIN scope

Skip-trace an explicitly-provided owner + mailing address (no property record needed). CONSUMES ONE SKIPTRACE CREDIT (real money) — requires the ADMIN scope, and the key owner must be a team admin.

## Call

```ts
const result = await client.properties.manualSkiptrace({ input: <ManualSkipTraceRequestInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ManualSkiptraceMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ManualSkiptraceMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `ManualSkipTraceRequestInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "skiptraceMutation": {
    "manualSkiptrace": {
      "id": true,
      "ownerFirstName": true,
      "ownerLastName": true,
      "line1": true,
      "line2": true,
      "city": true,
      "state": true,
      "zip": true,
      "phoneNumbers": {
        "number": true,
        "type": true,
        "dncStatus": {
          "isDnc": true,
          "isLitigator": true
        }
      }
    }
  }
}
```
