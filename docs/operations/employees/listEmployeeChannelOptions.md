<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# listEmployeeChannelOptions

query · domain `employees` · requires the READ scope

What an AI employee can be bound to right now: `availableMailboxes` (connected Gmail or Outlook inboxes shared with the organization that no employee owns yet; the `id` attachEmployeeMailbox takes) and `availableTriggerForms` (the organization's forms, any status; ids for setEmployeeTriggerForms). Phone numbers are not assigned to employees: an employee replies on the number the conversation is on, otherwise a shared organization number.

## Call

```ts
const result = await client.employees.listEmployeeChannelOptions()
// → Promise<ListEmployeeChannelOptionsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `ListEmployeeChannelOptionsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "aiEmployeesQuery": {
    "availableMailboxes": {
      "id": true,
      "emailAddress": true,
      "provider": true,
      "hasActiveConnection": true,
      "isSharedWithOrg": true
    },
    "availableTriggerForms": {
      "id": true,
      "name": true,
      "status": true
    }
  }
}
```
