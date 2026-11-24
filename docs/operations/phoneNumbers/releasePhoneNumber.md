<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# releasePhoneNumber

mutation · domain `phoneNumbers` · requires the ADMIN scope

Release (delete) a phone line the org owns, as Settings › Phone's Release does. IRREVERSIBLE: the number goes back to the carrier and is lost for good; contacts who know it can no longer reach the org on it, and it cannot be bought back. Calls and texts already on it stay in the history. The plan's extra-number charge is lowered only at the next renewal, not refunded now. Call getDeletionImpact first (targetKind TWILIO_PHONE_NUMBER, targetId the line id) and pass its impactVersion as dependencyResolution, with a replacement line for each dependent it says needs one (an empty `replacements` when none). A line in the bulk-dialing rotation (getDialingPool) is refused unless `leaveDialingRotation: true`, sent only once the person agreed it leaves the rotation. Name each number and its holder and get the person's yes before you call; release one line per call. Admins only.

## Call

```ts
const result = await client.phoneNumbers.releasePhoneNumber({ phoneLineId: '<id>', dependencyResolution: <DependencyResolutionInput> }, { idempotencyKey: crypto.randomUUID() })
// → Promise<ReleasePhoneNumberMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ReleasePhoneNumberMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput!` | yes | — |
| `leaveDialingRotation` | `Boolean` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "twilioMutation": {
    "transferPhoneNumber": {
      "id": true
    }
  }
}
```
