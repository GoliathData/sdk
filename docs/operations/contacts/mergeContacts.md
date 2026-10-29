<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# mergeContacts

mutation · domain `contacts` · requires the WRITE scope

Merge duplicate contacts into one survivor. contactIds: the full set (2+); primaryContactId MUST be one of them; it keeps its custom fields and agent, absorbing the others’ notes, tags, activities, campaign slots. name: its display name; optional pointPersonUserId picks the surviving agent. Returns the survivor. Losers are retired permanently: find them with findDuplicateContactGroups or findContacts. Delegate it with approvedIrreversible and bulkChange (count and contactIds: every contact merged; summary: the one kept); that card is the one yes.

## Call

```ts
const result = await client.contacts.mergeContacts({ contactIds: ['<id>'], primaryContactId: '<id>', name: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<MergeContactsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `MergeContactsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[ID!]!` | yes | — |
| `primaryContactId` | `ID!` | yes | — |
| `name` | `String!` | yes | — |
| `pointPersonUserId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "mergeContacts": {
      "id": true,
      "name": true,
      "createdAt": true
    }
  }
}
```
