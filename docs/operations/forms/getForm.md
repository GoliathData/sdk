<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getForm

query · domain `forms` · requires the READ scope

Fetch one lead-capture form by id - full configuration including fieldConfig (the page-and-field document: either a flat array of fields for a single-page form, or a { fields, steps, showStepProgress } envelope for a multi-page one - see createForm), styleConfig (the JSON object of visual styling - colors, typography, spacing, border radius, button/input styling, custom CSS; null = default styling; see updateForm for the key vocabulary), submitButtonLabel, auto-apply tags/lists, dedupe settings, notification toggles, and the assignee pool. Use fieldConfig to interpret the submittedData keys returned by listFormSubmissions; read fieldConfig before editing fields or pages, and styleConfig before restyling, so an updateForm write merges instead of clobbering.

## Call

```ts
const result = await client.forms.getForm({ formId: '<id>' })
// → Promise<GetFormQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetFormQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "get": {
      "id": true,
      "name": true,
      "slug": true,
      "status": true,
      "publicUrl": true,
      "shortUrl": true,
      "submissionCount": true,
      "source": true,
      "ownerType": true,
      "headerText": true,
      "descriptionText": true,
      "submitButtonLabel": true,
      "successMessage": true,
      "fieldConfig": true,
      "styleConfig": true,
      "autoTagIds": true,
      "autoListIds": true,
      "allowDuplicateContact": true,
      "dedupePrimaryField": true,
      "dedupeSecondaryField": true,
      "enableEmailNotification": true,
      "enableSmsNotification": true,
      "enableSlackNotification": true,
      "slackChannelId": true,
      "slackChannelName": true,
      "slackMessageTemplate": true,
      "collectSmsConsent": true,
      "smsTransactionalConsentText": true,
      "smsMarketingConsentText": true,
      "smsDisclaimerText": true,
      "showMarketingConsent": true,
      "marketingConsentText": true,
      "termsAndConditionsText": true,
      "privacyPolicyUrl": true,
      "termsOfServiceUrl": true,
      "privacyPolicyContent": true,
      "termsOfServiceContent": true,
      "showPoweredBy": true,
      "gtmContainerId": true,
      "triggerAgents": {
        "id": true,
        "name": true,
        "status": true
      },
      "assignmentConfig": {
        "assignees": {
          "userId": true,
          "calendarConfig": {
            "isFixed": true,
            "checkExternalCalendars": true
          }
        },
        "teamIds": true,
        "participantUserIds": true
      },
      "createdAt": true,
      "updatedAt": true
    }
  }
}
```
