<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# renameContactTag

mutation · domain `contacts` · requires the WRITE scope

Rename a FREE-FORM contact tag in place (tagId from searchContactTags `tags`). THIS IS THE CORRECT WAY TO FIX A TAG NAME: deleteContactTags plus createContactTag is irreversible and drops the tag off every contact, while a rename keeps the id, so every contact, saved filter and workflow referencing it still points at it. Applied synchronously; returns the org tag catalog with the new name. FREE-FORM TAGS ONLY: a LIST id is refused (renameContactList) and so is a custom-field id (updateContactCustomField). Names are unique in the organization, case- and whitespace-insensitively, so renaming onto an existing tag's name, or the tag's own current name, is rejected, as is a name a custom field holds. A rename does not merge tags: to consolidate, tag the contacts with the survivor first, then delete the loser.

## Call

```ts
const result = await client.contacts.renameContactTag({ tagId: '<id>', newName: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RenameContactTagMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RenameContactTagMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `tagId` | `ID!` | yes | — |
| `newName` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "renameFreeFormTag": {
      "contactTags": {
        "id": true,
        "name": true
      }
    }
  }
}
```
