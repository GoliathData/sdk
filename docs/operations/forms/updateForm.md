<!-- GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/ (manifest snapshot → docs; see scripts/generate-docs.mjs). -->

# updateForm

mutation · domain `forms` · requires the WRITE scope

Update a lead-capture form by id. Patch semantics - omitted fields are left unchanged; passing fieldConfig replaces the ENTIRE document, fields AND steps, so adding, renaming, reordering, or removing a page is a fieldConfig write: read the current document with getForm, edit it, and send the whole thing back (same shape rules as createForm - a malformed entry or unrecognized mapping is rejected, not silently dropped). fieldConfig is the form's ENTIRE page-and-field document, and accepts either of two shapes. (a) SINGLE PAGE: a flat JSON array of field objects. (b) MULTI-STEP (multi-page / "pages" / "steps"): an object envelope { "fields": [ ...the same field objects, each with an extra "stepId" ... ], "steps": [ { "id": "page-1", "name": "Your details", "title": "...", "subtitle": "...", "ctaLabel": "Continue" } ], "showStepProgress": true }. Multi-page forms ARE supported - never tell a user otherwise. Each entry in "steps" is one page, shown in array order, with a "Next" button between pages and a "Step N of M" progress indicator unless "showStepProgress" is false (it is hidden on the first page either way). Step "id" is any non-empty string you choose, unique within the form; "name" is required but is the step's label in the FORM BUILDER only - a visitor never sees it, so do not promise it as on-page text. What a visitor reads is the optional "title"/"subtitle", which head that page, and the optional "ctaLabel", which replaces that page's button text - and note that a "ctaLabel" on the LAST step BEATS submitButtonLabel, so on a paged form set the last step's "ctaLabel", not submitButtonLabel, to change the submit button. All four of those ("title", "subtitle", "ctaLabel", the progress indicator) render ONLY while the form is actually paged: in a ONE-step envelope they render nothing, so put that copy in headerText / descriptionText / submitButtonLabel instead. A field's "stepId" must equal the "id" of a declared step - an unknown stepId is REJECTED, and so is a "stepId" on a field in the flat array shape (a): steps require the envelope. A field with no "stepId" renders on the first page. Fields render in ascending "order" within their page, so keep "order" unique and ascending across the whole document. A one-step envelope renders as a single page; two or more steps make the form paged.Each field object is { fieldKey, label, type, required, order, width, mapping, dropdownOptions?, placeholder?, stepId? } plus the optional keys below. `type` is one of text|email|phone|number|dollar|dropdown|multiselect|textarea|checkbox|address|calendar; `width` is full|half|third. `mapping` is one of firstName|lastName|fullName|email|phone|address|note|none|customField:<id> — fullName is ONE box for the whole name instead of separate first/last, and it is accepted by the write validator even though older copies of this list omitted it. FIELD KEYS beyond the common ones — the list above is what a field usually carries, NOT the whole vocabulary. `hideLabel` hides the label visually while leaving it for screen readers. `validation` takes { minLength, maxLength, pattern, customErrorMessage } and, for an address field, { addressMode: "single" | "split", requireStreet, requireCity, requireState, requireZipCode, requireCountry } — so "require a 10-digit phone" and "split the address into street/city/state/zip" are both expressible here. `customFieldOptionMappings` is [{ formOptionLabel, customFieldOptionId }] and maps the option labels of a dropdown OR multiselect field onto an EXISTING custom field's options instead of minting new ones — use it whenever the user says the form should feed a field they already have. It is required for BOTH types: a multiselect answer is split per label and every label is resolved through this table, and a label with no mapping is SILENTLY SKIPPED — the submission succeeds and that CRM field just stays empty, with nothing reported. So map every option, not only the ones you expect to be picked. `calendarConfig` configures a calendar field: { slotDurationMinutes: [..], defaultDurationMinutes, bufferBeforeMinutes, bufferAfterMinutes, maxAdvanceDays, minNoticeHours, appointmentTitleTemplate, defaultLocation?, calendarProvider?: "GOOGLE" | "MICROSOFT" }. This one is not optional in practice: a calendar field with NO calendarConfig renders no picker at all, and nothing errors — the form just silently has no booking widget, so always send it with a calendar field. A NEW CALENDAR FORM CAN BE BUILT AND PUBLISHED ENTIRELY THROUGH THIS API — never say routing has to be set up in the app. Both createForm and updateForm accept `assignmentConfig`, so the whole sequence is here: author the fields, set the pool, then updateForm(status: ACTIVE). Activating a CALENDAR form is rejected with "Please add an agent to route form submissions to." when the effective pool is empty, or "Pick a schedule for every assignee on a calendar form." when an assignee has no calendarConfig — both fixable in the same call that publishes. The gate is CALENDAR-ONLY: a form with no calendar field publishes with an empty pool, it just routes nobody. Some organizations also enforce a connected-mailbox launch gate on the first DRAFT/INACTIVE-to-ACTIVE transition: every assignee must have the form's pinned GOOGLE or MICROSOFT provider connected; when no provider is pinned, either connection works. If that gate rejects activation, connect the named account in the app and retry updateForm. When you read an existing pool back, ARRAY ORDER is the rotation order among NON-FIXED assignees: one non-fixed assignee is always the host, while multiple use least-recently-booked round robin. Assignees whose calendarConfig.isFixed is true are excluded from rotation and always attend; if every assignee is fixed there is no rotation, and the first assignee is the host.  The mutation returns the stored fieldConfig, so you can verify the pages landed without a second getForm. Activate or deactivate with status (ACTIVE | INACTIVE); prefer status: INACTIVE over deleteForm to turn a form off without losing its submissions. submitButtonLabel sets the submit button text. styleConfig restyles the rendered form (both the hosted page and the iframe embed): a JSON object replaced whole on each write - read the current value with getForm, merge your changes, and send the merged object back; {} resets everything to defaults. All keys optional. Colors are CSS color strings: primaryColor (buttons/accents), backgroundColor, textColor, errorColor, successColor, inputBackgroundColor, inputBorderColor, inputPlaceholderColor, inputFocusColor (focus ring), buttonTextColor, requiredIndicatorColor, dividerColor, formBorderColor. fontFamily is a font name (e.g. "Georgia"). Pixel numbers (JSON numbers, no units): borderRadius (inputs+buttons corner rounding), spacing (gap between fields), inputBorderWidth, inputFocusRingWidth, labelGap, buttonTopMargin, formMaxWidth, formPadding, formBorderWidth. Enums: layout (vertical | horizontal - responsive field layout), inputHeight / labelSize / buttonSize (small | medium | large), labelWeight / buttonFontWeight (normal | medium | semibold | bold), labelPosition (above | inline | floating), buttonStyle (filled | outlined | rounded), buttonWidth (auto | full), buttonTextTransform (none | uppercase | capitalize), buttonHoverEffect (darken | lighten | none), formShadow (none | sm | md | lg). Booleans: formBorder, showDividers. customCss is NOT free-form CSS. It may only contain the rules the Customize-CSS tab in the form builder can author, because that tab is a bounded grid rather than a text box: a person picks a section, fills labelled inputs, and the UI stringifies the result into this field. Anything else is REJECTED naming the offending selector or property. The twelve allowed selectors, with the properties permitted under each: `.embed-root` (padding, max-width, align-items); `.embed-form .form-container` (background, padding, border-radius, max-width, box-shadow); `.embed-form .form-label` (color, font-size, font-weight, margin-bottom); `.embed-form .form-input` (background, border, border-radius, padding, font-size, color); `.embed-form .form-submit` (background, color, border-radius, padding, font-size, font-weight); `.embed-form .form-error` (color, font-size, margin-top); `.embed-form .form-field` (margin-bottom, gap); and, for a form with a calendar field, `.embed-form .cal-day--available` (background, color, border-radius), `.embed-form .cal-day--selected` (background, color), `.embed-form .cal-slot-btn` (border-color, color, border-radius, background), `.embed-form .cal-slot-btn--selected` (background, color, border-color) and `.embed-form .cal-summary-card` (background, border, border-radius, padding). No other selector, no pseudo-element, no property outside those lists. Reach for the typed keys above first — customCss exists for what they cannot express, not as a way around them. Unknown or mistyped keys elsewhere in styleConfig are silently ignored at render time (the default applies), so stay within this vocabulary. The slug (the last segment of the public URL) is settable at CREATION - createForm takes an optional slug - but THIS operation does not thread it, so it cannot be changed here. It is NOT immutable: the app's form builder renames it, and a rename changes the public URL for good (old links stop resolving), so "change my form URL" is an app hand-off, not an impossibility. assignmentConfig is the LEAD ROUTING pool. `assignees` is an ordered list — ARRAY ORDER IS THE ROTATION ORDER, one entry sends every lead to that person, two or more is least-recently-booked round-robin. Each is { userId } (from listTeammates, same-org), plus, on a CALENDAR form, a required calendarConfig: { isFixed, checkExternalCalendars } — a calendar form REJECTS an assignee without one. A non-calendar form does not need it and does not reject one that carries it; the overlay is simply stored and unused, so send it only where it means something. `teamIds` are UserGroup ids added to every created/matched contact; `participantUserIds` are users attached as PARTICIPANT on it. DESIRED-STATE, REPLACED WHOLE: omit the key and the stored pool is untouched; pass it and the three lists BECOME the pool, so read with getForm, merge, and send the merged object back rather than one list alone. All three keys are required when you send it — pass [] for the ones you do not want, no duplicates. The response echoes the stored pool with each assignee resolved to a name; confirm from that rather than assuming. An empty pool is where a form starts and a form with NO calendar field publishes fine with one — it just routes nobody. A CALENDAR form is the exception: activating one is rejected while the EFFECTIVE pool is empty ("Please add an agent to route form submissions to."), so set the pool in the call that publishes it, or before. Effective means the pool you send if you send one, else the stored one — so an already-routed form reactivates without resending it. SMS/marketing consent, which is the A2P opt-in EVIDENCE surface: `collectSmsConsent` renders the transactional opt-in checkbox and `smsDisclaimerText` is the disclaimer beside it. ALWAYS send the text with the toggle. This is not a formatting preference: each submission stores a consent SNAPSHOT of the exact wording shown, and the snapshot records the FIELD, not what the page rendered — so enabling the toggle with no text renders default copy to the visitor and stores consentText: null as the evidence of what they agreed to. That is a compliance record that cannot say what was on screen. MARKETING consent is worse and catches you even when you follow the rule above: turning on `collectSmsConsent` ALONE puts a marketing checkbox inside the SMS block, whose wording comes from `smsMarketingConsentText` (or a built-in default) — but the snapshot records `marketingConsentText`, a DIFFERENT field. So send both, and keep them saying the same thing. `showMarketingConsent` is the separate standalone checkbox, and it behaves the other way: with no `marketingConsentText` it does not render at all, so the toggle looks set and no one is ever asked. `smsTransactionalConsentText` and `smsMarketingConsentText` are the two consent strings; `showMarketingConsent` adds the separate marketing opt-in with `marketingConsentText`. Transactional and marketing consent are DISTINCT — collecting one is not collecting the other. `triggerAgentIds` wires AI employees to the form: DESIRED-STATE, so the ids you send BECOME the complete set (send [] to detach all), and every submission puts them on the created or matched contact — read the current set from getForm and merge rather than sending one id alone. Legal text: `termsAndConditionsText` sits under the submit button, `privacyPolicyUrl`/`termsOfServiceUrl` link out, and `privacyPolicyContent`/`termsOfServiceContent` hold inline copy instead of a link. `slackMessageTemplate` is the {{token}} body for the Slack notification — it needs `slackChannelId` set (and the Slack notification enabled) to do anything, so setting the template alone changes nothing visible. The Powered by Goliath footer is NOT settable here: removing it is a Scale entitlement and the only check on it today lives in the dashboard, so a key that could write it would be buying the perk for free. `gtmContainerId` is a Google Tag Manager container, validated as GTM-XXXX and honoured on the hosted page only, not on an embed. `source` is the lead-source label stored on the form; getForm returns it and ownerType alongside. Notification DESTINATIONS are settable here too: `enableEmailNotification`, `enableSmsNotification` and `enableSlackNotification` are the three toggles getForm reports, and the Slack one needs `slackChannelId` (plus `slackChannelName` for display) to have anywhere to post. Setting a channel or a template without enabling the toggle changes nothing a person will see, so send the toggle with them. getForm READS BACK everything in this paragraph — every consent string, the legal text and URLs, the three toggles and the Slack destination, the watermark and GTM flags — so you can verify a write, diff intended against actual, or read the current copy before changing one field of it. A CALENDAR form must additionally satisfy any connected-mailbox launch gate described above before its first publish.

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
