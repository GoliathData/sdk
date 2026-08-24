<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getFormRoutingDistribution

query · domain `forms` · requires the READ scope

Lead-assignment distribution for one form's round-robin pool - the number of leads routed to each assigned user. userId maps to a teammate from listTeammates.

## Call

```ts
const result = await client.forms.getFormRoutingDistribution({ formId: '<id>' })
// → Promise<GetFormRoutingDistributionQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetFormRoutingDistributionQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

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
    "routingDistribution": {
      "userId": true,
      "leadCount": true
    }
  }
}
```
