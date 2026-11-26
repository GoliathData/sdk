<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listFailedTexts

query · domain `deliveryHealth` · requires the READ scope

Outbound texts that FAILED in a window, grouped by the carrier's error code (30007 carrier filtered, 30003 unreachable, 30006 landline, ...): count, one sample provider message and the latest failure per code, most first; total is every failure. since (inclusive) and until (exclusive) as ISO datetimes WITH an offset, resolved in the person's zone; at most 93 days, a wider window is refused. Same visibility as countOutboundTexts: with VIEW_ALL_PHONES the whole organization (or the userIds named), otherwise only the texts on the person's own rows, so say so. A null errorCode means the provider gave none.

## Call

```ts
const result = await client.deliveryHealth.listFailedTexts({ since: <DateTime>, until: <DateTime> })
// → Promise<ListFailedTextsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListFailedTextsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `since` | `DateTime!` | yes | — |
| `until` | `DateTime!` | yes | — |
| `userIds` | `[ID!]` | no | — |

## Gateway notes

- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamAnalyticsQuery": {
    "failedTexts": {
      "startDate": true,
      "endDate": true,
      "firstDay": true,
      "lastDay": true,
      "days": true,
      "timeZone": true,
      "total": true,
      "groups": {
        "errorCode": true,
        "count": true,
        "sampleErrorMessage": true,
        "latestAt": true
      }
    }
  }
}
```
