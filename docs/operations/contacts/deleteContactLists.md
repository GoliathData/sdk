<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContactLists

mutation · domain `contacts` · requires the WRITE scope

Delete contact lists by id (created via createContactList); also drops their membership. IRREVERSIBLE — prefer renameContactList when the name is merely wrong, and removeContactsFromList when the list is right but should not hold those contacts; this op is only for retiring the list itself. A list referenced by filters/workflows needs a dependencyResolution from getDeletionImpact (targetKind CONTACT_LIST); an unreferenced list needs none.

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
