<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyCapabilities

query · domain `account` · requires the READ scope

The key owner's own permissions — CHECK THIS BEFORE OFFERING OR ATTEMPTING A GATED ACTION, or saying why one is unavailable. Returns the capabilities they HOLD; one missing from the list is one they do NOT have. Seven are opt-IN, off unless a team admin granted them: VIEW_ALL_CONTACTS (without it the user sees only contacts assigned to them or their teams, the usual real answer to "why can't I see this contact"), VIEW_ALL_DEALS, VIEW_ALL_PHONES (call and text FROM any team number), CONTRACTS_VIEW and CONTRACTS_MANAGE (where a contract surface enforces them), VIEW_ORGANIZATION_SETTINGS (the organization's settings pages) and CAN_MANAGE_SPENDING (seats, numbers, the plan, invites). Eleven are opt-OUT, on unless a team admin revoked them: CAN_SKIPTRACE, CAN_EXPORT, CAN_WORKFLOW, and VIEW_TEAM_DIRECTORY (knowing anyone else is in the organization — without it no teammate names are shown, the real answer to "why is this note signed Team member"), and the app sections CAN_USE_AUTOMATIONS (workflow operations too), CAN_USE_FILES, CAN_USE_MARKETPLACE, CAN_USE_API_KEYS, CAN_USE_COMPUTER (where computer use is on), VIEW_TEAM_CALENDARS (teammates' calendars), and VIEW_TEAM_CALLS_TEXTS (reading teammates' calls and texts; email only from mailboxes their owner shares). Roles are only Admin (holds them all) and Member (their own set). An EMPTY list means none held; a NULL/absent list means the lookup failed and you know nothing — never read either as the other, nor tell a user they lack a permission on a failed read. When one is missing, say so plainly and name the remedy (a team admin can turn it on) rather than attempting it and relaying the refusal, or guessing the record does not exist. Never promise the app will refuse an act their role does not allow: say what it does and let the approval card or the operation's own answer speak to permission.

## Call

```ts
const result = await client.account.getMyCapabilities()
// → Promise<GetMyCapabilitiesQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetMyCapabilitiesQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "teamQuery": {
    "myCapabilities": true
  }
}
```
