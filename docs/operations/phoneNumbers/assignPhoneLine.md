<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# assignPhoneLine

mutation · domain `phoneNumbers` · requires the WRITE scope

Give a phone line the org already owns (listCommunicationChannels) to a teammate (`userId`, listTeammates), moving it off whoever holds it now; nothing is bought or released. `makePrimary: true` makes it their primary line. A line in the bulk-dialing rotation (getDialingPool) is refused unless `leaveDialingRotation: true`, sent only once the person agreed it leaves the rotation. Say whose line it was and who gets it before you call. Admins only; a non-admin may only make a line they already hold their primary. Returns every line the move changed, each with its holder.

## Call

```ts
const result = await client.phoneNumbers.assignPhoneLine({ phoneLineId: '<id>', userId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<AssignPhoneLineMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `AssignPhoneLineMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `phoneLineId` | `ID!` | yes | — |
| `userId` | `ID!` | yes | — |
| `makePrimary` | `Boolean` | no | — |
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
      "id": true,
      "e164Number": true,
      "isPrimary": true,
      "isDialingPoolLine": true,
      "user": {
        "id": true,
        "firstName": true,
        "lastName": true
      }
    }
  }
}
```
