<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# terminatePartnership

mutation · domain `partnerships` · requires the ADMIN scope

Terminate an active partnership with another organization (partnerOrgId). Either party may terminate. Stops all cross-org lead sharing for that partnership.

## Call

```ts
const result = await client.partnerships.terminatePartnership({ partnerOrgId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<TerminatePartnershipMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `TerminatePartnershipMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `partnerOrgId` | `ID!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "orgPartnershipMutation": {
    "terminatePartnership": {
      "id": true,
      "status": true,
      "updatedAt": true
    }
  }
}
```
