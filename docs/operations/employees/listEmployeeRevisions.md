<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmployeeRevisions

query · domain `employees` · requires the READ scope

An AI employee's saved versions, newest first (offset-paged; advance by `nextOffset`). One per save: the version from before a change is the one saved just before it (`createdAt`). Each says when, who saved it (`actorName`, else `actorUserId`; neither for the system) and the name and job title it held. To put one back, restoreEmployeeRevision.

## Call

```ts
const result = await client.employees.listEmployeeRevisions({ employeeId: '<id>' })
// → Promise<ListEmployeeRevisionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmployeeRevisionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `employeeId` | `ID!` | yes | — |
| `offset` | `Int` | no | 0 |
| `limit` | `Int` | no | 10 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 100.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "contactAgentConfigRevisions": {
      "total": true,
      "nextOffset": true,
      "items": {
        "id": true,
        "createdAt": true,
        "actorUserId": true,
        "actorName": true,
        "name": true,
        "title": true
      }
    }
  }
}
```
