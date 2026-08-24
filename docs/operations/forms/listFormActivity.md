<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFormActivity

query · domain `forms` · requires the READ scope

Recent per-session activity for one form, newest first, cursor-paginated via after. Each row is a viewer session with its status, submit/abandon timestamps, traffic source, device, seconds-to-submit, the matched contact name, and the assigned point-person. Pass excludeViewOnly: true to drop sessions that never started filling.

## Call

```ts
const result = await client.forms.listFormActivity({ formId: '<id>' })
// → Promise<ListFormActivityQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFormActivityQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |
| `limit` | `Int` | no | 25 |
| `after` | `String` | no | — |
| `excludeViewOnly` | `Boolean` | no | — |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 50.
- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "analyticsActivity": {
      "rows": {
        "sessionId": true,
        "firstViewAt": true,
        "lastActivityAt": true,
        "submittedAt": true,
        "abandonedAt": true,
        "sessionStatus": true,
        "trafficSource": true,
        "deviceClass": true,
        "secondsToSubmit": true,
        "embedFormSubmissionId": true,
        "city": true,
        "regionCode": true,
        "country": true,
        "contactName": true,
        "assignedTo": {
          "userId": true,
          "firstName": true,
          "lastName": true
        }
      },
      "nextCursor": true
    }
  }
}
```
