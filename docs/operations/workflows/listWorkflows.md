<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listWorkflows

query · domain `workflows` · requires the READ scope

List the organization's workflow automations (paginated, non-archived by default). Returns the group id to use in getWorkflow and the other workflow operations. Each row carries `channelsAcrossVersions` — which channels the workflow messages on (TEXT, EMAIL, both, or [] for a pure CRM automation that messages nobody). Read it to PICK workflows out of a list: it is the same question the app's Channel filter answers, so this page agrees with what a person sees when they filter by channel in the product. Its exact rule is EVERY version of the workflow that has not been deleted — the published one, the older ones it superseded, and an unpublished draft alike. That is deliberately wider than `getWorkflow.channels`, which reads exactly ONE version: the most recently PUBLISHED one whatever status it now holds (active, paused or suspended), or the pending draft when nothing has ever published. So a workflow whose superseded v1 texted and whose published v2 only emails reads [TEXT, EMAIL] here and [EMAIL] there — and so does one whose published version emails while an unpublished draft adds a text step. NEITHER field says whether the workflow is SENDING: `channels` reports the channels that one version is CONFIGURED to message on, and a published head that is now paused or suspended is configured for a channel while sending on none of them. Read `status` for whether anything is running at all, and this field for which channels are in play. Never a null here: [] means it messages nobody.

## Call

```ts
const result = await client.workflows.listWorkflows()
// → Promise<ListWorkflowsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListWorkflowsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | 20 |
| `offset` | `Int` | no | 0 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsQuery": {
    "workflowGroupsPage": {
      "items": {
        "id": true,
        "name": true,
        "description": true,
        "status": true,
        "channelsAcrossVersions": true,
        "workflowDomain": true,
        "systemCategory": true,
        "folderId": true,
        "createdAt": true,
        "updatedAt": true,
        "archivedAt": true
      },
      "total": true
    }
  }
}
```
