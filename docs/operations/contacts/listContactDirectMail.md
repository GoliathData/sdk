<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listContactDirectMail

query · domain `contacts` · requires the READ scope

The letters sent to one contact by any mail provider, newest first, 20 a page (pass `nextCursor` as `after`): id, campaignLabel, status, preparedAt, mailedAt.

## Call

```ts
const result = await client.contacts.listContactDirectMail({ contactId: '<id>' })
// → Promise<ListContactDirectMailQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListContactDirectMailQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactId` | `ID!` | yes | — |
| `after` | `String` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactQuery": {
    "directMailPieces": {
      "nodes": {
        "id": true,
        "campaignLabel": true,
        "status": true,
        "preparedAt": true,
        "mailedAt": true
      },
      "hasNextPage": true,
      "nextCursor": true
    }
  }
}
```
