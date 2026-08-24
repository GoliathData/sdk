<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# createContactTag

mutation · domain `contacts` · requires the WRITE scope

Create an organization-wide free-form contact tag. Applied synchronously. Returns the org tag catalog; read the new tag id back by matching the name you supplied (or use searchContactTags). To fix a name afterwards use renameContactTag — do not create a second tag.

## Call

```ts
const result = await client.contacts.createContactTag({ tagName: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<CreateContactTagMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `CreateContactTagMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `tagName` | `String!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "createFreeFormTag": {
      "contactTags": {
        "id": true,
        "name": true
      }
    }
  }
}
```
