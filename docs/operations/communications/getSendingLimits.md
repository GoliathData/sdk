<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# getSendingLimits

query · domain `communications` · requires the READ scope

How much can we text and email today? Per line, brand (team) and mailbox: used / cap / remaining today (text segments; null cap = no limit; a mailbox also meters recipients, and the tighter of its two binds), a line's last-7-day volume, and the sending queue. Read-only. Count only lines with canSendSms and not isBurned. textingReadiness is the org's texting registration: canText, and reason when not (NO_REGISTRATION = none filed; MANAGED_* = Goliath-managed registration in review or failed; BYO_* = their own Twilio account). Read it first for a registration question; never fill in or submit one for them.

## Call

```ts
const result = await client.communications.getSendingLimits()
// → Promise<GetSendingLimitsQuery>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `GetSendingLimitsQuery` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

None — call the method with no variables argument.

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "currentUser": {
    "id": true,
    "organization": {
      "id": true,
      "textingReadiness": {
        "canText": true,
        "reason": true
      },
      "twilioPhoneNumbers": {
        "id": true,
        "e164Number": true,
        "canSendSms": true,
        "isBurned": true,
        "smsDailyThrottle": {
          "used": true,
          "cap": true,
          "remaining": true
        },
        "smsWarmUpVolume": {
          "last7Days": true
        }
      },
      "smsBrandBudgets": {
        "id": true,
        "phoneNumberIds": true,
        "dailyThrottle": {
          "used": true,
          "cap": true,
          "remaining": true,
          "utcDayEnd": true
        }
      }
    }
  },
  "oauthQuery": {
    "myActiveEmailIdentities": {
      "id": true,
      "email": true,
      "dailyMessagesThrottle": {
        "used": true,
        "cap": true,
        "remaining": true
      },
      "dailyRecipientsThrottle": {
        "used": true,
        "cap": true,
        "remaining": true
      }
    }
  },
  "workflowAutomationsQuery": {
    "sendingQueue": {
      "queued": true,
      "held": true,
      "heldReason": true,
      "heldUntil": true,
      "nextSendAt": true
    }
  }
}
```
