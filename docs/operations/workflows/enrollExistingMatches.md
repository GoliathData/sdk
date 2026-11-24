<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# enrollExistingMatches

mutation · domain `workflows` · requires the WRITE scope

Enroll the records that already match a workflow's live trigger, as planEnrollExistingMatches counted them: its `liveVersionId` as `expectedLiveVersionId`, its `count` as `confirmedCount`, the same `signalWindowDays`. Nothing is enrolled, for contacts or properties, when another version went live or more match now than `confirmedCount`. Each starts a real run that sends: only on the person's yes to that number. Runs in the background; for a property workflow, plan again only once these runs appear. A refusal is `ok: false` with its sentence.

## Call

```ts
const result = await client.workflows.enrollExistingMatches({ workflowGroupId: '<id>', expectedLiveVersionId: '<id>', confirmedCount: 0 }, { idempotencyKey: crypto.randomUUID() })
// → Promise<EnrollExistingMatchesMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `EnrollExistingMatchesMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `workflowGroupId` | `ID!` | yes | — |
| `expectedLiveVersionId` | `ID!` | yes | — |
| `confirmedCount` | `Int!` | yes | — |
| `signalWindowDays` | `Int` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "workflowAutomationsMutation": {
    "enrollExistingWorkflowMatches": {
      "ok": true,
      "diagnostics": true,
      "detail": true
    }
  }
}
```
