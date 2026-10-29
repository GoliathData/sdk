<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# clearIntakeAssignment

mutation · domain `account` · requires the ADMIN scope

Delete an owner's intake assignment for good (its people, teams, employees, workflows and rotation place); a line then falls back to the org default, and an ORG clear deletes that default, so a line with none of its own assigns nobody. owner is { kind, id }: ORG (the org id, the default), LINE (a phone line), META_PAGE (a Page id) or WORKFLOW (an EVENT workflow group). A LINE or ORG owner reads true whether or not one existed; a META_PAGE or WORKFLOW owner reads false when there was none or it is not the key org's. Admins only.

## Call

```ts
const result = await client.account.clearIntakeAssignment({ owner: <AssignmentPolicyOwnerInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ClearIntakeAssignmentMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ClearIntakeAssignmentMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `owner` | `AssignmentPolicyOwnerInput!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "assignmentPolicyMutation": {
    "clear": true
  }
}
```
