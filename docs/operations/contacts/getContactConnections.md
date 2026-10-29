<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getContactConnections

query · domain `contacts` · requires the READ scope

A contact's Links card (`externalLinks`), related people (`linkedRelationships`, with `linkedContactId`), relatives not yet contacts (`subContacts`) and the AI pause in force (`aiPause`, null when AI is on: its mode, when and until, the `reason` given, and who paused it: `pausedBy` a person, `pausedByAgentId` an AI employee (getEmployee names it), `pausedByWorkflowRunId` a workflow step, `pausedBySystem` a named job). For WHICH contacts have AI paused, filter on `aiPaused` (filterContacts, countContacts) instead of reading contacts one by one. The ids the link and relationship ops take. Merged ids resolve to the survivor.

## Call

```ts
const result = await client.contacts.getContactConnections({ contactId: '<id>' })
// → Promise<GetContactConnectionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetContactConnectionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "contact": {
      "id": true,
      "externalLinks": {
        "id": true,
        "title": true,
        "url": true
      },
      "linkedRelationships": {
        "id": true,
        "relation": true,
        "note": true,
        "linkedContactId": true
      },
      "subContacts": {
        "id": true,
        "name": true,
        "relation": true
      },
      "aiPause": {
        "mode": true,
        "pausedAt": true,
        "pausedUntil": true,
        "reason": true,
        "pausedBy": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "pausedByAgentId": true,
        "pausedByWorkflowRunId": true,
        "pausedBySystem": true
      }
    }
  }
}
```
