<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# removeDealExternalLink

mutation · domain `deals` · requires the WRITE scope

Remove a deal link.

## Call

```ts
const result = await client.deals.removeDealExternalLink({ dealId: '<id>', linkId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RemoveDealExternalLinkMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RemoveDealExternalLinkMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `dealId` | `ID!` | yes | — |
| `linkId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "dealMutation": {
    "deleteDealExternalLink": {
      "id": true,
      "externalLinks": {
        "id": true,
        "title": true,
        "url": true
      }
    }
  }
}
```
