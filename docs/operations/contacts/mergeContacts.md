<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# mergeContacts

mutation · domain `contacts` · requires the WRITE scope

Merge duplicate contacts into one surviving record. contactIds is the full set being merged (2 or more, from findContacts); primaryContactId is the survivor and MUST be one of contactIds — it keeps its own custom fields and agent while absorbing the others’ notes, tags, activities, and campaign slots, and the losers are retired — stamped as merged, removed from every list, search and API result, with no way to bring one back. name is the survivor’s resulting display name. pointPersonUserId optionally decides which agent survives when the merged contacts disagree (it must already be an agent on one of them; omit to keep the primary’s). Applied synchronously; returns the surviving contact. Detect duplicates first with findContacts, then confirm the merge with the user before calling — the losing records are retired permanently.

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
