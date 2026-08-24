<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getMyCapabilities

query · domain `account` · requires the READ scope

The key owner's own permissions — CHECK THIS BEFORE OFFERING OR ATTEMPTING A GATED ACTION, and before telling a user why something is unavailable. Returns the capabilities they HOLD; a capability missing from the list is one they do NOT have. Six exist. Three are opt-IN, off unless a team admin granted them: VIEW_ALL_CONTACTS (without it the user sees only contacts assigned to them or their teams, which is the usual real answer to "why can't I see this contact"), VIEW_ALL_DEALS, VIEW_ALL_PHONES (calls and texts). Three are opt-OUT, on unless a team admin revoked them: CAN_SKIPTRACE, CAN_EXPORT, CAN_WORKFLOW. Team admins hold all six implicitly. An EMPTY list means the user holds none of them; a NULL/absent list means the lookup failed and you know nothing — do not read either as the other, and never tell a user they lack a permission on the strength of a failed read. When a capability is missing, say so plainly and name the remedy — a team admin can turn it on — instead of attempting the action and relaying the refusal, or guessing that the record does not exist.

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
