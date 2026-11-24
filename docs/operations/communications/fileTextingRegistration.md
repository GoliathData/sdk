<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# fileTextingRegistration

mutation · domain `communications` · requires the ADMIN scope

File or refile the organization's texting registration (A2P 10DLC), as the form's Submit in Settings → Phone → Registration does. Send getTextingRegistrationForm's draft (state is its region; registrationNumber is the EIN, like 12-3456789; state a code, like CO). businessType: Co-operative, Corporation, Limited Liability Corporation, Non-profit Corporation, Partnership or Sole Proprietorship. rep1JobPos: Director, GM, VP, CEO, CFO, General Counsel or Other; rep1Title is the position itself, or their title for Other (an owner: Other, Owner). einConfirmationLetterUploadedFileId: the draft einLetterFileId; null removes the letter, omitted keeps it. Card summary: the business name, EIN, type, address and representative it files; Goliath reviews it, then the carriers (days). Goliath's team adds the website and the use case. Refused on a trial (end it in the app) or a plan without texting. Admins only.

## Call

```ts
const result = await client.communications.fileTextingRegistration({ businessName: '<text>', businessEmail: '<text>', businessType: '<text>', registrationNumber: '<text>', street: '<text>', city: '<text>', state: '<text>', postalCode: '<text>', rep1FirstName: '<text>', rep1LastName: '<text>', rep1Email: '<text>', rep1Phone: '<text>', rep1JobPos: '<text>', rep1Title: '<text>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<FileTextingRegistrationMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `FileTextingRegistrationMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `businessName` | `String!` | yes | — |
| `businessEmail` | `String!` | yes | — |
| `businessType` | `String!` | yes | — |
| `registrationNumber` | `String!` | yes | — |
| `street` | `String!` | yes | — |
| `unit` | `String` | no | — |
| `city` | `String!` | yes | — |
| `state` | `String!` | yes | — |
| `postalCode` | `String!` | yes | — |
| `rep1FirstName` | `String!` | yes | — |
| `rep1LastName` | `String!` | yes | — |
| `rep1Email` | `String!` | yes | — |
| `rep1Phone` | `String!` | yes | — |
| `rep1JobPos` | `String!` | yes | — |
| `rep1Title` | `String!` | yes | — |
| `einConfirmationLetterUploadedFileId` | `ID` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "twilioMutation": {
    "createBusinessSubAccount": {
      "id": true,
      "twilioRegistration": {
        "status": true,
        "message": true,
        "filedAt": true
      }
    }
  }
}
```
