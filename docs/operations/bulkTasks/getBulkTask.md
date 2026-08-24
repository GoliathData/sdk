<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getBulkTask

query · domain `bulkTasks` · requires the READ scope

Fetch the current status of an async bulk task by id (the bulkTaskId returned by async ops such as addPropertiesToList). Returns the task status (CREATED = queued, PROCESSING = being applied, COMPLETED, FAILED), progress (processedItemCount of estimatedItemCount), and a best-effort ETA (secondsRemaining; null means no estimate is available, not an error — status is authoritative). A FAILED status means the change was NOT applied. Returns null for ids that do not exist in your workspace. Suitable for polling (a 3-5 second interval is plenty).

## Call

```ts
const result = await client.bulkTasks.getBulkTask({ bulkTaskId: '<id>' })
// → Promise<GetBulkTaskQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetBulkTaskQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `bulkTaskId` | `ID!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "bulkTaskQuery": {
    "bulkTask": {
      "id": true,
      "status": true,
      "estimatedItemCount": true,
      "processedItemCount": true,
      "secondsRemaining": true,
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
