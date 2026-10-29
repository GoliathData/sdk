<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# lowercaseContactEmails

mutation · domain `contacts` · requires the WRITE scope

Lowercase every capitalised email on these contacts (≤500; the ids findContactDataProblems problem EMAIL_NOT_LOWERCASE lists), in place: changedEmails, changedContacts, left (the contact already holds the lowercase copy).

## Call

```ts
const result = await client.contacts.lowercaseContactEmails({ contactIds: ['<id>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<LowercaseContactEmailsMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `LowercaseContactEmailsMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `contactIds` | `[ID!]!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "contactMutation": {
    "lowercaseContactEmails": {
      "changedEmails": true,
      "changedContacts": true,
      "left": true
    }
  }
}
```
