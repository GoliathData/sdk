<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# queueMemoryDream

mutation · domain `spaces` · requires the WRITE scope

Memory: queue one dreaming pass now for the key owner's own PERSON shelf (no `subjectId`), outside the nightly run: a model run that spends, at most $0.50, so it needs the person's approval. Any other shelf (TEAM, an EMPLOYEE) is Goliath-admin only. False when dreaming is off for the organization.

## Call

```ts
const result = await client.spaces.queueMemoryDream({ shelf: <SpacesMemoryShelf> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<QueueMemoryDreamMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `QueueMemoryDreamMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `shelf` | `SpacesMemoryShelf!` | yes | — |
| `subjectId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "memoryDreamNow": true
  }
}
```
