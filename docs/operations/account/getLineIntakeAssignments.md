<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getLineIntakeAssignments

query · domain `account` · requires the READ scope

Each phone line's own intake assignment (who gets the contacts its inbound traffic creates); null when the line follows the org default (getPhoneRouting's defaultInboundIntakePolicy).

## Call

```ts
const result = await client.account.getLineIntakeAssignments()
// → Promise<GetLineIntakeAssignmentsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetLineIntakeAssignmentsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "organization": {
      "id": true,
      "twilioPhoneNumbers": {
        "id": true,
        "e164Number": true,
        "label": true,
        "assignmentPolicy": {
          "id": true,
          "assigneeUserIds": true,
          "participantUserIds": true,
          "teamIds": true,
          "tags": true,
          "agentAssigneeIds": true,
          "workflowGroupIds": true
        }
      }
    }
  }
}
```
