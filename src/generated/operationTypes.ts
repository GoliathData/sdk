export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };

export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Dinero: { input: any; output: any; }
  JSON: { input: any; output: any; }
  SuperJSON: { input: any; output: any; }
};

/** Carrier vetting status for an A2P 10DLC brand or campaign registration. */
export type A2pRegistrationStatus =
  | 'APPROVED'
  | 'DRAFT'
  /**
   * The registration LAPSED and must be renewed. Deliberately distinct from REJECTED: a client that
   * cannot tell them apart will offer "Update & resubmit", and the resubmit mutation refuses anything
   * that is not literally REJECTED — so the user gets a button that always fails, for a problem that
   * needs renewing rather than appealing.
   */
  | 'EXPIRED'
  /**
   * Registered by the customer in their OWN carrier account, and only OBSERVED by us — never driven.
   * Deliberately distinct from APPROVED for the same reason EXPIRED is distinct from REJECTED: the
   * controls an approved brand earns drive a registration Goliath owns, and they refuse a brand we
   * only observe — so collapsing this state into APPROVED hands the customer a screen of controls
   * that refuse them. There is also nothing here for us to have approved: their carrier already did,
   * somewhere we cannot see.
   */
  | 'EXTERNAL'
  | 'PENDING'
  | 'REJECTED';

export type ActivityDirection =
  | 'INBOUND'
  | 'OUTBOUND';

export type ActivityType =
  | 'ADDED_PERSON_EMAIL'
  | 'ADDED_PERSON_PHONE'
  | 'ADD_COLLABORATOR'
  | 'AI_EMPLOYEE_ATTACHED'
  | 'AI_EMPLOYEE_ESCALATED'
  | 'AI_EMPLOYEE_RAN'
  | 'AI_EMPLOYEE_REMOVED'
  | 'AI_EMPLOYEE_SCHEDULE_CHANGED'
  | 'ASSIGNED'
  | 'CALL'
  | 'CONTACT_ARCHIVED'
  | 'CONTACT_UNARCHIVED'
  | 'CONTRACT'
  | 'CREATED_APPOINTMENT'
  | 'CREATED_IMPORTANT_NOTE'
  | 'CREATED_TASK'
  | 'CSV_ROW_IMPORTED'
  | 'DELETED_APPOINTMENT'
  | 'DELETED_IMPORTANT_NOTE'
  | 'DELETED_PERSON_EMAIL'
  | 'DELETED_PERSON_PHONE'
  | 'DELETED_TASK'
  | 'DIRECT_MAIL'
  | 'EMAIL'
  | 'EMAIL_OUTREACH'
  | 'FILE_ADDED'
  | 'FILE_REMOVED'
  | 'LIST_UPDATED'
  | 'META_LEAD_FORM_SUBMITTED'
  | 'NOTE_CREATED'
  | 'NOTE_DELETED'
  | 'NOTE_PINNED'
  | 'NOTE_UNPINNED'
  | 'NOTE_UPDATED'
  | 'PROPERTY_VISITED'
  | 'REACTED_TO_NOTE'
  | 'REACTED_TO_REPLY'
  | 'RELATED_PERSON_WORKFLOW'
  | 'REMOVED_NOTE_REACTION'
  | 'REMOVED_REPLY_REACTION'
  | 'REMOVE_COLLABORATOR'
  | 'REPLY_CREATED'
  | 'REPLY_DELETED'
  | 'REPLY_UPDATED'
  | 'SLACK'
  | 'TAG_UPDATED'
  | 'TEXT'
  | 'UNASSIGNED'
  | 'UPDATED_APPOINTMENT'
  | 'UPDATED_DEAL_PRICE'
  | 'UPDATED_IMPORTANT_NOTE'
  | 'UPDATED_PERSON_EMAIL'
  | 'UPDATED_PERSON_PHONE'
  | 'UPDATED_PIPELINE_ITEM_PRICE'
  | 'UPDATED_SELLER_MOTIVATION'
  | 'UPDATED_TASK'
  | 'UPDATED_TIME_FRAME'
  | 'USER_MENTIONED_IN_NOTE'
  | 'VOICEMAIL_LEFT';

export type AddPropertiesToListMode =
  | 'ASYNC'
  | 'SYNC';

export type AddressInput = {
  city: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type AdminContractArchiveTemplateInput = {
  templateId: Scalars['ID']['input'];
};

export type AdminContractCorrectInput = {
  /** The corrected contract, on the same template version, contact and deal. */
  contract: AdminContractSendInput;
  contractId: Scalars['ID']['input'];
  /** The revision the screen was opened on (correcting.revisionNumber); a correction made since refuses this one. */
  expectedRevisionNumber: Scalars['Int']['input'];
  /** How many had signed when the screen opened (correcting.signedNames); a signature since refuses this one. Left out, no check. */
  expectedSignatureCount?: InputMaybe<Scalars['Int']['input']>;
  /** A UUID the client generates once per correction; a retry with the same key corrects once. */
  idempotencyKey: Scalars['ID']['input'];
  /** What changed: on the evidence chain, and emailed to signers whose link stops working. */
  reason: Scalars['String']['input'];
};

/**
 * Where a sender-owned prefill comes from. TOKENS renders a merge-field template (`{{firstName}}`) against the
 * contract's contact, property, deal and sender; MANUAL is typed by the sender when the contract is prepared.
 */
export type AdminContractPrefillSource =
  | 'MANUAL'
  | 'TOKENS';

export type AdminContractPrepareInput = {
  contract: AdminContractSendInput;
  /** A held workflow draft this send completes (from `heldDraft`): revision 1 is frozen on that contract. */
  heldContractId?: InputMaybe<Scalars['ID']['input']>;
  /** A UUID the client generates once per prepare; a retry with the same key returns the same contract. */
  idempotencyKey: Scalars['ID']['input'];
};

export type AdminContractRecipientStatus =
  | 'BLOCKED'
  | 'DECLINED'
  | 'INVITED'
  | 'SIGNED'
  | 'VIEWED'
  /** Not invited yet: the envelope is unsent, or an earlier signer has not finished. */
  | 'WAITING';

/** SIGNER roles fill and sign; COPY roles receive the completed PDF. */
export type AdminContractRoleKind =
  | 'COPY'
  | 'SIGNER';

/** A contract as the sender has it on the prepare screen. */
export type AdminContractSendInput = {
  /** This send's After signing button. Left out: the template's; null: none on this send. */
  afterSigning?: InputMaybe<ContractAfterSigningInput>;
  contactId: Scalars['ID']['input'];
  /** @deprecated Renamed to pipelineItemId (pipelines WS5, INT-13330). */
  dealId?: InputMaybe<Scalars['ID']['input']>;
  /** The day the links stop working, YYYY-MM-DD, through its end in the contract's time zone; left out, expiryDays from the send. */
  expiresOn?: InputMaybe<Scalars['String']['input']>;
  /** Days signers have once it is sent, 1–90. */
  expiryDays: Scalars['Int']['input'];
  message: Scalars['String']['input'];
  /** The note opens the invitation texts too, as the send screen's note field says; left out, the note is for the email alone (workflows, the API). */
  noteInText?: InputMaybe<Scalars['Boolean']['input']>;
  pipelineItemId?: InputMaybe<Scalars['ID']['input']>;
  recipients: Array<AdminContractSendRecipientInput>;
  /** Days between automatic reminders, 1–30; left out, every day; null turns them off. */
  reminderIntervalDays?: InputMaybe<Scalars['Int']['input']>;
  /** The Goliath sales offer this send carries (a Goliath plan template's, created by a Goliath admin from the Plan sheet). */
  salesOfferId?: InputMaybe<Scalars['ID']['input']>;
  subject: Scalars['String']['input'];
  templateId: Scalars['ID']['input'];
  /** The published version the screen was opened on; a newer publish refuses the prepare. */
  templateVersionId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  /** The sender's value per prefill; a prefill left out keeps what the CRM filled. */
  values: Array<AdminContractSendValueInput>;
};

export type AdminContractSendRecipientInput = {
  /** The contact this recipient is, when they are one. */
  contactId?: InputMaybe<Scalars['ID']['input']>;
  displayName: Scalars['String']['input'];
  /** Their email when they are sent it by Email; give exactly one of an email or a phone. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Their mobile number when they are sent it by Text, in any US form; give exactly one of an email or a phone. */
  phone?: InputMaybe<Scalars['String']['input']>;
  roleKey: Scalars['ID']['input'];
  /** The signer's turn, 1-based; signers sharing a turn sign at once. Null on a copy; null on every recipient keeps the template's order. */
  signingOrder?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminContractSendStartInput = {
  /** Optional Contact B (a co-seller) for the template's second contact role. */
  contactBId?: InputMaybe<Scalars['ID']['input']>;
  contactId: Scalars['ID']['input'];
  /** @deprecated Renamed to pipelineItemId (pipelines WS5, INT-13330). */
  dealId?: InputMaybe<Scalars['ID']['input']>;
  /** Optional deal for the deal merge fields; must belong to the same organization. */
  pipelineItemId?: InputMaybe<Scalars['ID']['input']>;
  templateId: Scalars['ID']['input'];
};

export type AdminContractSendValueInput = {
  /** The prefill's key. */
  key: Scalars['ID']['input'];
  /** The value's type on this send, when the sender changed it; left out keeps the template's. */
  type?: InputMaybe<AdminContractValueType>;
  value: Scalars['String']['input'];
};

/** Where a contract's current signing attempt stands. */
export type AdminContractStatus =
  | 'COMPLETED'
  | 'DECLINED'
  | 'EXPIRED'
  | 'EXTERNAL_WORKFLOW'
  | 'HANDOFF_CLOSED'
  | 'PARTIALLY_SIGNED'
  | 'PREPARATION_FAILED'
  | 'PREPARING'
  /** Prepared and frozen; nothing has been delivered yet. */
  | 'READY'
  | 'SEND_PENDING'
  | 'SENT'
  | 'SIGNING_PENDING_FINALIZATION'
  | 'VIEWED'
  | 'VOIDED'
  | 'VOID_PENDING';

export type AdminContractTemplateStatus =
  | 'ARCHIVED'
  /** Never published. */
  | 'DRAFT'
  | 'PUBLISHED';

/** Where a send screen value comes from, as the review step labels it. */
export type AdminContractValueRecord =
  | 'CONTACT'
  | 'DEAL'
  | 'PIPELINE_ITEM'
  | 'TEAMMATE'
  | 'TYPED';

/** What a prefill holds: the send screen picks its input by it (a date picker for DATE, a number for NUMBER). */
export type AdminContractValueType =
  | 'BOOLEAN'
  | 'DATE'
  | 'MONEY'
  | 'NUMBER'
  | 'TEXT';

export type AfterCallActionKind =
  | 'ADD_TO_SEQUENCE'
  | 'BOOK_APPOINTMENT'
  | 'CREATE_DEAL'
  | 'CREATE_PIPELINE_ITEM'
  | 'CREATE_TASK'
  | 'UPDATE_CUSTOM_FIELDS';

export type AgentAnalyticsPeriod =
  | 'FOURTEEN_DAYS'
  | 'SEVEN_DAYS'
  | 'SIXTY_DAYS'
  | 'THIRTY_DAYS'
  | 'THIS_MONTH'
  | 'YEAR_TO_DATE';

export type AgentCommissionGoalMetric =
  | 'EARNED'
  | 'TOTAL';

export type AgentGoalPlanStatus =
  | 'ACTIVE'
  | 'ARCHIVED'
  | 'DRAFT';

export type AgentOrigin =
  | 'CUSTOM'
  | 'LEAD_NURTURER'
  | 'MARKETING_CAMPAIGN'
  | 'RECEPTIONIST'
  | 'SCHEDULER';

export type AgentPersonalGoalStatus =
  | 'ACTIVE'
  | 'ARCHIVED'
  | 'COMPLETED';

export type AgentReplyDraftChannel =
  | 'EMAIL'
  | 'TEXT';

export type AgentReplyDraftStatus =
  | 'APPROVED'
  | 'DISCARDED'
  | 'EXPIRED'
  | 'PENDING'
  | 'SUPERSEDED';

export type AiEmployeeConfigTextEditInput = {
  find: Scalars['String']['input'];
  replace: Scalars['String']['input'];
};

export type AiEmployeeScheduleInput = {
  cronExpression: Scalars['String']['input'];
  instruction?: InputMaybe<Scalars['String']['input']>;
  maxRuns: Scalars['Int']['input'];
  timezone: Scalars['String']['input'];
};

/**
 * Per-apply overrides for `applyTaskTemplate`. Each field REPLACES the value the
 * template would have produced; omitted fields keep the template's. `endDate`
 * skips the relative due-date resolution entirely. Everything the template carries
 * that is not overridable — origin, supporting-file links, the contact link —
 * still applies, which is why an edited prefill submits through this rather than
 * through a plain createTask.
 */
export type ApplyTaskTemplateOverridesInput = {
  autoCompleteOnNoteAdded?: InputMaybe<Scalars['Boolean']['input']>;
  autoCompleteOnReassignment?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  /**
   * The timezone the created task is stored in, and the zone `endDate` is read
   * back against by the task editor. Send it alongside any `endDate` override:
   * without it the task keeps the TEMPLATE's `preferredTimeOfDay.timezone`, so an
   * instant chosen in US Eastern can render as the next day under a template
   * authored in UTC+9. When present it always wins over the template's zone; when
   * omitted the template's is kept.
   */
  timezone?: InputMaybe<Timezone>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AppointmentCalendarSyncProvider =
  | 'GOOGLE'
  | 'MICROSOFT';

export type AppointmentCalendarSyncStatus =
  | 'FAILED'
  | 'NOT_REQUESTED'
  | 'SKIPPED_NO_ACCESS'
  | 'SKIPPED_WRITE_BLOCKED'
  | 'SYNCED';

/**
 * One step of a reminder — a single SMS and how far ahead of the appointment's
 * `startDate` to send it.
 */
export type AppointmentReminderStepInput = {
  amountBefore: Scalars['Int']['input'];
  message: Scalars['String']['input'];
  unitBefore: AppointmentReminderTimeUnit;
};

/**
 * Unit for `AppointmentReminder.amountBefore`. Capped at DAYS — a reminder
 * more than a day before the appointment isn't a meaningful product use
 * case.
 */
export type AppointmentReminderTimeUnit =
  | 'DAYS'
  | 'HOURS'
  | 'MINUTES';

/**
 * Who authored an artifact: a person, an AI employee, or Goliath itself.
 * Deliberately an ENUM on one resolved `ArtifactAuthor` object rather than
 * exposing `createdByUser` and `agent` side by side (or a union) — a client must
 * branch on `kind` to render at all, so no surface can silently forget a case.
 * Surfaces that forgot are exactly how every organization's timeline ended up
 * crediting one shared "David AI" sentinel with its own employees' work.
 *
 * A client that predates a value renders it through its own default arm; both
 * existing values keep their exact meaning, so nothing shipped changes behaviour.
 */
export type ArtifactAuthorKind =
  | 'AI'
  /**
   * Goliath itself — work the product did with no person and no AI employee
   * behind it (a contact merge nobody performed; the meeting notetaker's own
   * notes). NOT an AI employee: there is no roster entry, no session to open and
   * nothing to link to, so render the `name` plainly and never with AI-employee
   * treatment. `id` is always null.
   */
  | 'SYSTEM'
  | 'USER';

export type AssignmentPolicyOwnerInput = {
  id: Scalars['ID']['input'];
  kind: AssignmentPolicyOwnerKind;
};

export type AssignmentPolicyOwnerKind =
  | 'AGENT'
  | 'LINE'
  | 'META_PAGE'
  | 'ORG'
  | 'WORKFLOW';

export type BeginSpaceUploadInput = {
  /**
   * Upload a picture this file's editor holds (an AI edit, a photo drawn with its edits): filed under
   * the file, never listed, and trashed, moved and shared with it. It goes in the file's own space,
   * whatever spaceId says.
   */
  assetOfItemId?: InputMaybe<Scalars['ID']['input']>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  fileName: Scalars['String']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
  /** Upload a new version of this file instead of a new file. */
  replacesItemId?: InputMaybe<Scalars['ID']['input']>;
  sizeBytes: Scalars['Float']['input'];
  spaceId: Scalars['ID']['input'];
};

export type BillingAction =
  | 'ACCEPT_TEAM_INVITE'
  | 'CREATE_TEAM_INVITE'
  | 'EMAIL_VERIFICATION'
  | 'EXPORT_PROPERTIES'
  | 'SEND_TEXT'
  | 'SKIPTRACE'
  | 'START_CALL';

export type BulkAiEmployeeScheduleInput = {
  /** Standard 5-field cron expression, interpreted in `timezone`. */
  cronExpression: Scalars['String']['input'];
  /** Fires allowed before the schedule retires itself. Required — a selection-wide open-ended cadence is not creatable here. */
  maxRuns: Scalars['Int']['input'];
  /** IANA zone the expression is read in, e.g. America/New_York. */
  timezone: Scalars['String']['input'];
};

/** Which address a bulk skiptrace targets for every contact in the batch. */
export type BulkEnrichSkiptraceAddress =
  /** No preference — we pick the best address (mailing, then property). */
  | 'EITHER'
  /** Mailing address only — never fall back to the property. */
  | 'MAILING_ONLY'
  /** Property address only — never fall back to the mailing address. */
  | 'PROPERTY_ONLY';

export type BulkPipelineItemPropertyAttachmentMode =
  | 'ALL'
  | 'ALL_VERIFIED'
  | 'FIRST_VERIFIED'
  | 'NONE';

export type BulkShareContactCreateTaskInput = {
  autoCompleteOnNoteAdded?: InputMaybe<Scalars['Boolean']['input']>;
  autoCompleteOnReassignment?: InputMaybe<Scalars['Boolean']['input']>;
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone: Timezone;
  title: Scalars['String']['input'];
};

export type BulkShareContactUserAssignmentInput = {
  createTask?: InputMaybe<BulkShareContactCreateTaskInput>;
  role: ShareContactAssignmentRole;
  userId: Scalars['ID']['input'];
};

/** Lifecycle status of a bulk task. Mirrors the Prisma BulkTaskStatus enum. */
export type BulkTaskStatus =
  /** Withdrawn by the person who started it before any of it ran (an Undo). Nothing was changed. */
  | 'CANCELLED'
  /** The change has been fully applied. */
  | 'COMPLETED'
  /** Queued — waiting for a worker slot (org-lane fairness can delay the start). */
  | 'CREATED'
  /** The change was NOT applied. Re-submit, or use a synchronous path where one exists. */
  | 'FAILED'
  /** A background worker is applying the change. */
  | 'PROCESSING';

/**
 * Source of a BusySlot returned by availabilityForSlot. Mirrors
 * the BusySlotSource union in server/src/service/app/availability/types.ts.
 */
export type BusySlotSource =
  | 'GOOGLE'
  | 'LOCAL'
  | 'MICROSOFT';

export type CallDisposition =
  | 'BadNumber'
  | 'Callback'
  | 'Connected'
  | 'NoAnswer'
  | 'NotInterested'
  | 'Voicemail';

/** Which line a MANUAL DIAL goes out on. See `Organization.callLinePolicy`. */
export type CallLinePolicy =
  /**
   * Ask before the dial when the contact's last call was on a different org line;
   * a surface with its own From picker shows an inline switch instead. The
   * behaviour every organization has before choosing.
   */
  | 'ASK_BEFORE_DIALING'
  /**
   * The line the contact's most recent call went through — a call completed in
   * either direction, or an inbound call the contact placed even if nobody
   * answered, because that is still a number they know.
   *
   * This value also GRANTS PERMISSION: it lets an ordinary member dial from a
   * teammate's line when a qualifying call to that exact destination already went
   * through it. The contact's callback then rings that teammate, not the caller.
   */
  | 'LAST_CALL_LINE'
  /** The caller's own primary line, silently. */
  | 'USER_PRIMARY_LINE';

export type CallRoundRobinTargetKind =
  | 'AREA_CODE_MAP'
  | 'EXTERNAL'
  | 'LINE_OWNER'
  | 'NONE'
  | 'ORG_USER_ROTATION'
  | 'SPECIFIC_USER'
  | 'TEAM';

export type CallStatus =
  | 'COMPLETED'
  | 'NO_ANSWER'
  | 'RINGING';

/**
 * A dialer that keeps one config per campaign and connects through
 * `connectDialerIntegration`. Both post to the same `/calls/enzo` route; the
 * integration row, not the delivery, says which one a call came from.
 */
export type CampaignDialerProvider =
  | 'ENZO'
  | 'READYMODE';

export type CancelAiEmployeeFollowUpOutcome =
  | 'CANCELLED'
  | 'NOT_FOUND';

export type CancelTaskClearOutcome =
  /** It had already started. Use restoreClearedTasks to bring the tasks back. */
  | 'ALREADY_STARTED'
  /** Undone before it started. Nothing was changed. */
  | 'CANCELLED';

export type CommunicationDirection =
  | 'INBOUND'
  | 'OUTBOUND';

export type ContactAgentCallScheduleDayInput = {
  close: Scalars['String']['input'];
  day: ContactAgentDayOfWeek;
  enabled: Scalars['Boolean']['input'];
  open: Scalars['String']['input'];
};

export type ContactAgentCallScheduleInput = {
  days: Array<ContactAgentCallScheduleDayInput>;
  timezone: Scalars['String']['input'];
};

export type ContactAgentDayOfWeek =
  | 'FRI'
  | 'MON'
  | 'SAT'
  | 'SUN'
  | 'THU'
  | 'TUE'
  | 'WED';

export type ContactAgentDefaultAssigneeMode =
  | 'NONE'
  | 'ROUND_ROBIN_LIST'
  | 'SAME_AS_NEW_LEADS'
  | 'SPECIFIC_USER'
  | 'TEAM_RANDOM';

export type ContactAgentStatus =
  | 'ACTIVE'
  | 'INACTIVE';

/**
 * What accepting an employee card did. The contact doors throw for every refusal; this one answers
 * with a value because the profile page keeps rendering the card after a refusal and needs to say
 * which of three things happened, in the applier's own words.
 */
export type ContactAgentSuggestionAcceptOutcome =
  | 'APPLIED'
  | 'REFUSED'
  | 'RETIRED';

export type ContactAiEmployeeScheduleStatus =
  | 'ACTIVE'
  | 'EXHAUSTED'
  | 'PAUSED'
  | 'PAUSED_ERRORS';

export type ContactAiEmployeeSource =
  | 'AGENT_BUILDER'
  | 'AUTO_NEW_CONTACT'
  | 'BULK'
  | 'CAMPAIGN'
  | 'ENGAGED'
  | 'FORM'
  | 'IMPORT'
  | 'LEGACY_FIREHOSE'
  | 'MANUAL'
  | 'MANUAL_CREATE'
  | 'MENTION'
  | 'REFERRAL'
  | 'RING_ANSWER'
  | 'SELF_ATTACH'
  | 'WORKFLOW';

export type ContactAiEmployeeStatus =
  | 'ACTIVE'
  | 'PAUSED'
  | 'REMOVED';

/** What an AI pause on a contact stops. */
export type ContactAiPauseMode =
  /** Pause all AI: no AI employee runs on the contact; workflow AI employee steps are skipped. */
  | 'ALL'
  /** AI off (the contact AI switch): runs and suggestions continue, but every AI text, email or contract waits for a person to approve it as a card, and AI calls are refused. No end time. */
  | 'DRAFTS'
  /** Pause AI messages: runs continue, but no AI text, email or Slack message is suggested or sent. */
  | 'MESSAGES';

export type ContactCollaboratorInput = {
  createTask?: InputMaybe<CreateTaskInput>;
  role: ContactToUserMappingStatus;
  userId: Scalars['String']['input'];
};

export type ContactCustomFieldType =
  | 'DATE'
  | 'DOLLAR'
  | 'DROPDOWN'
  | 'LINK'
  | 'NUMBER'
  | 'TEXT';

/** A data-shape problem the contact hygiene read groups contacts by. */
export type ContactDataProblem =
  /** An email holding a capital letter. */
  | 'EMAIL_NOT_LOWERCASE'
  /** No name at all. */
  | 'NAME_EMPTY'
  /** A one-word name: a first or a last name is missing (the name is one field, so which is not known). */
  | 'NAME_ONE_WORD'
  /** A stored phone that is not the 10-digit US form every phone write normalizes to. */
  | 'PHONE_NOT_NORMALIZED';

/** Which kind of list: one people made, an import's upload list, or an export's list. */
export type ContactListKind =
  | 'EXPORT'
  | 'LIST'
  | 'UPLOAD';

export type ContactSuggestionDismissReason =
  | 'ALREADY_DONE'
  | 'ESTATE_ALREADY_HANDLED'
  | 'KEPT_MINE'
  | 'NOT_MY_LEAD'
  | 'NOT_RELEVANT'
  | 'NO_LONGER_DISTRESSED'
  | 'OTHER'
  | 'SHOULDNT_MESSAGE'
  | 'STILL_OWNS'
  | 'WRONG_FACTS'
  | 'WRONG_PERSON'
  | 'WRONG_PROPERTY'
  | 'WRONG_TONE';

/** One named row's answer to its own card's quiz, for a bulk ACCEPT over an ids selection. */
export type ContactSuggestionRowDecisionsInput = {
  /**
   * The card's answer, as its action type's decision schema spells it — the same `JSON` the
   * single-card `decideSuggestion(decisions:)` takes, and parsed the same way: through the type's own
   * STRICT schema, so a key the type does not have is refused rather than dropped.
   */
  decisions: Scalars['JSON']['input'];
  suggestionId: Scalars['ID']['input'];
};

export type ContactSuggestionStatus =
  | 'ACCEPTED'
  | 'DISMISSED'
  | 'EXPIRED'
  | 'PENDING'
  | 'SUPERSEDED';

export type ContactToUserMappingStatus =
  | 'PARTICIPANT'
  | 'POINT_PERSON'
  | 'REVOKED';

export type ContactsBulkActionMode =
  | 'ASYNC'
  | 'SYNC';

export type ContentTemplateAttachmentInput = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  fileSize: Scalars['Int']['input'];
  page?: InputMaybe<ContentTemplateAttachmentPageInput>;
  uploadedFileId: Scalars['ID']['input'];
};

export type ContentTemplateAttachmentPageInput = {
  itemId: Scalars['ID']['input'];
  sendsLatestAs?: InputMaybe<Scalars['ID']['input']>;
  versionNumber: Scalars['Int']['input'];
};

export type ContentTemplateMutationInput = {
  attachments?: InputMaybe<Array<ContentTemplateAttachmentInput>>;
  bodyContent: Scalars['String']['input'];
  bodyFormat?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subjectContent?: InputMaybe<Scalars['String']['input']>;
  taskConfig?: InputMaybe<TaskTemplateConfigInput>;
  taskSetSteps?: InputMaybe<Array<TaskSetStepInput>>;
};

export type ContentTemplateType =
  | 'EMAIL'
  | 'NOTE'
  | 'SMS'
  | 'TASK'
  /**
   * A named collection of TASK templates, each with its own due offset and
   * time-of-day, applied to a contact in one gesture. Carries no body and no
   * taskConfig of its own — see `ContentTemplate.taskSetSteps`.
   */
  | 'TASK_SET';

/** The mark beside the After signing button's label. */
export type ContractAfterSigningIcon =
  | 'ARROW_RIGHT'
  | 'CALENDAR'
  /** Goliath's own mark, with a trailing arrow. */
  | 'GOLIATH'
  | 'NONE';

/** An After signing button as a template or a send sets it; see `ContractAfterSigning`. */
export type ContractAfterSigningInput = {
  autoContinue: Scalars['Boolean']['input'];
  caption?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  icon: ContractAfterSigningIcon;
  label: Scalars['String']['input'];
  style: ContractAfterSigningStyle;
  url: Scalars['String']['input'];
};

/** How the After signing button is painted. */
export type ContractAfterSigningStyle =
  /** Filled with the template owner's own color. */
  | 'BRAND'
  /** The app's dark button. */
  | 'DARK'
  /** White with an outline. */
  | 'LIGHT';

export type CopySpaceItemInput = {
  destination: SpaceDestinationInput;
  itemId: Scalars['ID']['input'];
};

export type CopyUploadedFileIntoSpaceInput = {
  destination: SpaceDestinationInput;
  /** The upload's original file (FileProcessingTask.file). */
  uploadedFileId: Scalars['ID']['input'];
};

/**
 * Whether a signal type is live in the organization's counties, for the automation and saved-filter builders' prompt.
 * NOT_REQUESTED: not live somewhere and nobody asked (the builder offers "Request it"). NO_PRODUCT: we have no coverage
 * product for this type yet.
 */
export type CoverageAvailabilityStatus =
  | 'BUILDING'
  | 'LIVE'
  | 'NOT_REQUESTED'
  | 'NO_PRODUCT'
  | 'REQUESTED';

export type CoverageNotAvailableReason =
  | 'NOT_OFFERED'
  | 'NOT_PUBLISHED';

export type CreateContactCustomFieldInput = {
  /** Preferred DATE value as a strict calendar day (YYYY-MM-DD). Do not combine with dateValue. */
  calendarDate?: InputMaybe<Scalars['String']['input']>;
  customFieldId: Scalars['String']['input'];
  /** Legacy DATE compatibility input. Prefer calendarDate for new clients; do not combine both forms. */
  dateValue?: InputMaybe<Scalars['DateTime']['input']>;
  dropdownSelectedValues?: InputMaybe<Array<Scalars['String']['input']>>;
  numberValue?: InputMaybe<Scalars['Float']['input']>;
  textValue?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContactEmailInput = {
  email: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  verificationStatus: VerificationStatus;
};

export type CreateContactInput = {
  addCustomFieldValues?: InputMaybe<Array<CreateContactCustomFieldInput>>;
  addEmails?: InputMaybe<Array<CreateContactEmailInput>>;
  addMailingAddresses?: InputMaybe<Array<CreateContactMailingAddressInput>>;
  addPhoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  addUserGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  address?: InputMaybe<AddressInput>;
  addressString?: InputMaybe<Scalars['String']['input']>;
  sellerFirstName: Scalars['String']['input'];
  sellerLastName: Scalars['String']['input'];
  subContacts?: InputMaybe<Array<CreateSubContactInput>>;
  type?: InputMaybe<PipelineItemType>;
};

export type CreateContactMailingAddressInput = {
  /** Raw single-line address; resolved via MailingAddressResolutionService (property → address → raw). */
  addressString: Scalars['String']['input'];
  /**
   * Instant-duplicate case: the property (Property.id / esId) the user copied this
   * mailing address from — e.g. "use my subject property as the mailing address".
   * When set, the mailing row links straight to that property (no ES search).
   */
  propertyElasticsearchId?: InputMaybe<Scalars['ID']['input']>;
  /** Display order; lower is higher (0 = primary). */
  ranking?: InputMaybe<Scalars['Int']['input']>;
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type CreateContactPhoneNumberInput = {
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumber: Scalars['String']['input'];
  phoneType?: InputMaybe<PhoneType>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  verificationStatus: VerificationStatus;
};

export type CreateContactPropertyInput = {
  address?: InputMaybe<AddressInput>;
  propertyId: Scalars['String']['input'];
  propertyString?: InputMaybe<Scalars['String']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  verificationStatus: VerificationStatus;
};

export type CreateContentTemplateInput = {
  folderId?: InputMaybe<Scalars['ID']['input']>;
  input: ContentTemplateMutationInput;
  name: Scalars['String']['input'];
  type: ContentTemplateType;
};

export type CreateCustomFieldInput = {
  /** Dropdown only: allow apply-time automation to mint new options. Default false. */
  allowAutomationOptions?: InputMaybe<Scalars['Boolean']['input']>;
  allowMultiple?: InputMaybe<Scalars['Boolean']['input']>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text only: link an unknown number's text that quotes this value to its holder. Default false.
   * Matches only a 6-64 character value, no spaces, mixing letters and digits.
   */
  matchInboundTextsByValue?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ContactCustomFieldType;
};

export type CreatePipelineItemCustomFieldInput = {
  allowMultiple?: InputMaybe<Scalars['Boolean']['input']>;
  /** CHECKBOX only: card color when checked. */
  checkedTone?: InputMaybe<PipelineItemCustomFieldTone>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type: PipelineItemCustomFieldType;
};

export type CreatePipelineItemInput = {
  closeDate?: InputMaybe<Scalars['DateTime']['input']>;
  commissionAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  commissionPercentBps?: InputMaybe<Scalars['Int']['input']>;
  contactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFieldValues?: InputMaybe<Array<PipelineItemCustomFieldValueInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  participantSplits?: InputMaybe<Array<PipelineItemParticipantSplitInput>>;
  priceCents?: InputMaybe<Scalars['BigInt']['input']>;
  propertyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  propertyStrings?: InputMaybe<Array<Scalars['String']['input']>>;
  stageId: Scalars['ID']['input'];
  teamSplitAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  teamSplitPercentBps?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateSpaceFolderInput = {
  /** Makes a retried create return the folder it already made. */
  creationKey?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  spaceId: Scalars['ID']['input'];
};

export type CreateSpaceTextFileInput = {
  content: Scalars['String']['input'];
  creationKey?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  spaceId: Scalars['ID']['input'];
};

export type CreateSubContactInput = {
  emails?: InputMaybe<Array<CreateContactEmailInput>>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  relation?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTaskInput = {
  alongsideOpenTasks?: InputMaybe<Scalars['Boolean']['input']>;
  autoCompleteOnNoteAdded?: InputMaybe<Scalars['Boolean']['input']>;
  autoCompleteOnReassignment?: InputMaybe<Scalars['Boolean']['input']>;
  contactId: Scalars['String']['input'];
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  /** @deprecated Renamed to pipelineItemIds (pipelines WS5, INT-13330). */
  dealIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Deals to explicitly attach to the task (creates DealTask join rows). May be empty or omitted. */
  pipelineItemIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone: Timezone;
  title: Scalars['String']['input'];
};

export type CreditType =
  /** AI agent usage (AI Agent Credits). Purchase-only: 1 credit = 1 cent. */
  | 'AI_CREDITS'
  /** Calling minutes: talk minutes on managed lines, both directions, rounded up per call. Plan allowance first, then purchased packs; the balance can be negative. */
  | 'CALLING_MINUTES'
  | 'EMAIL_VERIFICATION'
  | 'EXPORT_PROPERTIES'
  | 'SKIPTRACE'
  /** Texting credits. One credit equals one outbound carrier text segment. */
  | 'SMS_CREDITS';

export type CursorInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * A cell's status in the customer's words. WAITING_ON_COUNTY: we asked the county for its records and the 2-week clock
 * is paused until it answers. NOT_AVAILABLE: the county does not publish it, or we do not offer it there yet.
 */
export type CustomerCoverageStatus =
  | 'IN_PROGRESS'
  | 'LIVE'
  | 'NOT_AVAILABLE'
  | 'NOT_REQUESTED'
  | 'WAITING_ON_COUNTY';

export type DataExportStatus =
  | 'COMPLETED'
  | 'FAILED'
  | 'PROCESSING';

export type DataExportType =
  | 'CONTACTS'
  | 'PROPERTIES'
  | 'SKIPTRACES';

export type DeleteTaskInput = {
  contactId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type DeleteWorkflowTableInput = {
  workflowTableId: Scalars['ID']['input'];
};

export type DependencyImpactGroupKind =
  | 'ACTION_SUGGESTION'
  | 'AGENT_CONFIG'
  | 'ASSIGNMENT_POLICY'
  | 'AUTOMATION_TRIGGER'
  | 'BULK_TASK'
  | 'CALL_LIST'
  | 'CALL_ROUND_ROBIN_POLICY'
  | 'CALL_WORKSPACE_CONFIG'
  | 'CONTACT_OPTION_HOLDERS'
  | 'CONTENT_TEMPLATE'
  | 'CRON_JOB'
  | 'DEAL_PIPELINE_LAYOUT'
  | 'DIALER_CAMPAIGN_CONFIG'
  | 'EMBED_FORM'
  | 'FILTER'
  | 'INCOMING_WEBHOOK'
  | 'LIBRARY_FOLDER_CONTENTS'
  | 'LIVE_DEALS'
  | 'LIVE_PIPELINE_ITEMS'
  | 'LIVE_STAGES'
  | 'ORGANIZATION_API_KEY'
  | 'ORGANIZATION_SITE'
  | 'ORG_PARTNERSHIP'
  | 'PIPELINE_LAYOUT'
  | 'TASK'
  | 'TASK_SET_STEPS'
  | 'TEAM_BOARDS'
  | 'WORKFLOW_AUTOMATION'
  | 'WORKFLOW_TABLE_ROW';

export type DependencyReplacementSelectionInput = {
  replacementId: Scalars['ID']['input'];
  targetId: Scalars['ID']['input'];
  targetKind: DependencyTargetKind;
};

export type DependencyResolutionInput = {
  impactVersion: Scalars['String']['input'];
  replacements: Array<DependencyReplacementSelectionInput>;
};

export type DependencyTargetKind =
  | 'AGENT'
  | 'CONTACT'
  | 'CONTACT_CUSTOM_FIELD'
  | 'CONTACT_CUSTOM_FIELD_OPTION'
  | 'CONTACT_LIST'
  | 'CONTACT_TAG'
  | 'CONTENT_TEMPLATE'
  | 'DEAL'
  | 'DEAL_CUSTOM_FIELD'
  | 'DEAL_CUSTOM_FIELD_OPTION'
  | 'DEAL_PIPELINE'
  | 'DEAL_STAGE'
  | 'DEAL_STAGE_DEALS'
  | 'EMAIL_IDENTITY'
  | 'EMBED_FORM'
  | 'FILTER'
  | 'LIBRARY_FOLDER'
  | 'MACHINE_GROUP'
  | 'MACHINE_HOST'
  | 'MARKETING_CAMPAIGN'
  | 'ORGANIZATION'
  | 'PIPELINE'
  | 'PIPELINE_ITEM'
  | 'PIPELINE_ITEM_CUSTOM_FIELD'
  | 'PIPELINE_ITEM_CUSTOM_FIELD_OPTION'
  | 'PIPELINE_STAGE'
  | 'PIPELINE_STAGE_PIPELINE_ITEMS'
  | 'PROPERTY'
  | 'PROPERTY_LIST'
  | 'PROPERTY_TAG'
  | 'SCRAPER_PIPELINE'
  | 'SLACK_CHANNEL'
  | 'SLACK_USER'
  | 'TWILIO_PHONE_NUMBER'
  | 'UPLOADED_FILE'
  | 'USER'
  | 'USER_GROUP'
  | 'WORKFLOW_AUTOMATION'
  | 'WORKFLOW_GROUP'
  | 'WORKFLOW_TABLE'
  | 'WORKFLOW_TABLE_COLUMN'
  | 'WORKFLOW_WEBHOOK_CREDENTIAL';

/**
 * What a failed pool purchase actually left behind — and therefore what the caller
 * is allowed to say about it, and whether it may buy again.
 *
 * A SINGLE BOOLEAN COULD NOT CARRY THIS. The four states below answer two
 * different questions that a flag kept collapsing: "does the organization now own
 * numbers this response does not list", and "is a purchase with this key still
 * running". A client that cannot separate them either tells an admin nothing was
 * bought when it was, or retires an idempotency key that is still fencing a live
 * purchase — both of which end in a second set of recurring charges.
 */
export type DialingPoolPurchaseFailureKind =
  /**
   * The numbers were bought and are listed in `addedLines`, but adding them to the
   * rotation failed. They are owned and on the Numbers list; the rotation is what
   * is missing.
   */
  | 'BOUGHT_NOT_ENROLLED'
  /**
   * The numbers were bought and this response CANNOT list them — the read after
   * the purchase failed. Never present this as "we couldn't buy those numbers":
   * the organization has been billed.
   */
  | 'BOUGHT_NOT_SHOWN'
  /**
   * Nothing was bought. The provider had no inventory, or refused before any
   * purchase completed. Safe to present as a plain failure, and safe to try again
   * as a NEW purchase.
   */
  | 'NOTHING_BOUGHT'
  /**
   * A purchase carrying this key is still running, or died mid-flight and its
   * outcome was never recorded. Nothing here is final.
   *
   * THE CALLER MUST KEEP ITS KEY. Retiring it releases the only fence around the
   * live purchase, so a retry would arrive under a new key, miss the reservation
   * and buy a second set while the first was still completing.
   */
  | 'STILL_IN_PROGRESS';

export type DirectMailConnectionAuthHealth =
  | 'HEALTHY'
  | 'INVALID_CREDENTIALS'
  | 'UNAVAILABLE'
  | 'UNVERIFIED';

export type DirectMailConnectionMode =
  | 'LIVE'
  | 'TEST';

export type DirectMailConnectionState =
  | 'ACTIVE'
  | 'DISCONNECTED'
  | 'PENDING_VERIFICATION';

export type DirectMailPieceDisplayState =
  | 'CANCELED'
  | 'DELIVERED'
  | 'FAILED'
  | 'IN_TRANSIT'
  | 'MAILED'
  | 'NEAR_DELIVERY'
  | 'NOT_SUBMITTED'
  | 'PRODUCING'
  | 'QUEUED'
  | 'RETURNED'
  | 'RE_ROUTED'
  | 'SCHEDULED'
  | 'SUBMISSION_UNKNOWN'
  | 'SUBMITTED'
  | 'SUBMITTING';

/** The mail vendors an organization can connect with its own account. */
export type DirectMailProvider =
  | 'LOB'
  | 'OPEN_LETTER_CONNECT'
  | 'POSTGRID';

export type DuplicateContactMatch =
  | 'NAME'
  | 'NAME_AND_CONTACT_INFO';

export type EditSpaceSheetCellsInput = {
  /** Rows added under the sheet's last filled row, from column A. */
  appendRows?: InputMaybe<Array<Array<Scalars['String']['input']>>>;
  /** The versionId the cells were read from; refused if someone saved since. */
  baseVersionId: Scalars['ID']['input'];
  edits?: InputMaybe<Array<SpaceSheetCellEdit>>;
  itemId: Scalars['ID']['input'];
  /** Default: the first visible sheet. */
  sheet?: InputMaybe<Scalars['String']['input']>;
};

export type EditSpaceTextLinesInput = {
  /** The versionId the line numbers were read from; refused if someone saved since. */
  baseVersionId: Scalars['ID']['input'];
  /** Applied together as one new version; ranges may not overlap. */
  edits: Array<SpaceTextLineEdit>;
  itemId: Scalars['ID']['input'];
};

/** When a user's notification email digest goes out (INT-12217). */
export type EmailDigestCadence =
  /** Five minutes after the first notification it collects. */
  | 'AS_IT_HAPPENS'
  /** Once each morning in the user's own timezone, with everything since the last one. */
  | 'DAILY';

export type EmailProvider =
  | 'GMAIL'
  | 'OUTLOOK';

export type EmbedFormAssigneeCalendarInput = {
  checkExternalCalendars: Scalars['Boolean']['input'];
  isFixed: Scalars['Boolean']['input'];
};

export type EmbedFormAssigneeInput = {
  /** Calendar overlay. Required on calendar forms; absent otherwise. */
  calendarConfig?: InputMaybe<EmbedFormAssigneeCalendarInput>;
  userId: Scalars['ID']['input'];
};

export type EmbedFormAssignmentConfigInput = {
  /**
   * Array order = rotation order (RotationService cursor stability depends on
   * stable caller-supplied pool ordering). Size 1 = always-this-user. Size > 1
   * = LRB round-robin.
   */
  assignees: Array<EmbedFormAssigneeInput>;
  /** User ids attached as PARTICIPANT on every created/matched contact. */
  participantUserIds: Array<Scalars['ID']['input']>;
  /** UserGroup ids added to every created/matched contact (source: 'FORM'). */
  teamIds: Array<Scalars['ID']['input']>;
};

export type EmbedFormDedupeField =
  | 'EMAIL'
  | 'PHONE';

export type EmbedFormOwnerType =
  | 'ORG'
  | 'USER';

export type EmbedFormStatus =
  | 'ACTIVE'
  | 'DRAFT'
  | 'INACTIVE';

/**
 * Where an EVENT workflow's example payload came from. WEBHOOK: captured from a
 * real POST to the workflow's inbound endpoint. PASTED: typed into the editor by
 * an author with no traffic yet. RUN: recovered from a past run's stored input —
 * read-only history, shown when the capture buffer predates the delivery.
 */
export type EventWorkflowPayloadSampleSource =
  | 'PASTED'
  | 'RUN'
  | 'WEBHOOK';

export type ExternalAgentTurnStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILED'
  | 'RUNNING'
  | 'WAITING_FOR_CALLER';

export type ExternalFeedbackKind =
  | 'BUG'
  | 'FEATURE_REQUEST'
  | 'QUESTION';

export type ExternalFeedbackStatus =
  | 'ADDED'
  | 'FAILED'
  | 'FILED';

export type FileProcessingTaskStatus =
  | 'AUTHORING_TRANSFORMER'
  | 'CANCELLED'
  | 'COMPLETED'
  | 'CREATED'
  | 'FAILED'
  | 'NOT_ENOUGH_BALANCE'
  | 'PENDING_PROCESSING'
  | 'PENDING_REVIEW'
  | 'PROCESSING';

export type FileProcessingTaskType =
  | 'CAMPAIGN_CONTACTS'
  | 'CONTACTS'
  | 'PROPERTIES'
  | 'PROPERTY_SIGNALS'
  | 'SKIPTRACES';

export type FilterSpaceSheetInput = {
  columns: Array<SpaceSheetFilterColumn>;
  dropDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
  itemId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  repeat?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Default: the first visible sheet. */
  sheet?: InputMaybe<Scalars['String']['input']>;
  versionId?: InputMaybe<Scalars['ID']['input']>;
  where?: InputMaybe<Array<SpaceSheetFilterCondition>>;
};

export type FilterType =
  | 'CONTACT'
  | 'DEAL'
  | 'ENTITY'
  | 'ORGANIZATION'
  | 'OWNER'
  | 'PERSON'
  | 'PIPELINE_ITEM'
  | 'POST'
  | 'PROPERTY'
  | 'USER';

/**
 * A thing that can live in a folder. One entry per foldable table.
 *
 * Not every kind can do everything: only FILTER can be private (and therefore
 * live in a personal folder), and TEMPLATE has no display order and so cannot be
 * reordered. The server refuses those rather than accepting them silently.
 */
export type FoldableKind =
  | 'CONTACT_LIST'
  | 'FILTER'
  | 'FORM'
  | 'LIBRARY_FILE'
  | 'PROPERTY_LIST'
  | 'TEMPLATE'
  | 'WORKFLOW_GROUP';

/**
 * One item, named by what it is and which row it is. Ids are only unique within a
 * kind — `Tag` and `ContactTag` are different tables — so the kind is not
 * decoration, it is half the identity.
 */
export type FolderItemRef = {
  id: Scalars['ID']['input'];
  kind: FoldableKind;
};

/**
 * The surface a folder appears on. The first nine are 1:1 with `FilterType` — a
 * folder there holds that surface's saved filters, and on PROPERTY / CONTACT its
 * lists as well. Scope is the SURFACE, not the item kind.
 */
export type FolderScope =
  | 'CONTACT'
  | 'DEAL'
  | 'ENTITY'
  | 'FORM'
  | 'LIBRARY'
  | 'ORGANIZATION'
  | 'OWNER'
  | 'PERSON'
  | 'PIPELINE_ITEM'
  | 'POST'
  | 'PROPERTY'
  | 'USER'
  | 'WORKFLOW';

export type ImportContactInput = {
  /**
   * The contact's fields, in the same shape the ordinary createContact mutation
   * accepts.
   */
  contact: CreateContactInput;
  /**
   * When the record was created in the source system. Must be in the past (any
   * time since 1970). Omitted = now.
   */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The record's id in the source system. At most 256 characters. Part of the
   * idempotency key: importing the same (sourceSystem, externalId) twice returns
   * the existing contact.
   */
  externalId: Scalars['String']['input'];
  /**
   * Short slug identifying the system this record came from (e.g. "resimpli",
   * "podio"). Lowercase letters, digits, and hyphens only, at most 32 characters.
   * Part of the idempotency key.
   */
  sourceSystem: Scalars['String']['input'];
  /**
   * When the record was last updated in the source system. Must be in the past
   * and not before createdAt; requires createdAt to be provided as well (an
   * omitted createdAt means "now", which would put the update before creation).
   */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ImportContactNoteInput = {
  /**
   * The organization member the note is attributed to. Must be an existing user
   * of the importing organization — historical notes whose author is no longer a
   * member should be attributed to whoever owns the migration, with the original
   * author named in the body.
   */
  authorUserId: Scalars['ID']['input'];
  /**
   * The note text, at most 20,000 characters. Stored verbatim as a normal note
   * body.
   */
  body: Scalars['String']['input'];
  contactId: Scalars['ID']['input'];
  /**
   * When the note was written in the source system. Must be in the past. The
   * note interleaves into the contact timeline at this position. Omitted = now.
   */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The note's id in the source system. At most 256 characters. Part of the
   * idempotency key: importing the same (sourceSystem, externalId) twice returns
   * the existing note.
   */
  externalId: Scalars['String']['input'];
  /** Internal notes are hidden from shared-contact viewers. Defaults to false. */
  isInternal?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Optional structured provenance from the source system (e.g. an Aircall call
   * id), stored on the note as data instead of being folded into the body text.
   * Must be a JSON object (not an array or scalar) nesting at most 2 levels
   * deep, serializing to at most 4,096 bytes, with no control characters in keys
   * or string values. Written once at creation: replaying the same
   * (sourceSystem, externalId) returns the existing note with its ORIGINAL
   * metadata — a replay never overwrites it.
   */
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Short slug identifying the system this record came from. Lowercase letters,
   * digits, and hyphens only, at most 32 characters. Part of the idempotency key.
   */
  sourceSystem: Scalars['String']['input'];
};

export type ImportPipelineItemInput = {
  /**
   * When the record was created in the source system. Must be in the past (any
   * time since 1970). Omitted = now.
   */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** @deprecated Renamed to pipelineItem (pipelines WS5, INT-13330). */
  deal?: InputMaybe<CreatePipelineItemInput>;
  /**
   * The record's id in the source system. At most 256 characters. Part of the
   * idempotency key: importing the same (sourceSystem, externalId) twice returns
   * the existing deal.
   */
  externalId: Scalars['String']['input'];
  /**
   * The deal's fields, in the same shape the ordinary createDeal mutation
   * accepts (stageId from listPipelineStages; contacts/properties/users linked
   * by id; customFieldValues from listDealCustomFields).
   */
  pipelineItem?: InputMaybe<CreatePipelineItemInput>;
  /**
   * Short slug identifying the system this record came from (e.g. "resimpli",
   * "podio"). Lowercase letters, digits, and hyphens only, at most 32 characters.
   * Part of the idempotency key.
   */
  sourceSystem: Scalars['String']['input'];
  /**
   * When the record was last updated in the source system. Must be in the past
   * and not before createdAt; requires createdAt to be provided as well (an
   * omitted createdAt means "now", which would put the update before creation).
   * Also stamps the deal's stage-entry timestamp (lastStageChangeAt): source
   * systems don't export per-stage move history, so the deal is recorded as
   * sitting in its stage since updatedAt — falling back to createdAt, then to
   * the import time when neither is provided.
   */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

/**
 * How promote treats the superseded version's in-flight runs. PAUSE holds them
 * there; MIGRATE (and LET_FINISH, run as MIGRATE) moves them to the new version.
 */
export type InFlightRunsStrategy =
  | 'LET_FINISH'
  | 'MIGRATE'
  | 'PAUSE';

/**
 * What the workspace inbox shows a VIEW_ALL_PHONES holder who has not chosen for
 * themselves. See `Organization.inboxDefaultView`.
 */
export type InboxDefaultView =
  /** The viewer's own lines. The behavior every organization has before choosing. */
  | 'INDIVIDUAL'
  /**
   * Every inbox-eligible line in the organization — texts and calls. Email stays
   * per-mailbox. Widens nothing for a member without VIEW_ALL_PHONES.
   */
  | 'TEAM';

export type InboxFilterType =
  | 'ALL'
  | 'CALLS'
  | 'EMAILS'
  | 'MESSAGES'
  | 'MISSED_CALLS'
  | 'NEEDS_RESPONSE'
  | 'UNRESPONDED';

export type InboxItemType =
  | 'CALL'
  | 'EMAIL'
  | 'MESSAGE';

export type InboxOptedOutScope =
  | 'EXCLUDE'
  | 'INCLUDE'
  | 'ONLY';

export type InboxSentBy =
  | 'AI_EMPLOYEE'
  | 'HUMAN'
  | 'WORKFLOW';

export type InsertSpaceTextLinesInput = {
  /** The versionId the line numbers were read from; refused if someone saved since. */
  baseVersionId: Scalars['ID']['input'];
  insertions: Array<SpaceTextLineInsertion>;
  itemId: Scalars['ID']['input'];
};

export type InteractionKind =
  | 'BRIEF'
  | 'CALL_SUMMARY'
  | 'CALL_TRANSCRIPT'
  | 'EMAIL'
  | 'MEETING'
  | 'NOTE'
  | 'TEXT_DAY';

export type ManualSkipTraceRequestInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  ownerFirstName?: InputMaybe<Scalars['String']['input']>;
  ownerFullName?: InputMaybe<Scalars['String']['input']>;
  ownerLastName?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type MemoryEntryAuthorInput = {
  /** Default PERSON. */
  kind?: InputMaybe<MemoryEntryAuthorKind>;
  name?: InputMaybe<Scalars['String']['input']>;
  /** The member who said it, if one did. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type MemoryEntryAuthorKind =
  /** The source's own system (a drip text, an automated note): a MESSAGE, EMAIL or NOTE it wrote is context, never your people's words. A summary is judged by the conversation it records instead. */
  | 'AUTOMATION'
  | 'PERSON';

/** Who a message or email went from; for a call, who placed it. */
export type MemoryEntryDirection =
  | 'FROM_ACCOUNT'
  | 'TO_ACCOUNT';

/** Why an entry was refused. */
export type MemoryEntryExclusionReason =
  /** Nothing left once redacted. */
  | 'EMPTY'
  | 'HIDDEN'
  | 'INTERNAL_NOTE'
  | 'SCHEDULING_EMAIL';

export type MemoryEntryInput = {
  author?: InputMaybe<MemoryEntryAuthorInput>;
  /** Required for MESSAGE, EMAIL and CALL_SUMMARY; ignored otherwise. */
  direction?: InputMaybe<MemoryEntryDirection>;
  durationSeconds?: InputMaybe<Scalars['Int']['input']>;
  /** Your id for the record (at most 256 characters); sending it again adds nothing. */
  externalId: Scalars['String']['input'];
  /** The source hid it: refused. */
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  kind: MemoryEntryKind;
  /** When it was said; in the past. */
  occurredAt: Scalars['DateTime']['input'];
  /** The source's name, e.g. Zendesk (at most 80 characters). */
  sourceLabel: Scalars['String']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
  /** At most 50,000 characters. */
  text: Scalars['String']['input'];
};

export type MemoryEntryKind =
  /** A recap of a minute or longer is a conversation, so it counts as the organization's words whoever wrote the recap or placed the call. */
  | 'CALL_SUMMARY'
  | 'EMAIL'
  /** Holds both sides of a meeting, so it counts as the organization's words whoever wrote the recap. */
  | 'MEETING_SUMMARY'
  | 'MESSAGE'
  /** Only the source's own system's; a person's typed note is refused. */
  | 'NOTE';

export type MoveSpaceItemsInput = {
  destination: SpaceDestinationInput;
  itemIds: Array<Scalars['ID']['input']>;
};

export type OrgPartnershipStatus =
  | 'ACTIVE'
  | 'PENDING'
  | 'TERMINATED';

/** The honest "no" cases. Each one names a different remedy. */
export type OrgTextingBlockedReason =
  /**
   * The carriers REJECTED the campaign. Not a wait: the org fixes it in its own
   * Twilio account and resubmits.
   */
  | 'BYO_CAMPAIGN_REJECTED'
  /** The campaign exists and the carriers have not approved it yet. */
  | 'BYO_CARRIER_REVIEWING'
  /**
   * The connection itself is not usable — disabled by support, or its credentials
   * were rejected. The campaign may be perfectly approved; what is missing is the
   * credential every send needs.
   */
  | 'BYO_CONNECTION_UNUSABLE'
  /** Connected, but the account carries no A2P campaign to send through. */
  | 'BYO_NO_CAMPAIGN'
  /** The account has several campaigns and none has been chosen. */
  | 'BYO_SEVERAL_CAMPAIGNS'
  /**
   * The managed registration is FAILED or CLOSED — a dead end, which is exactly why
   * connecting the org's own Twilio account is re-allowed from here.
   */
  | 'MANAGED_FAILED'
  /**
   * The managed registration is submitted and sitting in GOLIATH's own review — no
   * carrier has seen it yet. Nothing to do but wait, like MANAGED_IN_PROGRESS, and
   * separate from it only so a surface can say "we're reviewing your registration"
   * instead of "with the carriers" while that is the true sentence.
   */
  | 'MANAGED_GOLIATH_REVIEW'
  /** The managed registration is with the provider and the carriers; nothing to do but wait. */
  | 'MANAGED_IN_PROGRESS'
  /** Neither pipeline started; both entry points are still open to this org. */
  | 'NO_REGISTRATION';

export type OrganizationBillingStatus =
  | 'ACTIVE'
  | 'NEGATIVE'
  | 'NONE'
  | 'TRIALING';

export type OrganizationCapability =
  | 'CAN_EXPORT'
  | 'CAN_MANAGE_SPENDING'
  | 'CAN_SKIPTRACE'
  | 'CAN_USE_API_KEYS'
  | 'CAN_USE_AUTOMATIONS'
  | 'CAN_USE_COMPUTER'
  | 'CAN_USE_FILES'
  | 'CAN_USE_MARKETPLACE'
  | 'CAN_WORKFLOW'
  | 'CONTRACTS_MANAGE'
  | 'CONTRACTS_VIEW'
  | 'VIEW_ALL_CONTACTS'
  | 'VIEW_ALL_DEALS'
  | 'VIEW_ALL_PHONES'
  | 'VIEW_ALL_PIPELINE_ITEMS'
  | 'VIEW_ORGANIZATION_SETTINGS'
  | 'VIEW_TEAM_CALENDARS'
  | 'VIEW_TEAM_CALLS_TEXTS'
  | 'VIEW_TEAM_DIRECTORY';

export type OrganizationMembershipStatus =
  | 'ACTIVE'
  | 'SUSPENDED';

/** Who contact suggestion cards go to. */
export type OrganizationSuggestionAudience =
  /** The contact's point person; the whole team when it has none. */
  | 'POINT_PERSON'
  /** Everyone who can see the contact (the default). */
  | 'WHOLE_TEAM';

export type OrganizationToUserMappingType =
  | 'ADMIN'
  | 'MEMBER';

export type PartnershipDirection =
  /** Both directions active. */
  | 'BIDIRECTIONAL'
  /** Partner org sends leads to current org only. */
  | 'RECEIVE_ONLY'
  /** Current org sends leads to partner org only. */
  | 'SEND_ONLY';

/** The lifecycle state of an organization's provider connection. */
export type PhoneEnrichmentConnectionStatus =
  | 'ACTIVE'
  | 'NOT_CONNECTED'
  | 'REVOKED'
  | 'UNVERIFIED';

export type PhoneType =
  | 'LANDLINE'
  | 'MOBILE'
  | 'RESIDENTIAL'
  | 'UNKNOWN';

export type PipelineItemActivityEventType =
  | 'ASSIGNED'
  | 'CLOSE_DATE_CHANGED'
  | 'COMMENT'
  | 'COMMISSION_CHANGED'
  | 'CONTACT_LINKED'
  | 'CONTACT_UNLINKED'
  | 'CONTRACT_EVENT'
  | 'DEAL_ARCHIVED'
  | 'DEAL_CREATED'
  | 'DEAL_RESTORED'
  | 'FILE_ADDED'
  | 'FILE_REMOVED'
  | 'PIPELINE_ITEM_ARCHIVED'
  | 'PIPELINE_ITEM_CREATED'
  | 'PIPELINE_ITEM_RESTORED'
  | 'SCRAPER_HEALTH_MOVED'
  | 'STAGE_CHANGED'
  | 'TASK_ADDED'
  | 'TASK_COMPLETED'
  | 'TEAM_SPLIT_CHANGED'
  | 'UNASSIGNED'
  | 'VALUE_CHANGED';

/** A checkbox field's card color when checked. */
export type PipelineItemCustomFieldTone =
  | 'DENIM'
  | 'INDIGO'
  | 'KHAKI'
  | 'MAUVE'
  | 'OCHRE'
  | 'OLIVE'
  | 'PLUM'
  | 'PURPLE'
  | 'RUST'
  | 'SAGE'
  | 'SLATE'
  | 'STEEL'
  | 'TAUPE'
  | 'TEAL'
  | 'TERRACOTTA';

export type PipelineItemCustomFieldType =
  /** Yes/no. A checked box is the value true; an unchecked one has no value. */
  | 'CHECKBOX'
  | 'DATE'
  | 'DOLLAR'
  | 'DROPDOWN'
  | 'LINK'
  | 'NUMBER'
  | 'TEXT';

export type PipelineItemCustomFieldValueInput = {
  /** CHECKBOX: true checks; false or null unchecks. */
  booleanValue?: InputMaybe<Scalars['Boolean']['input']>;
  customFieldId: Scalars['ID']['input'];
  dateValue?: InputMaybe<Scalars['DateTime']['input']>;
  dropdownSelectedValues?: InputMaybe<Array<Scalars['String']['input']>>;
  numberValue?: InputMaybe<Scalars['Float']['input']>;
  textValue?: InputMaybe<Scalars['String']['input']>;
};

export type PipelineItemLayoutTabInput = {
  fieldReferences: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type PipelineItemMutationInput = {
  closeDate?: InputMaybe<Scalars['DateTime']['input']>;
  commissionAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  commissionPercentBps?: InputMaybe<Scalars['Int']['input']>;
  contactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFieldValues?: InputMaybe<Array<PipelineItemCustomFieldValueInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  participantSplits?: InputMaybe<Array<PipelineItemParticipantSplitInput>>;
  priceCents?: InputMaybe<Scalars['BigInt']['input']>;
  propertyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  propertyStrings?: InputMaybe<Array<Scalars['String']['input']>>;
  stageId?: InputMaybe<Scalars['ID']['input']>;
  teamSplitAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  teamSplitPercentBps?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type PipelineItemOutcomeFilter =
  | 'LOST'
  | 'OPEN'
  | 'WON';

export type PipelineItemParticipantSplitInput = {
  splitAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  splitPercentBps?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};

export type PipelineItemTaskType =
  | 'APPOINTMENT'
  | 'TASK';

export type PipelineItemType =
  | 'BUYER'
  | 'INVESTMENT'
  | 'LISTING'
  | 'UNDETERMINED';

export type PipelineStageCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isTerminal?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Float']['input']>;
  terminalType?: InputMaybe<PipelineStageTerminalType>;
  winProbability?: InputMaybe<Scalars['Int']['input']>;
};

export type PipelineStageTerminalType =
  | 'LOST'
  | 'NEUTRAL'
  | 'WON';

export type PlanCode =
  | 'GROWTH'
  | 'RAMP'
  | 'SCALE';

/**
 * The subject to resolve a Workflow Table against. At least one record is required.
 * The lookup derives what a table's keys need from what is given, exactly as a run
 * does: a property in hand wins for property-keyed tables, and a deal or appointment
 * reaches its linked properties and contacts.
 */
export type PreviewWorkflowTableLookupInput = {
  /** An appointment (a task) with a contact or deal of the viewer's organization. Any other is refused. */
  appointmentId?: InputMaybe<Scalars['ID']['input']>;
  /** A contact in the viewer's organization. Any other contact is refused. */
  contactId?: InputMaybe<Scalars['ID']['input']>;
  /** @deprecated Renamed to pipelineItemId (pipelines WS5, INT-13330). */
  dealId?: InputMaybe<Scalars['ID']['input']>;
  /** A deal on a pipeline the viewer's organization can reach. Any other deal is refused. */
  pipelineItemId?: InputMaybe<Scalars['ID']['input']>;
  /** A property id as the wire carries it (an esId). */
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  workflowTableId: Scalars['ID']['input'];
};

export type PropertyComparablesCriteriaInput = {
  bathroomsMax: Scalars['Float']['input'];
  bathroomsMin: Scalars['Float']['input'];
  bedroomsMax: Scalars['Int']['input'];
  bedroomsMin: Scalars['Int']['input'];
  includeActiveListings?: InputMaybe<Scalars['Boolean']['input']>;
  livingAreaMax: Scalars['Int']['input'];
  livingAreaMin: Scalars['Int']['input'];
  maxDistanceMiles: Scalars['Float']['input'];
  maxSaleAgeMonths: Scalars['Int']['input'];
  ownerType?: InputMaybe<Scalars['String']['input']>;
  propertyTypes: Array<Scalars['String']['input']>;
  yearBuiltMax: Scalars['Int']['input'];
  yearBuiltMin: Scalars['Int']['input'];
};

export type PropertyCrmContactMatch =
  /** An address on the contact that never resolved to a property has this property's street and ZIP. */
  | 'ADDRESS'
  /** The contact's row points at this property. */
  | 'LINK';

export type PropertyCrmContactRelation =
  | 'FORMER_OWNER'
  | 'MAILING'
  | 'OWNS'
  | 'RELATED_TO_OWNER';

export type PropertyMlsStatus =
  | 'FORECLOSED'
  | 'FOR_RENT'
  | 'FOR_SALE'
  | 'NOT_ON_MARKET'
  | 'OTHER'
  | 'PENDING'
  | 'PRE_FORECLOSURE'
  | 'RECENTLY_SOLD'
  | 'SOLD';

export type PropertySignalType =
  | 'ABSENTEE_OWNER'
  | 'ARREST'
  | 'ASSIGNMENT'
  | 'BANKRUPTCY'
  | 'CITATION'
  | 'CODE_VIOLATION'
  | 'CONTINUING_LIEN'
  | 'COUNTY_LIEN'
  | 'DEBT_CLAIMS'
  | 'DIVORCE'
  | 'ENFORCEMENT_COMPLAINT'
  | 'EVICTION'
  | 'FEDERAL_LIEN'
  | 'FINAL_JUDGMENT'
  | 'FIRE'
  | 'FORECLOSURE'
  /**
   * A municipal foreclosure-registration filing (Sec. 18-153 and equivalents):
   * evidence a foreclosure is under way, but not the pre-foreclosure instrument,
   * so it counts toward no benchmark family (INT-8098).
   */
  | 'FORECLOSURE_REGISTRATION'
  | 'FOR_RENT_BY_OWNER'
  | 'FOR_RENT_BY_OWNER_FAILED'
  | 'FOR_SALE_BY_OWNER'
  | 'FOR_SALE_BY_OWNER_FAILED'
  | 'HOA_LIEN'
  | 'INSPECTION_FAILURE'
  | 'IRRELEVANT'
  | 'JUDGMENT_LIEN'
  | 'LIEN'
  | 'LIEN_SALE'
  | 'LISTING_FAILED'
  | 'LIS_PENDENS'
  | 'MARRIAGE'
  | 'MECHANIC_LIEN'
  | 'MEDICAL_LIEN'
  | 'MLS_FAILED'
  | 'NEGATIVE_EQUITY'
  | 'NOTICE_OF_COMMENCEMENT'
  | 'NOTICE_OF_DEFAULT'
  | 'PERMIT_FILING'
  | 'POLICE_INCIDENT'
  | 'PREFORECLOSURE'
  | 'PREPROBATE'
  | 'PROBATE'
  | 'PROPERTY_AUCTION'
  | 'PROPERTY_JUDGMENT'
  | 'QUIET_TITLE_ACTION'
  | 'QUIT_CLAIM_DEED'
  | 'SHERIFF_SALE'
  | 'STATE_LIEN'
  | 'SUBSTITUTION_OF_TRUSTEE'
  | 'TAX_DEED_SALE'
  | 'TAX_DELINQUENCY'
  | 'TAX_LIEN_SALE'
  | 'TENANT_COMPLAINT'
  | 'TRUST'
  | 'TRUSTEE_SALE'
  | 'UNKNOWN'
  | 'UTILITY_LIEN'
  | 'VACANT'
  | 'VIOLENT_CRIME';

export type PropertyType =
  | 'APARTMENT'
  | 'COMMERCIAL'
  | 'CONDO'
  | 'HOME_TYPE_UNKNOWN'
  | 'LOT'
  | 'MANUFACTURED'
  | 'MULTI_FAMILY'
  | 'SINGLE_FAMILY'
  | 'TOWNHOUSE';

export type PublishSpacePageInput = {
  /** Who is making it: `DevSession_<sessionId>`, a dev session working for the key's owner. */
  actorGrn: Scalars['String']['input'];
  /** Any unique string, so a retry returns the page it already made. */
  creationKey?: InputMaybe<Scalars['String']['input']>;
  /** Where it lands; omitted, the key owner's own Pages folder. */
  destination?: InputMaybe<SpaceDestinationInput>;
  /** The whole HTML document. It runs under the strict page CSP: nothing loads from outside Goliath. */
  html: Scalars['String']['input'];
  /** The page's title; its file name is the title with .html. */
  title: Scalars['String']['input'];
};

export type ReorderAfterCallActionItemInput = {
  displayOrder: Scalars['Int']['input'];
  kind: AfterCallActionKind;
};

export type ReorderVoicemailTemplateItemInput = {
  displayOrder: Scalars['Int']['input'];
  id: Scalars['ID']['input'];
};

/**
 * Classification of an inbound reply's intent. Mirrors the Prisma `ReplySentiment`
 * enum 1:1. POSITIVE/NEUTRAL/NEGATIVE are the genuine-reply quality buckets;
 * OPT_OUT (a compliance event) and UNREACHABLE (wrong number / auto-reply / OOO)
 * are kept separate so they never fold into "negative".
 */
export type ReplySentiment =
  | 'NEGATIVE'
  | 'NEUTRAL'
  | 'OPT_OUT'
  | 'POSITIVE'
  | 'UNREACHABLE';

export type RingPolicyAiRotation =
  | 'ROUND_ROBIN'
  | 'SINGLE';

export type RingPolicyAiStageInput = {
  agentIds: Array<Scalars['ID']['input']>;
  rotation: RingPolicyAiRotation;
};

export type RingPolicyHumanStageInput = {
  areaCodeForwardingMap?: InputMaybe<Scalars['JSON']['input']>;
  externalE164?: InputMaybe<Scalars['String']['input']>;
  ownerlessStep?: InputMaybe<RingPolicyOwnerlessStepInput>;
  phoneLineIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ringAllTeamMembers?: InputMaybe<Scalars['Boolean']['input']>;
  ringSeconds: Scalars['Int']['input'];
  schedule?: InputMaybe<ContactAgentCallScheduleInput>;
  specificUserId?: InputMaybe<Scalars['ID']['input']>;
  targetKind: CallRoundRobinTargetKind;
  userGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export type RingPolicyInput = {
  aiStage?: InputMaybe<RingPolicyAiStageInput>;
  humanStage?: InputMaybe<RingPolicyHumanStageInput>;
};

export type RingPolicyOwnerlessStepInput = {
  externalE164?: InputMaybe<Scalars['String']['input']>;
  phoneLineIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  specificUserId?: InputMaybe<Scalars['ID']['input']>;
  targetKind: CallRoundRobinTargetKind;
  userGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export type RingPolicyPickupBlockedReason =
  | 'INVALID_SETUP'
  | 'NO_CALL_CHANNEL'
  | 'NO_VOICE_SHELL'
  | 'PAUSED';

export type SaveSpaceTextFileInput = {
  /** The version the editor started from; a save over someone else's newer one is refused. */
  baseVersionId?: InputMaybe<Scalars['ID']['input']>;
  content: Scalars['String']['input'];
  /**
   * The open editor's session id. While the same person keeps saving from one session (saves no
   * more than 10 minutes apart), each save replaces that session's version instead of adding one.
   */
  editSessionId?: InputMaybe<Scalars['ID']['input']>;
  itemId: Scalars['ID']['input'];
};

export type SaveWorkflowTableCellInput = {
  columnId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};

export type SaveWorkflowTableColumnInput = {
  /** Null creates a new column. An unknown id is rejected. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Ignored on an existing column. A column's kind is what its stored values mean,
   * so changing it would reinterpret every row at once.
   */
  kind: WorkflowTableColumnKind;
  name: Scalars['String']['input'];
  /**
   * The complete choice set for a `SELECT` column, in the order to present it.
   * Required there and refused on every other kind.
   *
   * Unlike `kind`, this IS editable after the column exists: adding a choice, or
   * renaming one, reinterprets nothing — a cell stores the choice's `value`, and a
   * `value` that disappears leaves its cells readable and merely unpickable.
   */
  options?: InputMaybe<Array<WorkflowTableColumnOptionInput>>;
};

/**
 * Creates a table when `workflowTableId` is null, otherwise replaces that table's
 * name, description and COLUMN SET. Rows are saved separately — see
 * `saveWorkflowTableRows` — because the editor saves a grid of rows at once and
 * should not have to resend every row to rename a column.
 */
export type SaveWorkflowTableInput = {
  /**
   * The complete column set, in the order given. A column absent from this list is
   * DELETED along with its values on every row — and a delete is refused outright
   * while a workflow step or a message body still names that column, unless
   * `dependencyResolution` carries a replacement for it.
   */
  columns: Array<SaveWorkflowTableColumnInput>;
  /**
   * How to repoint everything that names a column this save deletes. Required only
   * when the save actually removes a column that has dependents; the deletion
   * impact dialog is what produces it.
   */
  dependencyResolution?: InputMaybe<DependencyResolutionInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optimistic-concurrency token: the table's `updatedAt` as the editor loaded it.
   * When provided and the row has changed since, the save is refused with CONFLICT
   * rather than replacing whatever the other editor committed. Omit only on create,
   * where there is nothing to conflict with.
   */
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Required when `keyKind` is `FIELD_PATH`: the BUILT-IN contact, deal or appointment
   * variable rows are keyed on, such as `contactPropertyCity` or `dealTitle`. A custom
   * field, a property variable and the refused deal and appointment variables are
   * rejected — see `WorkflowTable.keyFieldPath`. Ignored for every
   * other kind, and ignored on update like `keyKind`.
   */
  keyFieldPath?: InputMaybe<Scalars['String']['input']>;
  /**
   * Fixed at creation and ignored on update: re-keying a table would silently
   * invalidate every row's key, and the honest way to do that is a new table.
   */
  keyKind: WorkflowTableKeyKind;
  /**
   * The fallback chain, composite and ranged keys — see `WorkflowTable.keyShape`.
   * Optional: absent means the single exact key `keyKind` / `keyFieldPath` name.
   *
   * On create, its first part must be that same key. On update it may ADD fallback
   * levels, and change or remove a fallback level that holds no rows; a change to
   * the first level, or to a level that has rows, is refused, because it would
   * reinterpret every one of those rows' keys at once. Absent on update leaves the
   * shape as it is.
   */
  keyShape?: InputMaybe<WorkflowTableKeyShapeInput>;
  name: Scalars['String']['input'];
  /** Null creates a new table. */
  workflowTableId?: InputMaybe<Scalars['ID']['input']>;
};

export type SaveWorkflowTableRowInput = {
  /**
   * Values by column. A column absent here, or present with an empty string, holds
   * no value for this row.
   */
  cells: Array<SaveWorkflowTableCellInput>;
  /** Null creates a new row. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /**
   * At most one row per table may be the default, counting rows this call is not
   * touching.
   */
  isDefault: Scalars['Boolean']['input'];
  /**
   * For a `COUNTY_FIPS` table, exactly 5 digits. Ignored when `keyParts` is given —
   * the key is then derived from the parts.
   */
  key: Scalars['String']['input'];
  keyLabel?: InputMaybe<Scalars['String']['input']>;
  /** Which level of the table's `keyShape` the row belongs to. Absent means the primary level. */
  keyLevel?: InputMaybe<Scalars['Int']['input']>;
  /**
   * The row's key, one entry per part of its level, in order. Absent means `key` and
   * `keyLabel` as the single exact part, which is every table with one exact key.
   */
  keyParts?: InputMaybe<Array<WorkflowTableRowKeyPartInput>>;
};

/**
 * Upserts and deletes rows of one table in a single write, which is what the grid
 * does when a user saves.
 */
export type SaveWorkflowTableRowsInput = {
  /** Rows to delete, by id. */
  deleteRowIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Optimistic-concurrency token: the table's `updatedAt` as the editor loaded it.
   * When provided and the row has changed since, the save is refused with CONFLICT
   * rather than replacing whatever the other editor committed. Omit only on create,
   * where there is nothing to conflict with.
   */
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * Set when this save is one part of a CSV import. The part is labelled on its
   * history entry, and may carry at most 200 rows so the entry records every one.
   */
  importPart?: InputMaybe<WorkflowTableImportPartInput>;
  /** Rows to create or replace. A row is replaced whole, never merged. */
  rows?: InputMaybe<Array<SaveWorkflowTableRowInput>>;
  workflowTableId: Scalars['ID']['input'];
};

export type ScheduledTaskCadence =
  | 'ONE_OFF'
  | 'RECURRING';

export type ScheduledTaskStatus =
  | 'ACTIVE'
  | 'EXHAUSTED'
  | 'PAUSED'
  | 'PAUSED_ERRORS';

export type ScheduledTaskTimingInput = {
  cronExpression?: InputMaybe<Scalars['String']['input']>;
  fireAt?: InputMaybe<Scalars['DateTime']['input']>;
  timezone: Scalars['String']['input'];
};

export type SendEmailFailureReason =
  | 'ATTACHMENTS_TOO_LARGE'
  | 'CONTACT_DO_NOT_CONTACT'
  | 'EMAIL_REPLY_IN_PROVIDER'
  | 'INVALID_SENDER'
  | 'MAILBOX_MISSING_SEND_SCOPE'
  | 'MAILBOX_SEND_NOT_GRANTED'
  | 'NO_CONNECTED_MAILBOX'
  | 'PROVIDER_SEND_FAILED'
  | 'PROVIDER_SEND_UNCERTAIN'
  | 'RECIPIENT_OPTED_OUT'
  | 'RECIPIENT_UNDELIVERABLE'
  | 'SENDER_NOT_THREAD_MAILBOX';

export type SetSpaceGrantInput = {
  itemId: Scalars['ID']['input'];
  /** Null stops sharing with them. */
  role?: InputMaybe<SpaceRole>;
  userId: Scalars['ID']['input'];
};

export type ShareContactAssignmentRole =
  | 'PARTICIPANT'
  | 'POINT_PERSON';

export type ShareContactUserAssignmentInput = {
  createTask?: InputMaybe<CreateTaskInput>;
  role: ShareContactAssignmentRole;
  userId: Scalars['ID']['input'];
};

export type SkipTraceStatus =
  | 'FAILED'
  | 'NOT_ENOUGH_BALANCE'
  | 'NO_RECORDS_FOUND'
  | 'PROCESSING'
  | 'RECORDS_FOUND';

/** SMS_STOP: texted STOP. SMS_REPLY_OPT_OUT: asked to stop in other words. CARRIER: carrier-reported. MANUAL: a teammate blocked it. */
export type SmsOptOutSource =
  | 'CARRIER'
  | 'IMPORT'
  | 'MANUAL'
  | 'OTHER'
  | 'SMS_REPLY_OPT_OUT'
  | 'SMS_STOP';

export type Sort = {
  direction: SortDirection;
  field: Scalars['String']['input'];
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type SpaceAccessMode =
  | 'INHERIT'
  | 'RESTRICTED';

/** Who can reach an item, in one word, for the share dialog's summary line. */
export type SpaceAudience =
  /** Everyone in the organization. */
  | 'ORGANIZATION'
  /** Only the space's owner (and anyone it is shared with). */
  | 'OWNER'
  /** Only the restricted folder's owner and the people it is shared with. */
  | 'RESTRICTED'
  /** Everyone in the organization, read-only: a Goliath process owns it. */
  | 'SYSTEM'
  /** Only the members of the team the space belongs to. */
  | 'TEAM';

/** Who made something: a person, an AI agent acting for one, or a Goliath process. */
export type SpaceCreatorKind =
  | 'AGENT'
  | 'PERSON'
  | 'SYSTEM';

export type SpaceDestinationInput = {
  /** Null for the space root. */
  folderId?: InputMaybe<Scalars['ID']['input']>;
  spaceId: Scalars['ID']['input'];
};

export type SpaceItemKind =
  | 'FILE'
  | 'FOLDER';

export type SpaceKind =
  | 'GROUP'
  | 'PERSONAL'
  | 'SYSTEM'
  | 'TEAM';

export type SpaceRole =
  | 'EDITOR'
  | 'MANAGER'
  | 'VIEWER';

/** Cells written right and down from `start`: a value, a formula (`=…`), or "" to clear the cell. */
export type SpaceSheetCellEdit = {
  /** The top-left cell, as B2. */
  start: Scalars['String']['input'];
  values: Array<Array<Scalars['String']['input']>>;
};

export type SpaceSheetFilterColumn = {
  as?: InputMaybe<Scalars['String']['input']>;
  column: Scalars['String']['input'];
};

export type SpaceSheetFilterCondition = {
  column: Scalars['String']['input'];
  operator: SpaceSheetFilterOperator;
  values?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SpaceSheetFilterOperator =
  | 'CONTAINS'
  | 'EMPTY'
  | 'EQUALS'
  | 'NOT_CONTAINS'
  | 'NOT_EMPTY'
  | 'NOT_EQUALS';

/**
 * One edit by the read version's line numbers: a range (startLine–endLine) replaced by `text` ("" deletes it) or moved
 * before `beforeLine`; or, with no range, `text` inserted before `beforeLine`.
 */
export type SpaceTextLineEdit = {
  /** Where a moved range or inserted lines go: before this line (the file's line count + 1 = the end). */
  beforeLine?: InputMaybe<Scalars['Int']['input']>;
  /** Last line of that range (inclusive). */
  endLine?: InputMaybe<Scalars['Int']['input']>;
  /** First line of the range to replace, delete or move. */
  startLine?: InputMaybe<Scalars['Int']['input']>;
  /** The range's new lines ("" deletes it), or the lines to insert. */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type SpaceTextLineInsertion = {
  /** The line the text goes before (1 = the top; the file's line count + 1 = the end). */
  beforeLine: Scalars['Int']['input'];
  /** One or more lines. */
  text: Scalars['String']['input'];
};

/** The Calls pills. MISSED is an incoming call nobody answered; INCOMING is every other incoming call. */
export type SpacesCallDirection =
  | 'INCOMING'
  | 'MISSED'
  | 'OUTGOING';

/** A teammate or an AI employee. Give one of the two. */
export type SpacesCallHandlerInput = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type SpacesCallsFilter = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  direction?: InputMaybe<SpacesCallDirection>;
  handledBy?: InputMaybe<SpacesCallHandlerInput>;
  /** Matches the contact's name. Transcripts are not searched: no index covers them. */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** Where a contact file came in. */
export type SpacesContactFileChannel =
  | 'EMAIL'
  | 'TEXT'
  | 'VOICEMAIL';

export type SpacesContactFilesFilter = {
  channel?: InputMaybe<SpacesContactFileChannel>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  /** Only files that came in after this moment. */
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  /** @deprecated Renamed to pipelineItemId (pipelines WS5, INT-13330). */
  dealId?: InputMaybe<Scalars['ID']['input']>;
  direction?: InputMaybe<SpacesRecordDirection>;
  /** Files from any contact on this deal. */
  pipelineItemId?: InputMaybe<Scalars['ID']['input']>;
  /** Matches the file name, the contact's name, or the words a texted file came with. */
  query?: InputMaybe<Scalars['String']['input']>;
};

/** What kind of thing a note is. */
export type SpacesMemoryNoteKind =
  | 'DECISION'
  | 'ENTITY'
  | 'FACT'
  | 'OBSERVATION'
  | 'PREFERENCE'
  | 'PROCEDURE'
  | 'PROGRESS'
  | 'RULE'
  | 'SUMMARY'
  | 'TRUST';

/** Whether a person said it, or Goliath worked it out. */
export type SpacesMemoryNoteOrigin =
  | 'DERIVED'
  | 'STATED';

/**
 * A shelf of the Library's Memory page (Memory v2): where a note lives. PERSON is a person's own
 * shelf ("You"); TEAM is the organization's. PROJECT is the dev fleet's, and opens
 * only to Goliath admins. A teammate's PERSON shelf opens to everyone, written only by them and Goliath admins.
 */
export type SpacesMemoryShelf =
  | 'CONTACT'
  | 'EMPLOYEE'
  | 'GROUP'
  | 'PERSON'
  | 'PROJECT'
  | 'TEAM';

/** Where a belief was learned, by kind of source. */
export type SpacesMemorySourceKind =
  /** An AI employee. */
  | 'AI_EMPLOYEE'
  /** A chat with Goliath. */
  | 'CHAT'
  /** An AI employee's conversation with a contact. */
  | 'CONTACT_CONVERSATION'
  /** Goliath worked it out itself. */
  | 'GOLIATH'
  /** A teammate told Goliath. */
  | 'TEAMMATE';

/** Which way a record moved, from the organization's side. */
export type SpacesRecordDirection =
  | 'RECEIVED'
  | 'SENT';

/** What a Spaces search hit is. */
export type SpacesSearchKind =
  | 'CONTRACT'
  | 'CONTRACT_TEMPLATE'
  | 'DOWNLOAD'
  | 'FILE'
  | 'FOLDER'
  | 'FORM'
  | 'PAGE'
  /** A file a contact sent or was sent (a text or email attachment, or a voicemail), from Records. */
  | 'RECORD'
  | 'TABLE'
  | 'TEMPLATE'
  | 'UPLOAD';

/** Where a Spaces search hit lives, as Spaces' rail groups it. */
export type SpacesSearchZone =
  | 'DATA'
  | 'FILES'
  | 'LIBRARY'
  | 'RECORDS';

export type StateEnum =
  | 'AK'
  | 'AL'
  | 'AR'
  | 'AS'
  | 'AZ'
  | 'CA'
  | 'CO'
  | 'CT'
  | 'DC'
  | 'DE'
  | 'FL'
  | 'GA'
  | 'GU'
  | 'HI'
  | 'IA'
  | 'ID'
  | 'IL'
  | 'IN'
  | 'KS'
  | 'KY'
  | 'LA'
  | 'MA'
  | 'MD'
  | 'ME'
  | 'MI'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MS'
  | 'MT'
  | 'NC'
  | 'ND'
  | 'NE'
  | 'NH'
  | 'NJ'
  | 'NM'
  | 'NV'
  | 'NY'
  | 'OH'
  | 'OK'
  | 'OR'
  | 'PA'
  | 'PR'
  | 'RI'
  | 'SC'
  | 'SD'
  | 'TN'
  | 'TT'
  | 'TX'
  | 'UT'
  | 'VA'
  | 'VI'
  | 'VT'
  | 'WA'
  | 'WI'
  | 'WV'
  | 'WY';

export type StopAiEmployeeRunsOutcome =
  /** No live run existed for this employee on this contact. */
  | 'NOTHING_RUNNING'
  /** At least one live run was told to stop; descendant sessions stop with it. */
  | 'STOP_REQUESTED';

export type SubContactMutationInput = {
  contactId: Scalars['String']['input'];
  emails?: InputMaybe<Array<CreateContactEmailInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  relation?: InputMaybe<Scalars['String']['input']>;
};

export type SubjectDismissReason =
  | 'ALREADY_DONE'
  | 'ESTATE_ALREADY_HANDLED'
  | 'KEPT_MINE'
  | 'NOT_MY_LEAD'
  | 'NOT_RELEVANT'
  | 'NO_LONGER_DISTRESSED'
  | 'OTHER'
  | 'SHOULDNT_MESSAGE'
  | 'STILL_OWNS'
  | 'WRONG_FACTS'
  | 'WRONG_PERSON'
  | 'WRONG_PROPERTY'
  | 'WRONG_TONE';

export type SuggestionDecisionVerb =
  | 'ACCEPT'
  | 'DISMISS';

/** The channel a value-level opt-out suppresses. SMS/VOICE take a phone value; EMAIL takes an email address. */
export type SuppressionMedium =
  | 'EMAIL'
  | 'SMS'
  | 'VOICE';

/**
 * One step of a TASK_SET template. `taskTemplateId` must name a TASK template in
 * the caller's organization — a TASK_SET is rejected (a set cannot contain a set).
 * The same template may appear more than once. The timing here WINS over the
 * referenced template's own `taskConfig` timing.
 */
export type TaskSetStepInput = {
  dueOffset: TaskTemplateRelativeDateOffsetInput;
  preferredTimeOfDay: TaskTemplateTimeOfDayInput;
  taskTemplateId: Scalars['ID']['input'];
};

export type TaskStatus =
  | 'FUTURE'
  | 'OVERDUE'
  | 'TODAY';

/**
 * Structured config for a TASK content template. The template's `bodyContent`
 * holds the task description and `name` is the template label; everything else
 * task-shaped lives here. Assignee is intentionally absent — an applied task
 * template is always assigned to the acting user at apply time.
 */
export type TaskTemplateConfigInput = {
  autoCompleteOnNoteAdded?: InputMaybe<Scalars['Boolean']['input']>;
  autoCompleteOnReassignment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Due date as a relative offset from apply time. */
  dueOffset: TaskTemplateRelativeDateOffsetInput;
  /** Time-of-day the resolved due date snaps to. */
  preferredTimeOfDay: TaskTemplateTimeOfDayInput;
  /** Free-text subtype label (maps to `Task.taskType`). */
  taskType?: InputMaybe<Scalars['String']['input']>;
  /** Task title. Rendered with merge fields + spintax against the contact at apply time. */
  title: Scalars['String']['input'];
};

export type TaskTemplateRelativeDateOffsetInput = {
  amount: Scalars['Int']['input'];
  unit: TaskTemplateRelativeTimeUnit;
};

export type TaskTemplateRelativeTimeUnit =
  | 'DAYS'
  | 'MONTHS'
  | 'WEEKS';

export type TaskTemplateTimeOfDayInput = {
  hour: Scalars['Int']['input'];
  minute: Scalars['Int']['input'];
  timezone: Timezone;
};

export type TextMessageStatus =
  | 'DELIVERED'
  | 'FAILED'
  | 'PENDING'
  | 'QUEUED'
  | 'SENDING'
  | 'SENT'
  | 'SKIPPED';

/**
 * Which line a CONTACT-SIDE text composer defaults to. See
 * `Organization.textReplyLinePolicy`.
 */
export type TextReplyLinePolicy =
  /**
   * The composer opens on the line the contact's most recent organization-wide
   * conversation lives on, so the contact keeps seeing one number. Falls back to
   * the sender's primary line when the contact has no prior conversation, or when
   * the winning line cannot currently send.
   *
   * This value also GRANTS PERMISSION: it lets an ordinary member send on a
   * teammate's line when a conversation with that exact destination already exists
   * there. Replies then land in the line owner's inbox, not the sender's.
   */
  | 'LAST_THREAD_LINE'
  /**
   * The composer opens on the sender's own primary sendable line, whatever number
   * the contact has been talking to. The behavior every organization had before
   * this setting existed.
   */
  | 'USER_PRIMARY_LINE';

export type Timezone =
  | 'AEST'
  | 'AKST'
  | 'AST'
  /** Arizona: MST all year, no DST. */
  | 'AZ'
  | 'AZOT'
  | 'BRT'
  | 'BST'
  | 'CET'
  | 'CST'
  | 'EET'
  | 'EST'
  | 'FNT'
  | 'GST'
  | 'HST'
  | 'ICT'
  | 'IDLW'
  | 'JST'
  | 'MSK'
  | 'MST'
  | 'NCT'
  | 'NZST'
  | 'PKT'
  | 'PST'
  | 'SST'
  | 'UTC';

export type TransformerAuthoringState =
  | 'ABSENT'
  | 'COMPLETED'
  | 'FAILED_RETRYABLE'
  | 'FAILED_TERMINAL'
  | 'IN_PROGRESS'
  | 'NOT_APPLICABLE'
  | 'STRANDED';

export type UpcomingAgentRunKind =
  | 'CRON'
  | 'FOLLOW_UP';

export type UpdateContactCustomFieldInput = {
  /** Preferred DATE value as a strict calendar day (YYYY-MM-DD). Do not combine with dateValue. */
  calendarDate?: InputMaybe<Scalars['String']['input']>;
  contactId: Scalars['String']['input'];
  customFieldId: Scalars['String']['input'];
  /** Legacy DATE compatibility input. Prefer calendarDate for new clients; do not combine both forms. */
  dateValue?: InputMaybe<Scalars['DateTime']['input']>;
  dropdownSelectedValues?: InputMaybe<Array<Scalars['String']['input']>>;
  numberValue?: InputMaybe<Scalars['Float']['input']>;
  textValue?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContactEmailInput = {
  id: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UpdateContactInput = {
  addCollaborators?: InputMaybe<Array<ContactCollaboratorInput>>;
  addEmails?: InputMaybe<Array<CreateContactEmailInput>>;
  addMailingAddresses?: InputMaybe<Array<CreateContactMailingAddressInput>>;
  addPhoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  addProperties?: InputMaybe<Array<CreateContactPropertyInput>>;
  addTagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  addToListIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  addUserGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  contactId: Scalars['String']['input'];
  deleteFileIds?: InputMaybe<Array<Scalars['String']['input']>>;
  importantNote?: InputMaybe<Scalars['String']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  removeCollaborators?: InputMaybe<Array<Scalars['String']['input']>>;
  removeEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  removeFromListIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  removeMailingAddresses?: InputMaybe<Array<Scalars['String']['input']>>;
  removePhoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  removeProperties?: InputMaybe<Array<Scalars['String']['input']>>;
  removeSubContacts?: InputMaybe<Array<Scalars['String']['input']>>;
  removeTagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  removeUserGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  subContacts?: InputMaybe<Array<SubContactMutationInput>>;
  updateCustomFieldValues?: InputMaybe<Array<UpdateContactCustomFieldInput>>;
  updateEmails?: InputMaybe<Array<UpdateContactEmailInput>>;
  updateMailingAddresses?: InputMaybe<Array<UpdateContactMailingAddressInput>>;
  updatePhoneNumbers?: InputMaybe<Array<UpdateContactPhoneNumberInput>>;
  updateProperties?: InputMaybe<Array<UpdateContactPropertyInput>>;
};

/** Update an existing mailing row's verification / ordering by its mapping-row id (ContactMailingAddress.id). The address text is immutable — edit = remove + re-add. */
export type UpdateContactMailingAddressInput = {
  id: Scalars['ID']['input'];
  ranking?: InputMaybe<Scalars['Int']['input']>;
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UpdateContactPhoneNumberInput = {
  id: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneType?: InputMaybe<PhoneType>;
  ranking?: InputMaybe<Scalars['Int']['input']>;
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UpdateContactPropertyInput = {
  id: Scalars['String']['input'];
  ranking?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  verificationStatus?: InputMaybe<VerificationStatus>;
};

export type UpdateContentTemplateInput = {
  id: Scalars['ID']['input'];
  input: ContentTemplateMutationInput;
};

export type UpdateSpacePageInput = {
  /** Who is changing it: `DevSession_<sessionId>`, a dev session working for the key's owner. */
  actorGrn: Scalars['String']['input'];
  /** The version the HTML was based on: refused (CONFLICT) when someone saved after it. */
  baseVersionId?: InputMaybe<Scalars['ID']['input']>;
  /** New HTML as the page's next version; omitted, only the title changes. */
  html?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UploadReportBucket =
  | 'ALL_ROWS'
  | 'CREATED'
  | 'DUPLICATE_ROWS'
  | 'FAILED'
  | 'MATCHED'
  | 'MERGED_AFTER_IMPORT'
  | 'RESTORED'
  | 'SKIPPED';

export type UploadReportRowOutcome =
  | 'CREATED'
  | 'FAILED'
  | 'MATCHED'
  | 'MERGED'
  | 'REVIVED'
  | 'SKIPPED';

export type UpsertCustomFieldOptionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label: Scalars['String']['input'];
};

export type UpsertPipelineItemCustomFieldOptionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label: Scalars['String']['input'];
};

/**
 * What a suspension's dependency handover actually did.
 *
 * `suspendOrganizationMemberWithImpact` returns the impact as it stood BEFORE the
 * suspension, which is a preview — not a receipt. The handover that acts on it is
 * best-effort by design (the member is already suspended by the time it runs, and
 * a half-applied suspension is worse than a reference the nightly drift detector
 * reports), so the caller needs to be told which of the four things happened
 * rather than inferring success from the impact being non-empty.
 */
export type UserDependencyHandoverStatus =
  /** The suspension stood and the handover did not — the references still name somebody who cannot act on them. */
  | 'FAILED'
  /** Nothing pointed at the member. */
  | 'NOT_NEEDED'
  /** Every reference was repointed at the teammate the admin chose. */
  | 'REASSIGNED'
  /** No successor was named, so the member was taken out of the routing surfaces. */
  | 'REMOVED';

export type VerificationStatus =
  | 'UNVERIFIED'
  | 'VERIFIED'
  | 'WRONG';

/**
 * Where one number — or the provider account behind it — stands with the carrier
 * caller-ID registries (SHAKEN/STIR attestation A + Voice Integrity).
 *
 * Always DERIVED at read time, never stored: two of these describe the account
 * rather than any progress, and both can change without a registration ever
 * moving.
 */
export type VoiceTrustRegistrationState =
  /** The carrier registration was refused, or this number's assignment failed. */
  | 'FAILED'
  /**
   * THE DEFINITION, and the whole contract: a line lands here if and only if the
   * registration machinery cannot act on it AS THINGS STAND.
   *
   * DO NOT INFER A REMEDIATION FROM THIS STATE, and note that no list of causes
   * is given here on purpose. The derivation tracks the registration sweep's own
   * preconditions, so conditions arrive and leave with no schema change; three
   * successive attempts to enumerate them in this description were each wrong
   * within a review round. The causes have exactly one home —
   * `deriveAccountRegistrationState` and `deriveLineRegistration` in
   * `VoiceTrustReadService` — and anything restating them here would be a copy
   * that drifts.
   *
   * The one distinction that IS stable, and the only one worth building on: some
   * causes clear themselves once setup completes (an A2P registration that
   * finishes, a credential that is repaired) and some never will (an account that
   * is not Twilio, a number outside North America). This state does not tell you
   * which — if a surface needs to say "yet" versus "ever", that is a new field,
   * not an inference from this one.
   *
   * Everything is derived on every read, so a cause that stops applying corrects
   * itself with nothing stored to fix.
   */
  | 'NOT_ELIGIBLE'
  /** Registered with the carriers. Calls from this number carry full attestation. */
  | 'REGISTERED'
  /** Eligible and on its way — submitted, in review, or waiting on the next sweep. */
  | 'REGISTERING'
  /** The organization uses its own Twilio account and registers there itself. */
  | 'SELF_MANAGED';

/** What a Work through card IS: it picks the card's frame on the client and which body field is set. */
export type WorkThroughFamily =
  /** Outreach (F): archive, turn off or rename what clutters the account. Organization only; never changes results. */
  | 'ACCOUNT_CLEANUP'
  /** A deterministic bundle: ownership transfers, distress tags, skip traces, merges. Always grouped, never one per contact. */
  | 'BUNDLE'
  /** A workflow or AI employee send the viewer owns, held on a blank required value: finished on the send screen. */
  | 'CONTRACT_HELD'
  /** A contract out for signature whose turn is the viewer's: signed on the signing page, opened over the card. */
  | 'CONTRACT_SIGNATURE'
  /**
   * Sales org only: a Customer Success request card in "Needs a person", with the reason it waits and its brief
   * (`customerRequest`). Opened on the board; nothing is decided on the card.
   */
  | 'CUSTOMER_REQUEST'
  /** First run: the experiences card. */
  | 'GETTING_STARTED_EXPERIENCES'
  /** First run: watch the Dashboard tour video. */
  | 'GETTING_STARTED_VIDEO'
  /** Updates an AI employee learned from a conversation (appointments, tasks, notes, phones, emails), bundled per contact. */
  | 'HARVEST'
  /** A workflow task step whose tasks nobody does: stop making them, or keep. */
  | 'IGNORED_TASK_STEP'
  /** The weekly low-reply-rate step. */
  | 'LOW_REPLY_STEP'
  /** A targeted dream's proposed change to one memory, an AI employee's or the viewer's own (one card per memory). */
  | 'MEMORY_CHANGE'
  /** An AI employee's draft: a text, email or Slack message. */
  | 'MESSAGE'
  /** An AI employee's prompt update (one per employee, revised in place). */
  | 'PROMPT_UPDATE'
  /** An open question an AI employee asked a person. */
  | 'QUESTION'
  /** Outreach (A): buy more numbers so texts held by one number's daily limit go out. Spends money. */
  | 'SENDING_ROOM'
  /** Outreach (B): skip trace a saved property filter into a workflow. Spends skip trace credits (`costCredits`). */
  | 'SKIP_TRACE_MORE'
  /** A workflow trigger lost its number: pick a new one. */
  | 'TRIGGER_LOST_NUMBER'
  /** A trust move proposed to the viewer (one per kind, revised in place). */
  | 'TRUST_MOVE'
  /** Outreach (D): turn a paused AI employee or workflow back on while people reply positively. */
  | 'TURN_BACK_ON'
  /** Outreach (C): publish a workflow fix Goliath drafted. */
  | 'WORKFLOW_FIX'
  /** A workflow rewrite after a carrier suspension: publishes the rewrite and resumes runs. */
  | 'WORKFLOW_REWRITE';

export type WorkThroughVerb =
  | 'ACCEPT'
  | 'DISMISS';

export type WorkflowAutomationRunStatus =
  | 'COMPLETED'
  | 'FAILED'
  | 'NOT_ENROLLED'
  | 'PAUSED'
  | 'PENDING'
  | 'RUNNING'
  | 'STOPPED';

export type WorkflowAutomationStatus =
  | 'ACTIVE'
  | 'DRAFT'
  | 'PAUSED'
  /**
   * System-initiated stop (distinct from user-initiated PAUSED), set by the SMS
   * deliverability guardrails when a workflow's carrier-filter rate trips the
   * circuit breaker or its sending number burns.
   */
  | 'SUSPENDED';

/**
 * Channel of a run's communication sender lane. Mirrors the raw
 * `WorkflowCommSenderState.channel` string (`TEXT` | `EMAIL`).
 */
export type WorkflowCommChannel =
  | 'EMAIL'
  | 'TEXT';

export type WorkflowDomain =
  | 'APPOINTMENT'
  | 'CONTACT'
  | 'CONTRACT'
  | 'DEAL'
  | 'EVENT'
  | 'PIPELINE_ITEM'
  | 'PROPERTY'
  | 'SLACK';

/** What `rewriteWorkflowDraftTextStep` did to the step. */
export type WorkflowDraftTextStepRewriteStatus =
  | 'NO_BETTER_REWRITE'
  | 'REWRITTEN'
  | 'STEP_CHANGED';

/**
 * Who wrote a workflow graph.
 *
 * A firewalled string on the row, not a Postgres enum, so a new writer class costs
 * no DDL — see `WorkflowGraphRevision.source`.
 */
export type WorkflowGraphRevisionSource =
  /** An agent run authored the save. `agentRunId` names the run. */
  | 'AGENT'
  /** A person saved from the workflow editor or the developer API. */
  | 'HUMAN'
  /**
   * The platform wrote the graph with no author in the loop — a draft clone, a
   * promote, the campaign factory, an appointment-reminder sync. No actor, by
   * construction.
   */
  | 'SYSTEM';

export type WorkflowGroupStatus =
  | 'ACTIVE'
  | 'DRAFT'
  | 'PAUSED'
  | 'SUSPENDED';

/**
 * Why a run's next comm send is sitting in the sending queue. DAILY_CAP: the
 * sending line/org spent its daily allowance. SEND_WINDOW: the recipient's local
 * clock is outside the allowed sending hours. WINDOW_LIMIT: the per-window
 * sending rate limit is saturated. OUT_OF_SMS_CREDITS: the organization has no
 * texting credits; the send probes until a top-up or renewal clears it.
 */
export type WorkflowQueuedSendReason =
  | 'DAILY_CAP'
  | 'OUT_OF_SMS_CREDITS'
  | 'SEND_WINDOW'
  | 'WINDOW_LIMIT';

export type WorkflowRunBulkOperation =
  | 'PAUSE'
  | 'RESUME';

/** What a change to a Workflow Table was: the create, a details/columns save, an archive, or a rows save. */
export type WorkflowTableChangeAction =
  | 'ROWS_SAVED'
  | 'TABLE_ARCHIVED'
  | 'TABLE_CREATED'
  | 'TABLE_UPDATED';

/**
 * What a Workflow Table column HOLDS. This decides both how a cell is edited and
 * where the column may be used.
 */
export type WorkflowTableColumnKind =
  /** An Agent (AI employee) id. */
  | 'AI_EMPLOYEE'
  /** A yes/no, stored `true`/`false` and rendered `Yes`/`No`. */
  | 'BOOLEAN'
  /** A ContactList id. */
  | 'CONTACT_LIST'
  /** A contact tag id (a ContactTag of the tag category, not a list). */
  | 'CONTACT_TAG'
  /** A USD amount, stored as a decimal string and rendered to the cent (`$1,200.00`). */
  | 'CURRENCY'
  /** A calendar date, stored `YYYY-MM-DD`. No time and no zone. */
  | 'DATE'
  /**
   * A DealStage id. The STAGE and never the pipeline: a stage names its pipeline,
   * so one cell cannot disagree with itself about where a deal lands.
   */
  | 'DEAL_STAGE'
  /**
   * A length of time, stored as a whole number of SECONDS, and rendered as prose
   * (`1 hour 30 minutes`). No workflow node reads a DURATION cell yet.
   */
  | 'DURATION'
  /** An email address. */
  | 'EMAIL'
  /** A ContentTemplate id, of type EMAIL. */
  | 'EMAIL_TEMPLATE'
  /** A literal block of copy. Plain text — it carries no merge fields of its own. */
  | 'LONG_TEXT'
  /** A number, stored canonically and rendered grouped (`1,234.5`). */
  | 'NUMBER'
  /** A percentage in percent units — `12.5` means 12.5%, rendered `12.5%`. */
  | 'PERCENT'
  /** A phone number, stored E.164 and rendered nationally. */
  | 'PHONE'
  /** A PhoneLine id — a sending number the organization owns. */
  | 'PHONE_LINE'
  /**
   * A DealStage id. The STAGE and never the pipeline: a stage names its pipeline,
   * so one cell cannot disagree with itself about where a deal lands.
   */
  | 'PIPELINE_STAGE'
  /** A PropertyList id. */
  | 'PROPERTY_LIST'
  /**
   * One of a fixed set of choices declared on the COLUMN (`options`). Validated on
   * save rather than at send time.
   */
  | 'SELECT'
  /** A literal string, rendered into a message body as typed. */
  | 'TEXT'
  /** A ContentTemplate id, of type SMS. */
  | 'TEXT_TEMPLATE'
  /**
   * An IANA time zone from the closed `Timezone` set. A closed set on purpose: a
   * typo shifts a whole market's send window and nothing reports it.
   */
  | 'TIMEZONE'
  /** A time of day, stored as 24-hour `HH:MM`. */
  | 'TIME_OF_DAY'
  /** An absolute http(s) URL. */
  | 'URL'
  /** A User id. */
  | 'USER'
  /** A UserGroup (team) id. */
  | 'USER_GROUP'
  /** A WorkflowGroup id. */
  | 'WORKFLOW_GROUP';

export type WorkflowTableColumnOptionInput = {
  /** What a person reads, in the grid and in a rendered message. */
  label: Scalars['String']['input'];
  /** What a cell stores. Stable; renaming the label never changes it. */
  value: Scalars['String']['input'];
};

export type WorkflowTableImportPartInput = {
  /** The uploaded file's name. */
  fileName: Scalars['String']['input'];
  /** 1-based. */
  part: Scalars['Int']['input'];
  parts: Scalars['Int']['input'];
};

/**
 * What a Workflow Table's key column is keyed ON — the field of the subject each
 * row is matched against. One kind per table, fixed when the table is created.
 */
export type WorkflowTableKeyKind =
  /** The team members attending the appointment, by user id. Several can match; the first row in the table wins. */
  | 'APPOINTMENT_ATTENDEE'
  /** The property's city, by the `City` record's id — never a typed name. */
  | 'CITY'
  /** The contact's Agent, by user id. */
  | 'CONTACT_AGENT'
  /** The contact's Contributors, by user id. Several can match; the first row in the table wins. */
  | 'CONTACT_CONTRIBUTOR'
  /** The lists the contact is on, by list id. Several can match; the first row in the table wins. */
  | 'CONTACT_LIST'
  /** The contact's tags, by tag id. Several can match; the first row in the table wins. */
  | 'CONTACT_TAG'
  /**
   * A 5-digit county FIPS code, matched against the property's `countyFips`. That
   * is the value `countyFilters` compiles to, so a row matching here is one the
   * same market's saved filter also matches. A display name is never a key.
   */
  | 'COUNTY_FIPS'
  /** The users assigned to the deal, by user id. Several can match; the first row in the table wins. */
  | 'DEAL_ASSIGNEE'
  /** The pipeline the deal's stage belongs to, by pipeline id. */
  | 'DEAL_PIPELINE'
  /** The deal's current stage, by stage id. */
  | 'DEAL_STAGE'
  /**
   * One template variable, named per table by `WorkflowTable.keyFieldPath`, read
   * exactly as a merge field renders it and compared ignoring case and spacing.
   */
  | 'FIELD_PATH'
  /** The property's `MLSStatus` value. */
  | 'MLS_STATUS'
  /** The property's `PropertyOccupancyType` value. */
  | 'OCCUPANCY_TYPE'
  /** The property owner's `OwnerLocation` value. */
  | 'OWNER_LOCATION'
  /** The property owner's `OwnerType` value. */
  | 'OWNER_TYPE'
  /** The pipeline the deal's stage belongs to, by pipeline id. */
  | 'PIPELINE'
  /** The users assigned to the deal, by user id. Several can match; the first row in the table wins. */
  | 'PIPELINE_ITEM_ASSIGNEE'
  /** The deal's current stage, by stage id. */
  | 'PIPELINE_STAGE'
  /** The property's `PropertyType` value, e.g. `SINGLE_FAMILY`. */
  | 'PROPERTY_TYPE'
  /** The property's 2-letter state code, e.g. `FL`. */
  | 'STATE'
  /** The property's 5-digit ZIP code. */
  | 'ZIP_CODE';

export type WorkflowTableKeyLevelInput = {
  parts: Array<WorkflowTableKeyPartInput>;
};

/** How one part of a Workflow Table's key is compared with the subject's value. */
export type WorkflowTableKeyMatch =
  /** Equal, in the key kind's canonical spelling. */
  | 'EXACT'
  /**
   * Inside the row's inclusive range. Only offered for kinds whose values have an
   * order — a ZIP code, for one.
   */
  | 'RANGE';

export type WorkflowTableKeyPartInput = {
  /** Required for a `FIELD_PATH` part, refused on every other kind. */
  fieldPath?: InputMaybe<Scalars['String']['input']>;
  kind: WorkflowTableKeyKind;
  match: WorkflowTableKeyMatch;
};

export type WorkflowTableKeyShapeInput = {
  levels: Array<WorkflowTableKeyLevelInput>;
};

/** How a lookup subject landed on a row. */
export type WorkflowTableLookupMatch =
  /** The key matched nothing (or there was no key) and the table's default row answered. */
  | 'DEFAULT'
  /** The subject's key matched a row. */
  | 'KEY'
  /** Nothing matched and the table has no default row. */
  | 'NONE';

/** One part of a row's key: `value` for an `EXACT` part, `rangeStart`/`rangeEnd` for a `RANGE` one. */
export type WorkflowTableRowKeyPartInput = {
  label?: InputMaybe<Scalars['String']['input']>;
  match: WorkflowTableKeyMatch;
  rangeEnd?: InputMaybe<Scalars['String']['input']>;
  rangeStart?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/**
 * The kind of record a Workflow Table key is read from. A table's keys decide which
 * records it needs, and a run of each workflow domain reaches certain ones.
 */
export type WorkflowTableSubjectKind =
  /** An appointment — a task of type APPOINTMENT. */
  | 'APPOINTMENT'
  | 'CONTACT'
  | 'DEAL'
  /** The inbound event an EVENT workflow run was created from. */
  | 'EVENT'
  | 'PIPELINE_ITEM'
  | 'PROPERTY';

export type WorkflowTriggerType =
  | 'COMMUNICATION'
  | 'CONTRACT_EVENT'
  | 'CREATED'
  | 'EVENT_RECEIVED'
  | 'INBOUND_CALL'
  | 'INBOUND_EMAIL'
  | 'INBOUND_TEXT'
  | 'MANUAL'
  | 'MATCH'
  | 'MUTATION'
  | 'RECORD_EVENT'
  | 'SLACK_MESSAGE_RECEIVED';

export type GetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;

export type GetMyProfileQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, profilePictureUrl?: string | null, organizationRole?: OrganizationToUserMappingType | null, organizationMembershipStatus?: OrganizationMembershipStatus | null, timezone?: string | null, resolvedTimezone?: string | null, organization?: { __typename?: 'Organization', id: string, name?: string | null, timezone?: string | null } | null } | null };

export type UpdateMyProfileMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
  howDidYouHearAboutUs?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateMyProfileMutation = { __typename?: 'RootMutation', users?: { __typename?: 'UsersMutation', updateUserProfile?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, profilePictureUrl?: string | null } | null } | null };

export type GetMyCapabilitiesQueryVariables = Exact<{ [key: string]: never; }>;

export type GetMyCapabilitiesQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', myCapabilities?: Array<OrganizationCapability> | null } | null };

export type GetIntegrationSetupUrlsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetIntegrationSetupUrlsQuery = { __typename?: 'RootQuery', oauthQuery?: { __typename?: 'OAuthQuery', integrationSetupUrls?: { __typename?: 'IntegrationSetupUrls', emailIntegrationsUrl: string, phoneNumbersUrl: string } | null } | null };

export type ListIntegrationsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListIntegrationsQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, connectedEmailIntegrations?: Array<{ __typename?: 'EmailServiceIntegrationStatus', provider: EmailProvider, email?: string | null, isDefaultForSending: boolean }> | null } | null, oauthQuery?: { __typename?: 'OAuthQuery', facebookAccountConnected?: boolean | null, slackIntegrationStatus?: { __typename?: 'SlackIntegrationStatus', connected: boolean, teamId?: string | null } | null, listFacebookPages?: Array<{ __typename?: 'FacebookPage', id: string, name?: string | null, connected: boolean }> | null } | null, organizationQuery?: { __typename?: 'OrganizationQuery', getOrganization?: { __typename?: 'Organization', id: string, callToolsIntegrationStatus?: { __typename?: 'CallToolsIntegrationStatus', connected: boolean } | null, smrtPhoneIntegrationStatus?: { __typename?: 'SmrtPhoneIntegrationStatus', connected: boolean } | null, enzo?: { __typename?: 'DialerIntegrationStatus', connected: boolean, campaignConfigs: Array<{ __typename?: 'DialerCampaignConfigEntry', id: string, campaignName?: string | null }> } | null, readyMode?: { __typename?: 'DialerIntegrationStatus', connected: boolean, campaignConfigs: Array<{ __typename?: 'DialerCampaignConfigEntry', id: string, campaignName?: string | null }> } | null } | null } | null, directMailConnectionQuery?: { __typename?: 'DirectMailConnectionQuery', list?: Array<{ __typename?: 'DirectMailConnectionInfo', id: string, provider: DirectMailProvider, label: string, state: DirectMailConnectionState, authHealth: DirectMailConnectionAuthHealth }> | null } | null, phoneEnrichmentQuery?: { __typename?: 'PhoneEnrichmentQuery', providers?: Array<{ __typename?: 'PhoneEnrichmentProviderStatus', connectionStatus: PhoneEnrichmentConnectionStatus, provider: { __typename?: 'PhoneEnrichmentProvider', key: string, displayName: string } }> | null } | null };

export type DisconnectSlackMutationVariables = Exact<{ [key: string]: never; }>;

export type DisconnectSlackMutation = { __typename?: 'RootMutation', oauthMutation?: { __typename?: 'OAuthMutation', revokeSlackIntegration?: { __typename?: 'SlackIntegrationStatus', connected: boolean } | null } | null };

export type DisconnectCallToolsMutationVariables = Exact<{ [key: string]: never; }>;

export type DisconnectCallToolsMutation = { __typename?: 'RootMutation', oauthMutation?: { __typename?: 'OAuthMutation', revokeCallToolsIntegration?: { __typename?: 'Organization', id: string, callToolsIntegrationStatus?: { __typename?: 'CallToolsIntegrationStatus', connected: boolean } | null } | null } | null };

export type DisconnectSmrtPhoneMutationVariables = Exact<{ [key: string]: never; }>;

export type DisconnectSmrtPhoneMutation = { __typename?: 'RootMutation', oauthMutation?: { __typename?: 'OAuthMutation', disconnectSmrtPhoneIntegration?: { __typename?: 'Organization', id: string, smrtPhoneIntegrationStatus?: { __typename?: 'SmrtPhoneIntegrationStatus', connected: boolean } | null } | null } | null };

export type DisconnectDialerMutationVariables = Exact<{
  provider: CampaignDialerProvider;
}>;

export type DisconnectDialerMutation = { __typename?: 'RootMutation', oauthMutation?: { __typename?: 'OAuthMutation', disconnectAllDialerIntegrations?: { __typename?: 'Organization', id: string, dialerIntegrationStatus?: { __typename?: 'DialerIntegrationStatus', connected: boolean } | null } | null } | null };

export type DisconnectFacebookLeadAdsMutationVariables = Exact<{ [key: string]: never; }>;

export type DisconnectFacebookLeadAdsMutation = { __typename?: 'RootMutation', oauthMutation?: { __typename?: 'OAuthMutation', disconnectFacebookAccount?: { __typename?: 'FacebookDisconnectResult', pagesDisconnected: number, deauthorized: boolean } | null } | null };

export type DisconnectDirectMailMutationVariables = Exact<{
  connectionId: Scalars['ID']['input'];
}>;

export type DisconnectDirectMailMutation = { __typename?: 'RootMutation', directMailConnectionMutation?: { __typename?: 'DirectMailConnectionMutation', disconnect?: boolean | null } | null };

export type DisconnectPhoneEnrichmentProviderMutationVariables = Exact<{
  providerKey: Scalars['String']['input'];
}>;

export type DisconnectPhoneEnrichmentProviderMutation = { __typename?: 'RootMutation', phoneEnrichmentMutation?: { __typename?: 'PhoneEnrichmentMutation', disconnectProvider?: { __typename?: 'PhoneEnrichmentProviderStatus', connectionStatus: PhoneEnrichmentConnectionStatus, provider: { __typename?: 'PhoneEnrichmentProvider', key: string } } | null } | null };

export type SetSuggestionAudienceMutationVariables = Exact<{
  audience: OrganizationSuggestionAudience;
}>;

export type SetSuggestionAudienceMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationSuggestionAudience?: { __typename?: 'Organization', id: string, suggestionAudience?: OrganizationSuggestionAudience | null } | null } | null };

export type GetOrganizationAreasOfOperationQueryVariables = Exact<{ [key: string]: never; }>;

export type GetOrganizationAreasOfOperationQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, areasOfOperation?: any | null } | null } | null };

export type UpdateOrganizationAreasOfOperationMutationVariables = Exact<{
  areasOfOperation: Scalars['JSON']['input'];
}>;

export type UpdateOrganizationAreasOfOperationMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationAreasOfOperation?: { __typename?: 'Organization', id: string, areasOfOperation?: any | null } | null } | null };

export type ListDirectMailLettersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<DirectMailPieceDisplayState> | DirectMailPieceDisplayState>;
  modes?: InputMaybe<Array<DirectMailConnectionMode> | DirectMailConnectionMode>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListDirectMailLettersQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', directMailLetters?: { __typename?: 'DirectMailLetterPage', totalCount: number, nodes: Array<{ __typename?: 'DirectMailLetter', id: string, contactId: string, contactName: string, provider: DirectMailProvider, campaignLabel: string, mode: DirectMailConnectionMode, status: DirectMailPieceDisplayState, refusalReason?: string | null, requestedAt: any, mailedAt?: any | null, deliveredAt?: any | null, workflowName?: string | null }> } | null } | null };

export type ListAppointmentsQueryVariables = Exact<{
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListAppointmentsQuery = { __typename?: 'RootQuery', users?: { __typename?: 'UsersQuery', getUserAppointments?: { __typename?: 'PaginateTaskResponse', total: number, canFetchNext: boolean, tasks: Array<{ __typename?: 'Task', id: string, title?: string | null, startDate?: any | null, endDate?: any | null, timezone?: Timezone | null, location?: string | null, description?: string | null, outcome?: string | null, completedAt?: any | null, appointmentReminderWorkflowGroupId?: string | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null }> } | null } | null };

export type CheckAvailabilityQueryVariables = Exact<{
  userIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  excludeAppointmentId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type CheckAvailabilityQuery = { __typename?: 'RootQuery', availabilityQuery?: { __typename?: 'AvailabilityQuery', availabilityForSlot?: { __typename?: 'AvailabilityResult', available: boolean, conflicts: Array<{ __typename?: 'BusySlot', start: any, end: any, source: BusySlotSource, title?: string | null, appointmentId?: string | null }> } | null } | null };

export type ListAppointmentRemindersQueryVariables = Exact<{ [key: string]: never; }>;

export type ListAppointmentRemindersQuery = { __typename?: 'RootQuery', appointmentReminderQuery?: { __typename?: 'AppointmentReminderQuery', listAppointmentReminders?: Array<{ __typename?: 'AppointmentReminder', id: string, isGlobal: boolean, createdAt: any, steps: Array<{ __typename?: 'AppointmentReminderStep', message: string, amountBefore: number, unitBefore: AppointmentReminderTimeUnit }> }> | null } | null };

export type CreateAppointmentReminderMutationVariables = Exact<{
  steps: Array<AppointmentReminderStepInput> | AppointmentReminderStepInput;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type CreateAppointmentReminderMutation = { __typename?: 'RootMutation', appointmentReminderMutation?: { __typename?: 'AppointmentReminderMutation', createAppointmentReminder?: { __typename?: 'AppointmentReminder', id: string, isGlobal: boolean, createdAt: any, steps: Array<{ __typename?: 'AppointmentReminderStep', message: string, amountBefore: number, unitBefore: AppointmentReminderTimeUnit }> } | null } | null };

export type UpdateAppointmentReminderMutationVariables = Exact<{
  appointmentReminderId: Scalars['ID']['input'];
  steps?: InputMaybe<Array<AppointmentReminderStepInput> | AppointmentReminderStepInput>;
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateAppointmentReminderMutation = { __typename?: 'RootMutation', appointmentReminderMutation?: { __typename?: 'AppointmentReminderMutation', updateAppointmentReminder?: { __typename?: 'AppointmentReminder', id: string, isGlobal: boolean, updatedAt: any, steps: Array<{ __typename?: 'AppointmentReminderStep', message: string, amountBefore: number, unitBefore: AppointmentReminderTimeUnit }> } | null } | null };

export type SetDefaultAppointmentReminderMutationVariables = Exact<{
  appointmentReminderId: Scalars['ID']['input'];
  isGlobal: Scalars['Boolean']['input'];
}>;

export type SetDefaultAppointmentReminderMutation = { __typename?: 'RootMutation', appointmentReminderMutation?: { __typename?: 'AppointmentReminderMutation', updateAppointmentReminder?: { __typename?: 'AppointmentReminder', id: string, isGlobal: boolean } | null } | null };

export type DeleteAppointmentReminderMutationVariables = Exact<{
  appointmentReminderId: Scalars['ID']['input'];
  dependencyResolution?: InputMaybe<DependencyResolutionInput>;
}>;

export type DeleteAppointmentReminderMutation = { __typename?: 'RootMutation', appointmentReminderMutation?: { __typename?: 'AppointmentReminderMutation', deleteAppointmentReminder?: { __typename?: 'AppointmentReminder', id: string } | null } | null };

export type GetMyAvailabilityScheduleQueryVariables = Exact<{ [key: string]: never; }>;

export type GetMyAvailabilityScheduleQuery = { __typename?: 'RootQuery', availabilityScheduleQuery?: { __typename?: 'AvailabilityScheduleQuery', mySchedule?: { __typename?: 'AvailabilitySchedule', id: string, userId: string, timezone: string, weeklyHours: any, dateOverrides: any, updatedAt: any } | null } | null };

export type CreateAppointmentMutationVariables = Exact<{
  title: Scalars['String']['input'];
  timezone: Timezone;
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  contactIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  userIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  appointmentReminderWorkflowGroupId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type CreateAppointmentMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', createAppointment?: { __typename?: 'Task', id: string, title?: string | null, startDate?: any | null, endDate?: any | null, timezone?: Timezone | null, location?: string | null, description?: string | null, appointmentReminderWorkflowGroupId?: string | null, calendarSync?: { __typename?: 'AppointmentCalendarSyncOutcome', status: AppointmentCalendarSyncStatus, provider?: AppointmentCalendarSyncProvider | null } | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null } | null } | null };

export type UpdateAppointmentMutationVariables = Exact<{
  appointmentId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Timezone>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  addUserIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  removeUserIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  addContactIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  removeContactIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  appointmentReminderWorkflowGroupId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type UpdateAppointmentMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', updateAppointment?: { __typename?: 'Task', id: string, title?: string | null, startDate?: any | null, endDate?: any | null, timezone?: Timezone | null, location?: string | null, description?: string | null, outcome?: string | null, appointmentReminderWorkflowGroupId?: string | null, calendarSync?: { __typename?: 'AppointmentCalendarSyncOutcome', status: AppointmentCalendarSyncStatus, provider?: AppointmentCalendarSyncProvider | null } | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null } | null } | null };

export type DeleteAppointmentMutationVariables = Exact<{
  appointmentId: Scalars['ID']['input'];
}>;

export type DeleteAppointmentMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', deleteAppointment?: { __typename?: 'Task', id: string, title?: string | null } | null } | null };

export type SetMyAvailabilityScheduleMutationVariables = Exact<{
  timezone: Scalars['String']['input'];
  weeklyHours: Scalars['JSON']['input'];
  dateOverrides?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type SetMyAvailabilityScheduleMutation = { __typename?: 'RootMutation', availabilityScheduleMutation?: { __typename?: 'AvailabilityScheduleMutation', upsert?: { __typename?: 'AvailabilitySchedule', id: string, userId: string, timezone: string, weeklyHours: any, dateOverrides: any, updatedAt: any } | null } | null };

export type StartAgentConversationMutationVariables = Exact<{
  message: Scalars['String']['input'];
  waitSeconds?: InputMaybe<Scalars['Int']['input']>;
  spoken?: InputMaybe<Scalars['Boolean']['input']>;
  confirmSends?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type StartAgentConversationMutation = { __typename?: 'RootMutation', externalAgentChatMutation?: { __typename?: 'ExternalAgentChatMutation', startAgentConversation?: { __typename?: 'ExternalAgentTurn', conversationId: string, turnId: string, runId?: string | null, status: ExternalAgentTurnStatus, reply?: string | null, error?: string | null, questions: Array<{ __typename?: 'ExternalAgentQuestion', id: string, prompt: string, kind: string, options: Array<string>, multi: boolean, allowOther: boolean, approval: boolean, tone?: string | null, confirmLabel?: string | null, draft?: { __typename?: 'ExternalAgentSendDraft', channel: string, contactId: string, toName?: string | null, toAddress: string, from?: string | null, reply: boolean, subject?: string | null, body: string, cc: Array<string> } | null }>, inAppCard?: { __typename?: 'ExternalAgentInAppCard', title: string, url: string } | null } | null } | null };

export type PrepareAgentConversationMutationVariables = Exact<{ [key: string]: never; }>;

export type PrepareAgentConversationMutation = { __typename?: 'RootMutation', externalAgentChatMutation?: { __typename?: 'ExternalAgentChatMutation', prepareAgentConversation?: boolean | null } | null };

export type SendAgentMessageMutationVariables = Exact<{
  conversationId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  waitSeconds?: InputMaybe<Scalars['Int']['input']>;
  confirmSends?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type SendAgentMessageMutation = { __typename?: 'RootMutation', externalAgentChatMutation?: { __typename?: 'ExternalAgentChatMutation', postAgentMessage?: { __typename?: 'ExternalAgentTurn', conversationId: string, turnId: string, runId?: string | null, status: ExternalAgentTurnStatus, reply?: string | null, error?: string | null, questions: Array<{ __typename?: 'ExternalAgentQuestion', id: string, prompt: string, kind: string, options: Array<string>, multi: boolean, allowOther: boolean, approval: boolean, tone?: string | null, confirmLabel?: string | null, draft?: { __typename?: 'ExternalAgentSendDraft', channel: string, contactId: string, toName?: string | null, toAddress: string, from?: string | null, reply: boolean, subject?: string | null, body: string, cc: Array<string> } | null }>, inAppCard?: { __typename?: 'ExternalAgentInAppCard', title: string, url: string } | null } | null } | null };

export type AnswerAgentQuestionsMutationVariables = Exact<{
  conversationId: Scalars['ID']['input'];
  answers: Scalars['JSON']['input'];
  waitSeconds?: InputMaybe<Scalars['Int']['input']>;
  confirmSends?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type AnswerAgentQuestionsMutation = { __typename?: 'RootMutation', externalAgentChatMutation?: { __typename?: 'ExternalAgentChatMutation', answerAgentQuestions?: { __typename?: 'ExternalAgentTurn', conversationId: string, turnId: string, runId?: string | null, status: ExternalAgentTurnStatus, reply?: string | null, error?: string | null, questions: Array<{ __typename?: 'ExternalAgentQuestion', id: string, prompt: string, kind: string, options: Array<string>, multi: boolean, allowOther: boolean, approval: boolean, tone?: string | null, confirmLabel?: string | null, draft?: { __typename?: 'ExternalAgentSendDraft', channel: string, contactId: string, toName?: string | null, toAddress: string, from?: string | null, reply: boolean, subject?: string | null, body: string, cc: Array<string> } | null }>, inAppCard?: { __typename?: 'ExternalAgentInAppCard', title: string, url: string } | null } | null } | null };

export type CancelAgentTurnMutationVariables = Exact<{
  conversationId: Scalars['ID']['input'];
  turnId: Scalars['ID']['input'];
}>;

export type CancelAgentTurnMutation = { __typename?: 'RootMutation', externalAgentChatMutation?: { __typename?: 'ExternalAgentChatMutation', cancelAgentTurn?: { __typename?: 'ExternalAgentTurn', conversationId: string, turnId: string, runId?: string | null, status: ExternalAgentTurnStatus, reply?: string | null, error?: string | null, questions: Array<{ __typename?: 'ExternalAgentQuestion', id: string, prompt: string, kind: string, options: Array<string>, multi: boolean, allowOther: boolean }>, inAppCard?: { __typename?: 'ExternalAgentInAppCard', title: string, url: string } | null } | null } | null };

export type GetAgentTurnQueryVariables = Exact<{
  conversationId: Scalars['ID']['input'];
  turnId: Scalars['ID']['input'];
  waitSeconds?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetAgentTurnQuery = { __typename?: 'RootQuery', externalAgentChatQuery?: { __typename?: 'ExternalAgentChatQuery', agentTurn?: { __typename?: 'ExternalAgentTurn', conversationId: string, turnId: string, runId?: string | null, status: ExternalAgentTurnStatus, reply?: string | null, error?: string | null, questions: Array<{ __typename?: 'ExternalAgentQuestion', id: string, prompt: string, kind: string, options: Array<string>, multi: boolean, allowOther: boolean, approval: boolean, tone?: string | null, confirmLabel?: string | null, draft?: { __typename?: 'ExternalAgentSendDraft', channel: string, contactId: string, toName?: string | null, toAddress: string, from?: string | null, reply: boolean, subject?: string | null, body: string, cc: Array<string> } | null }>, inAppCard?: { __typename?: 'ExternalAgentInAppCard', title: string, url: string } | null } | null } | null };

export type ListAgentConversationsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  archived?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ListAgentConversationsQuery = { __typename?: 'RootQuery', externalAgentChatQuery?: { __typename?: 'ExternalAgentChatQuery', agentConversations?: { __typename?: 'ExternalAgentConversationPage', hasMore: boolean, items: Array<{ __typename?: 'ExternalAgentConversation', id: string, title?: string | null, archived: boolean, lastActivityAt: any, appName?: string | null }> } | null } | null };

export type SubmitFeedbackMutationVariables = Exact<{
  kind: ExternalFeedbackKind;
  title: Scalars['String']['input'];
  message: Scalars['String']['input'];
  details?: InputMaybe<Scalars['String']['input']>;
}>;

export type SubmitFeedbackMutation = { __typename?: 'RootMutation', externalAgentChatMutation?: { __typename?: 'ExternalAgentChatMutation', submitFeedback?: { __typename?: 'ExternalFeedbackResult', status: ExternalFeedbackStatus, error?: string | null, ticket?: { __typename?: 'ExternalFeedbackTicket', ticket: string, title: string, stage?: string | null } | null, otherOpenTickets: Array<{ __typename?: 'ExternalFeedbackTicket', ticket: string, title: string, stage?: string | null }> } | null } | null };

export type GetAutomationMapQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAutomationMapQuery = { __typename?: 'RootQuery', automationPagesQuery?: { __typename?: 'AutomationPagesQuery', map?: { __typename?: 'AutomationMap', pageId: string, version: number, story?: any | null, refStates: Array<{ __typename?: 'AutomationMapRefState', kind: string, id: string, name: string, state: string, editing: boolean, domain?: string | null, channels: Array<string>, facts: Array<{ __typename?: 'AutomationMapFact', label: string, value: string }> }>, changedSince: Array<{ __typename?: 'AutomationMapChange', kind: string, id: string, name: string, onMap: boolean, change: string }> } | null } | null };

export type ListAutomationMapVersionsQueryVariables = Exact<{
  pageId: Scalars['ID']['input'];
}>;

export type ListAutomationMapVersionsQuery = { __typename?: 'RootQuery', automationPagesQuery?: { __typename?: 'AutomationPagesQuery', pageVersions?: Array<{ __typename?: 'AutomationPageVersionSummary', version: number, note?: string | null, createdAt: any, authorName?: string | null, bySession: boolean }> | null } | null };

export type GetAutomationMapVersionQueryVariables = Exact<{
  pageId: Scalars['ID']['input'];
  version: Scalars['Int']['input'];
}>;

export type GetAutomationMapVersionQuery = { __typename?: 'RootQuery', automationPagesQuery?: { __typename?: 'AutomationPagesQuery', page?: { __typename?: 'AutomationPageDocument', id: string, version: number, story?: any | null, note?: string | null, createdAt: any, authorName?: string | null } | null } | null };

export type RestoreAutomationMapVersionMutationVariables = Exact<{
  pageId: Scalars['ID']['input'];
  version: Scalars['Int']['input'];
}>;

export type RestoreAutomationMapVersionMutation = { __typename?: 'RootMutation', automationPagesMutation?: { __typename?: 'AutomationPagesMutation', restorePageVersion?: { __typename?: 'AutomationPage', id: string, currentVersion: number, updatedAt: any } | null } | null };

export type GetCreditPricesQueryVariables = Exact<{ [key: string]: never; }>;

export type GetCreditPricesQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getCreditPrices?: { __typename?: 'CreditPrices', packs: Array<{ __typename?: 'CreditPackPrice', creditType: CreditType, code: string, units: number, priceCents: number, available: boolean }> } | null } | null };

export type GetCreditsPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;

export type GetCreditsPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getCreditsPurchaseUrl?: string | null } | null };

export type GetSeatsPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;

export type GetSeatsPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getSeatsPurchaseUrl?: string | null } | null };

export type GetPhoneNumbersPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;

export type GetPhoneNumbersPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getPhoneNumbersPurchaseUrl?: string | null } | null };

export type GetAddOnPricesQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAddOnPricesQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getAddOnPrices?: { __typename?: 'AddOnPrices', extraSeatPriceCents: number } | null } | null };

export type GetBillingSummaryQueryVariables = Exact<{ [key: string]: never; }>;

export type GetBillingSummaryQuery = { __typename?: 'RootQuery', subscriptionQuery?: { __typename?: 'SubscriptionQuery', getOrganizationBilling?: { __typename?: 'OrganizationBilling', id: string, planType?: PlanCode | null, status: OrganizationBillingStatus, isAnnualPlan?: boolean | null, isGrandfathered: boolean, currentUnitAmountCents?: number | null, trialEnds?: any | null, cancelAt?: any | null, pendingPlanCode?: PlanCode | null, pendingPlanIsAnnual?: boolean | null, pendingPlanEffectiveAt?: any | null, featureLimits: { __typename?: 'FeatureLimits', seatsCap?: number | null, skiptraceCap?: number | null, emailVerificationCap?: number | null, exportPropertiesCap?: number | null, aiCreditsCap?: number | null, smsCreditsCap?: number | null, phoneNumbersCap?: number | null, callingMinutesCap?: number | null }, extraSeats?: { __typename?: 'ExtraSeatsBilling', seatsCap: number, seatsUsed: number, extraSeatQuantity: number, unusedPaidSeats?: number | null, unusedPaidSeatsReleaseAt?: any | null } | null, creditLedger: Array<{ __typename?: 'CreditLedger', type: CreditType, unitBalance: number }>, planUsage: Array<{ __typename?: 'CreditPlanUsage', type: CreditType, planCap: number, usedThisPeriod: number, planRemaining: number, planCreditsLocked: boolean, purchasedBalance: number, available: number, periodResetsAt?: any | null }> } | null } | null };

export type GetAiCreditUsageQueryVariables = Exact<{
  windowDays?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetAiCreditUsageQuery = { __typename?: 'RootQuery', subscriptionQuery?: { __typename?: 'SubscriptionQuery', aiCreditUsage?: { __typename?: 'AiCreditUsageSummary', windowDays: number, creditsConsumed: number, balanceCredits: number, outOfCredits: boolean, lowOnCredits: boolean, lowCreditThresholdCredits: number, planAllowance: { __typename?: 'AiCreditPlanAllowance', includedCredits: number, usedThisPeriod: number, includedRemaining: number, purchasedBalance: number, lockedDuringTrial: boolean, periodResetsAt?: any | null } } | null, aiCreditUsageBySource?: { __typename?: 'AiCreditUsageBySource', windowDays: number, sources: Array<{ __typename?: 'AiCreditUsageSourceRow', label: string, credits: number }> } | null } | null };

export type GetPlanCatalogQueryVariables = Exact<{ [key: string]: never; }>;

export type GetPlanCatalogQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getPlanPrices?: { __typename?: 'PlanPrices', oneMonthRampPriceCents: number, annualRampPriceCents: number, oneMonthGrowthPriceCents: number, annualGrowthPriceCents: number, oneMonthScalePriceCents: number, annualScalePriceCents: number, oneMonthRampPriceFormatted: string, annualRampPriceFormatted: string, oneMonthGrowthPriceFormatted: string, annualGrowthPriceFormatted: string, oneMonthScalePriceFormatted: string, annualScalePriceFormatted: string } | null, getPlanCatalog?: Array<{ __typename?: 'PlanCatalogEntry', planCode: PlanCode, featureLimits: { __typename?: 'FeatureLimits', seatsCap?: number | null, skiptraceCap?: number | null, emailVerificationCap?: number | null, exportPropertiesCap?: number | null, aiCreditsCap?: number | null, smsCreditsCap?: number | null, phoneNumbersCap?: number | null, callingMinutesCap?: number | null } }> | null } | null };

export type CheckBillingActionQueryVariables = Exact<{
  action: BillingAction;
  count?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CheckBillingActionQuery = { __typename?: 'RootQuery', organizationQuery?: { __typename?: 'OrganizationQuery', canTakeAction?: any | null } | null };

export type GetCreditUsageByTypeQueryVariables = Exact<{
  timeZone?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCreditUsageByTypeQuery = { __typename?: 'RootQuery', subscriptionQuery?: { __typename?: 'SubscriptionQuery', dailyCreditUsage?: { __typename?: 'DailyCreditUsage', periodStart: any, periodEnd: any, series: Array<{ __typename?: 'DailyCreditUsageSeries', creditType: CreditType, totalUnits: number }> } | null } | null };

export type GetBulkTaskQueryVariables = Exact<{
  bulkTaskId: Scalars['ID']['input'];
}>;

export type GetBulkTaskQuery = { __typename?: 'RootQuery', bulkTaskQuery?: { __typename?: 'BulkTaskQuery', bulkTask?: { __typename?: 'BulkTask', id: string, status: BulkTaskStatus, estimatedItemCount?: number | null, processedItemCount?: number | null, secondsRemaining?: number | null, createdAt: any, updatedAt: any } | null } | null };

export type ListCallListsQueryVariables = Exact<{
  status?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  mine?: InputMaybe<Scalars['Boolean']['input']>;
  orgVisible?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ListCallListsQuery = { __typename?: 'RootQuery', callListsQuery?: { __typename?: 'CallListsQuery', callLists?: { __typename?: 'CallListPage', items: Array<{ __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } }> } | null } | null };

export type GetCallListQueryVariables = Exact<{
  callListId: Scalars['ID']['input'];
  fromPosition?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type GetCallListQuery = { __typename?: 'RootQuery', callListsQuery?: { __typename?: 'CallListsQuery', callList?: { __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } } | null, callListItems?: { __typename?: 'CallListItemPage', total: number, nextFromPosition?: number | null, items: Array<{ __typename?: 'CallListItem', id: string, position: number, status: string, skipReason?: string | null, disposition?: string | null, phonesTried: Array<string>, completedAt?: any | null, contact?: { __typename?: 'Contact', id: string, name?: string | null } | null }> } | null } | null };

export type GetCallListDialLinkQueryVariables = Exact<{
  callListId: Scalars['ID']['input'];
}>;

export type GetCallListDialLinkQuery = { __typename?: 'RootQuery', callListsQuery?: { __typename?: 'CallListsQuery', callList?: { __typename?: 'CallList', id: string, name?: string | null, status: string, dialPath: string, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number } } | null } | null };

export type CreateCallListMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  visibilityScope?: InputMaybe<Scalars['String']['input']>;
  maxNumbersPerContact?: InputMaybe<Scalars['Int']['input']>;
  includeRelatives?: InputMaybe<Scalars['Boolean']['input']>;
  overrideDnc?: InputMaybe<Scalars['Boolean']['input']>;
  overrideLitigator?: InputMaybe<Scalars['Boolean']['input']>;
  reachedTagId?: InputMaybe<Scalars['ID']['input']>;
  buildAttemptKey?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateCallListMutation = { __typename?: 'RootMutation', callListsMutation?: { __typename?: 'CallListsMutation', createCallList?: { __typename?: 'CreateCallListResult', truncatedCount: number, cannotCallCount: number, callList: { __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } } } | null } | null };

export type CreateCallListFromContactFilterMutationVariables = Exact<{
  filterId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  visibilityScope?: InputMaybe<Scalars['String']['input']>;
  maxNumbersPerContact?: InputMaybe<Scalars['Int']['input']>;
  includeRelatives?: InputMaybe<Scalars['Boolean']['input']>;
  overrideDnc?: InputMaybe<Scalars['Boolean']['input']>;
  overrideLitigator?: InputMaybe<Scalars['Boolean']['input']>;
  reachedTagId?: InputMaybe<Scalars['ID']['input']>;
  buildAttemptKey?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateCallListFromContactFilterMutation = { __typename?: 'RootMutation', callListsMutation?: { __typename?: 'CallListsMutation', createCallListFromContactFilter?: { __typename?: 'CreateCallListResult', truncatedCount: number, cannotCallCount: number, callList: { __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } } } | null } | null };

export type AddCallListContactsMutationVariables = Exact<{
  callListId: Scalars['ID']['input'];
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type AddCallListContactsMutation = { __typename?: 'RootMutation', callListsMutation?: { __typename?: 'CallListsMutation', addCallListContacts?: { __typename?: 'AddCallListContactsResult', addedCount: number, alreadyOnListCount: number, cannotCallCount: number, truncatedCount: number, callList?: { __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } } | null } | null } | null };

export type RemoveCallListContactsMutationVariables = Exact<{
  callListId: Scalars['ID']['input'];
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type RemoveCallListContactsMutation = { __typename?: 'RootMutation', callListsMutation?: { __typename?: 'CallListsMutation', removeCallListContacts?: { __typename?: 'RemoveCallListContactsResult', removedCount: number, notRemovedCount: number, callList?: { __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } } | null } | null } | null };

export type RenameCallListMutationVariables = Exact<{
  callListId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameCallListMutation = { __typename?: 'RootMutation', callListsMutation?: { __typename?: 'CallListsMutation', updateCallList?: { __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } } | null } | null };

export type EndCallListMutationVariables = Exact<{
  callListId: Scalars['ID']['input'];
}>;

export type EndCallListMutation = { __typename?: 'RootMutation', callListsMutation?: { __typename?: 'CallListsMutation', endCallList?: { __typename?: 'CallList', id: string, name?: string | null, status: string, visibilityScope: string, maxNumbersPerContact: number, includeRelatives: boolean, overrideDnc: boolean, overrideLitigator: boolean, cursorPosition: number, startedAt: any, endedAt?: any | null, dialPath: string, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, lockedByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, reachedTag?: { __typename?: 'Tag', id: string, name: string } | null, counts: { __typename?: 'CallListCounts', total: number, pending: number, completed: number, skipped: number, dials: number, byDisposition: Array<{ __typename?: 'CallListDispositionCount', disposition: string, count: number }> } } | null } | null };

export type DeleteCallListMutationVariables = Exact<{
  callListId: Scalars['ID']['input'];
}>;

export type DeleteCallListMutation = { __typename?: 'RootMutation', callListsMutation?: { __typename?: 'CallListsMutation', deleteCallList?: { __typename?: 'CallList', id: string } | null } | null };

export type GetLineIntakeAssignmentsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetLineIntakeAssignmentsQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', organization?: { __typename?: 'Organization', id: string, twilioPhoneNumbers?: Array<{ __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, label?: string | null, assignmentPolicy?: { __typename?: 'AssignmentPolicy', id: string, assigneeUserIds: Array<string>, participantUserIds: Array<string>, teamIds: Array<string>, tags: Array<string>, agentAssigneeIds: Array<string>, workflowGroupIds: Array<string> } | null }> | null } | null } | null };

export type GetMetaPageIntakeAssignmentsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetMetaPageIntakeAssignmentsQuery = { __typename?: 'RootQuery', oauthQuery?: { __typename?: 'OAuthQuery', listFacebookPages?: Array<{ __typename?: 'FacebookPage', id: string, name?: string | null, connected: boolean, assignmentPolicy?: { __typename?: 'AssignmentPolicy', id: string, assigneeUserIds: Array<string>, participantUserIds: Array<string>, teamIds: Array<string>, tags: Array<string>, agentAssigneeIds: Array<string>, workflowGroupIds: Array<string> } | null }> | null } | null };

export type GetWorkflowIntakeAssignmentQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type GetWorkflowIntakeAssignmentQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, workflowDomain?: WorkflowDomain | null, assignmentPolicy?: { __typename?: 'AssignmentPolicy', id: string, assigneeUserIds: Array<string>, participantUserIds: Array<string>, teamIds: Array<string>, tags: Array<string>, agentAssigneeIds: Array<string>, workflowGroupIds: Array<string> } | null } | null } | null };

export type SetIntakeAssignmentMutationVariables = Exact<{
  owner: AssignmentPolicyOwnerInput;
  assigneeUserIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  participantUserIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  teamIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  tags: Array<Scalars['String']['input']> | Scalars['String']['input'];
  agentAssigneeIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  workflowGroupIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetIntakeAssignmentMutation = { __typename?: 'RootMutation', assignmentPolicyMutation?: { __typename?: 'AssignmentPolicyMutation', set: { __typename?: 'AssignmentPolicy', id: string, assigneeUserIds: Array<string>, agentAssigneeIds: Array<string>, workflowGroupIds: Array<string> } } | null };

export type ClearIntakeAssignmentMutationVariables = Exact<{
  owner: AssignmentPolicyOwnerInput;
}>;

export type ClearIntakeAssignmentMutation = { __typename?: 'RootMutation', assignmentPolicyMutation?: { __typename?: 'AssignmentPolicyMutation', clear: boolean } | null };

export type GetCallWorkspaceSettingsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type GetCallWorkspaceSettingsQuery = { __typename?: 'RootQuery', callsQuery?: { __typename?: 'CallsQuery', callWorkspaceConfig?: { __typename?: 'CallWorkspaceConfig', autoAdvance: boolean, advanceDelaySeconds: number, callCardFieldIds: Array<string>, callerIdTableColumnId?: string | null, actions: Array<{ __typename?: 'AfterCallAction', kind: AfterCallActionKind, isEnabled: boolean, displayOrder: number }> } | null, voicemailTemplates?: Array<{ __typename?: 'VoicemailTemplate', id: string, name: string, durationMs: number, displayOrder: number, createdAt: any }> | null } | null };

export type UpdateCallOutcomeMutationVariables = Exact<{
  callSid?: InputMaybe<Scalars['ID']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  disposition: CallDisposition;
  note?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateCallOutcomeMutation = { __typename?: 'RootMutation', callsMutation?: { __typename?: 'CallsMutation', updateCallDisposition?: boolean | null } | null };

export type RenameVoicemailTemplateMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameVoicemailTemplateMutation = { __typename?: 'RootMutation', callsMutation?: { __typename?: 'CallsMutation', updateVoicemailTemplate?: { __typename?: 'VoicemailTemplate', id: string, name: string } | null } | null };

export type ReorderVoicemailTemplatesMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  items: Array<ReorderVoicemailTemplateItemInput> | ReorderVoicemailTemplateItemInput;
}>;

export type ReorderVoicemailTemplatesMutation = { __typename?: 'RootMutation', callsMutation?: { __typename?: 'CallsMutation', reorderVoicemailTemplates?: Array<{ __typename?: 'VoicemailTemplate', id: string, name: string, displayOrder: number }> | null } | null };

export type DeleteVoicemailTemplateMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
}>;

export type DeleteVoicemailTemplateMutation = { __typename?: 'RootMutation', callsMutation?: { __typename?: 'CallsMutation', deleteVoicemailTemplate?: boolean | null } | null };

export type SetCallerIdTableColumnMutationVariables = Exact<{
  callerIdTableColumnId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type SetCallerIdTableColumnMutation = { __typename?: 'RootMutation', callsMutation?: { __typename?: 'CallsMutation', updateCallWorkspaceConfig?: { __typename?: 'CallWorkspaceConfig', callerIdTableColumnId?: string | null } | null } | null };

export type ReorderAfterCallActionsMutationVariables = Exact<{
  items: Array<ReorderAfterCallActionItemInput> | ReorderAfterCallActionItemInput;
}>;

export type ReorderAfterCallActionsMutation = { __typename?: 'RootMutation', callsMutation?: { __typename?: 'CallsMutation', reorderAfterCallActions?: { __typename?: 'CallWorkspaceConfig', actions: Array<{ __typename?: 'AfterCallAction', kind: AfterCallActionKind, isEnabled: boolean, displayOrder: number }> } | null } | null };

export type SetCallCardFieldsMutationVariables = Exact<{
  customFieldIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetCallCardFieldsMutation = { __typename?: 'RootMutation', callsMutation?: { __typename?: 'CallsMutation', setCallCardFields?: { __typename?: 'CallWorkspaceConfig', callCardFieldIds: Array<string> } | null } | null };

export type ListCatchUpCardsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListCatchUpCardsQuery = { __typename?: 'RootQuery', dashboardQuery?: { __typename?: 'DashboardQuery', workThroughQueue?: { __typename?: 'WorkThroughQueue', total: number, nextCursor?: string | null, cards: Array<{ __typename?: 'WorkThroughCard', id: string, family: WorkThroughFamily, kind: string, contactId?: string | null, title: string, ask?: string | null, why?: string | null, primaryLabel: string, estSeconds: number, costCredits?: number | null, records: number, suggestionIds: Array<string>, bundleRows: Array<{ __typename?: 'WorkThroughBundleRow', suggestionId: string, contactId?: string | null, label: string, sublabel?: string | null, defaultChecked: boolean, kind: string }> }> } | null } | null };

export type DecideCatchUpCardMutationVariables = Exact<{
  cardId: Scalars['ID']['input'];
  verb: WorkThroughVerb;
  shownIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  suggestionIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  reason?: InputMaybe<ContactSuggestionDismissReason>;
}>;

export type DecideCatchUpCardMutation = { __typename?: 'RootMutation', workThroughMutation?: { __typename?: 'WorkThroughMutation', decideCard?: { __typename?: 'WorkThroughDecision', applied: number, refused: number, setAside: number, queued: number, alreadyDecided: number, bulkTaskId?: string | null, retired: number, refusalMessage?: string | null, remainingIds: Array<string>, cardGone: boolean } | null } | null };

export type UndoCatchUpDecisionMutationVariables = Exact<{
  cardId: Scalars['ID']['input'];
  verb: WorkThroughVerb;
  suggestionIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  setAsideIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type UndoCatchUpDecisionMutation = { __typename?: 'RootMutation', workThroughMutation?: { __typename?: 'WorkThroughMutation', undoDecision?: { __typename?: 'WorkThroughUndoResult', undone: number, refused: number, refusalMessage?: string | null } | null } | null };

export type ListCommunicationChannelsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListCommunicationChannelsQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, textingReadiness?: { __typename?: 'OrgTextingReadiness', canText: boolean, reason?: OrgTextingBlockedReason | null } | null, twilioPhoneNumbers?: Array<{ __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, isPrimary?: boolean | null, canSendSms: boolean, user?: { __typename?: 'User', id: string } | null }> | null } | null } | null, oauthQuery?: { __typename?: 'OAuthQuery', myActiveEmailIdentities?: Array<{ __typename?: 'EmailIdentity', id: string, email: string, provider: EmailProvider, clientId: string }> | null, myDisconnectedMailboxes?: Array<{ __typename?: 'DisconnectedMailbox', email: string, provider: EmailProvider, disconnectedAt: any }> | null } | null };

export type RenderContentTemplateQueryVariables = Exact<{
  templateId: Scalars['ID']['input'];
  contactId?: InputMaybe<Scalars['ID']['input']>;
  spintaxSeed?: InputMaybe<Scalars['Int']['input']>;
}>;

export type RenderContentTemplateQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', renderContentTemplate?: { __typename?: 'RenderedContentTemplate', subject?: string | null, body: string, bodyFormat: string, missingVariables: Array<string>, usedVariables: Array<string> } | null } | null };

export type SuppressChannelMutationVariables = Exact<{
  value: Scalars['String']['input'];
  medium: SuppressionMedium;
  reason?: InputMaybe<Scalars['String']['input']>;
}>;

export type SuppressChannelMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', suppressChannel?: { __typename?: 'ChannelSuppressionResult', organizationId: string, normalizedValue: string, medium: SuppressionMedium } | null } | null };

export type GetMeetingTranscriptQueryVariables = Exact<{
  noteId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetMeetingTranscriptQuery = { __typename?: 'RootQuery', meetingNotetakerQuery?: { __typename?: 'MeetingNotetakerQuery', transcriptForNote?: Array<{ __typename?: 'MeetingTranscriptUtterance', speaker: string, text: string }> | null } | null };

export type SendTextMutationVariables = Exact<{
  toPhoneNumber: Scalars['String']['input'];
  message: Scalars['String']['input'];
  fromPhoneLineId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type SendTextMutation = { __typename?: 'RootMutation', smsMutation?: { __typename?: 'SmsMutation', sendSms?: { __typename?: 'TwilioMessage', id: string, message?: string | null, status?: TextMessageStatus | null, errorCode?: string | null, errorMessage?: string | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, createdAt?: any | null } | null } | null };

export type SendEmailMutationVariables = Exact<{
  fromClientId: Scalars['String']['input'];
  fromEmail: Scalars['String']['input'];
  to: Array<Scalars['String']['input']> | Scalars['String']['input'];
  cc?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  bcc?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  bodyHtml?: InputMaybe<Scalars['String']['input']>;
  appendSignature?: InputMaybe<Scalars['Boolean']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type SendEmailMutation = { __typename?: 'RootMutation', emailMutation?: { __typename?: 'EmailMutation', sendEmail?: { __typename?: 'SendEmailResult', ok: boolean, failureReason?: SendEmailFailureReason | null, failureMessage?: string | null, contact?: { __typename?: 'Contact', id: string } | null } | null } | null };

export type GetSendConsentAttestationQueryVariables = Exact<{ [key: string]: never; }>;

export type GetSendConsentAttestationQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, developerApiSendConsent?: { __typename?: 'DeveloperApiSendConsent', attested: boolean, attestedAt?: any | null, attestedByUserId?: string | null } | null } | null } | null };

export type SetSendConsentAttestationMutationVariables = Exact<{
  attested: Scalars['Boolean']['input'];
}>;

export type SetSendConsentAttestationMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', setDeveloperApiSendConsent?: { __typename?: 'DeveloperApiSendConsent', attested: boolean, attestedAt?: any | null, attestedByUserId?: string | null } | null } | null };

export type ListMeetingSummariesQueryVariables = Exact<{
  after: Scalars['DateTime']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListMeetingSummariesQuery = { __typename?: 'RootQuery', meetingNotetakerQuery?: { __typename?: 'MeetingNotetakerQuery', recentSummaries: Array<{ __typename?: 'MeetingSummaryDigest', sessionId: string, externalBotId?: string | null, status: string, startedAt: any, noteId?: string | null, summarizedAt?: any | null, requestedByEmail?: string | null, appointmentTitle?: string | null, summary: string, contacts: Array<{ __typename?: 'MeetingSummaryContact', id: string, connectedContactIds: Array<string> }> }> } | null };

export type GetSendingLimitsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetSendingLimitsQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, textingReadiness?: { __typename?: 'OrgTextingReadiness', canText: boolean, reason?: OrgTextingBlockedReason | null } | null, twilioPhoneNumbers?: Array<{ __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, canSendSms: boolean, isBurned: boolean, smsDailyThrottle?: { __typename?: 'DailyThrottle', used: number, cap?: number | null, remaining: number } | null, smsWarmUpVolume?: { __typename?: 'WarmUpVolume', last7Days: number } | null }> | null, smsBrandBudgets?: Array<{ __typename?: 'SmsBrandBudget', id: string, phoneNumberIds: Array<string>, dailyThrottle?: { __typename?: 'DailyThrottle', used: number, cap?: number | null, remaining: number, utcDayEnd: any } | null }> | null } | null } | null, oauthQuery?: { __typename?: 'OAuthQuery', myActiveEmailIdentities?: Array<{ __typename?: 'EmailIdentity', id: string, email: string, dailyMessagesThrottle?: { __typename?: 'DailyThrottle', used: number, cap?: number | null, remaining: number } | null, dailyRecipientsThrottle?: { __typename?: 'DailyThrottle', used: number, cap?: number | null, remaining: number } | null }> | null } | null, workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', sendingQueue?: { __typename?: 'OrganizationSendingQueue', queued: number, held: number, heldReason?: WorkflowQueuedSendReason | null, heldUntil?: any | null, nextSendAt?: any | null } | null } | null };

export type ClearChannelSuppressionMutationVariables = Exact<{
  value: Scalars['String']['input'];
  medium: SuppressionMedium;
}>;

export type ClearChannelSuppressionMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', clearSuppressionChannel?: { __typename?: 'ChannelSuppressionResult', organizationId: string, normalizedValue: string, medium: SuppressionMedium } | null } | null };

export type ClearContactDoNotContactMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type ClearContactDoNotContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', clearContactDoNotContact?: { __typename?: 'Contact', id: string, doNotContact?: boolean | null } | null } | null };

export type GetTextingRegistrationStatusQueryVariables = Exact<{ [key: string]: never; }>;

export type GetTextingRegistrationStatusQuery = { __typename?: 'RootQuery', twilioQuery?: { __typename?: 'TwilioQuery', a2pRegistrations?: Array<{ __typename?: 'A2pRegistration', id: string, brandName: string, useCaseLabel: string, status: A2pRegistrationStatus, statusLabel: string, sendingCampaigns: Array<{ __typename?: 'A2pSendingCampaign', id: string, status: A2pRegistrationStatus, statusLabel: string, sendReady: boolean, rejectionReasons: Array<string> }> }> | null } | null };

export type FindContactDataProblemsQueryVariables = Exact<{
  problem?: InputMaybe<ContactDataProblem>;
  sampleSize?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FindContactDataProblemsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contactDataProblems?: { __typename?: 'ContactDataProblemsResult', problems: Array<{ __typename?: 'ContactDataProblemGroup', problem: ContactDataProblem, count: number, truncated: boolean, contacts: Array<{ __typename?: 'ContactDataProblemHit', id: string, name: string, value: string }> }> } | null } | null };

export type FindSharedPropertyAddressesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FindSharedPropertyAddressesQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', sharedPropertyAddressGroups?: { __typename?: 'SharedPropertyAddressGroupsPage', totalCount: number, truncated: boolean, hasMore: boolean, groups: Array<{ __typename?: 'SharedPropertyAddressGroup', address?: string | null, propertyId?: string | null, members: Array<{ __typename?: 'SharedPropertyAddressMember', id: string, name: string, relations: Array<string> }> }> } | null } | null };

export type ContactListUsageQueryVariables = Exact<{
  kinds?: InputMaybe<Array<ContactListKind> | ContactListKind>;
  onlyEmpty?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ContactListUsageQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contactListUsage?: { __typename?: 'ContactListUsageResult', totalCount: number, emptyCount?: number | null, lists: Array<{ __typename?: 'ContactListUsageRow', id: string, name: string, kind: ContactListKind, contactCount: number, orgActiveContactCount?: number | null, orgArchivedContactCount?: number | null, isEmpty?: boolean | null }> } | null } | null };

export type DuplicateContactsByRepQueryVariables = Exact<{
  matchBy?: InputMaybe<DuplicateContactMatch>;
}>;

export type DuplicateContactsByRepQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', duplicateContactsByRep?: { __typename?: 'DuplicateContactsByRepResult', totalGroups: number, truncated: boolean, reps: Array<{ __typename?: 'DuplicateContactsByRepRow', userId?: string | null, name: string, groupCount: number, contactCount: number }> } | null } | null };

export type LowercaseContactEmailsMutationVariables = Exact<{
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type LowercaseContactEmailsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', lowercaseContactEmails?: { __typename?: 'LowercaseContactEmailsResult', changedEmails: number, changedContacts: number, left: number } | null } | null };

export type StartContactImportMutationVariables = Exact<{
  artifactId: Scalars['ID']['input'];
}>;

export type StartContactImportMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', startContactImportFromArtifact?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, transformerAuthoringState?: TransformerAuthoringState | null, hasAuthoredTransformer?: boolean | null, totalRows?: number | null, csvSample?: Array<{ __typename?: 'CsvHeaderWithExampleData', header?: string | null, exampleData?: Array<string> | null }> | null } | null } | null };

export type AuthorContactImportMappingMutationVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
}>;

export type AuthorContactImportMappingMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', authorContactTransformer?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, transformerAuthoringState?: TransformerAuthoringState | null, hasAuthoredTransformer?: boolean | null } | null } | null };

export type ReviseContactImportMappingMutationVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  message: Scalars['String']['input'];
}>;

export type ReviseContactImportMappingMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', reviseContactTransformer?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, transformerAuthoringState?: TransformerAuthoringState | null, hasAuthoredTransformer?: boolean | null } | null } | null };

export type PreviewContactImportQueryVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type PreviewContactImportQuery = { __typename?: 'RootQuery', fileProcessingTaskQuery?: { __typename?: 'FileProcessingTaskQuery', contactTransformerRowCount?: number | null, contactTransformerRowFindings?: { __typename?: 'ContactTransformerRowFindings', checkedRows: number, namelessRowIndexes: Array<number>, unstorablePhoneRowIndexes: Array<number>, repeats: Array<{ __typename?: 'ContactTransformerRepeatedRow', rowIndex: number, sameAsRowIndex: number, name: string }>, flaggedRowChannels: Array<{ __typename?: 'ContactTransformerFlaggedRowChannels', rowIndex: number, name?: string | null, phone?: string | null, email?: string | null, droppedPhone?: string | null }> } | null, contactTransformerPreview?: Array<{ __typename?: 'ContactPreviewResult', rowIndex: number, error?: string | null, mappedNoteBody?: string | null, unlandedCells: Array<string>, contact?: { __typename?: 'Contact', name?: string | null, subContacts?: Array<{ __typename?: 'SubContact', name: string, relation?: string | null }> | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', phoneNumber: string, phoneType: PhoneType }> | null, emails?: Array<{ __typename?: 'ContactEmail', email: string }> | null, properties?: Array<{ __typename?: 'ContactProperty', propertyString?: string | null }> | null, mailingAddresses?: Array<{ __typename?: 'ContactMailingAddress', rawText?: string | null, address?: { __typename?: 'Address', line1: string, line2?: string | null, city: string, state: string, zip: string } | null }> | null, tags?: Array<{ __typename?: 'Tag', name: string }> | null, lists?: Array<{ __typename?: 'ContactList', name: string }> | null, deals?: Array<{ __typename?: 'Deal', title: string, stage?: { __typename?: 'PipelineStage', name: string } | null, pipeline?: { __typename?: 'Pipeline', name: string } | null }> | null, customFields?: Array<{ __typename?: 'ContactCustomField', name: string, values?: { __typename?: 'ContactCustomFieldValue', textValue?: string | null, numberValue?: number | null, calendarDate?: string | null, dropdownSelectedValues?: Array<string> | null } | null }> | null } | null }> | null } | null };

export type ConfirmContactImportMutationVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  tagName?: InputMaybe<Scalars['String']['input']>;
  attestationAccepted: Scalars['Boolean']['input'];
  reviveArchivedMatches?: InputMaybe<Scalars['Boolean']['input']>;
  optOutTagName?: InputMaybe<Scalars['String']['input']>;
}>;

export type ConfirmContactImportMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', confirmContactTransformerUpload?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null } | null } | null };

export type GetContactImportQueryVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
}>;

export type GetContactImportQuery = { __typename?: 'RootQuery', fileProcessingTaskQuery?: { __typename?: 'FileProcessingTaskQuery', fileProcessingTask?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, totalRows?: number | null, producedRecordsCount?: number | null, estimatedRemainingTimeInSeconds?: number | null, contactTag?: { __typename?: 'Tag', name: string } | null } | null, uploadReport?: { __typename?: 'UploadReport', createdCount: number, matchedCount: number, restoredCount: number, skippedCount: number, failedCount: number, mergedAfterImportCount: number, duplicateRowCount: number, processedRowCount: number } | null } | null };

export type GetContactImportRowFindingsQueryVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
}>;

export type GetContactImportRowFindingsQuery = { __typename?: 'RootQuery', fileProcessingTaskQuery?: { __typename?: 'FileProcessingTaskQuery', contactTransformerRowFindings?: { __typename?: 'ContactTransformerRowFindings', checkedRows: number, unstorablePhoneRowIndexes: Array<number> } | null } | null };

export type ListContactSuggestionsQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type ListContactSuggestionsQuery = { __typename?: 'RootQuery', contactSuggestionQuery?: { __typename?: 'ContactSuggestionQuery', contactSuggestions?: Array<{ __typename?: 'ContactSuggestion', id: string, contactId: string, status: ContactSuggestionStatus, confidence?: number | null, confidenceReason?: string | null, action: any, createdAt: any, dirtyAt?: any | null, pairedReplyId?: string | null }> | null } | null };

export type DismissContactSuggestionMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
  reason: ContactSuggestionDismissReason;
}>;

export type DismissContactSuggestionMutation = { __typename?: 'RootMutation', contactSuggestionMutation?: { __typename?: 'ContactSuggestionMutation', dismissContactSuggestion?: { __typename?: 'ContactSuggestion', id: string, status: ContactSuggestionStatus } | null } | null };

export type MarkContactSuggestionHandledMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
}>;

export type MarkContactSuggestionHandledMutation = { __typename?: 'RootMutation', contactSuggestionMutation?: { __typename?: 'ContactSuggestionMutation', resolveContactSuggestionAsHandled?: { __typename?: 'ContactSuggestion', id: string, status: ContactSuggestionStatus } | null } | null };

export type SetAsideContactSuggestionsMutationVariables = Exact<{
  suggestionIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetAsideContactSuggestionsMutation = { __typename?: 'RootMutation', contactSuggestionMutation?: { __typename?: 'ContactSuggestionMutation', setAsideContactSuggestions?: { __typename?: 'SetAsideContactSuggestionsPayload', setAside: number, unresolvedIds: Array<string> } | null } | null };

export type CommentOnSuggestionCardMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  submissionKey: Scalars['String']['input'];
}>;

export type CommentOnSuggestionCardMutation = { __typename?: 'RootMutation', contactSuggestionMutation?: { __typename?: 'ContactSuggestionMutation', commentOnSuggestionCard: { __typename?: 'SuggestionCardComment', heard: boolean, routedToSession: boolean, replyChanged: boolean } } | null };

export type AcceptContactSuggestionMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
  senderUserId?: InputMaybe<Scalars['ID']['input']>;
  replyInThread?: InputMaybe<Scalars['Boolean']['input']>;
  acceptPairedActions?: InputMaybe<Scalars['Boolean']['input']>;
  acknowledgedWarning?: InputMaybe<Scalars['String']['input']>;
}>;

export type AcceptContactSuggestionMutation = { __typename?: 'RootMutation', contactSuggestionMutation?: { __typename?: 'ContactSuggestionMutation', acceptContactSuggestion?: { __typename?: 'ContactSuggestion', id: string, contactId: string, status: ContactSuggestionStatus } | null } | null };

export type AcceptEditedContactSuggestionMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
  senderUserId?: InputMaybe<Scalars['ID']['input']>;
  replyInThread?: InputMaybe<Scalars['Boolean']['input']>;
  acceptPairedActions?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type AcceptEditedContactSuggestionMutation = { __typename?: 'RootMutation', contactSuggestionMutation?: { __typename?: 'ContactSuggestionMutation', acceptEditedContactSuggestion?: { __typename?: 'ContactSuggestion', id: string, contactId: string, status: ContactSuggestionStatus } | null } | null };

export type DecideContactSuggestionsInBulkMutationVariables = Exact<{
  verb: SuggestionDecisionVerb;
  suggestionIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  dismissReason?: InputMaybe<ContactSuggestionDismissReason>;
  rowDecisions?: InputMaybe<Array<ContactSuggestionRowDecisionsInput> | ContactSuggestionRowDecisionsInput>;
}>;

export type DecideContactSuggestionsInBulkMutation = { __typename?: 'RootMutation', contactSuggestionMutation?: { __typename?: 'ContactSuggestionMutation', decideContactSuggestionsInBulk?: { __typename?: 'DecideContactSuggestionsInBulkPayload', planned: number, applied: number, refused: number, truncated: boolean, unresolvedIds: Array<string> } | null } | null };

export type DecideSuggestionMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
  verb: SuggestionDecisionVerb;
  reason?: InputMaybe<ContactSuggestionDismissReason>;
  note?: InputMaybe<Scalars['String']['input']>;
  acknowledgedWarning?: InputMaybe<Scalars['String']['input']>;
  selectedProposalKeys?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  decisions?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type DecideSuggestionMutation = { __typename?: 'RootMutation', suggestionFeedMutation?: { __typename?: 'SuggestionFeedMutation', decideSuggestion?: { __typename?: 'Suggestion', id: string, kind: string, status: ContactSuggestionStatus } | null } | null };

export type GetContactQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type GetContactQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, name?: string | null, createdAt?: any | null, isArchived?: boolean | null, isEnriched?: boolean | null, sellerIntentScore?: number | null, doNotContact?: boolean | null, doNotContactReason?: string | null, doNotContactSetAt?: any | null, doNotContactSetBy?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, emails?: Array<{ __typename?: 'ContactEmail', id: string, email: string, verificationStatus: VerificationStatus }> | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', id: string, phoneNumber: string, phoneType: PhoneType, verificationStatus: VerificationStatus, dncStatus?: { __typename?: 'DncStatus', isDnc: boolean, isLitigator: boolean } | null }> | null, mailingAddresses?: Array<{ __typename?: 'ContactMailingAddress', id: string, rawText?: string | null, verificationStatus: VerificationStatus, address?: { __typename?: 'Address', addressFull?: string | null } | null }> | null, properties?: Array<{ __typename?: 'ContactProperty', id: string, propertyString?: string | null, status?: string | null, verificationStatus: VerificationStatus, property?: { __typename?: 'Property', id: string } | null }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, lists?: Array<{ __typename?: 'ContactList', id: string, name: string }> | null, customFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType, allowMultiple: boolean, values?: { __typename?: 'ContactCustomFieldValue', textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null } | null }> | null, participants?: Array<{ __typename?: 'ContactToUserMapping', status: ContactToUserMappingStatus, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null }> | null, userGroups?: Array<{ __typename?: 'UserGroup', id: string, name: string }> | null, notes?: Array<{ __typename?: 'Note', id: string, body?: string | null, createdAt?: any | null, isPinned?: boolean | null, isHidden?: boolean | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, replies?: Array<{ __typename?: 'NoteReply', id: string, body?: string | null, isHidden?: boolean | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null }> | null }> | null, deals?: Array<{ __typename?: 'Deal', id: string, title: string, priceCents?: any | null, isArchived: boolean, priceFormatted?: string | null, stage?: { __typename?: 'PipelineStage', id: string, name: string } | null }> | null } | null } | null };

export type FindContactsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type FindContactsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', getContactIdentityResults?: { __typename?: 'ContactAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'ContactAutocompleteMatchOnPerson', contactId: string, personName: string, propertyAddress?: string | null, phoneNumber?: string | null, email?: string | null, isArchived?: boolean | null }> } | null } | null };

export type FindContactsByNoteQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type FindContactsByNoteQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', getContactNoteResults?: { __typename?: 'ContactAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'ContactAutocompleteMatchOnPerson', contactId: string, personName: string, noteSnippet?: string | null, isArchived?: boolean | null }> } | null } | null };

export type SearchInteractionsQueryVariables = Exact<{
  query: Scalars['String']['input'];
  kinds?: InputMaybe<Array<InteractionKind> | InteractionKind>;
  since?: InputMaybe<Scalars['DateTime']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SearchInteractionsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', searchInteractions?: { __typename?: 'InteractionSearchResult', contacts: Array<{ __typename?: 'InteractionSearchContact', contactId: string, personName: string, isArchived: boolean, score: number, matches: Array<{ __typename?: 'InteractionSearchMatch', kind: InteractionKind, occurredAt: any, teammateName?: string | null, snippet: string, sourceGrn: string }> }> } | null } | null };

export type ContactTagUsageQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  maxContactCount?: InputMaybe<Scalars['Int']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type ContactTagUsageQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contactTagUsage?: { __typename?: 'ContactTagUsagePage', totalCount: number, hasMore: boolean, tags: Array<{ __typename?: 'ContactTagUsage', id: string, name: string, isEditable: boolean, contactCount: number, orgContactCount?: number | null, dependents: Array<{ __typename?: 'ContactTagUsageDependent', groupKind: DependencyImpactGroupKind, count: number }> }> } | null } | null };

export type SearchContactTagsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
}>;

export type SearchContactTagsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', searchContactTags?: { __typename?: 'ContactTagSearchResult', tags?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null, lists?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null, uploadTags?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null, exportTags?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null } | null } | null };

export type ListContactFiltersQueryVariables = Exact<{ [key: string]: never; }>;

export type ListContactFiltersQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilters?: Array<{ __typename?: 'Filter', id: string, name: string, description?: string | null, folderId?: string | null, isPrivate: boolean, isDefault: boolean, userId?: string | null, createdAt: any, criteriaSummary?: string | null }> | null } | null };

export type FilterContactsQueryVariables = Exact<{
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
}>;

export type FilterContactsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', paginateContacts?: { __typename?: 'FilteredContactsResponse', items: Array<{ __typename?: 'Contact', id: string, name?: string | null, sellerIntentScore?: number | null, isArchived?: boolean | null, doNotContact?: boolean | null, doNotContactReason?: string | null, doNotContactSetAt?: any | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', phoneNumber: string, suppressedMediums: Array<SuppressionMedium> }> | null, emails?: Array<{ __typename?: 'ContactEmail', email: string }> | null, participants?: Array<{ __typename?: 'ContactToUserMapping', status: ContactToUserMappingStatus, user?: { __typename?: 'User', firstName?: string | null, lastName?: string | null } | null }> | null, properties?: Array<{ __typename?: 'ContactProperty', propertyString?: string | null, verificationStatus: VerificationStatus, property?: { __typename?: 'Property', id: string } | null }> | null }>, pagination: { __typename?: 'FilterPaginationResponse', total?: number | null, hasMore?: boolean | null } } | null } | null };

export type ListContactActivitiesQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  activityTypes?: InputMaybe<Array<ActivityType> | ActivityType>;
  direction?: InputMaybe<ActivityDirection>;
}>;

export type ListContactActivitiesQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, activities?: Array<{ __typename?: 'Activity', id: string, type?: ActivityType | null, createdAt?: any | null, isFromTeamMember?: boolean | null, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, note?: { __typename?: 'Note', id: string, body?: string | null, createdAt?: any | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null } | null, call?: { __typename?: 'Call', id: string, direction?: CommunicationDirection | null, durationSeconds?: number | null, status?: CallStatus | null, summary?: string | null, recordingUrl?: string | null, disposition?: CallDisposition | null, dispositionNote?: string | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, createdAt?: any | null } | null, text?: { __typename?: 'TwilioMessage', id: string, message?: string | null, direction?: CommunicationDirection | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, createdAt?: any | null } | null, email?: { __typename?: 'EmailMessage', id: string, subject?: string | null, snippet?: string | null, textExtract?: string | null, fromEmail?: string | null, fromName?: string | null, toEmails?: Array<string> | null, direction?: string | null, internalDate?: any | null } | null, metadata?: { __typename?: 'AiEmployeeActivityMetadata' } | { __typename?: 'AiEmployeeEscalationActivityMetadata' } | { __typename?: 'AiEmployeeRunActivityMetadata' } | { __typename?: 'AiEmployeeScheduleActivityMetadata' } | { __typename?: 'AppointmentActivityMetadata' } | { __typename?: 'CallActivityMetadata' } | { __typename?: 'ContactArchiveActivityMetadata' } | { __typename?: 'ContactPriceActivityMetadata' } | { __typename?: 'ContractActivityMetadata' } | { __typename?: 'CsvRowImportedActivityMetadata' } | { __typename?: 'DeletedAppointmentActivityMetadata' } | { __typename?: 'DeletedTaskActivityMetadata' } | { __typename?: 'DirectMailActivityMetadata' } | { __typename?: 'EmailActivityMetadata' } | { __typename?: 'EmailOutreachActivityMetadata' } | { __typename?: 'FileActivityMetadata' } | { __typename?: 'FileDeletedActivityMetadata' } | { __typename?: 'ImportantNoteActivityMetadata' } | { __typename?: 'MetaLeadFormSubmittedActivityMetadata' } | { __typename?: 'NoteActivityMetadata' } | { __typename?: 'PersonEmailActivityMetadata' } | { __typename?: 'PersonPhoneActivityMetadata' } | { __typename?: 'PropertyVisitedActivityMetadata' } | { __typename?: 'RelatedPersonWorkflowActivityMetadata' } | { __typename?: 'ReplyActivityMetadata' } | { __typename?: 'SlackActivityMetadata' } | { __typename?: 'TagListUpdatedActivityMetadata' } | { __typename?: 'TaskActivityMetadata' } | { __typename?: 'TextActivityMetadata' } | { __typename?: 'UpdateSellerMotivationActivityMetadata' } | { __typename?: 'UpdateSellerTimelineActivityMetadata' } | { __typename?: 'UpdatedAppointmentActivityMetadata' } | { __typename?: 'UpdatedEmailActivityMetadata' } | { __typename?: 'UpdatedImportantNoteActivityMetadata' } | { __typename?: 'UpdatedPhoneActivityMetadata' } | { __typename?: 'UpdatedTaskActivityMetadata', taskId?: string | null, oldValues?: { __typename?: 'TaskValues', title?: string | null, endDate?: string | null, timezone?: string | null, taskType?: string | null, participants?: Array<string> | null } | null, newValues?: { __typename?: 'TaskValues', endDate?: string | null } | null } | { __typename?: 'UserIdsActivityMetadata' } | { __typename?: 'VoicemailLeftActivityMetadata' } | null }> | null } | null } | null };

export type CreateContactMutationVariables = Exact<{
  input: CreateContactInput;
}>;

export type CreateContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createContact?: { __typename?: 'Contact', id: string, name?: string | null, createdAt?: any | null, emails?: Array<{ __typename?: 'ContactEmail', id: string, email: string, verificationStatus: VerificationStatus }> | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', id: string, phoneNumber: string, phoneType: PhoneType, verificationStatus: VerificationStatus }> | null } | null } | null };

export type UpdateContactMutationVariables = Exact<{
  input: UpdateContactInput;
}>;

export type UpdateContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', updateContact?: { __typename?: 'Contact', id: string, name?: string | null, isArchived?: boolean | null, emails?: Array<{ __typename?: 'ContactEmail', id: string, email: string, verificationStatus: VerificationStatus }> | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', id: string, phoneNumber: string, phoneType: PhoneType, verificationStatus: VerificationStatus }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, lists?: Array<{ __typename?: 'ContactList', id: string, name: string }> | null, participants?: Array<{ __typename?: 'ContactToUserMapping', status: ContactToUserMappingStatus, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null }> | null, userGroups?: Array<{ __typename?: 'UserGroup', id: string, name: string }> | null, customFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType, allowMultiple: boolean, values?: { __typename?: 'ContactCustomFieldValue', textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null } | null }> | null } | null } | null };

export type AddContactNoteMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;

export type AddContactNoteMutation = { __typename?: 'RootMutation', noteMutation?: { __typename?: 'NoteMutation', createNote?: { __typename?: 'Contact', id: string, name?: string | null } | null } | null };

export type EditContactNoteMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;

export type EditContactNoteMutation = { __typename?: 'RootMutation', noteMutation?: { __typename?: 'NoteMutation', editNote?: { __typename?: 'Note', id: string, body?: string | null, updatedAt?: any | null, contact?: { __typename?: 'Contact', id: string, name?: string | null } | null } | null } | null };

export type DeleteContactNoteMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
}>;

export type DeleteContactNoteMutation = { __typename?: 'RootMutation', noteMutation?: { __typename?: 'NoteMutation', deleteNote?: { __typename?: 'Contact', id: string, name?: string | null, notes?: Array<{ __typename?: 'Note', id: string, body?: string | null, createdAt?: any | null }> | null } | null } | null };

export type CreateNoteReplyMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;

export type CreateNoteReplyMutation = { __typename?: 'RootMutation', noteMutation?: { __typename?: 'NoteMutation', createNoteReply?: { __typename?: 'Note', id: string, replies?: Array<{ __typename?: 'NoteReply', id: string, body?: string | null, createdAt?: any | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null }> | null } | null } | null };

export type EditNoteReplyMutationVariables = Exact<{
  replyId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;

export type EditNoteReplyMutation = { __typename?: 'RootMutation', noteMutation?: { __typename?: 'NoteMutation', editNoteReply?: { __typename?: 'NoteReply', id: string, body?: string | null, updatedAt?: any | null } | null } | null };

export type DeleteNoteReplyMutationVariables = Exact<{
  replyId: Scalars['ID']['input'];
}>;

export type DeleteNoteReplyMutation = { __typename?: 'RootMutation', noteMutation?: { __typename?: 'NoteMutation', deleteNoteReply?: { __typename?: 'Note', id: string, replies?: Array<{ __typename?: 'NoteReply', id: string }> | null } | null } | null };

export type ChangeNotePinnedMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
  isPinned: Scalars['Boolean']['input'];
}>;

export type ChangeNotePinnedMutation = { __typename?: 'RootMutation', noteMutation?: { __typename?: 'NoteMutation', changeNotePinned?: { __typename?: 'Contact', id: string, notes?: Array<{ __typename?: 'Note', id: string, isPinned?: boolean | null }> | null } | null } | null };

export type CreateContactTagMutationVariables = Exact<{
  tagName: Scalars['String']['input'];
}>;

export type CreateContactTagMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createFreeFormTag?: { __typename?: 'Organization', contactTags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } | null } | null };

export type CreateContactListMutationVariables = Exact<{
  listName: Scalars['String']['input'];
}>;

export type CreateContactListMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createContactList?: { __typename?: 'Organization', contactLists?: Array<{ __typename?: 'ContactList', id: string, name: string }> | null } | null } | null };

export type EnrichContactMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type EnrichContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', enrichContact?: { __typename?: 'Contact', id: string, name?: string | null, emails?: Array<{ __typename?: 'ContactEmail', id: string, email: string, verificationStatus: VerificationStatus }> | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', id: string, phoneNumber: string, phoneType: PhoneType, verificationStatus: VerificationStatus }> | null } | null } | null };

export type CreateContactFromPropertyMutationVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;

export type CreateContactFromPropertyMutation = { __typename?: 'RootMutation', propertyMutation?: { __typename?: 'PropertyMutation', createContact?: { __typename?: 'Property', id: string, address?: { __typename?: 'Address', addressFull?: string | null } | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null, createdAt?: any | null }> | null } | null } | null };

export type ArchiveContactsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type ArchiveContactsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', archiveContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type UnarchiveContactsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type UnarchiveContactsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', unarchiveContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type FindDuplicateContactGroupsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  matchBy?: InputMaybe<DuplicateContactMatch>;
  tagIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type FindDuplicateContactGroupsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', duplicateContactGroups?: { __typename?: 'DuplicateContactGroupsPage', totalCount: number, truncated: boolean, hasMore: boolean, reservedEmailGroupCount: number, groups: Array<{ __typename?: 'DuplicateContactGroup', sharedPhoneNumbers: Array<string>, sharedEmails: Array<string>, contacts: Array<{ __typename?: 'DuplicateContactGroupMember', id: string, name: string }> }> } | null } | null };

export type ListSmsOptOutsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  since?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type ListSmsOptOutsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', smsOptOuts?: { __typename?: 'SmsOptOutPage', totalCount?: number | null, notVisibleCount?: number | null, hasMore: boolean, truncated?: boolean | null, items: Array<{ __typename?: 'SmsOptOut', phoneNumber: string, source: SmsOptOutSource, reason?: string | null, optedOutAt: any, contacts: Array<{ __typename?: 'SmsOptOutContact', id: string, name: string }> }> } | null } | null };

export type MergeContactsMutationVariables = Exact<{
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  primaryContactId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  pointPersonUserId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MergeContactsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', mergeContacts?: { __typename?: 'Contact', id: string, name?: string | null, createdAt?: any | null } | null } | null };

export type DeleteContactTagsMutationVariables = Exact<{
  tagIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  dependencyResolution?: InputMaybe<DependencyResolutionInput>;
}>;

export type DeleteContactTagsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', deleteFreeFormTags?: { __typename?: 'Organization', id: string } | null } | null };

export type DeleteContactFilterMutationVariables = Exact<{
  filterId: Scalars['ID']['input'];
}>;

export type DeleteContactFilterMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', deleteFilter?: boolean | null } | null };

export type DeleteContactListsMutationVariables = Exact<{
  listIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  dependencyResolution?: InputMaybe<DependencyResolutionInput>;
}>;

export type DeleteContactListsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', deleteContactLists?: { __typename?: 'Organization', id: string } | null } | null };

export type AddContactTagsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  tagIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  newTagNames?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type AddContactTagsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', addTagsToContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type AssignContactMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  role?: InputMaybe<ContactToUserMappingStatus>;
}>;

export type AssignContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', bulkAssignUsersOnContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type RemoveContactTagsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  tagIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type RemoveContactTagsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', removeTagsFromContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type AddContactsToListMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  listIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type AddContactsToListMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', addContactsToList?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type RemoveContactsFromListMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  listIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type RemoveContactsFromListMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', removeContactsFromList?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type UnassignContactMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  userIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type UnassignContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', bulkUnassignUsersFromContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type SetContactsCustomFieldMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  customFieldId: Scalars['String']['input'];
  dropdownSelectedValues: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type SetContactsCustomFieldMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', setContactsCustomField?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type RenameContactTagMutationVariables = Exact<{
  tagId: Scalars['ID']['input'];
  newName: Scalars['String']['input'];
}>;

export type RenameContactTagMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', renameFreeFormTag?: { __typename?: 'Organization', contactTags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null } | null } | null };

export type RenameContactListMutationVariables = Exact<{
  listId: Scalars['ID']['input'];
  newName: Scalars['String']['input'];
}>;

export type RenameContactListMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', updateContactList?: { __typename?: 'Organization', contactLists?: Array<{ __typename?: 'ContactList', id: string, name: string }> | null } | null } | null };

export type ListContactCustomFieldsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListContactCustomFieldsQuery = { __typename?: 'RootQuery', contactCustomFieldQuery?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType, description?: string | null, displayOrder: number, allowMultiple: boolean, defaultValue?: string | null, matchInboundTextsByValue?: boolean | null, hideOnContactRecord?: boolean | null, options?: Array<{ __typename?: 'ContactCustomFieldOption', id: string, label: string }> | null }> | null } | null };

export type CreateContactCustomFieldMutationVariables = Exact<{
  input: CreateCustomFieldInput;
}>;

export type CreateContactCustomFieldMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', createCustomField?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType }> | null } | null } | null };

export type UpdateContactCustomFieldMutationVariables = Exact<{
  customFieldId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ContactCustomFieldType>;
  description?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<UpsertCustomFieldOptionInput> | UpsertCustomFieldOptionInput>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  optionDependencyResolutions?: InputMaybe<Array<DependencyResolutionInput> | DependencyResolutionInput>;
  matchInboundTextsByValue?: InputMaybe<Scalars['Boolean']['input']>;
  hideOnContactRecord?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateContactCustomFieldMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', updateCustomField?: { __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType, description?: string | null, displayOrder: number, allowMultiple: boolean, defaultValue?: string | null, matchInboundTextsByValue?: boolean | null, hideOnContactRecord?: boolean | null } | null } | null };

export type ReorderContactCustomFieldsMutationVariables = Exact<{
  customFieldIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ReorderContactCustomFieldsMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', reorderCustomFields?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, displayOrder: number }> | null } | null } | null };

export type DeleteContactCustomFieldMutationVariables = Exact<{
  customFieldId: Scalars['ID']['input'];
  dependencyResolution: DependencyResolutionInput;
}>;

export type DeleteContactCustomFieldMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', deleteCustomField?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType }> | null } | null } | null };

export type CountContactsQueryVariables = Exact<{
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type CountContactsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', getContactsCount?: number | null } | null };

export type LinkContactAsRelatedPersonMutationVariables = Exact<{
  parentContactId: Scalars['ID']['input'];
  linkedContactId: Scalars['ID']['input'];
  relation?: InputMaybe<Scalars['String']['input']>;
}>;

export type LinkContactAsRelatedPersonMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', linkContactAsRelatedPerson?: { __typename?: 'ContactRelationship', id: string, parentContactId: string, linkedContactId: string, relation?: string | null } | null } | null };

export type GetContactIdentityQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type GetContactIdentityQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, emails?: Array<{ __typename?: 'ContactEmail', email: string }> | null } | null } | null };

export type GetContactsPropertiesQueryVariables = Exact<{
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type GetContactsPropertiesQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', getContacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null, isArchived?: boolean | null, properties?: Array<{ __typename?: 'ContactProperty', propertyString?: string | null, status?: string | null, property?: { __typename?: 'Property', id: string } | null }> | null }> | null } | null };

export type GetContactConnectionsQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type GetContactConnectionsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, externalLinks?: Array<{ __typename?: 'ExternalLink', id: string, title: string, url: string }> | null, linkedRelationships?: Array<{ __typename?: 'ContactRelationship', id: string, relation?: string | null, note?: string | null, linkedContactId: string }> | null, subContacts?: Array<{ __typename?: 'SubContact', id: string, name: string, relation?: string | null }> | null, aiPause?: { __typename?: 'ContactAiPause', mode: ContactAiPauseMode, pausedAt: any, pausedUntil?: any | null, reason?: string | null, pausedByAgentId?: string | null, pausedByWorkflowRunId?: string | null, pausedBySystem?: string | null, pausedBy?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null } | null } | null } | null };

export type ListContactDirectMailQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListContactDirectMailQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', directMailPieces?: { __typename?: 'DirectMailPiecePage', hasNextPage: boolean, nextCursor?: string | null, nodes: Array<{ __typename?: 'DirectMailPieceSummary', id: string, campaignLabel: string, status: DirectMailPieceDisplayState, preparedAt: any, mailedAt?: any | null }> } | null } | null };

export type SetContactDoNotContactMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}>;

export type SetContactDoNotContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', setContactDoNotContact?: { __typename?: 'Contact', id: string, doNotContact?: boolean | null } | null } | null };

export type SetPhoneDoNotContactMutationVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}>;

export type SetPhoneDoNotContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', setPhoneDoNotContact?: { __typename?: 'PhoneDoNotContactResult', normalizedValue: string, doNotContact: boolean } | null } | null };

export type PauseContactAiMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  mode: ContactAiPauseMode;
  pausedUntil?: InputMaybe<Scalars['DateTime']['input']>;
  reason?: InputMaybe<Scalars['String']['input']>;
}>;

export type PauseContactAiMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', pauseContactAi?: { __typename?: 'Contact', id: string, aiPause?: { __typename?: 'ContactAiPause', mode: ContactAiPauseMode, pausedUntil?: any | null } | null } | null } | null };

export type ResumeContactAiMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type ResumeContactAiMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', resumeContactAi?: { __typename?: 'Contact', id: string } | null } | null };

export type PauseContactsAiMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  mode: ContactAiPauseMode;
  pausedUntil?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type PauseContactsAiMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', pauseContactsAi?: { __typename?: 'ContactsBulkActionResponse', bulkTaskId?: string | null } | null } | null };

export type ResumeContactsAiMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type ResumeContactsAiMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', resumeContactsAi?: { __typename?: 'ContactsBulkActionResponse', bulkTaskId?: string | null } | null } | null };

export type AddContactExternalLinkMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
}>;

export type AddContactExternalLinkMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createContactExternalLink?: { __typename?: 'ExternalLink', id: string } | null } | null };

export type UpdateContactExternalLinkMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  linkId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateContactExternalLinkMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', updateContactExternalLink?: { __typename?: 'ExternalLink', id: string } | null } | null };

export type RemoveContactExternalLinkMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  linkId: Scalars['ID']['input'];
}>;

export type RemoveContactExternalLinkMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', deleteContactExternalLink?: { __typename?: 'Contact', id: string } | null } | null };

export type UpdateContactRelationshipMutationVariables = Exact<{
  relationshipId: Scalars['ID']['input'];
  relation?: InputMaybe<Scalars['String']['input']>;
  note?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateContactRelationshipMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', updateContactRelationship?: { __typename?: 'ContactRelationship', id: string, relation?: string | null, note?: string | null } | null } | null };

export type UnlinkRelatedContactMutationVariables = Exact<{
  relationshipId: Scalars['ID']['input'];
}>;

export type UnlinkRelatedContactMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', unlinkRelatedContact?: boolean | null } | null };

export type ConvertSubContactToLinkedRelationshipMutationVariables = Exact<{
  subContactId: Scalars['String']['input'];
  linkToExisting?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ConvertSubContactToLinkedRelationshipMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', convertSubContactToLinkedRelationship?: { __typename?: 'ContactRelationship', id: string, linkedContactId: string } | null } | null };

export type RequestDirectMailCancellationMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  pieceId: Scalars['ID']['input'];
}>;

export type RequestDirectMailCancellationMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', requestDirectMailCancellation?: { __typename?: 'DirectMailPieceDetail', id: string, status: DirectMailPieceDisplayState } | null } | null };

export type ControlContactsWorkflowRunsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  operation: WorkflowRunBulkOperation;
  workflowGroupIds?: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ControlContactsWorkflowRunsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createBulkControlWorkflowRunsTask?: { __typename?: 'ContactsBulkActionResponse', bulkTaskId?: string | null } | null } | null };

export type RemoveContactFilesMutationVariables = Exact<{
  contactId: Scalars['String']['input'];
  fileIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type RemoveContactFilesMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', updateContact?: { __typename?: 'Contact', id: string, files?: Array<{ __typename?: 'UploadedFile', id: string, fileName: string }> | null } | null } | null };

export type SetContactPhotoMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  uploadedFileId: Scalars['ID']['input'];
}>;

export type SetContactPhotoMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', setContactPhoto?: { __typename?: 'Contact', id: string, photo?: { __typename?: 'UploadedFile', id: string, fileName: string } | null } | null } | null };

export type ClearContactPhotoMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type ClearContactPhotoMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', clearContactPhoto?: { __typename?: 'Contact', id: string } | null } | null };

export type ShareContactWithPartnerMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  partnerOrganizationId: Scalars['ID']['input'];
  assignments: Array<ShareContactUserAssignmentInput> | ShareContactUserAssignmentInput;
  includeContactCore?: InputMaybe<Scalars['Boolean']['input']>;
  includeTasks?: InputMaybe<Scalars['Boolean']['input']>;
  includeNotes?: InputMaybe<Scalars['Boolean']['input']>;
  includeCalls?: InputMaybe<Scalars['Boolean']['input']>;
  includeTexts?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ShareContactWithPartnerMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', shareContact?: { __typename?: 'ShareContactResult', baseContactId: string, copiedContactId: string } | null } | null };

export type UnshareContactWithPartnerMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  partnerOrganizationId: Scalars['ID']['input'];
}>;

export type UnshareContactWithPartnerMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', unshareContact?: { __typename?: 'UnshareContactResult', baseContactId: string, copiedContactId: string, revokedUsersCount: number } | null } | null };

export type ShareContactsWithPartnerMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  partnerOrganizationId: Scalars['ID']['input'];
  assignments: Array<BulkShareContactUserAssignmentInput> | BulkShareContactUserAssignmentInput;
  includeContactCore?: InputMaybe<Scalars['Boolean']['input']>;
  includeTasks?: InputMaybe<Scalars['Boolean']['input']>;
  includeNotes?: InputMaybe<Scalars['Boolean']['input']>;
  includeCalls?: InputMaybe<Scalars['Boolean']['input']>;
  includeTexts?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ShareContactsWithPartnerMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', bulkShareContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type SetContactsTeamsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  addTeamIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  removeTeamIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  replaceExisting?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type SetContactsTeamsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', bulkAssignUserGroupsOnContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type ListContractTemplatesQueryVariables = Exact<{
  includeArchived?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ListContractTemplatesQuery = { __typename?: 'RootQuery', contractsQuery?: { __typename?: 'ContractsQuery', templates?: Array<{ __typename?: 'AdminContractTemplateSummary', id: string, name: string, category: string, status: AdminContractTemplateStatus, currentVersionNumber?: number | null, signerRoles: Array<string>, uses: Array<string>, sentCount: number, signedCount: number }> | null } | null };

export type ListContractsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListContractsQuery = { __typename?: 'RootQuery', contractsQuery?: { __typename?: 'ContractsQuery', contracts?: Array<{ __typename?: 'AdminContractSummary', id: string, title: string, templateId?: string | null, status?: AdminContractStatus | null, held: boolean, contactId?: string | null, contactName: string, signerCount: number, signedCount: number, sentAt?: any | null, expiresAt?: any | null, completedAt?: any | null, signers: Array<{ __typename?: 'AdminContractSigner', displayName: string, status: AdminContractRecipientStatus, signedAt?: any | null }> }> | null } | null };

export type ListContactContractsQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type ListContactContractsQuery = { __typename?: 'RootQuery', contractsQuery?: { __typename?: 'ContractsQuery', contactContracts?: Array<{ __typename?: 'AdminContractSummary', id: string, title: string, templateId?: string | null, status?: AdminContractStatus | null, held: boolean, contactId?: string | null, contactName: string, signerCount: number, signedCount: number, sentAt?: any | null, expiresAt?: any | null, completedAt?: any | null, signers: Array<{ __typename?: 'AdminContractSigner', displayName: string, status: AdminContractRecipientStatus, signedAt?: any | null }> }> | null } | null };

export type ListDealContractsQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
}>;

export type ListDealContractsQuery = { __typename?: 'RootQuery', contractsQuery?: { __typename?: 'ContractsQuery', dealContracts?: Array<{ __typename?: 'AdminContractSummary', id: string, title: string, templateId?: string | null, status?: AdminContractStatus | null, held: boolean, contactId?: string | null, contactName: string, signerCount: number, signedCount: number, sentAt?: any | null, expiresAt?: any | null, completedAt?: any | null, signers: Array<{ __typename?: 'AdminContractSigner', displayName: string, status: AdminContractRecipientStatus, signedAt?: any | null }> }> | null } | null };

export type GetContractQueryVariables = Exact<{
  contractId: Scalars['ID']['input'];
}>;

export type GetContractQuery = { __typename?: 'RootQuery', contractsQuery?: { __typename?: 'ContractsQuery', contract?: { __typename?: 'AdminContract', id: string, title: string, category: string, status?: AdminContractStatus | null, held: boolean, contactId?: string | null, contactName: string, revisionNumber: number, subject: string, message: string, expiryDays: number, reminderIntervalDays?: number | null, sentAt?: any | null, expiresAt?: any | null, completedAt?: any | null, unsignedPdfUrl?: string | null, signedPdfUrl?: string | null, deal?: { __typename?: 'AdminContractSendPipelineItem', id: string, title: string } | null, values: Array<{ __typename?: 'AdminContractValue', key: string, label: string, value: string }>, recipients: Array<{ __typename?: 'AdminContractRecipient', id: string, roleLabel: string, kind: AdminContractRoleKind, displayName: string, email?: string | null, phone?: string | null, signingOrder: number, status: AdminContractRecipientStatus, firstViewedAt?: any | null, signedAt?: any | null, declinedAt?: any | null, declineReason?: string | null, deliveryProblem?: string | null }> } | null } | null };

export type GetContractSendDraftQueryVariables = Exact<{
  input: AdminContractSendStartInput;
}>;

export type GetContractSendDraftQuery = { __typename?: 'RootQuery', contractsQuery?: { __typename?: 'ContractsQuery', sendDraft?: { __typename?: 'AdminContractSendDraft', templateId: string, templateVersionId: string, templateName: string, title: string, missingTokens: Array<string>, subject: string, message: string, expiryDays: number, reminderIntervalDays?: number | null, dealId?: string | null, contact: { __typename?: 'AdminContractSendContact', id: string, name: string, emails: Array<string>, phones: Array<string> }, contactB?: { __typename?: 'AdminContractSendContact', id: string, name: string, emails: Array<string>, phones: Array<string> } | null, values: Array<{ __typename?: 'AdminContractSendValue', key: string, label: string, source: AdminContractPrefillSource, required: boolean, value: string, record: AdminContractValueRecord }>, roles: Array<{ __typename?: 'AdminContractRole', key: string, label: string, kind: AdminContractRoleKind, order: number }>, recipients: Array<{ __typename?: 'AdminContractSendRecipient', roleKey: string, displayName: string, email?: string | null, phone?: string | null, contactId?: string | null, signingOrder?: number | null }> } | null } | null };

export type GetHeldContractDraftQueryVariables = Exact<{
  contractId: Scalars['ID']['input'];
}>;

export type GetHeldContractDraftQuery = { __typename?: 'RootQuery', contractsQuery?: { __typename?: 'ContractsQuery', heldDraft?: { __typename?: 'AdminContractSendDraft', templateId: string, templateVersionId: string, templateName: string, title: string, heldContractId?: string | null, missingTokens: Array<string>, subject: string, message: string, expiryDays: number, reminderIntervalDays?: number | null, dealId?: string | null, contact: { __typename?: 'AdminContractSendContact', id: string, name: string, emails: Array<string>, phones: Array<string> }, contactB?: { __typename?: 'AdminContractSendContact', id: string, name: string, emails: Array<string>, phones: Array<string> } | null, values: Array<{ __typename?: 'AdminContractSendValue', key: string, label: string, source: AdminContractPrefillSource, required: boolean, value: string, record: AdminContractValueRecord }>, roles: Array<{ __typename?: 'AdminContractRole', key: string, label: string, kind: AdminContractRoleKind, order: number }>, recipients: Array<{ __typename?: 'AdminContractSendRecipient', roleKey: string, displayName: string, email?: string | null, phone?: string | null, contactId?: string | null, signingOrder?: number | null }> } | null } | null };

export type PreviewContractMutationVariables = Exact<{
  input: AdminContractSendInput;
}>;

export type PreviewContractMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', previewContract?: { __typename?: 'AdminContractSendPreview', pdfUrl: string, overflowing: Array<string>, unprintable: Array<string> } | null } | null };

export type PreviewContractMessagesMutationVariables = Exact<{
  input: AdminContractSendInput;
}>;

export type PreviewContractMessagesMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', previewMessages: { __typename?: 'AdminContractSendMessagePreview', email?: { __typename?: 'AdminContractSendEmailPreview', to: string, fromName: string, subject: string, heading: string, senderName: string, replyToFirstName: string, message: string, documentTitle: string, documentDetail: string, openBy: string } | null, text?: { __typename?: 'AdminContractSendTextPreview', to: string, body: string } | null } } | null };

export type PrepareContractMutationVariables = Exact<{
  input: AdminContractPrepareInput;
}>;

export type PrepareContractMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', prepareContract?: { __typename?: 'AdminContract', id: string, title: string, status?: AdminContractStatus | null, revisionNumber: number, contactName: string, unsignedPdfUrl?: string | null } | null } | null };

export type ArchiveContractTemplateMutationVariables = Exact<{
  input: AdminContractArchiveTemplateInput;
}>;

export type ArchiveContractTemplateMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', archiveTemplate?: { __typename?: 'AdminContractTemplate', id: string, name: string, status: AdminContractTemplateStatus } | null } | null };

export type SendContractMutationVariables = Exact<{
  contractId: Scalars['ID']['input'];
  expectedRevisionNumber?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SendContractMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', sendContract?: { __typename?: 'AdminContract', id: string, title: string, status?: AdminContractStatus | null, revisionNumber: number } | null } | null };

export type UnarchiveContractTemplateMutationVariables = Exact<{
  input: AdminContractArchiveTemplateInput;
}>;

export type UnarchiveContractTemplateMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', unarchiveTemplate?: { __typename?: 'AdminContractTemplate', id: string, name: string, status: AdminContractTemplateStatus } | null } | null };

export type CompleteContractMutationVariables = Exact<{
  contractId: Scalars['ID']['input'];
  expectedRevisionNumber?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CompleteContractMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', completeContract?: { __typename?: 'AdminContract', id: string, title: string, status?: AdminContractStatus | null, revisionNumber: number } | null } | null };

export type RemindContractMutationVariables = Exact<{
  contractId: Scalars['ID']['input'];
  expectedRevisionNumber?: InputMaybe<Scalars['Int']['input']>;
}>;

export type RemindContractMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', remindContract?: { __typename?: 'AdminContract', id: string, title: string, status?: AdminContractStatus | null, revisionNumber: number } | null } | null };

export type VoidContractMutationVariables = Exact<{
  contractId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
  expectedRevisionNumber?: InputMaybe<Scalars['Int']['input']>;
}>;

export type VoidContractMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', voidContract?: { __typename?: 'AdminContract', id: string, title: string, status?: AdminContractStatus | null, revisionNumber: number } | null } | null };

export type CorrectContractMutationVariables = Exact<{
  input: AdminContractCorrectInput;
}>;

export type CorrectContractMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', correctContract?: { __typename?: 'AdminContract', id: string, title: string, status?: AdminContractStatus | null, revisionNumber: number } | null } | null };

export type IssueContractSigningLinkMutationVariables = Exact<{
  contractId: Scalars['ID']['input'];
  recipientId: Scalars['ID']['input'];
  expectedRevisionNumber?: InputMaybe<Scalars['Int']['input']>;
}>;

export type IssueContractSigningLinkMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', issueSigningLink?: { __typename?: 'AdminContractSigningLink', url: string, expiresAt: any } | null } | null };

export type ListInboxThreadsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortDirection>;
  channel?: InputMaybe<InboxFilterType>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  respondedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  sentBy?: InputMaybe<Array<InboxSentBy> | InboxSentBy>;
  replySentiments?: InputMaybe<Array<ReplySentiment> | ReplySentiment>;
  optedOut?: InputMaybe<InboxOptedOutScope>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  starredOnly?: InputMaybe<Scalars['Boolean']['input']>;
  callCursor?: InputMaybe<CursorInput>;
  smsCursor?: InputMaybe<CursorInput>;
  emailCursor?: InputMaybe<CursorInput>;
}>;

export type ListInboxThreadsQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', paginateInbox?: { __typename?: 'InboxCursorPage', items?: Array<{ __typename?: 'InboxItem', id: string, type: InboxItemType, createdAt: any, createdAtLocal?: string | null, seen: boolean, contactName?: string | null, contactE164PhoneNumber?: string | null, phoneLineId?: string | null, emailThreadId?: string | null, direction?: CommunicationDirection | null, replySentiment?: ReplySentiment | null, isStarred?: boolean | null, isNeedsReplyHandled?: boolean | null, status?: CallStatus | null, durationSeconds?: number | null, summary?: string | null, hasRecording?: boolean | null, groupCount?: number | null, groupedCallIds?: Array<string> | null, subject?: string | null, snippet?: string | null, fromEmail?: string | null, fromName?: string | null, toEmails?: Array<string> | null, isRead?: boolean | null, potentialContacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, mostRecentMessage?: { __typename?: 'TwilioMessage', id: string, message?: string | null, direction?: CommunicationDirection | null, status?: TextMessageStatus | null, createdAt?: any | null, createdAtLocal?: string | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null } | null, recentInbound?: Array<{ __typename?: 'InboxInboundText', body: string, at: any, atLocal?: string | null }> | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null }> | null, nextCallCursor?: { __typename?: 'Cursor', date: any, id: string } | null, nextSmsCursor?: { __typename?: 'Cursor', date: any, id: string } | null, nextEmailCursor?: { __typename?: 'Cursor', date: any, id: string } | null } | null } | null };

export type GetTextThreadMessagesQueryVariables = Exact<{
  contactPhoneNumber: Scalars['String']['input'];
  conversationId?: InputMaybe<Scalars['ID']['input']>;
  phoneLineId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortDirection>;
}>;

export type GetTextThreadMessagesQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', getInboxMessages?: Array<{ __typename?: 'TextConversation', id: string, contactE164PhoneNumber?: string | null, phoneLineId?: string | null, seen?: boolean | null, potentialContacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, messages?: Array<{ __typename?: 'TwilioMessage', id: string, message?: string | null, direction?: CommunicationDirection | null, status?: TextMessageStatus | null, createdAt?: any | null, createdAtLocal?: string | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, errorCode?: string | null, errorMessage?: string | null, workflowAutomationName?: string | null, agentName?: string | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null, fromSuggestion?: { __typename?: 'TwilioMessageSourceCard', agentName: string, edited?: boolean | null } | null, mediaFiles?: Array<{ __typename?: 'UploadedFile', id: string, fileName: string }> | null }> | null }> | null } | null };

export type ListContactTextThreadsQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type ListContactTextThreadsQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', getContactTextThreads?: Array<{ __typename?: 'ContactTextThread', id: string, contactE164PhoneNumber: string, phoneLineId: string, twilioPhoneNumberE164?: string | null }> | null } | null };

export type GetEmailThreadQueryVariables = Exact<{
  threadId: Scalars['ID']['input'];
}>;

export type GetEmailThreadQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', getEmailThreadMessages?: Array<{ __typename?: 'EmailMessage', id: string, threadId?: string | null, subject?: string | null, snippet?: string | null, textExtract?: string | null, fromEmail?: string | null, fromName?: string | null, toEmails?: Array<string> | null, ccEmails?: Array<string> | null, internalDate?: any | null, direction?: string | null, isRead?: boolean | null, workflowAutomationName?: string | null, attachments?: Array<{ __typename?: 'UploadedFile', id: string, fileName: string }> | null }> | null } | null };

export type GetCallRecordingQueryVariables = Exact<{
  callId: Scalars['ID']['input'];
}>;

export type GetCallRecordingQuery = { __typename?: 'RootQuery', callsQuery?: { __typename?: 'CallsQuery', callRecording?: { __typename?: 'Call', id: string, recordingUrl?: string | null, summary?: string | null, disposition?: CallDisposition | null, dispositionNote?: string | null, direction?: CommunicationDirection | null, status?: CallStatus | null, durationSeconds?: number | null, createdAt?: any | null, seen?: boolean | null, contactName?: string | null, contactE164PhoneNumber?: string | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, agentName?: string | null, transcript?: Array<{ __typename?: 'Utterance', speaker: string, text: string, start?: number | null, end?: number | null }> | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null } | null } | null };

export type MarkInboxThreadsReadMutationVariables = Exact<{
  isRead: Scalars['Boolean']['input'];
  textConversationIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  callIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  emailMessageIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type MarkInboxThreadsReadMutation = { __typename?: 'RootMutation', smsMutation?: { __typename?: 'SmsMutation', toggleBulkConversationSeen?: number | null } | null, callsMutation?: { __typename?: 'CallsMutation', toggleBulkCallSeen?: number | null } | null, emailMutation?: { __typename?: 'EmailMutation', toggleBulkEmailRead?: Array<{ __typename?: 'EmailMessage', id: string, isRead?: boolean | null }> | null } | null };

export type SetInboxThreadStarredMutationVariables = Exact<{
  textConversationId: Scalars['String']['input'];
  starred: Scalars['Boolean']['input'];
}>;

export type SetInboxThreadStarredMutation = { __typename?: 'RootMutation', smsMutation?: { __typename?: 'SmsMutation', setConversationStarred: boolean } | null };

export type SetInboxThreadHandledMutationVariables = Exact<{
  textConversationId: Scalars['String']['input'];
  handledThroughMessageId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type SetInboxThreadHandledMutation = { __typename?: 'RootMutation', smsMutation?: { __typename?: 'SmsMutation', setConversationNeedsReplyHandled: boolean } | null };

export type DismissInboxItemMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
  itemType: InboxItemType;
}>;

export type DismissInboxItemMutation = { __typename?: 'RootMutation', inboxMutation?: { __typename?: 'InboxMutation', dismissInboxItem?: boolean | null } | null };

export type GetCoverageCellsQueryVariables = Exact<{
  stateAbbr?: InputMaybe<Scalars['String']['input']>;
  countyFips?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type GetCoverageCellsQuery = { __typename?: 'RootQuery', coverageQuery?: { __typename?: 'CoverageQuery', countyCells: Array<{ __typename?: 'CustomerCoverageCell', countyFips: string, countyName: string, stateAbbr: string, family: string, status: CustomerCoverageStatus, delayed: boolean, partial: boolean, expectedBy?: any | null, pastPromise: boolean, notAvailableReason?: CoverageNotAvailableReason | null, requestedByMe: boolean, requestedAt?: any | null, delivered30d: number }> } | null };

export type GetCoverageAvailabilityQueryVariables = Exact<{
  signalTypes: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type GetCoverageAvailabilityQuery = { __typename?: 'RootQuery', coverageQuery?: { __typename?: 'CoverageQuery', availability: Array<{ __typename?: 'CoverageAvailability', signalType: string, family?: string | null, status: CoverageAvailabilityStatus, promised: boolean, liveCounties: number, totalCounties: number, counties: Array<{ __typename?: 'CoverageAvailabilityCounty', countyFips: string, countyName: string, stateAbbr: string, status: CoverageAvailabilityStatus }> }> } | null };

export type ListMyCoverageRequestsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListMyCoverageRequestsQuery = { __typename?: 'RootQuery', coverageQuery?: { __typename?: 'CoverageQuery', myRequests: Array<{ __typename?: 'CustomerCoverageRequest', id: string, family: string, countyFips?: string | null, countyName?: string | null, stateAbbr?: string | null, requestedAt: any, status: CustomerCoverageStatus, expectedBy?: any | null, pastPromise: boolean, liveSince?: any | null }> } | null };

export type RequestCoverageMutationVariables = Exact<{
  locations: Array<Scalars['String']['input']> | Scalars['String']['input'];
  signals: Array<Scalars['String']['input']> | Scalars['String']['input'];
  families?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type RequestCoverageMutation = { __typename?: 'RootMutation', coverageRequestMutation?: { __typename?: 'CoverageRequestMutation', requestCoverage?: { __typename?: 'CoverageRequestOutcome', cells: Array<{ __typename?: 'RequestedCoverageCell', jurisdictionKey: string, family: string, created: boolean, buildStatus: string, served: boolean }>, gaps: Array<{ __typename?: 'CoverageRequestGap', reason: string, values: Array<string> }> } | null } | null };

export type RequestSignalsInMyCountiesMutationVariables = Exact<{
  signalTypes: Array<Scalars['String']['input']> | Scalars['String']['input'];
  context?: InputMaybe<Scalars['String']['input']>;
}>;

export type RequestSignalsInMyCountiesMutation = { __typename?: 'RootMutation', coverageRequestMutation?: { __typename?: 'CoverageRequestMutation', requestFromBuilder: Array<{ __typename?: 'CoverageAvailability', signalType: string, status: CoverageAvailabilityStatus, promised: boolean, liveCounties: number, totalCounties: number }> } | null };

export type CancelCoverageRequestMutationVariables = Exact<{
  countyFips: Scalars['String']['input'];
  family: Scalars['String']['input'];
}>;

export type CancelCoverageRequestMutation = { __typename?: 'RootMutation', coverageRequestMutation?: { __typename?: 'CoverageRequestMutation', cancelCoverageRequest: boolean } | null };

export type ImportContactMutationVariables = Exact<{
  input: ImportContactInput;
}>;

export type ImportContactMutation = { __typename?: 'RootMutation', crmImportMutation?: { __typename?: 'CrmImportMutation', importContact?: { __typename?: 'ImportContactResult', contactId: string, wasCreated: boolean } | null } | null };

export type ImportContactNoteMutationVariables = Exact<{
  input: ImportContactNoteInput;
}>;

export type ImportContactNoteMutation = { __typename?: 'RootMutation', crmImportMutation?: { __typename?: 'CrmImportMutation', importContactNote?: { __typename?: 'ImportContactNoteResult', noteId: string, contactId: string, metadata?: any | null } | null } | null };

export type ImportDealMutationVariables = Exact<{
  input: ImportPipelineItemInput;
}>;

export type ImportDealMutation = { __typename?: 'RootMutation', crmImportMutation?: { __typename?: 'CrmImportMutation', importDeal?: { __typename?: 'ImportPipelineItemResult', wasCreated: boolean, dealId: string } | null } | null };

export type GetDealQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
}>;

export type GetDealQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', getDeal?: { __typename?: 'Deal', id: string, title: string, description?: string | null, priceCents?: any | null, priceFormatted?: string | null, closeDate?: any | null, isArchived: boolean, createdAt?: any | null, updatedAt?: any | null, lastStageChangeAt?: any | null, commissionCents?: any | null, commissionFormatted?: string | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, participantSplits?: Array<{ __typename?: 'PipelineItemParticipantSplit', splitAmountCents?: any | null, splitPercentBps?: number | null, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } }> | null, stage?: { __typename?: 'PipelineStage', id: string, name: string } | null, externalLinks?: Array<{ __typename?: 'ExternalLink', id: string, title: string, url: string }> | null, linkedItems: Array<{ __typename?: 'PipelineItemLink', id: string, label?: string | null, item: { __typename?: 'Deal', id: string, title: string } }>, pipeline?: { __typename?: 'Pipeline', id: string, name: string } | null, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, completedAt?: any | null, dueDate?: any | null }> | null, customFieldValues?: Array<{ __typename?: 'PipelineItemCustomFieldValue', id: string, textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'PipelineItemCustomField', id: string, name: string, type: PipelineItemCustomFieldType } }> | null } | null } | null };

export type FindDealsQueryVariables = Exact<{
  titleContains?: InputMaybe<Scalars['String']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  contactIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  stageId?: InputMaybe<Scalars['ID']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  hasAssignedUsers?: InputMaybe<Scalars['Boolean']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  stageName?: InputMaybe<Scalars['String']['input']>;
  outcome?: InputMaybe<PipelineItemOutcomeFilter>;
  stageChangedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  stageChangedBefore?: InputMaybe<Scalars['DateTime']['input']>;
  closeDateAfter?: InputMaybe<Scalars['DateTime']['input']>;
  closeDateBefore?: InputMaybe<Scalars['DateTime']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FindDealsQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', findDeals?: { __typename?: 'FindPipelineItemsResult', totalCount: number, hasMore: boolean, deals: Array<{ __typename?: 'Deal', id: string, title: string, priceCents?: any | null, priceFormatted?: string | null, closeDate?: any | null, isArchived: boolean, createdAt?: any | null, updatedAt?: any | null, lastStageChangeAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, stage?: { __typename?: 'PipelineStage', id: string, name: string } | null, pipeline?: { __typename?: 'Pipeline', id: string, name: string } | null, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, taskSummary: { __typename?: 'PipelineItemTaskSummary', openTaskCount: number, openAppointmentCount: number }, customFieldValues?: Array<{ __typename?: 'PipelineItemCustomFieldValue', textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'PipelineItemCustomField', name: string } }> | null }>, totals: { __typename?: 'FindPipelineItemsTotals', priceFormatted: string, averagePriceFormatted?: string | null, commissionFormatted: string, pricedDealCount: number, commissionDealCount: number } } | null } | null };

export type SurveyDealsQueryVariables = Exact<{
  titleContains?: InputMaybe<Scalars['String']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  contactIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  stageId?: InputMaybe<Scalars['ID']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  hasAssignedUsers?: InputMaybe<Scalars['Boolean']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SurveyDealsQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', findDeals?: { __typename?: 'FindPipelineItemsResult', totalCount: number, hasMore: boolean, deals: Array<{ __typename?: 'Deal', id: string, title: string, isArchived: boolean, stage?: { __typename?: 'PipelineStage', name: string } | null, pipeline?: { __typename?: 'Pipeline', name: string } | null, users?: Array<{ __typename?: 'User', firstName?: string | null, lastName?: string | null }> | null, taskSummary: { __typename?: 'PipelineItemTaskSummary', openTaskCount: number, openAppointmentCount: number }, customFieldValues?: Array<{ __typename?: 'PipelineItemCustomFieldValue', textValue?: string | null, numberValue?: number | null, dateValue?: any | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'PipelineItemCustomField', name: string } }> | null }> } | null } | null };

export type ListStalledDealsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListStalledDealsQuery = { __typename?: 'RootQuery', pipelineSummaryQuery?: { __typename?: 'PipelineSummaryQuery', stalledDealsPage?: { __typename?: 'StalledPipelineItemsPage', totalCount: number, hasMore: boolean, deals: Array<{ __typename?: 'StalledPipelineItem', id: string, name: string, value: number, stage: string, pipelineId: string, contactName?: string | null, contactId?: string | null, inactiveDays: number }> } | null } | null };

export type ListPipelinesQueryVariables = Exact<{ [key: string]: never; }>;

export type ListPipelinesQuery = { __typename?: 'RootQuery', pipelineSummaryQuery?: { __typename?: 'PipelineSummaryQuery', summaries?: Array<{ __typename?: 'PipelineSummary', id: string, name: string, sameNameCount: number, total: number, deals: number, stages: Array<{ __typename?: 'PipelineStageSummary', name: string, outcome: string, count: number, value: number }> }> | null } | null };

export type ListDealFiltersQueryVariables = Exact<{ [key: string]: never; }>;

export type ListDealFiltersQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilters?: Array<{ __typename?: 'Filter', id: string, name: string, description?: string | null, folderId?: string | null, isPrivate: boolean, isDefault: boolean, userId?: string | null, createdAt: any, criteriaSummary?: string | null }> | null } | null };

export type FilterDealsQueryVariables = Exact<{
  filterId: Scalars['ID']['input'];
  pipelineId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FilterDealsQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', applyDealFilter?: { __typename?: 'FilteredPipelineItemsResponse', items: Array<{ __typename?: 'Deal', id: string, title: string, isArchived: boolean, stage?: { __typename?: 'PipelineStage', id: string, name: string } | null, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }>, pagination: { __typename?: 'FilterPaginationResponse', total?: number | null, hasMore?: boolean | null } } | null } | null };

export type ListPipelineNamesQueryVariables = Exact<{ [key: string]: never; }>;

export type ListPipelineNamesQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', listDealPipelineRefs?: Array<{ __typename?: 'PipelineRef', id: string, name: string, sameNameCount: number }> | null } | null };

export type ListStagesOfPipelinesQueryVariables = Exact<{ [key: string]: never; }>;

export type ListStagesOfPipelinesQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', myPipelines?: Array<{ __typename?: 'Pipeline', id: string, name: string, stages?: Array<{ __typename?: 'PipelineStage', id: string, name: string, isTerminal: boolean }> | null }> | null, sharedPipelines?: Array<{ __typename?: 'Pipeline', id: string, name: string, sharedByOrganizationName?: string | null, stages?: Array<{ __typename?: 'PipelineStage', id: string, name: string, isTerminal: boolean }> | null }> | null } | null };

export type ListPipelineStagesQueryVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
}>;

export type ListPipelineStagesQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', getDealPipelineStages?: Array<{ __typename?: 'PipelineStage', id: string, name: string, order: number, isTerminal: boolean, terminalType?: PipelineStageTerminalType | null, winProbability: number }> | null } | null };

export type CreateDealMutationVariables = Exact<{
  input: CreatePipelineItemInput;
}>;

export type CreateDealMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', createDeal?: { __typename?: 'Deal', id: string, title: string, priceCents?: any | null, closeDate?: any | null, isArchived: boolean, updatedAt?: any | null, createdAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, participantSplits?: Array<{ __typename?: 'PipelineItemParticipantSplit', splitAmountCents?: any | null, splitPercentBps?: number | null, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } }> | null, customFieldValues?: Array<{ __typename?: 'PipelineItemCustomFieldValue', id: string, textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'PipelineItemCustomField', id: string, name: string, type: PipelineItemCustomFieldType } }> | null, stage?: { __typename?: 'PipelineStage', id: string, name: string } | null, pipeline?: { __typename?: 'Pipeline', id: string, name: string } | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, properties?: Array<{ __typename?: 'Property', id: string, address?: { __typename?: 'Address', addressFull?: string | null } | null }> | null } | null } | null };

export type UpdateDealMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  input: PipelineItemMutationInput;
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type UpdateDealMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', updateDeal?: { __typename?: 'Deal', id: string, title: string, priceCents?: any | null, closeDate?: any | null, isArchived: boolean, updatedAt?: any | null, lastStageChangeAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, participantSplits?: Array<{ __typename?: 'PipelineItemParticipantSplit', splitAmountCents?: any | null, splitPercentBps?: number | null, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } }> | null, customFieldValues?: Array<{ __typename?: 'PipelineItemCustomFieldValue', id: string, textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'PipelineItemCustomField', id: string, name: string, type: PipelineItemCustomFieldType } }> | null, stage?: { __typename?: 'PipelineStage', id: string, name: string } | null, pipeline?: { __typename?: 'Pipeline', id: string, name: string } | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, properties?: Array<{ __typename?: 'Property', id: string, address?: { __typename?: 'Address', addressFull?: string | null } | null }> | null } | null } | null };

export type ArchiveDealMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  isArchived: Scalars['Boolean']['input'];
}>;

export type ArchiveDealMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', changeArchiveStatus?: { __typename?: 'Deal', id: string, title: string, isArchived: boolean } | null } | null };

export type CreatePipelineMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  stages?: InputMaybe<Array<PipelineStageCreateInput> | PipelineStageCreateInput>;
}>;

export type CreatePipelineMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', createPipeline?: { __typename?: 'Pipeline', id: string, name: string, description?: string | null, stages?: Array<{ __typename?: 'PipelineStage', id: string, name: string, order: number, isTerminal: boolean, terminalType?: PipelineStageTerminalType | null, winProbability: number }> | null } | null } | null };

export type UpdatePipelineMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdatePipelineMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', updateDealPipeline?: { __typename?: 'Pipeline', id: string, name: string, description?: string | null, dealsCount: number } | null } | null };

export type AddPipelineStagesMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  stages: Array<PipelineStageCreateInput> | PipelineStageCreateInput;
}>;

export type AddPipelineStagesMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', createDealStages?: { __typename?: 'Pipeline', id: string, name: string, stages?: Array<{ __typename?: 'PipelineStage', id: string, name: string, order: number, isTerminal: boolean, terminalType?: PipelineStageTerminalType | null, winProbability: number }> | null } | null } | null };

export type UpdatePipelineStageMutationVariables = Exact<{
  stageId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isTerminal?: InputMaybe<Scalars['Boolean']['input']>;
  terminalType?: InputMaybe<PipelineStageTerminalType>;
  winProbability?: InputMaybe<Scalars['Int']['input']>;
}>;

export type UpdatePipelineStageMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', updateDealStage?: { __typename?: 'PipelineStage', id: string, name: string, order: number, description?: string | null, isTerminal: boolean, terminalType?: PipelineStageTerminalType | null, winProbability: number } | null } | null };

export type ReorderPipelineStagesMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  stageIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ReorderPipelineStagesMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', reorderDealStages?: { __typename?: 'Pipeline', id: string, name: string, stages?: Array<{ __typename?: 'PipelineStage', id: string, name: string, order: number }> | null } | null } | null };

export type GetPipelineAnalyticsQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;

export type GetPipelineAnalyticsQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentPipelineInventory?: { __typename?: 'AgentPipelineInventory', asOfDate: any, period: AgentAnalyticsPeriod, reportingPeriod: string, startDate: any, endDate: any, pipelines: Array<{ __typename?: 'AgentPipelineRow', pipelineId: string, pipelineName: string, avgStageDurationDays?: number | null, wonDeals: number, lostDeals: number, activeDealsCount: number, currentStageMix: Array<{ __typename?: 'AgentStageMixItem', stageName: string, dealCount: number }> }> } | null } | null };

export type ListPipelineTransitionsQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;

export type ListPipelineTransitionsQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentPipelineTransitions?: Array<{ __typename?: 'AgentPipelineTransitionRow', asOfDate: any, pipelineId: string, pipelineName: string, fromStageId?: string | null, fromStageName?: string | null, toStageId?: string | null, toStageName?: string | null, transitionsToWonStage?: boolean | null, transitionsToLostStage?: boolean | null, transitionDealsCount: number, fromStageExitDealsCount: number, wonTransitionDealsCount: number, lostTransitionDealsCount: number }> | null } | null };

export type ListDealActivityQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  eventTypes?: InputMaybe<Array<PipelineItemActivityEventType> | PipelineItemActivityEventType>;
}>;

export type ListDealActivityQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', getDeal?: { __typename?: 'Deal', id: string, events?: Array<{ __typename?: 'PipelineItemActivityEvent', id: string, eventType: PipelineItemActivityEventType, createdAt: any, payload: any, taskNow?: string | null, actor?: { __typename?: 'PipelineItemActivityActor', userId: string, name: string } | null }> | null } | null } | null };

export type ListDealFilesQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListDealFilesQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', getDeal?: { __typename?: 'Deal', id: string, files?: Array<{ __typename?: 'UploadedFile', id: string, fileName: string, fileUrl?: string | null, createdAt?: any | null }> | null } | null } | null };

export type ListDealCommentsQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListDealCommentsQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', getDeal?: { __typename?: 'Deal', id: string, events?: Array<{ __typename?: 'PipelineItemActivityEvent', id: string, eventType: PipelineItemActivityEventType, createdAt: any, payload: any, actor?: { __typename?: 'PipelineItemActivityActor', userId: string, name: string } | null }> | null } | null } | null };

export type AddDealCommentMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;

export type AddDealCommentMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', addDealComment?: { __typename?: 'PipelineItemActivityEvent', id: string, eventType: PipelineItemActivityEventType, createdAt: any, payload: any, actor?: { __typename?: 'PipelineItemActivityActor', userId: string, name: string } | null } | null } | null };

export type GetDeletionImpactQueryVariables = Exact<{
  targetKind: DependencyTargetKind;
  targetId: Scalars['ID']['input'];
}>;

export type GetDeletionImpactQuery = { __typename?: 'RootQuery', dependencyQuery?: { __typename?: 'DependencyQuery', getDeletionImpact?: { __typename?: 'DeletionImpact', impactVersion: string, requiresReplacement: boolean, warnings: Array<string>, groups: Array<{ __typename?: 'DependencyImpactGroup', groupKind: DependencyImpactGroupKind, title: string, count: number }>, replacementRequirements: Array<{ __typename?: 'DependencyReplacementRequirement', targetKind: DependencyTargetKind, targetId: string, title: string, options: Array<{ __typename?: 'DependencyReplacementOption', id: string, label: string, subtitle?: string | null }> }> } | null } | null };

export type DeletePipelineMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  dependencyResolution: DependencyResolutionInput;
}>;

export type DeletePipelineMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', deleteDealPipeline?: { __typename?: 'User', id: string } | null } | null };

export type DeletePipelineStageMutationVariables = Exact<{
  stageId: Scalars['ID']['input'];
  dependencyResolution: DependencyResolutionInput;
}>;

export type DeletePipelineStageMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', deleteDealStage?: { __typename?: 'Pipeline', id: string } | null } | null };

export type ListDealCustomFieldsQueryVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
}>;

export type ListDealCustomFieldsQuery = { __typename?: 'RootQuery', dealCustomFieldQuery?: { __typename?: 'PipelineItemCustomFieldQuery', getPipelineCustomFields?: Array<{ __typename?: 'PipelineItemCustomField', id: string, name: string, type: PipelineItemCustomFieldType, displayOrder: number, allowMultiple: boolean, defaultValue?: string | null, options?: Array<{ __typename?: 'PipelineItemCustomFieldOption', id: string, label: string }> | null }> | null } | null };

export type CreateDealCustomFieldMutationVariables = Exact<{
  input: CreatePipelineItemCustomFieldInput;
  pipelineId: Scalars['ID']['input'];
}>;

export type CreateDealCustomFieldMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'PipelineItemCustomFieldMutation', createCustomField?: { __typename?: 'PipelineItemCustomFieldQuery', getPipelineCustomFields?: Array<{ __typename?: 'PipelineItemCustomField', id: string, name: string, type: PipelineItemCustomFieldType }> | null } | null } | null };

export type UpdateDealCustomFieldMutationVariables = Exact<{
  customFieldId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<UpsertPipelineItemCustomFieldOptionInput> | UpsertPipelineItemCustomFieldOptionInput>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  optionDependencyResolutions?: InputMaybe<Array<DependencyResolutionInput> | DependencyResolutionInput>;
}>;

export type UpdateDealCustomFieldMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'PipelineItemCustomFieldMutation', updateCustomField?: { __typename?: 'PipelineItemCustomField', id: string, name: string, type: PipelineItemCustomFieldType, displayOrder: number, allowMultiple: boolean, defaultValue?: string | null, options?: Array<{ __typename?: 'PipelineItemCustomFieldOption', id: string, label: string }> | null } | null } | null };

export type AttachDealFileMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  artifactId: Scalars['ID']['input'];
}>;

export type AttachDealFileMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', attachDealFileFromArtifact?: { __typename?: 'UploadedFile', id: string, fileName: string, fileUrl?: string | null, createdAt?: any | null } | null } | null };

export type RemoveDealFileMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  fileId: Scalars['ID']['input'];
}>;

export type RemoveDealFileMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', removeDealFiles?: { __typename?: 'Deal', id: string } | null } | null };

export type DeleteDealMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  dependencyResolution: DependencyResolutionInput;
}>;

export type DeleteDealMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', stageItWasOn?: { __typename?: 'PipelineStage', id: string, name: string } | null } | null };

export type ArchiveDealsMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  dealIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type ArchiveDealsMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', archiveDeals?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type BulkUpdateDealsMutationVariables = Exact<{
  dealIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  input: PipelineItemMutationInput;
}>;

export type BulkUpdateDealsMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', bulkUpdateDeals?: { __typename?: 'PipelineItemBulkUpdateResult', mode: ContactsBulkActionMode, bulkTaskId?: string | null, updatedDealCount?: number | null } | null } | null };

export type BulkCreateDealsOnContactsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  deal: CreatePipelineItemInput;
  propertyAttachmentMode?: InputMaybe<BulkPipelineItemPropertyAttachmentMode>;
  skipContactsWithDeal?: InputMaybe<Scalars['Boolean']['input']>;
  autoNameDeals?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type BulkCreateDealsOnContactsMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', bulkCreateDealsOnContacts?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type EditDealCommentMutationVariables = Exact<{
  commentId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;

export type EditDealCommentMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', editDealComment?: { __typename?: 'PipelineItemActivityEvent', id: string, createdAt: any, payload: any } | null } | null };

export type DeleteDealCommentMutationVariables = Exact<{
  commentId: Scalars['ID']['input'];
}>;

export type DeleteDealCommentMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', deleteDealComment?: string | null } | null };

export type AddDealExternalLinkMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
}>;

export type AddDealExternalLinkMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', createDealExternalLink?: { __typename?: 'ExternalLink', id: string, title: string, url: string } | null } | null };

export type RemoveDealExternalLinkMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  linkId: Scalars['ID']['input'];
}>;

export type RemoveDealExternalLinkMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', deleteDealExternalLink?: { __typename?: 'Deal', id: string, externalLinks?: Array<{ __typename?: 'ExternalLink', id: string, title: string, url: string }> | null } | null } | null };

export type LinkPipelineItemsMutationVariables = Exact<{
  pipelineItemId: Scalars['ID']['input'];
  otherPipelineItemId: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
}>;

export type LinkPipelineItemsMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', linkPipelineItems?: { __typename?: 'PipelineItemLink', id: string } | null } | null };

export type UnlinkPipelineItemsMutationVariables = Exact<{
  linkId: Scalars['ID']['input'];
}>;

export type UnlinkPipelineItemsMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', unlinkPipelineItems?: boolean | null } | null };

export type GetDealPipelineLayoutQueryVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
}>;

export type GetDealPipelineLayoutQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', getDealPipeline?: { __typename?: 'Pipeline', id: string, name: string, canEditPipeline: boolean, hiddenDetailFieldKeys?: Array<string> | null, customFields?: Array<{ __typename?: 'PipelineItemCustomField', id: string, name: string, type: PipelineItemCustomFieldType, displayOrder: number, showOnCard?: boolean | null, cardDisplayOrder?: number | null }> | null } | null } | null };

export type AddDealCustomFieldOptionMutationVariables = Exact<{
  customFieldId: Scalars['ID']['input'];
  label: Scalars['String']['input'];
}>;

export type AddDealCustomFieldOptionMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'PipelineItemCustomFieldMutation', addOption?: { __typename?: 'PipelineItemCustomField', id: string, name: string, options?: Array<{ __typename?: 'PipelineItemCustomFieldOption', id: string, label: string }> | null } | null } | null };

export type ReorderDealCustomFieldsMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  customFieldIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ReorderDealCustomFieldsMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'PipelineItemCustomFieldMutation', reorderCustomFields?: { __typename?: 'PipelineItemCustomFieldQuery', getPipelineCustomFields?: Array<{ __typename?: 'PipelineItemCustomField', id: string, name: string, displayOrder: number }> | null } | null } | null };

export type DeleteDealCustomFieldMutationVariables = Exact<{
  customFieldId: Scalars['ID']['input'];
  pipelineId: Scalars['ID']['input'];
  dependencyResolution: DependencyResolutionInput;
}>;

export type DeleteDealCustomFieldMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'PipelineItemCustomFieldMutation', deleteCustomField?: { __typename?: 'PipelineItemCustomFieldQuery', getPipelineCustomFields?: Array<{ __typename?: 'PipelineItemCustomField', id: string, name: string }> | null } | null } | null };

export type SetDealCardFieldsMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  customFieldIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetDealCardFieldsMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'PipelineItemCustomFieldMutation', updateCardDisplayFields?: Array<{ __typename?: 'PipelineItemCustomField', id: string, name: string, showOnCard?: boolean | null, cardDisplayOrder?: number | null }> | null } | null };

export type SetDealDetailHiddenFieldsMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  hiddenFieldKeys: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type SetDealDetailHiddenFieldsMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'PipelineItemCustomFieldMutation', updateDealDetailFieldVisibility?: { __typename?: 'Pipeline', id: string, hiddenDetailFieldKeys?: Array<string> | null } | null } | null };

export type GetDialingPoolQueryVariables = Exact<{ [key: string]: never; }>;

export type GetDialingPoolQuery = { __typename?: 'RootQuery', dialingPoolQuery?: { __typename?: 'DialingPoolQuery', poolView?: { __typename?: 'DialingPoolView', lines: Array<{ __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, label?: string | null, isDialingPoolLine?: boolean | null, dialing?: { __typename?: 'DialingLineState', callsToday: number, dailyLimit: number, restUntil?: any | null } | null }>, room: { __typename?: 'DialingPoolRoom', roomToday: number, linesInRotation: number, linesResting: number } } | null } | null };

export type GetMyDialingRoomQueryVariables = Exact<{ [key: string]: never; }>;

export type GetMyDialingRoomQuery = { __typename?: 'RootQuery', dialingPoolQuery?: { __typename?: 'DialingPoolQuery', dialableRoomForMe?: { __typename?: 'DialingPoolRoom', linesInRotation: number, linesResting: number } | null } | null };

export type AddNumbersToDialingPoolMutationVariables = Exact<{
  phoneLineIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type AddNumbersToDialingPoolMutation = { __typename?: 'RootMutation', dialingPoolMutation?: { __typename?: 'DialingPoolMutation', addExistingNumbersToPool?: Array<{ __typename?: 'TwilioPhoneNumber', id: string, isDialingPoolLine?: boolean | null }> | null } | null };

export type RemoveNumbersFromDialingPoolMutationVariables = Exact<{
  phoneLineIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type RemoveNumbersFromDialingPoolMutation = { __typename?: 'RootMutation', dialingPoolMutation?: { __typename?: 'DialingPoolMutation', removeNumbersFromPool?: Array<{ __typename?: 'TwilioPhoneNumber', id: string, isDialingPoolLine?: boolean | null }> | null } | null };

export type RestDialingPoolNumberMutationVariables = Exact<{
  phoneLineId: Scalars['ID']['input'];
}>;

export type RestDialingPoolNumberMutation = { __typename?: 'RootMutation', dialingPoolMutation?: { __typename?: 'DialingPoolMutation', restNumber?: { __typename?: 'TwilioPhoneNumber', id: string, dialing?: { __typename?: 'DialingLineState', restUntil?: any | null } | null } | null } | null };

export type UnrestDialingPoolNumberMutationVariables = Exact<{
  phoneLineId: Scalars['ID']['input'];
}>;

export type UnrestDialingPoolNumberMutation = { __typename?: 'RootMutation', dialingPoolMutation?: { __typename?: 'DialingPoolMutation', unrestNumber?: { __typename?: 'TwilioPhoneNumber', id: string, dialing?: { __typename?: 'DialingLineState', restUntil?: any | null } | null } | null } | null };

export type SetPhoneLineLabelMutationVariables = Exact<{
  phoneLineId: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
}>;

export type SetPhoneLineLabelMutation = { __typename?: 'RootMutation', twilioMutation?: { __typename?: 'TwilioMutation', setPhoneLineLabel?: { __typename?: 'TwilioPhoneNumber', id: string, label?: string | null } | null } | null };

export type SetPhoneLineRunsOnMetaAdsMutationVariables = Exact<{
  phoneLineId: Scalars['ID']['input'];
  runsOnMetaAds: Scalars['Boolean']['input'];
}>;

export type SetPhoneLineRunsOnMetaAdsMutation = { __typename?: 'RootMutation', twilioMutation?: { __typename?: 'TwilioMutation', setPhoneLineRunsOnMetaAds?: { __typename?: 'TwilioPhoneNumber', id: string, runsOnMetaAds?: boolean | null } | null } | null };

export type BuyDialingPoolNumbersMutationVariables = Exact<{
  purchaseAttemptKey: Scalars['String']['input'];
  count?: InputMaybe<Scalars['Int']['input']>;
  phoneNumbers?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  areaCode?: InputMaybe<Scalars['Int']['input']>;
  confirmExtraPhoneNumberCharge?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type BuyDialingPoolNumbersMutation = { __typename?: 'RootMutation', dialingPoolMutation?: { __typename?: 'DialingPoolMutation', purchaseNumbersIntoPool?: { __typename?: 'AddDialingPoolNumbersResult', addedLines: Array<{ __typename?: 'TwilioPhoneNumber', id: string, e164Number: string }>, failure?: { __typename?: 'DialingPoolPurchaseFailure', failedCount: number, message: string, kind: DialingPoolPurchaseFailureKind } | null } | null } | null };

export type GetContactEmployeesQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
  includeRemoved?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetContactEmployeesQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, aiEmployees?: Array<{ __typename?: 'ContactAiEmployee', id: string, agentId: string, name: string, status: ContactAiEmployeeStatus, isWorkingNow: boolean, schedule?: { __typename?: 'ContactAiEmployeeSchedule', cronExpression: string, timezone: string, status: ContactAiEmployeeScheduleStatus, nextFireAt?: any | null, lastFiredAt?: any | null, maxRuns?: number | null, runCount: number } | null }> | null, upcomingAgentRuns?: Array<{ __typename?: 'ContactUpcomingAgentRun', id: string, agentId: string, agentName: string, kind: UpcomingAgentRunKind, fireAt: any, cronExpression?: string | null, timezone?: string | null, runsRemaining?: number | null }> | null } | null } | null };

export type AssignEmployeeToContactMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  employeeId: Scalars['ID']['input'];
  schedule?: InputMaybe<AiEmployeeScheduleInput>;
}>;

export type AssignEmployeeToContactMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', assignAiEmployeeToContact?: { __typename?: 'ContactAiEmployee', id: string, agentId: string, status: ContactAiEmployeeStatus, schedule?: { __typename?: 'ContactAiEmployeeSchedule', nextFireAt?: any | null, maxRuns?: number | null } | null } | null } | null };

export type SetEmployeeScheduleMutationVariables = Exact<{
  attachmentId: Scalars['ID']['input'];
  cronExpression: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
  maxRuns: Scalars['Int']['input'];
}>;

export type SetEmployeeScheduleMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', setAiEmployeeSchedule?: { __typename?: 'ContactAiEmployee', id: string, agentId: string, schedule?: { __typename?: 'ContactAiEmployeeSchedule', cronExpression: string, timezone: string, nextFireAt?: any | null, maxRuns?: number | null, runCount: number } | null } | null } | null };

export type ClearEmployeeScheduleMutationVariables = Exact<{
  attachmentId: Scalars['ID']['input'];
}>;

export type ClearEmployeeScheduleMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', clearAiEmployeeSchedule?: { __typename?: 'ContactAiEmployee', id: string, agentId: string, status: ContactAiEmployeeStatus } | null } | null };

export type StopEmployeeRunsMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  employeeId: Scalars['ID']['input'];
}>;

export type StopEmployeeRunsMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', stopAiEmployeeRuns?: StopAiEmployeeRunsOutcome | null } | null };

export type CancelEmployeeFollowUpMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
  followUpId: Scalars['ID']['input'];
}>;

export type CancelEmployeeFollowUpMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', cancelAiEmployeeFollowUp?: CancelAiEmployeeFollowUpOutcome | null } | null };

export type ListContactReplyDraftsQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type ListContactReplyDraftsQuery = { __typename?: 'RootQuery', aiEmployeesQuery?: { __typename?: 'AiEmployeesQuery', pendingAgentReplyDrafts: Array<{ __typename?: 'AgentReplyDraft', id: string, agentId: string, channel: AgentReplyDraftChannel, messages: Array<string>, recipientEmail?: string | null, subject?: string | null, bodyMarkdown?: string | null, createdAt: any, expiresAt: any }> } | null };

export type DiscardEmployeeReplyDraftMutationVariables = Exact<{
  draftId: Scalars['ID']['input'];
}>;

export type DiscardEmployeeReplyDraftMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', discardAgentReplyDraft: { __typename?: 'AgentReplyDraft', id: string, status: AgentReplyDraftStatus } } | null };

export type RunEmployeesOnContactsMutationVariables = Exact<{
  employeeIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  runNow?: InputMaybe<Scalars['Boolean']['input']>;
  schedule?: InputMaybe<BulkAiEmployeeScheduleInput>;
}>;

export type RunEmployeesOnContactsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createBulkTriggerAgentSessionTask?: { __typename?: 'ContactsBulkActionResponse', bulkTaskId?: string | null } | null } | null };

export type RemoveEmployeesFromContactsMutationVariables = Exact<{
  employeeIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type RemoveEmployeesFromContactsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createBulkRemoveAiEmployeesTask?: { __typename?: 'ContactsBulkActionResponse', bulkTaskId?: string | null } | null } | null };

export type ListEmployeesQueryVariables = Exact<{ [key: string]: never; }>;

export type ListEmployeesQuery = { __typename?: 'RootQuery', aiEmployeesQuery?: { __typename?: 'AiEmployeesQuery', contactAgents?: Array<{ __typename?: 'ContactAgent', id: string, name: string, title?: string | null, status: ContactAgentStatus, origin?: AgentOrigin | null, canAnswerCalls: boolean, textHours?: string | null, quietHoursNotice?: string | null, createdAt: any, updatedAt: any, commitments: { __typename?: 'ContactAgentCommitments', assignedContactCount: number, scheduledContactCount: number, bookedFollowUpContactCount: number, openSessionCount: number } }> | null, contactAgentCounts?: { __typename?: 'ContactAgentCounts', total: number, active: number, inactive: number } | null } | null };

export type GetEmployeeQueryVariables = Exact<{
  employeeId: Scalars['ID']['input'];
}>;

export type GetEmployeeQuery = { __typename?: 'RootQuery', aiEmployeesQuery?: { __typename?: 'AiEmployeesQuery', contactAgent?: { __typename?: 'ContactAgent', id: string, name: string, title?: string | null, status: ContactAgentStatus, origin?: AgentOrigin | null, canAnswerCalls: boolean, cannotAnswerReason?: RingPolicyPickupBlockedReason | null, dailyRunCap?: number | null, dailyCallCap?: number | null, configDocument: any, textHours?: string | null, quietHoursNotice?: string | null, createdAt: any, updatedAt: any, abilities: Array<{ __typename?: 'ContactAgentAbility', tool: string, label: string, on: boolean, explicitlySet: boolean, gate?: string | null }>, config: { __typename?: 'ContactAgentConfig', wakes: { __typename?: 'ContactAgentWakes', inboundText: boolean, inboundEmail: boolean, callEnded: boolean, meetingSummary: boolean, formSubmitted: boolean, inboundSlack: boolean, teammateText: boolean, teammateEmail: boolean, teammateSlack: boolean, otherEmployeeCallEnded: boolean, contactNoteAdded: boolean, taskCreated: boolean, taskCompleted: boolean, appointmentCreated: boolean, appointmentChanged: boolean, contactFieldChanged: boolean, dealStageEntered: boolean, dealCreated: boolean, dealNoteAdded: boolean } }, legacyPhoneLines: Array<{ __typename?: 'ContactAgentPhoneLine', id: string, e164Number: string, holderUserId?: string | null }>, mailboxes: Array<{ __typename?: 'ContactAgentMailbox', id: string, emailAddress: string, provider: string, hasActiveConnection: boolean }>, triggerForms: Array<{ __typename?: 'ContactAgentTriggerForm', id: string, name: string, status: string }>, defaultAssignees: { __typename?: 'ContactAgentDefaultAssignees', mode: ContactAgentDefaultAssigneeMode, assigneeUserIds: Array<string> }, commitments: { __typename?: 'ContactAgentCommitments', assignedContactCount: number, scheduledContactCount: number, bookedFollowUpContactCount: number, openSessionCount: number } } | null } | null };

export type GetEmployeeCaseloadQueryVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  includeRemoved?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type GetEmployeeCaseloadQuery = { __typename?: 'RootQuery', aiEmployeesQuery?: { __typename?: 'AiEmployeesQuery', contactAgentCaseload?: { __typename?: 'ContactAgentCaseloadPage', total: number, items: Array<{ __typename?: 'ContactAgentCaseloadRow', contactId?: string | null, contactName?: string | null, isWorkingNow: boolean, lastWorkedAt?: any | null, lastCommunicationAt?: any | null, nextBookedFollowUpAt?: any | null, attachment: { __typename?: 'ContactAiEmployee', id: string, source: ContactAiEmployeeSource, status: ContactAiEmployeeStatus, createdAt: any, schedule?: { __typename?: 'ContactAiEmployeeSchedule', nextFireAt?: any | null } | null, engagement: { __typename?: 'ContactAiEmployeeEngagement', receivedReply: boolean, positivelyEscalated: boolean, negativeIntent: boolean } } }> } | null } | null };

export type CreateEmployeeMutationVariables = Exact<{
  name: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  origin?: InputMaybe<Scalars['String']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type CreateEmployeeMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', createAiEmployee?: { __typename?: 'ContactAgent', id: string, name: string, title?: string | null, status: ContactAgentStatus, configDocument: any, updatedAt: any } | null } | null };

export type UpdateEmployeeConfigMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  config?: InputMaybe<Scalars['JSON']['input']>;
  edits?: InputMaybe<Array<AiEmployeeConfigTextEditInput> | AiEmployeeConfigTextEditInput>;
  configPatch?: InputMaybe<Scalars['JSON']['input']>;
  acknowledgeScreeningWeakening?: InputMaybe<Scalars['Boolean']['input']>;
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type UpdateEmployeeConfigMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', updateAiEmployeeConfig?: { __typename?: 'ContactAgent', id: string, name: string, title?: string | null, status: ContactAgentStatus, configDocument: any, textHours?: string | null, quietHoursNotice?: string | null, updatedAt: any } | null } | null };

export type UpdateEmployeeIdentityMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type UpdateEmployeeIdentityMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', updateAiEmployeeConfig?: { __typename?: 'ContactAgent', id: string, name: string, title?: string | null, avatar: string, status: ContactAgentStatus, updatedAt: any } | null } | null };

export type SetEmployeeDailyCapsMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  dailyRunCap?: InputMaybe<Scalars['Int']['input']>;
  dailyCallCap?: InputMaybe<Scalars['Int']['input']>;
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type SetEmployeeDailyCapsMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', setAiEmployeeDailyCaps?: { __typename?: 'ContactAgent', id: string, name: string, dailyRunCap?: number | null, dailyCallCap?: number | null, updatedAt: any } | null } | null };

export type ListEmployeeRevisionsQueryVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListEmployeeRevisionsQuery = { __typename?: 'RootQuery', aiEmployeesQuery?: { __typename?: 'AiEmployeesQuery', contactAgentConfigRevisions?: { __typename?: 'ContactAgentConfigRevisionsPage', total?: number | null, nextOffset: number, items: Array<{ __typename?: 'ContactAgentConfigRevision', id: string, createdAt: any, actorUserId?: string | null, actorName?: string | null, name: string, title?: string | null }> } | null } | null };

export type RestoreEmployeeRevisionMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  revisionId: Scalars['ID']['input'];
  acknowledgeScreeningWeakening?: InputMaybe<Scalars['Boolean']['input']>;
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type RestoreEmployeeRevisionMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', restoreAiEmployeeRevision?: { __typename?: 'ContactAgent', id: string, name: string, title?: string | null, status: ContactAgentStatus, updatedAt: any } | null } | null };

export type SetEmployeeStatusMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  status: ContactAgentStatus;
}>;

export type SetEmployeeStatusMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', setContactAgentStatus?: { __typename?: 'ContactAgent', id: string, name: string, status: ContactAgentStatus, updatedAt: any } | null } | null };

export type AttachEmployeeToContactsMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type AttachEmployeeToContactsMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', attachAiEmployeeToContacts?: { __typename?: 'AiEmployeeContactsChange', requestedCount: number, changedCount: number, interruptedContactId?: string | null, interruptedReason?: string | null } | null } | null };

export type DetachEmployeeFromContactsMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type DetachEmployeeFromContactsMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', detachAiEmployeeFromContacts?: { __typename?: 'AiEmployeeContactsChange', requestedCount: number, changedCount: number, interruptedContactId?: string | null, interruptedReason?: string | null } | null } | null };

export type ListEmployeeChannelOptionsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListEmployeeChannelOptionsQuery = { __typename?: 'RootQuery', aiEmployeesQuery?: { __typename?: 'AiEmployeesQuery', availableMailboxes?: Array<{ __typename?: 'ContactAgentMailbox', id: string, emailAddress: string, provider: string, hasActiveConnection: boolean, isSharedWithOrg: boolean }> | null, availableTriggerForms?: Array<{ __typename?: 'ContactAgentTriggerForm', id: string, name: string, status: string }> | null } | null };

export type AttachEmployeeMailboxMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  mailboxId: Scalars['ID']['input'];
}>;

export type AttachEmployeeMailboxMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', attachContactAgentMailbox?: { __typename?: 'ContactAgent', id: string, updatedAt: any, mailboxes: Array<{ __typename?: 'ContactAgentMailbox', id: string, emailAddress: string, hasActiveConnection: boolean }> } | null } | null };

export type DetachEmployeeMailboxMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  mailboxId: Scalars['ID']['input'];
}>;

export type DetachEmployeeMailboxMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', detachContactAgentMailbox?: { __typename?: 'ContactAgent', id: string, updatedAt: any, mailboxes: Array<{ __typename?: 'ContactAgentMailbox', id: string, emailAddress: string }> } | null } | null };

export type DetachEmployeePhoneLineMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  phoneLineId: Scalars['ID']['input'];
}>;

export type DetachEmployeePhoneLineMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', detachContactAgentPhoneLine?: { __typename?: 'ContactAgent', id: string, updatedAt: any, legacyPhoneLines: Array<{ __typename?: 'ContactAgentPhoneLine', id: string, e164Number: string }> } | null } | null };

export type SetEmployeeTriggerFormsMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  formIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetEmployeeTriggerFormsMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', setContactAgentTriggerForms?: { __typename?: 'ContactAgent', id: string, updatedAt: any, triggerForms: Array<{ __typename?: 'ContactAgentTriggerForm', id: string, name: string, status: string }> } | null } | null };

export type SetEmployeeDefaultAssigneesMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
  mode: ContactAgentDefaultAssigneeMode;
  assigneeUserIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetEmployeeDefaultAssigneesMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', setContactAgentDefaultAssignees?: { __typename?: 'ContactAgent', id: string, updatedAt: any, defaultAssignees: { __typename?: 'ContactAgentDefaultAssignees', mode: ContactAgentDefaultAssigneeMode, assigneeUserIds: Array<string> } } | null } | null };

export type DeleteEmployeeMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
}>;

export type DeleteEmployeeMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', deleteContactAgent?: boolean | null } | null };

export type ListEmployeeSuggestionsQueryVariables = Exact<{
  employeeId: Scalars['ID']['input'];
}>;

export type ListEmployeeSuggestionsQuery = { __typename?: 'RootQuery', aiEmployeesQuery?: { __typename?: 'AiEmployeesQuery', contactAgentSuggestions?: Array<{ __typename?: 'ContactAgentSuggestion', id: string, status: ContactSuggestionStatus, confidence?: number | null, action: any, createdAt: any, expiresAt?: any | null }> | null } | null };

export type AcceptEmployeeSuggestionMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
}>;

export type AcceptEmployeeSuggestionMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', acceptContactAgentSuggestion?: { __typename?: 'ContactAgentSuggestionAcceptResult', outcome: ContactAgentSuggestionAcceptOutcome, message?: string | null, suggestion?: { __typename?: 'ContactAgentSuggestion', id: string, status: ContactSuggestionStatus } | null } | null } | null };

export type DismissEmployeeSuggestionMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
  reason: ContactSuggestionDismissReason;
}>;

export type DismissEmployeeSuggestionMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', dismissContactAgentSuggestion?: { __typename?: 'ContactAgentSuggestion', id: string, status: ContactSuggestionStatus } | null } | null };

export type CommentOnEmployeeSuggestionMutationVariables = Exact<{
  suggestionId: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  submissionKey: Scalars['String']['input'];
}>;

export type CommentOnEmployeeSuggestionMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', commentOnContactAgentSuggestion: { __typename?: 'SuggestionCardComment', heard: boolean } } | null };

export type ListFilesQueryVariables = Exact<{
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListFilesQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', applyFilesFilter?: { __typename?: 'FilteredFilesResponse', uploads: Array<{ __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, type?: FileProcessingTaskType | null, createdAt?: any | null, totalRows?: number | null, producedRecordsCount?: number | null, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, file?: { __typename?: 'UploadedFile', id: string, fileName: string } | null, dataExport?: { __typename?: 'DataExport', id: string, status: DataExportStatus, fileName?: string | null } | null }>, downloads: Array<{ __typename?: 'DataExport', id: string, fileName?: string | null, status: DataExportStatus, type: DataExportType, numRows?: number | null, createdAt?: any | null, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null }>, pagination: { __typename?: 'FilterPaginationResponse', total?: number | null, hasMore?: boolean | null } } | null } | null };

export type GetUploadReportQueryVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
}>;

export type GetUploadReportQuery = { __typename?: 'RootQuery', fileProcessingTaskQuery?: { __typename?: 'FileProcessingTaskQuery', fileProcessingTask?: { __typename?: 'FileProcessingTask', id: string, type?: FileProcessingTaskType | null, status?: FileProcessingTaskStatus | null, totalRows?: number | null, producedRecordsCount?: number | null, createdAt?: any | null, file?: { __typename?: 'UploadedFile', id: string, fileName: string } | null } | null, uploadReport?: { __typename?: 'UploadReport', totalRows?: number | null, createdCount: number, matchedCount: number, restoredCount: number, skippedCount: number, failedCount: number, mergedAfterImportCount: number, duplicateRowCount: number, distinctContactsCount: number, distinctPropertiesCount: number, processedRowCount: number, hasOutcomeTracking: boolean, skiptrace?: { __typename?: 'UploadReportSkiptrace', wasBilled: boolean, netSpent: number, found: number, foundNothing: number, failed: number, notRunYet: number, notTraced: number } | null } | null } | null };

export type ListUploadReportRowsQueryVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  bucket: UploadReportBucket;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListUploadReportRowsQuery = { __typename?: 'RootQuery', fileProcessingTaskQuery?: { __typename?: 'FileProcessingTaskQuery', uploadReportRows?: { __typename?: 'UploadReportRowsPage', total: number, items: Array<{ __typename?: 'UploadReportRow', rowNumber?: number | null, outcome?: UploadReportRowOutcome | null, outcomeReason?: string | null, notStored: Array<string>, duplicateOfRowNumber?: number | null, csvRowJson?: string | null, contact?: { __typename?: 'Contact', id: string, name?: string | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', phoneNumber: string }> | null, emails?: Array<{ __typename?: 'ContactEmail', email: string }> | null } | null, property?: { __typename?: 'UploadReportRowProperty', id: string, formattedAddress?: string | null } | null }> } | null } | null };

export type GetExportReportQueryVariables = Exact<{
  dataExportId: Scalars['ID']['input'];
}>;

export type GetExportReportQuery = { __typename?: 'RootQuery', dataExport?: { __typename?: 'DataExportQuery', exportReport?: { __typename?: 'ExportReport', dataExportId: string, fileName?: string | null, exportType?: DataExportType | null, createdAt?: any | null, numRows?: number | null, filterId?: string | null, filterName?: string | null, filterDomain?: string | null, skiptrace?: { __typename?: 'UploadReportSkiptrace', wasBilled: boolean, netSpent: number, found: number, foundNothing: number, failed: number, notRunYet: number, notTraced: number } | null, enrich?: { __typename?: 'BulkEnrichOutcomeSummary', enriched: number, enrichNoResult: number, alreadyEnriched: number, failed: number, pending: number, relatedPeopleAdded: number } | null } | null } | null };

export type RenameDataExportMutationVariables = Exact<{
  dataExportId: Scalars['ID']['input'];
  fileName: Scalars['String']['input'];
}>;

export type RenameDataExportMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', renameDataExport?: { __typename?: 'DataExport', id: string, fileName?: string | null } | null } | null };

export type DeleteDataExportMutationVariables = Exact<{
  dataExportId: Scalars['ID']['input'];
}>;

export type DeleteDataExportMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', deleteDataExport?: boolean | null } | null };

export type DeletePendingUploadMutationVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
}>;

export type DeletePendingUploadMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', deletePendingUpload?: boolean | null } | null };

export type ListExportConfigurationsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListExportConfigurationsQuery = { __typename?: 'RootQuery', dataExport?: { __typename?: 'DataExportQuery', exportConfigurations?: Array<{ __typename?: 'ExportConfiguration', id: string, name: string, description?: string | null, isDefault: boolean, updatedAt: any }> | null } | null };

export type SetDefaultExportConfigurationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type SetDefaultExportConfigurationMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', setDefaultExportConfiguration?: { __typename?: 'ExportConfiguration', id: string, name: string, isDefault: boolean } | null } | null };

export type DeleteExportConfigurationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteExportConfigurationMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', deleteExportConfiguration?: boolean | null } | null };

export type ExportContactsMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  totalCount: Scalars['Int']['input'];
  estimatedItemCount: Scalars['Int']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
}>;

export type ExportContactsMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', startStandardExport?: { __typename?: 'StandardExportStarted', dataExportId: string, bulkTaskId: string } | null } | null };

export type SkipTraceContactsMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  totalCount: Scalars['Int']['input'];
  estimatedItemCount: Scalars['Int']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
  skiptraceAddress?: InputMaybe<BulkEnrichSkiptraceAddress>;
}>;

export type SkipTraceContactsMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', startStandardExport?: { __typename?: 'StandardExportStarted', dataExportId: string, bulkTaskId: string } | null } | null };

export type ExportPropertiesMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  totalCount: Scalars['Int']['input'];
  estimatedItemCount: Scalars['Int']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
  includeStreetViewImages?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ExportPropertiesMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', startStandardExport?: { __typename?: 'StandardExportStarted', dataExportId: string, bulkTaskId: string } | null } | null };

export type SkipTraceAndExportPropertiesMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  totalCount: Scalars['Int']['input'];
  estimatedItemCount: Scalars['Int']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
  includeStreetViewImages?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type SkipTraceAndExportPropertiesMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', startStandardExport?: { __typename?: 'StandardExportStarted', dataExportId: string, bulkTaskId: string } | null } | null };

export type SkipTraceAndCreateContactsFromPropertiesMutationVariables = Exact<{
  ids?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  totalCount: Scalars['Int']['input'];
  estimatedItemCount: Scalars['Int']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
  contactListIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  contactWorkflowIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type SkipTraceAndCreateContactsFromPropertiesMutation = { __typename?: 'RootMutation', exportMutation?: { __typename?: 'ExportMutation', startStandardExport?: { __typename?: 'StandardExportStarted', dataExportId: string, bulkTaskId: string } | null } | null };

export type ListFoldersQueryVariables = Exact<{
  scope: FolderScope;
}>;

export type ListFoldersQuery = { __typename?: 'RootQuery', folderQuery?: { __typename?: 'FolderQuery', folders?: Array<{ __typename?: 'Folder', id: string, name: string, scope: FolderScope, parentId?: string | null, ownerUserId?: string | null, displayOrder: number, itemCount: number }> | null } | null };

export type RenameFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameFolderMutation = { __typename?: 'RootMutation', folderMutation?: { __typename?: 'FolderMutation', renameFolder?: { __typename?: 'Folder', id: string, name: string, parentId?: string | null, ownerUserId?: string | null } | null } | null };

export type MoveFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MoveFolderMutation = { __typename?: 'RootMutation', folderMutation?: { __typename?: 'FolderMutation', moveFolder?: { __typename?: 'Folder', id: string, name: string, parentId?: string | null, ownerUserId?: string | null } | null } | null };

export type ReorderFoldersMutationVariables = Exact<{
  scope: FolderScope;
  parentId?: InputMaybe<Scalars['ID']['input']>;
  personal: Scalars['Boolean']['input'];
  orderedIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ReorderFoldersMutation = { __typename?: 'RootMutation', folderMutation?: { __typename?: 'FolderMutation', reorderFolders?: Array<{ __typename?: 'Folder', id: string, name: string, parentId?: string | null, displayOrder: number }> | null } | null };

export type DeleteFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
}>;

export type DeleteFolderMutation = { __typename?: 'RootMutation', folderMutation?: { __typename?: 'FolderMutation', deleteFolder?: boolean | null } | null };

export type MoveItemsToFolderMutationVariables = Exact<{
  items: Array<FolderItemRef> | FolderItemRef;
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MoveItemsToFolderMutation = { __typename?: 'RootMutation', folderMutation?: { __typename?: 'FolderMutation', moveItemsToFolder?: number | null } | null };

export type ReorderFolderItemsMutationVariables = Exact<{
  orderedItems: Array<FolderItemRef> | FolderItemRef;
}>;

export type ReorderFolderItemsMutation = { __typename?: 'RootMutation', folderMutation?: { __typename?: 'FolderMutation', reorderItems?: number | null } | null };

export type ReorderFiltersMutationVariables = Exact<{
  filterIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ReorderFiltersMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', reorderFilters?: Array<{ __typename?: 'Filter', id: string, name: string }> | null } | null };

export type ListFormsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListFormsQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', list?: Array<{ __typename?: 'EmbedForm', id: string, name: string, slug?: string | null, status: EmbedFormStatus, source?: string | null, ownerType: EmbedFormOwnerType, publicUrl: string, shortUrl?: string | null, submissionCount: number, folderId?: string | null, createdAt: any, updatedAt: any }> | null } | null };

export type GetFormQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
}>;

export type GetFormQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', get?: { __typename?: 'EmbedForm', id: string, name: string, slug?: string | null, status: EmbedFormStatus, publicUrl: string, shortUrl?: string | null, submissionCount: number, source?: string | null, ownerType: EmbedFormOwnerType, headerText?: string | null, descriptionText?: string | null, submitButtonLabel?: string | null, successMessage?: string | null, fieldConfig: any, styleConfig?: any | null, autoTagIds: Array<string>, autoListIds: Array<string>, allowDuplicateContact: boolean, dedupePrimaryField: EmbedFormDedupeField, dedupeSecondaryField?: EmbedFormDedupeField | null, enableEmailNotification: boolean, enableSmsNotification: boolean, enableSlackNotification: boolean, slackChannelId?: string | null, slackChannelName?: string | null, slackMessageTemplate?: string | null, collectSmsConsent: boolean, smsTransactionalConsentText?: string | null, smsMarketingConsentText?: string | null, smsDisclaimerText?: string | null, showMarketingConsent: boolean, marketingConsentText?: string | null, termsAndConditionsText?: string | null, privacyPolicyUrl?: string | null, termsOfServiceUrl?: string | null, privacyPolicyContent?: string | null, termsOfServiceContent?: string | null, showPoweredBy: boolean, gtmContainerId?: string | null, createdAt: any, updatedAt: any, triggerAgents?: Array<{ __typename?: 'EmbedFormTriggerAgent', id: string, name: string, status: ContactAgentStatus }> | null, assignmentConfig: { __typename?: 'EmbedFormAssignmentConfig', teamIds: Array<string>, participantUserIds: Array<string>, assignees: Array<{ __typename?: 'EmbedFormAssignee', userId: string, calendarConfig?: { __typename?: 'EmbedFormAssigneeCalendar', isFixed: boolean, checkExternalCalendars: boolean } | null }> } } | null } | null };

export type ListFormSubmissionsQueryVariables = Exact<{
  formId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListFormSubmissionsQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', listAllSubmissions?: { __typename?: 'EmbedFormSubmissionList', totalCount: number, submissions: Array<{ __typename?: 'EmbedFormSubmission', id: string, embedFormId: string, contactId?: string | null, submittedData: any, createdAt: any }> } | null } | null };

export type GetFormSubmissionQueryVariables = Exact<{
  submissionId: Scalars['ID']['input'];
}>;

export type GetFormSubmissionQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', getSubmission?: { __typename?: 'EmbedFormSubmission', id: string, embedFormId: string, contactId?: string | null, submittedData: any, createdAt: any } | null } | null };

export type GetFormAnalyticsQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
  startDate: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
}>;

export type GetFormAnalyticsQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', analyticsFunnel?: { __typename?: 'EmbedFormAnalyticsFunnel', funnel: { __typename?: 'EmbedFormFunnelTotals', views: number, starts: number, submits: number, startRate?: number | null, submitRate?: number | null, submitRateOfStarted?: number | null, p50SecondsToSubmit?: number | null }, funnelDaily: Array<{ __typename?: 'EmbedFormFunnelDailyRow', viewDate: string, views: number, starts: number, submits: number }> } | null } | null };

export type GetFormTrafficSourcesQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
}>;

export type GetFormTrafficSourcesQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', analyticsSourcesDevices?: { __typename?: 'EmbedFormAnalyticsSourcesDevices', trafficSources: Array<{ __typename?: 'EmbedFormTrafficSourceRow', trafficSource: string, views: number, submits: number, rate?: number | null }>, deviceMix: Array<{ __typename?: 'EmbedFormDeviceMixRow', deviceClass: string, views: number, submits: number, rate?: number | null }>, locationMix: Array<{ __typename?: 'EmbedFormLocationMixRow', city?: string | null, region?: string | null, country?: string | null, views: number, submits: number, rate?: number | null }> } | null } | null };

export type ListFormActivityQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  excludeViewOnly?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ListFormActivityQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', analyticsActivity?: { __typename?: 'EmbedFormAnalyticsActivityPage', nextCursor?: string | null, rows: Array<{ __typename?: 'EmbedFormAnalyticsActivityRow', sessionId: string, firstViewAt: string, lastActivityAt: string, submittedAt?: string | null, abandonedAt?: string | null, sessionStatus: string, trafficSource?: string | null, deviceClass?: string | null, secondsToSubmit?: number | null, embedFormSubmissionId?: string | null, city?: string | null, regionCode?: string | null, country?: string | null, contactName?: string | null, assignedTo?: { __typename?: 'EmbedFormAnalyticsAgent', userId: string, firstName?: string | null, lastName?: string | null } | null }> } | null } | null };

export type GetFormActiveTimeQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
  startDate: Scalars['String']['input'];
  endDate: Scalars['String']['input'];
}>;

export type GetFormActiveTimeQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', analyticsActiveTime?: Array<{ __typename?: 'EmbedFormActiveTimeDailyRow', viewDate: string, sessions: number, p50ActiveMs?: number | null, p90ActiveMs?: number | null, medianActiveMsSubmitted?: number | null, medianActiveMsAbandoned?: number | null }> | null } | null };

export type ListFormActivityLocationsQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListFormActivityLocationsQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', analyticsActivityLocations?: Array<{ __typename?: 'EmbedFormAnalyticsActivityLocation', sessionId: string, embedFormSubmissionId?: string | null, sessionStatus: string, latitude: number, longitude: number, city?: string | null, regionCode?: string | null, countryCode?: string | null, lastActivityAt: string }> | null } | null };

export type GetFormRoutingDistributionQueryVariables = Exact<{
  formId: Scalars['ID']['input'];
}>;

export type GetFormRoutingDistributionQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', routingDistribution?: Array<{ __typename?: 'EmbedFormRoutingDistributionRow', userId: string, leadCount: number }> | null } | null };

export type CreateFormMutationVariables = Exact<{
  name: Scalars['String']['input'];
  fieldConfig: Scalars['JSON']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
  descriptionText?: InputMaybe<Scalars['String']['input']>;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  successMessage?: InputMaybe<Scalars['String']['input']>;
  styleConfig?: InputMaybe<Scalars['JSON']['input']>;
  autoTagIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  autoListIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  allowDuplicateContact?: InputMaybe<Scalars['Boolean']['input']>;
  dedupePrimaryField?: InputMaybe<EmbedFormDedupeField>;
  dedupeSecondaryField?: InputMaybe<EmbedFormDedupeField>;
  assignmentConfig?: InputMaybe<EmbedFormAssignmentConfigInput>;
  triggerAgentIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  collectSmsConsent?: InputMaybe<Scalars['Boolean']['input']>;
  smsDisclaimerText?: InputMaybe<Scalars['String']['input']>;
  smsTransactionalConsentText?: InputMaybe<Scalars['String']['input']>;
  smsMarketingConsentText?: InputMaybe<Scalars['String']['input']>;
  showMarketingConsent?: InputMaybe<Scalars['Boolean']['input']>;
  marketingConsentText?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsText?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyContent?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceContent?: InputMaybe<Scalars['String']['input']>;
  slackMessageTemplate?: InputMaybe<Scalars['String']['input']>;
  gtmContainerId?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  enableEmailNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSmsNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSlackNotification?: InputMaybe<Scalars['Boolean']['input']>;
  slackChannelName?: InputMaybe<Scalars['String']['input']>;
  slackChannelId?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateFormMutation = { __typename?: 'RootMutation', embedFormMutation?: { __typename?: 'EmbedFormMutation', create?: { __typename?: 'EmbedForm', id: string, name: string, slug?: string | null, status: EmbedFormStatus, publicUrl: string, submissionCount: number, fieldConfig: any, createdAt: any, assignmentConfig: { __typename?: 'EmbedFormAssignmentConfig', teamIds: Array<string>, participantUserIds: Array<string>, assignees: Array<{ __typename?: 'EmbedFormAssignee', userId: string, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, calendarConfig?: { __typename?: 'EmbedFormAssigneeCalendar', isFixed: boolean, checkExternalCalendars: boolean } | null }> } } | null } | null };

export type UpdateFormMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EmbedFormStatus>;
  fieldConfig?: InputMaybe<Scalars['JSON']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
  descriptionText?: InputMaybe<Scalars['String']['input']>;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  successMessage?: InputMaybe<Scalars['String']['input']>;
  styleConfig?: InputMaybe<Scalars['JSON']['input']>;
  autoTagIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  autoListIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  allowDuplicateContact?: InputMaybe<Scalars['Boolean']['input']>;
  dedupePrimaryField?: InputMaybe<EmbedFormDedupeField>;
  dedupeSecondaryField?: InputMaybe<EmbedFormDedupeField>;
  assignmentConfig?: InputMaybe<EmbedFormAssignmentConfigInput>;
  triggerAgentIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  collectSmsConsent?: InputMaybe<Scalars['Boolean']['input']>;
  smsDisclaimerText?: InputMaybe<Scalars['String']['input']>;
  smsTransactionalConsentText?: InputMaybe<Scalars['String']['input']>;
  smsMarketingConsentText?: InputMaybe<Scalars['String']['input']>;
  showMarketingConsent?: InputMaybe<Scalars['Boolean']['input']>;
  marketingConsentText?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsText?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyContent?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceContent?: InputMaybe<Scalars['String']['input']>;
  slackMessageTemplate?: InputMaybe<Scalars['String']['input']>;
  gtmContainerId?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  enableEmailNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSmsNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSlackNotification?: InputMaybe<Scalars['Boolean']['input']>;
  slackChannelName?: InputMaybe<Scalars['String']['input']>;
  slackChannelId?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateFormMutation = { __typename?: 'RootMutation', embedFormMutation?: { __typename?: 'EmbedFormMutation', update?: { __typename?: 'EmbedForm', id: string, name: string, status: EmbedFormStatus, fieldConfig: any, submitButtonLabel?: string | null, styleConfig?: any | null, updatedAt: any, assignmentConfig: { __typename?: 'EmbedFormAssignmentConfig', teamIds: Array<string>, participantUserIds: Array<string>, assignees: Array<{ __typename?: 'EmbedFormAssignee', userId: string, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, calendarConfig?: { __typename?: 'EmbedFormAssigneeCalendar', isFixed: boolean, checkExternalCalendars: boolean } | null }> } } | null } | null };

export type DeleteFormMutationVariables = Exact<{
  formId: Scalars['ID']['input'];
}>;

export type DeleteFormMutation = { __typename?: 'RootMutation', embedFormMutation?: { __typename?: 'EmbedFormMutation', delete?: boolean | null } | null };

export type CreateFormContactLinkMutationVariables = Exact<{
  formId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
}>;

export type CreateFormContactLinkMutation = { __typename?: 'RootMutation', embedFormMutation?: { __typename?: 'EmbedFormMutation', createContactLink: { __typename?: 'EmbedFormContactLink', id: string, url: string, shortUrl: string, formName: string, prefill: boolean, prefillFieldCount: number } } | null };

export type StartLibraryFileRunMutationVariables = Exact<{
  spaceItemId: Scalars['ID']['input'];
  skipTrace: Scalars['Boolean']['input'];
}>;

export type StartLibraryFileRunMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', skipTraceRun?: { __typename?: 'StartImportFromSpaceItemPayload', fileProcessingTaskId: string } | null, tagRun?: { __typename?: 'StartImportFromSpaceItemPayload', fileProcessingTaskId: string } | null } | null };

export type MapLibraryFileRunMutationVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  skipTrace: Scalars['Boolean']['input'];
}>;

export type MapLibraryFileRunMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', skipTraceRun?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, transformerAuthoringState?: TransformerAuthoringState | null, hasAuthoredTransformer?: boolean | null, totalRows?: number | null, csvSample?: Array<{ __typename?: 'CsvHeaderWithExampleData', header?: string | null, exampleData?: Array<string> | null }> | null } | null, tagRun?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, transformerAuthoringState?: TransformerAuthoringState | null, hasAuthoredTransformer?: boolean | null, totalRows?: number | null, csvSample?: Array<{ __typename?: 'CsvHeaderWithExampleData', header?: string | null, exampleData?: Array<string> | null }> | null } | null } | null };

export type ReviseLibraryFileRunMutationVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  skipTrace: Scalars['Boolean']['input'];
  message: Scalars['String']['input'];
}>;

export type ReviseLibraryFileRunMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', skipTraceRun?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, transformerAuthoringState?: TransformerAuthoringState | null, hasAuthoredTransformer?: boolean | null, totalRows?: number | null, csvSample?: Array<{ __typename?: 'CsvHeaderWithExampleData', header?: string | null, exampleData?: Array<string> | null }> | null } | null, tagRun?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null, transformerAuthoringState?: TransformerAuthoringState | null, hasAuthoredTransformer?: boolean | null, totalRows?: number | null, csvSample?: Array<{ __typename?: 'CsvHeaderWithExampleData', header?: string | null, exampleData?: Array<string> | null }> | null } | null } | null };

export type PreviewLibraryFileRunQueryVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  skipTrace: Scalars['Boolean']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type PreviewLibraryFileRunQuery = { __typename?: 'RootQuery', fileProcessingTaskQuery?: { __typename?: 'FileProcessingTaskQuery', skipTraceRowCount?: number | null, tagRowCount?: number | null, skipTraceRows?: Array<{ __typename?: 'SkiptraceTransformerPreviewResult', rowIndex: number, rawRowJson: string, error?: string | null, inputs?: Array<{ __typename?: 'SkiptraceAttemptPreview', actorName?: string | null, propertyEsId?: string | null, propertyAddress?: { __typename?: 'TransformedAddressPreview', raw: string } | null, mailingAddress?: { __typename?: 'TransformedAddressPreview', raw: string } | null }> | null }> | null, tagRows?: Array<{ __typename?: 'PropertyTransformerPreviewResult', rowIndex: number, rawRowJson: string, error?: string | null, properties?: Array<{ __typename?: 'TransformedPropertyPreview', address?: { __typename?: 'TransformedAddressPreview', raw: string } | null }> | null }> | null } | null };

export type ConfirmLibraryFileRunMutationVariables = Exact<{
  fileProcessingTaskId: Scalars['ID']['input'];
  skipTrace: Scalars['Boolean']['input'];
  tagName?: InputMaybe<Scalars['String']['input']>;
  exportFileName?: InputMaybe<Scalars['String']['input']>;
}>;

export type ConfirmLibraryFileRunMutation = { __typename?: 'RootMutation', fileProcessingTaskMutation?: { __typename?: 'FileProcessingTaskMutation', skipTraceRun?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null } | null, tagRun?: { __typename?: 'FileProcessingTask', id: string, status?: FileProcessingTaskStatus | null } | null } | null };

export type AddMemoryEntriesMutationVariables = Exact<{
  entries: Array<MemoryEntryInput> | MemoryEntryInput;
}>;

export type AddMemoryEntriesMutation = { __typename?: 'RootMutation', memoryEntryMutation?: { __typename?: 'MemoryEntryMutation', addEntries?: { __typename?: 'AddMemoryEntriesResult', organizationId: string, added: number, alreadyAdded: number, excluded: Array<{ __typename?: 'MemoryEntryExclusion', externalId: string, reason: MemoryEntryExclusionReason }> } | null } | null };

export type ListNotificationsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  notificationTypeFilter?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListNotificationsQuery = { __typename?: 'RootQuery', notificationQuery?: { __typename?: 'NotificationQuery', paginateUserNotifications?: { __typename?: 'PaginateUserNotificationsResponse', total: number, hasUnread: boolean, canFetchNext?: boolean | null, canFetchPrevious?: boolean | null, notifications: Array<{ __typename?: 'UserNotification', id: string, userId?: string | null, notificationType: string, title: string, content: string, seen: boolean, createdAt: string, actionType?: string | null, actionTargetId?: string | null, contactId?: string | null, noteId?: string | null, replyId?: string | null, taskId?: string | null, callId?: string | null, dealId?: string | null }> } | null } | null };

export type GetNotificationCountsQueryVariables = Exact<{
  notificationTypeFilter?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetNotificationCountsQuery = { __typename?: 'RootQuery', notificationQuery?: { __typename?: 'NotificationQuery', getNotificationCounts?: { __typename?: 'NotificationCounts', unreadCount: number, readCount: number } | null } | null };

export type GetAvailableNotificationTypesQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAvailableNotificationTypesQuery = { __typename?: 'RootQuery', notificationQuery?: { __typename?: 'NotificationQuery', getAvailableNotificationTypes?: Array<{ __typename?: 'NotificationTypeConfig', notificationType: string, description: string, category: string }> | null } | null };

export type MarkNotificationsReadMutationVariables = Exact<{
  notificationIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  isSeen: Scalars['Boolean']['input'];
}>;

export type MarkNotificationsReadMutation = { __typename?: 'RootMutation', notificationMutation?: { __typename?: 'NotificationMutation', toggleNotificationSeen?: Array<{ __typename?: 'UserNotification', id: string, seen: boolean }> | null } | null };

export type SetEmailDigestCadenceMutationVariables = Exact<{
  cadence: EmailDigestCadence;
}>;

export type SetEmailDigestCadenceMutation = { __typename?: 'RootMutation', notificationMutation?: { __typename?: 'NotificationMutation', setEmailDigestCadence?: { __typename?: 'UserNotificationPreference', id: string, emailDigestCadence: EmailDigestCadence } | null } | null };

export type MarkAllNotificationsReadMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  isSeen: Scalars['Boolean']['input'];
  notificationTypeFilter?: InputMaybe<Scalars['String']['input']>;
  notIncludedNotificationIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type MarkAllNotificationsReadMutation = { __typename?: 'RootMutation', notificationMutation?: { __typename?: 'NotificationMutation', toggleBulkNotificationSeen?: number | null } | null };

export type MarkContactNotificationsReadMutationVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type MarkContactNotificationsReadMutation = { __typename?: 'RootMutation', notificationMutation?: { __typename?: 'NotificationMutation', markContactNotificationsAsRead?: number | null } | null };

export type DeleteNotificationsMutationVariables = Exact<{
  notificationIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type DeleteNotificationsMutation = { __typename?: 'RootMutation', notificationMutation?: { __typename?: 'NotificationMutation', deleteNotifications?: number | null } | null };

export type GetOrganizationSettingsQueryVariables = Exact<{ [key: string]: never; }>;

export type GetOrganizationSettingsQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, name?: string | null, slug?: string | null, websiteUrl?: string | null, timezone?: string | null, alwaysExcludeDncTexts?: boolean | null, aiCoOwnedLineHeadStartSeconds?: number | null, textReplyLinePolicy?: TextReplyLinePolicy | null, callLinePolicy?: CallLinePolicy | null, inboxDefaultView?: InboxDefaultView | null, suggestionAudience?: OrganizationSuggestionAudience | null, meetingNotetakerEnabled?: boolean | null, isBrandingEnabled?: boolean | null, outboundPause?: { __typename?: 'OrganizationOutboundPause', pausedAt: any, pausedBy?: { __typename?: 'User', id: string } | null } | null, leadRouting?: { __typename?: 'OrganizationLeadRouting', assigneeUserIds: Array<string> } | null } | null } | null };

export type RenameOrganizationMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;

export type RenameOrganizationMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganization?: { __typename?: 'Organization', id: string, name?: string | null } | null } | null };

export type SetOrganizationTimezoneMutationVariables = Exact<{
  timezone?: InputMaybe<Scalars['String']['input']>;
}>;

export type SetOrganizationTimezoneMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationTimezone?: { __typename?: 'Organization', id: string, timezone?: string | null } | null } | null };

export type SetOrganizationSlugMutationVariables = Exact<{
  slug: Scalars['String']['input'];
}>;

export type SetOrganizationSlugMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationSlug?: { __typename?: 'Organization', id: string, slug?: string | null } | null } | null };

export type SetOrganizationTextDncSkipMutationVariables = Exact<{
  alwaysExcludeDncTexts: Scalars['Boolean']['input'];
}>;

export type SetOrganizationTextDncSkipMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationTextCompliance?: { __typename?: 'Organization', id: string, alwaysExcludeDncTexts?: boolean | null } | null } | null };

export type SetOrganizationAiLineHeadStartMutationVariables = Exact<{
  seconds?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SetOrganizationAiLineHeadStartMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationAiCoOwnedLineHeadStart?: { __typename?: 'Organization', id: string, aiCoOwnedLineHeadStartSeconds?: number | null } | null } | null };

export type SetOrganizationTextReplyLinePolicyMutationVariables = Exact<{
  policy: TextReplyLinePolicy;
}>;

export type SetOrganizationTextReplyLinePolicyMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationTextReplyLinePolicy?: { __typename?: 'Organization', id: string, textReplyLinePolicy?: TextReplyLinePolicy | null } | null } | null };

export type SetOrganizationCallLinePolicyMutationVariables = Exact<{
  policy: CallLinePolicy;
}>;

export type SetOrganizationCallLinePolicyMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationCallLinePolicy?: { __typename?: 'Organization', id: string, callLinePolicy?: CallLinePolicy | null } | null } | null };

export type SetOrganizationInboxDefaultViewMutationVariables = Exact<{
  view: InboxDefaultView;
}>;

export type SetOrganizationInboxDefaultViewMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', updateOrganizationInboxDefaultView?: { __typename?: 'Organization', id: string, inboxDefaultView?: InboxDefaultView | null } | null } | null };

export type SetOrganizationOutboundPauseMutationVariables = Exact<{
  paused: Scalars['Boolean']['input'];
}>;

export type SetOrganizationOutboundPauseMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', setOrganizationOutboundPause?: { __typename?: 'Organization', id: string, outboundPause?: { __typename?: 'OrganizationOutboundPause', pausedAt: any } | null } | null } | null };

export type SetOrganizationLeadRoutingMutationVariables = Exact<{
  assigneeUserIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetOrganizationLeadRoutingMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', setOrganizationLeadRouting?: { __typename?: 'Organization', id: string, leadRouting?: { __typename?: 'OrganizationLeadRouting', assigneeUserIds: Array<string> } | null } | null } | null };

export type SetMyTimezoneMutationVariables = Exact<{
  timezone?: InputMaybe<Scalars['String']['input']>;
}>;

export type SetMyTimezoneMutation = { __typename?: 'RootMutation', users?: { __typename?: 'UsersMutation', updateMyTimezone?: { __typename?: 'User', id: string, timezone?: string | null, resolvedTimezone?: string | null } | null } | null };

export type ListPartnershipsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListPartnershipsQuery = { __typename?: 'RootQuery', orgPartnershipQuery?: { __typename?: 'OrgPartnershipQuery', partnershipsForCurrentOrg?: Array<{ __typename?: 'OrgPartnership', id: string, status: OrgPartnershipStatus, direction: PartnershipDirection, awaitingCurrentOrgResponse: boolean, permittedUserIds?: Array<string> | null, createdAt: any, updatedAt: any, partnerOrg: { __typename?: 'Organization', id: string, name?: string | null } }> | null } | null };

export type ListPendingPartnershipInvitesQueryVariables = Exact<{ [key: string]: never; }>;

export type ListPendingPartnershipInvitesQuery = { __typename?: 'RootQuery', orgPartnershipQuery?: { __typename?: 'OrgPartnershipQuery', pendingInvitationsForCurrentOrg?: Array<{ __typename?: 'OrgPartnership', id: string, status: OrgPartnershipStatus, direction: PartnershipDirection, awaitingCurrentOrgResponse: boolean, permittedUserIds?: Array<string> | null, createdAt: any, updatedAt: any, partnerOrg: { __typename?: 'Organization', id: string, name?: string | null } }> | null } | null };

export type CanShareWithPartnersQueryVariables = Exact<{ [key: string]: never; }>;

export type CanShareWithPartnersQuery = { __typename?: 'RootQuery', orgPartnershipQuery?: { __typename?: 'OrgPartnershipQuery', canShareWithPartners?: boolean | null } | null };

export type LookupPartnerOrgQueryVariables = Exact<{
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
}>;

export type LookupPartnerOrgQuery = { __typename?: 'RootQuery', orgPartnershipQuery?: { __typename?: 'OrgPartnershipQuery', lookupInvitee?: { __typename?: 'PartnershipInviteeLookupResult', user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null }, organization: { __typename?: 'Organization', id: string, name?: string | null } } | null } | null };

export type CreatePartnershipInviteMutationVariables = Exact<{
  partnerOrgId: Scalars['ID']['input'];
  direction: PartnershipDirection;
  permittedUserIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  recipientUserIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type CreatePartnershipInviteMutation = { __typename?: 'RootMutation', orgPartnershipMutation?: { __typename?: 'OrgPartnershipMutation', createInvitation?: { __typename?: 'OrgPartnership', id: string, status: OrgPartnershipStatus, direction: PartnershipDirection, permittedUserIds?: Array<string> | null, createdAt: any, updatedAt: any, partnerOrg: { __typename?: 'Organization', id: string, name?: string | null } } | null } | null };

export type AcceptPartnershipInviteMutationVariables = Exact<{
  partnerOrgId: Scalars['ID']['input'];
  permittedUserIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type AcceptPartnershipInviteMutation = { __typename?: 'RootMutation', orgPartnershipMutation?: { __typename?: 'OrgPartnershipMutation', acceptInvitation?: { __typename?: 'OrgPartnership', id: string, status: OrgPartnershipStatus, direction: PartnershipDirection, permittedUserIds?: Array<string> | null, updatedAt: any, partnerOrg: { __typename?: 'Organization', id: string, name?: string | null } } | null } | null };

export type RejectPartnershipInviteMutationVariables = Exact<{
  partnerOrgId: Scalars['ID']['input'];
}>;

export type RejectPartnershipInviteMutation = { __typename?: 'RootMutation', orgPartnershipMutation?: { __typename?: 'OrgPartnershipMutation', rejectInvitation?: { __typename?: 'OrgPartnership', id: string, status: OrgPartnershipStatus, updatedAt: any } | null } | null };

export type CancelPartnershipInviteMutationVariables = Exact<{
  partnerOrgId: Scalars['ID']['input'];
}>;

export type CancelPartnershipInviteMutation = { __typename?: 'RootMutation', orgPartnershipMutation?: { __typename?: 'OrgPartnershipMutation', cancelInvitation?: { __typename?: 'OrgPartnership', id: string, status: OrgPartnershipStatus, updatedAt: any } | null } | null };

export type TerminatePartnershipMutationVariables = Exact<{
  partnerOrgId: Scalars['ID']['input'];
}>;

export type TerminatePartnershipMutation = { __typename?: 'RootMutation', orgPartnershipMutation?: { __typename?: 'OrgPartnershipMutation', terminatePartnership?: { __typename?: 'OrgPartnership', id: string, status: OrgPartnershipStatus, updatedAt: any } | null } | null };

export type UpdatePartnershipPermittedUsersMutationVariables = Exact<{
  partnerOrgId: Scalars['ID']['input'];
  permittedUserIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type UpdatePartnershipPermittedUsersMutation = { __typename?: 'RootMutation', orgPartnershipMutation?: { __typename?: 'OrgPartnershipMutation', updatePermittedUsers?: { __typename?: 'OrgPartnership', id: string, permittedUserIds?: Array<string> | null, updatedAt: any } | null } | null };

export type SearchAvailablePhoneNumbersQueryVariables = Exact<{
  areaCode?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SearchAvailablePhoneNumbersQuery = { __typename?: 'RootQuery', twilioQuery?: { __typename?: 'TwilioQuery', searchAvailablePhoneNumbers?: Array<{ __typename?: 'TwilioAvailablePhoneNumber', phoneNumber: string, friendlyName?: string | null, locality?: string | null, region?: string | null, postalCode?: string | null }> | null } | null };

export type GetVoiceTrustSummaryQueryVariables = Exact<{ [key: string]: never; }>;

export type GetVoiceTrustSummaryQuery = { __typename?: 'RootQuery', voiceTrustQuery?: { __typename?: 'VoiceTrustQuery', summary?: { __typename?: 'VoiceTrustSummary', accountState: VoiceTrustRegistrationState, eligibleLineCount: number, registeredLineCount: number, registeringLineCount: number, failedLineCount: number, watchLineCount: number, atRiskLineCount: number, needsAttention: boolean } | null } | null };

export type ProvisionPhoneNumberMutationVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
  targetUserId: Scalars['ID']['input'];
  confirmExtraPhoneNumberCharge?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ProvisionPhoneNumberMutation = { __typename?: 'RootMutation', twilioMutation?: { __typename?: 'TwilioMutation', provisionPhoneNumber?: { __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, isPrimary?: boolean | null, canSendSms: boolean } | null } | null };

export type GetPhoneRoutingQueryVariables = Exact<{ [key: string]: never; }>;

export type GetPhoneRoutingQuery = { __typename?: 'RootQuery', ringPolicyQuery?: { __typename?: 'RingPolicyQuery', orgDefaultRingPolicy?: { __typename?: 'RingPolicy', id: string, humanStage?: { __typename?: 'RingPolicyHumanStage', targetKind: CallRoundRobinTargetKind, ringSeconds: number, externalE164?: string | null, phoneLineIds: Array<string>, userGroupId?: string | null, ringAllTeamMembers: boolean, areaCodeForwardingMap?: any | null, specificUser?: { __typename?: 'RingPolicyUser', id: string, name: string } | null, ownerlessStep?: { __typename?: 'RingPolicyOwnerlessStep', targetKind: CallRoundRobinTargetKind, externalE164?: string | null, phoneLineIds: Array<string>, userGroupId?: string | null, specificUser?: { __typename?: 'RingPolicyUser', id: string, name: string } | null } | null, schedule?: { __typename?: 'ContactAgentCallSchedule', timezone: string, days: Array<{ __typename?: 'ContactAgentCallScheduleDay', day: ContactAgentDayOfWeek, open: string, close: string, enabled: boolean }> } | null } | null, aiStage?: { __typename?: 'RingPolicyAiStage', rotation: RingPolicyAiRotation, agents: Array<{ __typename?: 'RingPolicyAiAgent', id?: string | null, name: string, canAnswerCalls: boolean, cannotAnswerReason?: RingPolicyPickupBlockedReason | null }> } | null } | null } | null, currentUser?: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, defaultInboundIntakePolicy?: { __typename?: 'AssignmentPolicy', assigneeUserIds: Array<string>, participantUserIds: Array<string>, teamIds: Array<string>, agentAssigneeIds: Array<string>, workflowGroupIds: Array<string>, tags: Array<string> } | null, twilioPhoneNumbers?: Array<{ __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, ringPolicyId?: string | null, assignmentPolicyId?: string | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null }> | null } | null } | null };

export type GetPhoneLineRingPolicyQueryVariables = Exact<{
  phoneLineId: Scalars['ID']['input'];
}>;

export type GetPhoneLineRingPolicyQuery = { __typename?: 'RootQuery', ringPolicyQuery?: { __typename?: 'RingPolicyQuery', phoneLineRingPolicy?: { __typename?: 'RingPolicy', id: string, humanStage?: { __typename?: 'RingPolicyHumanStage', targetKind: CallRoundRobinTargetKind, ringSeconds: number, externalE164?: string | null, phoneLineIds: Array<string>, userGroupId?: string | null, ringAllTeamMembers: boolean, areaCodeForwardingMap?: any | null, specificUser?: { __typename?: 'RingPolicyUser', id: string, name: string } | null, ownerlessStep?: { __typename?: 'RingPolicyOwnerlessStep', targetKind: CallRoundRobinTargetKind, externalE164?: string | null, phoneLineIds: Array<string>, userGroupId?: string | null, specificUser?: { __typename?: 'RingPolicyUser', id: string, name: string } | null } | null, schedule?: { __typename?: 'ContactAgentCallSchedule', timezone: string, days: Array<{ __typename?: 'ContactAgentCallScheduleDay', day: ContactAgentDayOfWeek, open: string, close: string, enabled: boolean }> } | null } | null, aiStage?: { __typename?: 'RingPolicyAiStage', rotation: RingPolicyAiRotation, agents: Array<{ __typename?: 'RingPolicyAiAgent', id?: string | null, name: string, canAnswerCalls: boolean, cannotAnswerReason?: RingPolicyPickupBlockedReason | null }> } | null } | null } | null };

export type SetOrgDefaultRingPolicyMutationVariables = Exact<{
  policy?: InputMaybe<RingPolicyInput>;
}>;

export type SetOrgDefaultRingPolicyMutation = { __typename?: 'RootMutation', ringPolicyMutation?: { __typename?: 'RingPolicyMutation', setOrgDefaultRingPolicy?: { __typename?: 'RingPolicy', id: string } | null } | null };

export type SetPhoneLineRingPolicyMutationVariables = Exact<{
  phoneLineId: Scalars['ID']['input'];
  policy?: InputMaybe<RingPolicyInput>;
}>;

export type SetPhoneLineRingPolicyMutation = { __typename?: 'RootMutation', ringPolicyMutation?: { __typename?: 'RingPolicyMutation', setPhoneLineRingPolicy?: { __typename?: 'RingPolicy', id: string } | null } | null };

export type GetPropertyQueryVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;

export type GetPropertyQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchProperty?: { __typename?: 'Property', id: string, skipTraceStatus?: SkipTraceStatus | null, lastSkiptracedAt?: any | null, isStaleSkiptrace?: boolean | null, lastPropertySignalDate?: any | null, spicyLeadScore?: number | null, address?: { __typename?: 'Address', line1: string, line2?: string | null, city: string, state: string, zip: string, countyName?: string | null, addressFull?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, isEditable: boolean }> | null, lists?: Array<{ __typename?: 'Tag', id: string, name: string, isEditable: boolean }> | null, metadata?: { __typename?: 'PropertyMetadata', nameOnDeedUnformatted?: string | null, coOwnerNameOnDeedUnformatted?: string | null, ownerAddressFull?: string | null } | null } | null } | null };

export type GetPropertyOwnersQueryVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;

export type GetPropertyOwnersQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchProperty?: { __typename?: 'Property', id: string, skipTraceStatus?: SkipTraceStatus | null, lastSkiptracedAt?: any | null, isStaleSkiptrace?: boolean | null, address?: { __typename?: 'Address', addressFull?: string | null } | null, people?: Array<{ __typename?: 'PropertyPerson', id: string, firstName?: string | null, middleName?: string | null, lastName?: string | null, suffix?: string | null, age?: number | null, isRelative?: boolean | null, relativeIds: Array<string>, ranking?: number | null, deceased?: boolean | null, isNameOnDeed?: boolean | null, phoneNumbers?: Array<{ __typename?: 'PropertyPersonPhoneNumber', number: string, type: string, ranking: number, dncStatus?: { __typename?: 'DncStatus', isDnc: boolean, isLitigator: boolean } | null }> | null, emails?: Array<{ __typename?: 'PropertyPersonEmail', email: string, ranking: number }> | null }> | null, crmContacts?: Array<{ __typename?: 'PropertyCrmContact', relation?: PropertyCrmContactRelation | null, matchedBy: PropertyCrmContactMatch, contact: { __typename?: 'Contact', id: string, name?: string | null, doNotContact?: boolean | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', phoneNumber: string, dncStatus?: { __typename?: 'DncStatus', isDnc: boolean } | null }> | null, emails?: Array<{ __typename?: 'ContactEmail', email: string }> | null } }> | null } | null } | null };

export type GetPropertySignalsQueryVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;

export type GetPropertySignalsQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchProperty?: { __typename?: 'Property', id: string, propertySignals?: Array<{ __typename?: 'PropertySignal', id: string, signalType?: PropertySignalType | null, signalTypes?: Array<string> | null, publicationDate?: any | null, adBody?: string | null, attachmentMatchStrategy?: string | null, suppressedReason?: string | null }> | null } | null } | null };

export type FindPropertiesQueryVariables = Exact<{
  addressString: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FindPropertiesQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', autocompleteProperties?: { __typename?: 'PropertyAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'PropertyAutocompleteSuggestion', esId: string, fullAddress: string, line1: string, line2?: string | null, city: string, state: string, zipCode: string, parcelId?: string | null, mlsStatus?: PropertyMlsStatus | null }> } | null } | null };

export type CountPropertySignalsQueryVariables = Exact<{
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  signalTypes?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
  includeIncompleteRecords?: InputMaybe<Scalars['Boolean']['input']>;
  inSavedAreas?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type CountPropertySignalsQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', countPropertySignals?: { __typename?: 'PropertySignalCounts', totalEvents: number, propertyCount: number, uncountedPropertyCount: number, byType: Array<{ __typename?: 'PropertySignalTypeCount', signalType: string, events: number, properties: number }>, uncountedByType: Array<{ __typename?: 'PropertySignalUncountedCount', signalType: string, properties: number }> } | null } | null };

export type ListPropertyFiltersQueryVariables = Exact<{ [key: string]: never; }>;

export type ListPropertyFiltersQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilters?: Array<{ __typename?: 'Filter', id: string, name: string, description?: string | null, folderId?: string | null, isPrivate: boolean, isDefault: boolean, userId?: string | null, createdAt: any, criteriaSummary?: string | null }> | null } | null };

export type ListFilterFoldersQueryVariables = Exact<{
  type: FilterType;
}>;

export type ListFilterFoldersQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilterFolders?: { __typename?: 'FilterFolderList', folders: Array<{ __typename?: 'FilterFolder', id: string, name: string, isPrivate: boolean, parentId?: string | null, displayOrder: number }> } | null } | null };

export type GetFilterQueryVariables = Exact<{
  filterId: Scalars['ID']['input'];
}>;

export type GetFilterQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilter?: { __typename?: 'Filter', id: string, name: string, type: FilterType, description?: string | null, folderId?: string | null, root: any, queryOptions?: any | null, isPrivate: boolean, isDefault: boolean, userId?: string | null, createdAt: any, updatedAt: any } | null } | null };

export type FilterPropertiesQueryVariables = Exact<{
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
  includeIncompleteRecords?: InputMaybe<Scalars['Boolean']['input']>;
  inSavedAreas?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type FilterPropertiesQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', applyPropertyFilter?: { __typename?: 'FilteredPropertiesResponse', items: Array<{ __typename?: 'Property', id: string, skipTraceStatus?: SkipTraceStatus | null, lastSkiptracedAt?: any | null, isStaleSkiptrace?: boolean | null, lastPropertySignalDate?: any | null, spicyLeadScore?: number | null, address?: { __typename?: 'Address', line1: string, line2?: string | null, city: string, state: string, zip: string, countyName?: string | null, addressFull?: string | null } | null }>, pagination: { __typename?: 'FilterPaginationResponse', total?: number | null, hasMore?: boolean | null } } | null } | null };

export type SearchPropertyTagsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
}>;

export type SearchPropertyTagsQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', searchTags?: { __typename?: 'TagSearchResult', tags?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null, lists?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null } | null } | null };

export type FindPropertiesByParcelQueryVariables = Exact<{
  parcelId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FindPropertiesByParcelQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', autocompletePropertiesByParcel?: { __typename?: 'PropertyAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'PropertyAutocompleteSuggestion', esId: string, fullAddress: string, line1: string, line2?: string | null, city: string, state: string, zipCode: string, parcelId?: string | null, mlsStatus?: PropertyMlsStatus | null }> } | null } | null };

export type FindPropertiesByMlsIdQueryVariables = Exact<{
  mlsId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FindPropertiesByMlsIdQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', autocompletePropertiesByMlsId?: { __typename?: 'PropertyAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'PropertyAutocompleteSuggestion', esId: string, fullAddress: string, line1: string, line2?: string | null, city: string, state: string, zipCode: string, parcelId?: string | null, mlsStatus?: PropertyMlsStatus | null }> } | null } | null };

export type FindPropertiesNearPointQueryVariables = Exact<{
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type FindPropertiesNearPointQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchPropertiesNearPoint?: Array<{ __typename?: 'PropertyMetadata', propertyId?: string | null, line1?: string | null, city?: string | null, nameOnDeedUnformatted?: string | null, estimatedValueDollars?: any | null }> | null } | null };

export type GetRelatedPropertiesQueryVariables = Exact<{
  propertyIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type GetRelatedPropertiesQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchRelatedProperties?: Array<{ __typename?: 'PropertyMetadata', propertyId?: string | null, propertyType?: PropertyType | null, numberOfBedrooms?: number | null, numberOfBathrooms?: number | null, livingAreaSquareFeet?: number | null, yearBuilt?: number | null, lastSaleDate?: any | null, lastSaleAmount?: any | null, estimatedValueDollars?: any | null, ownerOccupied?: boolean | null, mlsStatus?: PropertyMlsStatus | null, spicyLeadScore?: number | null, nameOnDeedUnformatted?: string | null, coOwnerNameOnDeedUnformatted?: string | null, ownerAddressFull?: string | null, addressFull?: string | null, countyFips?: string | null, countyName?: string | null, latitude?: number | null, longitude?: number | null, yearsOfOwnership?: number | null, ownerPortfolioSize?: number | null } | null> | null } | null };

export type SearchCountiesQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SearchCountiesQuery = { __typename?: 'RootQuery', geography?: { __typename?: 'GeographyQuery', searchCounties?: Array<{ __typename?: 'County', name: string, fullName?: string | null, state: string, fips: string }> | null } | null };

export type SearchCitiesQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SearchCitiesQuery = { __typename?: 'RootQuery', geography?: { __typename?: 'GeographyQuery', searchCities?: Array<{ __typename?: 'City', id: string, name: string, state: StateEnum }> | null } | null };

export type GetZoningCodesQueryVariables = Exact<{
  state?: InputMaybe<StateEnum>;
  cityId?: InputMaybe<Scalars['String']['input']>;
  countyFips?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetZoningCodesQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', getZoningCodesByLocation?: Array<string | null> | null } | null };

export type CreatePropertyListMutationVariables = Exact<{
  listName: Scalars['String']['input'];
}>;

export type CreatePropertyListMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', createPropertyList?: { __typename?: 'CreatePropertyListPayload', created: boolean, list: { __typename?: 'Tag', id: string, name: string } } | null } | null };

export type AddPropertyTagsMutationVariables = Exact<{
  propertyId: Scalars['ID']['input'];
  tagIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type AddPropertyTagsMutation = { __typename?: 'RootMutation', propertyMutation?: { __typename?: 'PropertyMutation', addTagToProperty?: { __typename?: 'Property', id: string, address?: { __typename?: 'Address', line1: string, city: string, state: string, zip: string, addressFull?: string | null } | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null } | null } | null };

export type RemovePropertyTagMutationVariables = Exact<{
  propertyId: Scalars['ID']['input'];
  tagId: Scalars['String']['input'];
}>;

export type RemovePropertyTagMutation = { __typename?: 'RootMutation', propertyMutation?: { __typename?: 'PropertyMutation', removeTagFromProperty?: { __typename?: 'Property', id: string, tags?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null } | null } | null };

export type AddPropertiesToListMutationVariables = Exact<{
  propertyIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  includeIncompleteRecords?: InputMaybe<Scalars['Boolean']['input']>;
  listIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  totalCount: Scalars['Int']['input'];
}>;

export type AddPropertiesToListMutation = { __typename?: 'RootMutation', propertyMutation?: { __typename?: 'PropertyMutation', addPropertiesToList?: { __typename?: 'AddPropertiesToListResponse', mode: AddPropertiesToListMode, bulkTaskId?: string | null } | null } | null };

export type RemovePropertiesFromListMutationVariables = Exact<{
  propertyIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  includeIncompleteRecords?: InputMaybe<Scalars['Boolean']['input']>;
  listId: Scalars['String']['input'];
  totalCount: Scalars['Int']['input'];
}>;

export type RemovePropertiesFromListMutation = { __typename?: 'RootMutation', propertyMutation?: { __typename?: 'PropertyMutation', removePropertiesFromList?: { __typename?: 'AddPropertiesToListResponse', mode: AddPropertiesToListMode, bulkTaskId?: string | null } | null } | null };

export type SaveFilterMutationVariables = Exact<{
  type: FilterType;
  name: Scalars['String']['input'];
  root: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  inSavedAreas?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type SaveFilterMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', saveFilter?: { __typename?: 'Filter', id: string, name: string, type: FilterType, isPrivate: boolean, isDefault: boolean, createdAt: any, warnings?: Array<string> | null } | null } | null };

export type CreateFilterFolderMutationVariables = Exact<{
  scope: FolderScope;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['ID']['input']>;
  personal?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type CreateFilterFolderMutation = { __typename?: 'RootMutation', folderMutation?: { __typename?: 'FolderMutation', createFolder?: { __typename?: 'Folder', id: string, name: string, parentId?: string | null, ownerUserId?: string | null } | null } | null };

export type RenameFilterFolderMutationVariables = Exact<{
  type: FilterType;
  folderId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameFilterFolderMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', renameFilterFolderById?: boolean | null } | null };

export type DeleteFilterFolderMutationVariables = Exact<{
  type: FilterType;
  folderId: Scalars['ID']['input'];
}>;

export type DeleteFilterFolderMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', deleteFilterFolderById?: boolean | null } | null };

export type UpdateFilterMutationVariables = Exact<{
  filterId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  root?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  inSavedAreas?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateFilterMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', updateFilter?: { __typename?: 'Filter', id: string, name: string, type: FilterType, root: any, isPrivate: boolean, isDefault: boolean, updatedAt: any, warnings?: Array<string> | null } | null } | null };

export type DeleteFilterMutationVariables = Exact<{
  filterId: Scalars['ID']['input'];
}>;

export type DeleteFilterMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', deleteFilter?: boolean | null } | null };

export type SkipTracePropertyMutationVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;

export type SkipTracePropertyMutation = { __typename?: 'RootMutation', skiptraceMutation?: { __typename?: 'SkiptraceMutation', skipTraceProperty?: { __typename?: 'Property', id: string, skipTraceStatus?: SkipTraceStatus | null, lastSkiptracedAt?: any | null, isStaleSkiptrace?: boolean | null, address?: { __typename?: 'Address', addressFull?: string | null } | null, people?: Array<{ __typename?: 'PropertyPerson', id: string, firstName?: string | null, middleName?: string | null, lastName?: string | null, suffix?: string | null, age?: number | null, isRelative?: boolean | null, relativeIds: Array<string>, ranking?: number | null, deceased?: boolean | null, isNameOnDeed?: boolean | null, phoneNumbers?: Array<{ __typename?: 'PropertyPersonPhoneNumber', number: string, type: string, ranking: number, dncStatus?: { __typename?: 'DncStatus', isDnc: boolean, isLitigator: boolean } | null }> | null, emails?: Array<{ __typename?: 'PropertyPersonEmail', email: string, ranking: number }> | null }> | null } | null } | null };

export type ManualSkiptraceMutationVariables = Exact<{
  input: ManualSkipTraceRequestInput;
}>;

export type ManualSkiptraceMutation = { __typename?: 'RootMutation', skiptraceMutation?: { __typename?: 'SkiptraceMutation', manualSkiptrace?: { __typename?: 'SkipTraceRequest', id?: string | null, ownerFirstName?: string | null, ownerLastName?: string | null, line1?: string | null, line2?: string | null, city?: string | null, state?: string | null, zip?: string | null, phoneNumbers?: Array<{ __typename?: 'PhoneNumber', number: string, type: string, dncStatus?: { __typename?: 'DncStatus', isDnc: boolean, isLitigator: boolean } | null }> | null } | null } | null };

export type ListFilterFieldNamesQueryVariables = Exact<{
  type: FilterType;
}>;

export type ListFilterFieldNamesQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', listFilterFields?: Array<{ __typename?: 'FilterFieldDescriptor', fieldId: string, label: string, category: string, component: string }> | null } | null };

export type ListFilterFieldsQueryVariables = Exact<{
  type: FilterType;
  fieldIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type ListFilterFieldsQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', listFilterFields?: Array<{ __typename?: 'FilterFieldDescriptor', fieldId: string, label: string, category: string, description?: string | null, component: string, acceptedValueKeys?: Array<string> | null, hidden: boolean, retired: boolean, valueShapes?: Array<{ __typename?: 'FilterFieldValueShape', discriminatorKey?: string | null, discriminatorValue?: string | null, scalar?: { __typename?: 'FilterFieldScalarShape', type: string, acceptedValues?: Array<string> | null } | null, keys: Array<{ __typename?: 'FilterFieldValueKey', key: string, required: boolean, acceptedValues?: Array<string> | null }> }> | null, options?: Array<{ __typename?: 'FilterFieldOption', label: string, value?: string | null }> | null }> | null } | null };

export type CountRecordsQueryVariables = Exact<{
  spec: Scalars['JSON']['input'];
}>;

export type CountRecordsQuery = { __typename?: 'RootQuery', pagesQuery?: { __typename?: 'PagesQuery', count?: any | null } | null };

export type AddContactCustomFieldOptionMutationVariables = Exact<{
  customFieldId: Scalars['ID']['input'];
  label: Scalars['String']['input'];
}>;

export type AddContactCustomFieldOptionMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', addOption?: { __typename?: 'ContactCustomField', id: string, name: string, options?: Array<{ __typename?: 'ContactCustomFieldOption', id: string, label: string }> | null } | null } | null };

export type SetContactCustomFieldVisibilityMutationVariables = Exact<{
  customFieldIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  optionIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetContactCustomFieldVisibilityMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', setCustomFieldVisibility?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, visibleWhen?: { __typename?: 'ContactCustomFieldVisibility', fieldId: string, optionIds: Array<string> } | null }> | null } | null } | null };

export type GetContactFieldVisibilityQueryVariables = Exact<{ [key: string]: never; }>;

export type GetContactFieldVisibilityQuery = { __typename?: 'RootQuery', contactCustomFieldQuery?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, visibleWhen?: { __typename?: 'ContactCustomFieldVisibility', fieldId: string, optionIds: Array<string> } | null }> | null } | null };

export type GetDealDetailTabsQueryVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
}>;

export type GetDealDetailTabsQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'PipelineItemQuery', getPipelineDetailLayout?: { __typename?: 'PipelineItemLayout', version: number, tabs: Array<{ __typename?: 'PipelineItemLayoutTab', id: string, name: string, displayOrder: number, fieldReferences: Array<string> }> } | null } | null };

export type SetDealDetailTabsMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  expectedVersion: Scalars['Int']['input'];
  tabs: Array<PipelineItemLayoutTabInput> | PipelineItemLayoutTabInput;
}>;

export type SetDealDetailTabsMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', updatePipelineDetailLayout?: { __typename?: 'PipelineItemLayout', version: number, tabs: Array<{ __typename?: 'PipelineItemLayoutTab', id: string, name: string, fieldReferences: Array<string> }> } | null } | null };

export type UpdateDealExternalLinkMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  linkId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateDealExternalLinkMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'PipelineItemMutation', updateDealExternalLink?: { __typename?: 'ExternalLink', id: string, title: string, url: string } | null } | null };

export type RenameUploadedFileMutationVariables = Exact<{
  uploadedFileId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameUploadedFileMutation = { __typename?: 'RootMutation', fileUpload?: { __typename?: 'FileUploadMutation', updateFileName?: { __typename?: 'UploadedFile', id: string, fileName: string } | null } | null };

export type DuplicateFormMutationVariables = Exact<{
  formId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
}>;

export type DuplicateFormMutation = { __typename?: 'RootMutation', embedFormMutation?: { __typename?: 'EmbedFormMutation', duplicate?: { __typename?: 'EmbedForm', id: string, name: string } | null } | null };

export type RunPropertyComparablesMutationVariables = Exact<{
  propertyId: Scalars['ID']['input'];
  criteria?: InputMaybe<PropertyComparablesCriteriaInput>;
}>;

export type RunPropertyComparablesMutation = { __typename?: 'RootMutation', propertyMutation?: { __typename?: 'PropertyMutation', runPropertyComparables?: { __typename?: 'PropertyComparablesResult', generatedAt: any, comparables: Array<{ __typename?: 'PropertyComparable', propertyId: string, beds?: number | null, baths?: number | null, livingSquareFeet?: number | null, yearBuilt?: number | null, lastSoldDate?: any | null, lastSoldPrice?: any | null, isOnMarketComp: boolean, listPrice?: number | null, distanceMiles?: number | null, pricePerSquareFoot?: number | null, address?: { __typename?: 'Address', line1: string, city: string, state: string, zip: string } | null }>, analytics: { __typename?: 'PropertyComparablesAnalytics', compCount: number, medianLastSoldPrice?: number | null, medianPricePerSquareFoot?: number | null, medianDistanceMiles?: number | null, subjectImpliedValueFromMedianPricePerSquareFoot?: number | null } } | null } | null };

export type CreateEmployeeAnswerWorkflowMutationVariables = Exact<{
  employeeId: Scalars['ID']['input'];
}>;

export type CreateEmployeeAnswerWorkflowMutation = { __typename?: 'RootMutation', aiEmployeesMutation?: { __typename?: 'AiEmployeesMutation', createEmployeeAnswerWorkflow: { __typename?: 'EmployeeAnswerWorkflow', workflowGroupId: string, workflowAutomationId: string, created: boolean } } | null };

export type KeepContractAsTemplateMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  category: Scalars['String']['input'];
}>;

export type KeepContractAsTemplateMutation = { __typename?: 'RootMutation', contractsMutation?: { __typename?: 'ContractsMutation', saveAsTemplate?: { __typename?: 'AdminContractTemplate', id: string, name: string, category: string, oneOff: boolean } | null } | null };

export type ListScheduledTasksQueryVariables = Exact<{
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<ScheduledTaskStatus> | ScheduledTaskStatus>;
  cadence?: InputMaybe<ScheduledTaskCadence>;
}>;

export type ListScheduledTasksQuery = { __typename?: 'RootQuery', scheduledTaskQuery?: { __typename?: 'ScheduledTaskQuery', scheduledTasks?: Array<{ __typename?: 'ScheduledTask', id: string, title: string, status: ScheduledTaskStatus, cadence: ScheduledTaskCadence, schedule: string, nextRunAt?: any | null, lastRunAt?: any | null, runCount: number, ownerUserId?: string | null, ownerName: string, tags: Array<string>, mine: boolean, canEdit: boolean, running: boolean }> | null } | null };

export type GetScheduledTaskQueryVariables = Exact<{
  taskId: Scalars['ID']['input'];
}>;

export type GetScheduledTaskQuery = { __typename?: 'RootQuery', scheduledTaskQuery?: { __typename?: 'ScheduledTaskQuery', scheduledTask?: { __typename?: 'ScheduledTask', id: string, title: string, instruction: string, status: ScheduledTaskStatus, cadence: ScheduledTaskCadence, cronExpression: string, timezone: string, oneOffAt?: any | null, schedule: string, nextRunAt?: any | null, lastRunAt?: any | null, runCount: number, ownerUserId?: string | null, ownerName: string, sessionId?: string | null, abilities: Array<string>, tags: Array<string>, expiresAt?: any | null, notifyOnlyOnChange: boolean, createdAt: any, mine: boolean, canEdit: boolean, running: boolean } | null } | null };

export type CreateScheduledTaskMutationVariables = Exact<{
  title: Scalars['String']['input'];
  instruction: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
  cronExpression?: InputMaybe<Scalars['String']['input']>;
  fireAt?: InputMaybe<Scalars['DateTime']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;

export type CreateScheduledTaskMutation = { __typename?: 'RootMutation', scheduledTaskMutation?: { __typename?: 'ScheduledTaskMutation', createScheduledTask?: { __typename?: 'ScheduledTask', id: string, title: string, instruction: string, status: ScheduledTaskStatus, schedule: string, nextRunAt?: any | null, sessionId?: string | null } | null } | null };

export type UpdateScheduledTaskMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  instruction?: InputMaybe<Scalars['String']['input']>;
  timing?: InputMaybe<ScheduledTaskTimingInput>;
  tags?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>;
  clearExpiresAt?: InputMaybe<Scalars['Boolean']['input']>;
  notifyOnlyOnChange?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateScheduledTaskMutation = { __typename?: 'RootMutation', scheduledTaskMutation?: { __typename?: 'ScheduledTaskMutation', updateScheduledTask?: { __typename?: 'ScheduledTask', id: string, title: string, instruction: string, status: ScheduledTaskStatus, schedule: string, nextRunAt?: any | null, tags: Array<string>, expiresAt?: any | null, notifyOnlyOnChange: boolean } | null } | null };

export type PauseScheduledTaskMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
}>;

export type PauseScheduledTaskMutation = { __typename?: 'RootMutation', scheduledTaskMutation?: { __typename?: 'ScheduledTaskMutation', pauseScheduledTask?: { __typename?: 'ScheduledTask', id: string, status: ScheduledTaskStatus, nextRunAt?: any | null } | null } | null };

export type ResumeScheduledTaskMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
}>;

export type ResumeScheduledTaskMutation = { __typename?: 'RootMutation', scheduledTaskMutation?: { __typename?: 'ScheduledTaskMutation', resumeScheduledTask?: { __typename?: 'ScheduledTask', id: string, status: ScheduledTaskStatus, nextRunAt?: any | null } | null } | null };

export type DeleteScheduledTaskMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
}>;

export type DeleteScheduledTaskMutation = { __typename?: 'RootMutation', scheduledTaskMutation?: { __typename?: 'ScheduledTaskMutation', deleteScheduledTask?: { __typename?: 'ScheduledTask', id: string, title: string } | null } | null };

export type ListSpaceRootsQueryVariables = Exact<{ [key: string]: never; }>;

export type ListSpaceRootsQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', roots?: Array<{ __typename?: 'Space', id: string, kind: SpaceKind, name: string, isMine: boolean, viewerRole?: SpaceRole | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean } }> | null } | null };

export type ListSpaceFolderQueryVariables = Exact<{
  spaceId: Scalars['ID']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type ListSpaceFolderQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', folder?: { __typename?: 'SpaceFolderListing', space: { __typename?: 'Space', id: string, kind: SpaceKind, name: string }, folder?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null, items: Array<{ __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> }> } | null } | null };

export type GetSpaceItemQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
}>;

export type GetSpaceItemQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', item?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type SearchSpaceItemsQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;

export type SearchSpaceItemsQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', search?: Array<{ __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> }> | null } | null };

export type GetSpaceTextContentQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
  versionId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type GetSpaceTextContentQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', textContent?: { __typename?: 'SpaceTextContent', text: string, truncated: boolean, versionId: string } | null } | null };

export type GetSpaceTextLinesQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
  versionId?: InputMaybe<Scalars['ID']['input']>;
  startLine?: InputMaybe<Scalars['Int']['input']>;
  maxChars?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetSpaceTextLinesQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', textLines?: { __typename?: 'SpaceTextLines', versionId: string, totalLines: number, startLine: number, endLine: number, text: string } | null } | null };

export type ReadSpaceSheetQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
  versionId?: InputMaybe<Scalars['ID']['input']>;
  sheet?: InputMaybe<Scalars['String']['input']>;
  range?: InputMaybe<Scalars['String']['input']>;
  find?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  maxChars?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ReadSpaceSheetQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', sheetRange?: { __typename?: 'SpaceSheetRange', versionId: string, sheet: string, range?: string | null, rowCount: number, columnCount: number, text: string, matchedRows?: number | null, nextStartRow?: number | null, truncated: boolean, sheets: Array<{ __typename?: 'SpaceSheetInfo', name: string, rowCount: number, columnCount: number }> } | null } | null };

export type SearchSpaceTextQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
  terms: Array<Scalars['String']['input']> | Scalars['String']['input'];
  contextLines?: InputMaybe<Scalars['Int']['input']>;
  versionId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type SearchSpaceTextQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', textSearch?: { __typename?: 'SpaceTextSearch', versionId: string, totalLines: number, matchedLines: number, truncated: boolean, text: string } | null } | null };

export type CreateSpaceFolderMutationVariables = Exact<{
  input: CreateSpaceFolderInput;
}>;

export type CreateSpaceFolderMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', createFolder?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type CreateSpaceTextFileMutationVariables = Exact<{
  input: CreateSpaceTextFileInput;
}>;

export type CreateSpaceTextFileMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', createTextFile?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type SaveSpaceTextFileMutationVariables = Exact<{
  input: SaveSpaceTextFileInput;
}>;

export type SaveSpaceTextFileMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', saveTextFile?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type InsertSpaceTextLinesMutationVariables = Exact<{
  input: InsertSpaceTextLinesInput;
}>;

export type InsertSpaceTextLinesMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', insertTextLines?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type EditSpaceTextLinesMutationVariables = Exact<{
  input: EditSpaceTextLinesInput;
}>;

export type EditSpaceTextLinesMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', editTextLines?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type EditSpaceSheetCellsMutationVariables = Exact<{
  input: EditSpaceSheetCellsInput;
}>;

export type EditSpaceSheetCellsMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', editSheetCells?: { __typename?: 'SpaceSheetEdit', sheet: string, cellsChanged: number, rowsAppended: number, rowCount: number, columnCount: number, item?: { __typename?: 'SpaceItem', id: string, name: string, fileType?: string | null, sizeBytes?: number | null, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null } | null } | null } | null };

export type FilterSpaceSheetMutationVariables = Exact<{
  input: FilterSpaceSheetInput;
}>;

export type FilterSpaceSheetMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', filterSheet?: { __typename?: 'SpaceSheetFilterResult', sheet: string, columns: Array<string>, rowsRead: number, rowsWritten: number, duplicatesDropped: number, preview: string, rowsPerRepeat: Array<{ __typename?: 'SpaceSheetFilterRepeatCount', value: string, rows: number }>, item: { __typename?: 'SpaceItem', id: string, name: string, fileType?: string | null, sizeBytes?: number | null, spaceId: string, parentId?: string | null } } | null } | null };

export type RenameSpaceItemMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameSpaceItemMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', rename?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type MoveSpaceItemsMutationVariables = Exact<{
  input: MoveSpaceItemsInput;
}>;

export type MoveSpaceItemsMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', move?: Array<{ __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> }> | null } | null };

export type CopySpaceItemMutationVariables = Exact<{
  input: CopySpaceItemInput;
}>;

export type CopySpaceItemMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', copy?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type CopyUploadedFileToSpaceMutationVariables = Exact<{
  input: CopyUploadedFileIntoSpaceInput;
}>;

export type CopyUploadedFileToSpaceMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', copyUploadedFile?: { __typename?: 'SpaceItem', id: string, spaceId: string, parentId?: string | null, name: string, fileType?: string | null, sizeBytes?: number | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type SetAgentFilesFolderMutationVariables = Exact<{
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type SetAgentFilesFolderMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', setAgentFilesFolder?: { __typename?: 'SpaceItem', id: string, spaceId: string, name: string, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type TrashSpaceItemsMutationVariables = Exact<{
  itemIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type TrashSpaceItemsMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', trash?: number | null } | null };

export type RestoreSpaceItemsMutationVariables = Exact<{
  itemIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type RestoreSpaceItemsMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', restore?: Array<{ __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> }> | null } | null };

export type DeleteSpaceItemsForeverMutationVariables = Exact<{
  itemIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type DeleteSpaceItemsForeverMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', deleteForever?: number | null } | null };

export type SetSpaceAccessModeMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
  accessMode: SpaceAccessMode;
}>;

export type SetSpaceAccessModeMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', setAccessMode?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, description?: string | null, fileType?: string | null, sizeBytes?: number | null, accessMode: SpaceAccessMode, systemLocked: boolean, viewerRole?: SpaceRole | null, childCount?: number | null, shareCount: number, updatedAt: any, trashedAt?: any | null, abilities: { __typename?: 'SpaceAbilities', addChildren: boolean, edit: boolean, move: boolean, trash: boolean, share: boolean }, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string }, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type SetSpaceGrantMutationVariables = Exact<{
  input: SetSpaceGrantInput;
}>;

export type SetSpaceGrantMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', setGrant?: { __typename?: 'SpaceAccessList', audience: SpaceAudience, entries: Array<{ __typename?: 'SpaceAccessEntry', role: SpaceRole, isOwner: boolean, person: { __typename?: 'SpacePerson', id: string, name: string } }> } | null } | null };

export type ListSpacesSharedWithMeQueryVariables = Exact<{ [key: string]: never; }>;

export type ListSpacesSharedWithMeQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', sharedWithMe?: Array<{ __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, fileType?: string | null, sizeBytes?: number | null, viewerRole?: SpaceRole | null, updatedAt: any, owner?: { __typename?: 'SpacePerson', id: string, name: string } | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> }> | null } | null };

export type ListRecentSpaceItemsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  mine?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type ListRecentSpaceItemsQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', recent?: Array<{ __typename?: 'SpaceItem', id: string, name: string, catalogKind: string, createdAt: any, updatedAt: any, createdBy: { __typename?: 'SpaceCreator', label: string }, path: Array<{ __typename?: 'SpacePathSegment', name: string }> }> | null } | null };

export type ListSpaceTrashQueryVariables = Exact<{ [key: string]: never; }>;

export type ListSpaceTrashQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', trash?: Array<{ __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, kind: SpaceItemKind, name: string, fileType?: string | null, sizeBytes?: number | null, viewerRole?: SpaceRole | null, updatedAt: any, trashedAt?: any | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> }> | null } | null };

export type ListSpaceItemVersionsQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
}>;

export type ListSpaceItemVersionsQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', versions?: Array<{ __typename?: 'SpaceFileVersion', id: string, versionNumber: number, sizeBytes: number, contentType: string, createdAt: any, isCurrent: boolean, createdBy: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string } }> | null } | null };

export type ListSpaceItemActivityQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
}>;

export type ListSpaceItemActivityQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', activity?: Array<{ __typename?: 'SpaceActivityEvent', id: string, action: string, detail?: any | null, createdAt: any, actor: { __typename?: 'SpaceCreator', kind: SpaceCreatorKind, label: string } }> | null } | null };

export type GetSpaceAccessListQueryVariables = Exact<{
  itemId: Scalars['ID']['input'];
}>;

export type GetSpaceAccessListQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', accessList?: { __typename?: 'SpaceAccessList', audience: SpaceAudience, item: { __typename?: 'SpaceItem', id: string, name: string, accessMode: SpaceAccessMode }, entries: Array<{ __typename?: 'SpaceAccessEntry', role: SpaceRole, isOwner: boolean, person: { __typename?: 'SpacePerson', id: string, name: string, email?: string | null } }> } | null } | null };

export type SearchSpacesQueryVariables = Exact<{
  query: Scalars['String']['input'];
  zones?: InputMaybe<Array<SpacesSearchZone> | SpacesSearchZone>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type SearchSpacesQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', spacesSearch: { __typename?: 'SpacesSearchResults', query: string, incompleteZones: Array<SpacesSearchZone>, groups: Array<{ __typename?: 'SpacesSearchGroup', zone: SpacesSearchZone, total: number, totalIsLowerBound: boolean, hits: Array<{ __typename?: 'SpacesSearchHit', id: string, zone: SpacesSearchZone, kind: SpacesSearchKind, title: string, subtitle: string, location: string, fileType?: string | null, updatedAt: any, snippet?: { __typename?: 'SpacesSearchSnippet', text: string } | null, target: { __typename?: 'SpacesSearchTarget', href: string } }> }> } } | null };

export type DescribeSpaceItemMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;

export type DescribeSpaceItemMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', describe?: { __typename?: 'SpaceItem', id: string, name: string, description?: string | null, updatedAt: any } | null } | null };

export type RestoreSpaceItemVersionMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
  versionId: Scalars['ID']['input'];
}>;

export type RestoreSpaceItemVersionMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', restoreVersion?: { __typename?: 'SpaceItem', id: string, name: string, updatedAt: any, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null } | null } | null };

export type ListSpaceContactFilesQueryVariables = Exact<{
  filter?: InputMaybe<SpacesContactFilesFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListSpaceContactFilesQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', records?: { __typename?: 'SpacesRecordsQuery', contactFiles: { __typename?: 'SpacesContactFilePage', hasNextPage: boolean, nextCursor?: string | null, nodes: Array<{ __typename?: 'SpacesContactFile', id: string, name: string, contentType?: string | null, createdAt: any, contact: { __typename?: 'SpacesRecordContact', id: string, name: string }, source: { __typename?: 'SpacesContactFileSource', channel: SpacesContactFileChannel, direction: SpacesRecordDirection, textConversationId?: string | null, phoneNumber?: string | null, emailSubject?: string | null, callId?: string | null } }> } } | null } | null };

export type ListSpaceCallsQueryVariables = Exact<{
  filter?: InputMaybe<SpacesCallsFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListSpaceCallsQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', records?: { __typename?: 'SpacesRecordsQuery', calls: { __typename?: 'SpacesCallRecordPage', hasNextPage: boolean, nextCursor?: string | null, nodes: Array<{ __typename?: 'SpacesCallRecord', id: string, direction: SpacesCallDirection, startedAt: any, durationSeconds?: number | null, hasRecording: boolean, contact: { __typename?: 'SpacesRecordContact', id: string, name: string }, call: { __typename?: 'Call', id: string, status?: CallStatus | null, disposition?: CallDisposition | null } }> } } | null } | null };

export type ListMemoryShelvesQueryVariables = Exact<{ [key: string]: never; }>;

export type ListMemoryShelvesQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', memoryLibrary?: { __typename?: 'SpacesMemoryLibrary', shelves: Array<{ __typename?: 'SpacesMemoryShelfCount', shelf: SpacesMemoryShelf, subjectCount?: number | null }> } | null } | null };

export type ListMemorySubjectsQueryVariables = Exact<{
  shelf: SpacesMemoryShelf;
  query?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListMemorySubjectsQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', memorySubjects?: { __typename?: 'SpacesMemorySubjectPage', endCursor?: string | null, hasNextPage: boolean, subjects: Array<{ __typename?: 'SpacesMemorySubjectRow', shelf: SpacesMemoryShelf, subjectId: string, name: string, noteCount: number, updatedAt: any }> } | null } | null };

export type GetMemorySubjectNotesQueryVariables = Exact<{
  shelf: SpacesMemoryShelf;
  subjectId?: InputMaybe<Scalars['ID']['input']>;
  retired?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetMemorySubjectNotesQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', memorySubject?: { __typename?: 'SpacesMemorySubject', shelf: SpacesMemoryShelf, subjectId: string, name: string, noteCount: number, updatedAt?: any | null, lastDreamAt?: any | null } | null, memoryNotes?: { __typename?: 'SpacesMemoryNotePage', endCursor?: string | null, hasNextPage: boolean, notes: Array<{ __typename?: 'SpacesMemoryNote', id: string, kind: SpacesMemoryNoteKind, text: string, origin: SpacesMemoryNoteOrigin, pinned: boolean, retired: boolean, updatedAt: any, source: { __typename?: 'SpacesMemorySource', kind: SpacesMemorySourceKind, name: string, contactId?: string | null } }> } | null } | null };

export type FileLibraryItemsOnContactMutationVariables = Exact<{
  itemIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
}>;

export type FileLibraryItemsOnContactMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', fileOnContact?: Array<{ __typename?: 'SpaceAttachment', uploadedFileId: string, itemId: string, fileName: string, contentType: string, sizeBytes: number }> | null } | null };

export type FileLibraryItemsOnDealMutationVariables = Exact<{
  itemIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  dealId: Scalars['ID']['input'];
}>;

export type FileLibraryItemsOnDealMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', fileOnDeal?: Array<{ __typename?: 'SpaceAttachment', uploadedFileId: string, itemId: string, fileName: string, contentType: string, sizeBytes: number }> | null } | null };

export type SavePagePdfMutationVariables = Exact<{
  itemId: Scalars['ID']['input'];
}>;

export type SavePagePdfMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', savePagePdf?: { __typename?: 'SpaceItem', id: string, spaceId: string, spaceName: string, parentId?: string | null, name: string, fileType?: string | null, sizeBytes?: number | null, path: Array<{ __typename?: 'SpacePathSegment', id: string, name: string }> } | null } | null };

export type AddMemoryNoteMutationVariables = Exact<{
  shelf: SpacesMemoryShelf;
  subjectId?: InputMaybe<Scalars['ID']['input']>;
  kind: SpacesMemoryNoteKind;
  text: Scalars['String']['input'];
}>;

export type AddMemoryNoteMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', memoryAddNote?: { __typename?: 'SpacesMemoryNote', id: string, kind: SpacesMemoryNoteKind, text: string, origin: SpacesMemoryNoteOrigin, pinned: boolean } | null } | null };

export type EditMemoryNoteMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
  text: Scalars['String']['input'];
}>;

export type EditMemoryNoteMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', memoryEditNote?: { __typename?: 'SpacesMemoryNote', id: string, kind: SpacesMemoryNoteKind, text: string, pinned: boolean } | null } | null };

export type PinMemoryNoteMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
  pinned: Scalars['Boolean']['input'];
}>;

export type PinMemoryNoteMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', memoryPinNote?: { __typename?: 'SpacesMemoryNote', id: string, pinned: boolean } | null } | null };

export type ForgetMemoryNoteMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}>;

export type ForgetMemoryNoteMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', memoryForgetNote?: boolean | null } | null };

export type RestoreMemoryNoteMutationVariables = Exact<{
  noteId: Scalars['ID']['input'];
}>;

export type RestoreMemoryNoteMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', memoryRestoreNote?: { __typename?: 'SpacesMemoryNote', id: string, pinned: boolean, retired: boolean } | null } | null };

export type GetMemoryDreamLogQueryVariables = Exact<{
  shelf: SpacesMemoryShelf;
  subjectId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetMemoryDreamLogQuery = { __typename?: 'RootQuery', spacesQuery?: { __typename?: 'SpacesQuery', memoryDreamLog?: { __typename?: 'SpacesMemoryDreamLog', hasMore: boolean, entries: Array<{ __typename?: 'SpacesMemoryDreamEntry', id: string, verb: string, summary: string, reason?: string | null, at: any, undoable: boolean, undone: boolean, waiting: boolean }> } | null } | null };

export type UndoMemoryDreamMutationVariables = Exact<{
  eventId: Scalars['ID']['input'];
}>;

export type UndoMemoryDreamMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', memoryUndoDream?: boolean | null } | null };

export type QueueMemoryDreamMutationVariables = Exact<{
  shelf: SpacesMemoryShelf;
  subjectId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type QueueMemoryDreamMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', memoryDreamNow?: boolean | null } | null };

export type BeginSpaceUploadMutationVariables = Exact<{
  input: BeginSpaceUploadInput;
}>;

export type BeginSpaceUploadMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', beginUpload?: { __typename?: 'SpaceUploadTicket', uploadId: string, uploadUrl: string, contentType: string, expiresAt: any } | null } | null };

export type CompleteSpaceUploadMutationVariables = Exact<{
  uploadId: Scalars['ID']['input'];
  expectedVersionId?: InputMaybe<Scalars['ID']['input']>;
  actorGrn?: InputMaybe<Scalars['String']['input']>;
}>;

export type CompleteSpaceUploadMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', completeUpload?: { __typename?: 'SpaceItem', id: string, spaceId: string, parentId?: string | null, name: string, fileType?: string | null, sizeBytes?: number | null, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null } | null } | null };

export type PublishSpacePageMutationVariables = Exact<{
  input: PublishSpacePageInput;
}>;

export type PublishSpacePageMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', publishPage?: { __typename?: 'SpaceItem', id: string, spaceId: string, parentId?: string | null, name: string, fileType?: string | null, sizeBytes?: number | null, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null } | null } | null };

export type UpdateSpacePageMutationVariables = Exact<{
  input: UpdateSpacePageInput;
}>;

export type UpdateSpacePageMutation = { __typename?: 'RootMutation', spacesMutation?: { __typename?: 'SpacesMutation', updatePage?: { __typename?: 'SpaceItem', id: string, spaceId: string, parentId?: string | null, name: string, fileType?: string | null, sizeBytes?: number | null, currentVersion?: { __typename?: 'SpaceFileVersion', id: string, versionNumber: number } | null } | null } | null };

export type ClearStaleWorkflowTasksMutationVariables = Exact<{
  timezone: Scalars['String']['input'];
}>;

export type ClearStaleWorkflowTasksMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', clearStaleWorkflowTasks?: { __typename?: 'ClearStaleWorkflowTasksResult', bulkTaskId?: string | null, taskCount: number, hasMore: boolean, startsAt?: any | null } | null } | null };

export type CancelTaskClearMutationVariables = Exact<{
  bulkTaskId: Scalars['ID']['input'];
}>;

export type CancelTaskClearMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', cancelTaskClear?: CancelTaskClearOutcome | null } | null };

export type RestoreClearedTasksMutationVariables = Exact<{
  bulkTaskId: Scalars['ID']['input'];
}>;

export type RestoreClearedTasksMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', restoreClearedTasks?: { __typename?: 'RestoreClearedTasksResult', bulkTaskId?: string | null, taskCount: number } | null } | null };

export type ListMyTasksQueryVariables = Exact<{
  taskStatus?: InputMaybe<TaskStatus>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dueBefore?: InputMaybe<Scalars['DateTime']['input']>;
  dueAfter?: InputMaybe<Scalars['DateTime']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  timezone?: InputMaybe<Timezone>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListMyTasksQuery = { __typename?: 'RootQuery', users?: { __typename?: 'UsersQuery', getUserTasks?: { __typename?: 'PaginateTaskResponse', total: number, canFetchNext: boolean, tasks: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, contact?: { __typename?: 'Contact', id: string, name?: string | null } | null, deals?: Array<{ __typename?: 'Deal', id: string }> | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> } | null } | null };

export type ListContactTasksQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;

export type ListContactTasksQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, name?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, createdAt?: any | null, dueDate?: any | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, name: string } | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null } | null };

export type CreateTaskOnContactMutationVariables = Exact<{
  contactId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  dueDate: Scalars['DateTime']['input'];
  timezone: Timezone;
  description?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  dealIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  alongsideOpenTasks?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type CreateTaskOnContactMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', createTaskOnContact?: { __typename?: 'Contact', id: string, name?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null } | null };

export type CreateTaskOnDealMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  dueDate: Scalars['DateTime']['input'];
  timezone: Timezone;
  description?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  alongsideOpenTasks?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type CreateTaskOnDealMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', createTaskOnDeal?: { __typename?: 'Deal', id: string, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null } | null };

export type UpdateTaskMutationVariables = Exact<{
  taskId: Scalars['String']['input'];
  contactId: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  timezone?: InputMaybe<Timezone>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type UpdateTaskMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', updateTaskOnContact?: { __typename?: 'Contact', id: string, name?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null } | null };

export type DeleteTaskMutationVariables = Exact<{
  taskId: Scalars['String']['input'];
  contactId: Scalars['String']['input'];
}>;

export type DeleteTaskMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', deleteTaskOnContact?: { __typename?: 'Contact', id: string, name?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, completedAt?: any | null, dueDate?: any | null }> | null } | null } | null };

export type CompleteTaskByIdMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
  isCompleted?: Scalars['Boolean']['input'];
}>;

export type CompleteTaskByIdMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', updateTasksCompletedByIds?: Array<{ __typename?: 'Task', id: string, title?: string | null, type?: PipelineItemTaskType | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null };

export type CompleteTaskMutationVariables = Exact<{
  taskId: Scalars['String']['input'];
  contactId: Scalars['String']['input'];
  isCompleted?: Scalars['Boolean']['input'];
}>;

export type CompleteTaskMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', updateTaskCompleted?: { __typename?: 'Contact', id: string, name?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, completedAt?: any | null, dueDate?: any | null }> | null } | null } | null };

export type RescheduleTasksMutationVariables = Exact<{
  taskIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  dueBefore?: InputMaybe<Scalars['DateTime']['input']>;
  expectedCount?: InputMaybe<Scalars['Int']['input']>;
  dueDate: Scalars['DateTime']['input'];
  timezone: Timezone;
}>;

export type RescheduleTasksMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', rescheduleTasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, dueDate?: any | null }> | null } | null };

export type DeleteTasksMutationVariables = Exact<{
  items: Array<DeleteTaskInput> | DeleteTaskInput;
}>;

export type DeleteTasksMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', deletedCount?: number | null } | null };

export type BulkCreateTasksOnContactsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  title: Scalars['String']['input'];
  dueDate: Scalars['DateTime']['input'];
  timezone: Timezone;
  description?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  assignToPointPerson?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type BulkCreateTasksOnContactsMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', bulkCreateTasksOnContacts?: { __typename?: 'ContactsBulkActionResponse', bulkTaskId?: string | null } | null } | null };

export type UpdateTaskOnDealMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
  dealId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['DateTime']['input']>;
  timezone?: InputMaybe<Timezone>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type UpdateTaskOnDealMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', updateTaskOnDeal?: { __typename?: 'Deal', id: string, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, completedAt?: any | null, dueDate?: any | null }> | null } | null } | null };

export type DeleteTaskOnDealMutationVariables = Exact<{
  taskId: Scalars['ID']['input'];
  dealId: Scalars['ID']['input'];
}>;

export type DeleteTaskOnDealMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', deleteTaskOnDeal?: { __typename?: 'Deal', id: string, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null }> | null } | null } | null };

export type ListTeammatesQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListTeammatesQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', getTeamAutocomplete?: Array<{ __typename?: 'UserAutocompleteMatch', userId: string, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null }> | null } | null };

export type ListTeamMembersQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListTeamMembersQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', listTeamMembers?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null, organizationRole?: OrganizationToUserMappingType | null, organizationMembershipStatus?: OrganizationMembershipStatus | null, createdAt?: any | null }> | null } | null };

export type GetTeammatesByIdsQueryVariables = Exact<{
  userIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type GetTeammatesByIdsQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', getTeamMembersByIds?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null }> | null } | null };

export type CountOutboundTextsQueryVariables = Exact<{
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type CountOutboundTextsQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', outboundTextCounts?: { __typename?: 'OutboundTextCounts', startDate: any, endDate: any, total: { __typename?: 'TextSendTally', sent: number, delivered: number, failed: number }, byUser: Array<{ __typename?: 'MemberTextSendCount', userId: string, name?: string | null, sent: number, delivered: number, failed: number }>, otherSenders?: { __typename?: 'OtherTextSenders', aiEmployees: { __typename?: 'TextSendTally', sent: number, delivered: number, failed: number }, workflows: { __typename?: 'TextSendTally', sent: number, delivered: number, failed: number }, unattributed: { __typename?: 'TextSendTally', sent: number, delivered: number, failed: number } } | null } | null } | null };

export type GetTeamCallStatsQueryVariables = Exact<{
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type GetTeamCallStatsQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', callStats?: { __typename?: 'TeamCallStats', startDate: any, endDate: any, totals: { __typename?: 'CallTally', outboundCalls: number, inboundCalls: number, connectedCalls: number, conversationCalls: number, talkSeconds: number }, byUser: Array<{ __typename?: 'MemberCallStats', userId: string, name?: string | null, outboundCalls: number, inboundCalls: number, connectedCalls: number, conversationCalls: number, talkSeconds: number }> } | null } | null };

export type ListTeamInvitesQueryVariables = Exact<{ [key: string]: never; }>;

export type ListTeamInvitesQuery = { __typename?: 'RootQuery', organization?: { __typename?: 'Organization', id: string, invitations?: Array<{ __typename?: 'InvitationLink', id: string, acceptUrl: string, isAlive?: boolean | null, isPermanent?: boolean | null, phoneRequired?: boolean | null, userType?: OrganizationToUserMappingType | null, email?: string | null, createdAt?: any | null }> | null } | null };

export type CreateTeamInviteMutationVariables = Exact<{
  userType?: InputMaybe<OrganizationToUserMappingType>;
  emails?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  isPermanent?: InputMaybe<Scalars['Boolean']['input']>;
  phoneRequired?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type CreateTeamInviteMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', createInvitationLink?: { __typename?: 'InvitationLink', id: string, acceptUrl: string, isAlive?: boolean | null, isPermanent?: boolean | null, phoneRequired?: boolean | null, userType?: OrganizationToUserMappingType | null, email?: string | null, createdAt?: any | null } | null } | null };

export type RevokeTeamInviteMutationVariables = Exact<{
  invitationId: Scalars['ID']['input'];
}>;

export type RevokeTeamInviteMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', revokeInvitation?: { __typename?: 'InvitationLink', id: string, isAlive?: boolean | null } | null } | null };

export type ResendTeamInviteMutationVariables = Exact<{
  invitationId: Scalars['ID']['input'];
}>;

export type ResendTeamInviteMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', resendInvitation?: { __typename?: 'InvitationLink', id: string, acceptUrl: string, isAlive?: boolean | null, isPermanent?: boolean | null, email?: string | null } | null } | null };

export type EmailPermanentTeamInviteMutationVariables = Exact<{
  emails: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type EmailPermanentTeamInviteMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', emailPermanentLink?: { __typename?: 'InvitationLink', id: string, acceptUrl: string, isAlive?: boolean | null, isPermanent?: boolean | null } | null } | null };

export type GetTeamAnalyticsOverviewQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;

export type GetTeamAnalyticsOverviewQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentTeamOverview?: { __typename?: 'AgentTeamOverview', asOfDate: any, period: AgentAnalyticsPeriod, reportingPeriod: string, startDate: any, endDate: any, summary: { __typename?: 'AgentTeamSummary', agentCount: number, calls: number, completedCalls: number, conversationCalls: number, callsDeltaPct?: number | null, texts: number, textsDeltaPct?: number | null, emails: number, emailsDeltaPct?: number | null, tasks: number, tasksDeltaPct?: number | null, appointments: number, appointmentsDeltaPct?: number | null, newLeads: number, newLeadsDeltaPct?: number | null, notActedOnCount: number, activeLeadsCount: number, warmLeadsCount: number, coolingLeadsCount: number, coldLeadsCount: number, deadLeadsCount: number }, agents: Array<{ __typename?: 'AgentOverviewRow', userId: string, userName: string, userEmail?: string | null, calls: number, texts: number, emails: number, tasks: number, appointments: number, newLeads: number, notActedOnCount: number, avgSpeedToFirstCallMinutes?: number | null, avgSpeedToFirstMessageMinutes?: number | null, activeLeadsCount: number, warmLeadsCount: number, coolingLeadsCount: number, coldLeadsCount: number, deadLeadsCount: number, score: number, conversationRate?: number | null }>, pipelineExposure: Array<{ __typename?: 'AgentTeamPipelineExposureRow', pipelineId: string, pipelineName: string, userId: string, userName: string, commissionEarnedCents: number, wonDealsCount: number, lostDealsCount: number }> } | null } | null };

export type GetTeamActivityTimeseriesQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;

export type GetTeamActivityTimeseriesQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentTeamActivityTimeseries?: { __typename?: 'AgentTeamActivityTimeseries', asOfDate: any, rows: Array<{ __typename?: 'AgentTeamActivityTimeseriesRow', asOfDate: any, calls: number, texts: number, emails: number, tasks: number, appointments: number, activeAgents: number, newLeads: number }> } | null } | null };

export type ChangeTeamMemberRoleMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  role: OrganizationToUserMappingType;
}>;

export type ChangeTeamMemberRoleMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', changeUserRole?: { __typename?: 'User', id: string, organizationRole?: OrganizationToUserMappingType | null } | null } | null };

export type RemoveTeamMemberMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
}>;

export type RemoveTeamMemberMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', suspendOrganizationMemberWithImpact?: { __typename?: 'SuspendOrganizationMemberResult', userId: string, handover: UserDependencyHandoverStatus, handoverSourceCount: number, intactSourceCount: number, retainedPartnerGrantCount: number, reassignedTaskCount: number, releasedContactSeatCount: number, handedOverContactCount: number, openWorkTruncated: boolean, openWorkFailed: boolean } | null } | null };

export type RestoreTeamMemberMutationVariables = Exact<{
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;

export type RestoreTeamMemberMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', reactivateOrganizationMember?: { __typename?: 'User', id: string, organizationMembershipStatus?: OrganizationMembershipStatus | null } | null } | null };

export type GetGoalPlanQueryVariables = Exact<{
  periodStartDate: Scalars['Date']['input'];
}>;

export type GetGoalPlanQuery = { __typename?: 'RootQuery', agentGoalsQuery?: { __typename?: 'AgentGoalsQuery', getAgentGoalPlan?: { __typename?: 'AgentGoalPlanState', draftPlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null, activePlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null } | null } | null };

export type CreateGoalPlanMutationVariables = Exact<{
  periodStartDate: Scalars['Date']['input'];
}>;

export type CreateGoalPlanMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', createAgentGoalPlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null } | null };

export type UpsertCommissionGoalMutationVariables = Exact<{
  goalPlanId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  metric: AgentCommissionGoalMetric;
  targetCents: Scalars['BigInt']['input'];
}>;

export type UpsertCommissionGoalMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', upsertAgentCommissionGoal?: { __typename?: 'AgentCommissionGoal', id: string, goalPlanId: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any } | null } | null };

export type UpsertPersonalGoalMutationVariables = Exact<{
  goalPlanId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
}>;

export type UpsertPersonalGoalMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', upsertAgentPersonalGoal?: { __typename?: 'AgentPersonalGoal', id: string, goalPlanId: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number } | null } | null };

export type DeletePersonalGoalMutationVariables = Exact<{
  goalId: Scalars['ID']['input'];
}>;

export type DeletePersonalGoalMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', deleteAgentPersonalGoal?: boolean | null } | null };

export type UpdatePersonalGoalStatusMutationVariables = Exact<{
  goalId: Scalars['ID']['input'];
  status: AgentPersonalGoalStatus;
}>;

export type UpdatePersonalGoalStatusMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', updateAgentPersonalGoalStatus?: { __typename?: 'AgentPersonalGoal', id: string, goalPlanId: string, title: string, status: AgentPersonalGoalStatus } | null } | null };

export type PublishGoalPlanMutationVariables = Exact<{
  planId: Scalars['ID']['input'];
}>;

export type PublishGoalPlanMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', publishAgentGoalPlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null } | null };

export type GetTeammateGoalPlanQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
  periodStartDate: Scalars['Date']['input'];
}>;

export type GetTeammateGoalPlanQuery = { __typename?: 'RootQuery', agentGoalsQuery?: { __typename?: 'AgentGoalsQuery', getAgentGoalPlan?: { __typename?: 'AgentGoalPlanState', draftPlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null, activePlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null } | null } | null };

export type CreateTeammateGoalPlanMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  periodStartDate: Scalars['Date']['input'];
}>;

export type CreateTeammateGoalPlanMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', createAgentGoalPlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null } | null };

export type UpsertTeammateCommissionGoalMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  goalPlanId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  metric: AgentCommissionGoalMetric;
  targetCents: Scalars['BigInt']['input'];
}>;

export type UpsertTeammateCommissionGoalMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', upsertAgentCommissionGoal?: { __typename?: 'AgentCommissionGoal', id: string, goalPlanId: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any } | null } | null };

export type UpsertTeammatePersonalGoalMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  goalPlanId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
}>;

export type UpsertTeammatePersonalGoalMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', upsertAgentPersonalGoal?: { __typename?: 'AgentPersonalGoal', id: string, goalPlanId: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number } | null } | null };

export type DeleteTeammatePersonalGoalMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  goalId: Scalars['ID']['input'];
}>;

export type DeleteTeammatePersonalGoalMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', deleteAgentPersonalGoal?: boolean | null } | null };

export type UpdateTeammatePersonalGoalStatusMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  goalId: Scalars['ID']['input'];
  status: AgentPersonalGoalStatus;
}>;

export type UpdateTeammatePersonalGoalStatusMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', updateAgentPersonalGoalStatus?: { __typename?: 'AgentPersonalGoal', id: string, goalPlanId: string, title: string, status: AgentPersonalGoalStatus } | null } | null };

export type PublishTeammateGoalPlanMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  planId: Scalars['ID']['input'];
}>;

export type PublishTeammateGoalPlanMutation = { __typename?: 'RootMutation', agentGoalsMutation?: { __typename?: 'AgentGoalsMutation', publishAgentGoalPlan?: { __typename?: 'AgentGoalPlan', id: string, userId: string, periodStartDate: any, periodEndDate: any, status: AgentGoalPlanStatus, publishedAt?: any | null, commissionGoals: Array<{ __typename?: 'AgentCommissionGoal', id: string, pipelineId?: string | null, pipelineName?: string | null, metric: AgentCommissionGoalMetric, targetCents: any }>, personalGoals: Array<{ __typename?: 'AgentPersonalGoal', id: string, title: string, description?: string | null, status: AgentPersonalGoalStatus, displayOrder: number }> } | null } | null };

export type GetMemberActivityQueryVariables = Exact<{
  startDate: Scalars['DateTime']['input'];
  endDate: Scalars['DateTime']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type GetMemberActivityQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', memberActivity?: { __typename?: 'MemberActivity', startDate: any, endDate: any, userId: string, name?: string | null, emailsSent: number, notesWritten: number, tasksCreated: number, appointmentsBooked: number, tasksCompleted: number, dealStageMoves: number, texts: { __typename?: 'TextSendTally', sent: number, delivered: number, failed: number }, calls: { __typename?: 'CallTally', outboundCalls: number, inboundCalls: number, connectedCalls: number, conversationCalls: number, talkSeconds: number } } | null } | null };

export type GetTeamMemberCapabilitiesQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;

export type GetTeamMemberCapabilitiesQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', getTeamMemberCapabilities?: Array<OrganizationCapability> | null } | null };

export type GrantTeamMemberCapabilityMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  capability: OrganizationCapability;
}>;

export type GrantTeamMemberCapabilityMutation = { __typename?: 'RootMutation', teamMutation?: { __typename?: 'TeamMutation', grantTeamMemberCapability?: { __typename?: 'User', id: string } | null } | null };

export type RevokeTeamMemberCapabilityMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
  capability: OrganizationCapability;
}>;

export type RevokeTeamMemberCapabilityMutation = { __typename?: 'RootMutation', teamMutation?: { __typename?: 'TeamMutation', revokeTeamMemberCapability?: { __typename?: 'User', id: string } | null } | null };

export type ListTeamsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListTeamsQuery = { __typename?: 'RootQuery', userGroupQuery?: { __typename?: 'UserGroupQuery', list?: Array<{ __typename?: 'UserGroup', id: string, name: string, description?: string | null, memberCount: number, members: Array<{ __typename?: 'UserGroupMember', id: string, firstName?: string | null, lastName?: string | null, email: string }> }> | null } | null };

export type CreateTeamMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  memberUserIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type CreateTeamMutation = { __typename?: 'RootMutation', userGroupMutation?: { __typename?: 'UserGroupMutation', create?: { __typename?: 'UserGroup', id: string, name: string, memberCount: number } | null } | null };

export type UpdateTeamMutationVariables = Exact<{
  teamId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  memberUserIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type UpdateTeamMutation = { __typename?: 'RootMutation', userGroupMutation?: { __typename?: 'UserGroupMutation', update?: { __typename?: 'UserGroup', id: string, name: string, description?: string | null, memberCount: number } | null } | null };

export type SetTeamMembersMutationVariables = Exact<{
  teamId: Scalars['ID']['input'];
  memberUserIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type SetTeamMembersMutation = { __typename?: 'RootMutation', userGroupMutation?: { __typename?: 'UserGroupMutation', setMembers?: { __typename?: 'UserGroup', id: string, memberCount: number, members: Array<{ __typename?: 'UserGroupMember', id: string, email: string }> } | null } | null };

export type DeleteTeamMutationVariables = Exact<{
  teamId: Scalars['ID']['input'];
  dependencyResolution?: InputMaybe<DependencyResolutionInput>;
}>;

export type DeleteTeamMutation = { __typename?: 'RootMutation', userGroupMutation?: { __typename?: 'UserGroupMutation', delete?: boolean | null } | null };

export type SkipOnTodayMutationVariables = Exact<{
  subjectGrn: Scalars['String']['input'];
  kind: Scalars['String']['input'];
  anchorAt: Scalars['DateTime']['input'];
}>;

export type SkipOnTodayMutation = { __typename?: 'RootMutation', subjectStateMutation?: { __typename?: 'SubjectStateMutation', skip?: { __typename?: 'UserSubjectState', subjectGrn: string, kind: string, snoozedUntil?: any | null } | null } | null };

export type ClearOnTodayMutationVariables = Exact<{
  subjectGrn: Scalars['String']['input'];
  kind: Scalars['String']['input'];
  anchorAt: Scalars['DateTime']['input'];
}>;

export type ClearOnTodayMutation = { __typename?: 'RootMutation', subjectStateMutation?: { __typename?: 'SubjectStateMutation', clear?: { __typename?: 'UserSubjectState', subjectGrn: string, kind: string, seenThroughAt?: any | null } | null } | null };

export type HideOnTodayMutationVariables = Exact<{
  subjectGrn: Scalars['String']['input'];
  kind: Scalars['String']['input'];
}>;

export type HideOnTodayMutation = { __typename?: 'RootMutation', subjectStateMutation?: { __typename?: 'SubjectStateMutation', hide?: { __typename?: 'UserSubjectState', subjectGrn: string, kind: string, dismissedAt?: any | null } | null } | null };

export type MarkWrongOnTodayMutationVariables = Exact<{
  subjectGrn: Scalars['String']['input'];
  kind: Scalars['String']['input'];
  reason: SubjectDismissReason;
  note?: InputMaybe<Scalars['String']['input']>;
}>;

export type MarkWrongOnTodayMutation = { __typename?: 'RootMutation', subjectStateMutation?: { __typename?: 'SubjectStateMutation', markWrong?: { __typename?: 'UserSubjectState', subjectGrn: string, kind: string, dismissedAt?: any | null, dismissReason?: SubjectDismissReason | null } | null } | null };

export type UnhideOnTodayMutationVariables = Exact<{
  subjectGrn: Scalars['String']['input'];
  kind: Scalars['String']['input'];
}>;

export type UnhideOnTodayMutation = { __typename?: 'RootMutation', subjectStateMutation?: { __typename?: 'SubjectStateMutation', unhide?: { __typename?: 'UserSubjectState', subjectGrn: string, kind: string, dismissedAt?: any | null, snoozedUntil?: any | null } | null } | null };

export type HideTaskSourceOnTodayMutationVariables = Exact<{
  sourceGrn: Scalars['String']['input'];
}>;

export type HideTaskSourceOnTodayMutation = { __typename?: 'RootMutation', subjectStateMutation?: { __typename?: 'SubjectStateMutation', hideTodaySource?: { __typename?: 'UserSubjectState', subjectGrn: string, kind: string, dismissedAt?: any | null } | null } | null };

export type ListLibraryFilesQueryVariables = Exact<{
  folderId?: InputMaybe<Scalars['ID']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListLibraryFilesQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', libraryFiles?: Array<{ __typename?: 'LibraryFile', id: string, name: string, description?: string | null, folderId?: string | null, contentType?: string | null, updatedAt: any }> | null } | null };

export type UpdateLibraryFileMutationVariables = Exact<{
  fileId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateLibraryFileMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateLibraryFile?: { __typename?: 'LibraryFile', id: string, name: string, description?: string | null } | null } | null };

export type MoveLibraryFileMutationVariables = Exact<{
  fileId: Scalars['ID']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MoveLibraryFileMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', moveLibraryFile?: { __typename?: 'LibraryFile', id: string, folderId?: string | null } | null } | null };

export type DeleteLibraryFileMutationVariables = Exact<{
  fileId: Scalars['ID']['input'];
}>;

export type DeleteLibraryFileMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', deleteLibraryFile?: { __typename?: 'WorkflowAutomationsQuery', libraryFiles?: Array<{ __typename?: 'LibraryFile', id: string }> | null } | null } | null };

export type ListEventWorkflowPayloadSamplesQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type ListEventWorkflowPayloadSamplesQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', eventWorkflowPayloadSamples?: Array<{ __typename?: 'EventWorkflowPayloadSample', id: string, source: EventWorkflowPayloadSampleSource, payload: any, receivedAt: any }> | null } | null };

export type RecordEventWorkflowPayloadSampleMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  payload: Scalars['JSON']['input'];
}>;

export type RecordEventWorkflowPayloadSampleMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', recordEventWorkflowPayloadSample?: { __typename?: 'EventWorkflowPayloadSample', id: string, source: EventWorkflowPayloadSampleSource, receivedAt: any } | null } | null };

export type DeleteEventWorkflowPayloadSampleMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  sampleId: Scalars['ID']['input'];
}>;

export type DeleteEventWorkflowPayloadSampleMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', deleteEventWorkflowPayloadSample?: boolean | null } | null };

export type UpdateWorkflowPriorityMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  priority: Scalars['Float']['input'];
}>;

export type UpdateWorkflowPriorityMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowAutomationPriority?: { __typename?: 'WorkflowAutomation', id: string, workflowGroup: { __typename?: 'WorkflowGroup', id: string, priority: number } } | null } | null };

export type ResumeRunsPausedWithWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type ResumeRunsPausedWithWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', resumeRunsPausedWithWorkflow?: { __typename?: 'WorkflowGroup', id: string, status: WorkflowGroupStatus, runsPausedWithWorkflow: number } | null } | null };

export type MoveAndResumeParkedRunsMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type MoveAndResumeParkedRunsMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', moveAndResumeParkedRuns?: { __typename?: 'ParkedRunRestart', moved: number, completed: number, remaining: number, stuck: boolean, notLive: boolean, parkedCount: number, estimatedCount: number, bulkTaskId?: string | null } | null } | null };

export type PreviewWorkflowAiTextMutationVariables = Exact<{
  systemPrompt: Scalars['String']['input'];
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type PreviewWorkflowAiTextMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', simulateWorkflowTextGeneration?: Array<{ __typename?: 'WorkflowTextSimulationResult', contactId: string, contactName?: string | null, generatedText?: string | null, declineReason?: string | null, errorMessage?: string | null }> | null } | null };

export type ListWorkflowGraphRevisionsQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListWorkflowGraphRevisionsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', listWorkflowGraphRevisions?: Array<{ __typename?: 'WorkflowGraphRevision', id: string, versionId: string, source: WorkflowGraphRevisionSource, actorName?: string | null, agentRunId?: string | null, createdAt: any, diff: { __typename?: 'WorkflowGraphRevisionDiff', summary: string, hasPredecessor: boolean, absorbedUnjournaledEdits: boolean, changedSettingKeys: Array<string>, renamedFrom?: string | null, renamedTo?: string | null, editedSteps: Array<{ __typename?: 'WorkflowGraphRevisionNodeChange', type: string, changedConfigKeys: Array<string> }> } }> | null } | null };

export type AddLibraryFileFromArtifactMutationVariables = Exact<{
  artifactId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type AddLibraryFileFromArtifactMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createLibraryFileFromArtifact?: { __typename?: 'LibraryFile', id: string, name: string, folderId?: string | null, contentType?: string | null } | null } | null };

export type ListWorkflowTablesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListWorkflowTablesQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowTables?: Array<{ __typename?: 'WorkflowTable', id: string, name: string, description?: string | null, keyKind: WorkflowTableKeyKind, keyFieldPath?: string | null, rowCount: number, isProvisioned: boolean, updatedAt?: any | null, keyShape: { __typename?: 'WorkflowTableKeyShape', levels: Array<{ __typename?: 'WorkflowTableKeyLevel', parts: Array<{ __typename?: 'WorkflowTableKeyPart', kind: WorkflowTableKeyKind, fieldPath?: string | null, match: WorkflowTableKeyMatch }> }> }, columns: Array<{ __typename?: 'WorkflowTableColumn', id: string, name: string, kind: WorkflowTableColumnKind, displayOrder: number, tokenKey?: string | null, options: Array<{ __typename?: 'WorkflowTableColumnOption', value: string, label: string }> }> }> | null } | null };

export type GetWorkflowTableQueryVariables = Exact<{
  workflowTableId: Scalars['ID']['input'];
  rowLimit?: Scalars['Int']['input'];
  rowOffset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetWorkflowTableQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowTable?: { __typename?: 'WorkflowTable', id: string, name: string, description?: string | null, keyKind: WorkflowTableKeyKind, keyFieldPath?: string | null, rowCount: number, isProvisioned: boolean, updatedAt?: any | null, keyShape: { __typename?: 'WorkflowTableKeyShape', levels: Array<{ __typename?: 'WorkflowTableKeyLevel', parts: Array<{ __typename?: 'WorkflowTableKeyPart', kind: WorkflowTableKeyKind, fieldPath?: string | null, match: WorkflowTableKeyMatch }> }> }, columns: Array<{ __typename?: 'WorkflowTableColumn', id: string, name: string, kind: WorkflowTableColumnKind, displayOrder: number, tokenKey?: string | null, options: Array<{ __typename?: 'WorkflowTableColumnOption', value: string, label: string }> }>, rows: Array<{ __typename?: 'WorkflowTableRow', id: string, key: string, keyLabel?: string | null, keyLevel: number, isDefault: boolean, displayOrder: number, keyParts: Array<{ __typename?: 'WorkflowTableRowKeyPart', match: WorkflowTableKeyMatch, value?: string | null, label?: string | null, rangeStart?: string | null, rangeEnd?: string | null }>, cells: Array<{ __typename?: 'WorkflowTableCell', columnId: string, value: string }> }> } | null } | null };

export type ListWorkflowTableChangesQueryVariables = Exact<{
  workflowTableId: Scalars['ID']['input'];
  rowId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListWorkflowTableChangesQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowTableChanges?: { __typename?: 'WorkflowTableChangePage', nextCursor?: string | null, items: Array<{ __typename?: 'WorkflowTableChange', id: string, action: WorkflowTableChangeAction, createdAt: any, actorName?: string | null, tableName: string, columnsChanged: number, rowsChanged: number, truncated: boolean }> } | null } | null };

export type PreviewWorkflowTableLookupQueryVariables = Exact<{
  input: PreviewWorkflowTableLookupInput;
}>;

export type PreviewWorkflowTableLookupQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', previewWorkflowTableLookup?: { __typename?: 'WorkflowTableLookupPreview', key?: string | null, match: WorkflowTableLookupMatch, rowId?: string | null, rowKey?: string | null, rowKeyLabel?: string | null, missingSubjects: Array<WorkflowTableSubjectKind>, values: Array<{ __typename?: 'WorkflowTableResolvedValue', columnId: string, value?: string | null }> } | null } | null };

export type SaveWorkflowTableMutationVariables = Exact<{
  input: SaveWorkflowTableInput;
}>;

export type SaveWorkflowTableMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', saveWorkflowTable?: { __typename?: 'WorkflowTable', id: string, name: string, description?: string | null, keyKind: WorkflowTableKeyKind, keyFieldPath?: string | null, rowCount: number, isProvisioned: boolean, updatedAt?: any | null, keyShape: { __typename?: 'WorkflowTableKeyShape', levels: Array<{ __typename?: 'WorkflowTableKeyLevel', parts: Array<{ __typename?: 'WorkflowTableKeyPart', kind: WorkflowTableKeyKind, fieldPath?: string | null, match: WorkflowTableKeyMatch }> }> }, columns: Array<{ __typename?: 'WorkflowTableColumn', id: string, name: string, kind: WorkflowTableColumnKind, displayOrder: number, tokenKey?: string | null, options: Array<{ __typename?: 'WorkflowTableColumnOption', value: string, label: string }> }> } | null } | null };

export type SaveWorkflowTableRowsMutationVariables = Exact<{
  input: SaveWorkflowTableRowsInput;
}>;

export type SaveWorkflowTableRowsMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', saveWorkflowTableRows?: { __typename?: 'WorkflowTable', id: string, name: string, description?: string | null, keyKind: WorkflowTableKeyKind, keyFieldPath?: string | null, rowCount: number, isProvisioned: boolean, updatedAt?: any | null, keyShape: { __typename?: 'WorkflowTableKeyShape', levels: Array<{ __typename?: 'WorkflowTableKeyLevel', parts: Array<{ __typename?: 'WorkflowTableKeyPart', kind: WorkflowTableKeyKind, fieldPath?: string | null, match: WorkflowTableKeyMatch }> }> }, columns: Array<{ __typename?: 'WorkflowTableColumn', id: string, name: string, kind: WorkflowTableColumnKind, displayOrder: number, tokenKey?: string | null, options: Array<{ __typename?: 'WorkflowTableColumnOption', value: string, label: string }> }> } | null } | null };

export type DeleteWorkflowTableMutationVariables = Exact<{
  input: DeleteWorkflowTableInput;
}>;

export type DeleteWorkflowTableMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', deleteWorkflowTable?: { __typename?: 'DeleteWorkflowTablePayload', id: string } | null } | null };

export type ListWorkflowsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<WorkflowGroupStatus>;
  domain?: InputMaybe<WorkflowDomain>;
  name?: InputMaybe<Scalars['String']['input']>;
  triggerType?: InputMaybe<Array<WorkflowTriggerType> | WorkflowTriggerType>;
}>;

export type ListWorkflowsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroupsPage?: { __typename?: 'WorkflowGroupPage', total: number, items: Array<{ __typename?: 'WorkflowGroup', id: string, name: string, description?: string | null, status: WorkflowGroupStatus, channelsAcrossVersions: Array<WorkflowCommChannel>, workflowDomain?: WorkflowDomain | null, systemCategory?: string | null, folderId?: string | null, createdAt: any, updatedAt: any, archivedAt?: any | null }> } | null } | null };

export type GetWorkflowQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type GetWorkflowQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, description?: string | null, status: WorkflowGroupStatus, channels?: Array<WorkflowCommChannel> | null, channelsAcrossVersions: Array<WorkflowCommChannel>, workflowDomain?: WorkflowDomain | null, systemCategory?: string | null, sendWindow?: any | null, folderId?: string | null, createdAt: any, updatedAt: any, archivedAt?: any | null, runsPausedWithWorkflow: number, runsParkedByPublish: number, currentVersion?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null, updatedAt: any } | null, pendingDraft?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null, updatedAt: any } | null, versions?: Array<{ __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, publishedAt?: any | null, createdAt: any, updatedAt: any }> | null, draftValidation?: { __typename?: 'WorkflowDraftValidation', isValid: boolean, errors: Array<string>, carrierRisk: Array<{ __typename?: 'WorkflowSmsCarrierRisk', nodeId: string, body: string, band: string, templateId?: string | null, isFallback: boolean }> } | null } | null } | null };

export type GetWorkflowVersionGraphQueryVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
}>;

export type GetWorkflowVersionGraphQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowAutomation?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, description?: string | null, status: WorkflowAutomationStatus, channels?: Array<WorkflowCommChannel> | null, workflowDomain: WorkflowDomain, stepKinds?: Array<string> | null, updatedAt: any, graph?: any | null, inWords?: { __typename?: 'WorkflowVersionInWords', triggers: Array<string>, triggerOperator: string, stopsWhen?: string | null, names: Array<{ __typename?: 'WorkflowReferencedName', id: string, name: string, kind: string }> } | null } | null } | null };

export type ListWorkflowRunsQueryVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  statuses?: InputMaybe<Array<WorkflowAutomationRunStatus> | WorkflowAutomationRunStatus>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListWorkflowRunsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', listWorkflowRuns?: Array<{ __typename?: 'WorkflowAutomationRun', id: string, status: WorkflowAutomationRunStatus, dryRun: boolean, createdAt: any, updatedAt: any, scheduledExecution?: any | null, stoppedReason?: string | null, pausedReason?: string | null, sendFailureCode?: string | null, queuedSend?: { __typename?: 'WorkflowQueuedSend', reason?: WorkflowQueuedSendReason | null, nextAttemptAt?: any | null } | null, contact?: { __typename?: 'Contact', id: string, name?: string | null } | null }> | null } | null };

export type GetContentTemplateQueryVariables = Exact<{
  templateId: Scalars['ID']['input'];
}>;

export type GetContentTemplateQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', contentTemplate?: { __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, bodyContent: string, bodyFormat: string, subjectContent?: string | null, folderId?: string | null, createdAt: any, updatedAt: any, taskSetSteps?: Array<{ __typename?: 'TaskSetStep', id: string, taskTemplate: { __typename?: 'ContentTemplate', id: string, name: string }, dueOffset: { __typename?: 'TaskTemplateRelativeDateOffset', amount: number, unit: TaskTemplateRelativeTimeUnit }, preferredTimeOfDay: { __typename?: 'TaskTemplateTimeOfDay', hour: number, minute: number, timezone: Timezone } }> | null } | null } | null };

export type ListContentTemplatesQueryVariables = Exact<{
  type?: InputMaybe<ContentTemplateType>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type ListContentTemplatesQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', listContentTemplates?: Array<{ __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, folderId?: string | null, updatedAt: any, taskSetSteps?: Array<{ __typename?: 'TaskSetStep', id: string, taskTemplate: { __typename?: 'ContentTemplate', id: string, name: string }, dueOffset: { __typename?: 'TaskTemplateRelativeDateOffset', amount: number, unit: TaskTemplateRelativeTimeUnit }, preferredTimeOfDay: { __typename?: 'TaskTemplateTimeOfDay', hour: number, minute: number, timezone: Timezone } }> | null }> | null } | null };

export type ListContentTemplateFoldersQueryVariables = Exact<{ [key: string]: never; }>;

export type ListContentTemplateFoldersQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', libraryFolders?: Array<{ __typename?: 'LibraryFolder', id: string, name: string, parentFolderId?: string | null, fileCount: number, displayOrder: number, templateCounts: { __typename?: 'LibraryTemplateCounts', email: number, sms: number, note: number, task: number, taskSet: number } }> | null } | null };

export type GetWorkflowStatsQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type GetWorkflowStatsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, stats: { __typename?: 'WorkflowGroupStats', totalRuns: number, lastRunAt?: any | null, activeRuns: number, completedRuns: number, pausedRuns: number, stoppedRuns: number, failedRuns: number, messagesSent: number, replyRate?: number | null, bounceRate?: number | null, positiveReplyRate?: number | null, negativeReplyRate?: number | null, runsThatSentMessageCount: number, runsWithResponseCount: number } } | null } | null };

export type GetWorkflowVersionStatsQueryVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
}>;

export type GetWorkflowVersionStatsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowAutomation?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, stats: { __typename?: 'WorkflowAutomationStats', totalRuns: number, activeRuns: number, completedRuns: number, pausedRuns: number, stoppedRuns: number, failedRuns: number, messagesSent: number, sentEmailCount: number, sentTextCount: number, bouncedEmailCount: number, failedTextCount: number, replyRate?: number | null, bounceRate?: number | null, positiveReplyRate?: number | null, negativeReplyRate?: number | null, positiveReplyCount: number, negativeReplyCount: number, genuineReplyCount: number, optOutReplyCount: number, unreachableReplyCount: number }, sendingCapacity?: { __typename?: 'WorkflowSendingCapacity', queuedRuns: number, nextAttemptAt?: any | null, reason?: WorkflowQueuedSendReason | null } | null } | null } | null };

export type ListWorkflowPerformanceQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListWorkflowPerformanceQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroupsPage?: { __typename?: 'WorkflowGroupPage', total: number, items: Array<{ __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, channelsAcrossVersions: Array<WorkflowCommChannel>, workflowDomain?: WorkflowDomain | null, stats: { __typename?: 'WorkflowGroupStats', totalRuns: number, activeRuns: number, completedRuns: number, replyRate?: number | null, lastRunAt?: any | null } }> } | null } | null };

export type GetWorkflowThrottleUsageQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  rangeDays: Scalars['Int']['input'];
}>;

export type GetWorkflowThrottleUsageQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroupThrottleUsage?: { __typename?: 'WorkflowGroupThrottleUsage', throttleType: string, dailyCap?: number | null, usedToday: number, history: Array<{ __typename?: 'ThrottleDailyUsage', day: any, unitsSent: number }> } | null } | null };

export type CreateWorkflowMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  workflowDomain: WorkflowDomain;
  templateId?: InputMaybe<Scalars['String']['input']>;
  systemCategory?: InputMaybe<Scalars['String']['input']>;
  sendWindow?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type CreateWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createWorkflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, channels?: Array<WorkflowCommChannel> | null, workflowDomain?: WorkflowDomain | null, pendingDraft?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus } | null } | null } | null };

export type CreateOrReturnWorkflowDraftMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type CreateOrReturnWorkflowDraftMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createOrReturnWorkflowGroupDraft?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null, updatedAt: any, graph?: any | null } | null } | null };

export type UpdateWorkflowGraphMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  workflowGraph: Scalars['SuperJSON']['input'];
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  acknowledgeGraphWeakening?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateWorkflowGraphMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowAutomationGraph?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null, updatedAt: any, workflowGroup: { __typename?: 'WorkflowGroup', id: string, status: WorkflowGroupStatus, draftValidation?: { __typename?: 'WorkflowDraftValidation', isValid: boolean, errors: Array<string> } | null } } | null } | null };

export type PatchWorkflowGraphMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  graphPatch: Scalars['JSON']['input'];
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  acknowledgeGraphWeakening?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type PatchWorkflowGraphMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowAutomationGraph?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null, updatedAt: any, graph?: any | null, workflowGroup: { __typename?: 'WorkflowGroup', id: string, draftValidation?: { __typename?: 'WorkflowDraftValidation', isValid: boolean, errors: Array<string> } | null } } | null } | null };

export type RenameWorkflowMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;

export type RenameWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowAutomationName?: { __typename?: 'WorkflowAutomation', id: string, name: string, description?: string | null, status: WorkflowAutomationStatus } | null } | null };

export type PromoteWorkflowDraftMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  inFlightRunsStrategy?: InputMaybe<InFlightRunsStrategy>;
}>;

export type PromoteWorkflowDraftMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', promoteWorkflowGroupDraftToLive?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, currentVersion?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus } | null } | null } | null };

export type DiscardWorkflowDraftMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type DiscardWorkflowDraftMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', discardWorkflowGroupDraft?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, pendingDraft?: { __typename?: 'WorkflowAutomation', id: string } | null } | null } | null };

export type PauseWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  pauseInFlightRuns: Scalars['Boolean']['input'];
}>;

export type PauseWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', pauseWorkflow?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus } | null } | null };

export type UpdateWorkflowSendWindowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  sendWindow?: InputMaybe<Scalars['JSON']['input']>;
}>;

export type UpdateWorkflowSendWindowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowGroupSendWindow?: { __typename?: 'WorkflowGroup', id: string, name: string } | null } | null };

export type ResumeWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type ResumeWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', resumeMostRecentlyPausedWorkflow?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, currentVersion?: { __typename?: 'WorkflowAutomation', id: string, status: WorkflowAutomationStatus } | null } | null } | null };

export type DuplicateWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type DuplicateWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', duplicateWorkflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, channels?: Array<WorkflowCommChannel> | null, workflowDomain?: WorkflowDomain | null } | null } | null };

export type DeleteWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type DeleteWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', softDeleteWorkflowGroup?: { __typename?: 'WorkflowAutomationsQuery', workflowGroup?: { __typename?: 'WorkflowGroup', id: string, status: WorkflowGroupStatus, archivedAt?: any | null } | null } | null } | null };

export type RestoreWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;

export type RestoreWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', restoreWorkflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, archivedAt?: any | null } | null } | null };

export type TriggerWorkflowRunMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  recordId: Scalars['ID']['input'];
}>;

export type TriggerWorkflowRunMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', triggerWorkflowRun?: { __typename?: 'WorkflowAutomationRun', id: string, status: WorkflowAutomationRunStatus, dryRun: boolean, createdAt: any, scheduledExecution?: any | null } | null } | null };

export type EnrollInWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  contactIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  excludeIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;

export type EnrollInWorkflowMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', createBulkTriggerWorkflowTask?: { __typename?: 'ContactsBulkActionResponse', mode: ContactsBulkActionMode, bulkTaskId?: string | null } | null } | null };

export type PauseWorkflowRunMutationVariables = Exact<{
  workflowAutomationRunId: Scalars['ID']['input'];
}>;

export type PauseWorkflowRunMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', pauseWorkflowRun?: { __typename?: 'WorkflowAutomationRun', id: string, status: WorkflowAutomationRunStatus } | null } | null };

export type ResumeWorkflowRunMutationVariables = Exact<{
  workflowAutomationRunId: Scalars['ID']['input'];
}>;

export type ResumeWorkflowRunMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', resumeWorkflowRun?: { __typename?: 'WorkflowAutomationRun', id: string, status: WorkflowAutomationRunStatus } | null } | null };

export type StopWorkflowRunMutationVariables = Exact<{
  workflowAutomationRunId: Scalars['ID']['input'];
}>;

export type StopWorkflowRunMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', stopWorkflowRun?: { __typename?: 'WorkflowAutomationRun', id: string, status: WorkflowAutomationRunStatus } | null } | null };

export type ResumeWorkflowVersionMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
}>;

export type ResumeWorkflowVersionMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', resumeWorkflowVersion?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, status: WorkflowAutomationStatus } | null } | null };

export type BulkPauseWorkflowRunsMutationVariables = Exact<{
  workflowAutomationRunIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type BulkPauseWorkflowRunsMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', bulkPauseWorkflowRuns?: { __typename?: 'BulkWorkflowRunActionResult', transitionedCount: number, skippedCount: number } | null } | null };

export type BulkResumeWorkflowRunsMutationVariables = Exact<{
  workflowAutomationRunIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type BulkResumeWorkflowRunsMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', bulkResumeWorkflowRuns?: { __typename?: 'BulkWorkflowRunActionResult', transitionedCount: number, skippedCount: number } | null } | null };

export type SetSkipTraceDailyCapMutationVariables = Exact<{
  dailyCap: Scalars['Int']['input'];
}>;

export type SetSkipTraceDailyCapMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updatePropertySignalSkipTraceDailyCap?: number | null } | null };

export type CreateContentTemplateMutationVariables = Exact<{
  input: CreateContentTemplateInput;
}>;

export type CreateContentTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createContentTemplate?: { __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, folderId?: string | null, taskSetSteps?: Array<{ __typename?: 'TaskSetStep', id: string, taskTemplate: { __typename?: 'ContentTemplate', id: string, name: string }, dueOffset: { __typename?: 'TaskTemplateRelativeDateOffset', amount: number, unit: TaskTemplateRelativeTimeUnit }, preferredTimeOfDay: { __typename?: 'TaskTemplateTimeOfDay', hour: number, minute: number, timezone: Timezone } }> | null } | null } | null };

export type UpdateContentTemplateMutationVariables = Exact<{
  input: UpdateContentTemplateInput;
}>;

export type UpdateContentTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateContentTemplate?: { __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, updatedAt: any, taskSetSteps?: Array<{ __typename?: 'TaskSetStep', id: string, taskTemplate: { __typename?: 'ContentTemplate', id: string, name: string }, dueOffset: { __typename?: 'TaskTemplateRelativeDateOffset', amount: number, unit: TaskTemplateRelativeTimeUnit }, preferredTimeOfDay: { __typename?: 'TaskTemplateTimeOfDay', hour: number, minute: number, timezone: Timezone } }> | null } | null } | null };

export type DeleteContentTemplateMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  dependencyResolution?: InputMaybe<DependencyResolutionInput>;
}>;

export type DeleteContentTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', deleteContentTemplate?: { __typename?: 'WorkflowAutomationsQuery', listContentTemplates?: Array<{ __typename?: 'ContentTemplate', id: string, name: string }> | null } | null } | null };

export type MoveContentTemplateToFolderMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MoveContentTemplateToFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', moveContentTemplateToFolder?: { __typename?: 'ContentTemplate', id: string, name: string, folderId?: string | null } | null } | null };

export type CreateContentTemplateFolderMutationVariables = Exact<{
  name: Scalars['String']['input'];
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type CreateContentTemplateFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createLibraryFolder?: { __typename?: 'LibraryFolder', id: string, name: string, parentFolderId?: string | null, displayOrder: number } | null } | null };

export type RenameContentTemplateFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameContentTemplateFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', renameLibraryFolder?: { __typename?: 'LibraryFolder', id: string, name: string } | null } | null };

export type DeleteContentTemplateFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
}>;

export type DeleteContentTemplateFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', deleteLibraryFolder?: { __typename?: 'WorkflowAutomationsQuery', libraryFolders?: Array<{ __typename?: 'LibraryFolder', id: string, name: string }> | null } | null } | null };

export type ListWorkflowFoldersQueryVariables = Exact<{ [key: string]: never; }>;

export type ListWorkflowFoldersQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowFolders?: { __typename?: 'WorkflowFolderListing', ready: boolean, folders: Array<{ __typename?: 'WorkflowFolder', id: string, name: string, displayOrder: number, parentFolderId?: string | null, itemCount: number }> } | null } | null };

export type CreateWorkflowFolderMutationVariables = Exact<{
  name: Scalars['String']['input'];
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type CreateWorkflowFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createWorkflowFolder: string } | null };

export type MoveWorkflowFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MoveWorkflowFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', moveWorkflowFolder?: { __typename?: 'WorkflowAutomationsQuery', workflowFolders?: { __typename?: 'WorkflowFolderListing', ready: boolean, folders: Array<{ __typename?: 'WorkflowFolder', id: string, name: string, displayOrder: number, parentFolderId?: string | null, itemCount: number }> } | null } | null } | null };

export type MoveWorkflowToFolderMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MoveWorkflowToFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', moveWorkflowToFolder?: { __typename?: 'WorkflowGroup', id: string, name: string, folderId?: string | null, status: WorkflowGroupStatus } | null } | null };

export type RenameWorkflowFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;

export type RenameWorkflowFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', renameWorkflowFolder?: { __typename?: 'WorkflowAutomationsQuery', workflowFolders?: { __typename?: 'WorkflowFolderListing', ready: boolean, folders: Array<{ __typename?: 'WorkflowFolder', id: string, name: string, displayOrder: number, parentFolderId?: string | null, itemCount: number }> } | null } | null } | null };

export type DeleteWorkflowFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
}>;

export type DeleteWorkflowFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', deleteWorkflowFolder?: { __typename?: 'WorkflowAutomationsQuery', workflowFolders?: { __typename?: 'WorkflowFolderListing', ready: boolean, folders: Array<{ __typename?: 'WorkflowFolder', id: string, name: string, displayOrder: number, parentFolderId?: string | null, itemCount: number }> } | null } | null } | null };

export type ReorderWorkflowFoldersMutationVariables = Exact<{
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
  folderIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;

export type ReorderWorkflowFoldersMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', reorderWorkflowFolders?: { __typename?: 'WorkflowAutomationsQuery', workflowFolders?: { __typename?: 'WorkflowFolderListing', ready: boolean, folders: Array<{ __typename?: 'WorkflowFolder', id: string, name: string, displayOrder: number, parentFolderId?: string | null, itemCount: number }> } | null } | null } | null };

export type ApplyTaskTemplateMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
  dealIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  overrides?: InputMaybe<ApplyTaskTemplateOverridesInput>;
}>;

export type ApplyTaskTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', applyTaskTemplate?: { __typename?: 'Task', id: string, title?: string | null, description?: string | null, endDate?: any | null, completedAt?: any | null } | null } | null };

export type ApplyTaskSetMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
  dealIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type ApplyTaskSetMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', applyTaskSet?: { __typename?: 'ApplyTaskSetPayload', tasks: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, endDate?: any | null, completedAt?: any | null }>, failedStep?: { __typename?: 'ApplyTaskSetFailedStep', index: number, taskTemplateId: string, message: string } | null } | null } | null };

export type RestoreWorkflowVersionAsDraftMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
}>;

export type RestoreWorkflowVersionAsDraftMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', restoreWorkflowVersionAsDraft?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, status: WorkflowAutomationStatus } | null } | null };

export type RewriteWorkflowDraftTextStepMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  nodeId: Scalars['ID']['input'];
  expectedBody: Scalars['String']['input'];
}>;

export type RewriteWorkflowDraftTextStepMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', rewriteWorkflowDraftTextStep: { __typename?: 'WorkflowDraftTextStepRewrite', status: WorkflowDraftTextStepRewriteStatus, body?: string | null, scoreBefore?: number | null, scoreAfter?: number | null } } | null };

export type MoveContentTemplateFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
  parentFolderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type MoveContentTemplateFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', moveLibraryFolder?: { __typename?: 'LibraryFolder', id: string, parentFolderId?: string | null } | null } | null };
