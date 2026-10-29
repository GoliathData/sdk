<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setSpaceGrant

mutation · domain `spaces` · requires the WRITE scope

Share a folder or file — and everything in it — with one teammate (`userId`, an active member of your organization) as VIEWER, EDITOR or MANAGER, or stop sharing with `role` null. Needs MANAGER. Library never shares outside the organization. Requires the user's explicit approval: it changes who can see the file.

## Call

```ts
const result = await client.spaces.setSpaceGrant({ input: <SetSpaceGrantInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetSpaceGrantMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetSpaceGrantMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `input` | `SetSpaceGrantInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "spacesMutation": {
    "setGrant": {
      "audience": true,
      "entries": {
        "person": {
          "id": true,
          "name": true
        },
        "role": true,
        "isOwner": true
      }
    }
  }
}
```
