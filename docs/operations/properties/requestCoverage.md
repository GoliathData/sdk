<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# requestCoverage

mutation · domain `properties` · requires the WRITE scope

Ask for coverage of places ("Cook County, IL"; a county keys to its cell, anything else comes back in gaps) for signals by name (signals, always sent: [] when asking by family), or families picked outright (FORECLOSURE, PREFORECLOSURE, PROBATE, PREPROBATE, TAX_DELINQUENCY, CODE_VIOLATION). For those six, read listMyCoverageRequests first: one already asked is not asked again. Any other signal (liens, evictions) is recorded and reaches sales, but no read returns it: ask it once and give no date. Any member.

## Call

```ts
const result = await client.properties.requestCoverage({ locations: ['<text>'], signals: ['<text>'] }, { idempotencyKey: crypto.randomUUID() })
// → Promise<RequestCoverageMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `RequestCoverageMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `locations` | `[String!]!` | yes | — |
| `signals` | `[String!]!` | yes | — |
| `families` | `[String!]` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "coverageRequestMutation": {
    "requestCoverage": {
      "cells": {
        "jurisdictionKey": true,
        "family": true,
        "created": true,
        "buildStatus": true,
        "served": true
      },
      "gaps": {
        "reason": true,
        "values": true
      }
    }
  }
}
```
