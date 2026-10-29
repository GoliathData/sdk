<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateCallOutcome

mutation · domain `communications` · requires the WRITE scope

Record or correct a call's outcome (disposition) and its note (at most 280 characters), as the dialer's outcome gate does. By callSid, or by contactId for the key owner's latest outbound call to that contact. Sends nothing.

## Call

```ts
const result = await client.communications.updateCallOutcome({ disposition: <CallDisposition> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateCallOutcomeMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateCallOutcomeMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `callSid` | `ID` | no | — |
| `contactId` | `ID` | no | — |
| `disposition` | `CallDisposition!` | yes | — |
| `note` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "callsMutation": {
    "updateCallDisposition": true
  }
}
```
