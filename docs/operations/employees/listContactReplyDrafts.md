<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactReplyDrafts

query · domain `employees` · requires the READ scope

Retired (#41897): always returns an empty list. AI employees no longer hold replies here; a reply waiting on a person is a reply card in the app.

## Call

```ts
const result = await client.employees.listContactReplyDrafts({ contactId: '<id>' })
// → Promise<ListContactReplyDraftsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactReplyDraftsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
  "aiEmployeesQuery": {
    "pendingAgentReplyDrafts": {
      "id": true,
      "agentId": true,
      "channel": true,
      "messages": true,
      "recipientEmail": true,
      "subject": true,
      "bodyMarkdown": true,
      "createdAt": true,
      "expiresAt": true
    }
  }
}
```
