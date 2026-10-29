<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# enrollInWorkflow

mutation · domain `workflows` · requires the WRITE scope

Enroll MANY contacts in one CONTACT workflow's ACTIVE version: the app's bulk "Add to workflow" on the Contacts table. ASYNC bulk task: returns a bulkTaskId before anything runs; poll getBulkTask. TWO selection forms, never combined. EXPLICIT: `contactIds`. FILTER-BACKED: `filterId` (a saved contact filter from listContactFilters; a teammate's private one is refused) OR `filterTree` (inline, saveFilter's CONTACT DSL, parsed STRICTLY) with `selectCount: N`, the first N matches in the filter's default order; `excludeIds` drops contacts from that window. NO select-all: a filter without selectCount is refused, so size the window with countContacts first. CAP: 20,000 contacts per call (the app's bulk-action limit, charged on the ids or selectCount); split a bigger audience with excludeIds or narrower filters. The workflow must be CONTACT with an ACTIVE version (PROPERTY or DEAL is refused; one record at a time is triggerWorkflowRun). Each enrolled contact starts a run that can TEXT or EMAIL them under the workflow's send window, daily caps and the org's sending safety. State the workflow and contact count to the user and get a go-ahead BEFORE submitting.

## Call

```ts
const result = await client.workflows.enrollInWorkflow({ workflowGroupId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EnrollInWorkflowMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EnrollInWorkflowMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `contactIds` | `[String!]` | no | — |
| `filterId` | `ID` | no | — |
| `filterTree` | `JSON` | no | — |
| `selectCount` | `Int` | no | — |
| `excludeIds` | `[String!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "createBulkTriggerWorkflowTask": {
      "mode": true,
      "bulkTaskId": true
    }
  }
}
```
