<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getTextingRegistrationForm

query · domain `communications` · requires the ADMIN scope

The texting registration form (A2P 10DLC) as Settings → Phone → Registration opens it, prefilled from the saved draft, an earlier filing, the workspace and the filer's profile. registrationNumber is the EIN; ask for it when empty. twilioRegistration is the filing on record (null: none; message and failureField: what the carriers refused). Read before fileTextingRegistration. Admins only.

## Call

```ts
const result = await client.communications.getTextingRegistrationForm()
// → Promise<GetTextingRegistrationFormQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetTextingRegistrationFormQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "organization": {
      "id": true,
      "twilioRegistration": {
        "status": true,
        "message": true,
        "failureField": true,
        "filedAt": true
      },
      "twilioRegistrationPrefill": {
        "fromEarlierFiling": true,
        "fromWorkspace": true,
        "fromProfile": true,
        "einLetterRemoved": true,
        "draft": {
          "businessName": true,
          "businessEmail": true,
          "businessType": true,
          "registrationNumber": true,
          "street": true,
          "unit": true,
          "city": true,
          "region": true,
          "postalCode": true,
          "rep1FirstName": true,
          "rep1LastName": true,
          "rep1Title": true,
          "rep1JobPos": true,
          "rep1Email": true,
          "rep1Phone": true,
          "einLetterFileId": true
        }
      }
    }
  }
}
```
