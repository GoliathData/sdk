// GENERATED FILE — do not edit. Regenerate with `yarn generate` in sdk/
// (server manifest snapshot → typed client surface; see scripts/generate-client.mjs).
/* oxlint-disable -- generated code */

import { GoliathClientCore } from '../runtime/client'
import type { IdempotentRequestOptions, RequestOptions } from '../runtime/types'
import type * as T from './operationTypes'

// The typed developer-API client: one namespace per domain, one method per
// persisted operation. Transport, auth, retries, and idempotency live in
// GoliathClientCore; `execute(operationId, variables)` remains available as
// an untyped escape hatch for operations newer than this generated surface.
export class GoliathClient extends GoliathClientCore {
  readonly account = {
    /**
     * Delete an owner's intake assignment for good (its people, teams, employees, workflows and rotation place); a line then falls back to the org default, and an ORG clear deletes that default, so a line with none of its own assigns nobody. owner is { kind, id }: ORG (the org id, the default), LINE (a phone line), META_PAGE (a Page id) or WORKFLOW (an EVENT workflow group). A LINE or ORG owner reads true whether or not one existed; a META_PAGE or WORKFLOW owner reads false when there was none or it is not the key org's. Admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    clearIntakeAssignment: (variables: T.ClearIntakeAssignmentMutationVariables, options?: IdempotentRequestOptions): Promise<T.ClearIntakeAssignmentMutation> =>
      this.request('clearIntakeAssignment', variables, options, { operationType: 'mutation' }),
    /**
     * Disconnect CallTools: revokes the organization's CallTools key and the webhook automations Goliath created there, so dispositions stop syncing. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    disconnectCallTools: (options?: IdempotentRequestOptions): Promise<T.DisconnectCallToolsMutation> =>
      this.request('disconnectCallTools', undefined, options, { operationType: 'mutation' }),
    /**
     * Disconnect a campaign dialer, provider ENZO or READYMODE, with EVERY campaign the organization linked to it (listIntegrations shows them); their calls stop syncing. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    disconnectDialer: (variables: T.DisconnectDialerMutationVariables, options?: IdempotentRequestOptions): Promise<T.DisconnectDialerMutation> =>
      this.request('disconnectDialer', variables, options, { operationType: 'mutation' }),
    /**
     * Disconnect one direct-mail provider connection by connectionId (from listIntegrations directMailConnectionQuery.list). New workflow mail sends through it are refused; mail already submitted to the provider is NOT cancelled and may still be delivered. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    disconnectDirectMail: (variables: T.DisconnectDirectMailMutationVariables, options?: IdempotentRequestOptions): Promise<T.DisconnectDirectMailMutation> =>
      this.request('disconnectDirectMail', variables, options, { operationType: 'mutation' }),
    /**
     * Disconnect Facebook Lead Ads for the key owner's own Facebook account. Goliath's access is always removed; unsubscribing the Pages and deauthorizing the app at Facebook are best-effort, so read the result: pagesDisconnected is how many Pages were unsubscribed, and deauthorized false means the user should remove the app in their Facebook settings themselves. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    disconnectFacebookLeadAds: (options?: IdempotentRequestOptions): Promise<T.DisconnectFacebookLeadAdsMutation> =>
      this.request('disconnectFacebookLeadAds', undefined, options, { operationType: 'mutation' }),
    /**
     * Disconnect a phone-enrichment provider by providerKey (provider.key from listIntegrations phoneEnrichmentQuery.providers, e.g. Trestle); phone checks through it stop. Returns its new connectionStatus. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    disconnectPhoneEnrichmentProvider: (variables: T.DisconnectPhoneEnrichmentProviderMutationVariables, options?: IdempotentRequestOptions): Promise<T.DisconnectPhoneEnrichmentProviderMutation> =>
      this.request('disconnectPhoneEnrichmentProvider', variables, options, { operationType: 'mutation' }),
    /**
     * Disconnect the organization's Slack workspace (the Integrations page's Slack Disconnect). Slack notifications stop. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    disconnectSlack: (options?: IdempotentRequestOptions): Promise<T.DisconnectSlackMutation> =>
      this.request('disconnectSlack', undefined, options, { operationType: 'mutation' }),
    /**
     * Disconnect the smrtPhone dialer for the organization; its calls stop syncing. Connecting again needs the customer's own login in the app (getIntegrationSetupUrls), so confirm with the user first. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    disconnectSmrtPhone: (options?: IdempotentRequestOptions): Promise<T.DisconnectSmrtPhoneMutation> =>
      this.request('disconnectSmrtPhone', undefined, options, { operationType: 'mutation' }),
    /**
     * In-app settings page URLs where a human connects an email account (Google/Microsoft) or sets up Twilio phone numbers for calling/SMS. Those setup flows are NOT available through this API — when a user asks for email or phone/Twilio integration, send them the matching link to complete it in the Goliath app.
     *
     * @remarks Requires the READ scope.
     */
    getIntegrationSetupUrls: (options?: RequestOptions): Promise<T.GetIntegrationSetupUrlsQuery> =>
      this.request('getIntegrationSetupUrls', undefined, options, { operationType: 'query' }),
    /**
     * Each phone line's own intake assignment (who gets the contacts its inbound traffic creates); null when the line follows the org default (getPhoneRouting's defaultInboundIntakePolicy).
     *
     * @remarks Requires the READ scope.
     */
    getLineIntakeAssignments: (options?: RequestOptions): Promise<T.GetLineIntakeAssignmentsQuery> =>
      this.request('getLineIntakeAssignments', undefined, options, { operationType: 'query' }),
    /**
     * Each Facebook Page's own intake assignment (who gets the contacts its Lead Ads create), through the key owner's own Facebook sign-in as listIntegrations reads the Pages; null for a Page nobody has configured. Only the Pages that sign-in reaches: [] when the key owner has not connected Facebook, which does not mean no Page is routed (the admin who connected it sees them). Admins only.
     *
     * @remarks Requires the ADMIN scope.
     */
    getMetaPageIntakeAssignments: (options?: RequestOptions): Promise<T.GetMetaPageIntakeAssignmentsQuery> =>
      this.request('getMetaPageIntakeAssignments', undefined, options, { operationType: 'query' }),
    /**
     * The key owner's own permissions — CHECK THIS BEFORE OFFERING OR ATTEMPTING A GATED ACTION, or saying why one is unavailable. Returns the capabilities they HOLD; one missing from the list is one they do NOT have. Seven are opt-IN, off unless a team admin granted them: VIEW_ALL_CONTACTS (without it the user sees only contacts assigned to them or their teams, the usual real answer to "why can't I see this contact"), VIEW_ALL_DEALS, VIEW_ALL_PHONES (call and text FROM any team number), CONTRACTS_VIEW and CONTRACTS_MANAGE (where a contract surface enforces them), VIEW_ORGANIZATION_SETTINGS (the organization's settings pages) and CAN_MANAGE_SPENDING (seats, numbers, the plan, invites). Eleven are opt-OUT, on unless a team admin revoked them: CAN_SKIPTRACE, CAN_EXPORT, CAN_WORKFLOW, and VIEW_TEAM_DIRECTORY (knowing anyone else is in the organization — without it no teammate names are shown, the real answer to "why is this note signed Team member"), and the app sections CAN_USE_AUTOMATIONS (workflow operations too), CAN_USE_FILES, CAN_USE_MARKETPLACE, CAN_USE_API_KEYS, CAN_USE_COMPUTER (where computer use is on), VIEW_TEAM_CALENDARS (teammates' calendars), and VIEW_TEAM_CALLS_TEXTS (reading teammates' calls and texts; email only from mailboxes their owner shares). Roles are only Admin (holds them all) and Member (their own set). An EMPTY list means none held; a NULL/absent list means the lookup failed and you know nothing — never read either as the other, nor tell a user they lack a permission on a failed read. When one is missing, say so plainly and name the remedy (a team admin can turn it on) rather than attempting it and relaying the refusal, or guessing the record does not exist. Never promise the app will refuse an act their role does not allow: say what it does and let the approval card or the operation's own answer speak to permission.
     *
     * @remarks Requires the READ scope.
     */
    getMyCapabilities: (options?: RequestOptions): Promise<T.GetMyCapabilitiesQuery> =>
      this.request('getMyCapabilities', undefined, options, { operationType: 'query' }),
    /**
     * Fetch the key owner's own profile — id, name, email, phone number (personal, via updateMyProfile; lines: listCommunicationChannels), profile picture URL — plus WHO THEY ARE IN THE ORGANIZATION and WHICH CLOCK THEY READ ON. organizationRole is their role (ADMIN | MEMBER): every ADMIN-scoped operation requires the key owner to be an ADMIN, so CHECK THIS BEFORE attempting one and, when it is not ADMIN, say that a team admin has to do it instead of relaying a refusal. organizationMembershipStatus is ACTIVE or SUSPENDED. organization carries the org's id, name and its own timezone (null = never set, NOT UTC). timezone is the zone the key owner CHOSE (null = never chosen, again not UTC); resolvedTimezone is the zone their times are ACTUALLY rendered on after the fallbacks (their availability schedule, then the organization's) — use resolvedTimezone whenever you state or interpret a time for them, and never assume UTC from a null. Permissions are a separate read: getMyCapabilities. Read it before updateMyProfile.
     *
     * @remarks Requires the READ scope.
     */
    getMyProfile: (options?: RequestOptions): Promise<T.GetMyProfileQuery> =>
      this.request('getMyProfile', undefined, options, { operationType: 'query' }),
    /**
     * The organization's markets: `regions` and drawn `polygons`; null until set.
     *
     * @remarks Requires the READ scope.
     */
    getOrganizationAreasOfOperation: (options?: RequestOptions): Promise<T.GetOrganizationAreasOfOperationQuery> =>
      this.request('getOrganizationAreasOfOperation', undefined, options, { operationType: 'query' }),
    /**
     * Your organization's profile and org-wide settings in one read: name, booking-link `slug`, `websiteUrl`, `timezone` (null = never set, not UTC), `alwaysExcludeDncTexts` (texts skip National DNC numbers), `aiCoOwnedLineHeadStartSeconds`, `textReplyLinePolicy` and `callLinePolicy` (which line a text or a manual dial defaults to), `inboxDefaultView`, `suggestionAudience`, `meetingNotetakerEnabled`, `outboundPause` (null = sending is on; else when and by whom everything was paused), `leadRouting.assigneeUserIds` (who gets new skip-traced leads; empty = nobody).
     *
     * @remarks Requires the READ scope.
     */
    getOrganizationSettings: (options?: RequestOptions): Promise<T.GetOrganizationSettingsQuery> =>
      this.request('getOrganizationSettings', undefined, options, { operationType: 'query' }),
    /**
     * One EVENT workflow's intake assignment (who owns a contact its find/create step creates); assignmentPolicy null when it has none, workflowGroup null when the id is not one of the org's workflows.
     *
     * @remarks Requires the READ scope.
     */
    getWorkflowIntakeAssignment: (variables: T.GetWorkflowIntakeAssignmentQueryVariables, options?: RequestOptions): Promise<T.GetWorkflowIntakeAssignmentQuery> =>
      this.request('getWorkflowIntakeAssignment', variables, options, { operationType: 'query' }),
    /**
     * The letters on contacts you can see (Automations → Letters), newest first: `totalCount`, then a page (`limit` default 50, `offset`) of contactName, campaignLabel, workflowName, mode, status (QUEUED, SUBMITTED, MAILED, IN_TRANSIT, DELIVERED, RETURNED, CANCELED, FAILED…), requestedAt, mailedAt, deliveredAt. Narrow with `statuses`, `modes` (LIVE; a TEST account mails and bills nothing) or `search` (a contact or workflow name). The read for "did my letters go out", "how did the last mailer do" and "did anyone answer the mail": totalCount 0 with no narrowing means no letter on a contact you can see was ever mailed (an account setup's test letter is not listed), so say that plainly and never guess. Answers show as the contact's own text, call or email afterwards, and QR scans as the `physicalMail` contact filter.
     *
     * @remarks Requires the READ scope.
     */
    listDirectMailLetters: (variables?: T.ListDirectMailLettersQueryVariables, options?: RequestOptions): Promise<T.ListDirectMailLettersQuery> =>
      this.request('listDirectMailLetters', variables, options, { operationType: 'query' }),
    /**
     * Every integration on the app's Integrations page and whether it is CONNECTED, in one read: currentUser.connectedEmailIntegrations (the key owner's own Google/Microsoft mailboxes; email is per person, so a teammate's mailbox is not here), oauthQuery.slackIntegrationStatus, Facebook Lead Ads through the key owner's own Facebook account (oauthQuery.listFacebookPages: Lead Ads is CONNECTED only when a Page has connected: true, the way the card reads it; facebookAccountConnected is just the account sign-in, and a null page list means Facebook did not answer), organizationQuery.getOrganization callTools / smrtPhone / enzo / readyMode (the dialers; a connected Enzo or ReadyMode lists its campaigns), directMailConnectionQuery.list (Lob, PostGrid, OLC: state ACTIVE | PENDING_VERIFICATION | DISCONNECTED, authHealth; rows outlive a disconnect, so an empty list means no account was ever connected), and phoneEnrichmentQuery.providers (phone enrichment such as Trestle: connectionStatus ACTIVE | NOT_CONNECTED | REVOKED | UNVERIFIED). Zapier, incoming webhooks and API keys are not listed. To connect anything, send the user the link from getIntegrationSetupUrls: connecting needs their own login. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     */
    listIntegrations: (options?: RequestOptions): Promise<T.ListIntegrationsQuery> =>
      this.request('listIntegrations', undefined, options, { operationType: 'query' }),
    /**
     * Rename the organization. The new name is carried into the AI employees' instructions, the voice agents and the onboarding drip. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameOrganization: (variables: T.RenameOrganizationMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameOrganizationMutation> =>
      this.request('renameOrganization', variables, options, { operationType: 'mutation' }),
    /**
     * Replace who gets the contacts an owner's inbound traffic creates: assigneeUserIds (in order; 2+ rotate), participants, teams, tags, AI employees attached (agentAssigneeIds) and workflows fired (workflowGroupIds). owner is { kind, id }: ORG (the org id, the default), LINE (a phone line), META_PAGE (a Page id) or WORKFLOW (an EVENT workflow group). Send the whole policy (read it first: getPhoneRouting, getLineIntakeAssignments, getMetaPageIntakeAssignments, getWorkflowIntakeAssignment). A WORKFLOW owner takes no AI employees or workflows: send both []. Admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setIntakeAssignment: (variables: T.SetIntakeAssignmentMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetIntakeAssignmentMutation> =>
      this.request('setIntakeAssignment', variables, options, { operationType: 'mutation' }),
    /**
     * Set the key owner's own time zone (an IANA id such as "America/Chicago"); null or omitted CLEARS it, so their times fall back to the organization's zone (`resolvedTimezone` says which zone applies now).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setMyTimezone: (variables?: T.SetMyTimezoneMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetMyTimezoneMutation> =>
      this.request('setMyTimezone', variables, options, { operationType: 'mutation' }),
    /**
     * How long, in seconds (0 to 3600), a person sharing a line with an AI employee gets to answer a new text before the AI replies. Null clears it (no head start). Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationAiLineHeadStart: (variables?: T.SetOrganizationAiLineHeadStartMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationAiLineHeadStartMutation> =>
      this.request('setOrganizationAiLineHeadStart', variables, options, { operationType: 'mutation' }),
    /**
     * Which line a manual dial to a contact defaults to: ASK_BEFORE_DIALING (ask when the contact last called on another line), USER_PRIMARY_LINE (the caller's own line) or LAST_CALL_LINE (the contact's last line, which widens who may dial from a line). Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationCallLinePolicy: (variables: T.SetOrganizationCallLinePolicyMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationCallLinePolicyMutation> =>
      this.request('setOrganizationCallLinePolicy', variables, options, { operationType: 'mutation' }),
    /**
     * What the inbox shows before a person chooses: INDIVIDUAL (their own lines) or TEAM (every line, for members who may view all phones; it grants no one that permission). Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationInboxDefaultView: (variables: T.SetOrganizationInboxDefaultViewMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationInboxDefaultViewMutation> =>
      this.request('setOrganizationInboxDefaultView', variables, options, { operationType: 'mutation' }),
    /**
     * Who gets the new leads a property-signal skip trace creates: active members' user ids (listTeammates). One person gets every lead, two or more split them evenly, an empty list sends them to nobody. Replaces what was set; setup no longer changes it after this. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationLeadRouting: (variables: T.SetOrganizationLeadRoutingMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationLeadRoutingMutation> =>
      this.request('setOrganizationLeadRouting', variables, options, { operationType: 'mutation' }),
    /**
     * "Pause everything": `paused: true` stops every automated outbound message (workflow texts and emails, AI employee texts, emails and calls, drips, mail) until it is turned off; queued work waits and nothing is cancelled. A person's own sends still go out. `paused: false` resumes. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationOutboundPause: (variables: T.SetOrganizationOutboundPauseMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationOutboundPauseMutation> =>
      this.request('setOrganizationOutboundPause', variables, options, { operationType: 'mutation' }),
    /**
     * Set the organization's booking-link slug: lowercase letters, numbers and hyphens, not starting or ending with a hyphen, at most 100 characters. A taken or malformed slug is refused; the old slug keeps resolving as an alias. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationSlug: (variables: T.SetOrganizationSlugMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationSlugMutation> =>
      this.request('setOrganizationSlug', variables, options, { operationType: 'mutation' }),
    /**
     * Turn "Always skip National DNC numbers when texting" on or off. On, every workflow text step and AI employee text skips numbers on the National Do Not Call registry, whatever the step says. Calls and exports are not affected. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationTextDncSkip: (variables: T.SetOrganizationTextDncSkipMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationTextDncSkipMutation> =>
      this.request('setOrganizationTextDncSkip', variables, options, { operationType: 'mutation' }),
    /**
     * Which line a contact's text composer opens on: USER_PRIMARY_LINE (the sender's own line) or LAST_THREAD_LINE (the line the contact last talked to, which widens who may text from a line). Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationTextReplyLinePolicy: (variables: T.SetOrganizationTextReplyLinePolicyMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationTextReplyLinePolicyMutation> =>
      this.request('setOrganizationTextReplyLinePolicy', variables, options, { operationType: 'mutation' }),
    /**
     * Set the organization's own clock: an IANA zone the product schedules in ("America/Chicago"; EST, CST, MST, AZ, PST and HST are accepted and normalized). Null clears it. New schedules start from it; stored ones are not rewritten. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrganizationTimezone: (variables?: T.SetOrganizationTimezoneMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrganizationTimezoneMutation> =>
      this.request('setOrganizationTimezone', variables, options, { operationType: 'mutation' }),
    /**
     * Set who contact suggestion cards go to: WHOLE_TEAM or POINT_PERSON. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setSuggestionAudience: (variables: T.SetSuggestionAudienceMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetSuggestionAudienceMutation> =>
      this.request('setSuggestionAudience', variables, options, { operationType: 'mutation' }),
    /**
     * Update the key owner's own profile. All three of firstName, lastName, and phoneNumber are required together (send the current values for the ones you're not changing — read them with getMyProfile); an EMPTY phoneNumber clears the number. Two more fields are OPTIONAL and PARTIAL: profilePictureUrl (an https URL to the new picture) and howDidYouHearAboutUs (free text) — omit either and the stored value is left untouched, send it to set it. The phone number is normalized and must be unique across users; email is not editable here (parity with the app). Returns the updated profile including profilePictureUrl, so quote what came back rather than assuming the picture took.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateMyProfile: (variables: T.UpdateMyProfileMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateMyProfileMutation> =>
      this.request('updateMyProfile', variables, options, { operationType: 'mutation' }),
    /**
     * Replace the organization's markets: `{version: 1, regions, polygons, updatedAt}`, a region `{kind: "county"|"city"|"zip", fips|cityId|zip, label}` (searchCounties/searchCities). Send back all you keep of getOrganizationAreasOfOperation, polygons too. An added market can buy phone numbers once the number plan buys: confirm first. Admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateOrganizationAreasOfOperation: (variables: T.UpdateOrganizationAreasOfOperationMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateOrganizationAreasOfOperationMutation> =>
      this.request('updateOrganizationAreasOfOperation', variables, options, { operationType: 'mutation' }),
  }

  readonly appointments = {
    /**
     * Live conflict check for a proposed slot: run it BEFORE createAppointment, and before moving a time with updateAppointment. Pass userIds, startDate, endDate (end after start). WHOSE CALENDARS: everyone in the appointment's userIds (teammates from listTeammates; a partner-org participant listAppointments shows on a shared appointment is accepted too) PLUS the key owner (getMyProfile): they organize, and the provider event lands on THEIR calendar whenever they are in userIds or userIds names zero or two-plus teammates, so a check without them misses the organizer's own conflicts. The one exception: userIds naming exactly ONE teammate and not the key owner puts the event on that teammate's calendar, so check that teammate alone. That exception is for CREATE only: on an updateAppointment reschedule ALWAYS include the key owner (update-time sync runs as them; a missing event created with createCalendarEvent: true lands on their calendar). When rescheduling, pass the RESULTING set: the appointment's FULL existing participant list (listAppointments) minus anyone you are removing, plus anyone you are adding, never only the additions; apply the organizer rule, and set excludeAppointmentId to the appointment being moved so it does not collide with itself. Known gap when the new window overlaps the old one and the key owner organizes without being a participant: the appointment's own Google/Microsoft mirror can show as a GOOGLE/MICROSOFT conflict on the key owner at the OLD time. Treat that row as AMBIGUOUS, never as harmless: busy ranges are merged, so a real event may hide behind the mirror; say so and have the user confirm against their calendar before booking over it. userIds are de-duplicated server-side and capped at 100 distinct participants. It reads Goliath appointments (source LOCAL) AND each participant's CONNECTED Google/Microsoft calendar live (GOOGLE/MICROSOFT), which listAppointments cannot. Returns available plus every overlapping conflicts row: start, end, source, and for a Goliath row its appointmentId and title; an external title is null unless the key owner may read that calendar (null = 'busy'). available: true means NOTHING WAS FOUND, never that the time is proven free: an unconnected calendar cannot be checked, and a provider outage degrades SILENTLY to no external conflicts, with no flag. Report 'no conflicts found on the calendars Goliath can see', name who was checked, and never promise the slot is free. A conflict is information, not a refusal: double-booking is allowed, so show it and let the user decide.
     *
     * @remarks Requires the READ scope.
     */
    checkAvailability: (variables: T.CheckAvailabilityQueryVariables, options?: RequestOptions): Promise<T.CheckAvailabilityQuery> =>
      this.request('checkAvailability', variables, options, { operationType: 'query' }),
    /**
     * Create an appointment: title, timezone, startDate, endDate; optional location, description, contactIds (accessible to the key owner), participant userIds (listTeammates), appointmentReminderWorkflowGroupId (listAppointmentReminders; null = no texts to contacts, but participants' 15-minute alert still follows their notification settings; this API applies no org default, so to give it the default pass the isGlobal one's id). By default it is ALSO created on a connected Google/Microsoft calendar, which is what invites the participants and linked contacts as guests: the key owner's, EXCEPT when userIds names exactly one teammate and not the key owner, then that teammate's, as organizer. createCalendarEvent: false keeps it inside Goliath. ALWAYS read calendarSync before telling anyone it is booked: SYNCED = the event exists and guests were invited, the only state where an invite went out (else say it was recorded, not sent); NOT_REQUESTED = Goliath-only; SKIPPED_NO_ACCESS = no connected calendar could be written; SKIPPED_WRITE_BLOCKED = a provider was reachable but deliberately not written; FAILED = the provider errored and the calendar may be stale. Confirm first: title, day, time, zone, participants, contacts and, with a calendar event, whose calendar (it invites them). Double-booking is allowed and nothing here warns, so run checkAvailability FIRST over the same window with every userId plus the key owner (getMyProfile; unless userIds is exactly one teammate without the key owner: then that teammate, the organizer, alone) and show its conflicts. listAppointments is NOT a conflict check: it sees ONLY Goliath appointments. A connected calendar's event lands there only when it already maps to a Goliath appointment, is an out-of-office blocker, or has an attendee whose email matches a CRM contact; everything else (a busy event whose attendees are not contacts, a free/transparent event, any calendar never connected) is never ingested and is invisible here, and a MEMBER key sees only its own rows. So a clear listAppointments window means the GOLIATH calendar looks clear, never that the time is free; even after a clean checkAvailability, say no conflicts were found rather than that the slot is free.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createAppointment: (variables: T.CreateAppointmentMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateAppointmentMutation> =>
      this.request('createAppointment', variables, options, { operationType: 'mutation' }),
    /**
     * A reminder TEXTS REAL CONTACTS automatically. Before calling, show the user every step's exact message and timing and wait for them to confirm that copy; never invent or reword it and send it unseen. Messages may use {{merge fields}} (the APPOINTMENT keys under MERGE FIELDS in updateWorkflowGraph's description); a step with a field an appointment cannot fill is NOT sent for it, so keep to fields every appointment has. Create a reminder: one SMS to the appointment's linked contacts per step, each sent amountBefore + unitBefore (MINUTES | HOURS | DAYS; amountBefore > 0) before its start, e.g. steps: [{message, amountBefore: 30, unitBefore: MINUTES}] for "30 minutes before". isGlobal: true makes it the org default, replacing any prior one. The org DEFAULT reminder ("Run for every appointment") is attached automatically to booking-page and AI-employee bookings and preselected in the app's appointment form; NOT to appointments created through this API (pass its id as appointmentReminderWorkflowGroupId on createAppointment) nor to existing ones (updateAppointment attaches it). With none flagged and exactly ONE reminder, that one is the default anyway. So the org's FIRST reminder texts new bookings even without isGlobal; any other without it is a preset that sends for nothing until attached. listAppointmentReminders first: when one with the same timing exists, offer to make it the default (setDefaultAppointmentReminder) or edit it rather than add a duplicate.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createAppointmentReminder: (variables: T.CreateAppointmentReminderMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateAppointmentReminderMutation> =>
      this.request('createAppointmentReminder', variables, options, { operationType: 'mutation' }),
    /**
     * Delete an appointment by id (from listAppointments). Also removes the synced calendar event, if any. The appointment must belong to your organization.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteAppointment: (variables: T.DeleteAppointmentMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteAppointmentMutation> =>
      this.request('deleteAppointment', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a reminder by appointmentReminderId. Its scheduled texts stop and it leaves the list and the appointment form; appointments carrying it do not block the delete, their upcoming texts just stop. If it was the default the org has none, unless exactly one reminder remains, which then is. Refused only when something else names its workflow: then pass getDeletionImpact's dependencyResolution (targetKind WORKFLOW_GROUP, targetId = this id). Confirm with the user first: it stops texts their contacts expect.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteAppointmentReminder: (variables: T.DeleteAppointmentReminderMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteAppointmentReminderMutation> =>
      this.request('deleteAppointmentReminder', variables, options, { operationType: 'mutation' }),
    /**
     * The key owner's saved availability schedule: timezone, weeklyHours, dateOverrides; null if never saved: booking then uses Mon-Fri 9:00-17:00 in a fallback zone (America/New_York, or a booking form's creator's), so start a change from those hours and confirm the zone with them. Read it before setMyAvailabilitySchedule. "weeklyHours" and "dateOverrides" are raw JSON with a FIXED shape, and this text is their only documentation. "weeklyHours": one day rule per bookable weekday, { "day": 0-6 with Sunday = 0 through Saturday = 6, "intervals": [ { "start": "HH:MM", "end": "HH:MM" } ] }; a weekday with no entry is not bookable. "dateOverrides" (optional): exceptions that REPLACE that day's weekly hours, a single date { "date": "YYYY-MM-DD", "intervals": [...] } or a span { "startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD", "intervals": [...] }; either may add "repeat": "monthly" (same day-of-month) or "repeat": "yearly" (same month/day); omit "repeat" for a one-off. "intervals": [] means UNAVAILABLE for that date or span (PTO, holidays, "block me off"). "reason": "away" is set by Away until; keep it as is. The write REJECTS the whole save (nothing stored) when: "weeklyHours" is empty (block a whole week with a "dateOverrides" span instead); a time is not strict 24-hour "HH:MM" ("9:00" and "5pm" are invalid); an interval's "end" is not after its "start"; intervals in one day or override overlap (touching, 09:00-12:00 then 12:00-17:00, is fine); a date is not a real calendar date; a span's "startDate" equals its "endDate" (write a single "date"); or a one-off span's "endDate" is an earlier calendar date than its "startDate". A one-off span may cross a month or year end with the dates in full ("2026-12-20" to "2027-01-02") — do NOT add "repeat" to make a one-time absence span the year end, that makes it recur every year. Only a RECURRING span may have an "endDate" that reads earlier than its "startDate" ("12-29" to "01-02" every year), which is how it wraps. Example of a complete valid payload: {"timezone":"America/Chicago","weeklyHours":[{"day":1,"intervals":[{"start":"09:00","end":"12:00"},{"start":"13:00","end":"17:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"17:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"15:00"}]}],"dateOverrides":[{"date":"2026-12-24","intervals":[{"start":"09:00","end":"12:00"}]},{"startDate":"2026-11-23","endDate":"2026-11-27","intervals":[],"repeat":"yearly"}]}
     *
     * @remarks Requires the READ scope.
     */
    getMyAvailabilitySchedule: (options?: RequestOptions): Promise<T.GetMyAvailabilityScheduleQuery> =>
      this.request('getMyAvailabilitySchedule', undefined, options, { operationType: 'query' }),
    /**
     * The organization's appointment reminders: each with its `steps` (one SMS each, its message and amountBefore + unitBefore lead time, longest lead first) and isGlobal (true on the flagged default). The org DEFAULT reminder ("Run for every appointment") is attached automatically to booking-page and AI-employee bookings and preselected in the app's appointment form; NOT to appointments created through this API (pass its id as appointmentReminderWorkflowGroupId on createAppointment) nor to existing ones (updateAppointment attaches it). With none flagged and exactly ONE reminder, that one is the default anyway. Attach one by passing its id as appointmentReminderWorkflowGroupId to createAppointment/updateAppointment (the responses echo it under that name).
     *
     * @remarks Requires the READ scope.
     */
    listAppointmentReminders: (options?: RequestOptions): Promise<T.ListAppointmentRemindersQuery> =>
      this.request('listAppointmentReminders', undefined, options, { operationType: 'query' }),
    /**
     * List appointments: org-wide for a team-admin key, the key owner's own otherwise (MEMBER keys always only their own, whatever the filters). Optional participants (listTeammates userIds, same-org), startDate/endDate, completed, searchTerm. Each row has times, location, linked contacts and participants. PAGING: this operation IS cursor-paginated, so "show me the rest" is answerable here. When canFetchNext is true, re-call with the SAME filters and cursor set to the LAST row's id to get the rows after it; repeat until canFetchNext is false. Forward only — there is no backwards page, so to revisit earlier rows restart from the top. Keep every filter identical between pages; changing one restarts the walk. total is the unpaged match count for the filters, so nothing is silently truncated. A LIST, not a conflict check: it sees only what Goliath recorded as an appointment; checkAvailability says whether a slot is actually free.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listAppointments: (variables?: T.ListAppointmentsQueryVariables, options?: RequestOptions): Promise<T.ListAppointmentsQuery> =>
      this.request('listAppointments', variables, options, { operationType: 'query' }),
    /**
     * Turn "Run for every appointment" on or off for one reminder (appointmentReminderId), its messages and timing untouched. isGlobal: true makes it the org default and clears any previous one (an org has at most one); false clears it on this one. The org DEFAULT reminder ("Run for every appointment") is attached automatically to booking-page and AI-employee bookings and preselected in the app's appointment form; NOT to appointments created through this API (pass its id as appointmentReminderWorkflowGroupId on createAppointment) nor to existing ones (updateAppointment attaches it). With none flagged and exactly ONE reminder, that one is the default anyway. Confirm with the user before switching it on: from then on every booking texts its contacts this reminder's copy.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setDefaultAppointmentReminder: (variables: T.SetDefaultAppointmentReminderMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetDefaultAppointmentReminderMutation> =>
      this.request('setDefaultAppointmentReminder', variables, options, { operationType: 'mutation' }),
    /**
     * Create or replace the key owner's availability schedule, a FULL replacement: read getMyAvailabilitySchedule and send back a modified copy, every override to keep included. Requires timezone (an IANA zone such as America/Chicago, the zone every time is read in) and weeklyHours; dateOverrides optional. It drives the open slots their booking pages offer. "weeklyHours" and "dateOverrides" are raw JSON with a FIXED shape, and this text is their only documentation. "weeklyHours": one day rule per bookable weekday, { "day": 0-6 with Sunday = 0 through Saturday = 6, "intervals": [ { "start": "HH:MM", "end": "HH:MM" } ] }; a weekday with no entry is not bookable. "dateOverrides" (optional): exceptions that REPLACE that day's weekly hours, a single date { "date": "YYYY-MM-DD", "intervals": [...] } or a span { "startDate": "YYYY-MM-DD", "endDate": "YYYY-MM-DD", "intervals": [...] }; either may add "repeat": "monthly" (same day-of-month) or "repeat": "yearly" (same month/day); omit "repeat" for a one-off. "intervals": [] means UNAVAILABLE for that date or span (PTO, holidays, "block me off"). "reason": "away" is set by Away until; keep it as is. The write REJECTS the whole save (nothing stored) when: "weeklyHours" is empty (block a whole week with a "dateOverrides" span instead); a time is not strict 24-hour "HH:MM" ("9:00" and "5pm" are invalid); an interval's "end" is not after its "start"; intervals in one day or override overlap (touching, 09:00-12:00 then 12:00-17:00, is fine); a date is not a real calendar date; a span's "startDate" equals its "endDate" (write a single "date"); or a one-off span's "endDate" is an earlier calendar date than its "startDate". A one-off span may cross a month or year end with the dates in full ("2026-12-20" to "2027-01-02") — do NOT add "repeat" to make a one-time absence span the year end, that makes it recur every year. Only a RECURRING span may have an "endDate" that reads earlier than its "startDate" ("12-29" to "01-02" every year), which is how it wraps. Example of a complete valid payload: {"timezone":"America/Chicago","weeklyHours":[{"day":1,"intervals":[{"start":"09:00","end":"12:00"},{"start":"13:00","end":"17:00"}]},{"day":3,"intervals":[{"start":"09:00","end":"17:00"}]},{"day":5,"intervals":[{"start":"09:00","end":"15:00"}]}],"dateOverrides":[{"date":"2026-12-24","intervals":[{"start":"09:00","end":"12:00"}]},{"startDate":"2026-11-23","endDate":"2026-11-27","intervals":[],"repeat":"yearly"}]}
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setMyAvailabilitySchedule: (variables: T.SetMyAvailabilityScheduleMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetMyAvailabilityScheduleMutation> =>
      this.request('setMyAvailabilitySchedule', variables, options, { operationType: 'mutation' }),
    /**
     * Update an appointment by id (listAppointments): title, times, location, description, outcome; addUserIds/removeUserIds, addContactIds/removeContactIds; switch or clear the reminder with appointmentReminderWorkflowGroupId (omit = unchanged, null = clear). Only passed fields change. It must belong to your organization. Before moving startDate/endDate, run checkAvailability over the NEW window with the RESULTING participants (the FULL existing participants from listAppointments, minus any removeUserIds plus any addUserIds, never just the additions) plus the key owner (getMyProfile), ALWAYS on an update, with no single-teammate exception here: update-time sync runs as the key owner, and a missing event created with createCalendarEvent: true lands on THEIR calendar. Set excludeAppointmentId to this appointment and show conflicts. If the windows overlap and the key owner organizes without being a participant, the appointment's own mirror can appear as a conflict at the OLD time: treat it as AMBIGUOUS (merged busy ranges can hide a real event), tell the user, and let them confirm against their calendar. The edit is pushed to the external event when there is one. With none, createCalendarEvent: true creates it (how an appointment whose sync never landed reaches a calendar), on the key owner's calendar with them as organizer; it is opt-in, since a missing event may mean it was deliberately kept in Goliath, so only ask for it when that is the right host. Read calendarSync as on createAppointment: only SYNCED means the calendar matches; a reschedule that comes back SKIPPED_NO_ACCESS or FAILED left guests' calendars at the OLD time: say so instead of reporting it moved.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateAppointment: (variables: T.UpdateAppointmentMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateAppointmentMutation> =>
      this.request('updateAppointment', variables, options, { operationType: 'mutation' }),
    /**
     * A reminder TEXTS REAL CONTACTS automatically. Before calling, show the user every step's exact message and timing and wait for them to confirm that copy; never invent or reword it and send it unseen. Messages may use {{merge fields}} (the APPOINTMENT keys under MERGE FIELDS in updateWorkflowGraph's description); a step with a field an appointment cannot fill is NOT sent for it, so keep to fields every appointment has. Edit a reminder by appointmentReminderId (listAppointmentReminders). steps REPLACES the whole set: send every step to keep, with its message and timing. A step left out stops sending (booked appointments included), a kept step's scheduled texts take the edit, and a NEW step reaches only appointments booked after the edit. isGlobal: omit to leave the default untouched, true to make this the default, false to stop it being one. Only the default: setDefaultAppointmentReminder.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateAppointmentReminder: (variables: T.UpdateAppointmentReminderMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateAppointmentReminderMutation> =>
      this.request('updateAppointmentReminder', variables, options, { operationType: 'mutation' }),
  }

  readonly askGoliath = {
    /**
     * Answer the questions the latest reply ended on (a question or an approval) as the key owner's click would: `answers` maps each question id to a label, a list of labels, free text, or {"other": "text"}. Returns the turn (getAgentTurn). Waits up to `waitSeconds` (0-25, default 25) for the reply; poll getAgentTurn after. `confirmSends`: an approval card for a text or email carries its `draft`; trust decides if it asks.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    answerAgentQuestions: (variables: T.AnswerAgentQuestionsMutationVariables, options?: IdempotentRequestOptions): Promise<T.AnswerAgentQuestionsMutation> =>
      this.request('answerAgentQuestions', variables, options, { operationType: 'mutation' }),
    /**
     * Stop the reply to one message (`conversationId`, `turnId`); changes it already made stay made.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    cancelAgentTurn: (variables: T.CancelAgentTurnMutationVariables, options?: IdempotentRequestOptions): Promise<T.CancelAgentTurnMutation> =>
      this.request('cancelAgentTurn', variables, options, { operationType: 'mutation' }),
    /**
     * One message sent to Ask Goliath (`conversationId`, `turnId`): `status` RUNNING, WAITING_FOR_CALLER (answer `questions` with answerAgentQuestions), COMPLETED (a card only Goliath answers is `inAppCard`), FAILED (`error`) or CANCELLED, and the `reply` so far. `waitSeconds` (0-25) holds until the reply finishes. Ask Goliath acts as the key owner, as in the app. Needs a WRITE key.
     *
     * @remarks Requires the WRITE scope.
     */
    getAgentTurn: (variables: T.GetAgentTurnQueryVariables, options?: RequestOptions): Promise<T.GetAgentTurnQuery> =>
      this.request('getAgentTurn', variables, options, { operationType: 'query' }),
    /**
     * The key owner's own Ask Goliath chats, newest first, with `appName` (the key that last talked in it). Continue one with sendAgentMessage. Needs a WRITE key.
     *
     * @remarks Requires the WRITE scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listAgentConversations: (variables?: T.ListAgentConversationsQueryVariables, options?: RequestOptions): Promise<T.ListAgentConversationsQuery> =>
      this.request('listAgentConversations', variables, options, { operationType: 'query' }),
    /**
     * A voice assistant warming Ask Goliath up while the person is still speaking, before startAgentConversation with `spoken`. Opens no chat.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    prepareAgentConversation: (options?: IdempotentRequestOptions): Promise<T.PrepareAgentConversationMutation> =>
      this.request('prepareAgentConversation', undefined, options, { operationType: 'mutation' }),
    /**
     * Send a `message` in one of the key owner's chats (`conversationId`), as if they typed it. Returns the turn (getAgentTurn). Waits up to `waitSeconds` (0-25, default 25) for the reply; poll getAgentTurn after. `confirmSends`: an approval card for a text or email carries its `draft`; trust decides if it asks.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    sendAgentMessage: (variables: T.SendAgentMessageMutationVariables, options?: IdempotentRequestOptions): Promise<T.SendAgentMessageMutation> =>
      this.request('sendAgentMessage', variables, options, { operationType: 'mutation' }),
    /**
     * Start a new Ask Goliath chat as the key owner with its first `message`; it shows in their chat list as "via" this key's name. Returns the turn (getAgentTurn). Waits up to `waitSeconds` (0-25, default 25) for the reply; poll getAgentTurn after. `confirmSends`: an approval card for a text or email carries its `draft`; trust decides if it asks.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    startAgentConversation: (variables: T.StartAgentConversationMutationVariables, options?: IdempotentRequestOptions): Promise<T.StartAgentConversationMutation> =>
      this.request('startAgentConversation', variables, options, { operationType: 'mutation' }),
    /**
     * Send our team a BUG report, FEATURE_REQUEST or QUESTION as the key owner: a one-line `title`, the `message` (10+ characters) and optional `details`. It lands on our board (added to the organization's open card for the same problem, when there is one); keep the returned `ticket` name to refer to it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    submitFeedback: (variables: T.SubmitFeedbackMutationVariables, options?: IdempotentRequestOptions): Promise<T.SubmitFeedbackMutation> =>
      this.request('submitFeedback', variables, options, { operationType: 'mutation' }),
  }

  readonly automationMap = {
    /**
     * Your organization's Automations Map. When there is none, this read draws it from the organization's workflows and AI employees (no agent turn) and saves it; null when there is nothing to draw. `story` (a MapStory: journeys, steps, edges and each step's detail, as JSON), `refStates` (each workflow or AI employee a step stands for, with its state now: on, off or draft, and its setup as label/value `facts`), and `changedSince` (records saved after this version: the Map may be out of date until the Automations chat redraws it). `story` null means the current version cannot be read. `pageId` and `version` are what the version ops take.
     *
     * @remarks Requires the READ scope.
     */
    getAutomationMap: (options?: RequestOptions): Promise<T.GetAutomationMapQuery> =>
      this.request('getAutomationMap', undefined, options, { operationType: 'query' }),
    /**
     * One earlier version of the Map (`pageId`, `version`), with the `story` it was written with.
     *
     * @remarks Requires the READ scope.
     */
    getAutomationMapVersion: (variables: T.GetAutomationMapVersionQueryVariables, options?: RequestOptions): Promise<T.GetAutomationMapVersionQuery> =>
      this.request('getAutomationMapVersion', variables, options, { operationType: 'query' }),
    /**
     * The Map's version history, newest first (`pageId` from getAutomationMap): each version's number, note, when, who, and `bySession` (Ask Goliath wrote it rather than a person).
     *
     * @remarks Requires the READ scope.
     */
    listAutomationMapVersions: (variables: T.ListAutomationMapVersionsQueryVariables, options?: RequestOptions): Promise<T.ListAutomationMapVersionsQuery> =>
      this.request('listAutomationMapVersions', variables, options, { operationType: 'query' }),
    /**
     * Put an earlier Map version back, as the Map's Versions menu does: it is copied forward as the new current version, so nothing is lost and the step can be undone the same way. Changes the drawing only, never a workflow or AI employee.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreAutomationMapVersion: (variables: T.RestoreAutomationMapVersionMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreAutomationMapVersionMutation> =>
      this.request('restoreAutomationMapVersion', variables, options, { operationType: 'mutation' }),
  }

  readonly billing = {
    /**
     * The check the app runs before a skip trace, export or email verification of `count` records. Read `state` and `reason` first: a BLOCKED org (payment needed) shows 0 whatever it holds. For those three, `unitsAvailable` is what the action can spend, unused plan allowance (none during a trial) PLUS wallet credits (bought or granted): what answers "how many skip traces are left". For other actions it is not credits (null, or seat slots for an invite). It checks the org, not the person: skip traces still need an admin. `willTriggerAutoRecharge.chargeCents` is a card charge: say so and get a yes first; when null, mention no card. Read-only.
     *
     * @remarks Requires the READ scope.
     */
    checkBillingAction: (variables: T.CheckBillingActionQueryVariables, options?: RequestOptions): Promise<T.CheckBillingActionQuery> =>
      this.request('checkBillingAction', variables, options, { operationType: 'query' }),
    /**
     * The monthly price of one extra seat, in cents, live from Stripe. Quote it, then hand over getSeatsPurchaseUrl.
     *
     * @remarks Requires the READ scope.
     */
    getAddOnPrices: (options?: RequestOptions): Promise<T.GetAddOnPricesQuery> =>
      this.request('getAddOnPrices', undefined, options, { operationType: 'query' }),
    /**
     * Why the AI employees stopped, and what AI use costs: burn over a trailing window (`windowDays` 1..90, default 30), `balanceCredits`, `outOfCredits`, `planAllowance`. THIS IS THE ONLY OPERATION THAT REPORTS THE AI PAYWALL. `outOfCredits: true` is a CONFIRMED paywall. `outOfCredits: false` is NOT proof the agents are running: the flag is deliberately narrower than the predicate that actually refuses work (AiAgentBillingGateService.isOutOfCredits), which omits its usage-history condition. TREAT `balanceCredits <= 0` AS THE STOP-CONDITION and `outOfCredits` as the confirmation. `lowOnCredits` warns (still working); give `lowCreditThresholdCredits`. `balanceCredits` can be NEGATIVE, normally. COST: `creditsConsumed` is window burn, never a bill. `planAllowance` is this period: `usedThisPeriod` of `includedCredits` is in the plan; past it, or in a trial (`lockedDuringTrial`), use draws `purchasedBalance` (bought or granted). 1 credit = 1 cent of AI cost. What used them: `aiCreditUsageBySource`; name causes only from it. To buy: getCreditsPurchaseUrl.
     *
     * @remarks Requires the READ scope.
     */
    getAiCreditUsage: (variables?: T.GetAiCreditUsageQueryVariables, options?: RequestOptions): Promise<T.GetAiCreditUsageQuery> =>
      this.request('getAiCreditUsage', variables, options, { operationType: 'query' }),
    /**
     * Read the organization's plan, subscription lifecycle, seat utilization, feature limits and credit balances. Read-only. LIFECYCLE: answer "when does our trial end" and "are we set to cancel" from the dates, never from `status` alone — `status: TRIALING` is paired with `trialEnds`, and `cancelAt` is the scheduled cancel-at-period-end (null when nothing is scheduled). A deferred downgrade is the `pendingPlanCode` / `pendingPlanIsAnnual` / `pendingPlanEffectiveAt` trio (null when none): until `pendingPlanEffectiveAt` the org is STILL on `planType`, so report the current plan and the change date. `isGrandfathered`: a legacy price, so `currentUnitAmountCents` (the core plan) can differ from the published one. SEATS: compare `extraSeats.seatsUsed` against `extraSeats.seatsCap` DIRECTLY, which is already TOTAL capacity; never add `extraSeatQuantity` (the seats paid extra for, already inside it). Open seats = it − `seatsUsed` − live non-permanent invites (listTeamInvites `isAlive`, not `isPermanent`), min 0. `featureLimits.seatsCap` is a DIFFERENT number: plan-included seats only. `extraSeats.unusedPaidSeats` null means UNKNOWN, never zero. CREDITS: `creditLedger.unitBalance` is only the PURCHASED balance, so 0 there is not "none left". For what is left read `planUsage`, one row per credit type (AI_CREDITS and SMS_CREDITS included): plan `planCap`, `usedThisPeriod`, `planRemaining`, `purchasedBalance`, and `available` (spendable now; quote it), `periodResetsAt`, `planCreditsLocked` (only purchased credits spend). Before a skip trace, export or verification: checkBillingAction. 1 SMS credit = 1 outbound text segment; inbound is free. AI burn, sources, paywall: getAiCreditUsage (READ).
     *
     * @remarks Requires the ADMIN scope.
     */
    getBillingSummary: (options?: RequestOptions): Promise<T.GetBillingSummaryQuery> =>
      this.request('getBillingSummary', undefined, options, { operationType: 'query' }),
    /**
     * Fixed credit packs for EVERY credit type. Quote `packs` (credit type, code, units, whole-pack price in cents); skip a pack whose `available` is false. AI Agent Credits: 1 credit = 1 cent of AI cost. Texting Credits: 1 credit = 1 outbound text segment; inbound texts are free. No credit pays for mail: the provider bills the org’s own account at rates Goliath cannot see; never quote a price or range. The agent cannot buy: hand over getCreditsPurchaseUrl.
     *
     * @remarks Requires the READ scope.
     */
    getCreditPrices: (options?: RequestOptions): Promise<T.GetCreditPricesQuery> =>
      this.request('getCreditPrices', undefined, options, { operationType: 'query' }),
    /**
     * The in-app Billing > Credits page URL where a human buys credits. The agent cannot buy: send this link when a balance is low or the AI paywall is hit.
     *
     * @remarks Requires the READ scope.
     */
    getCreditsPurchaseUrl: (options?: RequestOptions): Promise<T.GetCreditsPurchaseUrlQuery> =>
      this.request('getCreditsPurchaseUrl', undefined, options, { operationType: 'query' }),
    /**
     * What used the credits this billing period, per credit type: `series[].totalUnits` for AI_CREDITS, SMS_CREDITS (outbound text segments), CALLING_MINUTES, SKIPTRACE, EMAIL_VERIFICATION and EXPORT_PROPERTIES, the Billing page usage chart's own figures (each day's use, charges less that day's refunds, summed). Pass timeZone (getMyProfile.resolvedTimezone) so the days fall as the person's chart draws them; omitted, they are UTC days. A refund that lands a day after its charge is not netted, so a total can exceed getBillingSummary's `planUsage.usedThisPeriod`; quote this one as what used the credits, that one as what is left. Null before a first billing period. AI use is not split further (no per-employee figure). Read-only. Admin only: a Member is told a workspace admin sees it.
     *
     * @remarks Requires the ADMIN scope.
     */
    getCreditUsageByType: (variables?: T.GetCreditUsageByTypeQueryVariables, options?: RequestOptions): Promise<T.GetCreditUsageByTypeQuery> =>
      this.request('getCreditUsageByType', variables, options, { operationType: 'query' }),
    /**
     * The in-app Team & Phones page URL where a human registers and buys phone numbers. The agent cannot buy numbers.
     *
     * @remarks Requires the READ scope.
     */
    getPhoneNumbersPurchaseUrl: (options?: RequestOptions): Promise<T.GetPhoneNumbersPurchaseUrlQuery> =>
      this.request('getPhoneNumbersPurchaseUrl', undefined, options, { operationType: 'query' }),
    /**
     * Every plan on sale: monthly and annual (whole-year) price, and what each includes per month. Quote *Formatted; never divide *Cents. Current plan: getBillingSummary; plans change on Billing & Plans.
     *
     * @remarks Requires the READ scope.
     */
    getPlanCatalog: (options?: RequestOptions): Promise<T.GetPlanCatalogQuery> =>
      this.request('getPlanCatalog', undefined, options, { operationType: 'query' }),
    /**
     * The in-app Billing page URL where a human buys extra seats. The agent cannot buy. Decide "at cap" from getBillingSummary's `extraSeats.seatsUsed` vs `extraSeats.seatsCap` (total, purchased seats included), never the plan-only `featureLimits.seatsCap`. Price: getAddOnPrices.
     *
     * @remarks Requires the READ scope.
     */
    getSeatsPurchaseUrl: (options?: RequestOptions): Promise<T.GetSeatsPurchaseUrlQuery> =>
      this.request('getSeatsPurchaseUrl', undefined, options, { operationType: 'query' }),
  }

  readonly bulkTasks = {
    /**
     * Status of an async bulk task by the bulkTaskId an async op returned (addPropertiesToList and the like): status (CREATED = queued, PROCESSING = being applied, COMPLETED, FAILED = the change was NOT applied), progress (processedItemCount of estimatedItemCount) and a best-effort ETA (secondsRemaining; null = no estimate, not an error; status is authoritative). Null for an id not in your workspace. Poll every 3-5 seconds.
     *
     * @remarks Requires the READ scope.
     */
    getBulkTask: (variables: T.GetBulkTaskQueryVariables, options?: RequestOptions): Promise<T.GetBulkTaskQuery> =>
      this.request('getBulkTask', variables, options, { operationType: 'query' }),
  }

  readonly callLists = {
    /**
     * Add contacts to the end of a call list, so they are called after everyone already on it. Needs you to have built the list or be an admin. Contacts already on the list, including ones removed earlier (`alreadyOnListCount`), ones its own rules cannot call (`cannotCallCount`) and ones past the 10,000 cap (`truncatedCount`) are left off and counted. At most 10,000 ids per call. Refused on an ENDED list.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addCallListContacts: (variables: T.AddCallListContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddCallListContactsMutation> =>
      this.request('addCallListContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Build a call list from contact ids, dialed in the order given (duplicates collapse). Every contact must be one you can open, or the whole build is refused. Collect the ids with filterContacts, ANDing in the condition {id: "dnc", fieldId: "doNotContact", value: false} (an OR root goes under a new AND root beside it; leave it out only when the person asked to override do-not-contact), so the count on your yes card leaves them out; a result cut short hides some rows’ flags, so never say none are do-not-contact from one. Optional build rules, frozen onto the list: maxNumbersPerContact (default 3), includeRelatives (default false), overrideDnc and overrideLitigator (default false; turning either on dials people who asked not to be called or are a litigation risk, so ask the person first), reachedTagId (a contact tag applied to everyone the run reaches). visibilityScope is USER (only you, the default) or ORG (your whole team). Pass buildAttemptKey (any unique string) and resend it unchanged on a retry so a lost response never builds a second list. A list nobody in the org can dial from (no calling line) is refused. Contacts the list cannot call (no number, do-not-contact, litigator) are left off and counted in cannotCallCount; truncatedCount counts contacts past the 10,000 cap. Returns the new list with its dialPath.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createCallList: (variables: T.CreateCallListMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateCallListMutation> =>
      this.request('createCallList', variables, options, { operationType: 'mutation' }),
    /**
     * Build a call list from a saved CONTACT filter (`filterId` from listContactFilters): the contacts it matches for you right now, in the filter's order, up to 10,000. The list is a snapshot; it does not follow later changes to the filter. Before the yes, count it with countContacts on a new AND root holding the filter's own tree (the root getFilter returns) and {id: "dnc", fieldId: "doNotContact", value: false} (without that condition when the person asked to override do-not-contact), and say do-not-contact people are left off. Optional build rules, frozen onto the list: maxNumbersPerContact (default 3), includeRelatives (default false), overrideDnc and overrideLitigator (default false; turning either on dials people who asked not to be called or are a litigation risk, so ask the person first), reachedTagId (a contact tag applied to everyone the run reaches). visibilityScope is USER (only you, the default) or ORG (your whole team). Pass buildAttemptKey (any unique string) and resend it unchanged on a retry so a lost response never builds a second list. A list nobody in the org can dial from (no calling line) is refused. Contacts the list cannot call (no number, do-not-contact, litigator) are left off and counted in cannotCallCount; truncatedCount counts contacts past the 10,000 cap. Returns the new list with its dialPath.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createCallListFromContactFilter: (variables: T.CreateCallListFromContactFilterMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateCallListFromContactFilterMutation> =>
      this.request('createCallListFromContactFilter', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a call list: it disappears from Call lists for everyone. The calls already made stay on each contact's history. Cannot be undone in the app, so confirm with the person first; prefer endCallList to keep a finished list. Needs you to have built the list or be an admin.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteCallList: (variables: T.DeleteCallListMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteCallListMutation> =>
      this.request('deleteCallList', variables, options, { operationType: 'mutation' }),
    /**
     * Archive a call list: it moves to ENDED, stays readable with its outcomes, and can no longer be dialed or edited. Needs you to have built the list or be an admin. Refused with a CONFLICT while `lockedByUser` shows someone dialing it: end it once their run stops.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    endCallList: (variables: T.EndCallListMutationVariables, options?: IdempotentRequestOptions): Promise<T.EndCallListMutation> =>
      this.request('endCallList', variables, options, { operationType: 'mutation' }),
    /**
     * One call list with its progress, plus one page of its contacts in dial order: each slot's `position`, `status` (PENDING = still to call, IN_PROGRESS = being dialed, COMPLETED, SKIPPED with `skipReason`), the outcome (`disposition`), numbers tried and the contact. `limit` defaults to 50 (max 200); pass the returned `nextFromPosition` as `fromPosition` for the next page, and `statuses` to see only some slots. A list that is gone, or private to someone else, is refused with an error (NOT_FOUND or FORBIDDEN), not returned empty.
     *
     * @remarks Requires the READ scope.
     */
    getCallList: (variables: T.GetCallListQueryVariables, options?: RequestOptions): Promise<T.GetCallListQuery> =>
      this.request('getCallList', variables, options, { operationType: 'query' }),
    /**
     * The in-app link that opens a call list in the dialer, where a person presses Start: `dialPath` is a path inside the app (`/contacts?callListId=…`). Show it to the person as a button (open_url with that path). Calls are always placed by a person in the app, never through the API. `lockedByUser` says who is dialing it right now, if anyone; an ENDED list cannot be dialed again.
     *
     * @remarks Requires the READ scope.
     */
    getCallListDialLink: (variables: T.GetCallListDialLinkQueryVariables, options?: RequestOptions): Promise<T.GetCallListDialLinkQuery> =>
      this.request('getCallListDialLink', variables, options, { operationType: 'query' }),
    /**
     * The call lists you can open: your own and the ones shared with your team, newest first (at most 50). Narrow with `status` (ACTIVE, PAUSED, ENDED) and with `mine` / `orgVisible` (set either and the pair is exact). Each list has its progress (`counts`: total, pending, completed, skipped, dials placed and outcomes), its frozen build rules, who built it, who is dialing it right now (`lockedByUser`, null when free) and `dialPath`, the in-app path that opens it in the dialer.
     *
     * @remarks Requires the READ scope.
     */
    listCallLists: (variables?: T.ListCallListsQueryVariables, options?: RequestOptions): Promise<T.ListCallListsQuery> =>
      this.request('listCallLists', variables, options, { operationType: 'query' }),
    /**
     * Take contacts off a call list before they are called: their slots close as skipped by hand (`skipReason` USER), so the list keeps its record. A contact being dialed right now, already called, or up next for a rep working the list stays as it is and counts in `notRemovedCount`. A removed contact keeps its slot (and its place toward the 10,000 cap) and cannot be added back to the same list. Needs you to have built the list or be an admin. Refused on an ENDED list.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeCallListContacts: (variables: T.RemoveCallListContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveCallListContactsMutation> =>
      this.request('removeCallListContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a call list. Needs you to have built the list or be an admin.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameCallList: (variables: T.RenameCallListMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameCallListMutation> =>
      this.request('renameCallList', variables, options, { operationType: 'mutation' }),
  }

  readonly communications = {
    /**
     * Lift an organization-wide opt-out (suppressChannel's undo): the value can be texted, called or emailed again on that `medium`, on every contact carrying it. Only on the person's own word: an opt-out is the recipient's, and lifting it without their consent breaks the law the opt-out exists for. Idempotent; a value that is not suppressed is a no-op. Returns organizationId, normalizedValue, medium.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    clearChannelSuppression: (variables: T.ClearChannelSuppressionMutationVariables, options?: IdempotentRequestOptions): Promise<T.ClearChannelSuppressionMutation> =>
      this.request('clearChannelSuppression', variables, options, { operationType: 'mutation' }),
    /**
     * Take one contact off Do Not Contact, as the contact page's toggle does, so texts, calls, emails and workflows reach them again. Only when the contact asked to be contacted again. A value-level opt-out on one of their numbers or addresses stays until clearChannelSuppression lifts it. Returns the contact's id and doNotContact.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    clearContactDoNotContact: (variables: T.ClearContactDoNotContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.ClearContactDoNotContactMutation> =>
      this.request('clearContactDoNotContact', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a voicemail drop. It leaves the dialer at once and nothing restores it: the person records it again.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteVoicemailTemplate: (variables: T.DeleteVoicemailTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteVoicemailTemplateMutation> =>
      this.request('deleteVoicemailTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * The dialer's settings (Settings → Calls): auto-advance, the after-call actions in order, callCardFieldIds (contact custom fields shown on the call card) and callerIdTableColumnId; plus a person's voicemail drops (userId, default the key owner).
     *
     * @remarks Requires the READ scope.
     */
    getCallWorkspaceSettings: (variables?: T.GetCallWorkspaceSettingsQueryVariables, options?: RequestOptions): Promise<T.GetCallWorkspaceSettingsQuery> =>
      this.request('getCallWorkspaceSettings', variables, options, { operationType: 'query' }),
    /**
     * The full speaker-by-speaker transcript behind a meeting-summary note, as a PAGEABLE window of ordered { speaker, text } utterances. When the Goliath notetaker attends a meeting, the summary lands as an AI note on each meeting contact and the complete transcript is archived separately — this operation reads that archive. Pass the noteId of the meeting-summary note (from getContact notes[] or a NOTE entry in listContactActivities). Use it whenever the summary is not enough — extracting commitments, action items, exact quotes, pricing figures, or who-said-what. PAGE THE WHOLE MEETING before concluding: a full page (as many utterances as you asked for) means more remain — request again with offset advanced by the count you received until a short page arrives. Action items cluster near the END of a meeting, so an unpaged first window is exactly the wrong place to stop. Returns null (not an error) when the note is not a meeting-summary note, the note is hidden from the caller, or no archive exists; a null on a random note means "this note has no meeting transcript", not a failure. The meeting notetaker is feature-flag gated per org — where the flag is off this operation is refused, which also means no workspace has summary notes to point at it. Quote selectively rather than echoing whole pages back to the user.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 300.
     */
    getMeetingTranscript: (variables: T.GetMeetingTranscriptQueryVariables, options?: RequestOptions): Promise<T.GetMeetingTranscriptQuery> =>
      this.request('getMeetingTranscript', variables, options, { operationType: 'query' }),
    /**
     * Whether the organization's send consent attestation stands: an org admin's one-time statement that every contact the organization texts or emails through the developer API consented. Every operation that messages a contact (sendText, sendEmail, accepting a card that sends, a contract's emails to its signers) is refused (403 send_consent_not_attested) until `attested` is true; `attestedAt` and `attestedByUserId` say when and who. Set it with setSendConsentAttestation (ADMIN).
     *
     * @remarks Requires the READ scope.
     */
    getSendConsentAttestation: (options?: RequestOptions): Promise<T.GetSendConsentAttestationQuery> =>
      this.request('getSendConsentAttestation', undefined, options, { operationType: 'query' }),
    /**
     * How much can we text and email today? Per line, brand (team) and mailbox: used / cap / remaining today (text segments; null cap = no limit; a mailbox also meters recipients, and the tighter of its two binds), a line's last-7-day volume, and the sending queue. Read-only. Count only lines with canSendSms and not isBurned. textingReadiness is the org's texting registration: canText, and reason when not (NO_REGISTRATION = none filed; MANAGED_* = Goliath-managed registration in review or failed; BYO_* = their own Twilio account). Read it first for a registration question; never fill in or submit one for them.
     *
     * @remarks Requires the READ scope.
     */
    getSendingLimits: (options?: RequestOptions): Promise<T.GetSendingLimitsQuery> =>
      this.request('getSendingLimits', undefined, options, { operationType: 'query' }),
    /**
     * The organization's A2P 10DLC texting registration, STATUS ONLY: each brand (`status`, `statusLabel`, `useCaseLabel`) and its sending campaigns (`sendReady` true = approved and able to text; `rejectionReasons` when a carrier refused it). Read-only: registering, resubmitting or retrying happens in the Goliath app (Settings → Phone → Registration). For whether the org can text at all right now, listCommunicationChannels' textingReadiness.
     *
     * @remarks Requires the READ scope.
     */
    getTextingRegistrationStatus: (options?: RequestOptions): Promise<T.GetTextingRegistrationStatusQuery> =>
      this.request('getTextingRegistrationStatus', undefined, options, { operationType: 'query' }),
    /**
     * What can I send from? All the organization's phone lines (each with its user and canSendSms) and your mailboxes; your lines have user.id = currentUser.id. "My number" to text from or give a teammate is one of these, not getMyProfile.phoneNumber. canSendSms is line setup only: while organization.textingReadiness.canText is false nothing texts, so never say a line can text; say what its reason value says to do. myDisconnectedMailboxes lost connection (disconnectedAt): say disconnected, reconnect; never no mailbox.
     *
     * @remarks Requires the READ scope.
     */
    listCommunicationChannels: (options?: RequestOptions): Promise<T.ListCommunicationChannelsQuery> =>
      this.request('listCommunicationChannels', undefined, options, { operationType: 'query' }),
    /**
     * The organization's notetaker calls created after `after`, in any status, oldest first: each call's status (COMPLETED and FAILED are terminal), summary note id and text (null when the key owner may not read it), who sent the notetaker, the appointment title, and the meeting contacts with the contacts connected to each. At most 50 per page; advance `after` to the last `startedAt`. Read a call transcript with getMeetingTranscript(noteId).
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listMeetingSummaries: (variables: T.ListMeetingSummariesQueryVariables, options?: RequestOptions): Promise<T.ListMeetingSummariesQuery> =>
      this.request('listMeetingSummaries', variables, options, { operationType: 'query' }),
    /**
     * Rename a voicemail drop (templateId from getCallWorkspaceSettings).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameVoicemailTemplate: (variables: T.RenameVoicemailTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameVoicemailTemplateMutation> =>
      this.request('renameVoicemailTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * Render a content template against a contact: collapse [a|b] spintax and substitute merge fields — the CONTACT vocabulary updateWorkflowGraph lists ({{firstName}}, {{contactPropertyAddress}}, {{userFirstName}}, …), matched exactly and case-sensitively. Returns the rendered subject/body plus missingVariables — every token that did NOT render, whether it had no value for this contact or could not render at all because contactId was omitted (contact tokens then remain as literal {{...}} text AND are listed as missing). Inspect missingVariables (empty = fully rendered). Send with sendText / sendEmail (behind the organization’s send consent attestation). Pass spintaxSeed for a deterministic variant. Omitting contactId previews spintax and user tokens only — never send a no-contact render of a template with contact tokens.
     *
     * @remarks Requires the READ scope.
     */
    renderContentTemplate: (variables: T.RenderContentTemplateQueryVariables, options?: RequestOptions): Promise<T.RenderContentTemplateQuery> =>
      this.request('renderContentTemplate', variables, options, { operationType: 'query' }),
    /**
     * Order the after-call actions the dialer offers: items list every kind once with its displayOrder. Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderAfterCallActions: (variables: T.ReorderAfterCallActionsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderAfterCallActionsMutation> =>
      this.request('reorderAfterCallActions', variables, options, { operationType: 'mutation' }),
    /**
     * Set the order of a person's voicemail drops: items are { id, displayOrder } for that userId.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderVoicemailTemplates: (variables: T.ReorderVoicemailTemplatesMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderVoicemailTemplatesMutation> =>
      this.request('reorderVoicemailTemplates', variables, options, { operationType: 'mutation' }),
    /**
     * Send an email as the key owner through their connected Gmail/Outlook mailbox. NEEDS THE ORGANIZATION'S SEND CONSENT ATTESTATION, like sendText: refused with 403 send_consent_not_attested until an org admin attests (setSendConsentAttestation), and with 403 outbound_paused while the org has paused everything. IMPORTANT: bodyHtml is the authored content, not necessarily the complete delivered Gmail body — appendSignature defaults to true, so Goliath appends the sending mailbox's synced/default Gmail signature when one is available. Set appendSignature to false when bodyHtml must be the complete email with nothing appended. Outlook sends do not append a Goliath-managed signature. fromClientId + fromEmail identify the sending mailbox — get them from listCommunicationChannels. contactId (optional) attaches the email to that contact timeline; a Do-Not-Contact-blocked contactId returns a GraphQL error (the one failure that is not ok:false) and releases any Idempotency-Key for a corrected retry. On any other failure ok is false and failureReason + failureMessage explain why (NO_CONNECTED_MAILBOX, INVALID_SENDER, MAILBOX_MISSING_SEND_SCOPE, or PROVIDER_SEND_FAILED). No attachments or threading in v1.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    sendEmail: (variables: T.SendEmailMutationVariables, options?: IdempotentRequestOptions): Promise<T.SendEmailMutation> =>
      this.request('sendEmail', variables, options, { operationType: 'mutation' }),
    /**
     * Send an SMS to a phone number (E.164, e.g. +13235550100; an unparseable number is rejected up front with INVALID_PHONE_NUMBER) as the key owner. NEEDS THE ORGANIZATION'S SEND CONSENT ATTESTATION: until an org admin attests once that every contact the organization messages through the API consented (setSendConsentAttestation; read it with getSendConsentAttestation), this is refused with 403 send_consent_not_attested, and while the org has paused everything it is refused with 403 outbound_paused. Runs the checks the app's composer runs: opt-out and Do-Not-Contact guard, A2P active-campaign gate, send throttles and daily caps, find-or-create contact from the number, and conversation + activity logging. A 200 response is NOT delivery — check status: FAILED or SKIPPED means the message never reached the contact (errorCode/errorMessage say why) even though the row is returned without a GraphQL error. Omit fromPhoneLineId to use your assigned line; sending from another user's assigned line requires the VIEW_ALL_PHONES capability (org-shared bulk lines are usable by any org member without it; another organization's line is never usable). Call listCommunicationChannels first and pick a line whose canSendSms is true.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    sendText: (variables: T.SendTextMutationVariables, options?: IdempotentRequestOptions): Promise<T.SendTextMutation> =>
      this.request('sendText', variables, options, { operationType: 'mutation' }),
    /**
     * Replace the contact custom fields shown on the call card (at most 8, in order). Admins only. Send the whole list.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setCallCardFields: (variables: T.SetCallCardFieldsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetCallCardFieldsMutation> =>
      this.request('setCallCardFields', variables, options, { operationType: 'mutation' }),
    /**
     * Set the PHONE_LINE Workflow Table column the dialer reads each contact's outbound caller ID from (listWorkflowTables), or null to stop. Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setCallerIdTableColumn: (variables?: T.SetCallerIdTableColumnMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetCallerIdTableColumnMutation> =>
      this.request('setCallerIdTableColumn', variables, options, { operationType: 'mutation' }),
    /**
     * Attest (`attested: true`) or withdraw (`false`) the organization's send consent: the org admin who owns this key states, once for the whole organization, that every contact it texts or emails through the developer API consented to be contacted. It opens the operations that message contacts (sendText, sendEmail, and accepting a card that sends, a contract's emails to its signers) to the organization's developer-API keys; it replaces no check — every send still runs opt-out, Do Not Contact and A2P registration, and Pause everything still holds them. Only on the admin's own word: never attest for them. ADMIN scope; the key owner must currently be an org admin. Returns attested, attestedAt, attestedByUserId.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setSendConsentAttestation: (variables: T.SetSendConsentAttestationMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetSendConsentAttestationMutation> =>
      this.request('setSendConsentAttestation', variables, options, { operationType: 'mutation' }),
    /**
     * Value-level opt-out: block a phone number or email address for your organization on one medium (SMS, VOICE or EMAIL). Keyed on the normalized VALUE, not a contact: every contact carrying it, now and later, is blocked on send. SMS/VOICE take a phone in any format, EMAIL an address; an unparseable one is rejected (INVALID_PHONE_NUMBER / INVALID_INPUT). Idempotent. Blocks only the medium named (send VOICE too for calls). A person in the app clears it, or a developer-API key with clearChannelSuppression. Returns organizationId, normalizedValue, medium.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    suppressChannel: (variables: T.SuppressChannelMutationVariables, options?: IdempotentRequestOptions): Promise<T.SuppressChannelMutation> =>
      this.request('suppressChannel', variables, options, { operationType: 'mutation' }),
    /**
     * Record or correct a call's outcome (disposition) and its note (at most 280 characters), as the dialer's outcome gate does. By callSid, or by contactId for the key owner's latest outbound call to that contact. Sends nothing.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateCallOutcome: (variables: T.UpdateCallOutcomeMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateCallOutcomeMutation> =>
      this.request('updateCallOutcome', variables, options, { operationType: 'mutation' }),
  }

  readonly contactImports = {
    /**
     * Bring an import from startContactImport to a ready mapping when it was not ready yet (transformerAuthoringState IN_PROGRESS, or hasAuthoredTransformer false). It returns at once when the mapping already exists. Same result fields as startContactImport. Nothing is imported.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    authorContactImportMapping: (variables: T.AuthorContactImportMappingMutationVariables, options?: IdempotentRequestOptions): Promise<T.AuthorContactImportMappingMutation> =>
      this.request('authorContactImportMapping', variables, options, { operationType: 'mutation' }),
    /**
     * Import every row of the spreadsheet as contacts: the step the Import page’s Import button runs. Rows that match an existing contact update it instead of duplicating it. Every import puts its contacts on its own list, “Contacts from <file name>”; tagName adds a second list of that name (optional; a list, not a tag), so pass it only for a list the person named or picked, never one you made from the file’s name. attestationAccepted records that the person affirmed they have a lawful basis to contact everyone on the list; the import is refused without it, so pass true only on their yes (in a chat, their yes on the import task’s approval card, which shows the attestation). reviveArchivedMatches (default true) restores archived contacts the file matches. optOutTagName is the tag the mapping puts on the file’s opt-outs (a DNC column or tag, for example "DNC"): when the import finishes, every contact it imported that carries that tag is marked Do Not Contact, as part of the import, so nothing waits on it to mark them; omit it when the file marks nobody. Only after the person has seen the preview and said yes to importing this file, with this list. It starts a background task and returns at once; the chat that started it is told when it finishes, so never wait on it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    confirmContactImport: (variables: T.ConfirmContactImportMutationVariables, options?: IdempotentRequestOptions): Promise<T.ConfirmContactImportMutation> =>
      this.request('confirmContactImport', variables, options, { operationType: 'mutation' }),
    /**
     * The status of an import: status (CREATED and AUTHORING_TRANSFORMER = not confirmed yet, PENDING_PROCESSING and PROCESSING = importing, COMPLETED, FAILED, NOT_ENOUGH_BALANCE), totalRows, the contacts produced so far (producedRecordsCount), a best-effort estimatedRemainingTimeInSeconds (it runs high early in an import, so never promise a time from it: the chat that started the import is told when it finishes), the upload’s own list (contactTag, named for the file; not the list the person chose), and the results report: created, matched (an existing contact updated, or one an earlier row of this same file made), duplicateRowCount (rows that repeat an earlier row of this file), mergedAfterImportCount (the duplicate rows whose new contact was merged into an earlier row’s after the import; the rest of the duplicates count as matched, so contacts they already had = matched - (duplicateRowCount - mergedAfterImportCount)), restored (an archived match brought back), skipped and failed rows, and processedRowCount. One read answers "how is it going". For an import this chat started, the chat is told when it finishes, so a code task never polls it; for one started elsewhere (Files, another chat), poll every 10 to 30 seconds.
     *
     * @remarks Requires the READ scope.
     */
    getContactImport: (variables: T.GetContactImportQueryVariables, options?: RequestOptions): Promise<T.GetContactImportQuery> =>
      this.request('getContactImport', variables, options, { operationType: 'query' }),
    /**
     * The rows of an import whose phone the import cannot store (not a full US number): they come in without that phone. unstorablePhoneRowIndexes are 0-based, so row N is index + 1; checkedRows is how many of the file’s first rows were checked (up to 100): past them nothing was checked, so say so. Null when the check could not run. Read it once for the finish report (W20 BP14).
     *
     * @remarks Requires the READ scope.
     */
    getContactImportRowFindings: (variables: T.GetContactImportRowFindingsQueryVariables, options?: RequestOptions): Promise<T.GetContactImportRowFindingsQuery> =>
      this.request('getContactImportRowFindings', variables, options, { operationType: 'query' }),
    /**
     * The first rows of an import as the contacts they will become, in the app’s own fields: name, phones, emails, property addresses, mailing addresses, tags, lists, deals, and custom fields (every custom field of the workspace is listed; the ones with values are the ones this row fills). contactTransformerRowCount is the number of rows the import will read. A row with error set and no contact will be skipped. contactTransformerRowFindings names the rows to tell the person about before they approve the import: a likely repeat of an earlier row (the same name and a shared phone or email, or for a nameless row a shared phone or email; the import usually merges it into that contact, so say it likely will, never that it will) and a row with no name (it lands under its phone or email), with 0-based row indexes, over the file’s first checkedRows rows; null means the check did not run, so never say the file has no repeats. limit is 1 to 10 (default 8). Show these rows to the person as a table, one row per contact, a column per field that any row fills, and say how many rows the file has. Read only; nothing is imported.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 10.
     */
    previewContactImport: (variables: T.PreviewContactImportQueryVariables, options?: RequestOptions): Promise<T.PreviewContactImportQuery> =>
      this.request('previewContactImport', variables, options, { operationType: 'query' }),
    /**
     * Change how an import maps the spreadsheet’s columns, in plain words: message is the change the person asked for (for example "the Owner 2 column is a second contact name, not a note" or "put the Lead Source column in the Source custom field"). Re-runs the import mapper, which takes up to a few minutes; read the result again with previewContactImport. Nothing is imported.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reviseContactImportMapping: (variables: T.ReviseContactImportMappingMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReviseContactImportMappingMutation> =>
      this.request('reviseContactImportMapping', variables, options, { operationType: 'mutation' }),
    /**
     * Start importing contacts from a spreadsheet the person attached to the chat. Pass artifactId, the shelf id the chat names for the file (`[shelf id …]`). It creates the same upload the Import page creates (it shows on the Files page) and runs the import mapper on it, which takes up to a few minutes, then returns the import (its id is the fileProcessingTaskId every other contactImports operation takes), the file row count (totalRows) and its columns with example values (csvSample). Nothing is imported yet. transformerAuthoringState COMPLETED with hasAuthoredTransformer true means the mapping is ready: read it with previewContactImport. IN_PROGRESS means another mapping run on this upload is still going: wait a little and call authorContactImportMapping. Only .csv, .xlsx and .xls files can be imported (spreadsheets are stored as CSV). Call it once per file and keep the id; a second call for a file whose import is not confirmed yet returns that same import.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    startContactImport: (variables: T.StartContactImportMutationVariables, options?: IdempotentRequestOptions): Promise<T.StartContactImportMutation> =>
      this.request('startContactImport', variables, options, { operationType: 'mutation' }),
  }

  readonly contacts = {
    /**
     * Accept a contact's suggestion card as written: a reply card SENDS its text or email to the contact; another card applies its action. Only when the person asks for THIS card by name, by its suggestionId; when their trust for the card's kind asks first, the write says how to ask. Leave `senderUserId` out: it names a customer reply's sender and is refused on any other card; Ask Goliath sends only as the person. In Ask Goliath `acceptPairedActions` is refused (accept each paired card on its own); over HTTP it also accepts them, and `replyInThread` answers in the email thread.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    acceptContactSuggestion: (variables: T.AcceptContactSuggestionMutationVariables, options?: IdempotentRequestOptions): Promise<T.AcceptContactSuggestionMutation> =>
      this.request('acceptContactSuggestion', variables, options, { operationType: 'mutation' }),
    /**
     * Accept a text or email reply card with the person's own words (`text`) in place of the draft; it SENDS. Only when the person asks for THIS card by name, by its suggestionId; when their trust for the card's kind asks first, the write says how to ask. Leave `senderUserId` out: it names a customer reply's sender and is refused on any other card; Ask Goliath sends only as the person. In Ask Goliath `acceptPairedActions` is refused (accept each paired card on its own); over HTTP it also accepts them, and `replyInThread` answers in the email thread.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    acceptEditedContactSuggestion: (variables: T.AcceptEditedContactSuggestionMutationVariables, options?: IdempotentRequestOptions): Promise<T.AcceptEditedContactSuggestionMutation> =>
      this.request('acceptEditedContactSuggestion', variables, options, { operationType: 'mutation' }),
    /**
     * Add one option to a contact DROPDOWN field (listContactCustomFields). Never drops an option; a label already there (any case) is kept as-is.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addContactCustomFieldOption: (variables: T.AddContactCustomFieldOptionMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddContactCustomFieldOptionMutation> =>
      this.request('addContactCustomFieldOption', variables, options, { operationType: 'mutation' }),
    /**
     * Add a titled URL to a contact's Links card (getContactConnections externalLinks): a web address, or an app path starting with / (it becomes the app's own URL). Never for a Library file or page: those go on the contact's files with fileLibraryItemsOnContact.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addContactExternalLink: (variables: T.AddContactExternalLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddContactExternalLinkMutation> =>
      this.request('addContactExternalLink', variables, options, { operationType: 'mutation' }),
    /**
     * Add a text note to a contact, synchronously (getContact returns it at once). The response is the OWNING CONTACT, not the note (`id` and `name` are the contact's), so report the name it gives back, never the name you searched for. They differ more often than they look: contactId usually comes from a findContacts search, which ranks and can return a near match for a name with no exact one. A run that wrote to the top row and told the user the note landed on the searched name has reported a record it did not touch, which nothing downstream catches. If the echoed name is not the contact the user named, say so and offer to move the note. Returns no noteId: re-read getContact notes[] for one (see editContactNote).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addContactNote: (variables: T.AddContactNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddContactNoteMutation> =>
      this.request('addContactNote', variables, options, { operationType: 'mutation' }),
    /**
     * Add contacts to one or more LISTS (segments) by list id (searchContactTags `lists` / createContactList): the selection-wide form of updateContact’s addToListIds; removeContactsFromList is the twin. Async bulk job: returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. A contact already on the list is skipped, not failed, so re-running is harmless. LIST ids only: a free-form tag or custom-field id is refused at the gateway (the underlying worker would silently drop it and complete having changed nothing). POTENTIALLY OUTBOUND: list membership publishes the same tags-changed event tags do, so a CONTACT workflow triggered on this list can start a run and send. Check the org’s workflows or confirm with the user before a large selection.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addContactsToList: (variables: T.AddContactsToListMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddContactsToListMutation> =>
      this.request('addContactsToList', variables, options, { operationType: 'mutation' }),
    /**
     * Add tags to contacts: existing ones by `tagIds` (searchContactTags), new ones by exact name in `newTagNames`, created as this runs, never createContactTag first. removeContactTags is the twin. Async bulk job: poll `bulkTaskId` with getBulkTask; a read-back right away will NOT show it. POTENTIALLY OUTBOUND: a CONTACT workflow whose trigger names a tag starts a run that can text or email; on a large selection check first (listWorkflows { status: ACTIVE, triggerType: [MATCH, MUTATION] }, then their graph `triggers`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addContactTags: (variables: T.AddContactTagsMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddContactTagsMutation> =>
      this.request('addContactTags', variables, options, { operationType: 'mutation' }),
    /**
     * Archive (soft-delete) contacts by id. Async bulk job: returns a bulkTaskId to poll with getBulkTask. Archived contacts drop out of the CRM but are recoverable: unarchiveContacts restores them (bulk), updateContact(isArchived: false) one. Nothing is destroyed: notes, activities, tags and deals survive and come back with the contact.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    archiveContacts: (variables: T.ArchiveContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ArchiveContactsMutation> =>
      this.request('archiveContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Assign a teammate to contacts (get userId from listTeammates). role defaults to POINT_PERSON; pass PARTICIPANT for a secondary assignment. The removal twin is unassignContact. Async bulk job — returns a bulkTaskId to poll with getBulkTask.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    assignContact: (variables: T.AssignContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.AssignContactMutation> =>
      this.request('assignContact', variables, options, { operationType: 'mutation' }),
    /**
     * Pin (isPinned true) or unpin a note (getContact notes[]); any teammate may. A pin notifies the contact's teammates.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    changeNotePinned: (variables: T.ChangeNotePinnedMutationVariables, options?: IdempotentRequestOptions): Promise<T.ChangeNotePinnedMutation> =>
      this.request('changeNotePinned', variables, options, { operationType: 'mutation' }),
    /**
     * Remove a contact's photo; the image stays on the contact.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    clearContactPhoto: (variables: T.ClearContactPhotoMutationVariables, options?: IdempotentRequestOptions): Promise<T.ClearContactPhotoMutation> =>
      this.request('clearContactPhoto', variables, options, { operationType: 'mutation' }),
    /**
     * Comment on a suggestion card ("too pushy"). Nothing on the card changes and nothing is sent; the employee reads it when it drafts its next card. submissionKey: a new one per comment (1 to 100 characters), resent unchanged on a retry.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    commentOnSuggestionCard: (variables: T.CommentOnSuggestionCardMutationVariables, options?: IdempotentRequestOptions): Promise<T.CommentOnSuggestionCardMutation> =>
      this.request('commentOnSuggestionCard', variables, options, { operationType: 'mutation' }),
    /**
     * EVERY list in ONE call, import uploads ("Contacts from … .csv", kind UPLOAD) and exports included, emptiest first: contactCount (unarchived you see), orgActiveContactCount / orgArchivedContactCount and isEmpty (no unarchived contact in the org; null unless you can view all contacts). onlyEmpty and kinds narrow it. Use instead of a countContacts per list. Tags are contactTagUsage.
     *
     * @remarks Requires the READ scope.
     */
    contactListUsage: (variables?: T.ContactListUsageQueryVariables, options?: RequestOptions): Promise<T.ContactListUsageQuery> =>
      this.request('contactListUsage', variables, options, { operationType: 'query' }),
    /**
     * Free-form tags, least-used first: contactCount (visible, unarchived), orgContactCount (org, +archived; null w/o view-all: 0 proves nothing), dependents. maxContactCount 0 = unused (view-all). filterTree: MATCHING contacts per tag, carried tags first, no org count/dependents. Never countContacts per tag; getDeletionImpact before deleting.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    contactTagUsage: (variables?: T.ContactTagUsageQueryVariables, options?: RequestOptions): Promise<T.ContactTagUsageQuery> =>
      this.request('contactTagUsage', variables, options, { operationType: 'query' }),
    /**
     * PAUSE or RESUME the workflow runs of contacts (optional workflowGroupIds narrows it). RESUME restarts only runs someone paused by hand on a workflow version still active; other runs are skipped. A bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    controlContactsWorkflowRuns: (variables: T.ControlContactsWorkflowRunsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ControlContactsWorkflowRunsMutation> =>
      this.request('controlContactsWorkflowRuns', variables, options, { operationType: 'mutation' }),
    /**
     * Promote a relative (getContactConnections subContacts id) to its own contact, linked back as a related person; returns the link with `linkedContactId`. linkToExisting: true links the org's existing contact for the same person instead, and is refused when there is none.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    convertSubContactToLinkedRelationship: (variables: T.ConvertSubContactToLinkedRelationshipMutationVariables, options?: IdempotentRequestOptions): Promise<T.ConvertSubContactToLinkedRelationshipMutation> =>
      this.request('convertSubContactToLinkedRelationship', variables, options, { operationType: 'mutation' }),
    /**
     * The number of active contacts visible to you, in one call: the total the Contacts page shows (archived and hidden contacts excluded). Use it for any count-shaped question; never page through findContacts to count. With no arguments it is the total VISIBLE TO THE KEY OWNER, the org-wide total only for an owner holding VIEW_ALL_CONTACTS (applied with or without a filterTree), so never report it as the organization's total unless you know the owner sees every contact. Takes an optional filterTree (saveFilter's DSL), never filterId: a saved filter's count is filterContacts' `total` with its filterId. NEVER save a filter to measure one. A status word ("called", "hot", "dead") can name the org's own tags: searchContactTags for it before you count by an activity or system field alone, and count each reading you find. A count is the answer, 0 included: never re-derive it by paging. Archived contacts are excluded, so 0 means no ACTIVE match. To see how a condition treats empty values, run filterContacts once.
     *
     * @remarks Requires the READ scope.
     */
    countContacts: (variables?: T.CountContactsQueryVariables, options?: RequestOptions): Promise<T.CountContactsQuery> =>
      this.request('countContacts', variables, options, { operationType: 'query' }),
    /**
     * Count records grouped by any field in ONE call: tasks per contact or per teammate, mine vs others, contacts by source, deals by stage. Use it instead of paging a list op or a code task to tally. `spec` = {from, groupBy (up to 6), measures, where (equality; an array = any of; null = unset), orderBy [{by, dir}], limit (default 500), since/until (ISO, "now", "-30d")}. Values match exactly: statuses are UPPERCASE (tasks: UPCOMING, OVERDUE = past due now, earlier today included, COMPLETED; open tasks = completed false). Counts only what the caller may see. Contacts per TAG are contactTagUsage, one call; contacts.owners groups by the whole owner set, not per owner. Answers {ok, result: {rows, truncated}} or {ok: false, error}. Models: contacts (group: owners, source, doNotContact, lastActivityType, archived, stage, buyer, buyerStatus; measures: count, replied; time createdAt) · tasks (group: contactId, contactName, assigneeId, assignee, mine, completed, status; measures: count, rows; time dueAt) · deals (group: pipelineId, pipeline, stageId, stage, outcome, archived, workflowId, employeeId, teammateId, origin, assignees; measures: count, valueCents; time createdAt) · pipeline (group: pipelineId, pipeline, stageId, stage, stageOrder, outcome; measures: deals, valueCents, openDeals, openValueCents) · appointments (group: completed, cancelled, workflowId, employeeId, teammateId; measures: count; time startAt) · leads (group: source; measures: count; time at) · properties (group: contactId, contactName, relation, zipCode, state, propertyType, bedrooms, ownerOccupied, countyFips, county, ownedSince, ownerPropertyCount, wrongLink, archived; measures: count, properties, contacts, avgEstimatedValue, medianEstimatedValue)
     *
     * @remarks Requires the READ scope.
     */
    countRecords: (variables: T.CountRecordsQueryVariables, options?: RequestOptions): Promise<T.CountRecordsQuery> =>
      this.request('countRecords', variables, options, { operationType: 'query' }),
    /**
     * Create a contact; needs sellerFirstName, sellerLastName, and type (LISTING | INVESTMENT | BUYER | UNDETERMINED); phones/emails optional. Search findContacts by the name and each phone/email first: a match is a same-person-or-new question for the user BEFORE creating.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createContact: (variables: T.CreateContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateContactMutation> =>
      this.request('createContact', variables, options, { operationType: 'mutation' }),
    /**
     * Create an org-wide contact custom-field DEFINITION (name + type: TEXT | NUMBER | DOLLAR | DATE | LINK | DROPDOWN; `options` required for DROPDOWN; `allowMultiple` optional), synchronously. Returns the org custom-field catalog: find the new id by name (or listContactCustomFields), then write values via addCustomFieldValues (createContact) / updateCustomFieldValues (updateContact). A defaultValue fills every contact lacking a value, archived too, and stays if later changed; nothing counts them: ask first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createContactCustomField: (variables: T.CreateContactCustomFieldMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateContactCustomFieldMutation> =>
      this.request('createContactCustomField', variables, options, { operationType: 'mutation' }),
    /**
     * Create a CRM contact from a property (id/esId). It runs skip-trace enrichment on the property and CONSUMES ONE SKIPTRACE CREDIT (plan allowance first except in a trial, then real money; checkBillingAction): ADMIN scope, and the key owner must be a team admin. Returns the property with its linked contacts, the new one included.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createContactFromProperty: (variables: T.CreateContactFromPropertyMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateContactFromPropertyMutation> =>
      this.request('createContactFromProperty', variables, options, { operationType: 'mutation' }),
    /**
     * Create an org-wide contact list (segment), synchronously. Returns the org list catalog: find the new id by the name you gave (or searchContactTags). Fix a name with renameContactList; fill it with addContactsToList.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createContactList: (variables: T.CreateContactListMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateContactListMutation> =>
      this.request('createContactList', variables, options, { operationType: 'mutation' }),
    /**
     * Create an org-wide free-form contact tag, synchronously. Returns the org tag catalog: find the new id by the name you gave (or searchContactTags). To fix a name use renameContactTag, never a second tag.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createContactTag: (variables: T.CreateContactTagMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateContactTagMutation> =>
      this.request('createContactTag', variables, options, { operationType: 'mutation' }),
    /**
     * Reply to a note (getContact notes[]) as the key owner; AI employees cannot. Notifies the thread, by text too (a hidden note's: Goliath staff only). Returns the replies: find yours by author and createdAt.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createNoteReply: (variables: T.CreateNoteReplyMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateNoteReplyMutation> =>
      this.request('createNoteReply', variables, options, { operationType: 'mutation' }),
    /**
     * Accept or dismiss many cards at once (`verb` ACCEPT or DISMISS, `suggestionIds` at most 500): each runs as its own Accept or Dismiss would, so an ACCEPT can send a reply per card. An id the key owner may not act on is dropped from the plan, not reported. `dismissReason` for a DISMISS. `rowDecisions` answers one card's own question for an ACCEPT ({ suggestionId, decisions }). Returns planned, applied, refused, truncated (only the first `planned` ran: call again) and unresolvedIds. An ACCEPT whose answer spends credits is refused (the app's costed bulk accept). Behind the send consent attestation and Pause everything, a DISMISS too.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    decideContactSuggestionsInBulk: (variables: T.DecideContactSuggestionsInBulkMutationVariables, options?: IdempotentRequestOptions): Promise<T.DecideContactSuggestionsInBulkMutation> =>
      this.request('decideContactSuggestionsInBulk', variables, options, { operationType: 'mutation' }),
    /**
     * Accept or dismiss any card in the suggestion feed — a contact's, an AI employee's or an account card — by its id (`verb` ACCEPT or DISMISS), the same door Work through uses. DISMISS takes `reason` and optionally `note` (their words). An account card's ACCEPT runs only the actions named in `selectedProposalKeys`; a card with a question of its own takes its answer in `decisions`. Accepting a reply sends it, under every gate the app's Accept runs; an account card's accept needs an org admin. Only on the person's word. Behind the send consent attestation and Pause everything, a DISMISS too. Returns id, kind, status.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    decideSuggestion: (variables: T.DecideSuggestionMutationVariables, options?: IdempotentRequestOptions): Promise<T.DecideSuggestionMutation> =>
      this.request('decideSuggestion', variables, options, { operationType: 'mutation' }),
    /**
     * Permanently delete a contact custom-field DEFINITION (id from listContactCustomFields). DESTRUCTIVE AND IRREVERSIBLE: every value recorded on every contact for it is deleted, NOT moved to another field. Prefer updateContactCustomField when the field is merely wrong rather than unwanted. Call getDeletionImpact first (targetKind CONTACT_CUSTOM_FIELD, targetId the field id): it reports how many contacts hold a value and which filters/workflows reference the field, and returns the impactVersion to hand back as dependencyResolution.impactVersion (with an empty `replacements` array when it reports no replacementRequirements). A required replacement redirects those filters/workflows to another field; it does not carry contact values over. The impactVersion goes stale if anything changes in between: re-read the impact and retry rather than reuse an old one. System-defined fields (e.g. Buyer/Seller) cannot be deleted. Confirm with the user before calling.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteContactCustomField: (variables: T.DeleteContactCustomFieldMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteContactCustomFieldMutation> =>
      this.request('deleteContactCustomField', variables, options, { operationType: 'mutation' }),
    /**
     * PERMANENTLY delete a saved CONTACT filter by id (from listContactFilters): no archive, no undo. Returns true when a row was deleted; a foreign or unknown id is rejected, and a property or deal filter id is refused with nothing deleted. WHOSE FILTER IS IT: listContactFilters returns `userId`, the owner. A TEAMMATE'S shared filter is deletable when the key owner is an org admin, so check `userId` against getMyProfile (`currentUser.id`) first and say whose it is. A teammate's PRIVATE filter is refused outright. If the filter is merely wrong rather than unwanted, updateFilter (properties domain; it edits contact filters too) fixes it in place.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteContactFilter: (variables: T.DeleteContactFilterMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteContactFilterMutation> =>
      this.request('deleteContactFilter', variables, options, { operationType: 'mutation' }),
    /**
     * Delete contact lists by id (from createContactList), dropping their membership. IRREVERSIBLE: prefer renameContactList when only the name is wrong, and removeContactsFromList when the list should just not hold those contacts; this is for retiring the list. A list referenced by filters/workflows needs a dependencyResolution from getDeletionImpact (targetKind CONTACT_LIST); an unreferenced one needs none.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteContactLists: (variables: T.DeleteContactListsMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteContactListsMutation> =>
      this.request('deleteContactLists', variables, options, { operationType: 'mutation' }),
    /**
     * PERMANENTLY delete a note (by noteId): it leaves the contact's timeline with NO undo, so ALWAYS show its text and get their yes; a card counts. When only the wording is wrong use editContactNote, which is reversible. noteIds come from getContact (notes[]) or a NOTE entry in listContactActivities. One note per call; no bulk delete. Returns the owning contact with its REMAINING notes (the deleted one gone), so confirm the removal and show what is left rather than assert it worked. You can only delete a note you authored (or any note, if the key owner is a team admin); a note whose `author.kind` is AI is someone else's, so a NON-ADMIN key is refused on one.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteContactNote: (variables: T.DeleteContactNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteContactNoteMutation> =>
      this.request('deleteContactNote', variables, options, { operationType: 'mutation' }),
    /**
     * Delete free-form contact tags by id (from createContactTag), removing them from every contact. IRREVERSIBLE and org-wide: prefer renameContactTag when the name is merely wrong, and removeContactTags when the tag should only come off some contacts; this is for retiring the tag itself. Free-form tag ids only (custom fields, lists and system-defined rows are rejected). A single-tag delete needs a dependencyResolution from getDeletionImpact (targetKind CONTACT_TAG): its impactVersion plus any replacements. A multi-tag delete accepts only tags with no dependencies; delete a depended-on tag on its own.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteContactTags: (variables: T.DeleteContactTagsMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteContactTagsMutation> =>
      this.request('deleteContactTags', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a reply for good. Same authorship rule as editContactNote. Returns the replies left.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteNoteReply: (variables: T.DeleteNoteReplyMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteNoteReplyMutation> =>
      this.request('deleteNoteReply', variables, options, { operationType: 'mutation' }),
    /**
     * Dismiss a suggestion card with the reason the person gave (NOT_RELEVANT, WRONG_TONE, WRONG_FACTS, ALREADY_DONE, OTHER, …). Recorded through the API, not as feedback heard from a person.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    dismissContactSuggestion: (variables: T.DismissContactSuggestionMutationVariables, options?: IdempotentRequestOptions): Promise<T.DismissContactSuggestionMutation> =>
      this.request('dismissContactSuggestion', variables, options, { operationType: 'mutation' }),
    /**
     * findDuplicateContactGroups tallied per assigned rep (point person) in ONE call: per rep, groupCount (groups holding one of their contacts) and contactCount; userId null = unassigned. totalGroups, truncated (past 500 groups).
     *
     * @remarks Requires the READ scope.
     */
    duplicateContactsByRep: (variables?: T.DuplicateContactsByRepQueryVariables, options?: RequestOptions): Promise<T.DuplicateContactsByRepQuery> =>
      this.request('duplicateContactsByRep', variables, options, { operationType: 'query' }),
    /**
     * Rewrite an existing note's body (by noteId). REVERSIBLE: the note keeps its id and timeline position, so a wrong edit can be edited again, and no permission is needed when the user asked for a correction. Pass the FULL replacement body: it replaces the text, it does not append. noteIds come from getContact (notes[]) or a NOTE entry's note payload in listContactActivities; addContactNote returns none, so re-read the contact for the note you just wrote. The response echoes the saved body and updatedAt plus the owning contact (id + name): quote the corrected text back rather than assume it took. Only a note the key owner wrote, unless they are a team admin; a note whose `author.kind` is AI is someone else's, so a NON-ADMIN key is refused on one: check the author before offering to correct a note.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    editContactNote: (variables: T.EditContactNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.EditContactNoteMutation> =>
      this.request('editContactNote', variables, options, { operationType: 'mutation' }),
    /**
     * Replace a reply's body (replyId from getContact notes[].replies); echoes the saved body. Same authorship rule as editContactNote.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    editNoteReply: (variables: T.EditNoteReplyMutationVariables, options?: IdempotentRequestOptions): Promise<T.EditNoteReplyMutation> =>
      this.request('editNoteReply', variables, options, { operationType: 'mutation' }),
    /**
     * Skip-trace a contact to discover phone numbers and emails. CONSUMES ONE SKIPTRACE CREDIT (plan allowance first except in a trial, then real money; checkBillingAction) — requires the ADMIN scope, and the key owner must be a team admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    enrichContact: (variables: T.EnrichContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.EnrichContactMutation> =>
      this.request('enrichContact', variables, options, { operationType: 'mutation' }),
    /**
     * Run a contact filter and paginate the matches with limit/offset. Returns a page of contacts (name, tags, phones, emails, `doNotContact`, reason, date, linked `properties`: no getContact per row) plus total and hasMore. Pass EITHER filterId (a saved filter from listContactFilters) OR filterTree (saveFilter's filter-tree DSL; conditions key `fieldId`, not `field`) to run an UNSAVED tree: same path and totals, nothing saved. filterTree verifies a filter before creating it and settles what a condition does (fetch a record with no value for the field and see whether the tree returns it). NEVER save a filter to measure one; save only the one asked for. Sort with sort: { field, direction } (`ASC` / `DESC`); field is a CLOSED vocabulary: `NAME` (A–Z), `SELLER_INTENT_SCORE`, `LAST_COMMUNICATION`, `LAST_ACTIVITY`, `DIAL_ATTEMPTS` (org-wide dials), `MY_LAST_CALL`, `MY_LAST_TEXT`, `LAST_UPDATED`, `CREATED_AT`, `TASK_HIGHLIGHT`, `AUCTION_DATE` (earliest upcoming auction; none sort last). Any other field is silently IGNORED. `participants`: its assignees (REVOKED: no longer assigned).
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    filterContacts: (variables?: T.FilterContactsQueryVariables, options?: RequestOptions): Promise<T.FilterContactsQuery> =>
      this.request('filterContacts', variables, options, { operationType: 'query' }),
    /**
     * Contact data problems in ONE call, never contact by contact: EMAIL_NOT_LOWERCASE, NAME_EMPTY, NAME_ONE_WORD (a first or last name missing; which is unknown), PHONE_NOT_NORMALIZED (not the 10-digit form phones are stored in; well-formed numbers are shown formatted, never stored so). Each: count of contacts you see, a sample (sampleSize ≤25) with the bad value, truncated. Pass problem for up to 500 of its contact ids past offset, what lowercaseContactEmails takes.
     *
     * @remarks Requires the READ scope.
     */
    findContactDataProblems: (variables?: T.FindContactDataProblemsQueryVariables, options?: RequestOptions): Promise<T.FindContactDataProblemsQuery> =>
      this.request('findContactDataProblems', variables, options, { operationType: 'query' }),
    /**
     * Fuzzy-search contacts by name, phone, email, or address. A phone may be its last four digits ("0142"). ARCHIVED contacts are included, marked `isArchived` (includeArchived: false drops them): one is still in the workspace, never "not in your contacts"; before a write, ask (a form): restore (unarchiveContacts), write anyway, or skip. Rows are QUALIFYING CANDIDATES, relevance-ranked, not matches: each leg (name, phone, email, address) keeps a row only if it clears a trigram-similarity threshold, and survivors are ranked by match quality, not raw score. So an empty result means nothing cleared the bar, and the top row is "the best that did", not the record you named. One shared word clears it: "Northgate Holdings" with no Northgate returns "McNeil Holdings" as totalCount 1. A single result is not evidence of certainty. Before using a contactId in a WRITE, check personName against the name the user said. If it differs, ask which contact they meant rather than write to the best guess: offer the near match as an ASK_USER_QUESTIONS choice naming that person; if you do write, report the name the write echoes, not the one you searched for (see addContactNote).
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    findContacts: (variables: T.FindContactsQueryVariables, options?: RequestOptions): Promise<T.FindContactsQuery> =>
      this.request('findContacts', variables, options, { operationType: 'query' }),
    /**
     * Contacts by what their NOTES say; for calls, texts and emails too, use searchInteractions. One row per contact with a ~100-char noteSnippet, not the body. Silent limits: notes from the LAST YEAR; 4+ characters of free text (not an email, phone or parcel id: use findContacts); at most 50 contacts from 500 candidate notes, so totalCount is that capped set and empty proves nothing.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    findContactsByNote: (variables: T.FindContactsByNoteQueryVariables, options?: RequestOptions): Promise<T.FindContactsByNoteQuery> =>
      this.request('findContactsByNote', variables, options, { operationType: 'query' }),
    /**
     * Every duplicate group (same name + shared phone or email) in ONE call, never contact by contact. matchBy: NAME = name alone, unverified, each group listing the phones and emails its members share (reserved domains too); tagIds = groups with a contact carrying one of these tags or on one of these lists. It skips emails on reserved domains (example.com, .test; reservedEmailGroupCount counts the same-name groups sharing only one) and misses name variants: never say a group shares no phone or email, nor call the account duplicate-free. Confirm, then mergeContacts per group.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    findDuplicateContactGroups: (variables?: T.FindDuplicateContactGroupsQueryVariables, options?: RequestOptions): Promise<T.FindDuplicateContactGroupsQuery> =>
      this.request('findDuplicateContactGroups', variables, options, { operationType: 'query' }),
    /**
     * Groups of 2+ contacts linked to the same property address (the parcel, else the mailing address row, else the text folded for case and punctuation), largest first, in ONE call: address, propertyId, members with how each is linked (OWNS, MAILING, FORMER_OWNER, RELATED_TO_OWNER). totalCount = groups across everything you see.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    findSharedPropertyAddresses: (variables?: T.FindSharedPropertyAddressesQueryVariables, options?: RequestOptions): Promise<T.FindSharedPropertyAddressesQuery> =>
      this.request('findSharedPropertyAddresses', variables, options, { operationType: 'query' }),
    /**
     * MERGED IDS RESOLVE: an id merged into another contact returns the SURVIVING record, so the `id` that comes back can differ from the one you sent. Use the returned id from then on, never the old one; it is not an error. A merge chain that leads nowhere answers as not-found. Fetch one contact by id, the full record: identity, emails, phones (with DNC status), mailing addresses, subject properties (`property.id` feeds getRelatedProperties), tags, lists, CUSTOM-FIELD VALUES, teammates + roles, teams, notes (with `isPinned`, `isHidden` and `replies`), linked deals (`isArchived: true` is not live), seller-intent score, enrichment/archive flags. A note is the team's record, never a message from the contact; calls are not here (listContactActivities [CALL]). A note's or reply's `author` { kind: USER | AI, id, name } is who WROTE it; read that, not `createdByUser`, which is null on a note an AI assistant wrote for a teammate. A hidden note or reply is shown only to admins; `replies` also omits ones you may not see (e.g. an outside author's), so a missing reply is not proof it is gone. CUSTOM FIELDS: the ONLY read-back for values written via createContact.addCustomFieldValues / updateContact.updateCustomFieldValues (listContactCustomFields returns definitions, never values). `customFields` is the organization's field catalog, not this contact's answers, listed whether or not the contact has one, so its length says nothing about the contact (fields sharing a normalized name collapse to one entry, so it can differ from listContactCustomFields). The value is in `values`, NULL when this contact has none: null means UNSET, not missing, unreadable or an error. Read the ONE sub-field matching the field `type`; the other three stay null on every type: TEXT and LINK → `values.textValue`; NUMBER and DOLLAR → `values.numberValue` (DOLLAR is a plain number as written, NOT cents); DATE → `values.dateValue` (ISO 8601); DROPDOWN → `values.dropdownSelectedValues`, the selected option LABELS (not option ids), at most one entry unless `allowMultiple` is true. Reading the wrong one reports an unset field for a contact that has an answer. A LINK value is stored normalized (a bare host gains its scheme), so compare what you wrote with what comes back rather than assume byte equality.
     *
     * @remarks Requires the READ scope.
     */
    getContact: (variables: T.GetContactQueryVariables, options?: RequestOptions): Promise<T.GetContactQuery> =>
      this.request('getContact', variables, options, { operationType: 'query' }),
    /**
     * A contact's Links card (`externalLinks`), related people (`linkedRelationships`, with `linkedContactId`), relatives not yet contacts (`subContacts`) and the AI pause in force (`aiPause`, null when AI is on: its mode, when and until, the `reason` given, and who paused it: `pausedBy` a person, `pausedByAgentId` an AI employee (getEmployee names it), `pausedByWorkflowRunId` a workflow step, `pausedBySystem` a named job). For WHICH contacts have AI paused, filter on `aiPaused` (filterContacts, countContacts) instead of reading contacts one by one. The ids the link and relationship ops take. Merged ids resolve to the survivor.
     *
     * @remarks Requires the READ scope.
     */
    getContactConnections: (variables: T.GetContactConnectionsQueryVariables, options?: RequestOptions): Promise<T.GetContactConnectionsQuery> =>
      this.request('getContactConnections', variables, options, { operationType: 'query' }),
    /**
     * Each contact field's show-when rule: visibleWhen { fieldId, optionIds } (shown only when that dropdown is any of those options), null when always shown.
     *
     * @remarks Requires the READ scope.
     */
    getContactFieldVisibility: (options?: RequestOptions): Promise<T.GetContactFieldVisibilityQuery> =>
      this.request('getContactFieldVisibility', undefined, options, { operationType: 'query' }),
    /**
     * A contact's own email addresses — never its related people's (sub-contacts'), and never one marked WRONG.
     *
     * @remarks Requires the READ scope.
     */
    getContactIdentity: (variables: T.GetContactIdentityQueryVariables, options?: RequestOptions): Promise<T.GetContactIdentityQuery> =>
      this.request('getContactIdentity', variables, options, { operationType: 'query' }),
    /**
     * Many contacts' linked properties in ONE read: `contactIds` in (a bulk selection's ids, up to 200), each contact's `properties[]` out (`propertyString`, and `property.id`, the property id a skip trace, export or PROPOSE_BULK_TASK selection takes; null when the address never matched a parcel, so it cannot be traced). Use it to turn contacts into their properties, never one getContact per contact. Every id must be one of this workspace's contacts (one outside it refuses the call); a contact you may not open is left out, and a merged id is not followed, so use the ids filterContacts or findContacts returned.
     *
     * @remarks Requires the READ scope.
     */
    getContactsProperties: (variables: T.GetContactsPropertiesQueryVariables, options?: RequestOptions): Promise<T.GetContactsPropertiesQuery> =>
      this.request('getContactsProperties', variables, options, { operationType: 'query' }),
    /**
     * Connect linkedContactId to parentContactId as a related person, with an optional relation label. A pair already connected is refused ("already linked"). Writes the connection only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    linkContactAsRelatedPerson: (variables: T.LinkContactAsRelatedPersonMutationVariables, options?: IdempotentRequestOptions): Promise<T.LinkContactAsRelatedPersonMutation> =>
      this.request('linkContactAsRelatedPerson', variables, options, { operationType: 'mutation' }),
    /**
     * A contact's activity timeline (calls, texts, emails, notes, system events), most recent first. Filter with activityTypes (e.g. [CALL, TEXT, EMAIL]) and direction (INBOUND/OUTBOUND); page with limit/offset (default 25, max 50). Each entry inlines its call/text/email/note payload: notes and texts in full, calls with their summary, emails with BOTH `snippet` (a short preview) and `textExtract` (the FULL plain-text body). Read textExtract, not snippet, whenever the question is whether something appears in the history: a detail past the preview's first lines would wrongly look absent. textExtract is NULL on the ~3% of emails that arrived HTML-only, whose body this op cannot read AT ALL: null means UNREAD, not empty. Never conclude such an email lacks what you look for; say which emails you could not read and send the user to the contact's timeline in the app. On a NOTE entry, the note's own `author` { kind: USER | AI, id, name } says who wrote it (the entry's `createdByUser` is null for a note an AI assistant wrote for a teammate). An UPDATED_TASK entry carries `metadata.oldValues` (title, endDate, timezone, taskType, participants) plus `newValues.endDate`: THE UNDO PATH for a task edit, the only durable record of a prior value since Task keeps no history. Reverse an edit by writing oldValues back with updateTask; never call a previous value unrecoverable without having looked. Only tasks WITH a contact get one, one per edit, so the oldest holds the pre-change value. The heavier history read: getContact does not include this feed. "Did they call / call back" reads activityTypes [CALL]: texts and notes never answer it. A NOTE is the team's own record, never a message: never quote one as the contact's text or email.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listContactActivities: (variables: T.ListContactActivitiesQueryVariables, options?: RequestOptions): Promise<T.ListContactActivitiesQuery> =>
      this.request('listContactActivities', variables, options, { operationType: 'query' }),
    /**
     * The organization's contact custom-field DEFINITIONS (id, name, type: TEXT/NUMBER/DOLLAR/DATE/LINK/DROPDOWN, dropdown options, allowMultiple, defaultValue). DEFINITIONS ONLY: no contact's value appears here, and none is missing; a contact's answer is getContact `customFields[].values` (updateContact echoes the same shape). Each id is the `customFieldId` for addCustomFieldValues (createContact) / updateCustomFieldValues (updateContact) on one contact, or setContactsCustomField for a DROPDOWN across a selection. Create definitions with createContactCustomField.
     *
     * @remarks Requires the READ scope.
     */
    listContactCustomFields: (options?: RequestOptions): Promise<T.ListContactCustomFieldsQuery> =>
      this.request('listContactCustomFields', undefined, options, { operationType: 'query' }),
    /**
     * The letters sent to one contact by any mail provider, newest first, 20 a page (pass `nextCursor` as `after`): id, campaignLabel, status, preparedAt, mailedAt.
     *
     * @remarks Requires the READ scope.
     */
    listContactDirectMail: (variables: T.ListContactDirectMailQueryVariables, options?: RequestOptions): Promise<T.ListContactDirectMailQuery> =>
      this.request('listContactDirectMail', variables, options, { operationType: 'query' }),
    /**
     * List the saved contact filters VISIBLE to the key owner; run one with filterContacts, delete one with deleteContactFilter. Rows are metadata plus `criteriaSummary`, the conditions in one line: answer what a filter does from it; getFilter `root` is the whole tree. Create one with saveFilter (a properties op; pass type: CONTACT). Every row carries `userId` (the OWNER) and `createdAt`. READ `userId` BEFORE ANY WRITE: the list is every SHARED filter in the organization, whoever made it, plus your own private ones (`isPrivate: true`). A row whose `userId` is not the key owner's is a TEAMMATE'S filter, and updateFilter / deleteContactFilter will write to it when the key owner is an org admin. The key owner's id is getMyProfile `currentUser.id`; name a teammate's id with getTeammatesByIds, not listTeammates. When a filter is someone else's, say whose before changing or deleting it.
     *
     * @remarks Requires the READ scope.
     */
    listContactFilters: (options?: RequestOptions): Promise<T.ListContactFiltersQuery> =>
      this.request('listContactFilters', undefined, options, { operationType: 'query' }),
    /**
     * A contact's pending suggestion cards, newest first: what each proposes (`action`: a text or email reply and its words, a note, a task, a booking, a fix to the record), with how sure it is. dirtyAt set means the conversation moved on since it was written. The ids the suggestion ops below take.
     *
     * @remarks Requires the READ scope.
     */
    listContactSuggestions: (variables: T.ListContactSuggestionsQueryVariables, options?: RequestOptions): Promise<T.ListContactSuggestionsQuery> =>
      this.request('listContactSuggestions', variables, options, { operationType: 'query' }),
    /**
     * Who opted out of texts (texted STOP, unsubscribed, carrier opt-out, blocked by a teammate), newest first: source, optedOutAt, reason, phoneNumber and the contacts you can see carrying it. Numbers no contact you see carries are never listed. Undeliverable numbers excluded.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listSmsOptOuts: (variables?: T.ListSmsOptOutsQueryVariables, options?: RequestOptions): Promise<T.ListSmsOptOutsQuery> =>
      this.request('listSmsOptOuts', variables, options, { operationType: 'query' }),
    /**
     * Lowercase every capitalised email on these contacts (≤500; the ids findContactDataProblems problem EMAIL_NOT_LOWERCASE lists), in place: changedEmails, changedContacts, left (the contact already holds the lowercase copy).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    lowercaseContactEmails: (variables: T.LowercaseContactEmailsMutationVariables, options?: IdempotentRequestOptions): Promise<T.LowercaseContactEmailsMutation> =>
      this.request('lowercaseContactEmails', variables, options, { operationType: 'mutation' }),
    /**
     * Close a card the person already handled themselves (they sent the text, made the task): it is marked done WITHOUT running its action, and the reply's paired cards stay pending.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    markContactSuggestionHandled: (variables: T.MarkContactSuggestionHandledMutationVariables, options?: IdempotentRequestOptions): Promise<T.MarkContactSuggestionHandledMutation> =>
      this.request('markContactSuggestionHandled', variables, options, { operationType: 'mutation' }),
    /**
     * Merge duplicate contacts into one survivor. contactIds: the full set (2+); primaryContactId MUST be one of them; it keeps its custom fields and agent, absorbing the others’ notes, tags, activities, campaign slots. name: its display name; optional pointPersonUserId picks the surviving agent. Returns the survivor. Losers are retired permanently: find them with findDuplicateContactGroups or findContacts. Delegate it with approvedIrreversible and bulkChange (count and contactIds: every contact merged; summary: the one kept); that card is the one yes.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    mergeContacts: (variables: T.MergeContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.MergeContactsMutation> =>
      this.request('mergeContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Pause AI on one contact. mode ALL: no AI employee runs, and workflow AI employee steps that come due are skipped, not deferred; MESSAGES: runs go on but no AI text, email or Slack message is suggested or sent; DRAFTS (AI off): runs and suggestions go on, every AI text, email or contract waits for a person as a card, AI calls are refused, and pausedUntil is refused. A future pausedUntil ends it on its own; null lasts until resumeContactAi. Not Do Not Contact: people can still reach them.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    pauseContactAi: (variables: T.PauseContactAiMutationVariables, options?: IdempotentRequestOptions): Promise<T.PauseContactAiMutation> =>
      this.request('pauseContactAi', variables, options, { operationType: 'mutation' }),
    /**
     * pauseContactAi (same mode and pausedUntil) for many contacts, as a bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    pauseContactsAi: (variables: T.PauseContactsAiMutationVariables, options?: IdempotentRequestOptions): Promise<T.PauseContactsAiMutation> =>
      this.request('pauseContactsAi', variables, options, { operationType: 'mutation' }),
    /**
     * Remove a contact link, for good.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeContactExternalLink: (variables: T.RemoveContactExternalLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveContactExternalLinkMutation> =>
      this.request('removeContactExternalLink', variables, options, { operationType: 'mutation' }),
    /**
     * Take files off a contact's Files & Photos by file id (a Library filing's `uploadedFileId`, or a `files[].id`), as the Files card's delete does. Returns the files the contact still has.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeContactFiles: (variables: T.RemoveContactFilesMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveContactFilesMutation> =>
      this.request('removeContactFiles', variables, options, { operationType: 'mutation' }),
    /**
     * Take contacts OFF one or more lists by list id: the removal twin of addContactsToList and the undo for a bulk add. The list survives with the rest of its members; deleteContactLists is the destructive one. Async bulk job: returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. A contact not on the list is skipped, not failed. LIST ids only: a tag or custom-field id is refused at the gateway rather than silently dropped mid-job. POTENTIALLY OUTBOUND like the add side: removal publishes a tags-changed event that can trigger a CONTACT workflow. Needs their yes (Ask Goliath: bulk card).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeContactsFromList: (variables: T.RemoveContactsFromListMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveContactsFromListMutation> =>
      this.request('removeContactsFromList', variables, options, { operationType: 'mutation' }),
    /**
     * Strip tags (tag ids from searchContactTags) off contacts: the removal twin of addContactTags, and the undo for a bulk tag that leaves the tag definition alone. The tag survives and stays on every contact you did not name; deleteContactTags is the destructive org-wide one. Async bulk job: returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. Only FREE-FORM tag ids do anything: a list or custom-field id is IGNORED, not rejected, so the task completes having removed nothing. Take ids from searchContactTags `tags` (not `lists`); drop list membership with removeContactsFromList. A contact without the tag is skipped, not failed. POTENTIALLY OUTBOUND, like the add side: removal publishes a tags-changed event carrying removeTagIds, and a CONTACT workflow whose tag trigger is EXCLUSIVE ("tag removed") matches it and can send. Check the org’s workflows or confirm with the user before sweeping a large selection.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeContactTags: (variables: T.RemoveContactTagsMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveContactTagsMutation> =>
      this.request('removeContactTags', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a contact LIST in place (listId from searchContactTags `lists`): "rename Hot Leads to Priority Sellers". THIS IS THE CORRECT WAY TO FIX A LIST NAME: deleteContactLists plus createContactList is irreversible and drops every membership, while a rename keeps the id, so members and every saved filter and workflow pointing at the list are untouched. Applied synchronously; returns the org list catalog with the new name. LIST ids only: a free-form tag or custom-field id is refused at the gateway (renameContactTag / updateContactCustomField). The name must be non-empty, at most 100 characters, and unique among the organization's lists, or it is rejected. Only the label changes: membership is not moved, merged or re-evaluated.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameContactList: (variables: T.RenameContactListMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameContactListMutation> =>
      this.request('renameContactList', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a FREE-FORM contact tag in place (tagId from searchContactTags `tags`). THIS IS THE CORRECT WAY TO FIX A TAG NAME: deleteContactTags plus createContactTag is irreversible and drops the tag off every contact, while a rename keeps the id, so every contact, saved filter and workflow referencing it still points at it. Applied synchronously; returns the org tag catalog with the new name. FREE-FORM TAGS ONLY: a LIST id is refused (renameContactList) and so is a custom-field id (updateContactCustomField). Names are unique in the organization, case- and whitespace-insensitively, so renaming onto an existing tag's name, or the tag's own current name, is rejected, as is a name a custom field holds. A rename does not merge tags: to consolidate, tag the contacts with the survivor first, then delete the loser.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameContactTag: (variables: T.RenameContactTagMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameContactTagMutation> =>
      this.request('renameContactTag', variables, options, { operationType: 'mutation' }),
    /**
     * Set the DISPLAY ORDER of the organization's contact custom fields. Presentation only (where fields sit on the record and in the app's field lists): no definition, option or recorded value is touched, and filtering and automations are unchanged. Pass EVERY custom-field id the organization has, in display order (first id = first position): call listContactCustomFields immediately before, reorder that complete list, send all of it. A partial list is rejected for the ids it left out, an id that is not a current custom field as unknown, and a repeated id naming the repeat: every field appears exactly once. It cannot reorder a subset.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderContactCustomFields: (variables: T.ReorderContactCustomFieldsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderContactCustomFieldsMutation> =>
      this.request('reorderContactCustomFields', variables, options, { operationType: 'mutation' }),
    /**
     * Ask the mail provider to cancel one letter (listContactDirectMail id). contactId must be the contact the letter is on: the `id` getContact returns, which differs from a merged-away id (this write does not follow merges). It reads Canceled only once the provider confirms; asking again returns the same open request. Refused once the provider is producing or mailing it. Needs permission to manage workflows and mail.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    requestDirectMailCancellation: (variables: T.RequestDirectMailCancellationMutationVariables, options?: IdempotentRequestOptions): Promise<T.RequestDirectMailCancellationMutation> =>
      this.request('requestDirectMailCancellation', variables, options, { operationType: 'mutation' }),
    /**
     * Turn AI back on for one contact (a contact with no pause is a no-op); its AI employees can text and email it again. No card when AI is already on or a person paused it; lifting a pause an AI employee, a workflow or a named job set asks on the card (approvedLive).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resumeContactAi: (variables: T.ResumeContactAiMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResumeContactAiMutation> =>
      this.request('resumeContactAi', variables, options, { operationType: 'mutation' }),
    /**
     * resumeContactAi for many contacts, as a bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resumeContactsAi: (variables: T.ResumeContactsAiMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResumeContactsAiMutation> =>
      this.request('resumeContactsAi', variables, options, { operationType: 'mutation' }),
    /**
     * Search contact tags and lists. `tags` are free-form TAGS; `lists`, `uploadTags` and `exportTags` are LISTS (the last two from imports and exports), each with `folderId` (listFilterFolders). Neither kind accepts the other’s ids. "The X list" may be either kind: an exact name wins, else offer both kinds and never pick. A tag id feeds updateContact addTagIds/removeTagIds or addContactTags/removeContactTags (renameContactTag/deleteContactTags maintain it); a list id feeds addToListIds/removeFromListIds or addContactsToList/removeContactsFromList (renameContactList/deleteContactLists).
     *
     * @remarks Requires the READ scope.
     */
    searchContactTags: (variables: T.SearchContactTagsQueryVariables, options?: RequestOptions): Promise<T.SearchContactTagsQuery> =>
      this.request('searchContactTags', variables, options, { operationType: 'query' }),
    /**
     * Contacts by what was SAID on calls, notes, texts or emails. Pass the clues as a sentence; verify each clue in the top ones' history before naming anyone.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 10.
     */
    searchInteractions: (variables: T.SearchInteractionsQueryVariables, options?: RequestOptions): Promise<T.SearchInteractionsQuery> =>
      this.request('searchInteractions', variables, options, { operationType: 'query' }),
    /**
     * Take cards out of an import's bulk review: they stay pending on each contact's own card. Nothing is decided or spent. Returns setAside and unresolvedIds.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setAsideContactSuggestions: (variables: T.SetAsideContactSuggestionsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetAsideContactSuggestionsMutation> =>
      this.request('setAsideContactSuggestions', variables, options, { operationType: 'mutation' }),
    /**
     * Show fields only when one dropdown is any of optionIds (that dropdown's option ids), replacing each field's rule (read it first: getContactFieldVisibility); optionIds empty = always show. Display only: no value changes.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setContactCustomFieldVisibility: (variables: T.SetContactCustomFieldVisibilityMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetContactCustomFieldVisibilityMutation> =>
      this.request('setContactCustomFieldVisibility', variables, options, { operationType: 'mutation' }),
    /**
     * Mark a contact Do Not Contact (optional reason): every text, email and call to it is blocked, its workflow runs stop for good and its AI employees come off. This API cannot clear it; it is cleared on the contact page in the app. Use the id getContact returns (a merged-away id writes the retired record). Confirm first. A card counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setContactDoNotContact: (variables: T.SetContactDoNotContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetContactDoNotContactMutation> =>
      this.request('setContactDoNotContact', variables, options, { operationType: 'mutation' }),
    /**
     * Set a contact's photo (shown instead of initials) from an image already on it: a texted one (getTextThreadMessages `mediaFiles[].id`) or a `files[].id`. JPEG, PNG, GIF or WebP.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setContactPhoto: (variables: T.SetContactPhotoMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetContactPhotoMutation> =>
      this.request('setContactPhoto', variables, options, { operationType: 'mutation' }),
    /**
     * Set ONE DROPDOWN custom field to the same value across a selection of contacts: the bulk form of updateContact’s updateCustomFieldValues. customFieldId from listContactCustomFields; read the result per contact with getContact (`customFields[].values.dropdownSelectedValues`). Async bulk job: returns a bulkTaskId to poll with getBulkTask, so an immediate read-back will not show the change. DROPDOWN FIELDS ONLY: dropdownSelectedValues is its only value channel, so a TEXT / NUMBER / DOLLAR / DATE / LINK field cannot be written here (use updateContact per contact). Values are option LABELS (matched case-insensitively, stored as the canonical label), NOT ids: an id or any string not among the options is refused. It REPLACES each contact’s selection rather than adding, so send every option the contact should end up with; an EMPTY array CLEARS the field on every selected contact. More than one value needs `allowMultiple`. WHERE REFUSALS LAND: only the id checks run before the response (a field id not among your organization’s custom fields is a 403). Everything else (not a DROPDOWN, an unknown label, several values on a single-select field) is checked by the worker, so the call returns 200 with a bulkTaskId and the failure shows as `status: FAILED` on getBulkTask with NOTHING written. A 200 means "queued", never "applied": poll the task before reporting the change. POTENTIALLY OUTBOUND: each contact goes through the normal contact-update path, so contact-mutation events fire and a CONTACT workflow triggered on this field can start a run and send.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setContactsCustomField: (variables: T.SetContactsCustomFieldMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetContactsCustomFieldMutation> =>
      this.request('setContactsCustomField', variables, options, { operationType: 'mutation' }),
    /**
     * Put contacts on teams (addTeamIds, from listTeams) and take them off (removeTeamIds); replaceExisting makes addTeamIds the exact set. addTeamIds is required: pass [] to only take them off. A bulk task (bulkTaskId, getBulkTask).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setContactsTeams: (variables: T.SetContactsTeamsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetContactsTeamsMutation> =>
      this.request('setContactsTeams', variables, options, { operationType: 'mutation' }),
    /**
     * Opt one phone number out of texts AND calls for the whole organization, on every contact that carries it (suppressChannel does one medium). Sets only: it cannot be undone from chat or this API; only a person in the app can clear it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setPhoneDoNotContact: (variables: T.SetPhoneDoNotContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetPhoneDoNotContactMutation> =>
      this.request('setPhoneDoNotContact', variables, options, { operationType: 'mutation' }),
    /**
     * shareContactWithPartner for many contacts (contactIds), as a bulk task (bulkTaskId, getBulkTask). partnerOrganizationId from listPartnerships; assignments name the PARTNER org users who get it (userId, role POINT_PERSON | PARTICIPANT). include* choose what is copied (core, notes, calls, texts default true; tasks false).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    shareContactsWithPartner: (variables: T.ShareContactsWithPartnerMutationVariables, options?: IdempotentRequestOptions): Promise<T.ShareContactsWithPartnerMutation> =>
      this.request('shareContactsWithPartner', variables, options, { operationType: 'mutation' }),
    /**
     * Share one contact with a partner organization, the contact page's Share: the partner gets its own copy. partnerOrganizationId from listPartnerships; assignments name the PARTNER org users who get it (userId, role POINT_PERSON | PARTICIPANT). include* choose what is copied (core, notes, calls, texts default true; tasks false). unshareContactWithPartner takes it back.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    shareContactWithPartner: (variables: T.ShareContactWithPartnerMutationVariables, options?: IdempotentRequestOptions): Promise<T.ShareContactWithPartnerMutation> =>
      this.request('shareContactWithPartner', variables, options, { operationType: 'mutation' }),
    /**
     * Restore archived contacts by id: the undo for archiveContacts. Async bulk job: returns a bulkTaskId to poll with getBulkTask, so an immediate read-back will not yet show them active. A contact that is not archived is skipped, not failed. Find ids with findContacts (archived contacts included, marked `isArchived`) or filterContacts. mergeContacts RETIRES its losers rather than archiving them: no read finds them, this cannot restore them, and a merge has no undo. Check how a contact went missing before offering restore.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unarchiveContacts: (variables: T.UnarchiveContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnarchiveContactsMutation> =>
      this.request('unarchiveContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Take teammates OFF contacts: the removal twin of assignContact, and the offboarding op. userIds is a LIST, so one call clears several teammates from the selection; each is removed from every selected contact whatever their role (POINT_PERSON or PARTICIPANT), so this does not demote anyone (re-assign with assignContact(role: PARTICIPANT) for that). A user not on a contact is skipped, not failed. Async bulk job: returns a bulkTaskId to poll with getBulkTask; an immediate read-back will not show the change. It hands the work to nobody, with ONE exception you must not report as a general rule: if EXACTLY ONE assignee is left and they are a PARTICIPANT, they are promoted to POINT_PERSON on that contact. Any other shape (nobody left, or two or more) leaves no point person, so the contact drops out of the removed teammate’s queue without entering anyone else’s. Because the outcome differs per contact, do not say who owns what until you have re-read the contacts (getContact `participants`); for a deliberate hand-off, follow with assignContact for the new owner rather than rely on the promotion.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unassignContact: (variables: T.UnassignContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnassignContactMutation> =>
      this.request('unassignContact', variables, options, { operationType: 'mutation' }),
    /**
     * Disconnect a related person (linkedRelationships id), for good. Both contacts stay.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unlinkRelatedContact: (variables: T.UnlinkRelatedContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnlinkRelatedContactMutation> =>
      this.request('unlinkRelatedContact', variables, options, { operationType: 'mutation' }),
    /**
     * Stop sharing a contact with a partner organization: the partner's users lose access to their copy (revokedUsersCount), and sharing it again makes them a new one, never theirs back. Asks by the person's Delete for good trust.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unshareContactWithPartner: (variables: T.UnshareContactWithPartnerMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnshareContactWithPartnerMutation> =>
      this.request('unshareContactWithPartner', variables, options, { operationType: 'mutation' }),
    /**
     * Update a contact by contactId: the general-purpose per-contact write. All of it, contactId too, is one `input` variable the docs cannot expand, so this list is the contract. Identity: `name`, `isArchived` (false RESTORES one archived contact; unarchiveContacts for many), `importantNote` (the record's important-note field, not a timeline note: addContactNote writes those, changeNotePinned pins one). Channels: addPhoneNumbers (verificationStatus: UNVERIFIED unless the person was reached on it) / updatePhoneNumbers / removePhoneNumbers (updatePhoneNumbers sets only verificationStatus, phoneType, note, ranking: a new number is remove-then-add; a US number is stored as 10 digits and formatted for display, so reformatting needs no write), addEmails / updateEmails / removeEmails, addMailingAddresses / updateMailingAddresses / removeMailingAddresses (their home or mailing address: "lives at X, not Y" replaces it here, never as a property; an edit is remove-then-add; removeMailingAddresses takes the MAPPING-row id from mailingAddresses[].id, not an address id). Subject properties: addProperties / updateProperties / removeProperties, how "add 123 Oak St to this contact" is done; addProperties takes a propertyId from findProperties/getProperty plus a verificationStatus. Relatives: `subContacts` (upsert; omit the id to create) and removeSubContacts. Custom fields: updateCustomFieldValues, each { contactId, customFieldId, exactly ONE of textValue / numberValue / dateValue / dropdownSelectedValues per the field type (getContact shows the per-type read-back); dropdownSelectedValues takes the option LABELS (an option id is read as its label), and a value the field has no option for is refused with the field options listed }; the response echoes `customFields` so you can confirm the value landed. Files: deleteFileIds (detaches by UploadedFile id). Tags, lists, teammates, teams: addTagIds/removeTagIds, addToListIds/removeFromListIds, addCollaborators/removeCollaborators, addUserGroupIds/removeUserGroupIds. Synchronous; returns the contact. Omitted fields are untouched; each add*\/remove* pair is a delta, not a replacement. For MANY contacts use the bulk ops (addContactTags/removeContactTags, addContactsToList/removeContactsFromList, assignContact/unassignContact, archiveContacts/unarchiveContacts), which are async and return a bulkTaskId.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateContact: (variables: T.UpdateContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateContactMutation> =>
      this.request('updateContact', variables, options, { operationType: 'mutation' }),
    /**
     * Edit a contact custom-field DEFINITION in place (id from listContactCustomFields). THIS IS THE CORRECT WAY TO FIX A FIELD created with the wrong name, description, dropdown options or default; do not create a second field. Every field but the id is optional; omitted ones are untouched. `type` retypes it in place (same id), sent alone or with the `options` of a new DROPDOWN; refused once a contact has a value, anything uses it, it has a default, or it is a dropdown. `options` is for DROPDOWN fields ONLY (rejected on any other type) and REPLACES the whole option list: send every option to keep, each existing one as { id, label } (its id from listContactCustomFields, which keeps contact values recorded against it and lets you RENAME it by changing the label), each new one as { label } with no id. An existing option you leave out is REMOVED; if contacts, filters or workflows still reference it the call is rejected until you pass optionDependencyResolutions: call getDeletionImpact with targetKind CONTACT_CUSTOM_FIELD_OPTION and targetId the option id, then hand back its impactVersion plus a replacement option for each. Changing `defaultValue` fills contacts that show no value; a contact holding a real value is never rewritten. A default no longer among the options is cleared. Names are unique in the organization: a rename onto an existing field name is rejected. System-defined fields (e.g. Buyer/Seller, Source) cannot be renamed, deleted or lose their built-in options; `hideOnContactRecord: true` takes any field, system ones too, off the contact record (display only, values kept).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateContactCustomField: (variables: T.UpdateContactCustomFieldMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateContactCustomFieldMutation> =>
      this.request('updateContactCustomField', variables, options, { operationType: 'mutation' }),
    /**
     * Change a contact link's title or URL (an omitted one is kept).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateContactExternalLink: (variables: T.UpdateContactExternalLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateContactExternalLinkMutation> =>
      this.request('updateContactExternalLink', variables, options, { operationType: 'mutation' }),
    /**
     * Set the relation label and note on a related person (getContactConnections linkedRelationships id). Both are written, so an omitted one is cleared: send the current note to keep it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateContactRelationship: (variables: T.UpdateContactRelationshipMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateContactRelationshipMutation> =>
      this.request('updateContactRelationship', variables, options, { operationType: 'mutation' }),
  }

  readonly contracts = {
    /**
     * Take a template out of the list and the pickers (status ARCHIVED). Contracts already sent from it are not changed, but they leave the Contracts list with it for its Archived view, so tell the person how many went out first (listContractTemplates). Undo with unarchiveContractTemplate. A one-off PDF (sent without a template) is discarded for good instead. Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    archiveContractTemplate: (variables: T.ArchiveContractTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.ArchiveContractTemplateMutation> =>
      this.request('archiveContractTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * Retry completing a contract whose last signature is in (sealing the signed PDF), or file and email a completed contract's signed copy to everyone again. Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    completeContract: (variables: T.CompleteContractMutationVariables, options?: IdempotentRequestOptions): Promise<T.CompleteContractMutation> =>
      this.request('completeContract', variables, options, { operationType: 'mutation' }),
    /**
     * Correct a sent contract on the same template version, contact and deal: `input.contract` as prepareContract takes it with the changes, `reason` (emailed to the signers whose link stops working, and kept on the evidence chain), `expectedRevisionNumber` (getContract's revisionNumber; a correction since refuses this one), `expectedSignatureCount` (how many had signed; a signature since refuses it) and `idempotencyKey` (a new UUID, resent unchanged on a retry). Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    correctContract: (variables: T.CorrectContractMutationVariables, options?: IdempotentRequestOptions): Promise<T.CorrectContractMutation> =>
      this.request('correctContract', variables, options, { operationType: 'mutation' }),
    /**
     * One contract: its values, each signer's status (viewed, signed, declined with their reason, a deliveryProblem when their link never arrived) and short-lived PDF links (`signedPdfUrl` once everyone signed). READY means prepared but not sent. Send, Remind, Correct and Void are buttons on `/contracts/<id>` (and, for a developer-API key, sendContract, remindContract, correctContract, voidContract).
     *
     * @remarks Requires the READ scope.
     */
    getContract: (variables: T.GetContractQueryVariables, options?: RequestOptions): Promise<T.GetContractQuery> =>
      this.request('getContract', variables, options, { operationType: 'query' }),
    /**
     * Step 1 of preparing a contract: a PUBLISHED template filled for one contact (optionally a deal, and contactBId for a co-seller). Returns the template version, the CRM-filled `values` (a `required` one left blank needs a value: their words or ask, never an invented price, date or address), `missingTokens`, one suggested recipient per role, and the subject, message and expiry. Needs the manage contracts capability. Then prepareContract.
     *
     * @remarks Requires the READ scope.
     */
    getContractSendDraft: (variables: T.GetContractSendDraftQueryVariables, options?: RequestOptions): Promise<T.GetContractSendDraftQuery> =>
      this.request('getContractSendDraft', variables, options, { operationType: 'query' }),
    /**
     * A held contract (a workflow or AI employee send stopped on a blank required value) reopened to fill in, shaped as getContractSendDraft. Prepare it with prepareContract and `heldContractId` set. Needs the manage contracts capability.
     *
     * @remarks Requires the READ scope.
     */
    getHeldContractDraft: (variables: T.GetHeldContractDraftQueryVariables, options?: RequestOptions): Promise<T.GetHeldContractDraftQuery> =>
      this.request('getHeldContractDraft', variables, options, { operationType: 'query' }),
    /**
     * A working signing link for ONE signer whose turn it is (`recipientId`: getContract's recipients[].id), returned once for you to pass to that signer yourself. Nothing is emailed, and the emailed link keeps working; remindContract or voidContract retires both. Opening it still asks for the code we email the signer. Never for the key owner's own signature (they sign in the app). Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    issueContractSigningLink: (variables: T.IssueContractSigningLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.IssueContractSigningLinkMutation> =>
      this.request('issueContractSigningLink', variables, options, { operationType: 'mutation' }),
    /**
     * Keep a one-off contract as a template under a name and category: it joins the template list and pickers. templateId is the contract's own (listContracts, listContactContracts, listDealContracts). One-way.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    keepContractAsTemplate: (variables: T.KeepContractAsTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.KeepContractAsTemplateMutation> =>
      this.request('keepContractAsTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * A contact's contracts (as Contact A or another signer), newest first, at most 50.
     *
     * @remarks Requires the READ scope.
     */
    listContactContracts: (variables: T.ListContactContractsQueryVariables, options?: RequestOptions): Promise<T.ListContactContractsQuery> =>
      this.request('listContactContracts', variables, options, { operationType: 'query' }),
    /**
     * The organization's contracts, newest first (at most 200), with status and who signed. `held` marks a workflow or AI employee send waiting on a blank required value (getHeldContractDraft).
     *
     * @remarks Requires the READ scope.
     */
    listContracts: (options?: RequestOptions): Promise<T.ListContractsQuery> =>
      this.request('listContracts', undefined, options, { operationType: 'query' }),
    /**
     * The organization's contract templates: name, category, status (only a PUBLISHED one with a currentVersionNumber can be sent), signer roles in signing order, and the records a send asks for (`uses`: Contact A, Contact B, Deal, Property), and how many contracts went out from it (`sentCount`) and came back signed (`signedCount`). Archived ones only with includeArchived.
     *
     * @remarks Requires the READ scope.
     */
    listContractTemplates: (variables?: T.ListContractTemplatesQueryVariables, options?: RequestOptions): Promise<T.ListContractTemplatesQuery> =>
      this.request('listContractTemplates', variables, options, { operationType: 'query' }),
    /**
     * A deal's contracts, held drafts included, newest first, at most 50.
     *
     * @remarks Requires the READ scope.
     */
    listDealContracts: (variables: T.ListDealContractsQueryVariables, options?: RequestOptions): Promise<T.ListDealContractsQuery> =>
      this.request('listDealContracts', variables, options, { operationType: 'query' }),
    /**
     * Step 2: freeze a contract READY to send, with its unsigned PDF. Build `input.contract` from getContractSendDraft's result (change what the person asked): `values` as { key, value } for every value to set, required blanks included; one recipient per role with exactly one of email or phone. Pass `idempotencyKey` (a new UUID) and resend it unchanged on a retry, so a lost response never makes a second contract. A template published again since step 1 is refused: start over. Needs the manage contracts capability. It reaches no signer: the person presses Send on `/contracts/<id>`, or a developer-API key calls sendContract.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    prepareContract: (variables: T.PrepareContractMutationVariables, options?: IdempotentRequestOptions): Promise<T.PrepareContractMutation> =>
      this.request('prepareContract', variables, options, { operationType: 'mutation' }),
    /**
     * The filled PDF a contract would be (`pdfUrl`, short-lived) and any values that overflow their box or cannot print. Takes what prepareContract takes as `input.contract`. Nothing is saved.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    previewContract: (variables: T.PreviewContractMutationVariables, options?: IdempotentRequestOptions): Promise<T.PreviewContractMutation> =>
      this.request('previewContract', variables, options, { operationType: 'mutation' }),
    /**
     * What the first signers would be sent: the signing email's words (`email`) and the text (`text`), each null when no first signer is reached that way, worded by the send's own code. Takes what prepareContract takes as `input.contract`. Nothing is saved or sent.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    previewContractMessages: (variables: T.PreviewContractMessagesMutationVariables, options?: IdempotentRequestOptions): Promise<T.PreviewContractMessagesMutation> =>
      this.request('previewContractMessages', variables, options, { operationType: 'mutation' }),
    /**
     * Email a fresh link to every signer whose turn it is; their earlier links stop working. `expectedRevisionNumber` as sendContract. Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    remindContract: (variables: T.RemindContractMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemindContractMutation> =>
      this.request('remindContract', variables, options, { operationType: 'mutation' }),
    /**
     * Send a READY contract (prepareContract) for signature: the first signers in signing order get their links by email or text, and it becomes SENT. Confirm the contract and its signers with the person first (getContract). `expectedRevisionNumber` (getContract's revisionNumber) refuses the send if it was corrected since. Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    sendContract: (variables: T.SendContractMutationVariables, options?: IdempotentRequestOptions): Promise<T.SendContractMutation> =>
      this.request('sendContract', variables, options, { operationType: 'mutation' }),
    /**
     * Put an archived template back in the list and the pickers, as it was. A discarded one-off PDF is refused. Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unarchiveContractTemplate: (variables: T.UnarchiveContractTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnarchiveContractTemplateMutation> =>
      this.request('unarchiveContractTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * Void a sent contract: every signing link stops working and the signers who were sent one are told, with `reason` (kept on the evidence chain). It cannot be un-voided; to go on, prepare a new one. Only on the person’s word. `expectedRevisionNumber` as sendContract. Needs the manage contracts capability.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    voidContract: (variables: T.VoidContractMutationVariables, options?: IdempotentRequestOptions): Promise<T.VoidContractMutation> =>
      this.request('voidContract', variables, options, { operationType: 'mutation' }),
  }

  readonly conversations = {
    /**
     * Dismiss one inbox row, the app inbox's Dismiss: it is hidden from the inbox of the line or mailbox it belongs to, and listInboxThreads no longer returns it. itemId is the row's id and itemType its type (MESSAGE | CALL | EMAIL); a CALL dismisses that number's whole day of calls, an EMAIL its whole thread. There is NO undo and no view of dismissed rows, in the app or here, so confirm with the user first; to clear an unread badge use markInboxThreadsRead instead. Organization admins only, like the app. A row outside your organization is refused (FORBIDDEN).
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    dismissInboxItem: (variables: T.DismissInboxItemMutationVariables, options?: IdempotentRequestOptions): Promise<T.DismissInboxItemMutation> =>
      this.request('dismissInboxItem', variables, options, { operationType: 'mutation' }),
    /**
     * One call's RECORDING and TRANSCRIPT, plus the outcome logged for it: a time-limited signed audio URL (recordingUrl), the speaker-by-speaker transcript ({ speaker, text, start, end }), the AI summary, the dialer disposition + dispositionNote, direction, status, durationSeconds, createdAt, who handled it (author — a person or an AI employee) and both phone numbers. callId comes from a CALL row in listInboxThreads (its id, or any id in groupedCallIds), or from a CALL entry in listContactActivities. Returns NULL — not an error — when the call has NO RECORDING, when it is not your organization's, or when no such call exists; those three are indistinguishable by design, so a null is not evidence the call did not happen. A call with no recording has no transcript either, and no summary — the summary is enrichment derived from the recording. So for those calls read listContactActivities instead: its CALL entries carry direction, durationSeconds, status, disposition and dispositionNote for every call on a contact, recorded or not, which is the logged OUTCOME even when there is no audio. Reading here has NO side effect — it deliberately does not mark the call seen, so an agent sweeping calls cannot silently clear an operator's unread badges. recordingUrl expires; fetch it when you are about to use it rather than storing it, and re-run this operation to re-sign.
     *
     * @remarks Requires the READ scope.
     */
    getCallRecording: (variables: T.GetCallRecordingQueryVariables, options?: RequestOptions): Promise<T.GetCallRecordingQuery> =>
      this.request('getCallRecording', variables, options, { operationType: 'query' }),
    /**
     * Every message in one email thread, with full plain-text bodies, OLDEST FIRST (ordered by internalDate ascending) — so the latest reply is the LAST element, not the first. Pass the `emailThreadId` from an EMAIL row in listInboxThreads. Each message carries subject, snippet, textExtract, fromEmail/fromName, toEmails, ccEmails, internalDate, direction, isRead, attachment file NAMES, and the campaign name when a workflow sent it. Read textExtract, not snippet, whenever the question is whether something appears in the thread: snippet stops after a line or two. textExtract is NULL on the HTML-only share of emails — for those the body is not readable through this API at all: never conclude their content is absent; say which you could not read. UNPAGINATED: one response holds every message. SCOPE: email is USER-owned, which is NARROWER than the org — a thread in a teammate's UNSHARED mailbox returns an EMPTY LIST even for a team admin, and even for a key owner holding VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES (which widen phones and calls, not mailboxes). One exception: when the thread is one of several mailboxes' threads of ONE conversation, the response is that whole conversation — your own copies from any of its threads, plus copies held by mailboxes shared with your organization, with a each email returned once: a second stored copy of an email already in the response (a teammate's, or one in another of your mailboxes) is left out. So the same conversation comes back whole from EACH of its threads: dedupe by message id when reading several EMAIL rows. An empty list means "nothing here you may read" and collapses three cases on purpose — no such thread, not your mailbox, nothing left in it. It is never an error. Attachment BYTES are not downloadable through this API; only the file names are returned.
     *
     * @remarks Requires the READ scope.
     */
    getEmailThread: (variables: T.GetEmailThreadQueryVariables, options?: RequestOptions): Promise<T.GetEmailThreadQuery> =>
      this.request('getEmailThread', variables, options, { operationType: 'query' }),
    /**
     * The messages of ONE text conversation, with full bodies, newest first by default. Use it to read what was said after listInboxThreads surfaced a MESSAGE row (it carries only the latest). Identify the thread by `contactPhoneNumber` (required, E.164: the row's contactE164PhoneNumber) and, when you have it, `conversationId` (the MESSAGE row's id), which resolves the thread exactly. Without a conversationId a contact reachable on several org lines resolves to one of them arbitrarily; pass `phoneLineId` to pin the line instead. Page with limit/offset (default 50, max 100); a full page means more may remain. Each message carries message (the body), direction, status, createdAt (UTC; quote createdAtLocal), from/toPhoneNumber, errorCode/errorMessage when a send failed, and `author` — who sent it, a person or an AI employee; `fromSuggestion`: sent from an AI employee's card. `author` is null on every INBOUND message: the words are the contact's. Returns an EMPTY LIST, never an error, when no conversation on that number is visible to the key owner — and "no such conversation" and "that conversation is a teammate's, and you may not read teammates" are deliberately indistinguishable, so an empty result is not proof the contact never texted. listContactTextThreads lists a contact's lines. `mediaFiles`: MMS attachments by id and name.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    getTextThreadMessages: (variables: T.GetTextThreadMessagesQueryVariables, options?: RequestOptions): Promise<T.GetTextThreadMessagesQuery> =>
      this.request('getTextThreadMessages', variables, options, { operationType: 'query' }),
    /**
     * Every text thread ONE contact has, across the org lines the key owner may see. A slim index — ids and phone numbers, NO message bodies: each entry is { id (the conversationId), contactE164PhoneNumber, phoneLineId, twilioPhoneNumberE164 (the line that carries it) }. Its job is to disambiguate before you read: a contact texted on two different lines has two threads, and getTextThreadMessages needs to be told which. Unpaginated — a contact has a handful of threads, not a feed. An EMPTY LIST means this contact has no text threads on any line you can see, which is a real answer about the contact. It is NOT how a foreign contact reads: a contactId outside your organization is REFUSED (403 forbidden), never answered with an empty list, so you can always tell "no texts" from "not your contact". Bodies come from getTextThreadMessages, or from listContactActivities with activityTypes: [TEXT] when you want texts inline with the rest of the timeline.
     *
     * @remarks Requires the READ scope.
     */
    listContactTextThreads: (variables: T.ListContactTextThreadsQueryVariables, options?: RequestOptions): Promise<T.ListContactTextThreadsQuery> =>
      this.request('listContactTextThreads', variables, options, { operationType: 'query' }),
    /**
     * The inbox: text conversations, calls and email threads in ONE most-recent-first feed, the read for questions that name no contact ("did they text back", "what is unread"; listContactActivities needs a contactId). Each row carries the channel in `type` (MESSAGE | CALL | EMAIL) and only the fields that channel has: a MESSAGE row carries mostRecentMessage (with its full body) + replySentiment; a CALL row carries status/durationSeconds/summary/hasRecording and, for a grouped day of calls, groupCount + groupedCallIds; an EMAIL row carries subject/snippet/fromEmail/toEmails/direction (of its latest message) + emailThreadId. Quote `createdAtLocal`; never convert a UTC time yourself. Rows are PREVIEWS; a MESSAGE row's recentInbound holds the contact's newest texts (up to 3), which a later send hides from mostRecentMessage. To read a whole conversation, follow the id: a MESSAGE row's id is the conversationId for getTextThreadMessages, an EMAIL row's emailThreadId is the threadId for getEmailThread, and a CALL row (or an id from groupedCallIds) goes to getCallRecording. WHO THE CONTACT IS: on MESSAGE and CALL rows `potentialContacts` (`{ id, name }`) lists the contacts on that number — one entry names the contact; several mean the number is shared, so name them all or open the thread rather than picking the first; empty means none matches. `contactName` is caller-ID only, set for an unmatched inbound CALL, and is null on every text row, so a null `contactName` never means the contact is unknown. No `channel` reads all three channels in ONE call. FILTERS: `seen: false` is unread (one flag across all three channels — a text conversation's seen, a call's seen, an email's isRead); `channel` narrows to CALLS | MESSAGES | EMAILS | MISSED_CALLS | UNRESPONDED | NEEDS_RESPONSE (TEXT threads only: the contact spoke last, less ones a teammate marked handled; for email and calls read EMAILS (INBOUND `direction`: they wrote last) and MISSED_CALLS); `respondedOnly: true` keeps only threads the contact has replied on at least once; `sentBy` keeps threads with an outbound message from HUMAN, AI_EMPLOYEE and/or WORKFLOW (a campaign) — `sentBy: [WORKFLOW], respondedOnly: true` is "who replied to a campaign"; `replySentiments` keeps threads whose most recent inbound reply was classified POSITIVE | NEUTRAL | NEGATIVE | OPT_OUT | UNREACHABLE, and POSITIVE also keeps any thread that replied POSITIVE and has not opted out since; `optedOut` is INCLUDE by default (every row), EXCLUDE leaves out the opted-out text threads the app inbox hides (the contact said stop, the number is SMS-suppressed or the number's contacts are all Do Not Contact, with nothing from them since), and ONLY returns just those. WHICH FILTERS REACH CALLS: setting `respondedOnly` or `replySentiments` drops every CALL row (a call has no reply). `sentBy` DOES filter calls (AI_EMPLOYEE when the call has an AI-employee author, else HUMAN), but no call matches WORKFLOW. `searchTerm` matches message text, an email's subject and latest snippet, and participant names (a term that names a contact reads only their threads); a short page with a cursor left means ask again. `starredOnly: true` keeps only starred rows of any channel (each has isStarred; a MESSAGE row also isNeedsReplyHandled when a teammate marked it handled). PAGING is keyset per channel: pass nextCallCursor/nextSmsCursor/nextEmailCursor back as callCursor/smsCursor/emailCursor, ALL THREE exactly as received (a null one as null: alone it is no finished channel); dropping a non-null cursor restarts that channel and repeats rows. THE FEED IS DONE only when ALL THREE come back null: never stop on an empty page while one remains. limit is per page across the merged feed (default 25, max 50). SCOPE: with no `userIds` this is the KEY OWNER'S OWN inbox (their lines and mailbox, as the app shows them). Naming a teammate in `userIds` reads their inbox only if the key owner holds VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES (a teammate's email only from a mailbox they share); without either the request is REFUSED (an error), which is different from an empty page. An EMPTY list means nothing in your own inbox matched, never that the org has no messages. Teammate ids come from listTeammates.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listInboxThreads: (variables?: T.ListInboxThreadsQueryVariables, options?: RequestOptions): Promise<T.ListInboxThreadsQuery> =>
      this.request('listInboxThreads', variables, options, { operationType: 'query' }),
    /**
     * Mark inbox rows READ (isRead: true) or UNREAD (false), the app inbox's read/unread. Pass the ids per channel, straight from listInboxThreads: a MESSAGE row's id in textConversationIds, a CALL row's id (and every id in its groupedCallIds) in callIds, an EMAIL row's id in emailMessageIds. Omit a list for a channel you are not changing. Returns per channel what changed: smsMutation and callsMutation are row COUNTS, emailMutation lists each email now marked. An id you cannot act on (not yours, or a teammate's without VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES) is skipped, never an error, so a count lower than you sent means some were skipped.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    markInboxThreadsRead: (variables: T.MarkInboxThreadsReadMutationVariables, options?: IdempotentRequestOptions): Promise<T.MarkInboxThreadsReadMutation> =>
      this.request('markInboxThreadsRead', variables, options, { operationType: 'mutation' }),
    /**
     * Mark a TEXT thread HANDLED, the inbox's "no reply needed": it leaves Needs reply (channel NEEDS_RESPONSE) for everyone in the organization until the contact texts again. textConversationId is a MESSAGE row's id; handledThroughMessageId is the newest INBOUND message you read (from getTextThreadMessages), so a reply newer than it keeps the thread in Needs reply. Pass handledThroughMessageId null to put the thread back in Needs reply. Returns false when you cannot act on the thread or the message is not its inbound.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setInboxThreadHandled: (variables: T.SetInboxThreadHandledMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetInboxThreadHandledMutation> =>
      this.request('setInboxThreadHandled', variables, options, { operationType: 'mutation' }),
    /**
     * Star (starred: true) or unstar a TEXT thread for everyone in the organization, so it shows under the inbox's Starred filter (listInboxThreads starredOnly). textConversationId is a MESSAGE row's id. Calls and emails are starred in the app only. Returns false when you cannot act on the thread.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setInboxThreadStarred: (variables: T.SetInboxThreadStarredMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetInboxThreadStarredMutation> =>
      this.request('setInboxThreadStarred', variables, options, { operationType: 'mutation' }),
  }

  readonly coverage = {
    /**
     * Whether each named signal type (a property signal type, e.g. FORECLOSURE or TAX_DELINQUENT) is live across your organization's counties (its markets): LIVE, BUILDING, REQUESTED, NOT_REQUESTED (nobody asked yet) or NO_PRODUCT (we have no coverage for that type). Per type `liveCounties` of `totalCounties`, each county's own status, and `promised` (every county not live holds a promised request: nothing to ask).
     *
     * @remarks Requires the READ scope.
     */
    getCoverageAvailability: (variables: T.GetCoverageAvailabilityQueryVariables, options?: RequestOptions): Promise<T.GetCoverageAvailabilityQuery> =>
      this.request('getCoverageAvailability', variables, options, { operationType: 'query' }),
    /**
     * The Coverage page for a whole state (`stateAbbr`, e.g. TX) or up to 300 named counties (`countyFips`, five digits): one row per county and signal type (FORECLOSURE, PREFORECLOSURE, PROBATE, PREPROBATE, TAX_DELINQUENCY, CODE_VIOLATION). `status`: LIVE, IN_PROGRESS (we are building it; `expectedBy` is the promise on your own request), WAITING_ON_COUNTY (we asked the county for its records), NOT_AVAILABLE (`notAvailableReason`), NOT_REQUESTED. `delayed`: live but its source is failing; `partial`: delivering through a backstop, not live. `delivered30d` counts records in the last 30 days.
     *
     * @remarks Requires the READ scope.
     */
    getCoverageCells: (variables?: T.GetCoverageCellsQueryVariables, options?: RequestOptions): Promise<T.GetCoverageCellsQuery> =>
      this.request('getCoverageCells', variables, options, { operationType: 'query' }),
  }

  readonly crmImport = {
    /**
     * Create-or-get a contact migrated from an external system. Keyed on (sourceSystem, externalId): replaying the same record returns the existing contact with wasCreated=false instead of duplicating. Honors historical createdAt/updatedAt (must be in the past) and suppresses live side effects — no workflow triggers, no notifications, no default assignments. The contact field takes the same shape as createContact.
     *
     * @remarks Requires the IMPORT scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    importContact: (variables: T.ImportContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.ImportContactMutation> =>
      this.request('importContact', variables, options, { operationType: 'mutation' }),
    /**
     * Create-or-get a historical note on a contact, attributed to a real member of the organization (authorUserId). Keyed on (sourceSystem, externalId) — replays return the existing note. Honors historical createdAt so the note interleaves into the timeline at its true position; publishes no notifications. Optional metadata carries structured source-system provenance; the result echoes the STORED metadata, which a replay never overwrites.
     *
     * @remarks Requires the IMPORT scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    importContactNote: (variables: T.ImportContactNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.ImportContactNoteMutation> =>
      this.request('importContactNote', variables, options, { operationType: 'mutation' }),
    /**
     * Create-or-get a deal migrated from an external system. Keyed on (sourceSystem, externalId): replaying the same record returns the existing deal with wasCreated=false instead of duplicating. Honors historical createdAt/updatedAt (must be in the past) and suppresses live side effects — no workflow triggers (neither DEAL stage-entered nor per-contact deal-created events fire), no notifications. The deal field takes the same shape as createDeal: stageId from listPipelineStages, linked contacts/users by id, propertyStrings for unresolved addresses, customFieldValues from listDealCustomFields. The create is atomic — the deal row and every link (contacts, properties, users, splits) commit together or not at all, so a failed call leaves nothing behind and a retry re-creates cleanly. A replay (wasCreated=false) never rewrites the existing deal — links and edits made since the import are left alone — with one deliberate exception: custom-field values are filled where still MISSING (crash-retry recovery for the one write applied after the create) and never overwritten.
     *
     * @remarks Requires the IMPORT scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    importDeal: (variables: T.ImportDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.ImportDealMutation> =>
      this.request('importDeal', variables, options, { operationType: 'mutation' }),
  }

  readonly deals = {
    /**
     * Append a comment to a deal's activity feed, attributed to the API key's owner. Requires a non-empty body (max 10,000 chars). The deal must be in a pipeline owned by or shared with your organization. Returns the created COMMENT event; read the thread back with listDealComments.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addDealComment: (variables: T.AddDealCommentMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddDealCommentMutation> =>
      this.request('addDealComment', variables, options, { operationType: 'mutation' }),
    /**
     * Append ONE option to a DROPDOWN deal custom field (id from listDealCustomFields). Never removes anything, unlike updateDealCustomField whose `options` replace the list; a label already there (any case) is kept as is. Returns the field with its options.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addDealCustomFieldOption: (variables: T.AddDealCustomFieldOptionMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddDealCustomFieldOptionMutation> =>
      this.request('addDealCustomFieldOption', variables, options, { operationType: 'mutation' }),
    /**
     * Add a titled URL to a deal's Links card (getDeal externalLinks). To change one, remove it and add it again.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addDealExternalLink: (variables: T.AddDealExternalLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddDealExternalLinkMutation> =>
      this.request('addDealExternalLink', variables, options, { operationType: 'mutation' }),
    /**
     * Append one or more stages to a pipeline (by pipelineId). Each stage: name (required), plus optional description, order, isTerminal, terminalType (WON|LOST|NEUTRAL), winProbability (0-100). Owner-only: the pipeline must be OWNED by your organization. Returns the pipeline with its full, ordered stage list.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addPipelineStages: (variables: T.AddPipelineStagesMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddPipelineStagesMutation> =>
      this.request('addPipelineStages', variables, options, { operationType: 'mutation' }),
    /**
     * Archive or RESTORE one deal by id (isArchived true or false); archiveDeals archives many. Reversible: archiving takes the deal off the pipeline BOARD and deletes nothing. findDeals finds archived ones with isArchived: true. Archiving triggers no workflow, so it never sends a message. The deal must be in a pipeline owned by or shared with your organization.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    archiveDeal: (variables: T.ArchiveDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.ArchiveDealMutation> =>
      this.request('archiveDeal', variables, options, { operationType: 'mutation' }),
    /**
     * Archive many deals of one pipeline by id (restore with archiveDeal); a whole filter is the board's own select-all Archive. Runs as a background task: follow `bulkTaskId` with getBulkTask.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    archiveDeals: (variables: T.ArchiveDealsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ArchiveDealsMutation> =>
      this.request('archiveDeals', variables, options, { operationType: 'mutation' }),
    /**
     * Attach a CHAT file to a deal — the write twin of listDealFiles. Pass the artifactId of a file your organization already holds: the id the chat assistant sees on its artifact shelf (`(artifactId: …) [origin] filename`). A Library item id is refused: use fileLibraryItemsOnDeal. The server resolves it to the underlying file, org-scoped, links it to dealId, and returns the file (id, fileName, fileUrl, createdAt); read it back with listDealFiles. The deal must be in a pipeline owned by or shared with your organization, and the artifact's file must belong to your organization — a foreign artifact is refused, so you cannot link another org's bytes onto a deal you own. There is no raw-bytes upload op yet (the shared upload key is not org-scoped).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    attachDealFile: (variables: T.AttachDealFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.AttachDealFileMutation> =>
      this.request('attachDealFile', variables, options, { operationType: 'mutation' }),
    /**
     * A new deal per contact from a createDeal `deal` template (the bulk bar's Add to pipeline). propertyAttachmentMode ALL attaches each contact's properties as the bulk bar does (default NONE); skipContactsWithDeal skips contacts that have a deal; autoNameDeals titles each from its contact and property. A background task (`bulkTaskId`, getBulkTask). Every new deal has a contact, so it wakes stage and contact workflows: it needs their yes; a card's counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    bulkCreateDealsOnContacts: (variables: T.BulkCreateDealsOnContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.BulkCreateDealsOnContactsMutation> =>
      this.request('bulkCreateDealsOnContacts', variables, options, { operationType: 'mutation' }),
    /**
     * One updateDeal `input` for many deals (stage, close date, owners, contacts); every id must be a deal your org owns or shares, or the whole call is refused. Each deal runs a full updateDeal, so a stage move wakes workflows: confirm as updateDeal says. Large sets run as a background task (`bulkTaskId`, getBulkTask).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    bulkUpdateDeals: (variables: T.BulkUpdateDealsMutationVariables, options?: IdempotentRequestOptions): Promise<T.BulkUpdateDealsMutation> =>
      this.request('bulkUpdateDeals', variables, options, { operationType: 'mutation' }),
    /**
     * Create a deal in a pipeline stage. Requires title and stageId (listPipelineStages); optional priceCents, closeDate, contact/property/user ids. Entering the stage can text or email a real person, as an updateDeal move can: confirm as updateDeal says. The stage must be in a pipeline owned by or shared with your organization, and any linked contactIds/userIds must belong to your organization. userIds is the deal’s TEAM, and My deals shows only deals the viewer is on. The app’s Create Deal form puts its creator on the team, so when acting for a person include the key owner (getMyProfile) unless they name a different team. MONEY AND CUSTOM FIELDS (the whole input is one variable, so discovery cannot expand it). Commission takes ONE source per side, never both: `commissionAmountCents` (a fixed dollar figure in cents) XOR `commissionPercentBps` (basis points — 300 = 3% — applied to priceCents); and `teamSplitAmountCents` XOR `teamSplitPercentBps` (basis points applied to the resulting COMMISSION, not the price). Sending both halves of a pair with values is rejected; sending one explicitly as null CLEARS that side. The server derives `commissionCents` (GCI) and returns it: read it there. A percent re-derives when priceCents changes; an amount does not. `participantSplits` is [{ userId, splitAmountCents | splitPercentBps }] allocating what remains after the team fee, and it must not exceed the pool. `customFieldValues` is [{ customFieldId (from listDealCustomFields — deal fields are PER-PIPELINE), and exactly ONE of textValue (TEXT/LINK) | numberValue (NUMBER/DOLLAR, a plain number, NOT cents) | dateValue (DATE, ISO 8601) | dropdownSelectedValues (DROPDOWN — the option LABEL strings, not option ids) matching the field’s type }]. The response echoes the money and custom fields: confirm the write from it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createDeal: (variables: T.CreateDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateDealMutation> =>
      this.request('createDeal', variables, options, { operationType: 'mutation' }),
    /**
     * Create a custom-field DEFINITION on a deal pipeline you OWN (pipelineId from listPipelines): name + type (TEXT | NUMBER | DOLLAR | DATE | LINK | DROPDOWN; `options` required and non-empty for DROPDOWN; `allowMultiple`/`defaultValue` optional). Applied synchronously. Deal custom fields are per-pipeline, and a shared pipeline cannot be modified. Returns the pipeline's field set; read the new id back by matching the name (or use listDealCustomFields), then write values via the deal's customFieldValues input on createDeal / updateDeal.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createDealCustomField: (variables: T.CreateDealCustomFieldMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateDealCustomFieldMutation> =>
      this.request('createDealCustomField', variables, options, { operationType: 'mutation' }),
    /**
     * Create a deal pipeline in your organization. Requires a title; optionally a description and an ordered list of initial stages (each: name, plus optional description, order, isTerminal, terminalType WON|LOST|NEUTRAL, winProbability 0-100). Returns the created pipeline: its id, name, description and stages in order.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createPipeline: (variables: T.CreatePipelineMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreatePipelineMutation> =>
      this.request('createPipeline', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a deal for good; archiveDeal hides it instead, so prefer that unless they said delete. Org-owned pipelines only. dependencyResolution from getDeletionImpact(targetKind: DEAL). Returns `stageItWasOn`.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteDeal: (variables: T.DeleteDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteDealMutation> =>
      this.request('deleteDeal', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a deal comment you wrote, for good. Ask first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteDealComment: (variables: T.DeleteDealCommentMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteDealCommentMutation> =>
      this.request('deleteDealComment', variables, options, { operationType: 'mutation' }),
    /**
     * Permanently delete a deal custom-field DEFINITION (id from listDealCustomFields). IRREVERSIBLE: every value recorded on every deal for it is deleted. Prefer updateDealCustomField when the field is wrong rather than unwanted. Call getDeletionImpact first (targetKind DEAL_CUSTOM_FIELD) and hand back its impactVersion as dependencyResolution.impactVersion, with a replacement field for each reported requirement (filters, workflows); an empty `replacements` when none. A replacement redirects those references, never the values. System-defined fields cannot be deleted. Returns the remaining fields of `pipelineId` (the field's pipeline). Confirm with the user before calling.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteDealCustomField: (variables: T.DeleteDealCustomFieldMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteDealCustomFieldMutation> =>
      this.request('deleteDealCustomField', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a deal pipeline (owner-only). Pass a dependencyResolution built from getDeletionImpact: its impactVersion, plus a replacement for every deal the pipeline still holds (empty replacements if getDeletionImpact reports none). Deals are moved to the replacement pipeline/stage you choose, then the pipeline is removed.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deletePipeline: (variables: T.DeletePipelineMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeletePipelineMutation> =>
      this.request('deletePipeline', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a single pipeline stage (owner-only). Pass a dependencyResolution from getDeletionImpact (targetKind DEAL_STAGE): its impactVersion plus a replacement stage for any deals currently on the stage.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deletePipelineStage: (variables: T.DeletePipelineStageMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeletePipelineStageMutation> =>
      this.request('deletePipelineStage', variables, options, { operationType: 'mutation' }),
    /**
     * Replace the body of your own deal comment (listDealComments id).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    editDealComment: (variables: T.EditDealCommentMutationVariables, options?: IdempotentRequestOptions): Promise<T.EditDealCommentMutation> =>
      this.request('editDealComment', variables, options, { operationType: 'mutation' }),
    /**
     * Run a SAVED deal filter (`filterId` from listDealFilters or saveFilter type DEAL) over ONE pipeline (`pipelineId` from listPipelineNames) and page the matching deals with limit/offset: id, title, isArchived, stage and assignees, plus pagination.total (every match, not the page) and hasMore. Saved filters only: to try criteria first, save the filter, run it here, and fix it in place with updateFilter. A deal filter does not carry its pipeline, so the same filter can run over any pipeline you pass. Use getDeal for one deal in full.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    filterDeals: (variables: T.FilterDealsQueryVariables, options?: RequestOptions): Promise<T.FilterDealsQuery> =>
      this.request('filterDeals', variables, options, { operationType: 'query' }),
    /**
     * Search AND TOTAL the deals you can see: `totals` sums EVERY match, not the page (price, average, commission; totalCount is the count), so a total is one call. Filters: title, contact (contactIds: deals of ANY of these contacts in ONE read, matched by each row's linked contacts; page hasMore before calling one dealless, never a findDeals per contact), pipeline, stage (stageId, or stageName in all your own pipelines), outcome OPEN/WON/LOST, stageChangedAfter/Before (last stage move, eg a win; Before exclusive), closeDateAfter/Before, archived, assignees. NUMBERS — quote `totals` as they read; never add, average or count rows yourself. IMPORTANT: archived deals are INCLUDED BY DEFAULT (they sort last). Pass isArchived: false for active-only, always for "what is in my pipeline", or true to find archived ones (to restore with archiveDeal); check each result's isArchived before calling a deal current. Each deal carries its assigned users — an empty array means the deal is UNASSIGNED, nobody owns it — and its linked contacts (id + name). hasAssignedUsers: false gives the unowned deals over every deal you can see (totalCount is the count); userIds (listTeammates, never empty) gives one person's. Whether anyone is on a linked CONTACT comes only from getContact, one call per contact; a partner org's contact it refuses is "not visible to you", not "nobody". Each row carries the commission figures: commissionCents (the derived GCI) and the stored commissionAmountCents / commissionPercentBps / teamSplitAmountCents / teamSplitPercentBps, so a portfolio money question ("our GCI on everything closing this month") is one page. Read them as getDeal documents: amount XOR percent per side; all-null means no commission RECORDED, not zero. participantSplits is NOT here (getDeal). `customFieldValues` IS here, LEANER than on getDeal: the value plus the field NAME (`dealCustomField { name }`), no ids or type, for surveying (who holds which card, which have no Difficulty set) rather than writing back. Read the ONE sub-field matching the type, as getDeal documents. A field never given a value is absent, so an empty list means nothing filled in, never no fields. Custom fields multiply per row: on a `truncated` page lower `limit` rather than assume the missing deals have no values. TASKS — `taskSummary` counts open tasks and appointments on the DEAL (not its contacts); 0 means none, so "which deals have no task" is this page. In Ask Goliath omitting isArchived reads live deals only; null reads both.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    findDeals: (variables?: T.FindDealsQueryVariables, options?: RequestOptions): Promise<T.FindDealsQuery> =>
      this.request('findDeals', variables, options, { operationType: 'query' }),
    /**
     * Fetch one deal by id — title, value, close date, stage, pipeline, COMMISSION AND TEAM SPLIT, CUSTOM-FIELD VALUES, assigned users (empty = unassigned), linked contacts (id + name), and linked deals (`linkedItems`). It does NOT return who is on those contacts: this op also reaches deals on pipelines another org SHARED with yours, whose contacts belong to that org, and the participant read is scoped to your own org — it would come back empty for them and read as "nobody is on this contact" when someone is. To see who is on a contact, call getContact with that contactId: it is guarded to your org, so a contact you cannot see fails loudly instead of answering empty. MONEY — `priceFormatted`/`commissionFormatted` are the price and GCI in dollars: quote them. Commission, team split and participant splits are now READABLE here, and they are the answer to GCI questions. `commissionCents` is the DERIVED total commission on the deal: quote THAT as the deal’s GCI. The other four are the stored write SOURCES, and each side is amount-XOR-percent, so exactly one of a pair is ever non-null: `commissionAmountCents` (a fixed dollar figure, in cents) or `commissionPercentBps` (basis points — 300 bps = 3%, applied to priceCents); and `teamSplitAmountCents` or `teamSplitPercentBps` (basis points applied to the COMMISSION, not the price). So when commissionPercentBps is set, commissionCents is priceCents x bps/10000 and changing the price silently changes the commission; when commissionAmountCents is set, commissionCents equals it and the price is irrelevant. All four sources null with commissionCents null means no commission has been recorded — NOT zero commission; do not report $0 for a deal nobody has filled in. `participantSplits` is the per-teammate allocation of what is left after the team fee (each row: user, splitAmountCents or splitPercentBps). Write all of these through updateDeal / createDeal, which echo them back. CUSTOM FIELDS — `customFieldValues` is the read-back for the customFieldValues input on createDeal / updateDeal (INT-907; there was no read path before). It carries ONLY the fields this deal actually has a value for: a defined field the deal has never been given a value for is ABSENT from the list, not present-and-null, which is the opposite of a contact’s customFields. So an empty list means nothing is filled in, never that the pipeline has no fields — get the pipeline’s full definition set from listDealCustomFields(pipelineId). Each entry names its definition under `dealCustomField` (id, name, type) and carries the value in the ONE sub-field matching that type: TEXT/LINK -> textValue, NUMBER/DOLLAR -> numberValue (a plain number, NOT cents), DATE -> dateValue (ISO 8601), DROPDOWN -> dropdownSelectedValues (the option LABEL strings, not option ids; more than one only when the definition’s allowMultiple is true).
     *
     * @remarks Requires the READ scope.
     */
    getDeal: (variables: T.GetDealQueryVariables, options?: RequestOptions): Promise<T.GetDealQuery> =>
      this.request('getDeal', variables, options, { operationType: 'query' }),
    /**
     * One pipeline's deal-sheet tabs: each tab's name and its fields in order (`native:<key>` or `custom:<fieldId>`), with the layout version.
     *
     * @remarks Requires the READ scope.
     */
    getDealDetailTabs: (variables: T.GetDealDetailTabsQueryVariables, options?: RequestOptions): Promise<T.GetDealDetailTabsQuery> =>
      this.request('getDealDetailTabs', variables, options, { operationType: 'query' }),
    /**
     * One pipeline's field layout: each custom field with its display order, showOnCard and cardDisplayOrder (the up-to-5 fields the board card shows), and hiddenDetailFieldKeys (what the deal sheet and create/edit form hide: `native:team|closeDate|dealValue|commission` or `custom:<fieldId>`; null or empty = all shown). Read it before setDealCardFields or setDealDetailHiddenFields, which replace the whole list.
     *
     * @remarks Requires the READ scope.
     */
    getDealPipelineLayout: (variables: T.GetDealPipelineLayoutQueryVariables, options?: RequestOptions): Promise<T.GetDealPipelineLayoutQuery> =>
      this.request('getDealPipelineLayout', variables, options, { operationType: 'query' }),
    /**
     * Preview what deleting an org-owned record affects before you do it — it serves every delete op that takes a dependencyResolution, not just the deal ones. Pass targetKind + targetId; returns impactVersion (hand it back to the matching delete op), requiresReplacement, the dependent records grouped, and — when replacement is required — the replacementRequirements (what needs a new home and the valid options). Supported targetKinds: DEAL (deleteDeal), DEAL_PIPELINE / DEAL_STAGE (deletePipeline / deletePipelineStage), CONTACT_CUSTOM_FIELD (deleteContactCustomField), CONTACT_CUSTOM_FIELD_OPTION / DEAL_CUSTOM_FIELD_OPTION (a dropdown option dropped by updateContactCustomField / updateDealCustomField's optionDependencyResolutions), CONTACT_TAG (deleteContactTags), CONTACT_LIST (deleteContactLists), and CONTENT_TEMPLATE (deleteContentTemplate). WORKFLOW_GROUP (a workflow's or appointment reminder's group id) says what references it: deleteAppointmentReminder takes the result as its dependencyResolution, while deleteWorkflow takes no impactVersion, so for a workflow it is read-only. Always call this first: those delete ops need the impactVersion, and it goes stale if anything changes in between — re-read it rather than reusing an old one.
     *
     * @remarks Requires the READ scope.
     */
    getDeletionImpact: (variables: T.GetDeletionImpactQueryVariables, options?: RequestOptions): Promise<T.GetDeletionImpactQuery> =>
      this.request('getDeletionImpact', variables, options, { operationType: 'query' }),
    /**
     * Per-pipeline TRENDS for a rolling period (SEVEN_DAYS | FOURTEEN_DAYS | THIRTY_DAYS | YEAR_TO_DATE; THIRTY_DAYS is the last 30 days, not this month) from a NIGHTLY snapshot (asOfDate): stage duration, stage mix, won/lost/active. wonDeals / lostDeals count EVENTS (moves into a won or lost stage in the window, archived deals included) and miss moves since the snapshot, so they can disagree with the deals as they stand: for "how many won", a win rate or money use findDeals `totals` (outcome WON / LOST, a stageChanged window). Requires the ADMIN scope.
     *
     * @remarks Requires the ADMIN scope.
     *
     * The organization is derived from your API key — `orgId` is never caller-supplied.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    getPipelineAnalytics: (variables?: Omit<T.GetPipelineAnalyticsQueryVariables, 'orgId'>, options?: RequestOptions): Promise<T.GetPipelineAnalyticsQuery> =>
      this.request('getPipelineAnalytics', variables, options, { operationType: 'query' }),
    /**
     * Link two unarchived deals on your org's own pipelines; both list it (getDeal linkedItems).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    linkPipelineItems: (variables: T.LinkPipelineItemsMutationVariables, options?: IdempotentRequestOptions): Promise<T.LinkPipelineItemsMutation> =>
      this.request('linkPipelineItems', variables, options, { operationType: 'mutation' }),
    /**
     * One deal's activity feed, most-recent-first — the audit trail behind "who changed the price on this deal, and when did it get reassigned?". Each event carries eventType, createdAt, actor (the person, null for system/automation), and a SuperJSON `payload` whose `json` object holds the per-eventType detail. Pass `eventTypes` to narrow to the types you care about — a narrowed read pages at the DATABASE, so a sparse type's full history stays reachable however busy the rest of the feed is; omit it for the mixed feed, which caps at the 200 most recent events. Page with `offset`. THE FULL eventType VOCABULARY, with the payload keys under `payload.json` for each (there is no schema expansion for a SuperJSON scalar, so this text is the only description of the shape). Money keys are cents, `*Bps` are basis points, dates are ISO 8601, and a `from*` key is null when the field had no previous value: `STAGE_CHANGED` (fromStageId, fromStageName, toStageId, toStageName — names are snapshotted at write time, so a renamed stage keeps them; workflow: {workflowAutomationId, name} of the workflow VERSION that made the move (not its workflowGroupId; a republish gives a new one), else absent or null; byPerson: true if a person moved it in-app); `VALUE_CHANGED` (fromCents, toCents — the deal price); `COMMISSION_CHANGED` and `TEAM_SPLIT_CHANGED` (fromCents, toCents, fromBps, toBps — the pair that answers commission-history questions); `CLOSE_DATE_CHANGED` (fromDate, toDate); `ASSIGNED` and `UNASSIGNED` (userId, userName — the person the deal was assigned to or taken from, NOT the actor who did it); `CONTACT_LINKED` and `CONTACT_UNLINKED` (contactId, contactName); `TASK_ADDED` and `TASK_COMPLETED` (taskId, taskTitle, isAppointment — true means it was an appointment, not a to-do); `FILE_ADDED` and `FILE_REMOVED` (fileId, fileName); `DEAL_CREATED`, `DEAL_ARCHIVED`, `DEAL_RESTORED` (no payload keys beyond actor); `COMMENT` (body — the comment text; listDealComments is the same feed pre-narrowed to this type); `SCRAPER_HEALTH_MOVED` (only on Scraper Health cards — the reasoning written with each move by moveScraperHealthCard / upsertScraperHealthCard: healthActor (monitor | doctor | person — which kind of mover, since `actor` is always the key owner), fromStage and toStage (stage NAMES, fromStage null on the event that opened the card), why, checked, found, nextTime (free text, null when not given), delivered, expected, windowDays (the numbers at that moment), handoffSummary (the short "what happened, where it stands" a person reads first)); `CONTRACT_EVENT` (contractId, envelopeId: the contract and its signing attempt; kind: SENT, OPENED, SIGNED, COMPLETED, DECLINED, VOIDED or EXPIRED; recipientId: the signer who opened, signed or declined, null otherwise; fileId: on COMPLETED, the signed PDF filed on the contract contacts. The title and names are not in the payload: read the contract for them). Those nineteen are the whole vocabulary: an eventType outside this list does not exist. What the feed does NOT record is edits to a deal's title, description or custom-field values — no event type covers them, so their history is not reconstructable here.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listDealActivity: (variables: T.ListDealActivityQueryVariables, options?: RequestOptions): Promise<T.ListDealActivityQuery> =>
      this.request('listDealActivity', variables, options, { operationType: 'query' }),
    /**
     * One deal's comment thread, most-recent-first (the activity feed narrowed to COMMENT events, paged at the database — the full thread stays reachable however busy the rest of the feed is). The comment text is in the SuperJSON payload at `json.body`; actor identifies the commenter. Page with offset.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listDealComments: (variables: T.ListDealCommentsQueryVariables, options?: RequestOptions): Promise<T.ListDealCommentsQuery> =>
      this.request('listDealComments', variables, options, { operationType: 'query' }),
    /**
     * List a deal pipeline's custom-field DEFINITIONS (by pipelineId from listPipelines): id, name, type (TEXT/NUMBER/DOLLAR/DATE/LINK/DROPDOWN), dropdown options, allowMultiple, defaultValue. Deal custom fields are per-pipeline. DEFINITIONS ONLY — no deal's recorded value appears here: read those from getDeal's `customFieldValues`, which lists only the fields a given deal has been given a value for. Use each id as the customFieldId in the deal's customFieldValues input on createDeal / updateDeal to write values.
     *
     * @remarks Requires the READ scope.
     */
    listDealCustomFields: (variables: T.ListDealCustomFieldsQueryVariables, options?: RequestOptions): Promise<T.ListDealCustomFieldsQuery> =>
      this.request('listDealCustomFields', variables, options, { operationType: 'query' }),
    /**
     * Files attached to a deal, most-recent-first — screenshots, recordings, documents. Each entry carries id, fileName, contentType-bearing fileUrl and createdAt. fileUrl is a time-limited signed HTTPS URL: fetch it promptly and do not persist or share it, and re-read this op rather than caching the URL. Each URL is signed per file, so the page is small (limit defaults to 25 and is capped there) — a full page means there may be more, so page with offset. This is the ONLY way to reach an attachment's bytes — a Slack-sourced deal records its attachments as a bare filename at the end of the description (`Attachments: Screenshot ….png`), which names the file but cannot open it. To ADD a file your org already holds (by its artifactId), use attachDealFile; to detach one, removeDealFile. Returns an empty list for a deal with no files, which is different from a deal you cannot see: a foreign or unknown dealId is refused at the gateway.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 25.
     */
    listDealFiles: (variables: T.ListDealFilesQueryVariables, options?: RequestOptions): Promise<T.ListDealFilesQuery> =>
      this.request('listDealFiles', variables, options, { operationType: 'query' }),
    /**
     * List the saved DEAL filters VISIBLE to the key owner: every shared deal filter in the organization plus your own private ones. Metadata plus `criteriaSummary` (its conditions in one line); read one filter's whole tree with getFilter, create one with saveFilter (type: DEAL), change it with updateFilter. Run one with filterDeals. The Deals board in the app has no saved-filter list, so a deal filter lives here, not in a sidebar. Every row carries `userId`, the OWNER: a row whose userId is not the key owner's is a teammate's filter, so say whose it is before changing or deleting it.
     *
     * @remarks Requires the READ scope.
     */
    listDealFilters: (options?: RequestOptions): Promise<T.ListDealFiltersQuery> =>
      this.request('listDealFilters', undefined, options, { operationType: 'query' }),
    /**
     * List the organization's own deal pipelines, id and name only, oldest first. `sameNameCount` is how many share the row's name. Use this to find a pipeline id by name. For every pipeline's stages in one call, use listPipelines.
     *
     * @remarks Requires the READ scope.
     */
    listPipelineNames: (options?: RequestOptions): Promise<T.ListPipelineNamesQuery> =>
      this.request('listPipelineNames', undefined, options, { operationType: 'query' }),
    /**
     * List the organization's deal pipelines with per-stage deal counts and values. Counts cover only deals you can see. `total` and stage `value` are WHOLE DOLLARS, not cents (1355000 is $1,355,000). Archived deals are excluded; a date window or a won total is findDeals `totals`. `deals`/`total` include won/lost stages; open is `outcome` open. `sameNameCount` is how many pipelines share the row's name: quote it, never count rows. Use the returned pipeline id with findDeals (its pipelineId filter) to list a pipeline's deals.
     *
     * @remarks Requires the READ scope.
     */
    listPipelines: (options?: RequestOptions): Promise<T.ListPipelinesQuery> =>
      this.request('listPipelines', undefined, options, { operationType: 'query' }),
    /**
     * One pipeline's stages, in order (all pipelines: listStagesOfPipelines).
     *
     * @remarks Requires the READ scope.
     */
    listPipelineStages: (variables: T.ListPipelineStagesQueryVariables, options?: RequestOptions): Promise<T.ListPipelineStagesQuery> =>
      this.request('listPipelineStages', variables, options, { operationType: 'query' }),
    /**
     * Stage-to-stage deal movement (the funnel) for a reporting period (same period values as getPipelineAnalytics), optionally narrowed to one pipelineId — per transition: deal counts, exits from the source stage, and won/lost outcomes. Data is a nightly snapshot — see asOfDate. Requires the ADMIN scope (key owner must be a team admin).
     *
     * @remarks Requires the ADMIN scope.
     *
     * The organization is derived from your API key — `orgId` is never caller-supplied.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    listPipelineTransitions: (variables?: Omit<T.ListPipelineTransitionsQueryVariables, 'orgId'>, options?: RequestOptions): Promise<T.ListPipelineTransitionsQuery> =>
      this.request('listPipelineTransitions', variables, options, { operationType: 'query' }),
    /**
     * Every owned and shared pipeline and its stages, in order; a large organization's answer is cut short. A stage by name is SEARCH_CONTEXT DEAL_STAGE (every pipeline; a miss is final), and every deal in it, in your own pipelines, findDeals `stageName`. Names repeat: move a deal only within its own pipeline.
     *
     * @remarks Requires the READ scope.
     */
    listStagesOfPipelines: (options?: RequestOptions): Promise<T.ListStagesOfPipelinesQuery> =>
      this.request('listStagesOfPipelines', undefined, options, { operationType: 'query' }),
    /**
     * List deals going cold — no activity for a while, ordered by days inactive, of deals you can see. Returns each deal with its stage, pipeline, linked contact, and inactiveDays.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listStalledDeals: (variables?: T.ListStalledDealsQueryVariables, options?: RequestOptions): Promise<T.ListStalledDealsQuery> =>
      this.request('listStalledDeals', variables, options, { operationType: 'query' }),
    /**
     * Remove a deal link.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeDealExternalLink: (variables: T.RemoveDealExternalLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveDealExternalLinkMutation> =>
      this.request('removeDealExternalLink', variables, options, { operationType: 'mutation' }),
    /**
     * Detach one file from a deal by fileId (fileIds come from listDealFiles). This removes the link only — the underlying stored file/bytes are not deleted. Removing a file that is not on the deal, or already removed, is a no-op. Returns the deal id. The deal must be in a pipeline owned by or shared with your organization.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeDealFile: (variables: T.RemoveDealFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveDealFileMutation> =>
      this.request('removeDealFile', variables, options, { operationType: 'mutation' }),
    /**
     * Set the display order of one pipeline's custom fields: pass every field id of that pipeline (listDealCustomFields), first = top. An id from another pipeline is refused. Presentation only: no value, filter or workflow changes.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderDealCustomFields: (variables: T.ReorderDealCustomFieldsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderDealCustomFieldsMutation> =>
      this.request('reorderDealCustomFields', variables, options, { operationType: 'mutation' }),
    /**
     * Reorder a pipeline's stages (by pipelineId): pass every stage id in the desired order. Owner-only: the pipeline must be OWNED by your organization. Returns the pipeline with its stages in the new order.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderPipelineStages: (variables: T.ReorderPipelineStagesMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderPipelineStagesMutation> =>
      this.request('reorderPipelineStages', variables, options, { operationType: 'mutation' }),
    /**
     * Choose the fields every deal card on one pipeline's board shows: at most 5 field ids of that pipeline, built-ins included, in order. REPLACES the set (empty shows none), for everyone. Org admins only. Returns the fields with showOnCard and cardDisplayOrder.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setDealCardFields: (variables: T.SetDealCardFieldsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetDealCardFieldsMutation> =>
      this.request('setDealCardFields', variables, options, { operationType: 'mutation' }),
    /**
     * Hide fields from one pipeline's deal sheet and create/edit form, for everyone: `hiddenFieldKeys` REPLACES the hidden set (getDealPipelineLayout first; an empty list shows everything). Keys are `native:team|closeDate|dealValue|commission` or `custom:<fieldId>`; Stage is never hidden and an unknown key is dropped. Hiding keeps every value.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setDealDetailHiddenFields: (variables: T.SetDealDetailHiddenFieldsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetDealDetailHiddenFieldsMutation> =>
      this.request('setDealDetailHiddenFields', variables, options, { operationType: 'mutation' }),
    /**
     * Replace one pipeline's deal-sheet tabs for everyone (getDealDetailTabs first, and pass its version as expectedVersion: a stale one is refused). Owner pipelines only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setDealDetailTabs: (variables: T.SetDealDetailTabsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetDealDetailTabsMutation> =>
      this.request('setDealDetailTabs', variables, options, { operationType: 'mutation' }),
    /**
     * Survey deals — findDeals' search (same visibility), without stageName/outcome/windows/totals, with a deliberately LEAN row: deal id, title, isArchived, stage NAME, pipeline NAME, assigned users by NAME, open-task counts, and custom-field values. Use this whenever the question is about MANY deals rather than about a few in full — "who holds which card", "which cards have no Difficulty set", "what is on this board", any board-wide count or grouping. Use findDeals instead when you need money (commission / team split), linked contacts, close date, price, createdAt/updatedAt, or the ids inside a row; use getDeal for one deal in full. A capped result DROPS WHOLE DEALS silently: when `truncated` is true, lower `limit` and page (`__omittedItems` counts the dropped rows). `totalCount` is the UNPAGED total to quote for "how many". IDS — the row carries names, not ids, for everything except the deal itself: stage ids from listStagesOfPipelines, user ids from listTeammates, custom-field ids and types from listDealCustomFields. The deal `id` IS here — pass it to getDeal or updateDeal to act on a row. ARCHIVED deals are included when isArchived is omitted, as in findDeals; check each row's isArchived. ASSIGNEES — an EMPTY `users` means UNASSIGNED; filter with hasAssignedUsers / userIds as in findDeals. No linked contacts here. CUSTOM FIELDS — each entry carries the value plus the field NAME (no id, no type). Read the value from the ONE slot matching the field type: TEXT/LINK -> textValue, NUMBER/DOLLAR -> numberValue (a plain number, NOT cents), DATE -> dateValue (ISO 8601), DROPDOWN -> dropdownSelectedValues (the option LABEL strings). A field the deal has never been given a value for is ABSENT from the list rather than present-and-null, so an empty list means nothing is filled in on that deal — never that the pipeline has no fields (get the definitions from listDealCustomFields(pipelineId)). TASKS — `taskSummary` counts open tasks and appointments on the DEAL (not its contacts); 0 means none, so "which deals have no task" is this page. In Ask Goliath omitting isArchived reads live deals only; null reads both.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 45.
     */
    surveyDeals: (variables?: T.SurveyDealsQueryVariables, options?: RequestOptions): Promise<T.SurveyDealsQuery> =>
      this.request('surveyDeals', variables, options, { operationType: 'query' }),
    /**
     * Remove a deal link (getDeal linkedItems id).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unlinkPipelineItems: (variables: T.UnlinkPipelineItemsMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnlinkPipelineItemsMutation> =>
      this.request('unlinkPipelineItems', variables, options, { operationType: 'mutation' }),
    /**
     * Update a deal by id: title, price, close date, stage. THIS IS THE STAGE-MOVE OPERATION: send input { stageId } alone (from listPipelineStages); fields left out are untouched, and the move stamps lastStageChangeAt. A stage change is POTENTIALLY OUTBOUND by TWO paths: (1) entering the stage wakes any DEAL workflow triggered on it; (2) it fires a deal-updated event for EVERY attached contact, and a CONTACT workflow anywhere in the org can match the destination stage, so a clean pipeline does NOT prove the move is silent. Either can text or email a real person. Do NOT reason "reversible, so just do it": undoing the move does not recall a message. A move the person asked for by name is their yes; any other move of a deal with contacts needs their yes before it runs (a card counts). The deal, stage and linked contactIds/userIds must belong to your organization (or a pipeline shared with it). contactIds, propertyIds and userIds REPLACE the whole linked set: send every id to keep. Pass expectedUpdatedAt (updatedAt from getDeal, findDeals or a previous write) whenever you decided from an earlier read, so a concurrent edit fails loudly. It makes the write conditional and ALL-OR-NOTHING: a change since gives CONFLICT with nothing written, and a rejected userIds, participantSplits or customFieldValues rolls the whole edit back. The token is single-use: re-read before guarding again. Without it a later custom-field failure cannot undo the committed core write. A deleted deal is NOT_FOUND (do not retry); a bad token is BAD_USER_INPUT. MONEY AND CUSTOM FIELDS (the whole input is one variable, so discovery cannot expand it). One commission source per side: `commissionAmountCents` XOR `commissionPercentBps` (basis points, 300 = 3%, of priceCents), and `teamSplitAmountCents` XOR `teamSplitPercentBps` (of the COMMISSION). Both halves with values is rejected; one sent as null CLEARS that side. The server derives `commissionCents` (GCI) and returns it: read it there. A percent re-derives when priceCents changes; an amount does not. `participantSplits` is [{ userId, splitAmountCents | splitPercentBps }] of what remains after the team fee, within the pool. `customFieldValues` is [{ customFieldId (listDealCustomFields; fields are PER-PIPELINE), exactly ONE of textValue (TEXT/LINK) | numberValue (NUMBER/DOLLAR, a plain number, NOT cents) | dateValue (DATE, ISO 8601) | dropdownSelectedValues (DROPDOWN option LABELS, not ids) }]. The response echoes the money and custom fields: confirm the write from it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateDeal: (variables: T.UpdateDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateDealMutation> =>
      this.request('updateDeal', variables, options, { operationType: 'mutation' }),
    /**
     * Edit an existing deal custom-field DEFINITION in place (by id from listDealCustomFields). THIS IS THE CORRECT WAY TO ADD A DROPDOWN OPTION or fix a wrong name or default — do not create a second field. Owner-only: the field's pipeline must be OWNED by your organization; a field on a pipeline merely shared with you cannot be edited. Omitted fields are untouched. The field's TYPE cannot be changed. `options` applies to DROPDOWN fields and REPLACES the whole option list rather than appending: send every option you want to keep, each existing one as { id, label } with its id from listDealCustomFields, and each new one as { label } with no id. To RENAME an option, send its existing id with the new label: every value already recorded on deals, the field's default, and the saved filters and queued bulk tasks naming the old label all move to the new one. Sending a new label WITHOUT the id instead removes the old option and creates a different one. Any existing option you leave out is REMOVED; if deals or filters still reference a removed option the call is rejected until you pass optionDependencyResolutions: from getDeletionImpact (DEAL_CUSTOM_FIELD_OPTION, the option id), the person picking each replacement. A default that is no longer one of the options is cleared. Names must be unique within the pipeline. Returns the updated field with its full option list.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateDealCustomField: (variables: T.UpdateDealCustomFieldMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateDealCustomFieldMutation> =>
      this.request('updateDealCustomField', variables, options, { operationType: 'mutation' }),
    /**
     * Change a deal link's title or url (linkId from getDeal's externalLinks); an omitted one is kept.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateDealExternalLink: (variables: T.UpdateDealExternalLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateDealExternalLinkMutation> =>
      this.request('updateDealExternalLink', variables, options, { operationType: 'mutation' }),
    /**
     * Update a deal pipeline's title and/or description (by pipelineId from listPipelines). Owner-only: the pipeline must be OWNED by your organization — a pipeline merely shared with you cannot be edited.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updatePipeline: (variables: T.UpdatePipelineMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdatePipelineMutation> =>
      this.request('updatePipeline', variables, options, { operationType: 'mutation' }),
    /**
     * Update one pipeline stage (by stageId from listPipelineStages) — rename, change description, toggle isTerminal / terminalType (WON|LOST|NEUTRAL), or set winProbability (0-100). Only the fields you pass change. Owner-only: the stage's pipeline must be OWNED by your organization.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updatePipelineStage: (variables: T.UpdatePipelineStageMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdatePipelineStageMutation> =>
      this.request('updatePipelineStage', variables, options, { operationType: 'mutation' }),
  }

  readonly employees = {
    /**
     * Accept one of an AI employee's suggestion cards (listEmployeeSuggestions): its edit lands on the employee's instructions, as the employee page's Accept does. `outcome` APPLIED, RETIRED (the instructions moved on; the card is gone) or REFUSED (`message` says what to fix). Only when the person asks for this card, and it waits for their yes (the write says how to ask).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    acceptEmployeeSuggestion: (variables: T.AcceptEmployeeSuggestionMutationVariables, options?: IdempotentRequestOptions): Promise<T.AcceptEmployeeSuggestionMutation> =>
      this.request('acceptEmployeeSuggestion', variables, options, { operationType: 'mutation' }),
    /**
     * Put one AI employee on one contact, optionally on a schedule, the contact card's Add. From then on it answers the contact's texts, emails and calls, and a schedule runs it on that cadence. A schedule is a 5-field cron (`cronExpression`) read in an IANA `timezone`, at most once a day, and `maxRuns`, how many runs before it stops (never open-ended; at most five years of runs). The employee must be switched on and from this organization. Many contacts with no schedule: attachEmployeeToContacts. Needs their yes; a card's counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    assignEmployeeToContact: (variables: T.AssignEmployeeToContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.AssignEmployeeToContactMutation> =>
      this.request('assignEmployeeToContact', variables, options, { operationType: 'mutation' }),
    /**
     * Give an AI employee a mailbox to email from and be woken by (`mailboxId` from listEmployeeChannelOptions): a connected inbox, shared with the organization, with a live connection, that no other employee owns. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    attachEmployeeMailbox: (variables: T.AttachEmployeeMailboxMutationVariables, options?: IdempotentRequestOptions): Promise<T.AttachEmployeeMailboxMutation> =>
      this.request('attachEmployeeMailbox', variables, options, { operationType: 'mutation' }),
    /**
     * Put an AI employee on contacts (at most 200 ids per call; send more in further calls). It then answers those contacts' texts, emails and calls and works them. The employee must be switched on (setEmployeeStatus) and every contact one the key owner can open. Recorded as the key owner's own assignment, so a contact someone took the employee off is put back because you named it. `changedCount` is how many it was newly put on; the rest already had it. When `interruptedContactId` is set the batch stopped there (`interruptedReason` says why): the contacts before it are done, so send that one and the rest again. Confirm the contacts with the person first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    attachEmployeeToContacts: (variables: T.AttachEmployeeToContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.AttachEmployeeToContactsMutation> =>
      this.request('attachEmployeeToContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Cancel a follow-up an AI employee booked on a contact before it runs (`followUpId`: a FOLLOW_UP row's `id` from getContactEmployees' `upcomingAgentRuns`). A CRON row is a schedule: clearEmployeeSchedule. Returns CANCELLED, or NOT_FOUND when it already ran or is not this contact's.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    cancelEmployeeFollowUp: (variables: T.CancelEmployeeFollowUpMutationVariables, options?: IdempotentRequestOptions): Promise<T.CancelEmployeeFollowUpMutation> =>
      this.request('cancelEmployeeFollowUp', variables, options, { operationType: 'mutation' }),
    /**
     * Drop the schedule of one employee on one contact (`attachmentId` from getContactEmployees). It stays on the contact and still answers when the contact writes in. Safe to repeat. A booked FOLLOW_UP is not a schedule: that is cancelEmployeeFollowUp.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    clearEmployeeSchedule: (variables: T.ClearEmployeeScheduleMutationVariables, options?: IdempotentRequestOptions): Promise<T.ClearEmployeeScheduleMutation> =>
      this.request('clearEmployeeSchedule', variables, options, { operationType: 'mutation' }),
    /**
     * Comment on one of an AI employee's suggestion cards ("keep the opener shorter"). It changes nothing on the card; the employee reads it when it writes its next cards, recorded as a comment through the API, not as feedback heard from a person. Only when the person asks, passing on what they said. `heard` is false while the organization's memory is off. `submissionKey` is REQUIRED: a new one (1 to 100 characters, e.g. a UUID) per comment, sent again unchanged on a retry, so a retried call is heard once.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    commentOnEmployeeSuggestion: (variables: T.CommentOnEmployeeSuggestionMutationVariables, options?: IdempotentRequestOptions): Promise<T.CommentOnEmployeeSuggestionMutation> =>
      this.request('commentOnEmployeeSuggestion', variables, options, { operationType: 'mutation' }),
    /**
     * Hire an AI employee. It is ALWAYS created switched off (INACTIVE), whatever the config says: it answers nobody until it is switched on. Omit `config` for the generalist an operator gets with no template (texts, emails and calls once a phone line or mailbox is attached, notes, tasks, notifying a teammate, booking its own follow-up), then shape it with updateEmployeeConfig; or pass a COMPLETE config document in the shape getEmployee returns as `configDocument`. The same checks the employee builder runs apply, and a refusal names each field and what to change. Returns the new employee and its `configDocument`.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createEmployee: (variables: T.CreateEmployeeMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateEmployeeMutation> =>
      this.request('createEmployee', variables, options, { operationType: 'mutation' }),
    /**
     * Create the DRAFT workflow that hands an employee its contacts' inbound texts (on its lines, else the org's) or emails (its mailboxes, else any). Nothing runs until it is published (promoteWorkflowDraft). One that already starts the employee comes back instead.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createEmployeeAnswerWorkflow: (variables: T.CreateEmployeeAnswerWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateEmployeeAnswerWorkflowMutation> =>
      this.request('createEmployeeAnswerWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Delete an AI employee, the employee page's Fire. It is taken off every contact (their schedules go), its mailboxes and lines are released and its forms stop waking it; its history stays, but it cannot be brought back. Admins only: a member is refused, so check getMyProfile's `organizationRole` first and tell a member an organization admin has to fire it. Refused while anything still names it (a workflow step, a saved filter, an automation trigger, an assignment policy); the refusal lists what to change first. Say its contact count (getEmployee's `commitments`). Needs their yes; a card's counts. To stop it for now, switch it off instead (setEmployeeStatus).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteEmployee: (variables: T.DeleteEmployeeMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteEmployeeMutation> =>
      this.request('deleteEmployee', variables, options, { operationType: 'mutation' }),
    /**
     * Take an AI employee off contacts (at most 200 ids per call). It stops answering and working them and their schedules are dropped; the history stays. `changedCount` is how many it was taken off. When `interruptedContactId` is set the batch stopped there (`interruptedReason` says why): the contacts before it are done, so send that one and the rest again. Confirm with the person first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    detachEmployeeFromContacts: (variables: T.DetachEmployeeFromContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.DetachEmployeeFromContactsMutation> =>
      this.request('detachEmployeeFromContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Take a mailbox off an AI employee (an id from getEmployee `mailboxes`): it stops emailing from it and is no longer woken by mail to it. Safe to repeat. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    detachEmployeeMailbox: (variables: T.DetachEmployeeMailboxMutationVariables, options?: IdempotentRequestOptions): Promise<T.DetachEmployeeMailboxMutation> =>
      this.request('detachEmployeeMailbox', variables, options, { operationType: 'mutation' }),
    /**
     * Release a phone line an AI employee still holds from before lines were shared (an id from getEmployee `legacyPhoneLines`). It cannot be attached back, since lines are no longer assigned to employees: it stops answering calls to that number and no longer takes on new people who text it. Refused when the line is not on this employee. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    detachEmployeePhoneLine: (variables: T.DetachEmployeePhoneLineMutationVariables, options?: IdempotentRequestOptions): Promise<T.DetachEmployeePhoneLineMutation> =>
      this.request('detachEmployeePhoneLine', variables, options, { operationType: 'mutation' }),
    /**
     * Retired (#41897): always refused, since no reply is held any more. Do not call it; a reply waiting on a person is a reply card in the app.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    discardEmployeeReplyDraft: (variables: T.DiscardEmployeeReplyDraftMutationVariables, options?: IdempotentRequestOptions): Promise<T.DiscardEmployeeReplyDraftMutation> =>
      this.request('discardEmployeeReplyDraft', variables, options, { operationType: 'mutation' }),
    /**
     * Dismiss one of an AI employee's suggestion cards (listEmployeeSuggestions) with a reason (NOT_RELEVANT, WRONG_TONE, WRONG_FACTS, ALREADY_DONE or OTHER). Recorded as dismissed through the API, not as feedback heard from a person. Only when the person says to, with the reason they gave.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    dismissEmployeeSuggestion: (variables: T.DismissEmployeeSuggestionMutationVariables, options?: IdempotentRequestOptions): Promise<T.DismissEmployeeSuggestionMutation> =>
      this.request('dismissEmployeeSuggestion', variables, options, { operationType: 'mutation' }),
    /**
     * The AI employees on one contact, as the contact page's card shows them. `aiEmployees[].id` is the attachment id setEmployeeSchedule and clearEmployeeSchedule take (`agentId` is the employee); `status` PAUSED means it stopped working this contact (REMOVED, with `includeRemoved`, means it was taken off); `isWorkingNow` means it is mid-conversation. `upcomingAgentRuns` is what they will do next, soonest first, AT MOST 25 with no total (when 25 come back more may be booked, so after acting on these read again before saying none are left): a CRON row is a schedule's next run, a FOLLOW_UP row a follow-up the employee booked itself, whose `id` cancelEmployeeFollowUp takes.
     *
     * @remarks Requires the READ scope.
     */
    getContactEmployees: (variables: T.GetContactEmployeesQueryVariables, options?: RequestOptions): Promise<T.GetContactEmployeesQuery> =>
      this.request('getContactEmployees', variables, options, { operationType: 'query' }),
    /**
     * One AI employee in full. `abilities` is what it can do RIGHT NOW, resolved (a tool missing from the stored config follows its default, and most defaults are on, so read `abilities`, never infer from the document). `config.wakes` is what wakes it. `mailboxes` and `triggerForms` are its channels; `legacyPhoneLines` lists only lines it still holds from before lines were shared, since an employee needs no number of its own (it texts on the number the conversation is on, otherwise a shared organization number): an empty list is the normal state, never something to attach, ask about or report; `defaultAssignees` who owns a contact it works when nobody does. `commitments`: `assignedContactCount` the contacts it is on, `scheduledContactCount` only those on a repeating schedule, and `bookedFollowUpContactCount` those with a follow-up it booked itself that has not run yet, so 0 scheduled never means no follow-up is coming. It holds no trust of its own: what it does on its own follows the trust of the person each act is for (the line or mailbox owner, else the contact's teammate, else its Manager), set on that person's Memory, Trust page. A text `sendWindow` holds only what it starts (follow-ups, outreach): its text reply to a lead who wrote in goes out at any hour. `configDocument` is the whole configuration as one JSON document; change part of it with updateEmployeeConfig's `edits` and `configPatch`. Webhook urls read back redacted and are kept on save. `updatedAt` is the `expectedUpdatedAt` to pass so a teammate's save in between is refused rather than overwritten.
     *
     * @remarks Requires the READ scope.
     */
    getEmployee: (variables: T.GetEmployeeQueryVariables, options?: RequestOptions): Promise<T.GetEmployeeQuery> =>
      this.request('getEmployee', variables, options, { operationType: 'query' }),
    /**
     * The contacts one AI employee is on, newest attachment first, offset-paged (`offset`, `limit`; `total` is the full count). Each row says whether it is working that contact now, when it last worked it, the next run of a repeating schedule (`attachment.schedule`), the soonest follow-up it booked itself (`nextBookedFollowUpAt`, null when none), and whether the contact replied or escalated. A new touch on a contact with one booked comes before that follow-up. `includeRemoved: true` adds contacts a person took it off.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    getEmployeeCaseload: (variables: T.GetEmployeeCaseloadQueryVariables, options?: RequestOptions): Promise<T.GetEmployeeCaseloadQuery> =>
      this.request('getEmployeeCaseload', variables, options, { operationType: 'query' }),
    /**
     * Retired (#41897): always returns an empty list. AI employees no longer hold replies here; a reply waiting on a person is a reply card in the app.
     *
     * @remarks Requires the READ scope.
     */
    listContactReplyDrafts: (variables: T.ListContactReplyDraftsQueryVariables, options?: RequestOptions): Promise<T.ListContactReplyDraftsQuery> =>
      this.request('listContactReplyDrafts', variables, options, { operationType: 'query' }),
    /**
     * What an AI employee can be bound to right now: `availableMailboxes` (connected Gmail or Outlook inboxes shared with the organization that no employee owns yet; the `id` attachEmployeeMailbox takes) and `availableTriggerForms` (the organization's forms, any status; ids for setEmployeeTriggerForms). Phone numbers are not assigned to employees: an employee replies on the number the conversation is on, otherwise a shared organization number.
     *
     * @remarks Requires the READ scope.
     */
    listEmployeeChannelOptions: (options?: RequestOptions): Promise<T.ListEmployeeChannelOptionsQuery> =>
      this.request('listEmployeeChannelOptions', undefined, options, { operationType: 'query' }),
    /**
     * An AI employee's saved versions, newest first (offset-paged; advance by `nextOffset`). One per save: the version from before a change is the one saved just before it (`createdAt`). Each says when, who saved it (`actorName`, else `actorUserId`; neither for the system) and the name and job title it held. To put one back, restoreEmployeeRevision.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listEmployeeRevisions: (variables: T.ListEmployeeRevisionsQueryVariables, options?: RequestOptions): Promise<T.ListEmployeeRevisionsQuery> =>
      this.request('listEmployeeRevisions', variables, options, { operationType: 'query' }),
    /**
     * The organization's AI employees: id, name, job title, status (ACTIVE = working, INACTIVE = hired but switched off), the template it started from, whether it can answer calls, and how many contacts it is on. `contactAgentCounts` counts that list (`total`, `active`, `inactive`): quote those numbers for how many employees there are and how many are on or off, never a tally of the rows. `textHours` is when it starts texts, in words (anytime when none is set), and `quietHoursNotice` the quiet-hours note to say when the window crosses 8 AM to 9 PM: what hours each texts are answered from this one read, never a getEmployee per employee (a roster past about 100 employees ends in an omitted marker naming the rest: read those with getEmployee). The `id` is the `employeeId` every other employee operation takes. Start here.
     *
     * @remarks Requires the READ scope.
     */
    listEmployees: (options?: RequestOptions): Promise<T.ListEmployeesQuery> =>
      this.request('listEmployees', undefined, options, { operationType: 'query' }),
    /**
     * An AI employee's pending suggestion cards, newest first: edits it proposes to its own instructions (`action`), with how sure it is (`confidence`). A person accepts one on the employee's page; dismissEmployeeSuggestion and commentOnEmployeeSuggestion answer one for them.
     *
     * @remarks Requires the READ scope.
     */
    listEmployeeSuggestions: (variables: T.ListEmployeeSuggestionsQueryVariables, options?: RequestOptions): Promise<T.ListEmployeeSuggestionsQuery> =>
      this.request('listEmployeeSuggestions', variables, options, { operationType: 'query' }),
    /**
     * Take AI employees off contacts: they stop working them and their schedules are dropped; the history stays. EMPTY employeeIds takes off EVERY employee, system-managed ones included, so say so before you send it. A bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeEmployeesFromContacts: (variables: T.RemoveEmployeesFromContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveEmployeesFromContactsMutation> =>
      this.request('removeEmployeesFromContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Put an AI employee back to a saved version (`revisionId` from listEmployeeRevisions): its instructions, settings, name and job title as that version held them (the avatar is kept, and a setting that version never had keeps its current value), saved as a new version. updateEmployeeConfig's checks apply, the screening one included. Pass `expectedUpdatedAt`. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreEmployeeRevision: (variables: T.RestoreEmployeeRevisionMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreEmployeeRevisionMutation> =>
      this.request('restoreEmployeeRevision', variables, options, { operationType: 'mutation' }),
    /**
     * Put AI employees on contacts and wake each pairing once (runNow, default true), and/or on a `schedule` (cron, timezone, maxRuns; no denser than daily). `message` (max 2000 chars) is an internal instruction carried into every run; the contact never sees it. Employees must be switched on. Like attachEmployeeToContacts it puts back a contact someone took that employee off (unless they did so after this call), so leave those out first. A contact the employee already has a follow-up booked for (`nextBookedFollowUpAt` on getEmployeeCaseload) gets a second touch before that one: say how many of the batch have one, so the person can choose. A bulk task (`bulkTaskId`, getBulkTask). The person approves it on a card.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    runEmployeesOnContacts: (variables: T.RunEmployeesOnContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.RunEmployeesOnContactsMutation> =>
      this.request('runEmployeesOnContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Set an AI employee's own daily caps, which bound what it spends: `dailyRunCap` (live runs a day) and `dailyCallCap` (connected calls a day). Each is a whole number from 1 to 10,000; there is no 0, so to stop it, switch it off with setEmployeeStatus. An omitted cap is kept; an explicit null removes it (no per-employee cap). No screen sets these. Read the current caps with getEmployee and state the old and new first. Pass `expectedUpdatedAt`. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setEmployeeDailyCaps: (variables: T.SetEmployeeDailyCapsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetEmployeeDailyCapsMutation> =>
      this.request('setEmployeeDailyCaps', variables, options, { operationType: 'mutation' }),
    /**
     * Who becomes the owner of a contact an AI employee works when the contact has no owner. `mode` decides what `assigneeUserIds` holds (teammate user ids, listTeamMembers): TEAM_RANDOM (the default, any active teammate), NONE (nobody) and SAME_AS_NEW_LEADS (the organization's lead routing) take `[]`; SPECIFIC_USER exactly one; ROUND_ROBIN_LIST two or more, in rotation order. A mismatched pair is refused.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setEmployeeDefaultAssignees: (variables: T.SetEmployeeDefaultAssigneesMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetEmployeeDefaultAssigneesMutation> =>
      this.request('setEmployeeDefaultAssignees', variables, options, { operationType: 'mutation' }),
    /**
     * Replace (or add) the schedule of one employee on one contact (`attachmentId` from getContactEmployees). A fresh cadence: runs already spent do not count against it. A schedule is a 5-field cron (`cronExpression`) read in an IANA `timezone`, at most once a day, and `maxRuns`, how many runs before it stops (never open-ended; at most five years of runs). Each run can text, email or call the contact, so it needs their yes; a card's counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setEmployeeSchedule: (variables: T.SetEmployeeScheduleMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetEmployeeScheduleMutation> =>
      this.request('setEmployeeSchedule', variables, options, { operationType: 'mutation' }),
    /**
     * Switch an AI employee on (ACTIVE) or off (INACTIVE). ON means it starts answering and working the contacts it is on, with real people, right away, which may publish its answer workflows; OFF stops it mid-conversation on every contact it is working. Say which and to how many contacts (getEmployee's `commitments`) and get the person's yes before either. The employee's own chat records the change. Same as the switch on the employee's page.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setEmployeeStatus: (variables: T.SetEmployeeStatusMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetEmployeeStatusMutation> =>
      this.request('setEmployeeStatus', variables, options, { operationType: 'mutation' }),
    /**
     * Set which forms wake an AI employee when someone submits one. `formIds` REPLACES the set (ids from listEmployeeChannelOptions; every one must be this organization's); `[]` means no form wakes it. A form that is not live yet wakes it once it goes live. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setEmployeeTriggerForms: (variables: T.SetEmployeeTriggerFormsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetEmployeeTriggerFormsMutation> =>
      this.request('setEmployeeTriggerForms', variables, options, { operationType: 'mutation' }),
    /**
     * Stop what one AI employee is doing on one contact right now (getContactEmployees' `isWorkingNow`). The run stops at its next step, with anything it started; it stays on the contact and wakes again the next time something wakes it. A stopped run does not come back. Returns STOP_REQUESTED, or NOTHING_RUNNING when it was idle.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    stopEmployeeRuns: (variables: T.StopEmployeeRunsMutationVariables, options?: IdempotentRequestOptions): Promise<T.StopEmployeeRunsMutation> =>
      this.request('stopEmployeeRuns', variables, options, { operationType: 'mutation' }),
    /**
     * Change an AI employee's configuration. To change part of it (a sentence, its tone, an hour), send only the change: `edits` are exact `{ find, replace }` pairs, each `find` copied from `configDocument` and found exactly once across its text (instructions, call scripts), applied in order, all or nothing; `configPatch` is a JSON merge patch for settings (objects merge, anything else replaces; a list to clear is `[]`, e.g. `{ channels: { emailConfig: { sendWindow: {...} } } }`), and a whole new `prompt` goes there too. Whatever you do not name is left as it is. Send `config`, the COMPLETE document, only to rewrite everything; a write that drops text or a channel nobody edited is refused. `name`, `title` and `avatar` are kept when omitted; an empty `title` clears it. The employee builder's checks run on every call and a refusal names each field and what to change: the voice must be one the workspace can use, the instructions must fit, and no line may tell the employee to claim to be a person or deny being an AI. A change that turns off do-not-call or known-litigator screening is refused with the exact sentence to put to the person; ask them, and send the same call again with `acknowledgeScreeningWeakening: true` only if they agree. Pass `expectedUpdatedAt` (the `updatedAt` you read) so a teammate's save in between is refused rather than overwritten. A text `sendWindow` outside 8 AM to 9 PM is saved as asked; the result's `quietHoursNotice` then names the hours in words, and the reply says it once. `textHours` is the window as saved, in words. Does not switch the employee on or off.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateEmployeeConfig: (variables: T.UpdateEmployeeConfigMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateEmployeeConfigMutation> =>
      this.request('updateEmployeeConfig', variables, options, { operationType: 'mutation' }),
    /**
     * Rename an AI employee or change its job title or avatar, nothing else (an omitted field is kept; an empty `title` clears it). A rename is carried into its instructions, as on its page. Pass `expectedUpdatedAt`. On an employee that is switched on it takes effect on its next run: needs their yes; a card’s counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateEmployeeIdentity: (variables: T.UpdateEmployeeIdentityMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateEmployeeIdentityMutation> =>
      this.request('updateEmployeeIdentity', variables, options, { operationType: 'mutation' }),
  }

  readonly files = {
    /**
     * Dismiss a FAILED standalone export from the Files list (the row is kept for the record). Any other export is refused as not found.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteDataExport: (variables: T.DeleteDataExportMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteDataExportMutation> =>
      this.request('deleteDataExport', variables, options, { operationType: 'mutation' }),
    /**
     * Delete an export preset for the whole org, for good (listExportConfigurations id). Exports already made keep their files. Returns false when nothing matched.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteExportConfiguration: (variables: T.DeleteExportConfigurationMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteExportConfigurationMutation> =>
      this.request('deleteExportConfiguration', variables, options, { operationType: 'mutation' }),
    /**
     * PERMANENTLY remove an upload that is still waiting for review (not yet imported). Returns true; an upload already imported, already gone or not yours is refused with an error, not false. Requires the user's explicit approval.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deletePendingUpload: (variables: T.DeletePendingUploadMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeletePendingUploadMutation> =>
      this.request('deletePendingUpload', variables, options, { operationType: 'mutation' }),
    /**
     * Export contacts to a spreadsheet, the download dialog's Start. Selection: `ids` (selectAll false), or a saved `filterId` with `selectAll: true` (every match; `excludeIds` leaves some out) or `selectCount: N` (the first N); `totalCount` is how many the selection holds (round up for a filter) and `estimatedItemCount` the same count. `fileName` names the file. Spends export credits: the same credits as the app with no other cap (plan allowance first, then real money; checkBillingAction first), so name the count and the credits and have the person agree before a large one. Async: poll getBulkTask(bulkTaskId); the file is getExportReport(dataExportId) once it finishes. ADMIN: the key owner must currently be an org admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    exportContacts: (variables: T.ExportContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ExportContactsMutation> =>
      this.request('exportContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Export properties (esIds) to a spreadsheet. Selection: `ids` (selectAll false), or a saved `filterId` with `selectAll: true` (every match; `excludeIds` leaves some out) or `selectCount: N` (the first N); `totalCount` is how many the selection holds (round up for a filter) and `estimatedItemCount` the same count. `fileName` names the file. `includeStreetViewImages` adds a Street View link per row. Spends export credits: the same credits as the app with no other cap (plan allowance first, then real money; checkBillingAction first), so name the count and the credits and have the person agree before a large one. Async: poll getBulkTask(bulkTaskId); the file is getExportReport(dataExportId) once it finishes. ADMIN: the key owner must currently be an org admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    exportProperties: (variables: T.ExportPropertiesMutationVariables, options?: IdempotentRequestOptions): Promise<T.ExportPropertiesMutation> =>
      this.request('exportProperties', variables, options, { operationType: 'mutation' }),
    /**
     * One export's report, by `dataExportId` (a listFiles `downloads` id, or the one a bulk task returns): its type, rows, the saved filter it was run from, and its skip-trace and enrichment outcomes and spend. It never reads the file, so it cannot say which columns or phone numbers the file holds.
     *
     * @remarks Requires the READ scope.
     */
    getExportReport: (variables: T.GetExportReportQueryVariables, options?: RequestOptions): Promise<T.GetExportReportQuery> =>
      this.request('getExportReport', variables, options, { operationType: 'query' }),
    /**
     * One upload's report — what its report sheet shows: rows in the file, how many contacts or properties it created, matched to existing records, restored, merged, skipped, failed or duplicated, and its skip-trace outcome and spend. Needs to be the uploader or able to see all contacts. Read the rows behind a count with listUploadReportRows.
     *
     * @remarks Requires the READ scope.
     */
    getUploadReport: (variables: T.GetUploadReportQueryVariables, options?: RequestOptions): Promise<T.GetUploadReportQuery> =>
      this.request('getUploadReport', variables, options, { operationType: 'query' }),
    /**
     * The org's saved export presets (the download dialog's row shapes): id, name, description, and which one is the default the dialog opens with.
     *
     * @remarks Requires the READ scope.
     */
    listExportConfigurations: (options?: RequestOptions): Promise<T.ListExportConfigurationsQuery> =>
      this.request('listExportConfigurations', undefined, options, { operationType: 'query' }),
    /**
     * The Files list, newest first: `uploads` (imports — status, type, file name, rows, who and when; the id is the `fileProcessingTaskId` for getUploadReport) and `downloads` (standalone exports — the id is the `dataExportId` for getExportReport). `filterTree` is a BULK_TASK filter tree, the same `{ id, operator, conditions: [{ id, fieldId, value }], groups }` shape every filter takes. Uploads only: `{"id":"r","operator":"AND","groups":[],"conditions":[{"id":"u","fieldId":"hasFileProcessingTask","value":true}]}`. Downloads only: conditions `hasDataExport` true AND `hasFileProcessingTask` false. Both: an OR group of the two presence conditions. Add `fileName` (text) to search names, `fileProcessingTaskType` / `dataExportType` (["CONTACTS"|"PROPERTIES"|"SKIPTRACES"|"PROPERTY_SIGNALS"]) for a type. Page with limit/offset.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listFiles: (variables?: T.ListFilesQueryVariables, options?: RequestOptions): Promise<T.ListFilesQuery> =>
      this.request('listFiles', variables, options, { operationType: 'query' }),
    /**
     * The rows of one upload's report in one `bucket` (ALL_ROWS, CREATED, MATCHED, RESTORED, MERGED_AFTER_IMPORT, DUPLICATE_ROWS, SKIPPED, FAILED): the row number, its outcome and reason, the original CSV row, and the contact or property it became. Page with limit/offset; `total` counts the bucket. A later step on these contacts acts on each row's `contact.id`, never a lookup by name (two contacts can share one).
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listUploadReportRows: (variables: T.ListUploadReportRowsQueryVariables, options?: RequestOptions): Promise<T.ListUploadReportRowsQuery> =>
      this.request('listUploadReportRows', variables, options, { operationType: 'query' }),
    /**
     * Rename an export's file. The contact list or property tag the export made keeps the name it was given.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameDataExport: (variables: T.RenameDataExportMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameDataExportMutation> =>
      this.request('renameDataExport', variables, options, { operationType: 'mutation' }),
    /**
     * Rename an uploaded file (listFiles `uploads[].file.id`, or a deal's or contact's file).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameUploadedFile: (variables: T.RenameUploadedFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameUploadedFileMutation> =>
      this.request('renameUploadedFile', variables, options, { operationType: 'mutation' }),
    /**
     * Make one export preset (listExportConfigurations id) the org's default in the download dialog, for everyone.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setDefaultExportConfiguration: (variables: T.SetDefaultExportConfigurationMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetDefaultExportConfigurationMutation> =>
      this.request('setDefaultExportConfiguration', variables, options, { operationType: 'mutation' }),
    /**
     * Bulk skip trace properties (esIds) and make a contact for each owner, into an export list, plus `contactListIds` and enrolled in `contactWorkflowIds` (which can text or email them). Selection: `ids` (selectAll false), or a saved `filterId` with `selectAll: true` (every match; `excludeIds` leaves some out) or `selectCount: N` (the first N); `totalCount` is how many the selection holds (round up for a filter) and `estimatedItemCount` the same count. `fileName` names the file. CONSUMES ONE SKIPTRACE CREDIT PER PROPERTY: the same credits as the app with no other cap (plan allowance first, then real money; checkBillingAction first), so name the count and the credits and have the person agree before a large one. Async: poll getBulkTask(bulkTaskId); the file is getExportReport(dataExportId) once it finishes. ADMIN: the key owner must currently be an org admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    skipTraceAndCreateContactsFromProperties: (variables: T.SkipTraceAndCreateContactsFromPropertiesMutationVariables, options?: IdempotentRequestOptions): Promise<T.SkipTraceAndCreateContactsFromPropertiesMutation> =>
      this.request('skipTraceAndCreateContactsFromProperties', variables, options, { operationType: 'mutation' }),
    /**
     * Bulk skip trace properties (esIds) and export owners, phones and emails to a spreadsheet. Selection: `ids` (selectAll false), or a saved `filterId` with `selectAll: true` (every match; `excludeIds` leaves some out) or `selectCount: N` (the first N); `totalCount` is how many the selection holds (round up for a filter) and `estimatedItemCount` the same count. `fileName` names the file. CONSUMES ONE SKIPTRACE CREDIT PER PROPERTY: the same credits as the app with no other cap (plan allowance first, then real money; checkBillingAction first), so name the count and the credits and have the person agree before a large one. Async: poll getBulkTask(bulkTaskId); the file is getExportReport(dataExportId) once it finishes. ADMIN: the key owner must currently be an org admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    skipTraceAndExportProperties: (variables: T.SkipTraceAndExportPropertiesMutationVariables, options?: IdempotentRequestOptions): Promise<T.SkipTraceAndExportPropertiesMutation> =>
      this.request('skipTraceAndExportProperties', variables, options, { operationType: 'mutation' }),
    /**
     * Bulk skip trace contacts for phones and emails. Selection: `ids` (selectAll false), or a saved `filterId` with `selectAll: true` (every match; `excludeIds` leaves some out) or `selectCount: N` (the first N); `totalCount` is how many the selection holds (round up for a filter) and `estimatedItemCount` the same count. `fileName` names the file. `skiptraceAddress` picks the address (omit for the default). CONSUMES ONE SKIPTRACE CREDIT PER CONTACT: the same credits as the app with no other cap (plan allowance first, then real money; checkBillingAction first), so name the count and the credits and have the person agree before a large one. Async: poll getBulkTask(bulkTaskId); the file is getExportReport(dataExportId) once it finishes. ADMIN: the key owner must currently be an org admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    skipTraceContacts: (variables: T.SkipTraceContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SkipTraceContactsMutation> =>
      this.request('skipTraceContacts', variables, options, { operationType: 'mutation' }),
  }

  readonly forms = {
    /**
     * Create a lead-capture form. Requires name and fieldConfig. At least one field is required and at most one calendar field is allowed. Entries must match that shape exactly - a malformed entry (bad type/width/etc.) or an unrecognized mapping is rejected with a validation error naming the offending field. fieldConfig is the form's ENTIRE page-and-field document, in one of two shapes. (a) SINGLE PAGE: a flat array of field objects. (b) MULTI-STEP (pages / steps): { "fields": [ ...the same fields, each with a "stepId" ], "steps": [ { "id": "page-1", "name": "Your details", "title": "...", "subtitle": "...", "ctaLabel": "Continue" } ], "showStepProgress": true }. Multi-page forms ARE supported. Steps are pages in array order, with a "Step N of M" progress indicator unless "showStepProgress" is false. Step "id" is unique; "name" labels the step in the FORM BUILDER only. Visitors see "title"/"subtitle" and "ctaLabel" (button text); a "ctaLabel" on the LAST step BEATS submitButtonLabel. In a ONE-step envelope they render nothing (use headerText / descriptionText / submitButtonLabel). An unknown stepId is REJECTED, as is any "stepId" in shape (a): steps require the envelope. No "stepId" = first page; keep "order" unique and ascending. BRANCHING: a step's "routes" run in order, each { "match": "all" | "any", "conditions": [ { "fieldKey", "anyOf": [option labels; "true"/"false" for a checkbox] } ], "goTo": a LATER step id | "submit" }; "otherwise" (same values) covers the rest (default: next step). Conditions test dropdown/multiselect/checkbox fields on that step or earlier; a bad destination, or a step "id" of "submit", is REJECTED. A skipped step's required fields are not required. "endings": [ { "id", "name", "title", "subtitle", "icon" (check|calendar|mail|heart|star|info|none), "iconColor" (#rrggbb), "workflowGroupIds", "agentIds", "tagIds", "listIds" } ]; "goTo"/"otherwise" "end:<id>" ends there, adding its ids to the form's actions ("submitted" is reserved). "createsLead": true on one step before the last creates the lead when it is done; later answers join that contact. "collectsConsent": true shows consent and terms on that step only (default: the lead step, else the last).Each field object is { fieldKey, label, type, required, order, width, mapping, dropdownOptions?, placeholder?, stepId? } plus the optional keys below. `type` is one of text|email|phone|number|dollar|dropdown|multiselect|textarea|checkbox|address|calendar; `width` is full|half|third. `mapping` is one of firstName|lastName|fullName|email|phone|address|note|none|customField:<id> — fullName is ONE box for the whole name. LENGTH LIMITS, refused at write time (never truncated) with a message naming the field: `fieldKey` at 200 characters, every `dropdownOptions` entry (and the `formOptionLabel` copied from it) at 256. FIELD KEYS beyond the common ones — the list above is NOT the whole vocabulary. `hideLabel` hides the label visually while leaving it for screen readers. `validation` takes { minLength, maxLength, pattern, customErrorMessage } and, for an address field, { addressMode: "single" | "split", requireStreet, requireCity, requireState, requireZipCode, requireCountry }. `customFieldOptionMappings` is [{ formOptionLabel, customFieldOptionId }] and maps the option labels of a dropdown OR multiselect field onto an EXISTING custom field's options instead of minting new ones. Every label (a multiselect answer is split per label) resolves through this table, and an unmapped label is SILENTLY SKIPPED — the submission succeeds and that CRM field stays empty. So map every option. `calendarConfig` configures a calendar field: { slotDurationMinutes: [..], defaultDurationMinutes, bufferBeforeMinutes, bufferAfterMinutes, maxAdvanceDays, minNoticeHours, appointmentTitleTemplate, defaultLocation?, locationType?: "VIDEO_CALL" | "CUSTOM" | "PHONE_CALL", calendarProvider?: "GOOGLE" | "MICROSOFT", requireCardToConfirm? }. `locationType: "VIDEO_CALL"` makes the join link minted on the host’s calendar (Google Meet, or Teams when calendarProvider is MICROSOFT) the location; "CUSTOM" (the default) shows `defaultLocation` — an address or a pasted Zoom link; "PHONE_CALL" mints no link and the host calls the number the booker entered, so the form must have a REQUIRED `type: "phone"` field mapped to `phone`, or the write is refused. A calendar field with NO calendarConfig renders no picker at all, and nothing errors, so always send it. CONSENT IS NOT A CHECKBOX FIELD. A `type: "checkbox"` field is an ordinary answer in submittedData: no wording is captured, no consent snapshot or `SmsConsent` row is written, so it proves nothing to a carrier, an A2P review or a TCPA dispute. The Legal & Consent fields are the only consent evidence — `collectSmsConsent` with `smsTransactionalConsentText` and `smsMarketingConsentText`, `showMarketingConsent` with `marketingConsentText`, and `termsAndConditionsText` (below). A checkbox whose label reads as SMS consent is REFUSED at write time, naming the field to use instead; on updateForm only a field you ADD is refused, one the form already had is carried forward. A DROPDOWN OR MULTISELECT OPTION worded as consent records just as little and is NOT refused, so never collect consent that way. A NEW CALENDAR FORM CAN BE BUILT AND PUBLISHED ENTIRELY THROUGH THIS API — never say routing has to be set up in the app: author the fields, set `assignmentConfig`, then updateForm(status: ACTIVE). Activating a CALENDAR form is rejected with "Please add an agent to route form submissions to." when the effective pool is empty, or "Pick a schedule for every assignee on a calendar form." when an assignee has no calendarConfig — both fixable in the publishing call. The gate is CALENDAR-ONLY: a form with no calendar field publishes with an empty pool, it just routes nobody. Some organizations also enforce a connected-mailbox launch gate on the first DRAFT/INACTIVE-to-ACTIVE transition: every assignee must have the form's pinned GOOGLE or MICROSOFT provider connected (either, when none is pinned); if it rejects, connect the named account in the app and retry. Assignees whose calendarConfig.isFixed is true are excluded from rotation and always attend; if every assignee is fixed there is no rotation, and the first assignee is the host.  Dedupe (dedupePrimaryField, with dedupeSecondaryField as fallback) only takes effect when allowDuplicateContact is false; it defaults to true, meaning every submission creates a new contact. Optional submitButtonLabel sets the submit button text; optional styleConfig sets the visual styling (see updateForm for the full key vocabulary). New forms start in DRAFT - publish with updateForm(status: ACTIVE). assignmentConfig is the LEAD ROUTING pool. `assignees` is an ordered list — ARRAY ORDER IS THE ROTATION ORDER among NON-FIXED assignees (`isFixed` ones always attend): one hosts every booking, two or more is least-recently-booked round-robin. Each is { userId } (from listTeammates, same-org), plus, on a CALENDAR form, a required calendarConfig: { isFixed, checkExternalCalendars } — a calendar form REJECTS an assignee without one; a non-calendar form does not reject one that carries it (stored, unused). `teamIds` are UserGroup ids added to every created/matched contact; `participantUserIds` are users attached as PARTICIPANT on it. DESIRED-STATE, REPLACED WHOLE: omit the key and the stored pool is untouched; pass it and the three lists BECOME the pool, so read with getForm, merge, and send the merged object back rather than one list alone. All three keys are required when you send it — pass [] for the ones you do not want, no duplicates. The response echoes the stored pool with names; confirm from that. The EFFECTIVE pool is the one you send, else the stored one, so an already-routed form reactivates without resending it (the calendar publish gate reads the effective pool). SMS/marketing consent, which is the A2P opt-in EVIDENCE surface: `collectSmsConsent` renders the transactional opt-in checkbox, labelled `smsTransactionalConsentText`, and `smsDisclaimerText` is the paragraph BELOW both boxes, which nobody ticks. SEND THE TEXT WITH THE TOGGLE: the snapshot resolves the SAME defaults the renderer resolves, so an OMITTED or null label records the built-in copy, but that copy is generic. NEVER send an empty string for a consent label: `""` (unlike null) renders a checkbox with no wording and files that empty string as the evidence — omit it or send null. Turning on `collectSmsConsent` ALONE also renders a marketing checkbox, worded and recorded from `smsMarketingConsentText` (or a default), so set that deliberately. `showMarketingConsent` is the separate standalone SMS marketing checkbox. Enabling it requires BOTH `showMarketingConsent: true` and non-empty `marketingConsentText` that explicitly describes SMS/text messages, plus a field with `type: "phone"` and `mapping: "phone"`; submissions are recorded as `SmsConsent`. Never use this pair for email authorization — standalone email consent is not supported. On update, resend the toggle and its SMS wording together. With no `marketingConsentText` it does not render at all, though the toggle reads as on; an omitted key, not null, records a box never offered. Transactional and marketing consent are DISTINCT — collecting one is not collecting the other. `triggerAgentIds` wires AI employees to the form: DESIRED-STATE, so the ids you send BECOME the complete set (send [] to detach all), and every submission puts them on the created or matched contact — read the current set from getForm and merge rather than sending one id alone. Legal text: `termsAndConditionsText` sits under the submit button, `privacyPolicyUrl`/`termsOfServiceUrl` link out, and `privacyPolicyContent`/`termsOfServiceContent` hold inline copy instead of a link. `slackMessageTemplate` is the {{token}} body for the Slack notification. The Powered by Goliath footer is NOT settable here (a Scale entitlement). `gtmContainerId` is a Google Tag Manager container, validated as GTM-XXXX and honoured on the hosted page only, not on an embed. `source` is the lead-source label stored on the form; getForm returns it and ownerType alongside. Notification DESTINATIONS: `enableEmailNotification`, `enableSmsNotification` and `enableSlackNotification`; the Slack one (and `slackMessageTemplate`) needs `slackChannelId` (plus `slackChannelName` for display). A channel or template without its toggle changes nothing a person will see, so send the toggle with them. getForm READS BACK everything in this paragraph, to verify a write or read the current copy before changing one field. The optional slug IS settable here, and this is the only operation in this API that takes it (updateForm does not thread it - a later rename is an app action): it is the last path segment of the form's public URL, must be 1-128 characters of lowercase letters, digits and hyphens and may not start or end with a hyphen, and must be unique within your organization - a taken slug is rejected with "This slug is already taken", it is never silently suffixed. Omit it and one is generated from the name.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createForm: (variables: T.CreateFormMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateFormMutation> =>
      this.request('createForm', variables, options, { operationType: 'mutation' }),
    /**
     * A link to an ACTIVE form for one contact, opening prefilled with their details; their answers land on their contact. url for an email's link, shortUrl for a text.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createFormContactLink: (variables: T.CreateFormContactLinkMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateFormContactLinkMutation> =>
      this.request('createFormContactLink', variables, options, { operationType: 'mutation' }),
    /**
     * HARD-DELETE a lead-capture form by id. IRREVERSIBLE and CASCADING - this also permanently removes ALL of the form's submissions, events, and viewer/lead history. To turn a form off without losing data, use updateForm(status: INACTIVE) instead. Returns true on success.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteForm: (variables: T.DeleteFormMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteFormMutation> =>
      this.request('deleteForm', variables, options, { operationType: 'mutation' }),
    /**
     * Copy a form: its fields, steps and settings, never its submissions or analytics. name defaults to "<name> copy". Returns the new form.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    duplicateForm: (variables: T.DuplicateFormMutationVariables, options?: IdempotentRequestOptions): Promise<T.DuplicateFormMutation> =>
      this.request('duplicateForm', variables, options, { operationType: 'mutation' }),
    /**
     * Fetch one lead-capture form by id - full configuration including fieldConfig (the page-and-field document: either a flat array of fields for a single-page form, or a { fields, steps, showStepProgress } envelope for a multi-page one - see createForm), styleConfig (the JSON object of visual styling - colors, typography, spacing, border radius, button/input styling, custom CSS; null = default styling; see updateForm for the key vocabulary), submitButtonLabel, auto-apply tags/lists, dedupe settings, notification toggles, and the assignee pool. Use fieldConfig to interpret the submittedData keys returned by listFormSubmissions; read fieldConfig before editing fields or pages, and styleConfig before restyling, so an updateForm write merges instead of clobbering.
     *
     * @remarks Requires the READ scope.
     */
    getForm: (variables: T.GetFormQueryVariables, options?: RequestOptions): Promise<T.GetFormQuery> =>
      this.request('getForm', variables, options, { operationType: 'query' }),
    /**
     * Daily active-engagement time on one form over a date range - per day: session count and active-millisecond percentiles (p50/p90), split by submitted vs abandoned sessions. startDate and endDate are ISO YYYY-MM-DD; ranges longer than 90 days are rejected.
     *
     * @remarks Requires the READ scope.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    getFormActiveTime: (variables: T.GetFormActiveTimeQueryVariables, options?: RequestOptions): Promise<T.GetFormActiveTimeQuery> =>
      this.request('getFormActiveTime', variables, options, { operationType: 'query' }),
    /**
     * Conversion funnel for one form over a date range - views, starts, submits, the start/submit/submit-of-started rates (0-1 fractions), median seconds-to-submit, plus a per-day time series. startDate and endDate are ISO YYYY-MM-DD; ranges longer than 90 days are rejected.
     *
     * @remarks Requires the READ scope.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    getFormAnalytics: (variables: T.GetFormAnalyticsQueryVariables, options?: RequestOptions): Promise<T.GetFormAnalyticsQuery> =>
      this.request('getFormAnalytics', variables, options, { operationType: 'query' }),
    /**
     * Lead-assignment distribution for one form's round-robin pool - the number of leads routed to each assigned user. userId maps to a teammate from listTeammates.
     *
     * @remarks Requires the READ scope.
     */
    getFormRoutingDistribution: (variables: T.GetFormRoutingDistributionQueryVariables, options?: RequestOptions): Promise<T.GetFormRoutingDistributionQuery> =>
      this.request('getFormRoutingDistribution', variables, options, { operationType: 'query' }),
    /**
     * Fetch one form submission (lead) by id - its submitted field values (submittedData) and the linked CRM contactId.
     *
     * @remarks Requires the READ scope.
     */
    getFormSubmission: (variables: T.GetFormSubmissionQueryVariables, options?: RequestOptions): Promise<T.GetFormSubmissionQuery> =>
      this.request('getFormSubmission', variables, options, { operationType: 'query' }),
    /**
     * Where a form's traffic and submissions come from - breakdowns by traffic source, device class, and location, each with views, submits, and the submit rate.
     *
     * @remarks Requires the READ scope.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    getFormTrafficSources: (variables: T.GetFormTrafficSourcesQueryVariables, options?: RequestOptions): Promise<T.GetFormTrafficSourcesQuery> =>
      this.request('getFormTrafficSources', variables, options, { operationType: 'query' }),
    /**
     * Recent per-session activity for one form, newest first, cursor-paginated via after. Each row is a viewer session with its status, submit/abandon timestamps, traffic source, device, seconds-to-submit, the matched contact name, and the assigned point-person. Pass excludeViewOnly: true to drop sessions that never started filling.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    listFormActivity: (variables: T.ListFormActivityQueryVariables, options?: RequestOptions): Promise<T.ListFormActivityQuery> =>
      this.request('listFormActivity', variables, options, { operationType: 'query' }),
    /**
     * Approximate geo coordinates of recent sessions for one form, for plotting a lead map. Latitude/longitude are rounded to ~1km. Each point carries its session status and the linked submission id (if any).
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 500.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    listFormActivityLocations: (variables: T.ListFormActivityLocationsQueryVariables, options?: RequestOptions): Promise<T.ListFormActivityLocationsQuery> =>
      this.request('listFormActivityLocations', variables, options, { operationType: 'query' }),
    /**
     * The org's lead-capture forms (embed forms): name, slug, status (DRAFT | ACTIVE | INACTIVE), lifetime submissions, public URL, folderId. The id feeds getForm, listFormSubmissions and getFormAnalytics.
     *
     * @remarks Requires the READ scope.
     */
    listForms: (options?: RequestOptions): Promise<T.ListFormsQuery> =>
      this.request('listForms', undefined, options, { operationType: 'query' }),
    /**
     * List form submissions (leads), newest first, optionally filtered to one form via formId. Each row carries the submitted field values (submittedData) and the contactId of the CRM contact it created or matched - use that contactId with getContact, updateContact, or addContactNote. Returns a capped page plus the unpaged totalCount.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listFormSubmissions: (variables?: T.ListFormSubmissionsQueryVariables, options?: RequestOptions): Promise<T.ListFormSubmissionsQuery> =>
      this.request('listFormSubmissions', variables, options, { operationType: 'query' }),
    /**
     * Update a lead-capture form by id. Patch semantics - omitted fields are left unchanged; passing fieldConfig replaces the ENTIRE document, fields AND steps, so adding, renaming, reordering, or removing a page is a fieldConfig write: read the current document with getForm, edit it, and send the whole thing back (same shape rules as createForm - a malformed entry or unrecognized mapping is rejected, not silently dropped). fieldConfig is the form's ENTIRE page-and-field document, in one of two shapes. (a) SINGLE PAGE: a flat array of field objects. (b) MULTI-STEP (pages / steps): { "fields": [ ...the same fields, each with a "stepId" ], "steps": [ { "id": "page-1", "name": "Your details", "title": "...", "subtitle": "...", "ctaLabel": "Continue" } ], "showStepProgress": true }. Multi-page forms ARE supported. Steps are pages in array order, with a "Step N of M" progress indicator unless "showStepProgress" is false. Step "id" is unique; "name" labels the step in the FORM BUILDER only. Visitors see "title"/"subtitle" and "ctaLabel" (button text); a "ctaLabel" on the LAST step BEATS submitButtonLabel. In a ONE-step envelope they render nothing (use headerText / descriptionText / submitButtonLabel). An unknown stepId is REJECTED, as is any "stepId" in shape (a): steps require the envelope. No "stepId" = first page; keep "order" unique and ascending. BRANCHING: a step's "routes" run in order, each { "match": "all" | "any", "conditions": [ { "fieldKey", "anyOf": [option labels; "true"/"false" for a checkbox] } ], "goTo": a LATER step id | "submit" }; "otherwise" (same values) covers the rest (default: next step). Conditions test dropdown/multiselect/checkbox fields on that step or earlier; a bad destination, or a step "id" of "submit", is REJECTED. A skipped step's required fields are not required. "endings": [ { "id", "name", "title", "subtitle", "icon" (check|calendar|mail|heart|star|info|none), "iconColor" (#rrggbb), "workflowGroupIds", "agentIds", "tagIds", "listIds" } ]; "goTo"/"otherwise" "end:<id>" ends there, adding its ids to the form's actions ("submitted" is reserved). "createsLead": true on one step before the last creates the lead when it is done; later answers join that contact. "collectsConsent": true shows consent and terms on that step only (default: the lead step, else the last).Each field object is { fieldKey, label, type, required, order, width, mapping, dropdownOptions?, placeholder?, stepId? } plus the optional keys below. `type` is one of text|email|phone|number|dollar|dropdown|multiselect|textarea|checkbox|address|calendar; `width` is full|half|third. `mapping` is one of firstName|lastName|fullName|email|phone|address|note|none|customField:<id> — fullName is ONE box for the whole name. LENGTH LIMITS, refused at write time (never truncated) with a message naming the field: `fieldKey` at 200 characters, every `dropdownOptions` entry (and the `formOptionLabel` copied from it) at 256. FIELD KEYS beyond the common ones — the list above is NOT the whole vocabulary. `hideLabel` hides the label visually while leaving it for screen readers. `validation` takes { minLength, maxLength, pattern, customErrorMessage } and, for an address field, { addressMode: "single" | "split", requireStreet, requireCity, requireState, requireZipCode, requireCountry }. `customFieldOptionMappings` is [{ formOptionLabel, customFieldOptionId }] and maps the option labels of a dropdown OR multiselect field onto an EXISTING custom field's options instead of minting new ones. Every label (a multiselect answer is split per label) resolves through this table, and an unmapped label is SILENTLY SKIPPED — the submission succeeds and that CRM field stays empty. So map every option. `calendarConfig` configures a calendar field: { slotDurationMinutes: [..], defaultDurationMinutes, bufferBeforeMinutes, bufferAfterMinutes, maxAdvanceDays, minNoticeHours, appointmentTitleTemplate, defaultLocation?, locationType?: "VIDEO_CALL" | "CUSTOM" | "PHONE_CALL", calendarProvider?: "GOOGLE" | "MICROSOFT", requireCardToConfirm? }. `locationType: "VIDEO_CALL"` makes the join link minted on the host’s calendar (Google Meet, or Teams when calendarProvider is MICROSOFT) the location; "CUSTOM" (the default) shows `defaultLocation` — an address or a pasted Zoom link; "PHONE_CALL" mints no link and the host calls the number the booker entered, so the form must have a REQUIRED `type: "phone"` field mapped to `phone`, or the write is refused. A calendar field with NO calendarConfig renders no picker at all, and nothing errors, so always send it. CONSENT IS NOT A CHECKBOX FIELD. A `type: "checkbox"` field is an ordinary answer in submittedData: no wording is captured, no consent snapshot or `SmsConsent` row is written, so it proves nothing to a carrier, an A2P review or a TCPA dispute. The Legal & Consent fields are the only consent evidence — `collectSmsConsent` with `smsTransactionalConsentText` and `smsMarketingConsentText`, `showMarketingConsent` with `marketingConsentText`, and `termsAndConditionsText` (below). A checkbox whose label reads as SMS consent is REFUSED at write time, naming the field to use instead; on updateForm only a field you ADD is refused, one the form already had is carried forward. A DROPDOWN OR MULTISELECT OPTION worded as consent records just as little and is NOT refused, so never collect consent that way. A NEW CALENDAR FORM CAN BE BUILT AND PUBLISHED ENTIRELY THROUGH THIS API — never say routing has to be set up in the app: author the fields, set `assignmentConfig`, then updateForm(status: ACTIVE). Activating a CALENDAR form is rejected with "Please add an agent to route form submissions to." when the effective pool is empty, or "Pick a schedule for every assignee on a calendar form." when an assignee has no calendarConfig — both fixable in the publishing call. The gate is CALENDAR-ONLY: a form with no calendar field publishes with an empty pool, it just routes nobody. Some organizations also enforce a connected-mailbox launch gate on the first DRAFT/INACTIVE-to-ACTIVE transition: every assignee must have the form's pinned GOOGLE or MICROSOFT provider connected (either, when none is pinned); if it rejects, connect the named account in the app and retry. Assignees whose calendarConfig.isFixed is true are excluded from rotation and always attend; if every assignee is fixed there is no rotation, and the first assignee is the host.  The mutation returns the stored fieldConfig, so you can verify the pages landed without a second getForm. Activate or deactivate with status (ACTIVE | INACTIVE); prefer status: INACTIVE over deleteForm to turn a form off without losing its submissions. submitButtonLabel sets the submit button text. styleConfig restyles the rendered form (both the hosted page and the iframe embed): a JSON object replaced whole on each write - read the current value with getForm, merge your changes, and send the merged object back; {} resets everything to defaults. All keys optional. Colors are CSS color strings: primaryColor (buttons/accents), backgroundColor, textColor, errorColor, successColor, inputBackgroundColor, inputBorderColor, inputPlaceholderColor, inputFocusColor (focus ring), buttonTextColor, requiredIndicatorColor, dividerColor, formBorderColor. fontFamily is a font name (e.g. "Georgia"). Pixel numbers (JSON numbers, no units): borderRadius (inputs+buttons corner rounding), spacing (gap between fields), inputBorderWidth, inputFocusRingWidth, labelGap, buttonTopMargin, formMaxWidth, formPadding, formBorderWidth. Enums: layout (vertical | horizontal - responsive field layout), inputHeight / labelSize / buttonSize (small | medium | large), labelWeight / buttonFontWeight (normal | medium | semibold | bold), labelPosition (above | inline | floating), buttonStyle (filled | outlined | rounded), buttonWidth (auto | full), buttonTextTransform (none | uppercase | capitalize), buttonHoverEffect (darken | lighten | none), formShadow (none | sm | md | lg). Booleans: formBorder, showDividers. customCss is NOT free-form CSS: only the rules the form builder Customize-CSS tab can author; anything else is REJECTED naming the offending selector or property. The twelve allowed selectors, with the properties permitted under each: `.embed-root` (padding, max-width, align-items); `.embed-form .form-container` (background, padding, border-radius, max-width, box-shadow); `.embed-form .form-label` (color, font-size, font-weight, margin-bottom); `.embed-form .form-input` (background, border, border-radius, padding, font-size, color); `.embed-form .form-submit` (background, color, border-radius, padding, font-size, font-weight); `.embed-form .form-error` (color, font-size, margin-top); `.embed-form .form-field` (margin-bottom, gap); and, for a form with a calendar field, `.embed-form .cal-day--available` (background, color, border-radius), `.embed-form .cal-day--selected` (background, color), `.embed-form .cal-slot-btn` (border-color, color, border-radius, background), `.embed-form .cal-slot-btn--selected` (background, color, border-color) and `.embed-form .cal-summary-card` (background, border, border-radius, padding). No other selector, pseudo-element or property. Prefer the typed keys above. Unknown or mistyped keys elsewhere in styleConfig are silently ignored at render time (the default applies), so stay within this vocabulary. The slug (the last segment of the public URL) is settable at CREATION - createForm takes an optional slug - but THIS operation does not thread it, so it cannot be changed here. It is NOT immutable: the app's form builder renames it, and a rename changes the public URL for good (old links stop resolving), so "change my form URL" is an app hand-off, not an impossibility. assignmentConfig is the LEAD ROUTING pool. `assignees` is an ordered list — ARRAY ORDER IS THE ROTATION ORDER among NON-FIXED assignees (`isFixed` ones always attend): one hosts every booking, two or more is least-recently-booked round-robin. Each is { userId } (from listTeammates, same-org), plus, on a CALENDAR form, a required calendarConfig: { isFixed, checkExternalCalendars } — a calendar form REJECTS an assignee without one; a non-calendar form does not reject one that carries it (stored, unused). `teamIds` are UserGroup ids added to every created/matched contact; `participantUserIds` are users attached as PARTICIPANT on it. DESIRED-STATE, REPLACED WHOLE: omit the key and the stored pool is untouched; pass it and the three lists BECOME the pool, so read with getForm, merge, and send the merged object back rather than one list alone. All three keys are required when you send it — pass [] for the ones you do not want, no duplicates. The response echoes the stored pool with names; confirm from that. The EFFECTIVE pool is the one you send, else the stored one, so an already-routed form reactivates without resending it (the calendar publish gate reads the effective pool). SMS/marketing consent, which is the A2P opt-in EVIDENCE surface: `collectSmsConsent` renders the transactional opt-in checkbox, labelled `smsTransactionalConsentText`, and `smsDisclaimerText` is the paragraph BELOW both boxes, which nobody ticks. SEND THE TEXT WITH THE TOGGLE: the snapshot resolves the SAME defaults the renderer resolves, so an OMITTED or null label records the built-in copy, but that copy is generic. NEVER send an empty string for a consent label: `""` (unlike null) renders a checkbox with no wording and files that empty string as the evidence — omit it or send null. Turning on `collectSmsConsent` ALONE also renders a marketing checkbox, worded and recorded from `smsMarketingConsentText` (or a default), so set that deliberately. `showMarketingConsent` is the separate standalone SMS marketing checkbox. Enabling it requires BOTH `showMarketingConsent: true` and non-empty `marketingConsentText` that explicitly describes SMS/text messages, plus a field with `type: "phone"` and `mapping: "phone"`; submissions are recorded as `SmsConsent`. Never use this pair for email authorization — standalone email consent is not supported. On update, resend the toggle and its SMS wording together. With no `marketingConsentText` it does not render at all, though the toggle reads as on; an omitted key, not null, records a box never offered. Transactional and marketing consent are DISTINCT — collecting one is not collecting the other. `triggerAgentIds` wires AI employees to the form: DESIRED-STATE, so the ids you send BECOME the complete set (send [] to detach all), and every submission puts them on the created or matched contact — read the current set from getForm and merge rather than sending one id alone. Legal text: `termsAndConditionsText` sits under the submit button, `privacyPolicyUrl`/`termsOfServiceUrl` link out, and `privacyPolicyContent`/`termsOfServiceContent` hold inline copy instead of a link. `slackMessageTemplate` is the {{token}} body for the Slack notification. The Powered by Goliath footer is NOT settable here (a Scale entitlement). `gtmContainerId` is a Google Tag Manager container, validated as GTM-XXXX and honoured on the hosted page only, not on an embed. `source` is the lead-source label stored on the form; getForm returns it and ownerType alongside. Notification DESTINATIONS: `enableEmailNotification`, `enableSmsNotification` and `enableSlackNotification`; the Slack one (and `slackMessageTemplate`) needs `slackChannelId` (plus `slackChannelName` for display). A channel or template without its toggle changes nothing a person will see, so send the toggle with them. getForm READS BACK everything in this paragraph, to verify a write or read the current copy before changing one field.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateForm: (variables: T.UpdateFormMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateFormMutation> =>
      this.request('updateForm', variables, options, { operationType: 'mutation' }),
  }

  readonly libraryFileRuns = {
    /**
     * Run it: the step the Files review's confirm runs. A skip trace spends credits and adds the phones and emails to the file as a new version; a tag puts the properties on tagName's list. skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Only after the person said yes to this run. It starts in the background and returns at once.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    confirmLibraryFileRun: (variables: T.ConfirmLibraryFileRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.ConfirmLibraryFileRunMutation> =>
      this.request('confirmLibraryFileRun', variables, options, { operationType: 'mutation' }),
    /**
     * Map a run's columns with the import mapper (up to a few minutes). skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Returns totalRows and the columns with example values (csvSample). Nothing runs.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    mapLibraryFileRun: (variables: T.MapLibraryFileRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.MapLibraryFileRunMutation> =>
      this.request('mapLibraryFileRun', variables, options, { operationType: 'mutation' }),
    /**
     * The first rows of a mapped run as it reads them: for a skip trace each row's lookups (inputs: whose owner, at which address), for a tag the properties. The row count is how many rows it reads. A skip trace costs up to one credit per lookup: rows times the lookups per row. skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. limit is 1 to 10. Read only.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 10.
     */
    previewLibraryFileRun: (variables: T.PreviewLibraryFileRunQueryVariables, options?: RequestOptions): Promise<T.PreviewLibraryFileRunQuery> =>
      this.request('previewLibraryFileRun', variables, options, { operationType: 'query' }),
    /**
     * Change how a run maps the spreadsheet's columns, in the person's words (message), then read previewLibraryFileRun again. skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Nothing runs.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reviseLibraryFileRun: (variables: T.ReviseLibraryFileRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReviseLibraryFileRunMutation> =>
      this.request('reviseLibraryFileRun', variables, options, { operationType: 'mutation' }),
    /**
     * Start a run on a Library file (a .csv, .xlsx or .xls spreadsheet; spaceItemId from the chat trailer or searchSpaceItems): a skip trace finds owner phones and emails, a tag puts its properties on a list (a contact import is startContactImport). skipTrace is true for a SKIPTRACE run and false for TAG_PROPERTIES. Returns the run (fileProcessingTaskId); it shows on the file in Files. Nothing runs yet: map it next (mapLibraryFileRun). A retry in this chat returns the run it already started.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    startLibraryFileRun: (variables: T.StartLibraryFileRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.StartLibraryFileRunMutation> =>
      this.request('startLibraryFileRun', variables, options, { operationType: 'mutation' }),
  }

  readonly memory = {
    /**
     * Add conversation records from another system to your memory, idempotent on `externalId`. Your people's words (FROM_ACCOUNT) are learned from; the other side's are context. Hidden records, typed notes and calendar emails are refused.
     *
     * @remarks Requires the IMPORT scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addMemoryEntries: (variables: T.AddMemoryEntriesMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddMemoryEntriesMutation> =>
      this.request('addMemoryEntries', variables, options, { operationType: 'mutation' }),
  }

  readonly notifications = {
    /**
     * "Dealt with": the row leaves the key owner's Today until something newer than anchorAt happens to it. subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    clearOnToday: (variables: T.ClearOnTodayMutationVariables, options?: IdempotentRequestOptions): Promise<T.ClearOnTodayMutation> =>
      this.request('clearOnToday', variables, options, { operationType: 'mutation' }),
    /**
     * Decide one HARVEST or BUNDLE card (`family`; the others are answered through their own operations) as the decision bar does, on the person's word: `verb` ACCEPT or DISMISS, `shownIds` every row the card showed (listCatchUpCards), `suggestionIds` the ticked ones (ACCEPT sets the unticked aside; DISMISS dismisses them), `reason` for a DISMISS. An ACCEPT runs each row's action (a record change, a merge, a skip trace that spends credits and is queued as `bulkTaskId`, or a send). Behind the send consent attestation and Pause everything. `remainingIds` are rows still on the card.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    decideCatchUpCard: (variables: T.DecideCatchUpCardMutationVariables, options?: IdempotentRequestOptions): Promise<T.DecideCatchUpCardMutation> =>
      this.request('decideCatchUpCard', variables, options, { operationType: 'mutation' }),
    /**
     * Delete notifications from your feed for good, by id (listNotifications). Only your own; another user's id is skipped. Returns how many were deleted. To clear the badge, mark them read instead.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteNotifications: (variables: T.DeleteNotificationsMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteNotificationsMutation> =>
      this.request('deleteNotifications', variables, options, { operationType: 'mutation' }),
    /**
     * The catalog of notification types you can filter by — each with its notificationType (the exact string to pass as notificationTypeFilter on listNotifications / getNotificationCounts), a human description, and a category. Call this first to filter reliably: notificationTypeFilter is a free string, so a typo silently returns an empty feed rather than an error.
     *
     * @remarks Requires the READ scope.
     */
    getAvailableNotificationTypes: (options?: RequestOptions): Promise<T.GetAvailableNotificationTypesQuery> =>
      this.request('getAvailableNotificationTypes', undefined, options, { operationType: 'query' }),
    /**
     * Unread and read counts for your own notification feed (the badge numbers). Optional notificationTypeFilter narrows to one type — use an EXACT value from getAvailableNotificationTypes (an unrecognized string returns 0/0, not an error). Cheap poll for "do I have anything new" before calling listNotifications.
     *
     * @remarks Requires the READ scope.
     */
    getNotificationCounts: (variables?: T.GetNotificationCountsQueryVariables, options?: RequestOptions): Promise<T.GetNotificationCountsQuery> =>
      this.request('getNotificationCounts', variables, options, { operationType: 'query' }),
    /**
     * "Don't show this again" on the key owner's Today, until unhideOnToday. subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    hideOnToday: (variables: T.HideOnTodayMutationVariables, options?: IdempotentRequestOptions): Promise<T.HideOnTodayMutation> =>
      this.request('hideOnToday', variables, options, { operationType: 'mutation' }),
    /**
     * Hide from the key owner's Today every task one workflow (`WorkflowGroup_<id>`) or AI employee (`Agent_<id>`) made. The tasks stay in the task list.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    hideTaskSourceOnToday: (variables: T.HideTaskSourceOnTodayMutationVariables, options?: IdempotentRequestOptions): Promise<T.HideTaskSourceOnTodayMutation> =>
      this.request('hideTaskSourceOnToday', variables, options, { operationType: 'mutation' }),
    /**
     * The key owner's Catch up deck, ranked as the app deals it: each card's id, kind, the sentence it asks (`ask`, else `title`), its rows (`bundleRows`, each `defaultChecked`) and `suggestionIds`. `nextCursor` continues the same ranking. What decideCatchUpCard takes.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 200.
     */
    listCatchUpCards: (variables?: T.ListCatchUpCardsQueryVariables, options?: RequestOptions): Promise<T.ListCatchUpCardsQuery> =>
      this.request('listCatchUpCards', variables, options, { operationType: 'query' }),
    /**
     * List your in-app notifications (the bell feed), newest first. Optional filters: notificationTypeFilter (one notification type — use an EXACT value from getAvailableNotificationTypes; an unrecognized string is not an error, it just returns an empty feed with total 0), seen (true = only read, false = only unread, omitted = both), and searchTerm. Cursor-paginated — pass the returned canFetchNext as a signal there is another page and re-call with cursor set to the last notification's id (limit defaults to 25, capped at 50). total is the full match count and hasUnread flags any unread in the feed, so nothing is silently truncated. Reads ONLY your own notifications — true for EVERY key including an admin's, because this operation exposes no recipient selector at all. The app does have the admin/Goliath-staff teammate feed (one or more teammates' notifications combined), so if the user asks to see a colleague's bell, point them at the app instead of saying nobody can see it. Each row carries the related-record ids (contactId, dealId, noteId, replyId, taskId, callId) and actionType/actionTargetId for deep-linking.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listNotifications: (variables?: T.ListNotificationsQueryVariables, options?: RequestOptions): Promise<T.ListNotificationsQuery> =>
      this.request('listNotifications', variables, options, { operationType: 'query' }),
    /**
     * Mark your WHOLE notification feed read (`isSeen: true`) or unread (false). `userId` must be your own (getMyProfile `currentUser.id`); any other is refused. Optional `notificationTypeFilter` (exact getAvailableNotificationTypes value) narrows it; `notIncludedNotificationIds` are left alone. Returns how many changed. Never a teammate's feed.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    markAllNotificationsRead: (variables: T.MarkAllNotificationsReadMutationVariables, options?: IdempotentRequestOptions): Promise<T.MarkAllNotificationsReadMutation> =>
      this.request('markAllNotificationsRead', variables, options, { operationType: 'mutation' }),
    /**
     * Mark every one of your notifications about one contact read. Returns how many changed.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    markContactNotificationsRead: (variables: T.MarkContactNotificationsReadMutationVariables, options?: IdempotentRequestOptions): Promise<T.MarkContactNotificationsReadMutation> =>
      this.request('markContactNotificationsRead', variables, options, { operationType: 'mutation' }),
    /**
     * Mark specific notifications read or unread by id. Pass isSeen: true to mark read (clears them from the unread badge) or false to mark unread. notificationIds come from listNotifications. Only your own notifications are affected — a notification id belonging to another user is a silent no-op, never an error. Returns the updated {id, seen} for each row that changed.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    markNotificationsRead: (variables: T.MarkNotificationsReadMutationVariables, options?: IdempotentRequestOptions): Promise<T.MarkNotificationsReadMutation> =>
      this.request('markNotificationsRead', variables, options, { operationType: 'mutation' }),
    /**
     * "This is wrong": a hide with the person's reason and an optional note (at most 280 characters). subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    markWrongOnToday: (variables: T.MarkWrongOnTodayMutationVariables, options?: IdempotentRequestOptions): Promise<T.MarkWrongOnTodayMutation> =>
      this.request('markWrongOnToday', variables, options, { operationType: 'mutation' }),
    /**
     * When your notification emails go out: AS_IT_HAPPENS (one email a few minutes after a notification) or DAILY (one email each morning at 8am in your timezone; AI hand-offs and workflow pages still arrive right away). Yours only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setEmailDigestCadence: (variables: T.SetEmailDigestCadenceMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetEmailDigestCadenceMutation> =>
      this.request('setEmailDigestCadence', variables, options, { operationType: 'mutation' }),
    /**
     * "Not now": the row leaves the key owner's Today until their next local day, or sooner when something newer happens (anchorAt: when the row's event happened). subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    skipOnToday: (variables: T.SkipOnTodayMutationVariables, options?: IdempotentRequestOptions): Promise<T.SkipOnTodayMutation> =>
      this.request('skipOnToday', variables, options, { operationType: 'mutation' }),
    /**
     * Take back a decideCatchUpCard: the same cardId and verb, `suggestionIds` the rows it decided (its ticked rows less `remainingIds`), and for an ACCEPT `setAsideIds` its unticked `shownIds` (only rows it set aside come back). Dismissals and set-asides come back; an applied row (a merge, a spend, a send) stands and is counted in `refused`. Card decisions only: trust and memory moves are the person's, in the app.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    undoCatchUpDecision: (variables: T.UndoCatchUpDecisionMutationVariables, options?: IdempotentRequestOptions): Promise<T.UndoCatchUpDecisionMutation> =>
      this.request('undoCatchUpDecision', variables, options, { operationType: 'mutation' }),
    /**
     * Show a row again: undoes a skip, hide or "this is wrong". subjectGrn is `<Model>_<id>` of what the row is about (TextConversation, EmailThread, Deal, Call, Task); kind is TODAY. To undo hideTaskSourceOnToday instead, send that source's GRN with kind TODAY_TASKS.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unhideOnToday: (variables: T.UnhideOnTodayMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnhideOnTodayMutation> =>
      this.request('unhideOnToday', variables, options, { operationType: 'mutation' }),
  }

  readonly partnerships = {
    /**
     * Accept a pending partnership invitation from another organization (partnerOrgId from listPendingPartnershipInvites). permittedUserIds optionally limits which of your users are visible to the partner (empty = all). Only applies to invitations the partner initiated. Moves the partnership to ACTIVE.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    acceptPartnershipInvite: (variables: T.AcceptPartnershipInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.AcceptPartnershipInviteMutation> =>
      this.request('acceptPartnershipInvite', variables, options, { operationType: 'mutation' }),
    /**
     * Cancel a pending partnership invitation your organization initiated (partnerOrgId from listPartnerships, status PENDING), before the partner has accepted it.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    cancelPartnershipInvite: (variables: T.CancelPartnershipInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.CancelPartnershipInviteMutation> =>
      this.request('cancelPartnershipInvite', variables, options, { operationType: 'mutation' }),
    /**
     * True when your organization has at least one ACTIVE partnership in a sending direction (SEND_ONLY or BIDIRECTIONAL from your side) — i.e. there is a partner your organization could share leads with. False means sharing a contact with a partner is not possible until an invitation is sent and accepted; check this before promising a user that a lead can be handed to a partner.
     *
     * @remarks Requires the READ scope.
     */
    canShareWithPartners: (options?: RequestOptions): Promise<T.CanShareWithPartnersQuery> =>
      this.request('canShareWithPartners', undefined, options, { operationType: 'query' }),
    /**
     * Send a partnership invitation to another organization (partnerOrgId from lookupPartnerOrg). direction is SEND_ONLY, RECEIVE_ONLY, or BIDIRECTIONAL (whose leads flow to whom). permittedUserIds optionally limits which of your users are visible to the partner (empty = all); recipientUserIds optionally targets which partner admins are notified — omit it (the default) to notify all of them; no operation lists partner admins, so choosing them is done in the app. Confirm the partner, direction and permittedUserIds with the user first. The partnership is PENDING until the partner org accepts — track it in listPartnerships.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createPartnershipInvite: (variables: T.CreatePartnershipInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreatePartnershipInviteMutation> =>
      this.request('createPartnershipInvite', variables, options, { operationType: 'mutation' }),
    /**
     * List every partnership your organization has with another organization — ACTIVE, PENDING and TERMINATED — always viewed from your side: partnerOrg is the OTHER organization, and its id is the partnerOrgId every partnership mutation takes (terminatePartnership, updatePartnershipPermittedUsers, cancelPartnershipInvite). direction says whose leads flow to whom (SEND_ONLY: yours to theirs; RECEIVE_ONLY: theirs to yours; BIDIRECTIONAL). awaitingCurrentOrgResponse is true when the partner invited you and you have not answered — those are the rows listPendingPartnershipInvites returns. permittedUserIds are YOUR users the partner may see when sending leads (empty = all). This is the answer to "who are we partnered with?".
     *
     * @remarks Requires the READ scope.
     */
    listPartnerships: (options?: RequestOptions): Promise<T.ListPartnershipsQuery> =>
      this.request('listPartnerships', undefined, options, { operationType: 'query' }),
    /**
     * List the partnership invitations OTHER organizations have sent you that are still waiting on your answer (awaitingCurrentOrgResponse is always true here). Each row's partnerOrg.id is the partnerOrgId to pass to acceptPartnershipInvite or rejectPartnershipInvite. Invitations YOUR organization sent and is waiting on are not here — they appear in listPartnerships with status PENDING and awaitingCurrentOrgResponse false.
     *
     * @remarks Requires the READ scope.
     */
    listPendingPartnershipInvites: (options?: RequestOptions): Promise<T.ListPendingPartnershipInvitesQuery> =>
      this.request('listPendingPartnershipInvites', undefined, options, { operationType: 'query' }),
    /**
     * Resolve a prospective partner organization by exactly one of an admin's phone number or email. Returns the matched admin and their organization — use the organization id as partnerOrgId when sending a partnership invitation. For an organization you are ALREADY partnered with, listPartnerships has the id without a lookup.
     *
     * @remarks Requires the ADMIN scope.
     */
    lookupPartnerOrg: (variables?: T.LookupPartnerOrgQueryVariables, options?: RequestOptions): Promise<T.LookupPartnerOrgQuery> =>
      this.request('lookupPartnerOrg', variables, options, { operationType: 'query' }),
    /**
     * Reject a pending partnership invitation the other organization sent you (partnerOrgId from listPendingPartnershipInvites). Terminates the pending rows.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    rejectPartnershipInvite: (variables: T.RejectPartnershipInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.RejectPartnershipInviteMutation> =>
      this.request('rejectPartnershipInvite', variables, options, { operationType: 'mutation' }),
    /**
     * End an active partnership (partnerOrgId from listPartnerships); either party may. Stops all cross-org lead sharing with them. Confirm with the user first, naming the partner.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    terminatePartnership: (variables: T.TerminatePartnershipMutationVariables, options?: IdempotentRequestOptions): Promise<T.TerminatePartnershipMutation> =>
      this.request('terminatePartnership', variables, options, { operationType: 'mutation' }),
    /**
     * Update which of your organization's users are visible to a partner when they send leads (partnerOrgId). Pass the full permittedUserIds list; an empty array means all users are visible.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updatePartnershipPermittedUsers: (variables: T.UpdatePartnershipPermittedUsersMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdatePartnershipPermittedUsersMutation> =>
      this.request('updatePartnershipPermittedUsers', variables, options, { operationType: 'mutation' }),
  }

  readonly phoneNumbers = {
    /**
     * Put numbers the org already owns (listCommunicationChannels) into the dialer's rotation. A teammate's line is allowed; an AI employee's is refused. Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addNumbersToDialingPool: (variables: T.AddNumbersToDialingPoolMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddNumbersToDialingPoolMutation> =>
      this.request('addNumbersToDialingPool', variables, options, { operationType: 'mutation' }),
    /**
     * Buy phone numbers straight into the bulk-dialing rotation: each is a RECURRING monthly charge. Either `count` (with an optional preferred `areaCode`; the provider picks) or `phoneNumbers` (E.164s from searchAvailablePhoneNumbers; a number taken meanwhile is a shortfall, never swapped). A number past the plan's included numbers adds $5/mo and is refused unless `confirmExtraPhoneNumberCharge` is true, sent only once the person agreed to that charge. `purchaseAttemptKey`: mint ONE per intended purchase and resend it unchanged on every retry, so a lost response never buys twice. Returns addedLines and, when some failed, failure { failedCount, message, kind }. ADMIN: the key owner must currently be an org admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    buyDialingPoolNumbers: (variables: T.BuyDialingPoolNumbersMutationVariables, options?: IdempotentRequestOptions): Promise<T.BuyDialingPoolNumbersMutation> =>
      this.request('buyDialingPoolNumbers', variables, options, { operationType: 'mutation' }),
    /**
     * The org's bulk-dialing rotation: each line (id, number, label), its calls today against its daily limit and restUntil, and the day's room.
     *
     * @remarks Requires the READ scope.
     */
    getDialingPool: (options?: RequestOptions): Promise<T.GetDialingPoolQuery> =>
      this.request('getDialingPool', undefined, options, { operationType: 'query' }),
    /**
     * Can the key owner start a call list now? null: they have no phone line to call from (an admin assigns them a number). Else linesInRotation and linesResting of the bulk-dialing numbers their calls can go out on; none in rotation, or all resting, means a call list cannot dial.
     *
     * @remarks Requires the READ scope.
     */
    getMyDialingRoom: (options?: RequestOptions): Promise<T.GetMyDialingRoomQuery> =>
      this.request('getMyDialingRoom', undefined, options, { operationType: 'query' }),
    /**
     * One line's own ring policy (its override of the org default), in getPhoneRouting's shape; null when the line follows the default. `phoneLineId` from getPhoneRouting or listCommunicationChannels.
     *
     * @remarks Requires the READ scope.
     */
    getPhoneLineRingPolicy: (variables: T.GetPhoneLineRingPolicyQueryVariables, options?: RequestOptions): Promise<T.GetPhoneLineRingPolicyQuery> =>
      this.request('getPhoneLineRingPolicy', variables, options, { operationType: 'query' }),
    /**
     * Who answers an inbound call or text: the call routing the Automations Map's Phone calls area shows, and who gets a new contact. `orgDefaultRingPolicy` is the default every line follows unless it has its own (null = none configured): `humanStage` is who rings first (`targetKind` LINE_OWNER the number's own user, SPECIFIC_USER one teammate, TEAM a team, ORG_USER_ROTATION a rotation of lines, EXTERNAL or AREA_CODE_MAP forwarding; a null humanStage means nobody rings and the AI pickup answers at once), for `ringSeconds`, only inside its `schedule` (null = always); `aiStage` is the AI employees that pick up a missed call, in `rotation` (no AI answers only when it is empty or every one has `canAnswerCalls` false). `defaultInboundIntakePolicy` is who gets a NEW contact created by inbound traffic. Each line lists its owner and `ringPolicyId` / `assignmentPolicyId` (null = follows the default); read a line's own policy with getPhoneLineRingPolicy. Change a ring policy with setOrgDefaultRingPolicy or setPhoneLineRingPolicy.
     *
     * @remarks Requires the READ scope.
     */
    getPhoneRouting: (options?: RequestOptions): Promise<T.GetPhoneRoutingQuery> =>
      this.request('getPhoneRouting', undefined, options, { operationType: 'query' }),
    /**
     * One org-wide picture of caller-trust registration — the carrier registration that keeps outbound calls from showing as "Spam Likely". accountState is chosen by loudest call to action, not by progress (FAILED > REGISTERING > REGISTERED > SELF_MANAGED > NOT_ELIGIBLE), so one refused account reads FAILED even when another is done. The line counts split the org's numbers by registration (registered / registering / failed, summing to eligibleLineCount) and by carrier health (watch / atRisk). needsAttention is the only flag that means "a human must act now" — a refused account or a number carriers appear to be rejecting; failedLineCount alone does not raise it, because a single errored attempt is retried by the next sweep. Read-only: registration runs on its own schedule and there is nothing to submit through this API.
     *
     * @remarks Requires the READ scope.
     */
    getVoiceTrustSummary: (options?: RequestOptions): Promise<T.GetVoiceTrustSummaryQuery> =>
      this.request('getVoiceTrustSummary', undefined, options, { operationType: 'query' }),
    /**
     * Buy a phone number from Twilio (a RECURRING monthly charge) and assign it to targetUserId. It shows at once in listCommunicationChannels, ready to send from. Confirm first: name the number, who gets it and the monthly charge. phoneNumber must be an E.164 number returned by searchAvailablePhoneNumbers (an unavailable number is rejected). targetUserId is normally the key owner (listCommunicationChannels.currentUser.id); a user outside your organization is rejected. A number past the phone numbers the plan includes adds $5/mo on top of the plan: it is refused (PHONE_NUMBER_ALLOWANCE_REFUSED) unless `confirmExtraPhoneNumberCharge` is true, which you send only once the person agreed to that extra charge. checkBillingAction tells you beforehand whether a number is included. ADMIN scope: the key owner must currently be an org admin. Idempotent — reuse an Idempotency-Key to make a retry safe.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    provisionPhoneNumber: (variables: T.ProvisionPhoneNumberMutationVariables, options?: IdempotentRequestOptions): Promise<T.ProvisionPhoneNumberMutation> =>
      this.request('provisionPhoneNumber', variables, options, { operationType: 'mutation' }),
    /**
     * Take numbers out of the rotation; they stay owned. Their warm-up restarts if they come back (addNumbersToDialingPool). Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeNumbersFromDialingPool: (variables: T.RemoveNumbersFromDialingPoolMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemoveNumbersFromDialingPoolMutation> =>
      this.request('removeNumbersFromDialingPool', variables, options, { operationType: 'mutation' }),
    /**
     * Bench one rotation line for the standard rest window: it returns on its own at restUntil (say the date). Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restDialingPoolNumber: (variables: T.RestDialingPoolNumberMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestDialingPoolNumberMutation> =>
      this.request('restDialingPoolNumber', variables, options, { operationType: 'mutation' }),
    /**
     * Search Twilio for buyable phone numbers, optionally narrowed by areaCode (a 3-digit US area code). Returns candidate numbers (E.164 phoneNumber plus locality/region) to feed into provisionPhoneNumber. Call this first when the org has no line to send from (listCommunicationChannels returned an empty twilioPhoneNumbers).
     *
     * @remarks Requires the READ scope.
     */
    searchAvailablePhoneNumbers: (variables?: T.SearchAvailablePhoneNumbersQueryVariables, options?: RequestOptions): Promise<T.SearchAvailablePhoneNumbersQuery> =>
      this.request('searchAvailablePhoneNumbers', variables, options, { operationType: 'query' }),
    /**
     * Replace the org's default call routing (every line without its own): humanStage (targetKind, ringSeconds 5 to 60, its target, an optional schedule) then aiStage (AI employees whose calls are on, SINGLE or ROUND_ROBIN). It saves the WHOLE policy, so read it first with getPhoneRouting and send it back changed; an omitted schedule or area-code map keeps what is saved. policy null deletes the default. Say the new path in plain words; it changes who picks up the org's calls from the next call on.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setOrgDefaultRingPolicy: (variables?: T.SetOrgDefaultRingPolicyMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetOrgDefaultRingPolicyMutation> =>
      this.request('setOrgDefaultRingPolicy', variables, options, { operationType: 'mutation' }),
    /**
     * Name a phone line ("Facebook campaign"), or label null to clear it. Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setPhoneLineLabel: (variables: T.SetPhoneLineLabelMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetPhoneLineLabelMutation> =>
      this.request('setPhoneLineLabel', variables, options, { operationType: 'mutation' }),
    /**
     * Replace one line's own call routing, shaped as setOrgDefaultRingPolicy's (read it with getPhoneLineRingPolicy first). policy null deletes it and the line follows the org default. Say the new path in plain words.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setPhoneLineRingPolicy: (variables: T.SetPhoneLineRingPolicyMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetPhoneLineRingPolicyMutation> =>
      this.request('setPhoneLineRingPolicy', variables, options, { operationType: 'mutation' }),
    /**
     * Mark a tracking number as one the org runs only on Meta ads (its calls are attributed there), or false to clear it. Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setPhoneLineRunsOnMetaAds: (variables: T.SetPhoneLineRunsOnMetaAdsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetPhoneLineRunsOnMetaAdsMutation> =>
      this.request('setPhoneLineRunsOnMetaAds', variables, options, { operationType: 'mutation' }),
    /**
     * Return a benched line to the rotation now, whoever benched it. Admins only.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    unrestDialingPoolNumber: (variables: T.UnrestDialingPoolNumberMutationVariables, options?: IdempotentRequestOptions): Promise<T.UnrestDialingPoolNumberMutation> =>
      this.request('unrestDialingPoolNumber', variables, options, { operationType: 'mutation' }),
  }

  readonly properties = {
    /**
     * Add properties to one or more lists (list ids from searchPropertyTags). ASYNC bulk-task op — returns bulkTaskId before the change applies; poll getBulkTask. TWO selection forms, never combined (ids with a filter is rejected). EXPLICIT: `propertyIds` (esIds) with `totalCount` = how many. FILTER-BACKED: `filterId` (saved; must be visible to the key owner — a teammate's private filter is refused) OR `filterTree` (inline, saveFilter's DSL, parsed STRICTLY — an unknown fieldId rejects the call) with `selectAll: true` for EVERY match or `selectCount: N` for the first N in the runner's DEFAULT traversal order — NOT the `sort` you previewed with on filterProperties, which the bulk task does not take; for a sorted top-N, pass that sorted page's ids as `propertyIds` (one window, not both; neither is REFUSED). An inline filterTree has no saved areas: save one with inSavedAreas and pass its filterId. `excludeIds` applies to a filter-backed selection only (on the explicit form, leave the id out). `totalCount` is an EXECUTION CAP the task stops at. It is DERIVED server-side for explicit ids (their count) and for `selectCount: N` (N — exclusions are not subtracted, the runner drops them as it goes) — whatever you send is ignored there, and a negative value is rejected — and TRUSTED only for `selectAll: true`: pass the filter's `total` from filterProperties UNSUBTRACTED (never minus `excludeIds` — the runner handles exclusions). An understated select-all count silently turns it into a partial write, so round UP. Pass the same `includeIncompleteRecords` you used on filterProperties. A filter-backed selection can touch thousands of properties in one call: state the match count to the user and get a go-ahead BEFORE submitting one.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addPropertiesToList: (variables: T.AddPropertiesToListMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddPropertiesToListMutation> =>
      this.request('addPropertiesToList', variables, options, { operationType: 'mutation' }),
    /**
     * Add existing tag(s) (by tag id) to a property. Get tag ids from searchPropertyTags. Returns the property with its updated tag set.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addPropertyTags: (variables: T.AddPropertyTagsMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddPropertyTagsMutation> =>
      this.request('addPropertyTags', variables, options, { operationType: 'mutation' }),
    /**
     * Withdraw the org's request for one family in one county (countyFips): the request is deleted, and asking again starts a new one. Admins only. False when there was none.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    cancelCoverageRequest: (variables: T.CancelCoverageRequestMutationVariables, options?: IdempotentRequestOptions): Promise<T.CancelCoverageRequestMutation> =>
      this.request('cancelCoverageRequest', variables, options, { operationType: 'mutation' }),
    /**
     * Count PUBLIC-RECORD SIGNAL EVENTS in an area, by type and publication-day window. Filings, not contacts: tagged leads are filterContacts. An event is one property's signal of one type on one day (three liens = three); standing conditions (ABSENTEE_OWNER…) are not events, and it is NOT filterProperties' `total`. AREA: a saved `filterId` OR an inline `filterTree` (saveFilter's PROPERTY DSL, strict: `conditions` and `groups`, never `children`): a county is `countyFilters` with its `fips` (searchCounties), a city `cityFilters` with its `id` (searchCities). `signalTypes` narrows (omit for all); `from` / `to` are inclusive `YYYY-MM-DD` days. Returns `totalEvents`, `propertyCount` (distinct properties with a counted event), `byType`, and `uncountedByType` / `uncountedPropertyCount`: properties with a type only from an open recorded filing or listing mark (no day, so no event), which filterProperties finds. Each row is what that type's `byType` misses (rows overlap); `uncountedPropertyCount` counts properties missed entirely. Never call a type absent while `uncountedByType` lists it. `includeIncompleteRecords: true` lifts the completeness gate. Spends nothing.
     *
     * @remarks Requires the READ scope.
     */
    countPropertySignals: (variables?: T.CountPropertySignalsQueryVariables, options?: RequestOptions): Promise<T.CountPropertySignalsQuery> =>
      this.request('countPropertySignals', variables, options, { operationType: 'query' }),
    /**
     * Create a saved-filter folder (returns id). `scope` is the filters' type (PROPERTY, CONTACT, DEAL); `personal: true` makes it private, else it and filters filed in it are shared; with `parentId` it takes the parent's visibility instead. Reuse a listFilterFolders row only if name, parentId and isPrivate all match.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createFilterFolder: (variables: T.CreateFilterFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateFilterFolderMutation> =>
      this.request('createFilterFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Get or create an org-wide PROPERTY list by exact name (synchronous). Returns `list { id, name }` and `created`: say you made one only when `created` is true, and use the returned `name` (a plain tag holding the name adds a number).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createPropertyList: (variables: T.CreatePropertyListMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreatePropertyListMutation> =>
      this.request('createPropertyList', variables, options, { operationType: 'mutation' }),
    /**
     * PERMANENTLY delete a saved filter by id (any type): no archive, no undo. Ids from listPropertyFilters / listContactFilters / saveFilter; returns true when a row was deleted, and a foreign or unknown id is rejected. WHOSE FILTER IS IT: an org admin can delete a teammate's SHARED filter here, so check `userId` against getMyProfile (`currentUser.id`) first, name the owner (getTeammatesByIds), and never delete someone else's filter unasked. A merely wrong filter is fixed with updateFilter. A teammate's PRIVATE filter is refused outright.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteFilter: (variables: T.DeleteFilterMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteFilterMutation> =>
      this.request('deleteFilter', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a filter folder (listFilterFolders id); its contents move up a level.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteFilterFolder: (variables: T.DeleteFilterFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteFilterFolderMutation> =>
      this.request('deleteFilterFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a folder by id (listFolders). Its subfolders, filters, lists and forms move up a level, never deleted. A shared folder goes for the whole team.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteFolder: (variables: T.DeleteFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteFolderMutation> =>
      this.request('deleteFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Run a property filter and paginate the matches with limit/offset. Returns a page of properties plus total and hasMore. Pass EITHER filterId (a saved filter from listPropertyFilters) OR filterTree (the same filter-tree DSL saveFilter takes; conditions key `fieldId`, not `field`) to run an UNSAVED tree: same totals, nothing persisted. Use filterTree to verify a filter before saving it, and to see whether a condition keeps a record with no value for its field. NEVER save a filter in order to measure one — save only the final filter the user asked for. Sort with `sort: { field, direction }` (`ASC` / `DESC`). `field` is a CLOSED vocabulary: `spicy_lead_score`, `estimated_value_dollars`, `estimatedRent`, `last_property_signal_date` / `lastPropertySignalDate`, `closed_date` / `closedDate`, `unit_count` / `unitCount`, `latestListingStatusDate` / `z_latest_listing_status_date`, `fsboListedDate`, `frboListedDate`, `fsboListingRemovedDate`, `frboListingRemovedDate`, `listingRemovedDate`, `listingRemovedRentDate`, `listingRemovedSaleDate`, `auction_date` (earliest upcoming auction, properties with none last). Any other field is silently IGNORED (default order, no error), so never infer support from a call that worked. `includeIncompleteRecords: true` lifts the index's completeness gate: by default properties with no parcel identity and no signal (~39% of the index) are HIDDEN, the usual reason a known address is missing. It only widens. Pass the same flag to addPropertiesToList so the bulk selection matches the page shown.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    filterProperties: (variables?: T.FilterPropertiesQueryVariables, options?: RequestOptions): Promise<T.FilterPropertiesQuery> =>
      this.request('filterProperties', variables, options, { operationType: 'query' }),
    /**
     * Search properties by (partial) address. Returns address suggestions with the property id (esId) to use in getProperty.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    findProperties: (variables: T.FindPropertiesQueryVariables, options?: RequestOptions): Promise<T.FindPropertiesQuery> =>
      this.request('findProperties', variables, options, { operationType: 'query' }),
    /**
     * Search properties by (partial) MLS id. Returns address suggestions with the property id (esId) to use in getProperty.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    findPropertiesByMlsId: (variables: T.FindPropertiesByMlsIdQueryVariables, options?: RequestOptions): Promise<T.FindPropertiesByMlsIdQuery> =>
      this.request('findPropertiesByMlsId', variables, options, { operationType: 'query' }),
    /**
     * Search properties by (partial) parcel id. Returns address suggestions with the property id (esId) to use in getProperty.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    findPropertiesByParcel: (variables: T.FindPropertiesByParcelQueryVariables, options?: RequestOptions): Promise<T.FindPropertiesByParcelQuery> =>
      this.request('findPropertiesByParcel', variables, options, { operationType: 'query' }),
    /**
     * Properties within ~150 m of a point, the parcel it is on first: candidates, not one answer (match a house number).
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 10.
     */
    findPropertiesNearPoint: (variables: T.FindPropertiesNearPointQueryVariables, options?: RequestOptions): Promise<T.FindPropertiesNearPointQuery> =>
      this.request('findPropertiesNearPoint', variables, options, { operationType: 'query' }),
    /**
     * Fetch ONE saved filter by id, including its full `root` criteria tree — the only operation that returns the tree (listPropertyFilters / listContactFilters / listDealFilters return metadata only). Works for contact, property and deal filters. Call this BEFORE updateFilter whenever you are changing PART of a filter: updateFilter replaces `root` wholesale, so without reading the current tree first you would be re-authoring it blind and would silently drop every condition you didn't know was there. Read it, modify the one condition you mean to change, and send the modified tree back. The tree is saveFilter's DSL. Tag and list conditions hold ids: name them via searchContactTags (searchPropertyTags for PROPERTY). `queryOptions` (PROPERTY only) holds execution options outside the tree — `{ includeIncompleteRecords: true }` runs the filter with the completeness gate OFF (~39% more of the index), which is why a count can exceed what the tree explains.
     *
     * @remarks Requires the READ scope.
     */
    getFilter: (variables: T.GetFilterQueryVariables, options?: RequestOptions): Promise<T.GetFilterQuery> =>
      this.request('getFilter', variables, options, { operationType: 'query' }),
    /**
     * Fetch one property by id — address, skip-trace status, signal recency, owner of record and mailing address (`metadata`, as the page shows them), and visible `tags` and `lists` (each `{ id, name, isEditable }`). Lists include read-only system ingestion lists alongside your organization lists. Read `lists` BEFORE addPropertiesToList / removePropertiesFromList to answer "is it already on that list?"; only reuse a list ID for mutations when `isEditable` is true. Other organizations' private tags and lists are excluded.
     *
     * @remarks Requires the READ scope.
     */
    getProperty: (variables: T.GetPropertyQueryVariables, options?: RequestOptions): Promise<T.GetPropertyQuery> =>
      this.request('getProperty', variables, options, { operationType: 'query' }),
    /**
     * A property's people. `crmContacts`: your own contacts at it (linked, or at its street and ZIP), with `relation` (OWNS or null = owner; FORMER_OWNER, MAILING and the rest are not) and the phones and emails already on them. `people`: owners and relatives from public records, with phones and emails generally only after a skip trace. A crmContacts phone means you already have a number. Reading never spends a credit.
     *
     * @remarks Requires the READ scope.
     */
    getPropertyOwners: (variables: T.GetPropertyOwnersQueryVariables, options?: RequestOptions): Promise<T.GetPropertyOwnersQuery> =>
      this.request('getPropertyOwners', variables, options, { operationType: 'query' }),
    /**
     * A property's filings (newest 50), notice text in `adBody`. OWNER_SEARCH / MAILING_ADDRESS: matched via the owner. `suppressedReason` set: not live.
     *
     * @remarks Requires the READ scope.
     */
    getPropertySignals: (variables: T.GetPropertySignalsQueryVariables, options?: RequestOptions): Promise<T.GetPropertySignalsQuery> =>
      this.request('getPropertySignals', variables, options, { operationType: 'query' }),
    /**
     * Batch property attributes by id (esId): owner of record and mailing address, beds/baths/size, year built, last sale, value, occupancy, county, lat/long, years owned, `ownerPortfolioSize` (parcels the owner holds).
     *
     * @remarks Requires the READ scope.
     */
    getRelatedProperties: (variables: T.GetRelatedPropertiesQueryVariables, options?: RequestOptions): Promise<T.GetRelatedPropertiesQuery> =>
      this.request('getRelatedProperties', variables, options, { operationType: 'query' }),
    /**
     * List the zoning codes available for a location (by state + city id or county FIPS). Returns a plain list of zoning-code strings.
     *
     * @remarks Requires the READ scope.
     */
    getZoningCodes: (variables?: T.GetZoningCodesQueryVariables, options?: RequestOptions): Promise<T.GetZoningCodesQuery> =>
      this.request('getZoningCodes', variables, options, { operationType: 'query' }),
    /**
     * The COMPLETE vocabulary of filterable fields for a domain (CONTACT, PROPERTY or DEAL): every fieldId saveFilter accepts, with label, category and UI component. It always arrives whole, unlike the fuller `listFilterFields`, which drops WHOLE FIELDS when unnarrowed, so it is the only trustworthy answer to "is X filterable here?". Find the fieldId here, then call `listFilterFields` with those `fieldIds` for descriptions and value shapes. A field absent from THIS list is genuinely not filterable; never tell a user a filter is impossible from a truncated `listFilterFields` response or a rejected fieldId guess. Static schema introspection: reads no org data.
     *
     * @remarks Requires the READ scope.
     */
    listFilterFieldNames: (variables: T.ListFilterFieldNamesQueryVariables, options?: RequestOptions): Promise<T.ListFilterFieldNamesQuery> =>
      this.request('listFilterFieldNames', variables, options, { operationType: 'query' }),
    /**
     * The filterable-field catalog for a filter domain WITH full value shapes — how to WRITE a condition once you know which field you want (CONTACT, PROPERTY or DEAL; other FilterType values are rejected). Call this BEFORE authoring a saveFilter tree: never guess fieldIds. `fieldIds` is REQUIRED — name the fields you actually need. Unnarrowed, the catalog would be TRUNCATED BY DROPPING WHOLE FIELDS, so this operation is NEVER evidence that a field does not exist: to discover what exists, or before telling anyone a filter cannot express something, call `listFilterFieldNames`, which always arrives complete. An unknown requested fieldId errors naming it (it means that field does NOT exist; do not invent a value shape for it). Each row carries label/category/description, the UI component kind (the value-shape hint — e.g. numericRange, multiSelect, dateRange), acceptedValueKeys (for object-shaped values: the exact top-level keys, e.g. min/max), and static options for select-like fields. USE `valueShapes`, NOT `acceptedValueKeys`, WHENEVER A FIELD HAS MORE THAN ONE: some fields accept several mutually-exclusive value shapes, and acceptedValueKeys flattens them into one list that is NOT itself a valid value. `valueShapes` reports them arm by arm — each with the `discriminatorKey`/`discriminatorValue` literal that selects it, and only that arm’s keys, each marked required or optional with its `acceptedValues` when the key is an enum or literal. A shape carrying `scalar` instead of keys is a BARE value — `bedrooms` accepts `3` as well as `{min, max}` — so send the plain value for that arm, not an object. Pick ONE shape, send that arm’s discriminator literal verbatim, and send only its keys: `dateCustomFieldFilters`, for instance, has seven arms keyed on `comparison`; ON, BEFORE and AFTER take a strict YYYY-MM-DD `date`, MORE_THAN, LESS_THAN and WITHIN_NEXT take number+timeUnit (an interval), and BETWEEN takes from/to (absolute bounds). An unrecognized `comparison` literal fails the WHOLE save; keys borrowed from another arm are silently STRIPPED, so the filter saves without that constraint. Contact CUSTOM fields are NOT addressed by their custom-field UUID as a fieldId — use the wrapper fields this catalog lists (e.g. dropdownCustomFieldFilters / textCustomFieldFilters) whose VALUE carries the custom-field id. `countyFilters` takes a county `fips` (searchCounties), `cityFilters` a city `id` (searchCities). Static schema introspection: reads no org data and never changes with account state.
     *
     * @remarks Requires the READ scope.
     */
    listFilterFields: (variables: T.ListFilterFieldsQueryVariables, options?: RequestOptions): Promise<T.ListFilterFieldsQuery> =>
      this.request('listFilterFields', variables, options, { operationType: 'query' }),
    /**
     * Saved-filter folders of one `type` (PROPERTY, CONTACT, DEAL), empty ones included: the org's shared ones plus your private ones. A filter's `folderId` is one of these; file filters with updateFilter `folderId`.
     *
     * @remarks Requires the READ scope.
     */
    listFilterFolders: (variables: T.ListFilterFoldersQueryVariables, options?: RequestOptions): Promise<T.ListFilterFoldersQuery> =>
      this.request('listFilterFolders', variables, options, { operationType: 'query' }),
    /**
     * Every folder on one surface (`scope`: PROPERTY, CONTACT, DEAL, FORM, …), flat: the org's shared tree plus your personal one. `ownerUserId` set = personal. `itemCount` counts items filed directly in it. Filter folders also come from listFilterFolders; workflow and template folders have their own ops.
     *
     * @remarks Requires the READ scope.
     */
    listFolders: (variables: T.ListFoldersQueryVariables, options?: RequestOptions): Promise<T.ListFoldersQuery> =>
      this.request('listFolders', variables, options, { operationType: 'query' }),
    /**
     * The org's coverage requests: signal family and county (countyFips), when asked, status, expectedBy (the promise) and liveSince.
     *
     * @remarks Requires the READ scope.
     */
    listMyCoverageRequests: (options?: RequestOptions): Promise<T.ListMyCoverageRequestsQuery> =>
      this.request('listMyCoverageRequests', undefined, options, { operationType: 'query' }),
    /**
     * List the saved property filters VISIBLE to the key owner; run one by id with filterProperties (the tree stays server-side — getFilter reads it). Each row has `userId` (the OWNER), `folderId`, `createdAt` and `criteriaSummary` (its conditions in one line; getFilter for the whole tree). READ `userId` BEFORE ANY WRITE: the list is every SHARED filter in the org, whoever made it, plus your own private ones (`isPrivate: true`), and updateFilter / deleteFilter will write a TEAMMATE's for an org admin. Your id is getMyProfile `currentUser.id`; name a teammate's id with getTeammatesByIds. Say whose a filter is before changing or deleting it.
     *
     * @remarks Requires the READ scope.
     */
    listPropertyFilters: (options?: RequestOptions): Promise<T.ListPropertyFiltersQuery> =>
      this.request('listPropertyFilters', undefined, options, { operationType: 'query' }),
    /**
     * Skip-trace an explicitly-provided owner + mailing address (no property record needed). CONSUMES ONE SKIPTRACE CREDIT (plan allowance first except in a trial, then real money; checkBillingAction) — requires the ADMIN scope, and the key owner must be a team admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    manualSkiptrace: (variables: T.ManualSkiptraceMutationVariables, options?: IdempotentRequestOptions): Promise<T.ManualSkiptraceMutation> =>
      this.request('manualSkiptrace', variables, options, { operationType: 'mutation' }),
    /**
     * Put a folder under another folder of the same surface (`parentId`), or at the top level (`parentId: null`). Refused when it would cross between personal and shared, nest a folder inside itself, or go too deep.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveFolder: (variables: T.MoveFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveFolderMutation> =>
      this.request('moveFolder', variables, options, { operationType: 'mutation' }),
    /**
     * File items into a folder (`folderId`), or to the top level (`folderId: null`). `items` are `{ kind, id }`; kind is FILTER, CONTACT_LIST, PROPERTY_LIST, FORM, TEMPLATE, LIBRARY_FILE or WORKFLOW_GROUP. All or nothing: one id not found refuses the whole call. Refused when the folder's surface does not hold that kind. A saved filter's privacy FOLLOWS the folder: into a personal folder makes it private to you, into a shared one shares it with the team, so say so before moving a filter across. Returns how many moved.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveItemsToFolder: (variables: T.MoveItemsToFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveItemsToFolderMutation> =>
      this.request('moveItemsToFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Remove properties from ONE list (`listId` from searchPropertyTags or getProperty's `lists`). ASYNC bulk-task op — poll getBulkTask(bulkTaskId). Same selection rules as addPropertiesToList: EXPLICIT `propertyIds` + `totalCount`, or FILTER-BACKED `filterId` / `filterTree` (strict) with `selectAll: true` or `selectCount: N` for the first N in DEFAULT traversal order, never a previewed `sort` — use `propertyIds` for a sorted top-N (one window, not both; neither is REFUSED), `excludeIds` on the filter-backed form only. `totalCount` is an EXECUTION CAP, derived server-side for explicit ids and `selectCount` and trusted only for select-all: the filter's `total` from filterProperties UNSUBTRACTED; understated means the removal stops early, so round up. Not on the list is skipped, not an error. Removes MEMBERSHIP only — list and properties survive. A filter-backed selection can touch thousands of properties in one call: state the match count to the user and get a go-ahead BEFORE submitting one.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removePropertiesFromList: (variables: T.RemovePropertiesFromListMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemovePropertiesFromListMutation> =>
      this.request('removePropertiesFromList', variables, options, { operationType: 'mutation' }),
    /**
     * Remove one tag (by tag id) from a property. Returns the property with its updated tag set.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removePropertyTag: (variables: T.RemovePropertyTagMutationVariables, options?: IdempotentRequestOptions): Promise<T.RemovePropertyTagMutation> =>
      this.request('removePropertyTag', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a filter folder (listFilterFolders id); onto a sibling’s name it MERGES into it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameFilterFolder: (variables: T.RenameFilterFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameFilterFolderMutation> =>
      this.request('renameFilterFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a folder by id (listFolders); a name a sibling already has is refused. For a saved-filter folder prefer renameFilterFolder, which merges into a same-named sibling as the app does.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameFolder: (variables: T.RenameFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameFolderMutation> =>
      this.request('renameFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Set the display order of saved filters: `filterIds` first to last (listPropertyFilters / listContactFilters / listDealFilters ids).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderFilters: (variables: T.ReorderFiltersMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderFiltersMutation> =>
      this.request('reorderFilters', variables, options, { operationType: 'mutation' }),
    /**
     * Set the display order of items inside one folder: `orderedItems` (`{ kind, id }`) first to last. TEMPLATE and FORM items are refused (they have no order). Returns how many were ordered.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderFolderItems: (variables: T.ReorderFolderItemsMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderFolderItemsMutation> =>
      this.request('reorderFolderItems', variables, options, { operationType: 'mutation' }),
    /**
     * Set the order of one set of sibling folders: `scope`, their `parentId` (null = top level), `personal` (which side), and `orderedIds` first to last. An id outside that set refuses the call; siblings you leave out keep their order after the listed ones. Returns the surface's folders.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderFolders: (variables: T.ReorderFoldersMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderFoldersMutation> =>
      this.request('reorderFolders', variables, options, { operationType: 'mutation' }),
    /**
     * Ask for coverage of places ("Cook County, IL"; a county keys to its cell, anything else comes back in gaps) for signals by name (signals, always sent: [] when asking by family), or families picked outright (FORECLOSURE, PREFORECLOSURE, PROBATE, PREPROBATE, TAX_DELINQUENCY, CODE_VIOLATION). For those six, read listMyCoverageRequests first: one already asked is not asked again. Any other signal (liens, evictions) is recorded and reaches sales, but no read returns it: ask it once and give no date. Any member.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    requestCoverage: (variables: T.RequestCoverageMutationVariables, options?: IdempotentRequestOptions): Promise<T.RequestCoverageMutation> =>
      this.request('requestCoverage', variables, options, { operationType: 'mutation' }),
    /**
     * Ask for signal types that are not live yet in every county the org works, as a builder's "Request it" does; the 2-week promise starts now. context names what was being built (`workflowGroup:<id>`, `filter:<id>`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    requestSignalsInMyCounties: (variables: T.RequestSignalsInMyCountiesMutationVariables, options?: IdempotentRequestOptions): Promise<T.RequestSignalsInMyCountiesMutation> =>
      this.request('requestSignalsInMyCounties', variables, options, { operationType: 'mutation' }),
    /**
     * Comparable sales for a property (its id from a property read), as the property page's Comps tab: each comp's facts, distance and price per square foot, and the medians with the subject's implied value. Optional criteria narrow it (every bound is required when sent). Spends nothing.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    runPropertyComparables: (variables: T.RunPropertyComparablesMutationVariables, options?: IdempotentRequestOptions): Promise<T.RunPropertyComparablesMutation> =>
      this.request('runPropertyComparables', variables, options, { operationType: 'mutation' }),
    /**
     * Create a saved filter. `type` CONTACT runs with filterContacts, PROPERTY with filterProperties, DEAL (status, title, pipeline stage, assignees, deal custom fields) with filterDeals — find deal filters with listDealFilters; the Deals board shows no saved-filter list, so tell the user it lives in the API. Other FilterType values are rejected. `root` is the filter-tree DSL, a recursive group: { id, operator: "AND"|"OR", negated?: boolean, conditions: [{ id, fieldId, value }], groups: [<group>] }. `negated: true` inverts a whole GROUP (group-level only) — the way to say "not already on any of my lists". EVERY group and condition needs its own caller-minted non-empty `id` (mint a UUID each); missing ids are the most common rejection. Every `fieldId` must be a real field of the domain: an unknown one, or a bad value, rejects the whole save naming the field and saves nothing, so NEVER probe by saving — read listFilterFields FIRST. Geo conditions take ids: `countyFilters` a `fips` from searchCounties, `cityFilters` a city `id` from searchCities (a county name or unknown FIPS is rejected on any type, a bare city name on PROPERTY). To see what a tree DOES first — its count, whether it keeps records with no value — run it inline as `filterTree` on filterProperties/filterContacts/countContacts, which saves nothing. Save only the final filter the user asked for: a measuring filter is visible to them and their team. File it into a folder with `folderId` (listFilterFolders). Owner + org come from the API key; no userId/organizationId input, so a key cannot plant a filter in another tenant. The response may carry `warnings`: non-fatal notes on the saved criteria (e.g. same-named counties from DIFFERENT states, like Cook, IL + Cook, MN — saved, and it matches all of them). RELAY each one with the result, not as a failure; if the selection is not what the user meant, fix it with updateFilter.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    saveFilter: (variables: T.SaveFilterMutationVariables, options?: IdempotentRequestOptions): Promise<T.SaveFilterMutation> =>
      this.request('saveFilter', variables, options, { operationType: 'mutation' }),
    /**
     * Find US cities by (partial) name and return each match's `id`, `name` and `state`. This is how you IDENTIFY a city: the `cityFilters` condition in a property filter tree takes the returned `id` as its `value` (with `label` set to "Name, ST", e.g. "Memphis, TN"), and saveFilter/updateFilter REJECT a bare city name on PROPERTY filters (CONTACT matches a name leniently) — a name alone is ambiguous across states (11,347 US city names occur in more than one state), so a filter built from one would match nothing. Disambiguate by including the state in the search term (e.g. "Memphis TN") when a name is common. The same `id` is also what getZoningCodes takes as `cityId`.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 10.
     */
    searchCities: (variables: T.SearchCitiesQueryVariables, options?: RequestOptions): Promise<T.SearchCitiesQuery> =>
      this.request('searchCities', variables, options, { operationType: 'query' }),
    /**
     * Find US counties by (partial) name and return each match's `name`, `fullName`, `state` and `fips`. The `countyFilters` condition in a property filter tree takes the 5-digit **`fips`** as its `value` (with `label` set to the display name) — a county DISPLAY NAME is rejected by saveFilter/updateFilter, because the query compiles to a `county_fips` term and a name would match nothing. Include the state in the search term (e.g. "Orange County FL") when a county name is common. The same `fips` is what getZoningCodes takes as `countyFips`.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 10.
     */
    searchCounties: (variables: T.SearchCountiesQueryVariables, options?: RequestOptions): Promise<T.SearchCountiesQuery> =>
      this.request('searchCounties', variables, options, { operationType: 'query' }),
    /**
     * Search your organization's property tags and lists by name. Use a tag id with addPropertyTags and a list id with addPropertiesToList.
     *
     * @remarks Requires the READ scope.
     */
    searchPropertyTags: (variables: T.SearchPropertyTagsQueryVariables, options?: RequestOptions): Promise<T.SearchPropertyTagsQuery> =>
      this.request('searchPropertyTags', variables, options, { operationType: 'query' }),
    /**
     * Skip-trace a property (by id/esId) to discover its owner and their phone numbers/emails. Returns the discovered people inline; re-read them later (free) with getPropertyOwners. CONSUMES ONE SKIPTRACE CREDIT (plan allowance first except in a trial, then real money; checkBillingAction) — requires the ADMIN scope, and the key owner must be a team admin.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    skipTraceProperty: (variables: T.SkipTracePropertyMutationVariables, options?: IdempotentRequestOptions): Promise<T.SkipTracePropertyMutation> =>
      this.request('skipTraceProperty', variables, options, { operationType: 'mutation' }),
    /**
     * Edit a saved filter IN PLACE by id (property, contact or deal) — its criteria, name, description, folder or visibility. Never saveFilter again under the same name: that makes a SECOND filter and leaves the wrong one. Ids come from listPropertyFilters / listContactFilters / listDealFilters or the saveFilter response. Every field but the id is optional and an OMITTED one is untouched, so a rename keeps criteria, folder and visibility. An explicit null differs: `folderId: null` takes the filter OUT of its folder (the only way to), while `description: null` is ignored (a description can be replaced, not cleared). `root` REPLACES the whole tree, never merges: to change PART of a filter, getFilter (the only op returning `root`), edit the one condition, and send the whole tree back — never author a replacement from the user's description alone, or you drop every condition you never saw. The tree is saveFilter's DSL (every node needs its own non-empty `id`), validated the same way: an unknown fieldId or invalid value rejects the WHOLE update naming the condition, nothing saved — so NEVER probe by updating; read listFilterFields first (pass `fieldIds` for just those). County/city values as on saveFilter (`fips` from searchCounties, city `id` from searchCities). The response echoes the persisted tree. `type` cannot change — delete and re-create. WHOSE FILTER IS IT: getFilter and the list ops return `userId`, the owner. A TEAMMATE's shared filter is writable here by an org admin with no confirmation and no history, so check `userId` against getMyProfile (`currentUser.id`) and, when it is not yours, say whose it is (getTeammatesByIds) before changing it. A teammate's PRIVATE filter is refused outright and never appears in the list ops. The response may carry `warnings`: non-fatal notes on the saved criteria (e.g. same-named counties from DIFFERENT states, like Cook, IL + Cook, MN — saved, and it matches all of them). RELAY each one with the result, not as a failure; if the selection is not what the user meant, fix it with updateFilter.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateFilter: (variables: T.UpdateFilterMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateFilterMutation> =>
      this.request('updateFilter', variables, options, { operationType: 'mutation' }),
  }

  readonly scheduledTasks = {
    /**
     * Schedule Ask Goliath to run `instruction` as the key owner: give exactly one of `cronExpression` (recurring, 5 fields) or `fireAt` (once), read in `timezone` (IANA). Optional `expiresAt` (it stops after). Each run asks the owner before any action (no abilities). Refused while scheduled tasks are off for the workspace.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createScheduledTask: (variables: T.CreateScheduledTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateScheduledTaskMutation> =>
      this.request('createScheduledTask', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a scheduled task for good (its chat stays). To stop it for now, pauseScheduledTask. Only the task's owner or an org admin may change it (`canEdit`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteScheduledTask: (variables: T.DeleteScheduledTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteScheduledTaskMutation> =>
      this.request('deleteScheduledTask', variables, options, { operationType: 'mutation' }),
    /**
     * One scheduled task by id (listScheduledTasks): its `instruction` (what Ask Goliath is told on every run), `cronExpression` and `timezone` (a one-off has `oneOffAt`), `abilities` (actions its runs may take without asking), `expiresAt`, `notifyOnlyOnChange`, its chat (`sessionId`) and whether it is `running` now.
     *
     * @remarks Requires the READ scope.
     */
    getScheduledTask: (variables: T.GetScheduledTaskQueryVariables, options?: RequestOptions): Promise<T.GetScheduledTaskQuery> =>
      this.request('getScheduledTask', variables, options, { operationType: 'query' }),
    /**
     * Every scheduled task in your organization (yours first, then teammates', newest first), each a chat that runs Ask Goliath on a schedule as its owner: title, `status` (ACTIVE, PAUSED, PAUSED_ERRORS after repeated failures, EXHAUSTED when finished), `cadence` (ONE_OFF or RECURRING), `schedule` in words, `nextRunAt`, `lastRunAt`, `runCount`, owner, tags, and `canEdit`. Narrow by `ownerUserId`, `tag`, `statuses` or `cadence`. getScheduledTask reads one with its instruction.
     *
     * @remarks Requires the READ scope.
     */
    listScheduledTasks: (variables?: T.ListScheduledTasksQueryVariables, options?: RequestOptions): Promise<T.ListScheduledTasksQuery> =>
      this.request('listScheduledTasks', variables, options, { operationType: 'query' }),
    /**
     * Pause a scheduled task: it stops running until resumed. Only the task's owner or an org admin may change it (`canEdit`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    pauseScheduledTask: (variables: T.PauseScheduledTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.PauseScheduledTaskMutation> =>
      this.request('pauseScheduledTask', variables, options, { operationType: 'mutation' }),
    /**
     * Resume a paused task from its next occurrence; missed runs are not made up. Only the task's owner or an org admin may change it (`canEdit`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resumeScheduledTask: (variables: T.ResumeScheduledTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResumeScheduledTaskMutation> =>
      this.request('resumeScheduledTask', variables, options, { operationType: 'mutation' }),
    /**
     * Change a scheduled task; only what you send changes. `timing` is { cronExpression or fireAt, timezone }, exactly one of the two. `clearExpiresAt: true` removes its end (do not send it with `expiresAt`). Only the task's owner or an org admin may change it (`canEdit`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateScheduledTask: (variables: T.UpdateScheduledTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateScheduledTaskMutation> =>
      this.request('updateScheduledTask', variables, options, { operationType: 'mutation' }),
  }

  readonly spaces = {
    /**
     * Memory: add a note to a shelf the key owner may open, as a person stated it, pinned. PERSON with no `subjectId` is the owner's own, TEAM the organization's (its admins only), otherwise the EMPLOYEE or CONTACT id (listMemorySubjects). `kind` is RULE, PREFERENCE, DECISION, PROCEDURE, FACT or PROGRESS. The same words again return the existing note, re-pinned. In a chat, REMEMBER writes the person's own shelf, and TEAM for an org admin; this reaches the others.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addMemoryNote: (variables: T.AddMemoryNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddMemoryNoteMutation> =>
      this.request('addMemoryNote', variables, options, { operationType: 'mutation' }),
    /**
     * Start uploading a file of any type into a folder you can edit (or as `replacesItemId`'s next version). PUT the bytes to `uploadUrl` with exactly `contentType`, then call completeSpaceUpload.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    beginSpaceUpload: (variables: T.BeginSpaceUploadMutationVariables, options?: IdempotentRequestOptions): Promise<T.BeginSpaceUploadMutation> =>
      this.request('beginSpaceUpload', variables, options, { operationType: 'mutation' }),
    /**
     * Finish an upload once its bytes are PUT: makes the file or its next version. A retry returns the same file. `actorGrn`: the dev session making it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    completeSpaceUpload: (variables: T.CompleteSpaceUploadMutationVariables, options?: IdempotentRequestOptions): Promise<T.CompleteSpaceUploadMutation> =>
      this.request('completeSpaceUpload', variables, options, { operationType: 'mutation' }),
    /**
     * Copy a FILE into a folder or root you can edit. The copy is yours and starts with no sharing; copying somewhere with a different audience needs MANAGER on the source unless it was already open to the whole team, and an AI agent can never make that kind of copy. Folders cannot be copied yet.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    copySpaceItem: (variables: T.CopySpaceItemMutationVariables, options?: IdempotentRequestOptions): Promise<T.CopySpaceItemMutation> =>
      this.request('copySpaceItem', variables, options, { operationType: 'mutation' }),
    /**
     * Copy an upload's original file (listFiles `uploads[].file.id`) into a folder or root you can edit, as Uploads' "Copy to My files" does: a new file of your own, independent of the upload. Needs EDITOR there.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    copyUploadedFileToSpace: (variables: T.CopyUploadedFileToSpaceMutationVariables, options?: IdempotentRequestOptions): Promise<T.CopyUploadedFileToSpaceMutation> =>
      this.request('copyUploadedFileToSpace', variables, options, { operationType: 'mutation' }),
    /**
     * Create a folder at a root (My files or Team; `folderId` omitted) or inside a folder you can edit. A name already used there gets " (2)". Pass `creationKey` (any unique string) to make a retry return the folder it already made.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createSpaceFolder: (variables: T.CreateSpaceFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateSpaceFolderMutation> =>
      this.request('createSpaceFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Save text as a new file — a report, notes, a JSON or CSV export, a memo — in a folder you can edit. The NAME decides the type (`.md`, `.json`, `.csv`, `.txt`, `.html`, `.ts` …); binary types are refused (they are uploaded in the app). Up to 5 MB. The file is yours, labelled as made by AI for you when an agent writes it. An `.html` file saved here is an ordinary file, never a Page (Pages are made only by Ask Goliath's page tools). Pass `creationKey` to make a retry safe. Default to the person's My files unless they named a folder.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createSpaceTextFile: (variables: T.CreateSpaceTextFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateSpaceTextFileMutation> =>
      this.request('createSpaceTextFile', variables, options, { operationType: 'mutation' }),
    /**
     * PERMANENTLY delete items that are already in the trash — rows, every version and the stored bytes. Cannot be undone. Items not in the trash are refused (trash them first). Requires the user's explicit approval.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteSpaceItemsForever: (variables: T.DeleteSpaceItemsForeverMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteSpaceItemsForeverMutation> =>
      this.request('deleteSpaceItemsForever', variables, options, { operationType: 'mutation' }),
    /**
     * Set (or clear, with `description` null) the short description shown under a folder or file you can edit.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    describeSpaceItem: (variables: T.DescribeSpaceItemMutationVariables, options?: IdempotentRequestOptions): Promise<T.DescribeSpaceItemMutation> =>
      this.request('describeSpaceItem', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: correct a note's words (`noteId` from getMemorySubjectNotes). Saving pins it. The correction is a NEW note id, returned; the old words are superseded, not retired, so restoreMemoryNote cannot bring them back.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    editMemoryNote: (variables: T.EditMemoryNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.EditMemoryNoteMutation> =>
      this.request('editMemoryNote', variables, options, { operationType: 'mutation' }),
    /**
     * Change cells of a spreadsheet (.xlsx, CSV, TSV) by A1 address as one new version, without re-sending the sheet: each of `edits` writes `values` (rows of cells) right and down from its `start` cell — a value, a formula (`=SUM(B2:B9)`) or "" to clear — and `appendRows` adds rows under the last filled row. Every other cell, sheet, hidden sheet, number format, column width and row height stays as it was, and every formula on the sheet is computed again (one over another sheet keeps the value Excel saved), so read it back with readSpaceSheet for totals. A value is written as typed: a plain number as a number, anything else (a date, "$1,200") as text. Pass the `versionId` readSpaceSheet returned as `baseVersionId`: a save since is refused. At most 10,000 cells per call. An .xlsx with charts, images, pivot tables, comments, Excel tables, macros, conditional formatting, data validation, sparklines, links to other workbooks, data connections, slicers or embedded objects is refused (a save would drop them); cell colours and fonts are not kept, as when it is edited in Library.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    editSpaceSheetCells: (variables: T.EditSpaceSheetCellsMutationVariables, options?: IdempotentRequestOptions): Promise<T.EditSpaceSheetCellsMutation> =>
      this.request('editSpaceSheetCells', variables, options, { operationType: 'mutation' }),
    /**
     * Reorganize or rewrite part of a text file by line number (from getSpaceTextLines), as one new version like a save: each edit replaces a range `startLine`–`endLine` with `text` (empty deletes it), MOVES the range before `beforeLine` (no `text` — its characters are kept exactly, nothing re-sent), or with no range inserts `text` before `beforeLine`. Every number is the read version's, the edits apply together, and every line no edit names stays exactly as it was. Overlapping ranges, a target inside a range being changed, and a stale `baseVersionId` are refused. Use it to put a long file into sections, reorder it, or fix lines without re-sending the whole file.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    editSpaceTextLines: (variables: T.EditSpaceTextLinesMutationVariables, options?: IdempotentRequestOptions): Promise<T.EditSpaceTextLinesMutation> =>
      this.request('editSpaceTextLines', variables, options, { operationType: 'mutation' }),
    /**
     * Put Library items on a contact's Files & Photos, as the contact's Attach › From Library does: a snapshot copy of each file (up to 20, 300 MB each), and a PAGE as its PDF printed now as you see it. Ids are Library item ids (searchSpaceItems, listSpaceFolder, a page's id), never a chat artifactId. Returns each copy (`uploadedFileId`, `fileName`); undo with removeContactFiles (the copy's `uploadedFileId`). Never put a Library item on a record as a link.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    fileLibraryItemsOnContact: (variables: T.FileLibraryItemsOnContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.FileLibraryItemsOnContactMutation> =>
      this.request('fileLibraryItemsOnContact', variables, options, { operationType: 'mutation' }),
    /**
     * fileLibraryItemsOnContact for a deal's files: a snapshot copy of each Library file, a page as its PDF. Library item ids, never a chat artifactId (that is attachDealFile). Undo with removeDealFile (the copy's `uploadedFileId`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    fileLibraryItemsOnDeal: (variables: T.FileLibraryItemsOnDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.FileLibraryItemsOnDealMutation> =>
      this.request('fileLibraryItemsOnDeal', variables, options, { operationType: 'mutation' }),
    /**
     * A filtered list from a spreadsheet as a NEW CSV beside it, every row read on the server. Use it for any "the rows where…" job; never retype readSpaceSheet rows into a file or split the job up. `columns`: headers to keep (`as` renames); `where`: conditions all kept rows meet (EMPTY, NOT_EMPTY, or EQUALS, NOT_EQUALS, CONTAINS, NOT_CONTAINS with `values`). A repeated group is `{n}` ("Phone {n} Type") with `repeat` ["1","2","3"]: one row per value that passes; column `{n}` outputs it. Report the returned counts.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    filterSpaceSheet: (variables: T.FilterSpaceSheetMutationVariables, options?: IdempotentRequestOptions): Promise<T.FilterSpaceSheetMutation> =>
      this.request('filterSpaceSheet', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: forget a note, with an optional `reason`. It moves to "Show retired" (getMemorySubjectNotes `retired: true`); restoreMemoryNote brings it back.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    forgetMemoryNote: (variables: T.ForgetMemoryNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.ForgetMemoryNoteMutation> =>
      this.request('forgetMemoryNote', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: what dreaming (the nightly pass that merges, rewrites and retires notes) did to one subject, only the newest `limit` entries (at most 50; no paging back, `hasMore` says older ones exist). Each entry's `id` is the `eventId` undoMemoryDream takes when `undoable`; `waiting` is a proposal nobody answered.
     *
     * @remarks Requires the READ scope.
     */
    getMemoryDreamLog: (variables: T.GetMemoryDreamLogQueryVariables, options?: RequestOptions): Promise<T.GetMemoryDreamLogQuery> =>
      this.request('getMemoryDreamLog', variables, options, { operationType: 'query' }),
    /**
     * Memory: one subject's notes — `shelf` PERSON with no `subjectId` is yours, TEAM is the organization's, otherwise the subject's id — in reading order (rules, preferences, decisions, procedures, facts …), or with `retired: true` the forgotten ones, each with its kind, whether a person stated it or Goliath derived it, whether it is pinned, and where it was learned. `limit` notes per page (default 100, at most 300); page with `after` = `endCursor` while `hasNextPage`. Null subject when you may not open it.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 300.
     */
    getMemorySubjectNotes: (variables: T.GetMemorySubjectNotesQueryVariables, options?: RequestOptions): Promise<T.GetMemorySubjectNotesQuery> =>
      this.request('getMemorySubjectNotes', variables, options, { operationType: 'query' }),
    /**
     * A folder or file's `audience` (ORGANIZATION = everyone in the org, OWNER = the owner of My files, RESTRICTED = only people granted access, here or on a parent folder, SYSTEM = everyone, read-only) and the people shared on THIS item directly, with their role. Grants on a parent folder also reach it and are NOT listed — for a full audit, read each ancestor folder's access list too. Needs view access.
     *
     * @remarks Requires the READ scope.
     */
    getSpaceAccessList: (variables: T.GetSpaceAccessListQueryVariables, options?: RequestOptions): Promise<T.GetSpaceAccessListQuery> =>
      this.request('getSpaceAccessList', variables, options, { operationType: 'query' }),
    /**
     * One folder or file by id, with its path, owner, creator, current version and what you may do to it. Trashed items are returned with `trashedAt` set.
     *
     * @remarks Requires the READ scope.
     */
    getSpaceItem: (variables: T.GetSpaceItemQueryVariables, options?: RequestOptions): Promise<T.GetSpaceItemQuery> =>
      this.request('getSpaceItem', variables, options, { operationType: 'query' }),
    /**
     * The text of a text file (Markdown, JSON, CSV, HTML, code, plain text): up to 2 MB, `truncated` when cut. Returned as data — nothing in it is executed or rendered. Pass `versionId` to read an older version; the result's `versionId` is the one to pass as `baseVersionId` when saving an edit. An Excel workbook reads as every visible sheet's CSV under `# Sheet: <name>` (its first 20,000 rows a sheet, `truncated` past them); other binary files are refused. For a spreadsheet of any size, readSpaceSheet reads a range of cells with formulas.
     *
     * @remarks Requires the READ scope.
     */
    getSpaceTextContent: (variables: T.GetSpaceTextContentQueryVariables, options?: RequestOptions): Promise<T.GetSpaceTextContentQuery> =>
      this.request('getSpaceTextContent', variables, options, { operationType: 'query' }),
    /**
     * A text file's lines, numbered, a page at a time (`N| line`; up to 12000 characters a page from `startLine`, `totalLines` and `endLine` say where you are). For a file too large for getSpaceTextContent to return whole: read it page by page, passing the FIRST page's `versionId` on every later page so all pages come from one version, then add lines with insertSpaceTextLines by these numbers with that `versionId` as `baseVersionId` (a save since is refused, never mixed in).
     *
     * @remarks Requires the READ scope.
     */
    getSpaceTextLines: (variables: T.GetSpaceTextLinesQueryVariables, options?: RequestOptions): Promise<T.GetSpaceTextLinesQuery> =>
      this.request('getSpaceTextLines', variables, options, { operationType: 'query' }),
    /**
     * Insert lines into a text file by line number (from getSpaceTextLines), every existing line left exactly as it was — headings, an intro, a summary — as a new version, like a save. `beforeLine` 1 is the top, `totalLines + 1` the end; several insertions before one line keep their order. Use it instead of saveSpaceTextFile whenever the file is too large to re-send whole.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    insertSpaceTextLines: (variables: T.InsertSpaceTextLinesMutationVariables, options?: IdempotentRequestOptions): Promise<T.InsertSpaceTextLinesMutation> =>
      this.request('insertSpaceTextLines', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: the shelves you may open — PERSON (yours), TEAM (the organization's), EMPLOYEE, CONTACT (only the contacts the key owner may open in the CRM) and GROUP (the key owner's own teams) — and how many subjects each list shelf holds (null for PERSON and TEAM). The fleet's PROJECT shelf is never reachable through the API. A workflow's rule lives on TEAM. List a shelf with listMemorySubjects; read one subject with getMemorySubjectNotes.
     *
     * @remarks Requires the READ scope.
     */
    listMemoryShelves: (options?: RequestOptions): Promise<T.ListMemoryShelvesQuery> =>
      this.request('listMemoryShelves', undefined, options, { operationType: 'query' }),
    /**
     * Memory: one list shelf's subjects (EMPLOYEE, CONTACT or GROUP: AI employees, contacts as the CRM lets the key owner open them, or the key owner's teams), newest first, with how many notes each holds; `query` narrows by name. Page with `after` = `endCursor` while `hasNextPage`. Each `subjectId` opens with getMemorySubjectNotes.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listMemorySubjects: (variables: T.ListMemorySubjectsQueryVariables, options?: RequestOptions): Promise<T.ListMemorySubjectsQuery> =>
      this.request('listMemorySubjects', variables, options, { operationType: 'query' }),
    /**
     * The "Recent" view: files you can see (pages and documents included), most recently CHANGED first, `limit` of them (default 100, at most 200), each with `createdAt` and `createdBy`. "What did I make yesterday / this week": `mine: true` (files the person owns: theirs, or made for them in their chats) with `createdAfter` / `createdBefore` at the window's edges in their time zone; count every row, and never present `updatedAt` as when a file was made. With `mine` or a window, only a full page (`limit` rows) can mean more.
     *
     * @remarks Requires the READ scope.
     */
    listRecentSpaceItems: (variables?: T.ListRecentSpaceItemsQueryVariables, options?: RequestOptions): Promise<T.ListRecentSpaceItemsQuery> =>
      this.request('listRecentSpaceItems', variables, options, { operationType: 'query' }),
    /**
     * Records › Calls: the organization's calls, newest first — direction, when, how long, whether recorded, the contact, status and disposition. Filter by `direction`, `contactId`, `handledBy` (`{ userId }` or `{ agentId }`) or `query` (the contact's name; transcripts are not searched). Read one call's recording, transcript and summary with the conversations domain's getCallRecording(callId). Page with `after` = `nextCursor`.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listSpaceCalls: (variables?: T.ListSpaceCallsQueryVariables, options?: RequestOptions): Promise<T.ListSpaceCallsQuery> =>
      this.request('listSpaceCalls', variables, options, { operationType: 'query' }),
    /**
     * Records › Contact files: attachments and voicemails contacts sent or received, newest first. Filter by `contactId`, `dealId` (any contact on the deal), `channel`, `direction`, or `query` (the file's or the contact's name). Only files whose contact you may open. Each row's `source` says where it came from (a text thread, an email subject, a call). Page with `after` = `nextCursor`.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listSpaceContactFiles: (variables?: T.ListSpaceContactFilesQueryVariables, options?: RequestOptions): Promise<T.ListSpaceContactFilesQuery> =>
      this.request('listSpaceContactFiles', variables, options, { operationType: 'query' }),
    /**
     * One folder's files and folders only (a root when `folderId` is omitted). Team's templates, forms, contracts, tables are never listed here: count them with listContentTemplates, listForms, listContractTemplates, listWorkflowTables before saying what Team or Library holds; an empty Team root is not an empty Team. Folders first, then files, by name; each item has `abilities`, `fileType`, size, owner, creator and `path`. Items you cannot see are not returned.
     *
     * @remarks Requires the READ scope.
     */
    listSpaceFolder: (variables: T.ListSpaceFolderQueryVariables, options?: RequestOptions): Promise<T.ListSpaceFolderQuery> =>
      this.request('listSpaceFolder', variables, options, { operationType: 'query' }),
    /**
     * A folder or file's history, newest first — only the latest 50 events, so an older event's absence proves nothing: created, renamed, moved, edited, shared, trashed, restored, downloaded, attached — with who did it (a person, or an AI agent acting for one).
     *
     * @remarks Requires the READ scope.
     */
    listSpaceItemActivity: (variables: T.ListSpaceItemActivityQueryVariables, options?: RequestOptions): Promise<T.ListSpaceItemActivityQuery> =>
      this.request('listSpaceItemActivity', variables, options, { operationType: 'query' }),
    /**
     * A file's saved versions, newest first — at most the newest 200: number, size, who saved it, and which is current. Read an older one with getSpaceTextContent(versionId); bring it back with restoreSpaceItemVersion.
     *
     * @remarks Requires the READ scope.
     */
    listSpaceItemVersions: (variables: T.ListSpaceItemVersionsQueryVariables, options?: RequestOptions): Promise<T.ListSpaceItemVersionsQuery> =>
      this.request('listSpaceItemVersions', variables, options, { operationType: 'query' }),
    /**
     * Library's roots (files and folders only; Team's templates, forms, contracts and tables: listContentTemplates, listForms, listContractTemplates, listWorkflowTables). The organization's file-system roots you can open: Team (everyone in the org), your own My files (`isMine`, private), and the read-only system folders Goliath writes (Uploads, Downloads, Records). Each `id` is the `spaceId` (the root: My files, Team or a system folder) every other Library operation takes; a root's folder id is null. Start here.
     *
     * @remarks Requires the READ scope.
     */
    listSpaceRoots: (options?: RequestOptions): Promise<T.ListSpaceRootsQuery> =>
      this.request('listSpaceRoots', undefined, options, { operationType: 'query' }),
    /**
     * The "Shared with me" view: folders and files teammates shared with you directly, newest first. Each item's `viewerRole` is your EFFECTIVE role on it (the share, or more through Team files, ownership or a folder above), not necessarily what the share alone granted; getSpaceAccessList lists each share's role.
     *
     * @remarks Requires the READ scope.
     */
    listSpacesSharedWithMe: (options?: RequestOptions): Promise<T.ListSpacesSharedWithMeQuery> =>
      this.request('listSpacesSharedWithMe', undefined, options, { operationType: 'query' }),
    /**
     * The "Trash" view: what was trashed (by anyone) that you can see, with `trashedAt`. Trashed items are deleted for good 30 days later; restoreSpaceItems brings them back.
     *
     * @remarks Requires the READ scope.
     */
    listSpaceTrash: (options?: RequestOptions): Promise<T.ListSpaceTrashQuery> =>
      this.request('listSpaceTrash', undefined, options, { operationType: 'query' }),
    /**
     * Move up to 200 items into a folder or a root (`destination.folderId` omitted), all or nothing. Needs edit access on both sides; a move that would change who can see an item (out of a restricted folder, or between My files and Team) also needs MANAGER on it unless it was already open to the whole team — and an AI agent can never make that kind of move: ask the person to do it in Library. Folders move with everything in them.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveSpaceItems: (variables: T.MoveSpaceItemsMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveSpaceItemsMutation> =>
      this.request('moveSpaceItems', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: pin (`pinned` true) or unpin a note. A pinned note rides in every agent memory block for its shelf; dreaming never changes a pin.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    pinMemoryNote: (variables: T.PinMemoryNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.PinMemoryNoteMutation> =>
      this.request('pinMemoryNote', variables, options, { operationType: 'mutation' }),
    /**
     * Publish HTML as a Library Page that opens rendered (strict page CSP: HTML loading anything from outside Goliath is refused). Lands in `destination`, else your Pages folder. `actorGrn` (required): the dev session.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    publishSpacePage: (variables: T.PublishSpacePageMutationVariables, options?: IdempotentRequestOptions): Promise<T.PublishSpacePageMutation> =>
      this.request('publishSpacePage', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: queue one dreaming pass now for the key owner's own PERSON shelf (no `subjectId`), outside the nightly run: a model run that spends, at most $0.50, so it needs the person's approval. Any other shelf (TEAM, an EMPLOYEE) is Goliath-admin only. False when dreaming is off for the organization.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    queueMemoryDream: (variables: T.QueueMemoryDreamMutationVariables, options?: IdempotentRequestOptions): Promise<T.QueueMemoryDreamMutation> =>
      this.request('queueMemoryDream', variables, options, { operationType: 'mutation' }),
    /**
     * A spreadsheet's cells (.xlsx, CSV, TSV) by A1 range — any size, any sheet — instead of reading it whole: `range` B2:F40, C7, A:C (whole columns) or 5:9 (whole rows), default every filled cell; `sheet` by name, default the first. Rows come tab-separated, each led by its row number under a line of column letters, a formula as `=SUM(B2:B9) → 1200` (formula, then the value it shows); a range below row 1, or a `find`, shows row 1 first so the columns are named. Up to 12000 characters a page: `nextStartRow` says where to read on. `find` (a few words, case-insensitive) keeps only the rows holding one, with `matchedRows` counting them all. `sheets` lists every sheet's size; `truncated` means the sheet goes on past the 200,000 rows or 500 columns a read reaches. A formula over another sheet shows the value Excel last saved. Pass the result's `versionId` as `baseVersionId` to editSpaceSheetCells.
     *
     * @remarks Requires the READ scope.
     */
    readSpaceSheet: (variables: T.ReadSpaceSheetQueryVariables, options?: RequestOptions): Promise<T.ReadSpaceSheetQuery> =>
      this.request('readSpaceSheet', variables, options, { operationType: 'query' }),
    /**
     * Rename a folder or file you can edit. Refused when something in the same folder already has that name. Renaming a file can change its type (its extension).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameSpaceItem: (variables: T.RenameSpaceItemMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameSpaceItemMutation> =>
      this.request('renameSpaceItem', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: bring a forgotten note back (`noteId` from getMemorySubjectNotes with `retired: true`).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreMemoryNote: (variables: T.RestoreMemoryNoteMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreMemoryNoteMutation> =>
      this.request('restoreMemoryNote', variables, options, { operationType: 'mutation' }),
    /**
     * Restore trashed items to where they were — exactly what was trashed together comes back. An item whose folder is gone returns to its root (My files or Team); a name taken meanwhile gets " (2)".
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreSpaceItems: (variables: T.RestoreSpaceItemsMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreSpaceItemsMutation> =>
      this.request('restoreSpaceItems', variables, options, { operationType: 'mutation' }),
    /**
     * Make an older version of a file you can edit current again, as a NEW version — nothing is lost; the version it replaces stays in the history.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreSpaceItemVersion: (variables: T.RestoreSpaceItemVersionMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreSpaceItemVersionMutation> =>
      this.request('restoreSpaceItemVersion', variables, options, { operationType: 'mutation' }),
    /**
     * Save a PAGE as a PDF file in Library ("turn this into a PDF", "give it to me as a PDF"): printed now as you see it, saved where the files you make for this person go (their chosen folder, else My files). Returns the new file and its `path`. A snapshot: later edits to the page do not change it. Only a page prints; for anything else make a page of it first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    savePagePdf: (variables: T.SavePagePdfMutationVariables, options?: IdempotentRequestOptions): Promise<T.SavePagePdfMutation> =>
      this.request('savePagePdf', variables, options, { operationType: 'mutation' }),
    /**
     * Save new text as the next version of a text file you can edit (earlier versions are kept and can be restored in the app). Pass `baseVersionId` — the `versionId` getSpaceTextContent returned — so a save over someone else's newer version is refused instead of overwriting it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    saveSpaceTextFile: (variables: T.SaveSpaceTextFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.SaveSpaceTextFileMutation> =>
      this.request('saveSpaceTextFile', variables, options, { operationType: 'mutation' }),
    /**
     * Find folders and files by NAME (case-insensitive substring) across everything you can see — at most 50, most recently changed first. Searches names only, not file contents.
     *
     * @remarks Requires the READ scope.
     */
    searchSpaceItems: (variables: T.SearchSpaceItemsQueryVariables, options?: RequestOptions): Promise<T.SearchSpaceItemsQuery> =>
      this.request('searchSpaceItems', variables, options, { operationType: 'query' }),
    /**
     * One search across everything the Library rail reaches — FILES (folders and files), LIBRARY (templates, contracts, contract templates, forms, tables, pages) and DATA (uploads, downloads) — matching titles and, for templates and contracts, their content. Grouped by zone, best `limit` per zone, each hit with its own id (a Library item id, a template id, a contract id …), `kind` and the app link (`target.href`) to send the person. Narrow with `zones`. Each source applies its own page's access rule.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 25.
     */
    searchSpaces: (variables: T.SearchSpacesQueryVariables, options?: RequestOptions): Promise<T.SearchSpacesQuery> =>
      this.request('searchSpaces', variables, options, { operationType: 'query' }),
    /**
     * Find words INSIDE one text file: the numbered lines (`N| line`) holding any of `terms` (case-insensitive, matches inside longer words), with `contextLines` (default 2) around each and `…` between blocks — one read instead of paging a long file with getSpaceTextLines. Pass a few variants of the idea ("hire", "hiring", "recruit"). `matchedLines` counts every hit; `truncated` means some were left out for space — narrow the terms or read around a hit with getSpaceTextLines.
     *
     * @remarks Requires the READ scope.
     */
    searchSpaceText: (variables: T.SearchSpaceTextQueryVariables, options?: RequestOptions): Promise<T.SearchSpaceTextQuery> =>
      this.request('searchSpaceText', variables, options, { operationType: 'query' }),
    /**
     * Choose where the files you make in this person's chats are saved for them: a folder they can edit (`folderId`), or null for the root of My files, the default. Every later file goes there; files already saved stay where they are.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setAgentFilesFolder: (variables?: T.SetAgentFilesFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetAgentFilesFolderMutation> =>
      this.request('setAgentFilesFolder', variables, options, { operationType: 'mutation' }),
    /**
     * RESTRICTED closes a folder or file (and everything in it) to all but its owner and the people it is shared with; INHERIT opens it back to the audience of the folder it is in, which can WIDEN who sees it. Needs MANAGER. Requires the user's explicit approval.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setSpaceAccessMode: (variables: T.SetSpaceAccessModeMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetSpaceAccessModeMutation> =>
      this.request('setSpaceAccessMode', variables, options, { operationType: 'mutation' }),
    /**
     * Share a folder or file — and everything in it — with one teammate (`userId`, an active member of your organization) as VIEWER, EDITOR or MANAGER, or stop sharing with `role` null. Needs MANAGER. Library never shares outside the organization. Requires the user's explicit approval: it changes who can see the file.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setSpaceGrant: (variables: T.SetSpaceGrantMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetSpaceGrantMutation> =>
      this.request('setSpaceGrant', variables, options, { operationType: 'mutation' }),
    /**
     * Move up to 200 items (folders with everything in them) to the trash. Reversible for 30 days with restoreSpaceItems. Returns how many items went.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    trashSpaceItems: (variables: T.TrashSpaceItemsMutationVariables, options?: IdempotentRequestOptions): Promise<T.TrashSpaceItemsMutation> =>
      this.request('trashSpaceItems', variables, options, { operationType: 'mutation' }),
    /**
     * Memory: undo one dreaming change (`eventId` from getMemoryDreamLog): what it retired or merged comes back, what it wrote is forgotten. On a waiting trust proposal it DECLINES the step. Accepting a trust step is not an operation: the person does it in the app. Refused when a later change depends on it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    undoMemoryDream: (variables: T.UndoMemoryDreamMutationVariables, options?: IdempotentRequestOptions): Promise<T.UndoMemoryDreamMutation> =>
      this.request('undoMemoryDream', variables, options, { operationType: 'mutation' }),
    /**
     * Save a page's next version (`html`), rename it (`title`), or both. Pass `baseVersionId` to refuse a save over a newer one. `actorGrn` (required): the dev session.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateSpacePage: (variables: T.UpdateSpacePageMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateSpacePageMutation> =>
      this.request('updateSpacePage', variables, options, { operationType: 'mutation' }),
  }

  readonly tasks = {
    /**
     * The Contacts bulk bar's Add task: ONE task (createTaskOnContact's rules) on each of contactIds, as a background task (`bulkTaskId`, getBulkTask). assignToPointPerson gives each contact's task to that contact's point person instead of participants, and skips a contact with none. A checklist over many contacts is STILL one action per step. Confirm the task and the count first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    bulkCreateTasksOnContacts: (variables: T.BulkCreateTasksOnContactsMutationVariables, options?: IdempotentRequestOptions): Promise<T.BulkCreateTasksOnContactsMutation> =>
      this.request('bulkCreateTasksOnContacts', variables, options, { operationType: 'mutation' }),
    /**
     * Undo a clear inside its 10 seconds (CANCELLED, nothing changed); ALREADY_STARTED means use restoreClearedTasks.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    cancelTaskClear: (variables: T.CancelTaskClearMutationVariables, options?: IdempotentRequestOptions): Promise<T.CancelTaskClearMutation> =>
      this.request('cancelTaskClear', variables, options, { operationType: 'mutation' }),
    /**
     * Clear the key owner's stale workflow tasks: open to-dos a workflow made, on their list alone, due more than 7 days before today in timezone (an IANA zone). At most 2,000; they are removed (never completed) in 10 seconds. No read counts them beforehand: ask for the clear as described, then report taskCount (and hasMore); restoreClearedTasks undoes it. bulkTaskId null: nothing qualified.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    clearStaleWorkflowTasks: (variables: T.ClearStaleWorkflowTasksMutationVariables, options?: IdempotentRequestOptions): Promise<T.ClearStaleWorkflowTasksMutation> =>
      this.request('clearStaleWorkflowTasks', variables, options, { operationType: 'mutation' }),
    /**
     * Mark a task complete by taskId + its contactId (listMyTasks/listContactTasks). USE THIS whenever the task has a contact: it also writes the completion to the contact's timeline, and the response echoes the contact's tasks with completedAt, to confirm and show what's open. Synchronous. isCompleted: false reopens. The task must be on that contact. A task listed with contact: null has no contactId: use completeTaskById. Confirm with the user before completing anything for them.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    completeTask: (variables: T.CompleteTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.CompleteTaskMutation> =>
      this.request('completeTask', variables, options, { operationType: 'mutation' }),
    /**
     * Complete a task by taskId ALONE, for tasks with NO contact (listMyTasks contact: null; typically deal tasks). Returns the task. isCompleted: false reopens. It REFUSES a task with a contact (it would skip the timeline entry): use completeTask. A contact-less APPOINTMENT completes too (type says so); no task count includes it. It only completes tasks YOU are on: a non-admin key gets a permission error for someone else's. Confirm with the user first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    completeTaskById: (variables: T.CompleteTaskByIdMutationVariables, options?: IdempotentRequestOptions): Promise<T.CompleteTaskByIdMutation> =>
      this.request('completeTaskById', variables, options, { operationType: 'mutation' }),
    /**
     * Create a to-do task on a contact: one line item (title, optional description, due day, assignees) in someone's queue, checked off with completeTask; NOT a calendar event (createAppointment) and NOT a background job (bulkTasks). Requires contactId, title, dueDate, timezone. DUE DATES ARE A LOCAL DAY, NOT AN INSTANT: timezone (PST/MST/CST/EST/…) is the zone the day is read in, and it decides the TODAY/OVERDUE bucket in listMyTasks; send the user's zone, and for a day-level ask ("follow up Friday") pick an end-of-business time there, not a bare midnight. ALWAYS pass participants (getMyProfile for the key owner, listTeammates for a colleague; same-org): with none the task is UNASSIGNED and in nobody's listMyTasks, which is how a checklist silently goes missing. ONE TASK PER CALL: an ad-hoc multi-step checklist is one call per step, in order, with staggered due dates (a saved TASK_SET is one applyTaskSet call). bulkCreateTasksOnContacts puts ONE task on many contacts, so a checklist over many contacts is STILL one action per step even there; never promise a whole ad-hoc multi-step checklist in one click, here or in the app. The response echoes the contact's FULL task list: confirm the checklist from the last call's list. From a chat, a dealIds deal holding an open task refuses the create and names it: ask whether to move that one or add another, then resend with alongsideOpenTasks: true. Confirm the plan with the user before creating tasks for them.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createTaskOnContact: (variables: T.CreateTaskOnContactMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateTaskOnContactMutation> =>
      this.request('createTaskOnContact', variables, options, { operationType: 'mutation' }),
    /**
     * Create a to-do task on a deal with no contact: pipeline work that belongs to the deal (order the title search, chase the inspection report). dealId from findDeals/getDeal. createTaskOnContact's rules apply: timezone is the zone the due day is read in, participants (getMyProfile/listTeammates) put it in a real queue (none = unassigned, invisible to listMyTasks), and a multi-step checklist is one call per step with staggered due dates. The response echoes the deal's full task list; getDeal `tasks` reads it too (never listContactTasks). Edit or delete it with updateTaskOnDeal / deleteTaskOnDeal. From a chat, a deal holding an open task refuses the create and names it: ask whether to move that one or add another, then resend with alongsideOpenTasks: true. Confirm with the user before creating tasks for them.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createTaskOnDeal: (variables: T.CreateTaskOnDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateTaskOnDealMutation> =>
      this.request('createTaskOnDeal', variables, options, { operationType: 'mutation' }),
    /**
     * PERMANENTLY delete ONE task by taskId + its contactId: gone from the contact and the queue with NO undo, so ALWAYS confirm with the user, naming the task. Prefer completeTask if the work is DONE (keeps the record and completedAt) or updateTask if details were wrong; delete is for a task that should never have existed. Many at once is deleteTasks: for a sweep ('delete my completed tasks') list them with listMyTasks, get explicit confirmation of the list, then delete. Returns the contact's remaining tasks. The task must belong to the given contact; a task with no contact is deleteTaskOnDeal.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteTask: (variables: T.DeleteTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteTaskMutation> =>
      this.request('deleteTask', variables, options, { operationType: 'mutation' }),
    /**
     * deleteTask ONLY for a row whose contact is null, by taskId + its dealId; refused like updateTaskOnDeal for a contact (use deleteTask), an appointment (deleteAppointment) or a task the non-admin key is not on. Same rules.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteTaskOnDeal: (variables: T.DeleteTaskOnDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteTaskOnDealMutation> =>
      this.request('deleteTaskOnDeal', variables, options, { operationType: 'mutation' }),
    /**
     * deleteTask for many: items [{ id: taskId, contactId }] (up to 200), each task on its own contact; returns deletedCount. Same rules: no undo. List them; needs their yes (Ask Goliath: bulk card). An appointment is refused (deleteAppointment).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteTasks: (variables: T.DeleteTasksMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteTasksMutation> =>
      this.request('deleteTasks', variables, options, { operationType: 'mutation' }),
    /**
     * List every to-do task on one contact (by contactId from findContacts/getContact/listMyTasks) — title, description, dueDate, completedAt, and assigned participants. Use it to review a contact's outstanding work before a call, or to find the taskId + contactId pair completeTask needs. Appointments are separate — see listAppointments.
     *
     * @remarks Requires the READ scope.
     */
    listContactTasks: (variables: T.ListContactTasksQueryVariables, options?: RequestOptions): Promise<T.ListContactTasksQuery> =>
      this.request('listContactTasks', variables, options, { operationType: 'query' }),
    /**
     * The key owner's OWN to-do queue (appointments, never OVERDUE here: listAppointments). With no participants filter it is the key owner's, for every role. Pass userIds in participants (listTeammates, same-org) for a teammate's queue or a team backlog; a MEMBER key stays narrowed to itself regardless, and a team-admin key sees only tasks on contacts THE KEY OWNER CAN ACCESS, never a complete backlog. A task with no participants is unassigned and appears in neither. Each row's participants say WHO IT BELONGS TO: read them before acting, never assume the reader owns what came back. OVERDUE is INCOMPLETE tasks due before TODAY in timezone, so a task due 9am today is not in it. For what is overdue or past due, read completed: false with dueBefore now. Also filter by taskStatus TODAY/FUTURE, completed, dueBefore/dueAfter, searchTerm; timezone sets day boundaries: EST/CST/MST/AZ/PST/HST or that zone's IANA name (America/New_York, America/Chicago, America/Denver, America/Phoenix, America/Los_Angeles, Pacific/Honolulu; AZ is Arizona, which keeps MST all year); any other is refused. Rows carry dueDate, completedAt, the contact (id + name: the contactId completeTask needs; null when it has none) and deals (the dealId updateTaskOnDeal needs when contact is null). PAGING: this operation IS cursor-paginated, so "show me the rest" is answerable here. When canFetchNext is true, re-call with the SAME filters and cursor set to the LAST row's id to get the rows after it; repeat until canFetchNext is false. Forward only — there is no backwards page, so to revisit earlier rows restart from the top. Keep every filter identical between pages; changing one restarts the walk. total is the unpaged match count for the filters, so nothing is silently truncated. Order: latest-due first with dueBefore/OVERDUE and no dueAfter/TODAY/FUTURE; completed: true by latest completion; else soonest-first, open first.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listMyTasks: (variables?: T.ListMyTasksQueryVariables, options?: RequestOptions): Promise<T.ListMyTasksQuery> =>
      this.request('listMyTasks', variables, options, { operationType: 'query' }),
    /**
     * Move MANY tasks to ONE due date in one call ('all my overdue tasks to tomorrow'): taskIds (up to 200, from listMyTasks) OR dueBefore + expectedCount: the key owner's own open tasks due before then, never their ids (up to 500), moved only if exactly expectedCount (listMyTasks' total); dueDate (ISO) and timezone (the user's zone; every task gets it). Each task is saved as updateTask saves it (contact tasks get their UPDATED_TASK timeline entry; deal tasks, which have none, keep no old date); no contactId needed. By ids it does NOT check ownership: a teammate's contact task the key owner can see moves too, so read participants first (a dueBefore selection: only tasks the key owner is on). Every task is checked first, and nothing moves (the refusal names the ids) if any is deleted, an APPOINTMENT (use updateAppointment), on a contact the key owner cannot access, or, for a non-admin key, a contact-less task the key owner is not on. A save failing after that names the ids that did not move: retry only those. Confirm first. Ask Goliath: bulk card.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    rescheduleTasks: (variables: T.RescheduleTasksMutationVariables, options?: IdempotentRequestOptions): Promise<T.RescheduleTasksMutation> =>
      this.request('rescheduleTasks', variables, options, { operationType: 'mutation' }),
    /**
     * Bring back the tasks a clear removed (for 30 days after it), by the clear's bulkTaskId.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreClearedTasks: (variables: T.RestoreClearedTasksMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreClearedTasksMutation> =>
      this.request('restoreClearedTasks', variables, options, { operationType: 'mutation' }),
    /**
     * Fix an existing task by taskId + its linked contactId (from listMyTasks or listContactTasks): title, description, taskType, dueDate (ISO, with timezone), timezone, or participants (teammate userIds from listTeammates). PATCH: only the fields you pass change; participants REPLACES the whole assignee list. UNDO: Task keeps no history, but every edit on a contact-linked task writes an UPDATED_TASK entry with oldValues to the contact's timeline (listContactActivities; one per edit, the oldest holds the original) — read it and write the old value back; never call a value unrecoverable without looking. WHOSE TASK: empty participants = UNASSIGNED, nobody's; a NON-EMPTY list that does not include the key owner is a TEAMMATE's task — an admin key may write it, but say whose first; a queue read is never proof a task is the reader's. The tool for 'push that follow-up to Friday': reschedule in place; many tasks to one date is rescheduleTasks. contactId IDENTIFIES the task's existing contact, it does NOT move it: any other is rejected, and nothing here re-links a task. Delete-then-recreate is NOT a move — it loses completedAt, the outcome, the created date and every notification and automation link — so say the task can't be moved, and rebuild it only if they ask after hearing that. To tick a task off use completeTask. A task with no contact: updateTaskOnDeal.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateTask: (variables: T.UpdateTaskMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateTaskMutation> =>
      this.request('updateTask', variables, options, { operationType: 'mutation' }),
    /**
     * updateTask ONLY for a row whose contact is null, by taskId + its dealId (listMyTasks `deals`); one with a contact is refused (use updateTask), an appointment too, and for a non-admin key one it is not on. Same fields and rules; no timeline keeps old values: note them first to undo.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateTaskOnDeal: (variables: T.UpdateTaskOnDealMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateTaskOnDealMutation> =>
      this.request('updateTaskOnDeal', variables, options, { operationType: 'mutation' }),
  }

  readonly team = {
    /**
     * Change a teammate's ROLE, the team page's Change Role: ADMIN (every permission, and the role every ADMIN-scoped operation needs; moving to it drops the member's permission settings) or MEMBER (what they may do is their permissions, set by an admin in the app). userId comes from listTeamMembers, which also shows the current role. It takes effect at once. Refused when it would leave the organization with no active admin (the only admin demoting themself). Organization admins only. Returns the member with their new organizationRole.
     *
     * @remarks Requires the ADMIN scope.
     *
     * The organization is derived from your API key — `organizationId` is never caller-supplied.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    changeTeamMemberRole: (variables: Omit<T.ChangeTeamMemberRoleMutationVariables, 'organizationId'>, options?: IdempotentRequestOptions): Promise<T.ChangeTeamMemberRoleMutation> =>
      this.request('changeTeamMemberRole', variables, options, { operationType: 'mutation' }),
    /**
     * HOW MANY TEXTS WENT OUT in a time window — one call, exact, live (not a nightly snapshot). Use it for "how many texts did we send this week" instead of paging listInboxThreads, which is a preview feed and cannot count. WINDOW: startDate (inclusive) and endDate (exclusive) as ISO datetimes WITH an offset — resolve "this week"/"today"/"since 9/28" in the USER's timezone yourself (getMyProfile.resolvedTimezone, or the organization timezone) before calling; an offset-less time is read in the server zone. At most 93 calendar days; a wider window is REFUSED with a message (split it and add the parts). WHAT IS COUNTED: OUTBOUND texts created in the window on a line your organization owns or owned — the organization's texts whoever sent them, never another organization's. INBOUND texts are never counted. SKIPPED sends (the product declined to send — opt-out, Do-Not-Contact, throttle) are NOT counted. Each bucket reports sent (PENDING + SENT + DELIVERED: accepted for dispatch), delivered (the carrier-confirmed subset of sent) and failed (FAILED). byUser is each member's OWN sends: a text with an AI-employee or workflow stamp is never a member's, even when it went out on that member's line. otherSenders holds the rest: aiEmployees (texts an AI employee authored), workflows (texts a workflow or campaign step sent) and unattributed (a person's sends whose user was since removed). total is every bucket summed, so on an org-wide read it IS the whole organization's outbound volume. byUser is ranked by sent + failed, and a row's name is null when the user is gone; on an org-wide read only members with at least one counted text appear, while every member you NAME in userIds appears (zeros included). VISIBILITY (the inbox rule): with no userIds, a key owner who may read teammates (VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES; admins) gets the WHOLE organization and otherSenders; anyone else gets ONLY THEIR OWN row and otherSenders null — so a non-admin's total is their own sends, not the team's; say so rather than reporting it as the org total. Naming a teammate in userIds without either is REFUSED (an error, not zeros); with it, userIds narrows to those members and otherSenders is null. getMyCapabilities says which the key owner holds. Teammate ids come from listTeammates.
     *
     * @remarks Requires the READ scope.
     */
    countOutboundTexts: (variables: T.CountOutboundTextsQueryVariables, options?: RequestOptions): Promise<T.CountOutboundTextsQuery> =>
      this.request('countOutboundTexts', variables, options, { operationType: 'query' }),
    /**
     * Open a DRAFT goal plan for the month containing periodStartDate, seeded with the active plan's commission goals; an existing draft is returned instead. Only a draft is edited; publishGoalPlan makes it the active plan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createGoalPlan: (variables: T.CreateGoalPlanMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateGoalPlanMutation> =>
      this.request('createGoalPlan', variables, options, { operationType: 'mutation' }),
    /**
     * Create a team (name, optional description, emoji, color, memberUserIds). Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createTeam: (variables: T.CreateTeamMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateTeamMutation> =>
      this.request('createTeam', variables, options, { operationType: 'mutation' }),
    /**
     * Create a team-member invitation. userType: ADMIN or MEMBER (default MEMBER). Either emails (each address is EMAILED its own single-use invite: say so) or isPermanent: true, the reusable link, which emails nobody and invites as MEMBER (a live older link is returned with its own role). No email-less one-time link exists. Never paste an acceptUrl in chat (it goes by email); show the permanent link only on request.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createTeamInvite: (variables?: T.CreateTeamInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateTeamInviteMutation> =>
      this.request('createTeamInvite', variables, options, { operationType: 'mutation' }),
    /**
     * A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): createGoalPlan for them.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createTeammateGoalPlan: (variables: T.CreateTeammateGoalPlanMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateTeammateGoalPlanMutation> =>
      this.request('createTeammateGoalPlan', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a personal goal from a DRAFT plan for good; updatePersonalGoalStatus ARCHIVED keeps it. goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deletePersonalGoal: (variables: T.DeletePersonalGoalMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeletePersonalGoalMutation> =>
      this.request('deletePersonalGoal', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a team for good. Refused while workflows, forms or filters still use it: pass getDeletionImpact's dependencyResolution (targetKind USER_GROUP). Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteTeam: (variables: T.DeleteTeamMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteTeamMutation> =>
      this.request('deleteTeam', variables, options, { operationType: 'mutation' }),
    /**
     * A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): deletePersonalGoal for them (for good; ARCHIVED status keeps it); ids from getTeammateGoalPlan.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteTeammatePersonalGoal: (variables: T.DeleteTeammatePersonalGoalMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteTeammatePersonalGoalMutation> =>
      this.request('deleteTeammatePersonalGoal', variables, options, { operationType: 'mutation' }),
    /**
     * Email the organization's PERMANENT (reusable) invite link to 1–50 addresses per request; duplicates are sent once. The link must already exist — create it once with createTeamInvite (isPermanent: true), or find it in listTeamInvites (isPermanent: true, isAlive: true); when the organization has none this is refused rather than minting one. Returns the permanent invitation and its acceptUrl.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    emailPermanentTeamInvite: (variables: T.EmailPermanentTeamInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.EmailPermanentTeamInviteMutation> =>
      this.request('emailPermanentTeamInvite', variables, options, { operationType: 'mutation' }),
    /**
     * Your goals for the month containing periodStartDate (YYYY-MM-DD): draftPlan (being edited) and activePlan (published), either null. Commission goals are targetCents per pipeline (null pipelineId = all pipelines); metric EARNED counts won deals, TOTAL adds pending ones. Personal goals are free text. Your own plan; a teammate’s is the *Teammate* op (ADMIN).
     *
     * @remarks Requires the READ scope.
     */
    getGoalPlan: (variables: T.GetGoalPlanQueryVariables, options?: RequestOptions): Promise<T.GetGoalPlanQuery> =>
      this.request('getGoalPlan', variables, options, { operationType: 'query' }),
    /**
     * WHAT ONE PERSON DID in a time window — "what did I do today", "how was my week", "what did Sam get done yesterday" — in ONE call: their own texts (sent/delivered/failed), calls (outbound, inbound, connected, conversations, talkSeconds), emailsSent, notesWritten, tasksCreated, appointmentsBooked, tasksCompleted and dealStageMoves. Counts only, live. Use it instead of combining countOutboundTexts, getTeamCallStats and timeline reads. WINDOW: startDate (inclusive) and endDate (exclusive) as ISO datetimes WITH an offset, resolved in the USER's timezone (getMyProfile.resolvedTimezone): "today" is local midnight to now or to the next midnight. At most 93 calendar days; wider is REFUSED. WHO: omit userId for the key owner; naming a teammate needs VIEW_ALL_PHONES (org admins hold it) and is REFUSED otherwise. WHAT IS THEIRS: only work the person did themselves; an AI employee, a workflow or an outreach tool working on their behalf is never counted, nor is a bulk action or import, and notes, tasks and appointments count when made by hand in the app (texts and calls follow countOutboundTexts and getTeamCallStats). emailsSent is outbound mail from their connected mailbox. tasksCompleted is tasks they are on that were completed in the window (who ticked it is not recorded). dealStageMoves is moves they made by hand. For the records themselves, read the timeline or lists afterwards.
     *
     * @remarks Requires the READ scope.
     */
    getMemberActivity: (variables: T.GetMemberActivityQueryVariables, options?: RequestOptions): Promise<T.GetMemberActivityQuery> =>
      this.request('getMemberActivity', variables, options, { operationType: 'query' }),
    /**
     * Daily team activity rows for a reporting period (same period values as getTeamAnalyticsOverview) — calls, texts, emails, tasks, appointments, active agents, and new leads per day. For charting trends. Nightly (asOfDate), never today. Admins.
     *
     * @remarks Requires the ADMIN scope.
     *
     * The organization is derived from your API key — `orgId` is never caller-supplied.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    getTeamActivityTimeseries: (variables?: Omit<T.GetTeamActivityTimeseriesQueryVariables, 'orgId'>, options?: RequestOptions): Promise<T.GetTeamActivityTimeseriesQuery> =>
      this.request('getTeamActivityTimeseries', variables, options, { operationType: 'query' }),
    /**
     * Team performance (SEVEN_DAYS | FOURTEEN_DAYS | THIRTY_DAYS | YEAR_TO_DATE; default THIRTY_DAYS): totals, deltas, per-agent rows. NIGHTLY as of asOfDate, never today; say which numbers are nightly and which live (getTeamCallStats, countOutboundTexts). filterContacts awaitingReply: unanswered texts/emails. avgSpeedToFirst{Call,Message}Minutes: minutes from a lead being ASSIGNED to the member to their first call / text or email.
     *
     * @remarks Requires the ADMIN scope.
     *
     * The organization is derived from your API key — `orgId` is never caller-supplied.
     *
     * Rate limited: shares the per-key analytics bucket (60/min); 429s carry Retry-After.
     */
    getTeamAnalyticsOverview: (variables?: Omit<T.GetTeamAnalyticsOverviewQueryVariables, 'orgId'>, options?: RequestOptions): Promise<T.GetTeamAnalyticsOverviewQuery> =>
      this.request('getTeamAnalyticsOverview', variables, options, { operationType: 'query' }),
    /**
     * Per-member CALL COUNTS AND TALK TIME in a time window — one call, exact, live (not a nightly snapshot). The answer to "break down team talk time this week" and "who made the most calls". WINDOW: startDate (inclusive) and endDate (exclusive) as ISO datetimes WITH an offset — resolve "this week"/"since 9/28" in the USER's timezone yourself (getMyProfile.resolvedTimezone, or the organization timezone) before calling. At most 93 calendar days; a wider window is REFUSED with a message. WHAT IS COUNTED, per member, over the organization's calls created in the window and handled by that member: outboundCalls and inboundCalls (every status, missed and unanswered included); connectedCalls = status COMPLETED, the same "connects" the team analytics pages count as completedCalls; conversationCalls = connected AND (lasted at least 120 seconds, or a transcript or AI summary exists), team analytics' conversationCalls; talkSeconds = summed duration of the connected calls (a connected call with no recorded duration adds 0) — divide by 60 or 3600 yourself. A call an AI EMPLOYEE handled is not counted for any member, even when it carries one (a screened call the AI took over), and calls with no member at all (imported dialer history) are not counted — so these are human calling numbers, and can be lower than the analytics pages, which credit AI-handled calls to the member. byUser is ranked by talkSeconds (name null when the user is gone); totals sums the rows. On an org-wide read only members with at least one call appear; every member you NAME in userIds appears (zeros included). VISIBILITY (the inbox rule): with no userIds, a key owner who may read teammates (VIEW_TEAM_CALLS_TEXTS or VIEW_ALL_PHONES; admins) gets every member; anyone else gets ONLY THEIR OWN row — say so rather than presenting it as the team. Naming a teammate in userIds without either is REFUSED (an error, not zeros). getMyCapabilities says which the key owner holds. Teammate ids come from listTeammates.
     *
     * @remarks Requires the READ scope.
     */
    getTeamCallStats: (variables: T.GetTeamCallStatsQueryVariables, options?: RequestOptions): Promise<T.GetTeamCallStatsQuery> =>
      this.request('getTeamCallStats', variables, options, { operationType: 'query' }),
    /**
     * A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): getGoalPlan for them.
     *
     * @remarks Requires the ADMIN scope.
     */
    getTeammateGoalPlan: (variables: T.GetTeammateGoalPlanQueryVariables, options?: RequestOptions): Promise<T.GetTeammateGoalPlanQuery> =>
      this.request('getTeammateGoalPlan', variables, options, { operationType: 'query' }),
    /**
     * Resolve teammate USER IDS to names — pass userIds, get back id, firstName, lastName, email for each. This is the id → person lookup, and the ONLY one: listTeammates searches names, emails and phone numbers and returns at most 50 rows, so it cannot answer "who is <uuid>" in an organization larger than that. Reach for this whenever you are about to REPORT a bare user id to someone — a filter's `userId`, a task's `participants`, a note author — because "owned by 4f3c…" is not an answer a person can act on. Ids outside your organization are rejected; nothing here reveals a user in another org.
     *
     * @remarks Requires the READ scope.
     */
    getTeammatesByIds: (variables: T.GetTeammatesByIdsQueryVariables, options?: RequestOptions): Promise<T.GetTeammatesByIdsQuery> =>
      this.request('getTeammatesByIds', variables, options, { operationType: 'query' }),
    /**
     * A teammate's permissions, as Manage permissions on their row shows them: every capability they HOLD (one missing is one they do not have). userId comes from listTeamMembers. An Admin holds all of them. Read it before grantTeamMemberCapability or revokeTeamMemberCapability to say what changes. Organization admins only; your own permissions are getMyCapabilities.
     *
     * @remarks Requires the ADMIN scope.
     */
    getTeamMemberCapabilities: (variables: T.GetTeamMemberCapabilitiesQueryVariables, options?: RequestOptions): Promise<T.GetTeamMemberCapabilitiesQuery> =>
      this.request('getTeamMemberCapabilities', variables, options, { operationType: 'query' }),
    /**
     * Turn ONE permission on for a teammate, a switch in Manage permissions on their row. Off for a member unless granted: VIEW_ALL_CONTACTS, VIEW_ALL_DEALS, VIEW_ALL_PHONES (call and text from any team number), CONTRACTS_VIEW, CONTRACTS_MANAGE. On unless an admin turned them off (granting one gives it back): CAN_SKIPTRACE, CAN_EXPORT, CAN_WORKFLOW (run workflows), VIEW_TEAM_DIRECTORY (see who else is on the team), VIEW_TEAM_CALENDARS (see teammates' calendars on the Team calendar), VIEW_TEAM_CALLS_TEXTS (read teammates' calls and texts in the Team inbox; email only from mailboxes their owner shares), and the app sections CAN_USE_AUTOMATIONS (and workflow operations), CAN_USE_FILES, CAN_USE_MARKETPLACE, VIEW_ORGANIZATION_SETTINGS, CAN_USE_API_KEYS. Their role does not change: this is the answer to "give X access to Y" for a Member, never a promotion to Admin. userId comes from listTeamMembers. An Admin already holds every permission, so it changes nothing for one. Takes effect within a minute. Organization admins only; the person approves it on a card naming the teammate and the permission.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    grantTeamMemberCapability: (variables: T.GrantTeamMemberCapabilityMutationVariables, options?: IdempotentRequestOptions): Promise<T.GrantTeamMemberCapabilityMutation> =>
      this.request('grantTeamMemberCapability', variables, options, { operationType: 'mutation' }),
    /**
     * List the organization's team invitations — pending (isAlive: true) and spent/revoked (isAlive: false), single-use and permanent; acceptUrl is a full link. A live single-use invite is someone not yet joined; remove one with revokeTeamInvite.
     *
     * @remarks Requires the ADMIN scope.
     */
    listTeamInvites: (options?: RequestOptions): Promise<T.ListTeamInvitesQuery> =>
      this.request('listTeamInvites', undefined, options, { operationType: 'query' }),
    /**
     * Fuzzy-search ACTIVE teammates by name, email or phone (optional searchTerm; omit it for an alphabetical page). This is the PICKER, not the roster: it returns at most `limit` rows (default 20, maximum 50), ranked by match quality, and SUSPENDED members are excluded at the query — so a page that comes back full may be a truncated page, and a person missing from it may be removed rather than absent. An empty or partial result is NOT 'no such person': they may be invited and not yet joined, so an admin reads listTeamInvites before saying nobody by that name is on the team. For the whole team, for anyone's role, or to tell a current member from a removed one, use listTeamMembers; to resolve a bare user id, use getTeammatesByIds. Use the returned userId with updateContact (addCollaborators), assignContact, and the userIds filter on findDeals.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listTeammates: (variables?: T.ListTeammatesQueryVariables, options?: RequestOptions): Promise<T.ListTeammatesQuery> =>
      this.request('listTeammates', variables, options, { operationType: 'query' }),
    /**
     * List EVERY member of your organization with their membership facts — the roster. Offset-paginated (offset + limit; limit defaults to 50, maximum 100; newest member first), so walk pages until one comes back short rather than treating the first page as the whole team. Each row carries organizationRole (ADMIN | MEMBER — ADMIN is the role every ADMIN-scoped operation requires of the key owner) and organizationMembershipStatus (ACTIVE | SUSPENDED). REMOVED MEMBERS ARE INCLUDED: a suspended person is still a row here, so filter on organizationMembershipStatus before reporting who is on the team, and never read a row's presence as "currently works here". Optional searchTerm is a SUBSTRING match on name and email for a plain term and on the id for a uuid; a phone number is matched ONLY when the term is a complete US number (a partial such as the last four digits is searched as a name/email substring and finds no phone — an empty page there is not evidence nobody has the number). Plain terms rank by similarity; a complete email, phone or uuid keeps newest-first and can also return members whose value contains it. Capabilities are not here: the key owner's own come from getMyCapabilities, and an admin reads a teammate's with getTeamMemberCapabilities. Use listTeammates instead when you only need to pick one active person by a partial name.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listTeamMembers: (variables?: T.ListTeamMembersQueryVariables, options?: RequestOptions): Promise<T.ListTeamMembersQuery> =>
      this.request('listTeamMembers', variables, options, { operationType: 'query' }),
    /**
     * The organization's teams (groups of teammates a contact or form can be given to), newest first, with their members; `search` narrows by name.
     *
     * @remarks Requires the READ scope.
     */
    listTeams: (variables?: T.ListTeamsQueryVariables, options?: RequestOptions): Promise<T.ListTeamsQuery> =>
      this.request('listTeams', variables, options, { operationType: 'query' }),
    /**
     * Publish a DRAFT plan (planId from getGoalPlan): it becomes the month's active plan, the one Agent Performance tracks, and the previous active plan is archived. Confirm with the user first. Your own plan; a teammate’s is the *Teammate* op (ADMIN).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    publishGoalPlan: (variables: T.PublishGoalPlanMutationVariables, options?: IdempotentRequestOptions): Promise<T.PublishGoalPlanMutation> =>
      this.request('publishGoalPlan', variables, options, { operationType: 'mutation' }),
    /**
     * A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): publishGoalPlan for them; confirm with the user first.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    publishTeammateGoalPlan: (variables: T.PublishTeammateGoalPlanMutationVariables, options?: IdempotentRequestOptions): Promise<T.PublishTeammateGoalPlanMutation> =>
      this.request('publishTeammateGoalPlan', variables, options, { operationType: 'mutation' }),
    /**
     * Remove a teammate from the team, the team page's Remove from team. It is a SUSPENSION, not a delete: they lose access at once and stop using a seat, but stay on listTeamMembers as SUSPENDED and restoreTeamMember brings them back. On the way out their open tasks go to YOU (the key owner), their contacts' point-person seats are released (a contact left with no agent gets you), and they are taken out of the workflow steps and lead-routing forms that named them. Restoring does NOT hand any of that back; the person approves it on a card. Optional reason is kept on the member. You cannot remove yourself. Organization admins only. The result reports what the handover did: handover (NOT_NEEDED | REASSIGNED | REMOVED | FAILED), reassignedTaskCount, releasedContactSeatCount, handedOverContactCount, and openWorkTruncated / openWorkFailed when some work is still theirs; tell the user those.
     *
     * @remarks Requires the ADMIN scope.
     *
     * The organization is derived from your API key — `organizationId` is never caller-supplied.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    removeTeamMember: (variables: Omit<T.RemoveTeamMemberMutationVariables, 'organizationId'>, options?: IdempotentRequestOptions): Promise<T.RemoveTeamMemberMutation> =>
      this.request('removeTeamMember', variables, options, { operationType: 'mutation' }),
    /**
     * Re-send a team invitation by id (from listTeamInvites) — the same invitation email goes out again to the same address. The invitation itself is unchanged: same id and acceptUrl, so use this for "she never got the email" rather than creating a second invite. Only a LIVE invitation WITH A RECIPIENT can be re-sent (isAlive: true, email set): a spent or revoked one is refused — create a new one with createTeamInvite instead — and a PERMANENT link is refused too, because it has nobody to send to; email that one with emailPermanentTeamInvite.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resendTeamInvite: (variables: T.ResendTeamInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResendTeamInviteMutation> =>
      this.request('resendTeamInvite', variables, options, { operationType: 'mutation' }),
    /**
     * Restore a removed (SUSPENDED) teammate to the team, the team page's Restore to team. They get access back and use a seat again; work handed over when they were removed stays where it went. Refused when the organization cannot take another member (its seat policy). A member who is already active is left as is. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * The organization is derived from your API key — `organizationId` is never caller-supplied.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreTeamMember: (variables: Omit<T.RestoreTeamMemberMutationVariables, 'organizationId'>, options?: IdempotentRequestOptions): Promise<T.RestoreTeamMemberMutation> =>
      this.request('restoreTeamMember', variables, options, { operationType: 'mutation' }),
    /**
     * Revoke a team invitation by id: the one this chat created, else match it in listTeamInvites. The permanent link only when named. The link stops working (isAlive false). Own organization only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    revokeTeamInvite: (variables: T.RevokeTeamInviteMutationVariables, options?: IdempotentRequestOptions): Promise<T.RevokeTeamInviteMutation> =>
      this.request('revokeTeamInvite', variables, options, { operationType: 'mutation' }),
    /**
     * Turn ONE permission off for a teammate, the same switch and the same capabilities as grantTeamMemberCapability, which turns it back on. Their role does not change. An Admin holds every permission whatever is stored, so read getTeamMemberCapabilities first and never offer one for an Admin (their role changes first). Organization admins only; the person approves it on a card naming the teammate and the permission.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    revokeTeamMemberCapability: (variables: T.RevokeTeamMemberCapabilityMutationVariables, options?: IdempotentRequestOptions): Promise<T.RevokeTeamMemberCapabilityMutation> =>
      this.request('revokeTeamMemberCapability', variables, options, { operationType: 'mutation' }),
    /**
     * Set a team's members. memberUserIds (active teammates, listTeamMembers) REPLACES the whole member list. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setTeamMembers: (variables: T.SetTeamMembersMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetTeamMembersMutation> =>
      this.request('setTeamMembers', variables, options, { operationType: 'mutation' }),
    /**
     * Mark a personal goal ACTIVE, COMPLETED or ARCHIVED, on a draft or active plan (not an archived one). goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updatePersonalGoalStatus: (variables: T.UpdatePersonalGoalStatusMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdatePersonalGoalStatusMutation> =>
      this.request('updatePersonalGoalStatus', variables, options, { operationType: 'mutation' }),
    /**
     * Edit a team (teamId from listTeams); omitted fields are untouched. memberUserIds (active teammates, listTeamMembers) REPLACES the whole member list. Organization admins only.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateTeam: (variables: T.UpdateTeamMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateTeamMutation> =>
      this.request('updateTeam', variables, options, { operationType: 'mutation' }),
    /**
     * A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): updatePersonalGoalStatus for them; ids from getTeammateGoalPlan.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateTeammatePersonalGoalStatus: (variables: T.UpdateTeammatePersonalGoalStatusMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateTeammatePersonalGoalStatusMutation> =>
      this.request('updateTeammatePersonalGoalStatus', variables, options, { operationType: 'mutation' }),
    /**
     * Set a commission target on a DRAFT plan: targetCents (> 0, cents), metric EARNED | TOTAL, pipelineId (null = all pipelines). Pass the goal's id to change it; without one a new goal is added. goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    upsertCommissionGoal: (variables: T.UpsertCommissionGoalMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpsertCommissionGoalMutation> =>
      this.request('upsertCommissionGoal', variables, options, { operationType: 'mutation' }),
    /**
     * Add (no id) or edit (id) a personal goal on a DRAFT plan: title, optional description and displayOrder. goalPlanId/goalId from getGoalPlan. Your own plan; a teammate’s is the *Teammate* op (ADMIN).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    upsertPersonalGoal: (variables: T.UpsertPersonalGoalMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpsertPersonalGoalMutation> =>
      this.request('upsertPersonalGoal', variables, options, { operationType: 'mutation' }),
    /**
     * A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): upsertCommissionGoal for them; ids from getTeammateGoalPlan.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    upsertTeammateCommissionGoal: (variables: T.UpsertTeammateCommissionGoalMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpsertTeammateCommissionGoalMutation> =>
      this.request('upsertTeammateCommissionGoal', variables, options, { operationType: 'mutation' }),
    /**
     * A teammate's plan (`userId`, ADMIN; the key owner must be an org admin who sees the team directory): upsertPersonalGoal for them; ids from getTeammateGoalPlan.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    upsertTeammatePersonalGoal: (variables: T.UpsertTeammatePersonalGoalMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpsertTeammatePersonalGoalMutation> =>
      this.request('upsertTeammatePersonalGoal', variables, options, { operationType: 'mutation' }),
  }

  readonly workflows = {
    /**
     * Add a file the person attached (or you made) to the content library by its artifactId, under a name, with an optional description and folderId (listContentTemplateFolders). Templates can then attach it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    addLibraryFileFromArtifact: (variables: T.AddLibraryFileFromArtifactMutationVariables, options?: IdempotentRequestOptions): Promise<T.AddLibraryFileFromArtifactMutation> =>
      this.request('addLibraryFileFromArtifact', variables, options, { operationType: 'mutation' }),
    /**
     * Run a whole TASK_SET against a contact: creates every step as a task in one call, all assigned to the acting user and linked to the contact (and any dealIds). Each step's due date is ITS OWN relative offset from one shared “now”, snapped to its own preferred time-of-day; the referenced template's timing is ignored inside a set. Steps run in due order and stop at the FIRST failure, KEEPING what was created: the payload carries the tasks that landed plus failedStep { index, taskTemplateId, message }, and it does NOT error, so read failedStep before reporting success. Rejects a template not of type TASK_SET. Set ids: listContentTemplates(type: TASK_SET).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    applyTaskSet: (variables: T.ApplyTaskSetMutationVariables, options?: IdempotentRequestOptions): Promise<T.ApplyTaskSetMutation> =>
      this.request('applyTaskSet', variables, options, { operationType: 'mutation' }),
    /**
     * Run a TASK template against a contact: creates one task, assigned to the acting user, linked to the contact (and any dealIds). Title/description render the template's merge fields + spintax against that contact, and the RELATIVE dueOffset resolves from now, snapped to its preferred time-of-day. Rejects a template not of type TASK. overrides { title?, description?, endDate?, timezone?, taskType?, autoCompleteOnNoteAdded?, autoCompleteOnReassignment? } replace what the template would produce for this one apply: an endDate override skips the relative due date, and what is not overridable (origin, supporting-file links, the contact/deal links) still applies. Send timezone with any endDate override: the task is stored and read back in it, and without it keeps the TEMPLATE's zone, so an instant chosen in one zone can render as a different day. Template ids: listContentTemplates(type: TASK). A whole saved SOP is applyTaskSet, not this per step.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    applyTaskTemplate: (variables: T.ApplyTaskTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.ApplyTaskTemplateMutation> =>
      this.request('applyTaskTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * Pause many runs at once by explicit id (cap 500). Ids that are ineligible or not visible to you are counted in skippedCount, not errored.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    bulkPauseWorkflowRuns: (variables: T.BulkPauseWorkflowRunsMutationVariables, options?: IdempotentRequestOptions): Promise<T.BulkPauseWorkflowRunsMutation> =>
      this.request('bulkPauseWorkflowRuns', variables, options, { operationType: 'mutation' }),
    /**
     * Resume many paused runs at once by explicit id (cap 500). Ineligible or not-visible ids are counted in skippedCount, not errored.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    bulkResumeWorkflowRuns: (variables: T.BulkResumeWorkflowRunsMutationVariables, options?: IdempotentRequestOptions): Promise<T.BulkResumeWorkflowRunsMutation> =>
      this.request('bulkResumeWorkflowRuns', variables, options, { operationType: 'mutation' }),
    /**
     * Create a reusable template. type is EMAIL | SMS | NOTE | TASK | TASK_SET. The nested input carries name, bodyContent (merge fields and [a|b] spintax allowed) and subjectContent (email only). Its merge fields are the vocabulary of WHATEVER NODE renders it, since a template has no domain of its own: from a CONTACT node or applyTaskTemplate, the CONTACT vocabulary listed under updateWorkflowGraph ({{firstName}}, {{contactPropertyAddress}}, {{userFirstName}}, …); from an APPOINTMENT text node, that PLUS the appointment fields ({{appointmentStartTime}}, …). Quote merge fields to the person as [First name], not raw keys, unless they check spelling. Keys match EXACTLY and case-sensitively, with no dotted or snake_case form: {{merge_fields}} and {{contact.firstName}} send the literal braces. TASK (the checklist/SOP step under Automations → Templates) takes input.taskConfig; bodyContent holds the task description and the due date is RELATIVE, resolved when applied. TASK_SET is a whole SOP: bodyContent "", no taskConfig, and input.taskSetSteps of 1–25 steps (their rules are on the input shape), applied in one call with applyTaskSet.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createContentTemplate: (variables: T.CreateContentTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateContentTemplateMutation> =>
      this.request('createContentTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * Create a template folder. Pass parentFolderId to nest it under another folder.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createContentTemplateFolder: (variables: T.CreateContentTemplateFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateContentTemplateFolderMutation> =>
      this.request('createContentTemplateFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Idempotent "edit": return the existing DRAFT version under this workflow, or clone the live (or most recently paused) version into a fresh DRAFT. Use the returned id with updateWorkflowGraph. WEBHOOK SECRETS ARE REDACTED. A `send_webhook_action` step's `config.auth.secret` reads as the literal `__GOLIATH_WEBHOOK_SECRET_REDACTED__` — never the credential, never a value to quote or reason about. Send it BACK UNCHANGED in updateWorkflowGraph to keep the stored secret, and a different string only when the user is deliberately rotating it. Never invent, guess or complete a replacement: that overwrites a working credential. The sentinel on a step with no stored secret behind it (a step you just added, or a graph read so long ago its node ids rotated) is REFUSED: re-read the graph and carry it from the fresh copy.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createOrReturnWorkflowDraft: (variables: T.CreateOrReturnWorkflowDraftMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateOrReturnWorkflowDraftMutation> =>
      this.request('createOrReturnWorkflowDraft', variables, options, { operationType: 'mutation' }),
    /**
     * Create a workflow automation: a new group plus its initial DRAFT version. workflowDomain is CONTACT | DEAL | PROPERTY | APPOINTMENT | EVENT. There is no workflowType: the variable is gone, so sending it is a 400 unknown_variable, not a no-op. Which channels a workflow messages on is not a property of the group: it is the union of the channels its communicationConfig configures with its own text_action / email_action steps, reported as `channels` on this response and on getWorkflow (the paginated listings carry `channelsAcrossVersions`; see them for how the two differ). A create seeds NO communication config unless a templateId brings one; adding a text or email step with updateWorkflowGraph seeds that channel's editor defaults, and a sender must still be chosen before promoting. Optional templateId seeds the draft graph from a registered starter template. Edit the draft with updateWorkflowGraph, whose step vocabulary is far more than texts and emails (tags, team and round-robin assignment, teammate notifications, tasks, appointments, deals, custom fields, AI employees, webhooks, Slack, chaining workflows), then ship it with promoteWorkflowDraft. Optional sendWindow is the starting SENDING SCHEDULE (updateWorkflowSendWindow's shape); absent takes the template's when it has one, else the platform default. The graph never carries it: change it later with updateWorkflowSendWindow. THE SKIP-TRACE WORKFLOW (watches property signals in a buy-box and skip-traces each owner into a contact) is created with `workflowDomain: "PROPERTY"`, `systemCategory: "PROPERTY_SIGNAL_SKIP_TRACE"` and `templateId: "property_signal_skip_trace"` together, as the onboarding package does. Its draft is a trigger, a create-contact step and an end. It is promoted only with TWO triggers: a MUTATION trigger whose filter names at least one property signal type (`propertySignalTypes`, in ONE flat OR group: a run starts when a property gets any of them), and a MATCH trigger whose filter is an AND root carrying a top-level `spicyLeadScore` minimum (the buy-box; places and property types are optional conditions beside it). Read the draft with getWorkflowVersionGraph, replace its trigger with those two through updateWorkflowGraph, then promoteWorkflowDraft; getWorkflow.draftValidation names whichever is missing. Each run spends a skip-trace credit. Its daily run limit is the ORGANIZATION's, shared by every skip-trace workflow: setSkipTraceDailyCap sets it, getWorkflowThrottleUsage reads it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createWorkflow: (variables: T.CreateWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateWorkflowMutation> =>
      this.request('createWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Create an empty workflow folder, optionally nested under parentFolderId, and return its id.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    createWorkflowFolder: (variables: T.CreateWorkflowFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.CreateWorkflowFolderMutation> =>
      this.request('createWorkflowFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a template by id; returns the remaining templates. One that workflow steps or task sets still use is REFUSED without a dependencyResolution: call getDeletionImpact (targetKind CONTENT_TEMPLATE) first, then pass its impactVersion and one replacement template of the same type; every step and task set is repointed at it before the delete. Omit it for a template nothing references.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteContentTemplate: (variables: T.DeleteContentTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteContentTemplateMutation> =>
      this.request('deleteContentTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a template folder by id. Subfolders inside it are also deleted; templates in the deleted folders become ungrouped rather than deleted. Returns the remaining folders.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteContentTemplateFolder: (variables: T.DeleteContentTemplateFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteContentTemplateFolderMutation> =>
      this.request('deleteContentTemplateFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Delete one pasted example payload for good (sampleId from listEventWorkflowPayloadSamples). A `run:` sample is NOT_FOUND.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteEventWorkflowPayloadSample: (variables: T.DeleteEventWorkflowPayloadSampleMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteEventWorkflowPayloadSampleMutation> =>
      this.request('deleteEventWorkflowPayloadSample', variables, options, { operationType: 'mutation' }),
    /**
     * Take a file out of the library for good (its name and description go). The upload itself stays, and templates that attach it keep working.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteLibraryFile: (variables: T.DeleteLibraryFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteLibraryFileMutation> =>
      this.request('deleteLibraryFile', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a workflow (the UI's "Delete"): archives the group, pauses any active version and PERMANENTLY stops its in-flight runs; everyone mid-sequence drops out and restoring the workflow does not bring them back. Confirm with the user first. The re-queried group shows archivedAt. restoreWorkflow undoes the archive (the workflow comes back paused).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteWorkflow: (variables: T.DeleteWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteWorkflowMutation> =>
      this.request('deleteWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Delete a workflow folder by folderId. Its direct workflows and child folders move to its parent; nothing inside is deleted.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteWorkflowFolder: (variables: T.DeleteWorkflowFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteWorkflowFolderMutation> =>
      this.request('deleteWorkflowFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Archive a Workflow Table. Refused while a workflow, message or form still names one of its columns; the refusal names them.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    deleteWorkflowTable: (variables: T.DeleteWorkflowTableMutationVariables, options?: IdempotentRequestOptions): Promise<T.DeleteWorkflowTableMutation> =>
      this.request('deleteWorkflowTable', variables, options, { operationType: 'mutation' }),
    /**
     * Discard the workflow's current DRAFT version, if any. Idempotent — a no-op when there is no draft.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    discardWorkflowDraft: (variables: T.DiscardWorkflowDraftMutationVariables, options?: IdempotentRequestOptions): Promise<T.DiscardWorkflowDraftMutation> =>
      this.request('discardWorkflowDraft', variables, options, { operationType: 'mutation' }),
    /**
     * Duplicate a workflow into a fresh group with the given name, as a paused/draft copy that never starts by itself. The copy inherits `systemCategory`, so a duplicated "PROPERTY_SIGNAL_SKIP_TRACE" workflow is another one of those. Two are REFUSED: "APPOINTMENT_REMINDER" (a copy would fire for the source reminder's appointments; create a new one with createAppointmentReminder) and "INTEGRATION_LEAD_HANDLING" (one per integration, and a copy binds to nothing; set it up from Integrations).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    duplicateWorkflow: (variables: T.DuplicateWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.DuplicateWorkflowMutation> =>
      this.request('duplicateWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Enroll MANY contacts in one CONTACT workflow's ACTIVE version: the app's bulk "Add to workflow" on the Contacts table. ASYNC bulk task: returns a bulkTaskId before anything runs; poll getBulkTask. TWO selection forms, never combined. EXPLICIT: `contactIds`. FILTER-BACKED: `filterId` (a saved contact filter from listContactFilters; a teammate's private one is refused) OR `filterTree` (inline, saveFilter's CONTACT DSL, parsed STRICTLY) with `selectCount: N`, the first N matches in the filter's default order; `excludeIds` drops contacts from that window. NO select-all: a filter without selectCount is refused, so size the window with countContacts first. CAP: 20,000 contacts per call (the app's bulk-action limit, charged on the ids or selectCount); split a bigger audience with excludeIds or narrower filters. The workflow must be CONTACT with an ACTIVE version (PROPERTY or DEAL is refused; one record at a time is triggerWorkflowRun). Each enrolled contact starts a run that can TEXT or EMAIL them under the workflow's send window, daily caps and the org's sending safety. State the workflow and contact count to the user and get a go-ahead BEFORE submitting.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    enrollInWorkflow: (variables: T.EnrollInWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.EnrollInWorkflowMutation> =>
      this.request('enrollInWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Fetch one reusable template by id — name, type (EMAIL | SMS | NOTE | TASK), body, and folder. EMAIL/SMS/NOTE templates are the saved message content workflows reference; TASK templates are reusable checklist/SOP steps you instantiate with applyTaskTemplate.
     *
     * @remarks Requires the READ scope.
     */
    getContentTemplate: (variables: T.GetContentTemplateQueryVariables, options?: RequestOptions): Promise<T.GetContentTemplateQuery> =>
      this.request('getContentTemplate', variables, options, { operationType: 'query' }),
    /**
     * Fetch one workflow automation by group id: status, versions, the live version, the pending draft and draft validation. `channels` reads ONE version, the most recently PUBLISHED whatever its status now (active, paused or suspended), else the pending draft; null when that graph could not be read, [] when the group has no version. `channelsAcrossVersions` reads every version not deleted, superseded ones and drafts included (never null), so the two differ whenever another version messages on a channel the published one does not. Both are CONFIGURED channels, not sending: a paused or suspended head answers its channels while sending nothing, so read `status` before calling a workflow actively texting or emailing. `draftValidation.carrierRisk` is the draft's text copy scored for carrier filtering, riskiest first (`isFallback`: the step's backup text). It never blocks the promote: reword a medium or high one with rewriteWorkflowDraftTextStep first. `sendWindow` is the workflow's live SENDING SCHEDULE (a graph `triggerWindow`'s shape plus `timezoneMode`, see updateWorkflowGraph), or null for the platform default (Mon–Fri 09:00–19:00 org time). It belongs to the workflow, not a version: every run reads it on its next send, whichever version it started on. Only updateWorkflowSendWindow changes it; no graph write can. `stepKinds` names step TYPES, not waits or copy: never say a pending draft matches or changes the published one before reading BOTH with getWorkflowVersionGraph (paused: the published one is in `versions`, not `currentVersion`). TRIGGERS ARE NOT THE ONLY WAY IN. Steps in OTHER workflows enroll records into this one: a PROPERTY `create_contact_action` (the contact it creates), a `trigger_contact_workflow_action` (start another workflow), and an EVENT `find_create_contact_action` / `event_find_property_action`. A workflow whose only trigger is {type: "manual"} is normal when it is fed that way: never call it idle or unreachable from its triggers alone. getDeletionImpact(targetKind: WORKFLOW_GROUP, targetId: <this group id>) says whether anything references it: its WORKFLOW_AUTOMATION group counts REFERENCES (each step, trigger or filter in each live version naming this one, so one workflow can count more than once), not names. To see WHICH workflows feed it, scan other workflows' graphs (getWorkflowVersionGraph) for a step naming this group id. TO CHANGE WHAT A WORKFLOW DOES (add a condition, change a trigger, narrow who it acts on), edit its graph: createOrReturnWorkflowDraft → updateWorkflowGraph → promoteWorkflowDraft, then resumeWorkflow if it was paused. Pausing only stops it. E.g. a PROPERTY workflow can require a motivation signal before it creates or texts anyone: a `conditional` step on the `hasSignal` or `propertySignalTypes` property filter fields (listFilterFieldNames lists them) ahead of the `create_contact_action` step. Never tell a user restricting outreach this way needs human review: it is a graph edit.
     *
     * @remarks Requires the READ scope.
     */
    getWorkflow: (variables: T.GetWorkflowQueryVariables, options?: RequestOptions): Promise<T.GetWorkflowQuery> =>
      this.request('getWorkflow', variables, options, { operationType: 'query' }),
    /**
     * Performance summary for one workflow (by group id), lifetime, dry runs excluded: run counts by outcome (active/completed/paused/stopped/failed), messages sent, reply rate with its positive/negative split, bounce rate and last-run time. The headline "how is this automation doing" answer.
     *
     * @remarks Requires the READ scope.
     */
    getWorkflowStats: (variables: T.GetWorkflowStatsQueryVariables, options?: RequestOptions): Promise<T.GetWorkflowStatsQuery> =>
      this.request('getWorkflowStats', variables, options, { operationType: 'query' }),
    /**
     * One Workflow Table with its rows, paged by `rowLimit` (default 100, at most 500) and `rowOffset` — keep reading while a page comes back full (`rowCount` excludes the DEFAULT row, which pages like any other): each row's key (`key`, `keyLabel`, the `keyLevel` of the fallback chain it sits on, and its `keyParts`), whether it is the DEFAULT row (used when nothing matches), and its cells by `columnId`. Rows need an org admin (the Tables editor's gate); null when the table is not in your org. Which row one record gets is previewWorkflowTableLookup's answer, never a key matched by eye.
     *
     * @remarks Requires the READ scope.
     */
    getWorkflowTable: (variables: T.GetWorkflowTableQueryVariables, options?: RequestOptions): Promise<T.GetWorkflowTableQuery> =>
      this.request('getWorkflowTable', variables, options, { operationType: 'query' }),
    /**
     * Daily send-limit usage for a throttle-backed workflow (by group id): usedToday vs dailyCap and a per-day history over the last `rangeDays` (1–90, clamped). Null for a workflow with no throttle (only skip-trace-category workflows have one). Answers "am I near my sending limit?".
     *
     * @remarks Requires the READ scope.
     */
    getWorkflowThrottleUsage: (variables: T.GetWorkflowThrottleUsageQueryVariables, options?: RequestOptions): Promise<T.GetWorkflowThrottleUsageQuery> =>
      this.request('getWorkflowThrottleUsage', variables, options, { operationType: 'query' }),
    /**
     * Fetch one workflow VERSION by workflowAutomationId (from getWorkflow.versions/currentVersion/pendingDraft) with its full node/edge graph: the superjson-serialized WorkflowGraph updateWorkflowGraph writes back. Its `triggers` array shows what starts runs; updateWorkflowGraph documents the trigger shapes, how to add or remove them, and the FULL step vocabulary (far more than text steps). Read `graph.config` before answering about BEHAVIOUR rather than steps: exit conditions, sender selection and the trigger operator live there, not on a node. The SENDING schedule does not: it is getWorkflow.sendWindow. `inWords` states the triggers and the stop rules in words, and `inWords.names` names every tag, list, teammate or stage the graph holds by id (a tag and a list share names: read `kind`). Describe the workflow from these, never from its name or description; keep every stop rule unless the person asks to drop that one. TRIGGERS ARE NOT THE ONLY WAY IN. Steps in OTHER workflows enroll records into this one: a PROPERTY `create_contact_action` (the contact it creates), a `trigger_contact_workflow_action` (start another workflow), and an EVENT `find_create_contact_action` / `event_find_property_action`. A workflow whose only trigger is {type: "manual"} is normal when it is fed that way: never call it idle or unreachable from its triggers alone. getDeletionImpact(targetKind: WORKFLOW_GROUP, targetId: <this group id>) says whether anything references it: its WORKFLOW_AUTOMATION group counts REFERENCES (each step, trigger or filter in each live version naming this one, so one workflow can count more than once), not names. To see WHICH workflows feed it, scan other workflows' graphs (getWorkflowVersionGraph) for a step naming this group id. TO CHANGE WHAT A WORKFLOW DOES (add a condition, change a trigger, narrow who it acts on), edit its graph: createOrReturnWorkflowDraft → updateWorkflowGraph → promoteWorkflowDraft, then resumeWorkflow if it was paused. Pausing only stops it. E.g. a PROPERTY workflow can require a motivation signal before it creates or texts anyone: a `conditional` step on the `hasSignal` or `propertySignalTypes` property filter fields (listFilterFieldNames lists them) ahead of the `create_contact_action` step. Never tell a user restricting outreach this way needs human review: it is a graph edit. WEBHOOK SECRETS ARE REDACTED. A `send_webhook_action` step's `config.auth.secret` reads as the literal `__GOLIATH_WEBHOOK_SECRET_REDACTED__` — never the credential, never a value to quote or reason about. Send it BACK UNCHANGED in updateWorkflowGraph to keep the stored secret, and a different string only when the user is deliberately rotating it. Never invent, guess or complete a replacement: that overwrites a working credential. The sentinel on a step with no stored secret behind it (a step you just added, or a graph read so long ago its node ids rotated) is REFUSED: re-read the graph and carry it from the fresh copy.
     *
     * @remarks Requires the READ scope.
     */
    getWorkflowVersionGraph: (variables: T.GetWorkflowVersionGraphQueryVariables, options?: RequestOptions): Promise<T.GetWorkflowVersionGraphQuery> =>
      this.request('getWorkflowVersionGraph', variables, options, { operationType: 'query' }),
    /**
     * Performance summary for one VERSION (by workflowAutomationId, from getWorkflow.versions), the shape of getWorkflowStats: compare a new version against the one it replaced. Also `sendingCapacity`: how many of its runs are queued behind sending capacity now (`queuedRuns`), the soonest `nextAttemptAt` and the main `reason` (DAILY_CAP | SEND_WINDOW | WINDOW_LIMIT | OUT_OF_SMS_CREDITS); null when nothing is queued. It tells a workflow that is PACING from one that has stopped.
     *
     * @remarks Requires the READ scope.
     */
    getWorkflowVersionStats: (variables: T.GetWorkflowVersionStatsQueryVariables, options?: RequestOptions): Promise<T.GetWorkflowVersionStatsQuery> =>
      this.request('getWorkflowVersionStats', variables, options, { operationType: 'query' }),
    /**
     * List the organization's shared content-library folders (id, name, parentFolderId, displayOrder) with per-kind template counts and a file count. Counts are DIRECT — what is filed in that folder itself, not its subtree — so a parent's own counts do not include its children's.
     *
     * @remarks Requires the READ scope.
     */
    listContentTemplateFolders: (options?: RequestOptions): Promise<T.ListContentTemplateFoldersQuery> =>
      this.request('listContentTemplateFolders', undefined, options, { operationType: 'query' }),
    /**
     * List the organization's reusable templates, optionally filtered by type (EMAIL | SMS | NOTE | TASK) or folderId. Pass type: TASK to find the saved checklist/SOP steps that applyTaskTemplate runs against a contact. Returns the template id to use in getContentTemplate / updateContentTemplate / applyTaskTemplate.
     *
     * @remarks Requires the READ scope.
     */
    listContentTemplates: (variables?: T.ListContentTemplatesQueryVariables, options?: RequestOptions): Promise<T.ListContentTemplatesQuery> =>
      this.request('listContentTemplates', variables, options, { operationType: 'query' }),
    /**
     * The example payloads an EVENT workflow has received or been given (what its sender POSTs), to map trigger fields from. Empty for any other domain. A `run:` id belongs to a run and cannot be deleted.
     *
     * @remarks Requires the READ scope.
     */
    listEventWorkflowPayloadSamples: (variables: T.ListEventWorkflowPayloadSamplesQueryVariables, options?: RequestOptions): Promise<T.ListEventWorkflowPayloadSamplesQuery> =>
      this.request('listEventWorkflowPayloadSamples', variables, options, { operationType: 'query' }),
    /**
     * List the content library's files (Automations → Templates → Files): id, name, description, folderId, contentType. Optional folderId (listContentTemplateFolders) and name search.
     *
     * @remarks Requires the READ scope.
     */
    listLibraryFiles: (variables?: T.ListLibraryFilesQueryVariables, options?: RequestOptions): Promise<T.ListLibraryFilesQuery> =>
      this.request('listLibraryFiles', variables, options, { operationType: 'query' }),
    /**
     * List the organization's shared workflow-folder tree (id, name, parentFolderId, displayOrder, itemCount). The compatibility field `ready` is always true on current servers.
     *
     * @remarks Requires the READ scope.
     */
    listWorkflowFolders: (options?: RequestOptions): Promise<T.ListWorkflowFoldersQuery> =>
      this.request('listWorkflowFolders', undefined, options, { operationType: 'query' }),
    /**
     * A workflow's save history, newest first: when, who (`source` HUMAN, AGENT or SYSTEM; `actorName`; `agentRunId` for an agent's save), the version it wrote, and `diff`: what changed against the save before (`summary`, edited steps and keys, settings, rename). A save through this API, the assistant's included, reads HUMAN under the person's name. When `diff.hasPredecessor` is false there is no earlier save to compare (its first save, or older history trimmed): go by `summary`, never the lists, as that save's change. `absorbedUnjournaledEdits` means it includes edits made outside the editor; say so.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listWorkflowGraphRevisions: (variables: T.ListWorkflowGraphRevisionsQueryVariables, options?: RequestOptions): Promise<T.ListWorkflowGraphRevisionsQuery> =>
      this.request('listWorkflowGraphRevisions', variables, options, { operationType: 'query' }),
    /**
     * Scoreboard: the org's workflows (paginated, non-archived) each with headline stats — total/active/completed runs, reply rate, and last-run time. One call to answer "which of my automations are running and how are they doing". Drill into any with getWorkflowStats. Each row carries `channelsAcrossVersions`: the channels the workflow messages on (TEXT, EMAIL, both, or [] when it messages nobody; never null), the same answer the app's Channel filter gives, so read it to PICK workflows out of a list. It spans EVERY version not deleted: the published one, the ones it superseded and an unpublished draft. getWorkflow.`channels` reads ONE: the most recently PUBLISHED version whatever its status (active, paused or suspended), else the pending draft. NEITHER says it is SENDING: a paused or suspended head keeps its configured channels while sending nothing. Read `status` for that.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listWorkflowPerformance: (variables?: T.ListWorkflowPerformanceQueryVariables, options?: RequestOptions): Promise<T.ListWorkflowPerformanceQuery> =>
      this.request('listWorkflowPerformance', variables, options, { operationType: 'query' }),
    /**
     * List runs of one workflow version (by workflowAutomationId), optionally by run status (PENDING | RUNNING | COMPLETED | PAUSED | STOPPED | FAILED | NOT_ENROLLED). Run ids feed pauseWorkflowRun / resumeWorkflowRun / stopWorkflowRun. Report each run's reason rather than saying reasons are unavailable: a NOT_ENROLLED run was refused at the door and never entered, and its `stoppedReason` says why (a STOPPED run's says why it was withdrawn); a PAUSED run carries `pausedReason`, plus `sendFailureCode` (the carrier code, e.g. 30007) when a failed text paused it; a PENDING run whose next send waits carries `queuedSend.reason` (DAILY_CAP | SEND_WINDOW | WINDOW_LIMIT | OUT_OF_SMS_CREDITS, null when the wait has no nameable cause; current only on a PENDING run, so go by `pausedReason` on a PAUSED one) and `queuedSend.nextAttemptAt`. A FAILED run has no reason field and an older STOPPED run's `stoppedReason` can be null: say it is not recorded, never invent one. Reasons are raw codes.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 34.
     */
    listWorkflowRuns: (variables: T.ListWorkflowRunsQueryVariables, options?: RequestOptions): Promise<T.ListWorkflowRunsQuery> =>
      this.request('listWorkflowRuns', variables, options, { operationType: 'query' }),
    /**
     * List the organization's workflow automations (paginated, non-archived by default). Returns the group id to use in getWorkflow and the other workflow operations. `status`, `domain`, `name` (a name search, any case) and `triggerType` (on a version of that status; hidden groups included) narrow rows and `total`. For a workflow the person named, pass their words as `name` and compare each row's `name` for the exact one, reading every page `total` counts before calling one row the only exact match (names are not unique). Each row carries `channelsAcrossVersions`: the channels the workflow messages on (TEXT, EMAIL, both, or [] when it messages nobody; never null), the same answer the app's Channel filter gives, so read it to PICK workflows out of a list. It spans EVERY version not deleted: the published one, the ones it superseded and an unpublished draft. getWorkflow.`channels` reads ONE: the most recently PUBLISHED version whatever its status (active, paused or suspended), else the pending draft. NEITHER says it is SENDING: a paused or suspended head keeps its configured channels while sending nothing. Read `status` for that.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 50.
     */
    listWorkflows: (variables?: T.ListWorkflowsQueryVariables, options?: RequestOptions): Promise<T.ListWorkflowsQuery> =>
      this.request('listWorkflows', variables, options, { operationType: 'query' }),
    /**
     * A Workflow Table's change history, newest first: who saved what and when, how many columns and rows changed. `rowId` narrows it to one row. Page with `after` = `nextCursor`. Same gate as the rows.
     *
     * @remarks Requires the READ scope.
     *
     * The `limit` variable is clamped server-side to a maximum of 100.
     */
    listWorkflowTableChanges: (variables: T.ListWorkflowTableChangesQueryVariables, options?: RequestOptions): Promise<T.ListWorkflowTableChangesQuery> =>
      this.request('listWorkflowTableChanges', variables, options, { operationType: 'query' }),
    /**
     * The organization's Workflow Tables (not archived), by name: each table's key (what rows are matched on — `keyKind`, e.g. COUNTY_FIPS, STATE, ZIP, FIELD_PATH, and its fallback levels in `keyShape`), its columns (with each column's `tokenKey`, the merge field a message uses, and a SELECT column's options) and `rowCount`. No rows — read one table's rows with getWorkflowTable. Paged: `limit` (default 20) and `offset`; a page shorter than `limit` is the last.
     *
     * @remarks Requires the READ scope.
     */
    listWorkflowTables: (variables?: T.ListWorkflowTablesQueryVariables, options?: RequestOptions): Promise<T.ListWorkflowTablesQuery> =>
      this.request('listWorkflowTables', variables, options, { operationType: 'query' }),
    /**
     * Restart the runs a publish paused on a workflow (getWorkflow runsParkedByPublish; mostly publishes before 2026-10-23, which paused everyone in flight): moves up to `limit` (at most 200) of them onto the live version, still paused, and once `remaining` is 0 resumes them all on the live version, so their messages go out again. A run on a step the live version no longer has is finished instead (`completed`). Call again while `remaining` is above 0, unless `stuck`: then those runs cannot be moved, so say how many and stop. Offer it only when the person asks about that workflow's paused runs, and say how many people will start getting messages again first. With no live version it does nothing and returns `notLive`: the workflow has to be turned back on first. A run whose contact replied while parked stays paused.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveAndResumeParkedRuns: (variables: T.MoveAndResumeParkedRunsMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveAndResumeParkedRunsMutation> =>
      this.request('moveAndResumeParkedRuns', variables, options, { operationType: 'mutation' }),
    /**
     * Move a template folder under another, or pass parentFolderId null for the root. Not into its own subtree.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveContentTemplateFolder: (variables: T.MoveContentTemplateFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveContentTemplateFolderMutation> =>
      this.request('moveContentTemplateFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Move a template into a folder by id. Pass folderId null to ungroup it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveContentTemplateToFolder: (variables: T.MoveContentTemplateToFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveContentTemplateToFolderMutation> =>
      this.request('moveContentTemplateToFolder', variables, options, { operationType: 'mutation' }),
    /**
     * File a library file into a folder (listContentTemplateFolders), or folderId null for the root.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveLibraryFile: (variables: T.MoveLibraryFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveLibraryFileMutation> =>
      this.request('moveLibraryFile', variables, options, { operationType: 'mutation' }),
    /**
     * Move a workflow folder under another folder, or pass parentFolderId null to move it to the root.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveWorkflowFolder: (variables: T.MoveWorkflowFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveWorkflowFolderMutation> =>
      this.request('moveWorkflowFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Move a workflow into a folder by folderId (from listWorkflowFolders), or folderId null to ungroup it. Creates nothing: an unknown id is NOT_FOUND, so make the folder with createWorkflowFolder first. Refuses a workflow the caller cannot edit, and one a campaign manages (its sequence belongs to the Campaigns editor).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    moveWorkflowToFolder: (variables: T.MoveWorkflowToFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.MoveWorkflowToFolderMutation> =>
      this.request('moveWorkflowToFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Edit a workflow version's graph by sending ONLY THE CHANGE (updateWorkflowGraph writes a whole new graph). Ids come from getWorkflowVersionGraph and CHANGE ON EVERY SAVE: patch again from the response's `graph`. `graphPatch`: ops applied in order, all or nothing. Ops: {op:"updateNode", id, config?, edits?} | {op:"addNode", node:{type, config}, after?: nodeId, onEdge?: edgeId} | {op:"removeNode", id, keepChild?} | {op:"addEdge", edge:{parentNodeId, childNodeId, config?}} | {op:"updateEdge", id, parentNodeId?, childNodeId?, config?} | {op:"removeEdge", id} | {op:"updateConfig", config} (graph.config) | {op:"addTrigger", trigger:{config}} | {op:"updateTrigger", id, config} | {op:"removeTrigger", id}. A `config` is a JSON merge patch: objects merge, null deletes a key, other values (arrays too) replace; {op:"updateNode", id, config:{seconds:86400}} makes a wait one day. `edits`: [{field:"textBody", find, replace}], each find exactly once in that text. `after` inserts after a step with one path out, `onEdge` on a branch edge; with neither the step is unconnected. A new edge out of a condition sets its config (`eval`/`path`). removeNode rejoins the flow; a condition needs `keepChild` (its other paths go). New step types: updateWorkflowGraph's NODE VOCABULARY. Saves like updateWorkflowGraph (same refusals, flags, draftValidation); a no-op patch is refused.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    patchWorkflowGraph: (variables: T.PatchWorkflowGraphMutationVariables, options?: IdempotentRequestOptions): Promise<T.PatchWorkflowGraphMutation> =>
      this.request('patchWorkflowGraph', variables, options, { operationType: 'mutation' }),
    /**
     * Pause the ACTIVE version of a workflow — no new runs will start. pauseInFlightRuns=true also pauses runs already in flight; false lets them finish. No-op if nothing is active. TO CHANGE WHAT A WORKFLOW DOES (add a condition, change a trigger, narrow who it acts on), edit its graph: createOrReturnWorkflowDraft → updateWorkflowGraph → promoteWorkflowDraft, then resumeWorkflow if it was paused. Pausing only stops it. E.g. a PROPERTY workflow can require a motivation signal before it creates or texts anyone: a `conditional` step on the `hasSignal` or `propertySignalTypes` property filter fields (listFilterFieldNames lists them) ahead of the `create_contact_action` step. Never tell a user restricting outreach this way needs human review: it is a graph edit.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    pauseWorkflow: (variables: T.PauseWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.PauseWorkflowMutation> =>
      this.request('pauseWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Pause one in-flight run (PENDING or RUNNING → PAUSED). Get run ids from listWorkflowRuns.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    pauseWorkflowRun: (variables: T.PauseWorkflowRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.PauseWorkflowRunMutation> =>
      this.request('pauseWorkflowRun', variables, options, { operationType: 'mutation' }),
    /**
     * Preview what an AI text step with this systemPrompt would write to 1 to 5 contacts, through the real generation path. Sends nothing and saves nothing; one model call per contact. Each result has generatedText, or a declineReason (the prompt's own rules said not to text them, a valid no-send), or an errorMessage.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    previewWorkflowAiText: (variables: T.PreviewWorkflowAiTextMutationVariables, options?: IdempotentRequestOptions): Promise<T.PreviewWorkflowAiTextMutation> =>
      this.request('previewWorkflowAiText', variables, options, { operationType: 'mutation' }),
    /**
     * Call this before you say which row, or which value, a named contact, property, deal or appointment gets from a table: a county or key guessed from an address is not the answer. Which row of one Workflow Table a run on a record would use, and each column's value by `columnId` (names from getWorkflowTable): `input` takes `workflowTableId` and a `contactId`, `propertyId`, `dealId` or `appointmentId`, resolved exactly as a workflow run resolves it (fallback levels, ranges, composite keys). `match` DEFAULT means no key matched and the default row answered; NONE means nothing answered. `missingSubjects` names records the key needed and the record could not reach. Same gate as the rows.
     *
     * @remarks Requires the READ scope.
     */
    previewWorkflowTableLookup: (variables: T.PreviewWorkflowTableLookupQueryVariables, options?: RequestOptions): Promise<T.PreviewWorkflowTableLookupQuery> =>
      this.request('previewWorkflowTableLookup', variables, options, { operationType: 'query' }),
    /**
     * Ship it: promote the workflow's current DRAFT to ACTIVE (live). MIGRATE (default) moves in-flight runs to the new version: on a kept step they continue with the new copy, on a removed step they finish, held by a pause they wake. PAUSE keeps them on the old version, whose copy they send if resumed. Fails without a valid draft (see getWorkflow.draftValidation).
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    promoteWorkflowDraft: (variables: T.PromoteWorkflowDraftMutationVariables, options?: IdempotentRequestOptions): Promise<T.PromoteWorkflowDraftMutation> =>
      this.request('promoteWorkflowDraft', variables, options, { operationType: 'mutation' }),
    /**
     * Save an example payload (a JSON object, what the sender would POST) on an EVENT workflow, so its fields can be mapped before anything arrives. Starts no run, sends nothing, leaves the graph alone. Refused on a workflow the key owner cannot edit.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    recordEventWorkflowPayloadSample: (variables: T.RecordEventWorkflowPayloadSampleMutationVariables, options?: IdempotentRequestOptions): Promise<T.RecordEventWorkflowPayloadSampleMutation> =>
      this.request('recordEventWorkflowPayloadSample', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a template folder by id.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameContentTemplateFolder: (variables: T.RenameContentTemplateFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameContentTemplateFolderMutation> =>
      this.request('renameContentTemplateFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a workflow version (by workflowAutomationId) and optionally update its description. The workflow list shows the display version's name.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameWorkflow: (variables: T.RenameWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameWorkflowMutation> =>
      this.request('renameWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a workflow folder by folderId. Duplicate sibling names are rejected rather than merging subtrees.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    renameWorkflowFolder: (variables: T.RenameWorkflowFolderMutationVariables, options?: IdempotentRequestOptions): Promise<T.RenameWorkflowFolderMutation> =>
      this.request('renameWorkflowFolder', variables, options, { operationType: 'mutation' }),
    /**
     * Persist the display order for one sibling set. Pass parentFolderId (null for root) and every folderId in that set.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    reorderWorkflowFolders: (variables: T.ReorderWorkflowFoldersMutationVariables, options?: IdempotentRequestOptions): Promise<T.ReorderWorkflowFoldersMutation> =>
      this.request('reorderWorkflowFolders', variables, options, { operationType: 'mutation' }),
    /**
     * Undo deleteWorkflow: bring a deleted (archived) workflow back to the list, by group id, to edit again. Nothing turns on: every version stays paused until resumeWorkflow, and the runs the delete stopped stay stopped. Use it rather than a duplicate when a just-deleted draft is the one you need. A workflow not deleted comes back unchanged. Refused for an event workflow (its webhook address was retired) and an appointment reminder.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreWorkflow: (variables: T.RestoreWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreWorkflowMutation> =>
      this.request('restoreWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Roll back: copy an OLDER version (workflowAutomationId from getWorkflow.versions) into the DRAFT, then publish it with promoteWorkflowDraft. Only a PAUSED version a later-published one superseded (compare publishedAt); the most recently published one is refused (resume it with resumeWorkflowVersion). REPLACES the current draft and its edits, so confirm first when one exists. Nothing goes live.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    restoreWorkflowVersionAsDraft: (variables: T.RestoreWorkflowVersionAsDraftMutationVariables, options?: IdempotentRequestOptions): Promise<T.RestoreWorkflowVersionAsDraftMutation> =>
      this.request('restoreWorkflowVersionAsDraft', variables, options, { operationType: 'mutation' }),
    /**
     * Wake the runs a workflow pause left parked (getWorkflow runsPausedWithWorkflow) on a workflow that is live again; each restarts at the step it reached and its messages go out. Never turns the workflow on: refused when it has no live version. Runs paused for any other reason stay paused. Say how many runs first.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resumeRunsPausedWithWorkflow: (variables: T.ResumeRunsPausedWithWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResumeRunsPausedWithWorkflowMutation> =>
      this.request('resumeRunsPausedWithWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Resume the most-recently-paused version of a workflow, and wake the runs the workflow pause parked (getWorkflow.runsPausedWithWorkflow counts them): each continues at the step it had reached, and runs paused for any other reason (by hand, a publish, a failed send, a reply) stay paused. With a version already active it flips nothing but still wakes that version's workflow-paused runs; no-op if none is paused.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resumeWorkflow: (variables: T.ResumeWorkflowMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResumeWorkflowMutation> =>
      this.request('resumeWorkflow', variables, options, { operationType: 'mutation' }),
    /**
     * Resume one paused run (PAUSED → PENDING) and kick its executor.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resumeWorkflowRun: (variables: T.ResumeWorkflowRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResumeWorkflowRunMutation> =>
      this.request('resumeWorkflowRun', variables, options, { operationType: 'mutation' }),
    /**
     * Resume a specific PAUSED version (by workflowAutomationId), pausing the active sibling first. Promotion is ONE-WAY, so this is NOT a roll-back: it REJECTS a version that is not PAUSED, and it REJECTS a SUPERSEDED version (one with a later-published sibling) with "Only the most recently published version can be resumed." So it can only activate the most recently PUBLISHED paused version. Do not treat resumeWorkflow as an equivalent fallback: it picks the most recently PAUSED version (a different ordering: a version paused later may have been published earlier) and NO-OPS when an active sibling exists, where this op pauses that sibling first. To bring an OLDER version back, use restoreWorkflowVersionAsDraft, never a retry of this op.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    resumeWorkflowVersion: (variables: T.ResumeWorkflowVersionMutationVariables, options?: IdempotentRequestOptions): Promise<T.ResumeWorkflowVersionMutation> =>
      this.request('resumeWorkflowVersion', variables, options, { operationType: 'mutation' }),
    /**
     * The publish dialog's "Rewrite for me": reword one DRAFT text step to lower its carrier-filter risk, saved on the draft. Pass a getWorkflow.draftValidation.carrierRisk row's nodeId, and its body as expectedBody; only for a medium or high `band`. A row with a templateId is the template's copy: reword it with updateContentTemplate instead (here it is refused). status REWRITTEN (body saved), else NO_BETTER_REWRITE or STEP_CHANGED (it no longer carries expectedBody), the step unchanged. Never publishes.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    rewriteWorkflowDraftTextStep: (variables: T.RewriteWorkflowDraftTextStepMutationVariables, options?: IdempotentRequestOptions): Promise<T.RewriteWorkflowDraftTextStepMutation> =>
      this.request('rewriteWorkflowDraftTextStep', variables, options, { operationType: 'mutation' }),
    /**
     * Create a Workflow Table (`workflowTableId` omitted) or replace an existing one's name, description and columns. The key (`keyKind`, `keyFieldPath`) is fixed at creation; fallback levels may be added later. A column left out of an update is DELETED, with its value in every row — permanent, so this needs the person's approval. Rows are written with saveWorkflowTableRows. Returns the table's shape.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    saveWorkflowTable: (variables: T.SaveWorkflowTableMutationVariables, options?: IdempotentRequestOptions): Promise<T.SaveWorkflowTableMutation> =>
      this.request('saveWorkflowTable', variables, options, { operationType: 'mutation' }),
    /**
     * Create or replace rows (`rows` — a row is replaced WHOLE, never merged) and delete rows (`deleteRowIds`) of one table in a single write; a deleted row or a replaced cell is gone for good, so this needs the person's approval. Pass `expectedUpdatedAt` = the table's `updatedAt` from getWorkflowTable so a save over someone else's newer edit is refused (CONFLICT) instead of overwriting it. Returns the table's shape and `rowCount`; read rows back with getWorkflowTable.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    saveWorkflowTableRows: (variables: T.SaveWorkflowTableRowsMutationVariables, options?: IdempotentRequestOptions): Promise<T.SaveWorkflowTableRowsMutation> =>
      this.request('saveWorkflowTableRows', variables, options, { operationType: 'mutation' }),
    /**
     * Set the ORGANIZATION's daily cap on property-signal skip-trace workflow runs: the `dailyCap` getWorkflowThrottleUsage reports, shared by every PROPERTY_SIGNAL_SKIP_TRACE workflow in the org. Each run spends a skip-trace credit, so this arms real spend: ADMIN scope, and the key owner must be an org admin. A whole number, 1 to 1,000,000,000; a raise reaches an org already capped today within minutes. Returns the new cap. State the old cap (getWorkflowThrottleUsage on a skip-trace workflow) and the new one first; when it already is that cap, change nothing. Run it as a write code task whose approvedLive names it: that draws the person's yes/no card showing both caps, and only that yes sets it, so never ask a yes of your own. Never lower it unless asked: a lower cap throttles every skip-trace workflow.
     *
     * @remarks Requires the ADMIN scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    setSkipTraceDailyCap: (variables: T.SetSkipTraceDailyCapMutationVariables, options?: IdempotentRequestOptions): Promise<T.SetSkipTraceDailyCapMutation> =>
      this.request('setSkipTraceDailyCap', variables, options, { operationType: 'mutation' }),
    /**
     * Permanently stop one run — PENDING, RUNNING or PAUSED (terminal: a stopped run cannot be resumed). A no-op on a run already STOPPED; an error on one that already COMPLETED, FAILED or was NOT_ENROLLED.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    stopWorkflowRun: (variables: T.StopWorkflowRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.StopWorkflowRunMutation> =>
      this.request('stopWorkflowRun', variables, options, { operationType: 'mutation' }),
    /**
     * Manually start one run of a workflow's ACTIVE version against a record. recordId must match the workflow's domain: a contactId for CONTACT workflows, propertyId for PROPERTY, dealId for DEAL, taskId for APPOINTMENT.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    triggerWorkflowRun: (variables: T.TriggerWorkflowRunMutationVariables, options?: IdempotentRequestOptions): Promise<T.TriggerWorkflowRunMutation> =>
      this.request('triggerWorkflowRun', variables, options, { operationType: 'mutation' }),
    /**
     * Update a template by id (name, body, subject). The id is nested in the input object.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateContentTemplate: (variables: T.UpdateContentTemplateMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateContentTemplateMutation> =>
      this.request('updateContentTemplate', variables, options, { operationType: 'mutation' }),
    /**
     * Rename a library file or change its description (fileId from listLibraryFiles); description null clears it.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateLibraryFile: (variables: T.UpdateLibraryFileMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateLibraryFileMutation> =>
      this.request('updateLibraryFile', variables, options, { operationType: 'mutation' }),
    /**
     * Replace a workflow version's node/edge graph AND its triggers (to edit, patchWorkflowGraph). Edit the DRAFT (createOrReturnWorkflowDraft). A PAUSED version is writable too, off the normal path. workflowGraph is the superjson-serialized WorkflowGraph shape returned by getWorkflowVersionGraph; send back a modified copy of the existing graph, same serialized field names (node/edge ids are caller-minted strings). An OMITTED top-level key keeps its stored value ({nodes, edges} alone is valid); a trigger needs only {config}; a text/email step lacking its channel's communicationConfig gets the editor default. A valid graph needs at least a trigger node and an end node joined by an edge; every node is {id, type, config} and every edge is {id, config, parentNodeId, childNodeId} (edge config is {} except conditional branches, below; a Wait until signed step: {path}). NODE VOCABULARY — every authorable step type (NOT just text steps), generated from the registry the writer validates against. STRUCTURAL STEPS — the same in every domain. "trigger" (The graph entry point. Every valid graph has exactly one, and every run starts here. It does not decide WHEN the workflow fires — the graph-level `triggers` array does. config {} — no settings); "conditional" (A two-way fork decided by a filter. Give it TWO outgoing edges: {eval:true} is taken when the record matches, {eval:false} otherwise. config {filter {id, operator "AND" | "OR", negated?, conditions, groups}, uiMode? "PROPERTY" | "USER" | "DEAL" | "TAG" | "CUSTOM_FIELD" | "CONTRACTS" | "CUSTOM_CONDITION" | "RUN_VALUES", filterMode? "simple" | "manual", valueConditions? {match "all" | "any", conditions}}); "ai_conditional" (The same two-edge {eval:true}/{eval:false} fork as `conditional`, decided by a MODEL reading the record. Every evaluation is a billed model call, so prefer `conditional` wherever a filter answers. config {prompt, model "gpt-6-astra" | "gpt-6-sol" | "gpt-6-luna" | "gpt-6.1-sol" | "claude-fable-5-1" | "claude-opus-5-5" | "claude-sonnet-5-5" | "claude-haiku-5-5" | "gemini-3.8-flash" | "jev-1.13.0", context {contact?, deal?, property?, appointment?, organization?, event? {mode:"whole"} | {mode:"fields", paths}}}); "wait" (Hold the run until a deadline, optionally ending early on a predicate. `mode` picks the deadline (fixed | range | datetime | record_date | recurring); `until` or the interrupt* trio is the early exit. A wait has exactly ONE outgoing edge: early exit and timeout share it. config {mode:"fixed", seconds, secondsTableColumnId?} | {mode:"range", minSeconds, maxSeconds} | {mode:"datetime", date, time {hour, minute}, timezone? "Etc/GMT+12" | "Pacific/Pago_Pago" | "Pacific/Honolulu" | "America/Anchorage" | "America/Los_Angeles" | "America/Denver" | "America/Phoenix" | "America/Chicago" | "America/New_York" | "America/Halifax" | "America/Sao_Paulo" | "America/Noronha" | "Atlantic/Azores" | "Etc/UTC" | "Europe/Berlin" | "Europe/Athens" | "Europe/Moscow" | "Asia/Dubai" | "Asia/Karachi" | "Asia/Dhaka" | "Asia/Bangkok" | "Asia/Shanghai" | "Asia/Tokyo" | "Australia/Sydney" | "Pacific/Noumea" | "Pacific/Auckland"} | {mode:"record_date", field, customFieldId?, offsetSeconds, ifPassed? "advance" | "stop", graceSeconds?} | {mode:"recurring", window {timezone (same values as the first "timezone" above), days, timezoneMode? "RECIPIENT" | "CONFIGURED", monthDays?}}, plus on every shape: interruptEnabled?, interruptFilterMode? "simple" | "manual", interruptFilter {id, operator "AND" | "OR", negated?, conditions, groups}, until? {kind:"reply", channels? ("CALL" | "TEXT" | "EMAIL")[]} | {kind:"action", action, targetId?}); "end" (Terminates the run. A valid graph needs at least one, reachable from the trigger. config {} — no settings); EXCEPTION — on EVENT, "conditional" config is a `uiMode` union. Absent/"EVENT_PAYLOAD" = payload arm, NO filter: {groupOperator?: "AND"|"OR", conditions [{accessor: string, operator: string, values?: string[], mode?: "any"|"all"}]}; `accessor` a dot/bracket path into the webhook body ("event." aliases its root), `operator` equals|not_equals|contains|not_contains|is_set|is_not_set, `values` an ARRAY (a bare string is rejected) required except for is_set/is_not_set, `mode` lowercase where `groupOperator` is uppercase. PROPERTY|USER|DEAL|TAG|CUSTOM_FIELD|CUSTOM_CONDITION = contact arm: {uiMode, filter}, a CONTACT (not EVENT) FilterGroup over the contact the find/create step resolved. A step type you find in a stored graph but not documented for its domain below is RETIRED (it parses so old graphs still load, and its executor stops the run): never author one, and never copy one into a new graph. PROPERTY actions: "create_contact_action" (Skiptrace the property's owner and FIND-OR-CREATE the contact — so it lands on contacts that already have an owner. It spends a skiptrace credit, and an org out of credits STOPS the run. The daily skip-trace permit is refunded on that stop only on a PROPERTY_SIGNAL_SKIP_TRACE graph, the only kind that took one. Finding nobody advances the run. config {target? "OWNER" | "LISTING_AGENT", contactListIds?, triggerContactWorkflowGroupIds?, contributorUserIds?, assignAgent? {mode:"single_user", userId?} | {mode:"round_robin", userIds} | {mode:"workspace_lead_routing"}, contactListTableColumnId?, triggerContactWorkflowTableColumnId?, assignAgentTableColumnId?, contributorTableColumnId?, replaceExistingAgent, deal? {title, missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", fallbackDealTitle?, description?, pipelineId, stageId, assigneeUserIds?, usePointPersonAssignee?, propertyConfig "none" | "add_all_verified_properties" | "add_all_properties" | "add_first_verified_property"}, autoReskiptraceOnNewInformation?}); "add_to_list_action" (Add the property this run is about to one or more property lists. config {listIds, listTableColumnId?}); "send_slack_action" (Post a Block Kit message about this property into a Slack channel. config {slackChannelId?, slackChannelName?, message? {text, blocks?}, textBody?}); "send_webhook_action" (POST the property's record to one or more URLs. A 4xx other than 429 STOPS the run quietly; anything else FAILS it. config {urls?, auth? {kind:"HEADER", headerName, secret} | {kind:"HMAC", secret}, fields?}); "property_ai_employee_action" (Run one AI employee on THIS PROPERTY once, without waiting for it; it messages no one from here. config {agentId, instructions?}); CONTACT actions: "text_action" (Send an SMS to the contact, and allowed ONLY where the communication channel is TEXT — any other workflow rejects it. How many numbers it targets and when it may send are workflow-level (config.communicationConfig); who it sends from is too, unless the step carries its own `senderOverride`. config {mode:"single", templateId?, textBody?, skipIfEmptyBody?} | {mode:"multiple", textBodies} | {mode:"generative", systemPrompt}, plus on every shape: missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", timeSensitive?, senderOverride? {type:"UNSET"} | {type:"POINT_PERSON"} | {type:"PHONE", fromPhoneNumberId} | {type:"RANDOM_PHONE", fromPhoneNumberIds}, fallbackTextBody?, senderTableColumnId?, templateTableColumnId?, attachments? [{uploadedFileId, fileName, contentType, fileSize}]); "email_action" (Send an email to the contact; allowed ONLY in an EMAIL-channel workflow. Recipient count, send window and sender are workflow-level (config.communicationConfig) unless the step sets `senderOverride`. config {generate:true, systemPrompt} | {generate:false, templateId, templateTableColumnId?} | {generate:false, emailBody, emailBodyFormat?:"TIPTAP_JSON", emailSubject?}, plus on every shape: missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", timeSensitive?, senderOverride? {type:"UNSET"} | {type:"POINT_PERSON"} | {type:"IDENTITY", fromEmail, fromClientId} | {type:"RANDOM_IDENTITY", identities}, fallbackEmailSubject?, fallbackEmailBody?, attachments? [{uploadedFileId, fileName, contentType, fileSize, page?}]); "notification_action" (Text a TEAMMATE about this contact — never the contact. It always sends from the internal notifications line, so the workflow sender does not apply. config {recipientType:"POINT_PERSON"} | {recipientType:"SPECIFIC_USER", recipientUserIds?, recipientUserId?} | {recipientType:"PHONE_NUMBER", recipientPhoneNumber}, plus on every shape: missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK" | "OMIT_BLANKS", fallbackTextBody?, textBody); "ai_employee_action" (No `start`: a `schedule` ADDS the employee and pins the cadence, runNow alone only runs, neither only ADDS (it answers later replies). `start`: runs now, never adds. config {agentId, runNow?, instructions?, waitForCompletion?, schedule? {cronExpression, timezone, maxRuns}, start? "ANSWER" | "RUN_NOW", waitTimeoutMinutes?}); "set_custom_field_action" (Write one value onto one of the contact's custom fields. `customFieldType` picks which value field the config must carry; the write is stamped as an AUTOMATION change. config {customFieldType:"TEXT", textValue} | {customFieldType:"NUMBER", numberValue} | {customFieldType:"DOLLAR", numberValue} | {customFieldType:"DATE", dateIso, relative?:"RUN_DATE"} | {customFieldType:"DROPDOWN", dropdownOptionId} | {customFieldType:"LINK", textValue}, plus on every shape: customFieldId, customFieldName); "tags_action" (Apply tags (and/or add the contact to lists) by id. config {tagIds, contactListTableColumnId?}); "add_user_group_action" (Add the contact to one or more teams, optionally auto-assigning an Agent from one of them. config {userGroupIds, agentAssignment? {kind:"NONE"} | {kind:"TEAM_ROUND_ROBIN", userGroupId} | {kind:"SPECIFIC_USER", userId}}); "contributors_action" (Attach users to the contact, as the single Agent or as Participants. Skips anyone away. BOTH booleans are required — an omission used to mean notify-and-displace, which is not what a new node means. config {contributors [{userId, status "REVOKED" | "POINT_PERSON" | "PARTICIPANT"}], roundRobin? {userIds, role "REVOKED" | "POINT_PERSON" | "PARTICIPANT"}, sendNotificationToContributor, replaceExistingAgent}); "task_action" (Create a CRM task about this contact, either spelled out here or from a content template. config {mode:"inline", name, taskType, dueOffset {amount, unit "DAYS" | "WEEKS" | "MONTHS"}, preferredTimeOfDay {hour, minute, timezone (same values as the first "timezone" above)}, description?} | {mode:"template", templateId}, plus on every shape: assigneeUserIds, assigneeTableColumnId?, usePointPersonAssignee?, createGoogleCalendarEvent?); "appointment_action" (Book an appointment with this contact at an offset from now. config {name, startOffset {amount, unit "DAYS" | "WEEKS" | "MONTHS"}, preferredStartTimeOfDay {hour, minute, timezone (same values as the first "timezone" above)}, durationMinutes, description?, attendeeUserIds, attendeeTableColumnId?, usePointPersonAssignee?, createGoogleCalendarEvent?}); "deal_action" (Open a deal for this contact in a named pipeline and stage. config {title, missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", fallbackDealTitle?, description?, pipelineId, stageId, assigneeUserIds?, usePointPersonAssignee?, propertyConfig "none" | "add_all_verified_properties" | "add_all_properties" | "add_first_verified_property", skipIfContactHasOpenDealInPipeline?}); "update_deal_action" (Move the contact's EXISTING open deals on one board to a stage, or archive them — on one board, or on every board with `anyBoard`. Creates nothing — deal_action opens a deal. config {operation "move_stage" | "archive", pipelineId, anyBoard?, stageId?}); "send_webhook_action" (POST the contact's record to one or more URLs. A 4xx other than 429 STOPS the run quietly; anything else FAILS it and pages. config {urls?, phoneCompliance? "NONE" | "EXCLUDE_DNC" | "EXCLUDE_LITIGATOR" | "EXCLUDE_DNC_OR_LITIGATOR" | "EXCLUDE_DNC_AND_LITIGATOR" | "EXCLUDE_DNC_AND_LITIGATOR_ONLY", payloadBlocks? {calls?, texts?, notes?, deals?, properties?}, auth? {kind:"HEADER", headerName, secret} | {kind:"HMAC", secret}, fields?, credentialId?}); "send_slack_action" (Post a Block Kit message about this contact into a Slack channel. config {slackChannelId?, slackChannelName?, message? {text, blocks?}}); "trigger_contact_workflow_action" (Start other CONTACT workflows on this contact, even where their own trigger would not match. config {workflowGroupIds, workflowGroupTableColumnId?}); "enrich_action" (Skiptrace the contact and fold the result back onto it — the same enrichment the Enrich button runs. Already-enriched contacts dedupe server-side, so reaching this step twice neither re-skiptraces nor charges twice. It spends a SKIPTRACE credit per skiptrace that actually runs, and the author must hold the skiptrace capability. config {} — no settings); "archive_contact_action" (Archive the contact, as the Archive button does. A text back un-archives them. Put it last. config {} — no settings); "mark_do_not_contact_action" (Mark the contact Do Not Contact. It stops every live run for the contact, this one included: put it last in its branch. config {reason?}); "send_mail_action" (Mail one letter to the run's contact through the org's connected mail account. A refusal (no usable address, unverified template, disconnected account) is recorded and the run continues. config {campaignRef {providerKey:"OPEN_LETTER_CONNECT", templateId, productId, returnAddressSettings, rosOfferPercentage} | {providerKey:"LOB", product:"LETTER", templateId, printOptions} | {providerKey:"POSTGRID", product:"LETTER", templateId, printOptions}, campaignLabel, connectionId, sender {version:1, firstName, lastName, companyName, line1, line2, city, state, zip, countryCode:"US"}, mergeFields [{key, required, value {kind:"LITERAL", text} | {kind:"FIELD", field}}], addressSource "CONTACT_ONLY" | "CONTACT_THEN_OWNER_MAILING", sendTiming {mode:"IMMEDIATE"} | {mode:"PROVIDER_SCHEDULED", releaseAfterDays}}); "add_to_email_campaign_action" (Add the run's contact as a lead to a campaign in the org's connected cold-email account, which sends on its own schedule. A refusal is recorded; the run continues. config {connectionId, campaign {providerKey "INSTANTLY" | "SMARTLEAD" | "LEMLIST" | "REPLYIO", campaignId, campaignName}, variables [{key, field "COMPANY_NAME" | "PROPERTY_ADDRESS" | "PROPERTY_CITY" | "PROPERTY_STATE" | "PROPERTY_ZIP" | "MAILING_ADDRESS"}], launchAfterAdd?}); "go_to_action" (Terminal: loops back to an earlier step on its branch. Needs 1h of Waits and an exit (reply exit or a branch to an End). config {targetNodeId}); "contact_send_contract_action" (Send a contract from a template to this contact; a blank required value holds it. config {templateId, sender {mode:"record_owner"} | {mode:"user", userId}, ifAlreadyOut "KEEP_AND_RESEND" | "KEEP_QUIETLY" | "REPLACE" | null, signing? {expiryDays, dailyReminders, linkChannel "TEXT_FIRST" | "EMAIL_FIRST", senderSignsLast}}); "contact_wait_for_contract_action" (Wait on the sent contract; edge path signed|declined|not_signed. config {timeoutSeconds}); DEAL actions: "assign_to_user_action" (Assign users to the deal this run is about. Skips anyone away. config {userIds, userTableColumnId?}); "notification_action" (Text teammates about this deal. Always sends from the internal notifications line. config {recipientType:"DEAL_USERS"} | {recipientType:"SPECIFIC_USERS", userIds}, plus on every shape: recipientTableColumnId?, missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", fallbackTextBody?, textBody); "trigger_contact_workflow_action" (Enroll each of this deal's CONTACTS in the listed CONTACT workflows; not the deal itself; no contacts starts nothing. Each passes the usual enrolment gates (do-not-contact, one live run per workflow, consent). config {workflowGroupIds, workflowGroupTableColumnId?, roleId?}); "trigger_deal_workflow_action" (Enroll THIS DEAL in other DEAL workflows (`trigger_contact_workflow_action` enrolls its contacts). Each target passes the deal enrolment door (trigger window, dry-run flag, one live run per deal); this graph's group and every group upstream of the run are never targets. config {workflowGroupIds, workflowGroupTableColumnId?}); "create_deal_action" (Open a NEW deal, cloning the properties of the deal this run is about. config {title, missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", fallbackDealTitle?, description?, pipelineId, stageId, assigneeUserIds?, usePointPersonAssignee?, propertyConfig "none" | "add_all_verified_properties" | "add_all_properties" | "add_first_verified_property", copyDealValues?}); "send_slack_action" (Post a Block Kit message about this deal into a Slack channel. DEAL merge fields only. config {slackChannelId?, slackChannelName?, message? {text, blocks?}}); "send_webhook_action" (POST the deal's record to one or more URLs. A 4xx other than 429 STOPS the run quietly; anything else FAILS it. config {urls?, auth? {kind:"HEADER", headerName, secret} | {kind:"HMAC", secret}, fields?}); "deal_set_custom_field_action" (Write one value onto a deal custom field; `customFieldType` picks the value field. Pipeline-scoped: the run STOPS if the deal is in another pipeline or the field/option is deleted. config {customFieldType:"TEXT", textValue} | {customFieldType:"NUMBER", numberValue} | {customFieldType:"DOLLAR", numberValue} | {customFieldType:"DATE", dateIso, relative?:"RUN_DATE"} | {customFieldType:"DROPDOWN", dropdownOptionId} | {customFieldType:"LINK", textValue} | {customFieldType:"CHECKBOX", booleanValue}, plus on every shape: pipelineId, customFieldId, customFieldName); "deal_add_note_action" (Add a system-attributed note to the deal's activity feed. A blank rendered note is skipped and the run continues. config {body, missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", fallbackBody?}); "deal_task_action" (Create a task linked to THIS DEAL (not its contacts), spelled out here or from a content template. config {mode:"inline", name, taskType, dueOffset {amount, unit "DAYS" | "WEEKS" | "MONTHS"}, preferredTimeOfDay {hour, minute, timezone (same values as the first "timezone" above)}, description?} | {mode:"template", templateId}, plus on every shape: assigneeUserIds, assigneeTableColumnId?, assignDealUsers?, createGoogleCalendarEvent?); "deal_appointment_action" (Book an appointment linked to THIS DEAL at an offset from now. The run STOPS (NO_ATTENDEES) when the named users, the table column and the deal's users resolve to nobody. config {name, startOffset {amount, unit "DAYS" | "WEEKS" | "MONTHS"}, preferredStartTimeOfDay {hour, minute, timezone (same values as the first "timezone" above)}, durationMinutes, description?, attendeeUserIds, attendeeTableColumnId?, inviteDealUsers?, createGoogleCalendarEvent?}); "deal_send_contract_action" (Send a contract from a template for this deal; a blank required value holds it. config {templateId, sender {mode:"record_owner"} | {mode:"user", userId}, ifAlreadyOut "KEEP_AND_RESEND" | "KEEP_QUIETLY" | "REPLACE" | null, signing? {expiryDays, dailyReminders, linkChannel "TEXT_FIRST" | "EMAIL_FIRST", senderSignsLast}, includeSecondContact?, contactARoleId?, contactBRoleId?, senderRoleId?}); "deal_wait_for_contract_action" (Wait on the sent contract; edge path signed|declined|not_signed. config {timeoutSeconds}); "deal_ai_employee_action" (Run one AI employee on THIS DEAL once, without waiting for it; it messages no contact from here. config {agentId, instructions?}); APPOINTMENT actions: "text_action" (Text the appointment's contact. Deliberately narrower than the CONTACT text step: it IGNORES the workflow send window and the daily-cap cooldown, and has no AI or variations mode. The sender comes from the meeting's own participants, booking host first. config {missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK", fallbackTextBody?, senderTableColumnId?, templateTableColumnId?, mode:"single", templateId?, textBody?}); "trigger_contact_workflow_action" (Start CONTACT workflows for this appointment's contacts. config {workflowGroupIds, workflowGroupTableColumnId?}); "send_slack_action" (Post a Block Kit message about this appointment to a Slack channel. It loads the TASK alone, so contact merge fields render literally here. config {slackChannelId?, slackChannelName?, message? {text, blocks?}}); "send_webhook_action" (POST the appointment's record to one or more URLs. A 4xx other than 429 STOPS the run quietly; anything else FAILS it. config {urls?, auth? {kind:"HEADER", headerName, secret} | {kind:"HMAC", secret}, fields?}); EVENT actions: "find_create_contact_action" (Find or create the payload's contact; later steps run on it. config {mode:"field_mapping", nameAccessor, phoneAccessors?, emailAccessors?, propertyAddressAccessors?, mailingAddressAccessors?, noteAccessors?, customFieldMappings? [{customFieldId?, attributionKey?, accessor?, literalValue?, valueMappings?, unmappedValuePolicy?}], tagMappings? [{kind, accessor?, literalValue?, valueMappings?, unmappedValuePolicy?}], webFormConsent? {consentAccessor?}, phoneAccessor?, emailAccessor?, propertyAddressAccessor?, noteAccessor?} | {mode:"transformer", hint?}, plus on every shape: triggerContactWorkflowGroupIds?, triggerContactWorkflow? {workflowGroupId}, source?, contactMatchRule? {keys}); "event_send_slack_action" (Post a plain-text Slack message built from the inbound payload. A distinct node from the shared Block Kit one. config {slackChannelId?, slackChannelName?, message}); "event_find_property_action" (Resolve a property from the inbound payload, then act on it. A FLAT config with string mode fields on purpose — nested unions blow the TypeScript complexity ceiling once distributed across every domain — so which fields are required per mode is enforced by the validator and the executor, not by the shape. config {resolutionMode, addressAccessor?, line1Accessor?, cityAccessor?, stateAccessor?, zipAccessor?, countyNameAccessor?, parcelAccessor?, countyFipsAccessor?, transformerHint?, lastMappedResolutionMode?, actionType, listIds?, triggerContactWorkflowGroupIds?}); "event_contact_status_action" (Flag the contact this run is anchored to: mark it do-not-contact, or mark one of its phone numbers wrong. It acts on the contact an earlier find/create step resolved, never resolving one; with no contact it records that and advances. It does NOT stop the run; an end node does. config {action, phoneAccessor?, appliesToOutcomes?, outcomeAccessor?}); "event_contact_fields_action" (Write custom-field values on the contact this run is anchored to. It never resolves or creates one, so it can sit on a branch that must not mint anybody; with no contact it records that and advances. config {customFieldMappings? [{customFieldId?, attributionKey?, accessor?, literalValue?, valueMappings?, unmappedValuePolicy?}]}); "event_attach_call_recording" (Download the recording the payload names and file it on the contact an earlier step resolved, as a Call. It resolves no contact of its own, and every skip or failure is recorded and advanced rather than failing the run. config {recordingUrlAccessor, recordingIdAccessor?, phoneAccessor?, occurredAtAccessor?, directionAccessor?, durationSecondsAccessor?}); SLACK actions: "slack_reply_action" (Post back into Slack — into the thread the run came from, or into a fixed channel. config {target "triggering_thread" | "channel", slackChannelId?, slackChannelName?, message}); CONTRACT actions: "contract_move_deal_action" (Move the contract's deal to a stage, the way dragging its card does. A contract with no deal skips the step and the run carries on. config {pipelineId, stageId}); "contract_tag_signers_action" (Tag the contract's signers (and/or add them to lists). config {signers "contact_a" | "contact_b" | "each_signer", tagIds}); "contract_start_workflow_action" (Hand the contract's contacts to an existing Contact workflow (a seller nurture after a decline). That workflow keeps its own rules. config {signers "contact_a" | "contact_b" | "each_signer", workflowGroupIds}); "contract_notify_action" (Text teammates about the contract. Nobody to reach skips it. config {teammates ("sender" | "deal_users" | "contact_a_agent")[], userIds, textBody, missingVariableBehavior? "END_WORKFLOW" | "SEND_FALLBACK" | "OMIT_BLANKS", fallbackTextBody?}); "contract_remind_signers_action" (Send a fresh link to each signer whose turn it is. Skipped when nobody is waiting. config {} — no settings); "contract_extend_expiry_action" (Move the contract's expiry later. Skipped unless out for signature. config {days}); "contract_void_action" (Void the contract; no link works again. Skipped once signed or closed. config {reason});THAT FilterGroup IS THE FULL SAVED-FILTER VOCABULARY FOR THE DOMAIN, not an automation-only subset. For CONTACT, PROPERTY and DEAL that vocabulary is enumerable: listFilterFieldNames returns it complete, and any field it lists a conditional can evaluate. NEVER tell a user an automation cannot consider some attribute without reading that list for the workflow DOMAIN first — "it cannot see it" is usually a domain mismatch (last sold date, year built, estimated value are PROPERTY fields, not contact fields). APPOINTMENT conditionals take their own full filter group, but listFilterFieldNames and listFilterFields do not accept APPOINTMENT. That is a gap in DISCOVERY, never evidence about the capability: copy a conditional already in the graph; if you cannot confirm a field, say so rather than that it cannot be done. AI CONDITION CONTEXT — an "ai_conditional" step's `context` is a Context Layer SELECTION, not a list of ids: an object keyed by any of contact | deal | property | appointment | organization, each mapping to that source's slice flags (e.g. {contact:{includeTextMessages:true, includeNotes:false}}). A key's PRESENCE includes it; {} means that source with its defaults. Only sources the RUN carries an id for resolve (a CONTACT run has a contact), so one the domain never carries renders nothing. The step is available on APPOINTMENT graphs although "conditional" is not. A sixth key `event` is EVENT-only, and on an EVENT graph the ONE source that renders (an EVENT run carries no record): {mode:"whole"} sends the whole webhook body, {mode:"fields",paths:["call.outcome"]} only the named accessor paths (1-25, none reading the whole payload; use whole for that). `{event:{}}` is refused, and `event` on any other domain is a publish error. EVENT MAPPINGS — two rules mapping rows are REJECTED for. (1) EXACTLY ONE destination and EXACTLY ONE value source per row: a customFieldMappings row names either a customFieldId or an attributionKey (one of the org's reserved, listing-hidden attribution fields: utm_source, utm_medium, utm_campaign, utm_term, utm_content, gclid, fbclid, msclkid, ttclid, li_fat_id, landingUrl, referrerUrl), and either an accessor or a literalValue. A row naming two of either is dropped and counted at execution, never resolved by precedence. (2) A tagMappings row resolves its value to a tag or list BY NAME and CREATES one when the org has none, bounded at 25 distinct values per row and refusing values that are obviously not category names (a uuid, an email, a url, a long-digit platform id, over 80 characters); tags and lists share one org-wide namespace, so a name a list holds cannot become a tag and that row is dropped. Both counts ride the run's FIND_CREATE_CONTACT_RESOLVED audit event as tagsWritten/tagsDropped. MERGE FIELDS — the COMPLETE per-domain vocabulary a body may draw on. Substituted at run time: textBody, textBodies, emailBody, emailSubject, a Slack block's text and a Slack button's url, plus a deal node's title and a task node's name and description. NOT substituted, so braces there are left alone: a generative node's systemPrompt (an instruction to a model, not a template) and a deal node's description. Keys are matched EXACTLY, case-sensitively. There is NO dotted record namespace: {{contact.address1}}, {{contact.firstName}} and {{deal.title}} are not merge fields (the SLACK keys below are literal dotted names, not a namespace you may extend). Do not infer a key from another domain's spelling either — the shapes differ (CONTACT has contactPropertyAddress, PROPERTY has full_address); use a key off this list or none. An unknown token is NOT a missing variable and does NOT render blank: braces reach the reader verbatim (except a notify step on OMIT_BLANKS, which blanks them). promoteWorkflowDraft REFUSES a draft carrying one in a SCANNED FIELD — textBody, textBodies, emailBody (including one stored as emailBodyFormat "TIPTAP_JSON", whose merge fields are document pills rather than braces and are read as such), the WORKFLOW-LEVEL email subject on communicationConfig and a NODE'S OWN one, a fallbackTextBody under SEND_FALLBACK, an email step's fallbackEmailSubject and fallbackEmailBody, under SEND_FALLBACK and only where a PRIMARY can miss a variable (the EFFECTIVE subject — the workflow's unless sendInSameThread is false — or a body the graph carries), a Slack block's text or its button url, a deal node's title and fallbackDealTitle on a CONTACT or DEAL graph, and an inline task node's name and description — and updateWorkflowGraph returns that same judgement as workflowGroup.draftValidation on every write — a reading of the GROUP'S DRAFT, which is the version you just wrote whenever you followed the normal path and edited the draft. Edit a PAUSED version instead and the field still answers about the draft, so it is null when there is none and about a DIFFERENT version when there is: it is not a verdict on your write in that case, and nothing in the response says so ({isValid, errors}, each unrenderable token named with the field it sits in and the supported key it most likely meant). READ IT on the response to the write and fix what it names, rather than discovering it when activation fails. THAT LIST OF SCANNED FIELDS IS CLOSED, and it is still SHORTER than the list of fields that are substituted. Anything substituted at run time but absent from it is checked by nothing, so a clean draftValidation is not evidence about it — check those against the vocabulary below yourself. What remains unscanned, and NOT an exhaustive list: a PROPERTY create-contact step's deal title and fallback title (substituted against the NEW CONTACT and the workflow user, not against the PROPERTY graph's own vocabulary, so the gate has no single vocabulary to judge them by and deliberately does not try); a Slack reply node's message; and any body that lives in a referenced templateId rather than in the graph — the graph then carries no body for the scan to look at. In every one of them a wrong key promotes clean. What the recipient sees differs by path: most render through the token renderer and arrive as LITERAL BRACES, but a Slack reply node's message is interpolated by its own function, which replaces any {{slack.<field>}} it does not recognise with an EMPTY STRING — so a typo there shows as missing text, not a broken template. PROPERTY: {{line1}}, {{line2}}, {{propertyCity}}, {{state}}, {{zip}}, {{full_address}}, {{property_url}}, {{beds}}, {{baths}}, {{sqft}}. CONTACT: {{fullName}}, {{firstName}}, {{lastName}}, {{contactUrl}}, {{contactPhoneNumber}}, {{contactEmail}}, {{contactPropertyAddress}}, {{contactPropertyStreet}}, {{contactPropertyFullAddress}}, {{contactPropertyCity}}, {{contactPropertyZipcode}}, {{contactPropertyAuctionDate}}, {{contactPropertyForeclosureStage}}, {{contactPropertyAmountOwed}}, {{userFullName}}, {{userFirstName}}, {{userLastName}}, {{userPhoneNumber}}, {{userEmail}}, {{userOrganizationName}}. DEAL: {{dealTitle}}, {{dealUrl}}, {{dealPipelineName}}, {{dealStageName}}, {{dealPrice}}, {{dealCloseDate}}, {{dealPropertyLine1}}, {{dealPropertyLine2}}, {{dealPropertyCity}}, {{dealPropertyState}}, {{dealPropertyZip}}, {{dealPropertyFullAddress}}, {{dealPropertyCounty}}, {{dealPropertyApn}}, {{dealPropertyLegalDescription}}, {{dealContactFullName}}, {{dealContactFirstName}}, {{dealContactLastName}}. APPOINTMENT: {{appointmentStartTime}}, {{appointmentEndTime}}, {{appointmentMeetingLink}}, {{appointmentLocation}}, {{appointmentDurationMinutes}}, every CONTACT key above. EVENT: no merge fields at all — a {{...}} in an EVENT body is an ACCESSOR PATH into the inbound webhook payload (see the EVENT actions above), not a merge field, and is never validated against this vocabulary. SLACK: {{slack.text}}, {{slack.userName}}, {{slack.channelName}}, {{slack.permalink}}. CONTRACT: {{contractName}}, {{contractSigningLink}}, {{contractUrl}}, {{contractSignedPdfUrl}}, {{contractDeclineReason}}, every CONTACT key above, every DEAL key above.  Two conditional keys, and neither is legal on every graph: {{agentName}} resolves ONLY where the graph's TEXT sender is a marketing campaign, and a contact CUSTOM FIELD — addressable as {{ContactTag_<uuid>}}, where the uuid is a CUSTOM-FIELD id from listContactCustomFields and NOT a tag id from searchContactTags, however much the prefix suggests otherwise (ContactTag is the table that stores tags, lists and custom fields alike, so the GRN is named for the table rather than for the thing; a real tag id passes the shape check, is accepted by promote, and renders empty) — resolves ONLY on CONTACT and APPOINTMENT and CONTRACT graphs, the ones a send loads contact context for — and on an APPOINTMENT graph only from the TEXT REMINDER, which renders with the task, the contact and the user. An appointment Slack post loads the task alone, so every CONTACT key there, tags included, renders literally even though promote accepts it: the gate judges per DOMAIN, and this is the one place a domain is wider than one of its own nodes. Used outside its condition either one is unrenderable and blocks promote exactly like an unknown key.Triggers are managed through the `triggers` array: each entry is upserted by its id (mint a UUID to add one) and omitted entries are detached; only `config` syncs (`name` is cosmetic). Trigger config shapes: {type: "manual"}, {type: "created"}, {type: "mutation", filter: <FilterGroup>}, {type: "match", filter: <FilterGroup>}; a CONTACT match whose root AND holds one lastActivityAt or lastNoteTakenAt {comparison:"MORE_THAN", number, timeUnit} and no other relative date is the "no activity for N days" trigger: an hourly sweep enrolls each contact as it crosses N; CONTACT-only: {type: "inbound_text"|"inbound_call", twilioPhoneNumberIds: [...]}, {type: "inbound_email", connectedAccountIds?: [...]}; EVENT workflows have exactly one trigger shape, {type: "event_received"} — the workflow's minted webhook URL is the trigger. Minimal valid drip example (node/edge shape): nodes: [{id:"n1",type:"trigger",config:{}}, {id:"n2",type:"text_action",config:{mode:"single",textBody:"Hi {{firstName}}"}}, {id:"n3",type:"wait",config:{mode:"fixed",seconds:172800,interruptEnabled:false,interruptFilter:{id:"f1",operator:"AND",conditions:[],groups:[]}}}, {id:"n4",type:"end",config:{}}], edges: [{id:"e1",config:{},parentNodeId:"n1",childNodeId:"n2"}, {id:"e2",config:{},parentNodeId:"n2",childNodeId:"n3"}, {id:"e3",config:{},parentNodeId:"n3",childNodeId:"n4"}]. PROMOTE GOTCHA: promoteWorkflowDraft rejects the default UNSET sender (SenderNotChosen): set a real one (e.g. {type: "POINT_PERSON"}) first; getWorkflow.draftValidation lists every blocker. GRAPH CONFIG — `graph.config`, beside `nodes`/`edges`/`triggers`, NOT per-node. Every domain: `triggerOperator` "AND"|"OR" (several triggers: all or any); `triggerWindow`, which limits when ENROLLMENT may happen; `exclusiveEnrollment` true STOPS the record's runs in every OTHER workflow (not prior versions of this one) when it enters this one — "only one campaign at a time per lead"; inert on EVENT graphs. `activation.triggerEligibleRecordsNow` is RETIRED: parsed, read by nothing, enrolls nobody — do not write it. CONTACT graphs add `exitConditions.exitConditionTypes` — any of "any_inbound_communication", "inbound_text", "inbound_email", "contact_archived", "deals_closed", "outbound_from_human", "outbound_from_ai_employee", "outbound_from_other_workflow", "contact_signed_contract", "property_listed", "property_off_market"; there is no per-node way. The "outbound_from_*" three end the run when somebody ELSE messages the contact, never on its own workflow group's message. On APPOINTMENT omit `exitConditions`: any value, even {}, is rejected. `communicationConfig` is NOT contact-only: APPOINTMENT graphs take it too, for a reminder's quiet hours and sender. SEND WINDOW — the sending schedule is not in the graph: getWorkflow.sendWindow, set by updateWorkflowSendWindow. It and `triggerWindow` share the shape {timezone, days:[{day:"MON".."SUN", intervals:[{start:{hour,minute}, end:{hour,minute}}]}], timezoneMode?}. Each day has its OWN intervals ("weekdays 9-5, Sundays 12-4" is one window); an absent day is CLOSED, an interval never passes midnight (end after start), and an end of {hour:0,minute:0} is midnight at the END of the day. The older {daysOfWeek?, startTime?, endTime?} (same hours each listed day) is still ACCEPTED, but `days` is what is stored and read back. `hour` AND `minute` are BOTH REQUIRED on each time ({hour:9} alone is rejected). Clock times, not offsets: "weekdays 9-6" is one `days` entry per MON..FRI with {start:{hour:9,minute:0}, end:{hour:18,minute:0}}. No sending schedule falls back to MON-FRI 09:00-19:00 org time, so no weekends. `timezoneMode` is WHOSE clock the times are read on: "BUSINESS" the ORGANISATION's timezone, read live (New York when unset), and what an OMITTED `sendWindow.timezoneMode` reads as; "RECIPIENT" each recipient's zone from their phone's area code (toll-free, non-NANP numbers and EMAIL fall back to the organisation's); "CONFIGURED" the window's own `timezone`, fixed. `triggerWindow.timezoneMode` accepts only "RECIPIENT"|"CONFIGURED" ("BUSINESS" there is REJECTED by the graph parser) and is inert: its times are always read in its own `timezone`. The window is final: no quiet hours are added on top, for TEXT or EMAIL. SENDER — `communicationConfig.text.sender` / `.email.sender`, both allowed at once. A mode name alone is not a valid sender: most modes carry required fields. TEXT: {type:"UNSET"} | {type:"POINT_PERSON"} | {type:"MEETING_OWNER"} (appointment graphs) | {type:"PHONE", fromPhoneNumberId} | {type:"RANDOM_PHONE", fromPhoneNumberIds:[...]} | {type:"LOCAL_PRESENCE", scope, fallback} — LOCAL_PRESENCE picks a team number whose area code matches the recipient, and BOTH scope and fallback are required: scope is {kind:"ALL_TEAM"} | {kind:"SPECIFIC", fromPhoneNumberIds} | {kind:"EXCLUDE", excludedPhoneNumberIds}, and fallback is {type:"POINT_PERSON"} | {type:"PHONE", fromPhoneNumberId} | {type:"RANDOM_PHONE", fromPhoneNumberIds:[...]}. EMAIL: {type:"UNSET"} | {type:"POINT_PERSON"} | {type:"IDENTITY", fromEmail, fromClientId} | {type:"RANDOM_IDENTITY", identities:[...]}. UNSET is the creation default and activation is GATED on replacing it. A text_action or email_action step may carry its OWN `config.senderOverride` for that step alone (absent inherits): the same TEXT/EMAIL arms above except MEETING_OWNER and LOCAL_PRESENCE. SYSTEM CATEGORY — createWorkflow's separate `systemCategory` variable, not in the graph. All domains allow CUSTOM workflows, PROPERTY included, so `null` is right unless creating from a category's template. PROPERTY's one category, "PROPERTY_SIGNAL_SKIP_TRACE", is the skip-trace template with a daily cap; a `null` PROPERTY workflow is blank, started manually, by a property signal or by a custom data pipeline. A non-null `systemCategory` requires a `templateId` on the same create ("A system-category workflow needs a template id" does NOT mean property workflows are unsupported). NO domain offers "APPOINTMENT_REMINDER" or "INTEGRATION_LEAD_HANDLING" at create (READ-only): a reminder is createAppointmentReminder (isGlobal: true for every appointment); the second is minted on integration connect, then LOCKED against adding, deleting or rewiring a step.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateWorkflowGraph: (variables: T.UpdateWorkflowGraphMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateWorkflowGraphMutation> =>
      this.request('updateWorkflowGraph', variables, options, { operationType: 'mutation' }),
    /**
     * Set a workflow's priority, which orders its runs and sends against the org's other workflows (higher wins): 1.25 Low, 1.5 Normal (the default), 1.75 High; any other value is refused. Takes a version id (getWorkflow currentVersion.id); applies to the whole workflow at once, live included, and re-orders sends already queued.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateWorkflowPriority: (variables: T.UpdateWorkflowPriorityMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateWorkflowPriorityMutation> =>
      this.request('updateWorkflowPriority', variables, options, { operationType: 'mutation' }),
    /**
     * Set the workflow's SENDING SCHEDULE, the hours its messages may go out. It belongs to the workflow (group id), not a version, so it applies to the LIVE workflow at once: every run reads it on its next send, whichever version it started on, with no draft or promote. A run already waiting for the old schedule's next opening keeps that wait and re-checks when it wakes. `sendWindow` is {timezone, days:[{day:"MON".."SUN", intervals:[{start:{hour,minute}, end:{hour,minute}}]}], timezoneMode?}, with the rules updateWorkflowGraph gives under SEND WINDOW; an absent day is CLOSED, and a window naming no days or hours is refused. null clears it to the platform default (Mon–Fri 09:00–19:00 org time). Read it from getWorkflow.sendWindow. The ONLY way to change it: updateWorkflowGraph refuses a graph carrying a different one.
     *
     * @remarks Requires the WRITE scope.
     *
     * Idempotent: pass `options.idempotencyKey` to make retries safe.
     */
    updateWorkflowSendWindow: (variables: T.UpdateWorkflowSendWindowMutationVariables, options?: IdempotentRequestOptions): Promise<T.UpdateWorkflowSendWindowMutation> =>
      this.request('updateWorkflowSendWindow', variables, options, { operationType: 'mutation' }),
  }
}
