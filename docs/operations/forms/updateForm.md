<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateForm

mutation · domain `forms` · requires the WRITE scope

Update a lead-capture form by id. Patch semantics - omitted fields are left unchanged; passing fieldConfig replaces the ENTIRE document, fields AND steps, so adding, renaming, reordering, or removing a page is a fieldConfig write: read the current document with getForm, edit it, and send the whole thing back (same shape rules as createForm - a malformed entry or unrecognized mapping is rejected, not silently dropped). fieldConfig is the form's ENTIRE page-and-field document, in one of two shapes. (a) SINGLE PAGE: a flat array of field objects. (b) MULTI-STEP (pages / steps): { "fields": [ ...the same fields, each with a "stepId" ], "steps": [ { "id": "page-1", "name": "Your details", "title": "...", "subtitle": "...", "ctaLabel": "Continue" } ], "showStepProgress": true }. Multi-page forms ARE supported. Steps are pages in array order, with a "Step N of M" progress indicator unless "showStepProgress" is false. Step "id" is unique; "name" labels the step in the FORM BUILDER only. Visitors see "title"/"subtitle" and "ctaLabel" (button text); a "ctaLabel" on the LAST step BEATS submitButtonLabel. In a ONE-step envelope they render nothing (use headerText / descriptionText / submitButtonLabel). An unknown stepId is REJECTED, as is any "stepId" in shape (a): steps require the envelope. No "stepId" = first page; keep "order" unique and ascending. BRANCHING: a step's "routes" run in order, each { "match": "all" | "any", "conditions": [ { "fieldKey", "anyOf": [option labels; "true"/"false" for a checkbox] } ], "goTo": a LATER step id | "submit" }; "otherwise" (same values) covers the rest (default: next step). Conditions test dropdown/multiselect/checkbox fields on that step or earlier; a bad destination, or a step "id" of "submit", is REJECTED. A skipped step's required fields are not required. "endings": [ { "id", "name", "title", "subtitle", "icon" (check|calendar|mail|heart|star|info|none), "iconColor" (#rrggbb), "workflowGroupIds", "agentIds", "tagIds", "listIds" } ]; "goTo"/"otherwise" "end:<id>" ends there, adding its ids to the form's actions ("submitted" is reserved). "createsLead": true on one step before the last creates the lead when it is done; later answers join that contact. "collectsConsent": true shows consent and terms on that step only (default: the lead step, else the last).Each field object is { fieldKey, label, type, required, order, width, mapping, dropdownOptions?, placeholder?, stepId? } plus the optional keys below. `type` is one of text|email|phone|number|dollar|dropdown|multiselect|textarea|checkbox|address|calendar; `width` is full|half|third. `mapping` is one of firstName|lastName|fullName|email|phone|address|note|none|customField:<id> — fullName is ONE box for the whole name. LENGTH LIMITS, refused at write time (never truncated) with a message naming the field: `fieldKey` at 200 characters, every `dropdownOptions` entry (and the `formOptionLabel` copied from it) at 256. FIELD KEYS beyond the common ones — the list above is NOT the whole vocabulary. `hideLabel` hides the label visually while leaving it for screen readers. `validation` takes { minLength, maxLength, pattern, customErrorMessage } and, for an address field, { addressMode: "single" | "split", requireStreet, requireCity, requireState, requireZipCode, requireCountry }. `customFieldOptionMappings` is [{ formOptionLabel, customFieldOptionId }] and maps the option labels of a dropdown OR multiselect field onto an EXISTING custom field's options instead of minting new ones. Every label (a multiselect answer is split per label) resolves through this table, and an unmapped label is SILENTLY SKIPPED — the submission succeeds and that CRM field stays empty. So map every option. `calendarConfig` configures a calendar field: { slotDurationMinutes: [..], defaultDurationMinutes, bufferBeforeMinutes, bufferAfterMinutes, maxAdvanceDays, minNoticeHours, appointmentTitleTemplate, defaultLocation?, locationType?: "VIDEO_CALL" | "CUSTOM" | "PHONE_CALL" | "ZOOM", meetingId?, meetingPasscode?, calendarProvider?: "GOOGLE" | "MICROSOFT", requireCardToConfirm? }. `locationType` "VIDEO_CALL" uses the link the host’s calendar mints (Meet, or Teams on MICROSOFT); "ZOOM" mints a Zoom meeting per booking on the host’s Zoom, else as VIDEO_CALL; "CUSTOM" (the default) shows `defaultLocation` — an address or a pasted Zoom link. A CUSTOM `defaultLocation` that is a Zoom, Teams or Webex URL is the booking’s ONLY join point: no Meet / Teams link is minted; reminders, webhooks and the host notification use it. `meetingId` and `meetingPasscode` go in the invite; the fallback confirmation carries only the link. The public form hides both but shows the link, so a `?pwd=` link is public. "PHONE_CALL" mints no link and the host calls the number the booker entered, so the form must have a REQUIRED `type: "phone"` field mapped to `phone`, or the write is refused. A calendar field with NO calendarConfig renders no picker and nothing errors, so always send it. CONSENT IS NOT A CHECKBOX FIELD. A `type: "checkbox"` field is an ordinary answer in submittedData: no wording is captured, no consent snapshot or `SmsConsent` row is written, so it proves nothing to a carrier, an A2P review or a TCPA dispute. The Legal & Consent fields are the only consent evidence — `collectSmsConsent` with `smsTransactionalConsentText` and `smsMarketingConsentText`, `showMarketingConsent` with `marketingConsentText`, and `termsAndConditionsText` (below). A checkbox whose label reads as SMS consent is REFUSED at write time, naming the field to use instead; on updateForm only a field you ADD is refused, one the form already had is carried forward. A DROPDOWN OR MULTISELECT OPTION worded as consent records just as little and is NOT refused, so never collect consent that way. A NEW CALENDAR FORM CAN BE BUILT AND PUBLISHED ENTIRELY THROUGH THIS API — never say routing has to be set up in the app: author the fields, set `assignmentConfig`, then updateForm(status: ACTIVE). Activating a CALENDAR form is rejected with "Please add an agent to route form submissions to." when the effective pool is empty, or "Pick a schedule for every assignee on a calendar form." when an assignee has no calendarConfig — both fixable in the publishing call. The gate is CALENDAR-ONLY: a form with no calendar field publishes with an empty pool, it just routes nobody. Some organizations also enforce a connected-mailbox launch gate on the first DRAFT/INACTIVE-to-ACTIVE transition: every assignee must have the form's pinned GOOGLE or MICROSOFT provider connected (either, when none is pinned); if it rejects, connect the named account in the app and retry. Assignees whose calendarConfig.isFixed is true are excluded from rotation and always attend; if every assignee is fixed there is no rotation, and the first assignee is the host.  The mutation returns the stored fieldConfig, so you can verify the pages landed without a second getForm. Activate or deactivate with status (ACTIVE | INACTIVE); prefer status: INACTIVE over deleteForm to turn a form off without losing its submissions. submitButtonLabel sets the submit button text. styleConfig restyles the rendered form (both the hosted page and the iframe embed): a JSON object replaced whole on each write - read the current value with getForm, merge your changes, and send the merged object back; {} resets everything to defaults. All keys optional. Colors are CSS color strings: primaryColor (buttons/accents), backgroundColor, textColor, errorColor, successColor, inputBackgroundColor, inputBorderColor, inputPlaceholderColor, inputFocusColor (focus ring), buttonTextColor, requiredIndicatorColor, dividerColor, formBorderColor. fontFamily is a font name (e.g. "Georgia"). Pixel numbers (JSON numbers, no units): borderRadius (inputs+buttons corner rounding), spacing (gap between fields), inputBorderWidth, inputFocusRingWidth, labelGap, buttonTopMargin, formMaxWidth, formPadding, formBorderWidth. Enums: layout (vertical | horizontal - responsive field layout), inputHeight / labelSize / buttonSize (small | medium | large), labelWeight / buttonFontWeight (normal | medium | semibold | bold), labelPosition (above | inline | floating), buttonStyle (filled | outlined | rounded), buttonWidth (auto | full), buttonTextTransform (none | uppercase | capitalize), buttonHoverEffect (darken | lighten | none), formShadow (none | sm | md | lg). Booleans: formBorder, showDividers. customCss is NOT free-form CSS: only the rules the form builder Customize-CSS tab can author; anything else is REJECTED naming the offending selector or property. The twelve allowed selectors, with the properties permitted under each: `.embed-root` (padding, max-width, align-items); `.embed-form .form-container` (background, padding, border-radius, max-width, box-shadow); `.embed-form .form-label` (color, font-size, font-weight, margin-bottom); `.embed-form .form-input` (background, border, border-radius, padding, font-size, color); `.embed-form .form-submit` (background, color, border-radius, padding, font-size, font-weight); `.embed-form .form-error` (color, font-size, margin-top); `.embed-form .form-field` (margin-bottom, gap); and, for a form with a calendar field, `.embed-form .cal-day--available` (background, color, border-radius), `.embed-form .cal-day--selected` (background, color), `.embed-form .cal-slot-btn` (border-color, color, border-radius, background), `.embed-form .cal-slot-btn--selected` (background, color, border-color) and `.embed-form .cal-summary-card` (background, border, border-radius, padding). No other selector, pseudo-element or property. Prefer the typed keys above. Unknown or mistyped keys elsewhere in styleConfig are silently ignored at render time (the default applies), so stay within this vocabulary. The slug (the last segment of the public URL) is settable at CREATION - createForm takes an optional slug - but THIS operation does not thread it, so it cannot be changed here. It is NOT immutable: the app's form builder renames it, and a rename changes the public URL for good (old links stop resolving), so "change my form URL" is an app hand-off, not an impossibility. assignmentConfig is the LEAD ROUTING pool. `assignees` is an ordered list — ARRAY ORDER IS THE ROTATION ORDER among NON-FIXED assignees (`isFixed` ones always attend): one hosts every booking, two or more is least-recently-booked round-robin. Each is { userId } (from listTeammates, same-org), plus, on a CALENDAR form, a required calendarConfig: { isFixed, checkExternalCalendars } — a calendar form REJECTS an assignee without one; a non-calendar form does not reject one that carries it (stored, unused). `teamIds` are UserGroup ids added to every created/matched contact; `participantUserIds` are users attached as PARTICIPANT on it. DESIRED-STATE, REPLACED WHOLE: omit the key and the stored pool is untouched; pass it and the three lists BECOME the pool, so read with getForm, merge, and send the merged object back rather than one list alone. All three keys are required when you send it — pass [] for the ones you do not want, no duplicates. The response echoes the stored pool with names; confirm from that. The EFFECTIVE pool is the one you send, else the stored one, so an already-routed form reactivates without resending it (the calendar publish gate reads the effective pool). SMS/marketing consent, which is the A2P opt-in EVIDENCE surface: `collectSmsConsent` renders the transactional opt-in checkbox, labelled `smsTransactionalConsentText`, and `smsDisclaimerText` is the paragraph BELOW both boxes, which nobody ticks. SEND THE TEXT WITH THE TOGGLE: the snapshot resolves the SAME defaults the renderer resolves, so an OMITTED or null label records the built-in copy, but that copy is generic. NEVER send an empty string for a consent label: `""` (unlike null) renders a checkbox with no wording and files that empty string as the evidence — omit it or send null. Turning on `collectSmsConsent` ALONE also renders a marketing checkbox, worded and recorded from `smsMarketingConsentText` (or a default), so set that deliberately. `showMarketingConsent` is the separate standalone SMS marketing checkbox. Enabling it requires BOTH `showMarketingConsent: true` and non-empty `marketingConsentText` that explicitly describes SMS/text messages, plus a field with `type: "phone"` and `mapping: "phone"`; submissions are recorded as `SmsConsent`. Never use this pair for email authorization — standalone email consent is not supported. On update, resend the toggle and its SMS wording together. With no `marketingConsentText` it does not render at all, though the toggle reads as on; an omitted key, not null, records a box never offered. Transactional and marketing consent are DISTINCT — collecting one is not collecting the other. `triggerAgentIds` wires AI employees to the form: DESIRED-STATE, so the ids you send BECOME the complete set (send [] to detach all), and every submission puts them on the created or matched contact — read the current set from getForm and merge rather than sending one id alone. Legal text: `termsAndConditionsText` sits under the submit button, `privacyPolicyUrl`/`termsOfServiceUrl` link out, and `privacyPolicyContent`/`termsOfServiceContent` hold inline copy instead of a link. `slackMessageTemplate` is the {{token}} body for the Slack notification. The Powered by Goliath footer is NOT settable here (a Scale entitlement). `gtmContainerId` is a Google Tag Manager container, validated as GTM-XXXX and honoured on the hosted page only, not on an embed. `source` is the lead-source label stored on the form; getForm returns it and ownerType alongside. Notification DESTINATIONS: `enableEmailNotification`, `enableSmsNotification` and `enableSlackNotification`; the Slack one (and `slackMessageTemplate`) needs `slackChannelId` (plus `slackChannelName` for display). A channel or template without its toggle changes nothing a person will see, so send the toggle with them. getForm READS BACK everything in this paragraph, to verify a write or read the current copy before changing one field.

