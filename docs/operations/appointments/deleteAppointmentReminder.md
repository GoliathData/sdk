<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# deleteAppointmentReminder

mutation · domain `appointments` · requires the WRITE scope

Delete a reminder by appointmentReminderId. Its scheduled texts stop and it leaves the list and the appointment form; appointments carrying it do not block the delete, their upcoming texts just stop. If it was the default the org has none, unless exactly one reminder remains, which then is. Refused only when something else names its workflow: then pass getDeletionImpact's dependencyResolution (targetKind WORKFLOW_GROUP, targetId = this id). Confirm with the user first: it stops texts their contacts expect.

## Call

```ts
const result = await client.appointments.deleteAppointmentReminder({ appointmentReminderId: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<DeleteAppointmentReminderMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `DeleteAppointmentReminderMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `appointmentReminderId` | `ID!` | yes | — |
| `dependencyResolution` | `DependencyResolutionInput` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "appointmentReminderMutation": {
    "deleteAppointmentReminder": {
      "id": true
    }
  }
}
```
