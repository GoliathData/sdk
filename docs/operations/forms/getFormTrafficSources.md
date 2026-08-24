<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getFormTrafficSources

query · domain `forms` · requires the READ scope

Where a form's traffic and submissions come from - breakdowns by traffic source, device class, and location, each with views, submits, and the submit rate.

## Call

```ts
const result = await client.forms.getFormTrafficSources({ formId: '<id>' })
// → Promise<GetFormTrafficSourcesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetFormTrafficSourcesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `formId` | `ID!` | yes | — |

## Gateway notes

- Rate limited: shares the per-key analytics bucket; 429s carry a Retry-After header.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormQuery": {
    "analyticsSourcesDevices": {
      "trafficSources": {
        "trafficSource": true,
        "views": true,
        "submits": true,
        "rate": true
      },
      "deviceMix": {
        "deviceClass": true,
        "views": true,
        "submits": true,
        "rate": true
      },
      "locationMix": {
        "city": true,
        "region": true,
        "country": true,
        "views": true,
        "submits": true,
        "rate": true
      }
    }
  }
}
```
