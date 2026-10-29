<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# addMemoryEntries

mutation · domain `memory` · requires the IMPORT scope

Add conversation records from another system to your memory, idempotent on `externalId`. Your people's words (FROM_ACCOUNT) are learned from; the other side's are context. Hidden records, typed notes and calendar emails are refused.

## Call

```ts
const result = await client.memory.addMemoryEntries({ entries: [<MemoryEntryInput>] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AddMemoryEntriesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AddMemoryEntriesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `entries` | `[MemoryEntryInput!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "memoryEntryMutation": {
    "addEntries": {
      "organizationId": true,
      "added": true,
      "alreadyAdded": true,
      "excluded": {
        "externalId": true,
        "reason": true
      }
    }
  }
}
```
