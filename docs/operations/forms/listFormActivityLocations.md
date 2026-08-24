<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFormActivityLocations

query · domain `forms` · requires the READ scope

Approximate geo coordinates of recent sessions for one form, for plotting a lead map. Latitude/longitude are rounded to ~1km. Each point carries its session status and the linked submission id (if any).

## Call

```ts
const result = await client.forms.listFormActivityLocations({ formId: '<id>' })
// → Promise<ListFormActivityLocationsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFormActivityLocationsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |
| `limit` | `Int` | no | 100 |

## Gateway notes

- The `limit` variable is clamped server-side to a maximum of 500.
- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "analyticsActivityLocations": {
      "sessionId": true,
      "embedFormSubmissionId": true,
      "sessionStatus": true,
      "latitude": true,
      "longitude": true,
      "city": true,
      "regionCode": true,
      "countryCode": true,
      "lastActivityAt": true
    }
  }
}
```