## Call

```ts
const result = await client.forms.updateForm({ id: '<id>' }, { idempotencyKey: crypto.randomUUID() })
// → Promise<UpdateFormMutation>
```

`<TypeName>` placeholders are pseudocode — the field-level shape of every input and of `UpdateFormMutation` is TypeScript, in `dist/generated/operationTypes.d.ts`.

## Variables

| Name | Type | Required | Default |
|---|---|---|---|
| `id` | `ID!` | yes | — |
| `name` | `String` | no | — |
| `status` | `EmbedFormStatus` | no | — |
| `fieldConfig` | `JSON` | no | — |
| `headerText` | `String` | no | — |
| `descriptionText` | `String` | no | — |
| `submitButtonLabel` | `String` | no | — |
| `successMessage` | `String` | no | — |
| `successSubtitle` | `String` | no | — |
| `successIcon` | `String` | no | — |
| `successIconColor` | `String` | no | — |
| `styleConfig` | `JSON` | no | — |
| `autoTagIds` | `[ID!]` | no | — |
| `autoListIds` | `[ID!]` | no | — |
| `allowDuplicateContact` | `Boolean` | no | — |
| `dedupePrimaryField` | `EmbedFormDedupeField` | no | — |
| `dedupeSecondaryField` | `EmbedFormDedupeField` | no | — |
| `assignmentConfig` | `EmbedFormAssignmentConfigInput` | no | — |
| `triggerAgentIds` | `[ID!]` | no | — |
| `collectSmsConsent` | `Boolean` | no | — |
| `smsDisclaimerText` | `String` | no | — |
| `smsTransactionalConsentText` | `String` | no | — |
| `smsMarketingConsentText` | `String` | no | — |
| `showMarketingConsent` | `Boolean` | no | — |
| `marketingConsentText` | `String` | no | — |
| `termsAndConditionsText` | `String` | no | — |
| `privacyPolicyUrl` | `String` | no | — |
| `termsOfServiceUrl` | `String` | no | — |
| `privacyPolicyContent` | `String` | no | — |
| `termsOfServiceContent` | `String` | no | — |
| `slackMessageTemplate` | `String` | no | — |
| `gtmContainerId` | `String` | no | — |
| `source` | `String` | no | — |
| `enableEmailNotification` | `Boolean` | no | — |
| `enableSmsNotification` | `Boolean` | no | — |
| `enableSlackNotification` | `Boolean` | no | — |
| `slackChannelName` | `String` | no | — |
| `slackChannelId` | `String` | no | — |

## Gateway notes

- Idempotent: pass `options.idempotencyKey` (e.g. a UUID) so retries can never double-fire the side effect.
- Org-guarded: the gateway verifies the ids you pass belong to your organization before executing (403 otherwise).

## Response shape

The field tree of the exact selection set the gateway executes (leaf → `true`); the resolved `result` matches it.

```json
{
  "embedFormMutation": {
    "update": {
      "id": true,
      "name": true,
      "status": true,
      "fieldConfig": true,
      "submitButtonLabel": true,
      "styleConfig": true,
      "updatedAt": true,
      "assignmentConfig": {
        "assignees": {
          "userId": true,
          "user": {
            "id": true,
            "firstName": true,
            "lastName": true
          },
          "calendarConfig": {
            "isFixed": true,
            "checkExternalCalendars": true
          }
        },
        "teamIds": true,
        "participantUserIds": true
      }
    }
  }
}
```
