<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getPhoneRouting

query · domain `phoneNumbers` · requires the READ scope

Who answers an inbound call or text: the call routing the Automations Map's Phone calls area shows, and who gets a new contact. `orgDefaultRingPolicy` is the default every line follows unless it has its own (null = none configured): `humanStage` is who rings first (`targetKind` LINE_OWNER the number's own user, SPECIFIC_USER one teammate, TEAM a team, ORG_USER_ROTATION a rotation of lines, EXTERNAL or AREA_CODE_MAP forwarding; a null humanStage means nobody rings and the AI pickup answers at once), for `ringSeconds`, only inside its `schedule` (null = always); `aiStage` is the AI employees that pick up a missed call, in `rotation` (no AI answers only when it is empty or every one has `canAnswerCalls` false). `defaultInboundIntakePolicy` is who gets a NEW contact created by inbound traffic. Each line lists its owner and `ringPolicyId` / `assignmentPolicyId` (null = follows the default); read a line's own policy with getPhoneLineRingPolicy. Change a ring policy with setOrgDefaultRingPolicy or setPhoneLineRingPolicy.

## Call

```ts
const result = await client.phoneNumbers.getPhoneRouting()
// → Promise<GetPhoneRoutingQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetPhoneRoutingQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "ringPolicyQuery": {
    "orgDefaultRingPolicy": {
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
  },
  "currentUser": {
    "id": true,
    "organization": {
      "id": true,
      "defaultInboundIntakePolicy": {
        "assigneeUserIds": true,
        "participantUserIds": true,
        "teamIds": true,
        "agentAssigneeIds": true,
        "workflowGroupIds": true,
        "tags": true
      },
      "twilioPhoneNumbers": {
        "id": true,
        "e164Number": true,
        "user": {
          "id": true,
          "firstName": true,
          "lastName": true
        },
        "ringPolicyId": true,
        "assignmentPolicyId": true
      }
    }
  }
}
```
