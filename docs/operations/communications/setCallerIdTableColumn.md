<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setCallerIdTableColumn

mutation · domain `communications` · requires the WRITE scope

Set the PHONE_LINE Workflow Table column the dialer reads each contact's outbound caller ID from (listWorkflowTables), or null to stop. Admins only.

## Call

```ts
const result = await client.communications.setCallerIdTableColumn(undefined, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetCallerIdTableColumnMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetCallerIdTableColumnMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callerIdTableColumnId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsMutation": {
    "updateCallWorkspaceConfig": {
      "callerIdTableColumnId": true
    }
  }
}
```
