<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContactLists

mutation · domain `contacts` · requires the WRITE scope

Delete contact lists by id (from createContactList), dropping their membership. IRREVERSIBLE: prefer renameContactList when only the name is wrong, and removeContactsFromList when the list should just not hold those contacts; this is for retiring the list. A list referenced by filters/workflows needs a dependencyResolution from getDeletionImpact (targetKind CONTACT_LIST); an unreferenced one needs none.

## Call

```ts
const result = await client.contacts.deleteContactLists({ listIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteContactListsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteContactListsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `listIds` | `[ID!]!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "deleteContactLists": {
      "id": true
    }
  }
}
```
