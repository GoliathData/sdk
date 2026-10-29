<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMetaPageIntakeAssignments

query · domain `account` · requires the ADMIN scope

Each Facebook Page's own intake assignment (who gets the contacts its Lead Ads create), through the key owner's own Facebook sign-in as listIntegrations reads the Pages; null for a Page nobody has configured. Only the Pages that sign-in reaches: [] when the key owner has not connected Facebook, which does not mean no Page is routed (the admin who connected it sees them). Admins only.

## Call

```ts
const result = await client.account.getMetaPageIntakeAssignments()
// → Promise<GetMetaPageIntakeAssignmentsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMetaPageIntakeAssignmentsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "oauthQuery": {
    "listFacebookPages": {
      "id": true,
      "name": true,
      "connected": true,
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
```
