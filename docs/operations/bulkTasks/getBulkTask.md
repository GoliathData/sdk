<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getBulkTask

query · domain `bulkTasks` · requires the READ scope

Status of one bulk task by its bulkTaskId: the one an async op returned, or the one on a download from listFiles, which lists skip traces and exports started in the app, running ones included. Status (CREATED = queued, PROCESSING = being applied, COMPLETED, FAILED = the change was NOT applied), progress (processedItemCount of estimatedItemCount) and a best-effort ETA (secondsRemaining; null = no estimate, not an error; status is authoritative). `emailChecks` is the counts of a checkContactEmails run (null for any other task). Null for an id not in your organization. Poll every 3-5 seconds.

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
      "updatedAt": true,
      "emailChecks": {
        "checkedCount": true,
        "undeliverableCount": true,
        "notCheckedCount": true
      }
    }
  }
}
```
