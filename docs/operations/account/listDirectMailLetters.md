<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listDirectMailLetters

query · domain `account` · requires the READ scope

The letters on contacts you can see (Automations → Letters), newest first: `totalCount`, then a page (`limit` default 50, `offset`) of contactName, campaignLabel, workflowName, mode, status (QUEUED, SUBMITTED, MAILED, IN_TRANSIT, DELIVERED, RETURNED, CANCELED, FAILED…), requestedAt, mailedAt, deliveredAt. Narrow with `statuses`, `modes` (LIVE; a TEST account mails and bills nothing) or `search` (a contact or workflow name). The read for "did my letters go out", "how did the last mailer do" and "did anyone answer the mail": totalCount 0 with no narrowing means no letter on a contact you can see was ever mailed (an account setup's test letter is not listed), so say that plainly and never guess. Answers show as the contact's own text, call or email afterwards, and QR scans as the `physicalMail` contact filter.

## Call

```ts
const result = await client.account.listDirectMailLetters()
// → Promise<ListDirectMailLettersQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListDirectMailLettersQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `limit` | `Int` | no | — |
| `offset` | `Int` | no | — |
| `statuses` | `[DirectMailPieceDisplayState!]` | no | — |
| `modes` | `[DirectMailConnectionMode!]` | no | — |
| `search` | `String` | no | — |

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "directMailLetters": {
      "totalCount": true,
      "nodes": {
        "id": true,
        "contactId": true,
        "contactName": true,
        "provider": true,
        "campaignLabel": true,
        "mode": true,
        "status": true,
        "refusalReason": true,
        "requestedAt": true,
        "mailedAt": true,
        "deliveredAt": true,
        "workflowName": true
      }
    }
  }
}
```
