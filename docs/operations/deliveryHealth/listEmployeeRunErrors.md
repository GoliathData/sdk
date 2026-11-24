<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmployeeRunErrors

query · domain `deliveryHealth` · requires the READ scope

Runs of the organization's AI employees that FAILED, newest first: the employee (id and name), the contact (null when you may not see that contact), finishReason, endReason (why the run ended) and failureCategory (which failure; the run's error text is never exposed), started and finished times. Only employees the person's roster lists. Runs CREATED in since (inclusive) to until (exclusive), ISO datetimes WITH an offset, at most 14 days (a wider window is refused). Read from the organization's newest 20,000 runs in the window: in a busy organization narrow the window for older failures. At most limit (100) runs.

## Call

```ts
const result = await client.deliveryHealth.listEmployeeRunErrors({ since: <DateTime>, until: <DateTime> })
// → Promise<ListEmployeeRunErrorsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmployeeRunErrorsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `since` | `DateTime!` | yes | — |
| `until` | `DateTime!` | yes | — |
| `limit` | `Int` | no | 25 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "deliveryHealthQuery": {
    "employeeRunErrors": {
      "runId": true,
      "employeeId": true,
      "employeeName": true,
      "contactId": true,
      "status": true,
      "finishReason": true,
      "endReason": true,
      "failureCategory": true,
      "startedAt": true,
      "finishedAt": true
    }
  }
}
```
