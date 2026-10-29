<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# countRecords

query · domain `contacts` · requires the READ scope

Count records grouped by any field in ONE call: tasks per contact or per teammate, mine vs others, contacts by source, deals by stage. Use it instead of paging a list op or a code task to tally. `spec` = {from, groupBy (up to 6), measures, where (equality; an array = any of; null = unset), orderBy [{by, dir}], limit (default 500), since/until (ISO, "now", "-30d")}. Values match exactly: statuses are UPPERCASE (tasks: UPCOMING, OVERDUE = past due now, earlier today included, COMPLETED; open tasks = completed false). Counts only what the caller may see. Contacts per TAG are contactTagUsage, one call; contacts.owners groups by the whole owner set, not per owner. Answers {ok, result: {rows, truncated}} or {ok: false, error}. Models: contacts (group: owners, source, doNotContact, lastActivityType, archived, stage, buyer, buyerStatus; measures: count, replied; time createdAt) · tasks (group: contactId, contactName, assigneeId, assignee, mine, completed, status; measures: count, rows; time dueAt) · deals (group: pipelineId, pipeline, stageId, stage, outcome, archived, workflowId, employeeId, teammateId, origin, assignees; measures: count, valueCents; time createdAt) · pipeline (group: pipelineId, pipeline, stageId, stage, stageOrder, outcome; measures: deals, valueCents, openDeals, openValueCents) · appointments (group: completed, cancelled, workflowId, employeeId, teammateId; measures: count; time startAt) · leads (group: source; measures: count; time at) · properties (group: contactId, contactName, relation, zipCode, state, propertyType, bedrooms, ownerOccupied, countyFips, county, ownedSince, ownerPropertyCount, wrongLink, archived; measures: count, properties, contacts, avgEstimatedValue, medianEstimatedValue)

## Call

```ts
const result = await client.contacts.countRecords({ spec: <JSON> })
// → Promise<CountRecordsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CountRecordsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `spec` | `JSON!` | yes | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "pagesQuery": {
    "count": true
  }
}
```
