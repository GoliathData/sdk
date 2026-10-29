<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getCallWorkspaceSettings

query · domain `communications` · requires the READ scope

The dialer's settings (Settings → Calls): auto-advance, the after-call actions in order, callCardFieldIds (contact custom fields shown on the call card) and callerIdTableColumnId; plus a person's voicemail drops (userId, default the key owner).

## Call

```ts
const result = await client.communications.getCallWorkspaceSettings()
// → Promise<GetCallWorkspaceSettingsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetCallWorkspaceSettingsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `userId` | `ID` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsQuery": {
    "callWorkspaceConfig": {
      "autoAdvance": true,
      "advanceDelaySeconds": true,
      "actions": {
        "kind": true,
        "isEnabled": true,
        "displayOrder": true
      },
      "callCardFieldIds": true,
      "callerIdTableColumnId": true
    },
    "voicemailTemplates": {
      "id": true,
      "name": true,
      "durationMs": true,
      "displayOrder": true,
      "createdAt": true
    }
  }
}
```
