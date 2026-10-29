<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# changeNotePinned

mutation · domain `contacts` · requires the WRITE scope

Pin (isPinned true) or unpin a note (getContact notes[]); any teammate may. A pin notifies the contact's teammates.

## Call

```ts
const result = await client.contacts.changeNotePinned({ noteId: '<id>', isPinned: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ChangeNotePinnedMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ChangeNotePinnedMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `noteId` | `ID!` | yes | — |
| `isPinned` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "noteMutation": {
    "changeNotePinned": {
      "id": true,
      "notes": {
        "id": true,
        "isPinned": true
      }
    }
  }
}
```
