<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# setOrganizationOutboundPause

mutation · domain `account` · requires the ADMIN scope

"Pause everything": `paused: true` stops every automated outbound message (workflow texts and emails, AI employee texts, emails and calls, drips, mail) until it is turned off; queued work waits and nothing is cancelled. A person's own sends still go out. `paused: false` resumes. Organization admins only.

## Call

```ts
const result = await client.account.setOrganizationOutboundPause({ paused: false }, { idempotencyKey: crypto.randomUUID() })
// → Promise<SetOrganizationOutboundPauseMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `SetOrganizationOutboundPauseMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `paused` | `Boolean!` | yes | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "organizationMutation": {
    "setOrganizationOutboundPause": {
      "id": true,
      "outboundPause": {
        "pausedAt": true
      }
    }
  }
}
```
