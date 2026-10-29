<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPhoneLineRingPolicy

query · domain `phoneNumbers` · requires the READ scope

One line's own ring policy (its override of the org default), in getPhoneRouting's shape; null when the line follows the default. `phoneLineId` from getPhoneRouting or listCommunicationChannels.

## Call

```ts
const result = await client.phoneNumbers.getPhoneLineRingPolicy({ phoneLineId: '<id>' })
// → Promise<GetPhoneLineRingPolicyQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPhoneLineRingPolicyQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "ringPolicyQuery": {
    "phoneLineRingPolicy": {
      "id": true,
      "humanStage": {
        "targetKind": true,
        "ringSeconds": true,
        "externalE164": true,
        "specificUser": {
          "id": true,
          "name": true
        },
        "phoneLineIds": true,
        "userGroupId": true,
        "ringAllTeamMembers": true,
        "areaCodeForwardingMap": true,
        "ownerlessStep": {
          "targetKind": true,
          "externalE164": true,
          "specificUser": {
            "id": true,
            "name": true
          },
          "phoneLineIds": true,
          "userGroupId": true
        },
        "schedule": {
          "timezone": true,
          "days": {
            "day": true,
            "open": true,
            "close": true,
            "enabled": true
          }
        }
      },
      "aiStage": {
        "agents": {
          "id": true,
          "name": true,
          "canAnswerCalls": true,
          "cannotAnswerReason": true
        },
        "rotation": true
      }
    }
  }
}
```
