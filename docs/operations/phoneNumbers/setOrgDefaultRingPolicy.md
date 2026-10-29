<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrgDefaultRingPolicy

mutation · domain `phoneNumbers` · requires the WRITE scope

Replace the org's default call routing (every line without its own): humanStage (targetKind, ringSeconds 5 to 60, its target, an optional schedule) then aiStage (AI employees whose calls are on, SINGLE or ROUND_ROBIN). It saves the WHOLE policy, so read it first with getPhoneRouting and send it back changed; an omitted schedule or area-code map keeps what is saved. policy null deletes the default. Say the new path in plain words; it changes who picks up the org's calls from the next call on.

## Call

```ts
const result = await client.phoneNumbers.setOrgDefaultRingPolicy(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrgDefaultRingPolicyMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrgDefaultRingPolicyMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `policy` | `RingPolicyInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "ringPolicyMutation": {
    "setOrgDefaultRingPolicy": {
      "id": true
    }
  }
}
```
