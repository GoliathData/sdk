<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteContactTags

mutation · domain `contacts` · requires the WRITE scope

Delete free-form contact tags by id (created via createContactTag); also removes them from any contacts. IRREVERSIBLE and org-wide — prefer renameContactTag when the name is merely wrong, and removeContactTags when the tag is right but should come off some contacts; this op is only for retiring the tag itself. Only free-form tag ids are accepted — custom fields, lists, and system-defined rows are rejected. A single-tag delete requires a dependencyResolution from getDeletionImpact (targetKind CONTACT_TAG): the impactVersion plus any replacements. A multi-tag delete accepts only tags with no dependencies; delete a depended-on tag individually.

## Call

```ts
const result = await client.contacts.deleteContactTags({ tagIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteContactTagsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteContactTagsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `tagIds` | `[ID!]!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "deleteFreeFormTags": {
      "id": true
    }
  }
}
```
