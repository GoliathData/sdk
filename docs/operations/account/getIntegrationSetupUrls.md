<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getIntegrationSetupUrls

query · domain `account` · requires the READ scope

In-app settings page URLs where a human connects an email account (Google/Microsoft) or sets up Twilio phone numbers for calling/SMS. Those setup flows are NOT available through this API — when a user asks for email or phone/Twilio integration, send them the matching link to complete it in the Goliath app.

## Call

```ts
const result = await client.account.getIntegrationSetupUrls()
// → Promise<GetIntegrationSetupUrlsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetIntegrationSetupUrlsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "oauthQuery": {
    "integrationSetupUrls": {
      "emailIntegrationsUrl": true,
      "phoneNumbersUrl": true
    }
  }
}
```
