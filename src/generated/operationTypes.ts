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
export enum A2pRegistrationStatus {
  Approved = 'APPROVED',
  Draft = 'DRAFT',
  /**
   * The registration LAPSED and must be renewed. Deliberately distinct from REJECTED: a client that
   * cannot tell them apart will offer "Update & resubmit", and the resubmit mutation refuses anything
   * that is not literally REJECTED — so the user gets a button that always fails, for a problem that
   * needs renewing rather than appealing.
   */
  Expired = 'EXPIRED',
  /**
   * Registered by the customer in their OWN carrier account, and only OBSERVED by us — never driven.
   * Deliberately distinct from APPROVED for the same reason EXPIRED is distinct from REJECTED: an
   * approved brand offers "register a sending campaign", "update & resubmit" and the registration
   * wizard, and every one of those mutations is Esendex-only — so collapsing this state into APPROVED
   * hands the customer a screen of controls that refuse them. There is also nothing here for us to
   * have approved: their carrier already did, somewhere we cannot see.
   */
  External = 'EXTERNAL',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type AcceptPartnershipInvitationInput = {
  partnerOrgId: Scalars['ID']['input'];
  /**
   * Users from the current org visible to the sender.
   * Only applied if the current org is on the receiver side of any pending row.
   * Empty array = all users.
   */
  permittedUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum AcquisitionMemoStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING'
}

export enum AcquisitionMemoStrategy {
  Flip = 'FLIP'
}

export enum ActivityDirection {
  Inbound = 'INBOUND',
  Outbound = 'OUTBOUND'
}

export enum ActivityStatus {
  Done = 'DONE',
  Failed = 'FAILED',
  Running = 'RUNNING',
  Stopped = 'STOPPED'
}

export enum ActivityType {
  AddedPersonEmail = 'ADDED_PERSON_EMAIL',
  AddedPersonPhone = 'ADDED_PERSON_PHONE',
  AddCollaborator = 'ADD_COLLABORATOR',
  AiEmployeeAttached = 'AI_EMPLOYEE_ATTACHED',
  AiEmployeeEscalated = 'AI_EMPLOYEE_ESCALATED',
  AiEmployeeRan = 'AI_EMPLOYEE_RAN',
  AiEmployeeRemoved = 'AI_EMPLOYEE_REMOVED',
  AiEmployeeScheduleChanged = 'AI_EMPLOYEE_SCHEDULE_CHANGED',
  Assigned = 'ASSIGNED',
  Call = 'CALL',
  ContactArchived = 'CONTACT_ARCHIVED',
  ContactUnarchived = 'CONTACT_UNARCHIVED',
  CreatedAppointment = 'CREATED_APPOINTMENT',
  CreatedImportantNote = 'CREATED_IMPORTANT_NOTE',
  CreatedTask = 'CREATED_TASK',
  CsvRowImported = 'CSV_ROW_IMPORTED',
  DeletedAppointment = 'DELETED_APPOINTMENT',
  DeletedImportantNote = 'DELETED_IMPORTANT_NOTE',
  DeletedPersonEmail = 'DELETED_PERSON_EMAIL',
  DeletedPersonPhone = 'DELETED_PERSON_PHONE',
  DeletedTask = 'DELETED_TASK',
  Email = 'EMAIL',
  FileAdded = 'FILE_ADDED',
  FileRemoved = 'FILE_REMOVED',
  ListUpdated = 'LIST_UPDATED',
  NoteCreated = 'NOTE_CREATED',
  NoteDeleted = 'NOTE_DELETED',
  NotePinned = 'NOTE_PINNED',
  NoteUnpinned = 'NOTE_UNPINNED',
  NoteUpdated = 'NOTE_UPDATED',
  ReactedToNote = 'REACTED_TO_NOTE',
  ReactedToReply = 'REACTED_TO_REPLY',
  RemovedNoteReaction = 'REMOVED_NOTE_REACTION',
  RemovedReplyReaction = 'REMOVED_REPLY_REACTION',
  RemoveCollaborator = 'REMOVE_COLLABORATOR',
  ReplyCreated = 'REPLY_CREATED',
  ReplyDeleted = 'REPLY_DELETED',
  ReplyUpdated = 'REPLY_UPDATED',
  TagUpdated = 'TAG_UPDATED',
  Text = 'TEXT',
  Unassigned = 'UNASSIGNED',
  UpdatedAppointment = 'UPDATED_APPOINTMENT',
  UpdatedDealPrice = 'UPDATED_DEAL_PRICE',
  UpdatedImportantNote = 'UPDATED_IMPORTANT_NOTE',
  UpdatedPersonEmail = 'UPDATED_PERSON_EMAIL',
  UpdatedPersonPhone = 'UPDATED_PERSON_PHONE',
  UpdatedSellerMotivation = 'UPDATED_SELLER_MOTIVATION',
  UpdatedTask = 'UPDATED_TASK',
  UpdatedTimeFrame = 'UPDATED_TIME_FRAME',
  UserMentionedInNote = 'USER_MENTIONED_IN_NOTE',
  VoicemailLeft = 'VOICEMAIL_LEFT'
}

export type AdaptiveUploadConfigInput = {
  attachProperties: Scalars['Boolean']['input'];
  createContacts: Scalars['Boolean']['input'];
  skiptrace: Scalars['Boolean']['input'];
  skiptraceAddress: BulkEnrichSkiptraceAddress;
  sourceShape: AdaptiveUploadSourceShape;
  tagProperties: Scalars['Boolean']['input'];
};

export enum AdaptiveUploadSourceShape {
  Contact = 'CONTACT',
  Mixed = 'MIXED',
  Property = 'PROPERTY'
}

export type AddCaseRecipientInput = {
  alertId: Scalars['ID']['input'];
  /** At least one of email / phoneNumber is required (enforced in CaseNotificationService) — a recipient with neither has no reachable channel. */
  email?: InputMaybe<Scalars['String']['input']>;
  emailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  smsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AddPropertiesToListMode {
  Async = 'ASYNC',
  Sync = 'SYNC'
}

export type AddressInput = {
  city: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type AdminAccountHealthInput = {
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type AdminAgentByIdInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type AdminAgentsListInput = {
  kind?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
};

/** How the contact-scoped read reached one session. */
export enum AdminContactSessionLink {
  /**
   * The session carries no contact of its own; at least one of its RUNS is
   * stamped with this contact. No read before this one could see those.
   */
  Run = 'RUN',
  /** The session's own `contactId` names the contact — its subject scope. */
  Session = 'SESSION'
}

/**
 * The Goliath-admin contact-scoped session read — "what has the AI done on THIS
 * contact", across every employee in the contact's org.
 *
 * No `organizationId`: the contact decides it, so the caller cannot widen the
 * scope. No `agentId` either, which is the whole point — every other session read
 * in the schema requires one.
 */
export type AdminContactSessionsInput = {
  contactId: Scalars['ID']['input'];
  /** Clamped server-side to at most 100. */
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type AdminCreateAgentInput = {
  config?: InputMaybe<Scalars['SuperJSON']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  kind: Scalars['String']['input'];
  name: Scalars['String']['input'];
  organizationId: Scalars['ID']['input'];
  origin?: InputMaybe<AgentOrigin>;
};

export type AdminCreateCronJobInput = {
  /** The contact this schedule runs for. */
  contactId: Scalars['ID']['input'];
  /** Standard 5-field cron expression. Validated at save: at most one firing per 15 minutes. */
  cronExpression: Scalars['String']['input'];
  /** IANA zone, e.g. "America/New_York". */
  timezone: Scalars['String']['input'];
  /**
   * The workflow GROUP, never a specific version. Republishing a workflow mints a new
   * version row, so a version-pinned schedule would silently stop working the first
   * time anyone edited it; the ACTIVE version is resolved at fire time instead.
   */
  workflowGroupId: Scalars['ID']['input'];
};

export type AdminCreateScraperPipelineInput = {
  /**
   * Open a "Scraper Build Out" deal (Requested stage) for this pipeline.
   * Null defaults to false, same rationale. Production-only regardless.
   */
  createBuildOutDeal?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Context for this pipeline. SHOWN TO THE CLIENT on the exported status report,
   * so write what they can read: what they asked for, what we are waiting on.
   */
  notes?: InputMaybe<Scalars['String']['input']>;
  /**
   * Post the creation notice to the internal #data-scraping Slack channel.
   * Null defaults to false: the admin create is the fulfillment path, and most
   * admin-created pipelines are already built and delivered, so announcing them
   * is noise. Opt in when ops genuinely needs to see it.
   */
  notifySlack?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  standardOperatingProcedure?: InputMaybe<Scalars['String']['input']>;
  /** Initial status. Null defaults to IMPLEMENTING (admin create = fulfillment in progress). */
  status?: InputMaybe<ScraperPipelineStatus>;
  submittedLocations?: InputMaybe<Array<Scalars['String']['input']>>;
  submittedSignals?: InputMaybe<Array<Scalars['String']['input']>>;
  submittedUrl?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type AdminCreateScraperPipelineSubscriptionInput = {
  scraperId: Scalars['ID']['input'];
  scraperPipelineId: Scalars['ID']['input'];
  slices?: InputMaybe<AdminScraperPipelineSubscriptionSliceInput>;
};

export type AdminCreateWorkflowRunMigrationInput = {
  /**
   * Total mapping (every non-END source node exactly once), same-type-or-END
   * targets — validated against both graphs before persisting.
   */
  nodeMappings: Array<AdminRunMigrationNodeMappingInput>;
  /** The customer org that owns both versions — an admin authors on its behalf. */
  organizationId: Scalars['ID']['input'];
  sourceWorkflowAutomationId: Scalars['ID']['input'];
  targetWorkflowAutomationId: Scalars['ID']['input'];
};

export enum AdminCronJobStatus {
  Active = 'ACTIVE',
  /**
   * Spent its `maxRuns` allowance and retired itself. A success terminal, not a fault:
   * nothing is wrong and there is nothing to retry, so resuming it is refused.
   */
  Exhausted = 'EXHAUSTED',
  Paused = 'PAUSED',
  /** Auto-paused after repeated non-successes — "we stopped this for you", not "you paused this". */
  PausedErrors = 'PAUSED_ERRORS'
}

export type AdminLlmUsageOrgRollupInput = {
  /** Inclusive lower bound on createdAt (UTC). ISO 8601. */
  from: Scalars['DateTime']['input'];
  /** Org whose LLM token usage to roll up. */
  organizationId: Scalars['ID']['input'];
  /** Exclusive upper bound on createdAt (UTC). ISO 8601. */
  to: Scalars['DateTime']['input'];
};

export type AdminLlmUsagePlatformRollupInput = {
  /** Inclusive lower bound on createdAt (UTC). ISO 8601. */
  from: Scalars['DateTime']['input'];
  /** Exclusive upper bound on createdAt (UTC). ISO 8601. */
  to: Scalars['DateTime']['input'];
};

export type AdminOrgUsageDetailInput = {
  organizationId: Scalars['ID']['input'];
  /** Trailing full weeks to include (default 12, max 26). */
  weeks?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminOrgUsageOverviewInput = {
  /** Trailing full weeks to include (default 12, max 26). */
  weeks?: InputMaybe<Scalars['Int']['input']>;
};

export type AdminRequestScraperPipelineInput = {
  clientPriority: ScraperPipelinePriority;
  /**
   * Exactly one county — one request files one pipeline. A client wanting several
   * counties gets several requests, so each carries its own status independently.
   */
  countyFips: Scalars['String']['input'];
  /**
   * Open a "Scraper Build Out" deal for the pipeline. Null defaults to TRUE, same
   * rationale. Production-only regardless.
   */
  createBuildOutDeal?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Context for this county. SHOWN TO THE CLIENT on the exported status report, so
   * write what they can read: what they asked for, what we are waiting on.
   */
  notes?: InputMaybe<Scalars['String']['input']>;
  /**
   * Post the request to #data-scraping. Null defaults to TRUE — the inverse
   * of the fulfillment create below, which records already-finished work. A request
   * is genuinely new inbound work the team should see.
   */
  notifySlack?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  suggestedUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional rush order. Null or empty (the normal case) means all signal types,
   * which is what the client gets either way — this only affects build order.
   */
  urgentSignals?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AdminRunMigrationNodeMappingInput = {
  fromNodeId: Scalars['String']['input'];
  toNodeId: Scalars['String']['input'];
};

/**
 * Freshness label computed at Dataform materialization time. LIVE/STALE/NEVER are
 * relative to the fleet-wide latest record day (not the calendar) — so a
 * fleet-wide outage doesn't mark everything stale at once. REPLACED/LEGACY label
 * the old-system legacy:* rows, which run without a V3 schedule and so are never
 * Live/Stale/Never.
 */
export enum AdminScraperFreshnessStatus {
  /** Legacy old-system scraper still the source of record — no known V3 twin. */
  Legacy = 'LEGACY',
  /** Produced a record on the fleet's latest record day. */
  Live = 'LIVE',
  /** Scraper row exists but has never produced a record. */
  Never = 'NEVER',
  /** Legacy old-system scraper whose source a V3 twin has taken over (see replacedBy). */
  Replaced = 'REPLACED',
  /** Latest record predates the fleet frontier. */
  Stale = 'STALE'
}

/**
 * Optional slice filters for a subscription. Null or empty on any dimension means
 * all-open: the subscription matches everything the scraper emits on that dimension.
 */
export type AdminScraperPipelineSubscriptionSliceInput = {
  countyFips?: InputMaybe<Array<Scalars['String']['input']>>;
  scraperSignalTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  signalTypes?: InputMaybe<Array<PropertySignalType>>;
};

/**
 * Health of the V3 successor behind a REPLACED legacy scraper — lets the view
 * separate a clean cutover from a coverage gap where the successor is itself dead.
 */
export enum AdminScraperTwinHealth {
  /** Successor exists but has never produced a record — a real coverage gap. */
  TwinDead = 'TWIN_DEAD',
  /** Successor is producing on the fleet frontier — a clean cutover. */
  TwinLive = 'TWIN_LIVE',
  /** Successor is behind (>9 days) — degraded but alive. */
  TwinStale = 'TWIN_STALE',
  /** Successor name does not resolve to a known scraper. */
  TwinUnknown = 'TWIN_UNKNOWN'
}

export type AdminSetAgentStatusInput = {
  id: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
  status: PersistedAgentStatus;
};

export type AdminUpdateAgentInput = {
  config?: InputMaybe<Scalars['SuperJSON']['input']>;
  hidden?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  origin?: InputMaybe<AgentOrigin>;
};

export type AdminUpdateAutomationTriggerAgentsInput = {
  agentIds: Array<Scalars['ID']['input']>;
  automationTriggerId: Scalars['ID']['input'];
  organizationId: Scalars['ID']['input'];
};

export type AdminUpdateScraperPipelineSubscriptionInput = {
  /** Full replace: omitted/empty dimensions reset to all-open. */
  slices?: InputMaybe<AdminScraperPipelineSubscriptionSliceInput>;
  subscriptionId: Scalars['ID']['input'];
};

/** Billing standing of an org, mirrored from OrganizationBilling for paying/trial filtering. */
export enum AdminUsageBillingStatus {
  /** Paying customer (live subscription in good standing, incl. canceled-but-paid-through). */
  Active = 'ACTIVE',
  /** Payment trouble — past_due / unpaid / incomplete. */
  Negative = 'NEGATIVE',
  /** No subscription (never subscribed, churned past paid-through, or internal/test org). Excluded from the overview server-side — kept only for schema compatibility. */
  None = 'NONE',
  /** On a free trial. */
  Trialing = 'TRIALING'
}

/**
 * Engagement classification for an org (or a user within an org), computed
 * over complete ISO weeks so partial-week reads don't flag false declines.
 */
export enum AdminUsageStatus {
  /** Last full week's minutes dropped below 70% of the trailing 3-full-week baseline (baseline ≥20 min/wk). */
  Declining = 'DECLINING',
  /** No recorded session activity in the last 2 business days (weekends don't count). */
  Dormant = 'DORMANT',
  Healthy = 'HEALTHY',
  /** Account created within the last 28 days — too young to trend. */
  New = 'NEW'
}

export enum AdminUserActivityEventKind {
  Route = 'ROUTE',
  Search = 'SEARCH'
}

export type AdminUserAgentSendMessageInput = {
  message: Scalars['String']['input'];
  sessionId?: InputMaybe<Scalars['ID']['input']>;
};

export enum AdminUserSearchType {
  AutocompleteOwner = 'AUTOCOMPLETE_OWNER',
  AutocompleteProperty = 'AUTOCOMPLETE_PROPERTY',
  AutocompletePropertyByMlsId = 'AUTOCOMPLETE_PROPERTY_BY_MLS_ID',
  AutocompletePropertyByParcel = 'AUTOCOMPLETE_PROPERTY_BY_PARCEL'
}

export type AdminUserSentryEventsInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  userEmail: Scalars['String']['input'];
};

export type AdvanceContactAgentSimTurnInput = {
  agentId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
  personaKey: Scalars['String']['input'];
};

export enum AfterCallActionKind {
  AddToSequence = 'ADD_TO_SEQUENCE',
  BookAppointment = 'BOOK_APPOINTMENT',
  CreateDeal = 'CREATE_DEAL',
  CreateTask = 'CREATE_TASK',
  UpdateCustomFields = 'UPDATE_CUSTOM_FIELDS'
}

export enum AgentAnalyticsPeriod {
  FourteenDays = 'FOURTEEN_DAYS',
  SevenDays = 'SEVEN_DAYS',
  SixtyDays = 'SIXTY_DAYS',
  ThirtyDays = 'THIRTY_DAYS',
  ThisMonth = 'THIS_MONTH',
  YearToDate = 'YEAR_TO_DATE'
}

export enum AgentChatBriefingKind {
  OverdueTasks = 'OVERDUE_TASKS',
  StaleDeals = 'STALE_DEALS',
  UnreadCalls = 'UNREAD_CALLS',
  WaitingTexts = 'WAITING_TEXTS'
}

export enum AgentCommissionGoalMetric {
  Earned = 'EARNED',
  Total = 'TOTAL'
}

export enum AgentGoalPeriodType {
  Month = 'MONTH'
}

export enum AgentGoalPlanStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Draft = 'DRAFT'
}

export enum AgentMessageStatus {
  Done = 'DONE',
  Failed = 'FAILED',
  Stopped = 'STOPPED',
  Streaming = 'STREAMING',
  Thinking = 'THINKING'
}

export enum AgentOrigin {
  Custom = 'CUSTOM',
  LeadNurturer = 'LEAD_NURTURER',
  MarketingCampaign = 'MARKETING_CAMPAIGN',
  Receptionist = 'RECEPTIONIST',
  Scheduler = 'SCHEDULER'
}

export enum AgentPersonalGoalStatus {
  Active = 'ACTIVE',
  Archived = 'ARCHIVED',
  Completed = 'COMPLETED'
}

export enum AgentSessionTurnKind {
  AgentRun = 'AGENT_RUN',
  AgentSessionProcess = 'AGENT_SESSION_PROCESS',
  UserMessage = 'USER_MESSAGE'
}

export enum AgentSessionUserMessageOrigin {
  QuestionForm = 'QUESTION_FORM',
  StatusChange = 'STATUS_CHANGE'
}

export type AiEmployeeScheduleInput = {
  cronExpression: Scalars['String']['input'];
  maxRuns: Scalars['Int']['input'];
  timezone: Scalars['String']['input'];
};

export enum AppointmentCalendarSyncProvider {
  Google = 'GOOGLE',
  Microsoft = 'MICROSOFT'
}

export enum AppointmentCalendarSyncStatus {
  Failed = 'FAILED',
  NotRequested = 'NOT_REQUESTED',
  SkippedNoAccess = 'SKIPPED_NO_ACCESS',
  SkippedWriteBlocked = 'SKIPPED_WRITE_BLOCKED',
  Synced = 'SYNCED'
}

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
export enum AppointmentReminderTimeUnit {
  Days = 'DAYS',
  Hours = 'HOURS',
  Minutes = 'MINUTES'
}

export type ApproveOAuthRequestInput = {
  approved: Scalars['Boolean']['input'];
  clientId: Scalars['String']['input'];
  redirectUri: Scalars['String']['input'];
  scope: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export type AreaResearchRunFilterInput = {
  /** Restrict to these county FIPS codes. */
  countyFips?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Restrict to these statuses (QUEUED | RUNNING | DONE | FAILED); others ignored. */
  statuses?: InputMaybe<Array<Scalars['String']['input']>>;
};

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
export enum ArtifactAuthorKind {
  Ai = 'AI',
  /**
   * Goliath itself — work the product did with no person and no AI employee
   * behind it (a contact merge nobody performed; the meeting notetaker's own
   * notes). NOT an AI employee: there is no roster entry, no session to open and
   * nothing to link to, so render the `name` plainly and never with AI-employee
   * treatment. `id` is always null.
   */
  System = 'SYSTEM',
  User = 'USER'
}

export type AssignAiEmployeeToContactInput = {
  agentId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
  schedule?: InputMaybe<AiEmployeeScheduleInput>;
};

export type AssignmentPolicyOwnerInput = {
  id: Scalars['ID']['input'];
  kind: AssignmentPolicyOwnerKind;
};

export enum AssignmentPolicyOwnerKind {
  Agent = 'AGENT',
  Line = 'LINE',
  Org = 'ORG'
}

export type AttachContactAgentMailboxInput = {
  agentId: Scalars['ID']['input'];
  mailboxId: Scalars['ID']['input'];
};

export type AttachContactAgentPhoneLineInput = {
  agentId: Scalars['ID']['input'];
  phoneLineId: Scalars['ID']['input'];
};

/**
 * What the recorder measured about the audio it just captured — facts no cheap
 * server-side inspection of the bytes reproduces. `peaks` is the waveform envelope
 * the player draws, one bucket per bar.
 */
export type AudioCaptureMetadataInput = {
  durationMs: Scalars['Int']['input'];
  peaks: Array<Scalars['Int']['input']>;
};

export type AutoCreateDealInput = {
  deal: CreateDealInput;
  dontCreateIfDealAlreadyExists?: InputMaybe<Scalars['Boolean']['input']>;
  propertyAttachmentMode?: InputMaybe<BulkDealPropertyAttachmentMode>;
};

/**
 * Input for previewing whether a proposed appointment slot conflicts with any
 * participant's existing appointments or external calendar events.
 */
export type AvailabilityForSlotInput = {
  /** Exclusive end of the proposed appointment window. */
  endDate: Scalars['DateTime']['input'];
  /** When updating an existing appointment, exclude it so it does not conflict with itself. */
  excludeTaskId?: InputMaybe<Scalars['ID']['input']>;
  /** Inclusive start of the proposed appointment window. */
  startDate: Scalars['DateTime']['input'];
  /**
   * Participant user IDs to check. Each must belong to the viewer's organization
   * or be visible through an active partnership.
   */
  userIds: Array<Scalars['ID']['input']>;
};

export type BaseSubAccountInput = {
  brandType: BrandRegistrationType;
  city: Scalars['String']['input'];
  isOptInHidden?: InputMaybe<Scalars['Boolean']['input']>;
  optInMessage?: InputMaybe<Scalars['String']['input']>;
  optInScreenshotsUploadedFileIds?: InputMaybe<Array<Scalars['String']['input']>>;
  postalCode: Scalars['String']['input'];
  prefferedAreaCode?: InputMaybe<Scalars['Int']['input']>;
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  unit?: InputMaybe<Scalars['String']['input']>;
};

export type BeginAiEmployeeBriefSetupInput = {
  /** The just-created employee the brief is about. */
  agentId: Scalars['ID']['input'];
  /** How the operator wants them to behave, in their own words. */
  brief: Scalars['String']['input'];
};

export enum BillingAction {
  AcceptTeamInvite = 'ACCEPT_TEAM_INVITE',
  CreateScraperPipeline = 'CREATE_SCRAPER_PIPELINE',
  CreateTeamInvite = 'CREATE_TEAM_INVITE',
  EmailVerification = 'EMAIL_VERIFICATION',
  ExportProperties = 'EXPORT_PROPERTIES',
  Skiptrace = 'SKIPTRACE'
}

/** A proposed in-app billing change to preview. Fields are read per `kind`. */
export type BillingChangeInput = {
  kind: BillingChangeKind;
  /** Absolute target extra-seat quantity, for kind = SET_SEATS. */
  targetSeatQuantity?: InputMaybe<Scalars['Int']['input']>;
};

/** Kinds of in-app billing change the shared confirm dialog can preview + apply. */
export enum BillingChangeKind {
  CancelSubscription = 'CANCEL_SUBSCRIPTION',
  EndTrial = 'END_TRIAL',
  SetSeats = 'SET_SEATS'
}

export type BoundingBoxInput = {
  east: Scalars['Float']['input'];
  north: Scalars['Float']['input'];
  south: Scalars['Float']['input'];
  west: Scalars['Float']['input'];
};

export enum BrandRegistrationType {
  LowVolumeStandard = 'LOW_VOLUME_STANDARD',
  SoleProprietor = 'SOLE_PROPRIETOR',
  Standard = 'STANDARD'
}

/**
 * What `createBulkTriggerAgentSessionTask` should do BEYOND putting the chosen AI
 * employees on every selected contact.
 *
 * The attachment itself is not optional and is not expressed here: adding the
 * employee as a contributor is what the action means, and everything below is
 * something stacked on top of it. Omit this input entirely and the action behaves
 * as it always has — attach and wake once.
 */
export type BulkAiEmployeePlanInput = {
  /**
   * Wake every (contact, employee) pairing once, as soon as the action reaches it.
   * Defaults to true — an omitted plan is the historical "run them now" behavior.
   * Set false to attach without spending a run.
   */
  runNow?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Put every attachment on this cadence as well. Rejected the same way the
   * contact's own AI-employee schedule is: no denser than once a day, a run budget
   * of at least one, and a budget that does not keep the schedule going past five
   * years. A one-off "run them on <date>" is simply an expression naming that date
   * with `maxRuns: 1`.
   */
  schedule?: InputMaybe<BulkAiEmployeeScheduleInput>;
};

export type BulkAiEmployeeScheduleInput = {
  /** Standard 5-field cron expression, interpreted in `timezone`. */
  cronExpression: Scalars['String']['input'];
  /** Fires allowed before the schedule retires itself. Required — a selection-wide open-ended cadence is not creatable here. */
  maxRuns: Scalars['Int']['input'];
  /** IANA zone the expression is read in, e.g. America/New_York. */
  timezone: Scalars['String']['input'];
};

export type BulkAssignUserGroupsOnContactsInput = {
  addUserGroupIds: Array<Scalars['ID']['input']>;
  contacts: BulkTaskInput;
  removeUserGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * When true, addUserGroupIds becomes the exact team membership for every
   * selected contact: any existing team not in the list is removed, missing
   * ones are added. removeUserGroupIds is ignored.
   */
  replaceExisting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BulkAssignUserInput = {
  role: ContactToUserMappingStatus;
  userId: Scalars['ID']['input'];
};

export type BulkAssignUsersOnContactsInput = {
  assignments: Array<BulkAssignUserInput>;
  contacts: BulkTaskInput;
};

export type BulkCreateDealsOnContactsInput = {
  /**
   * Derive each deal's title from its contact and attached properties
   * ("<contact> - <address line 1>", or "<contact> - portfolio" when 2+
   * properties attach). `deal.title` is used as the fallback.
   */
  autoNameDeals?: InputMaybe<Scalars['Boolean']['input']>;
  contacts: BulkTaskInput;
  deal: CreateDealInput;
  dontCreateIfDealAlreadyExists?: InputMaybe<Scalars['Boolean']['input']>;
  propertyAttachmentMode?: InputMaybe<BulkDealPropertyAttachmentMode>;
};

export type BulkCreateTasksOnContactsInput = {
  assignToCurrentAgent?: InputMaybe<Scalars['Boolean']['input']>;
  contacts: BulkTaskInput;
  task: CreateTaskInput;
};

export enum BulkDealPropertyAttachmentMode {
  All = 'ALL',
  AllVerified = 'ALL_VERIFIED',
  FirstVerified = 'FIRST_VERIFIED',
  None = 'NONE'
}

/**
 * Bulk-delete appointments. Items carry an optional `contactId` for
 * underlying timeline-activity scoping (when the appointment is anchored
 * to a contact); null or omitted for unanchored (deal-only or free) appointments.
 */
export type BulkDeleteAppointmentsInput = {
  items: Array<BulkDeleteAppointmentsItem>;
};

export type BulkDeleteAppointmentsItem = {
  /** The anchoring contact for timeline scoping, or null/omitted for an unanchored appointment. */
  contactId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};

export type BulkDeleteTaskOnContactInput = {
  items: Array<DeleteTaskInput>;
};

/** Which address a bulk skiptrace targets for every contact in the batch. */
export enum BulkEnrichSkiptraceAddress {
  /** No preference — we pick the best address (mailing, then property). */
  Either = 'EITHER',
  /** Mailing address only — never fall back to the property. */
  MailingOnly = 'MAILING_ONLY',
  /** Property address only — never fall back to the mailing address. */
  PropertyOnly = 'PROPERTY_ONLY'
}

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

export type BulkShareContactsInput = {
  assignments: Array<BulkShareContactUserAssignmentInput>;
  contacts: BulkTaskInput;
  excludeNoteIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeCalls?: InputMaybe<Scalars['Boolean']['input']>;
  includeContactCore?: InputMaybe<Scalars['Boolean']['input']>;
  includeNotes?: InputMaybe<Scalars['Boolean']['input']>;
  includeTasks?: InputMaybe<Scalars['Boolean']['input']>;
  includeTexts?: InputMaybe<Scalars['Boolean']['input']>;
  targetOrganizationId: Scalars['ID']['input'];
};

export type BulkTaskInput = {
  /**
   * Ids to exclude from a semantic selection (selectAll / selectCount+selectOffset).
   * Honored only on the filterSelection path; ignored when ids is used.
   */
  excludeIds?: InputMaybe<Array<Scalars['String']['input']>>;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  ids?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * PROPERTY selections only (ignored by other domains). When true, the property
   * index's completeness gate comes off for the selection's filter, so the bulk
   * action targets exactly the rows the un-gated view showed. OR'd with the saved
   * filter's queryOptions when the selection references a filterId — a request
   * can widen but never narrow.
   */
  includeIncompleteRecords?: InputMaybe<Scalars['Boolean']['input']>;
  selectAll: Scalars['Boolean']['input'];
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  selectOffset?: InputMaybe<Scalars['Int']['input']>;
  totalCount: Scalars['Int']['input'];
};

/** Lifecycle status of a bulk task. Mirrors the Prisma BulkTaskStatus enum. */
export enum BulkTaskStatus {
  /** The change has been fully applied. */
  Completed = 'COMPLETED',
  /** Queued — waiting for a worker slot (org-lane fairness can delay the start). */
  Created = 'CREATED',
  /** The change was NOT applied. Re-submit, or use a synchronous path where one exists. */
  Failed = 'FAILED',
  /** A background worker is applying the change. */
  Processing = 'PROCESSING'
}

export type BulkTriggerDealWorkflowInput = {
  deals: BulkTaskInput;
  pipelineId: Scalars['ID']['input'];
  stageId?: InputMaybe<Scalars['ID']['input']>;
};

export type BulkUnassignUsersFromContactsInput = {
  contacts: BulkTaskInput;
  userIds: Array<Scalars['ID']['input']>;
};

export type BulkUpdateFiltersInput = {
  /**
   * Move every listed filter to this folder, by `FilterFolder.id`. Null ungroups
   * them; omitted leaves them where they are.
   *
   * ONE folder for the whole call, so every filter must be on that folder's
   * surface — a selection spanning two surfaces is refused rather than half-moved.
   * Privacy follows the folder, as everywhere else.
   */
  folderId?: InputMaybe<Scalars['ID']['input']>;
  ids: Array<Scalars['ID']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Apply one throttle patch to every policy of a single scope linked to an organization
 * — e.g. set the same daily cap on all of an org's Twilio phone lines at once. Omitted
 * fields are left unchanged; an explicit null on dailyUnitCap / unitsPerWindow clears
 * that limit on every matched policy.
 */
export type BulkUpdateOrgThrottlePoliciesInput = {
  dailyUnitCap?: InputMaybe<Scalars['Int']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  isManaged?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  /** Scope to apply across: ORGANIZATION, TWILIO_SUBACCOUNT, TWILIO_PHONE, or OAUTH_REFRESH_TOKEN. */
  scope: Scalars['String']['input'];
  unitsPerWindow?: InputMaybe<Scalars['Int']['input']>;
};

export type BulkWorkflowRunControlByScopeInput = {
  /** Runs the user un-checked out of the semantic selection. */
  excludeRunIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * The WORKFLOW_RUN filter tree currently applied in the Involved tab, if any.
   * Combined (AND) with the version scope.
   */
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  operation: WorkflowRunBulkOperation;
  /** Select every run in scope. Mutually exclusive with selectCount. */
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  /** Select the first N runs (after selectOffset) under the list's sort. */
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  selectOffset?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Every WorkflowAutomation version id of the workflow group being viewed —
   * scopes the semantic selection to that group's runs.
   */
  workflowAutomationIds: Array<Scalars['ID']['input']>;
};

/**
 * Explicit run-id selection for the bulk pause/resume mutations. Capped at
 * 500 ids server-side; ids the caller cannot see (other org, hidden group
 * for non-admins, deleted workflow) are skipped, not errored.
 */
export type BulkWorkflowRunIdsInput = {
  workflowAutomationRunIds: Array<Scalars['ID']['input']>;
};

/**
 * Source of a BusySlot returned by availabilityForSlot. Mirrors
 * the BusySlotSource union in server/src/service/app/availability/types.ts.
 */
export enum BusySlotSource {
  Google = 'GOOGLE',
  Local = 'LOCAL',
  Microsoft = 'MICROSOFT'
}

/** How far a connection has got through importing and cutting over the account's numbers. */
export enum ByoTwilioConnectionProgress {
  /** Inbound proven on one number; the rest are still on the customer's own routing. */
  CanaryVerified = 'CANARY_VERIFIED',
  /** The connection was turned off; no further passes run. */
  Disabled = 'DISABLED',
  /** Reading the account and importing its numbers right now. */
  Discovering = 'DISCOVERING',
  /** Numbers imported; inbound has not been cut over to Goliath yet. */
  Imported = 'IMPORTED',
  /** The last pass hit something a person needs to look at — see `lastSyncError`. */
  NeedsAttention = 'NEEDS_ATTENTION',
  /** Every compatible number now routes inbound to Goliath. */
  Ready = 'READY',
  /** Cut over, with numbers Goliath could not fully configure. */
  ReadyWithWarnings = 'READY_WITH_WARNINGS'
}

/** Whether the org's connected Twilio account is usable at all. */
export enum ByoTwilioConnectionStatus {
  /** Connected and usable. */
  Active = 'ACTIVE',
  /** Turned off by Goliath support; re-enabling is not self-serve. */
  Disabled = 'DISABLED',
  /** Twilio is rejecting the stored credentials — the org must reconnect. */
  InvalidCredentials = 'INVALID_CREDENTIALS',
  /** Recorded but not yet usable for sending. */
  Pending = 'PENDING'
}

/**
 * What the automatic cutover is doing on an account right now.
 *
 * Deliberately not a boolean: "we do not know" is a real answer here, and the one
 * a boolean cannot carry without a client turning it into a confident claim in one
 * direction or the other.
 */
export enum ByoTwilioCutoverActivity {
  /** A cutover is running, or is between stages. */
  InProgress = 'IN_PROGRESS',
  /** No cutover is under way — either none has started, or one finished and the connection's own status says how it ended. */
  None = 'NONE',
  /**
   * Mid-cutover, with nothing running and no ending recorded, for longer than a
   * cutover should ever take. The outcome is UNKNOWN — not a failure, and
   * certainly not a success. Surfaces should say the wait is longer than expected
   * and offer Refresh, never report the numbers as switched over.
   */
  Stalled = 'STALLED'
}

/** Why a number in the customer's Twilio account could not be imported. */
export enum ByoTwilioNumberIssue {
  /** A different local phone line already owns this number. */
  LocalE164Conflict = 'LOCAL_E164_CONFLICT',
  /** A different local phone line already owns this Twilio number resource. */
  LocalProviderIdConflict = 'LOCAL_PROVIDER_ID_CONFLICT',
  /** Twilio reports the number cannot send MMS. */
  MmsNotSupported = 'MMS_NOT_SUPPORTED',
  /** Twilio reports the number cannot send SMS. */
  SmsNotSupported = 'SMS_NOT_SUPPORTED',
  /** Twilio reports the number cannot take calls. */
  VoiceNotSupported = 'VOICE_NOT_SUPPORTED'
}

/** What became of one number Goliath observed in the customer's Twilio account. */
export enum ByoTwilioNumberOutcome {
  /** Being cut over right now. */
  CanaryPending = 'CANARY_PENDING',
  /** Another local line already claims this number — see the issues. */
  Conflicted = 'CONFLICTED',
  /** Seen, not yet acted on. */
  Discovered = 'DISCOVERED',
  /** The last attempt on this number failed. */
  Failed = 'FAILED',
  /** Now a Goliath phone line. */
  Imported = 'IMPORTED',
  /**
   * The org's import selection leaves this number out. Alive in their Twilio,
   * observed by every pass, and deliberately not imported — reconnecting with a
   * wider selection is what brings it in.
   */
  NotSelected = 'NOT_SELECTED',
  /** Inbound has been cut over to Goliath and verified. */
  Ready = 'READY',
  /**
   * The org let this number go from Goliath. It is STILL in their Twilio account —
   * releasing a customer-owned number never takes it away — and it stays out until
   * they reconnect the account.
   */
  Released = 'RELEASED',
  /** Gone from the customer's Twilio account since the last pass. */
  Removed = 'REMOVED',
  /** Twilio reports capabilities Goliath cannot work with — see the issues. */
  Unsupported = 'UNSUPPORTED'
}

/** What happened to ONE resource when a disconnect tried to put it back as it was. */
export enum ByoTwilioRestoreOutcome {
  /** The restore was attempted and Twilio refused it. The org must fix it by hand. */
  Failed = 'FAILED',
  /**
   * Goliath never changed it, so there is nothing captured to put back — it still
   * holds whatever the customer set.
   */
  NothingCaptured = 'NOTHING_CAPTURED',
  /** Restored to the configuration captured before Goliath first changed it. */
  Restored = 'RESTORED',
  /** Already matched its captured configuration; nothing needed changing. */
  Unchanged = 'UNCHANGED'
}

/** What became of ONE request for a pass over the org's connected Twilio account. */
export enum ByoTwilioSyncRequestState {
  /** The pass ran. Its outcome is the rest of the connection, not this field. */
  Completed = 'COMPLETED',
  /** The pass could not be run at all. */
  Failed = 'FAILED',
  /** Recorded and published; no worker has claimed it yet, or one deferred it. */
  Queued = 'QUEUED',
  /** A worker holds the request and the pass is running. */
  Running = 'RUNNING'
}

/**
 * Whether outbound texting is live on the org's own Twilio account, and why not
 * when it isn't.
 *
 * Two independent things have to be true before a text sends, and these states
 * keep them apart rather than collapsing them: the CAMPAIGN must be approved by
 * the carriers, and the NUMBER must sit in that campaign's sender pool. An
 * approved campaign whose numbers have not been attached yet still sends nothing,
 * which is the ordinary state of a freshly connected account while its cutover is
 * still running — a clean connect drives that cutover itself, so this is a stage
 * to report on, not a wait for someone to come and act.
 */
export enum ByoTwilioTextingStatus {
  /** A campaign exists but the carriers have not approved it yet. */
  AwaitingCarrierApproval = 'AWAITING_CARRIER_APPROVAL',
  /**
   * Approved, but no number has been attached to the campaign yet, so nothing can
   * send. The registration is fine; the cutover has not happened.
   */
  AwaitingNumberCutover = 'AWAITING_NUMBER_CUTOVER',
  /**
   * The account has no A2P campaign at all; the org must register one with Twilio.
   * Distinct from `SEVERAL_CAMPAIGNS_UNRESOLVED` because the remedy is different —
   * telling an org with three campaigns to go register one is simply false.
   */
  NoCampaignRegistered = 'NO_CAMPAIGN_REGISTERED',
  /** Approved, and every usable number is a registered sender — texts send. */
  Ready = 'READY',
  /**
   * Approved, and SOME numbers are registered senders. The rest send nothing until
   * they are switched over.
   */
  ReadyForSomeNumbers = 'READY_FOR_SOME_NUMBERS',
  /**
   * The account has SEVERAL A2P campaigns and none is chosen, so we refuse to
   * guess which registration every number should send under. The org picks one.
   */
  SeveralCampaignsUnresolved = 'SEVERAL_CAMPAIGNS_UNRESOLVED'
}

export enum CalendarProvider {
  Goliath = 'GOLIATH',
  Google = 'GOOGLE',
  Microsoft = 'MICROSOFT'
}

export enum CallDisposition {
  BadNumber = 'BadNumber',
  Callback = 'Callback',
  Connected = 'Connected',
  NoAnswer = 'NoAnswer',
  NotInterested = 'NotInterested',
  Voicemail = 'Voicemail'
}

export type CallOutcomeActionInput = {
  kind: AfterCallActionKind;
  /** Only stored for CREATE_DEAL — the stage its deal opens in. Ignored on every other kind. */
  stageId?: InputMaybe<Scalars['ID']['input']>;
};

export enum CallOutcomeKind {
  BadNumber = 'BAD_NUMBER',
  Callback = 'CALLBACK',
  Connected = 'CONNECTED',
  NotInterested = 'NOT_INTERESTED',
  NoAnswer = 'NO_ANSWER',
  Voicemail = 'VOICEMAIL'
}

export enum CallRoundRobinTargetKind {
  AreaCodeMap = 'AREA_CODE_MAP',
  External = 'EXTERNAL',
  LineOwner = 'LINE_OWNER',
  None = 'NONE',
  OrgUserRotation = 'ORG_USER_ROTATION',
  Team = 'TEAM'
}

export enum CallStatus {
  Completed = 'COMPLETED',
  NoAnswer = 'NO_ANSWER',
  Ringing = 'RINGING'
}

/** Analytics rollup window. */
export enum CampaignAnalyticsPeriod {
  Days_7 = 'DAYS_7',
  Days_30 = 'DAYS_30',
  Days_90 = 'DAYS_90'
}

/**
 * Legal entity type collected on brand registration. Bridged to the registrar's
 * `entityType` vocabulary (and to `brandType`) in the resolver's enum layer;
 * SOLE_PROPRIETOR additionally exempts the brand from the EIN/taxId requirement.
 */
export enum CampaignBusinessType {
  Corporation = 'CORPORATION',
  Llc = 'LLC',
  Partnership = 'PARTNERSHIP',
  SoleProprietor = 'SOLE_PROPRIETOR'
}

export enum CampaignChannel {
  Email = 'EMAIL',
  Mail = 'MAIL',
  Phone = 'PHONE',
  Text = 'TEXT'
}

/** Sortable columns of a campaign's recipients table. */
export enum CampaignContactSortField {
  EnrolledAt = 'ENROLLED_AT',
  Name = 'NAME'
}

export type CampaignInboxFilterInput = {
  channel?: InputMaybe<CampaignChannel>;
  sentiment?: InputMaybe<CampaignSentiment>;
  statuses?: InputMaybe<Array<CampaignInboxStatus>>;
};

/**
 * Which slice of the campaigns inbox to read. The two are DISJOINT, so a rail can
 * show them as separate buckets whose counts sum to the total.
 *
 * CAMPAIGNS (default) is strictly bulk-marketing traffic: threads carrying a
 * message from one of `input.workflowGroupIds`. UNATTRIBUTED is the cold-inbound
 * remainder — no campaign stamp at all, but sitting on a line proven to be a
 * marketing sending lane (BULK purpose, bound to no AI employee or user, on a
 * provisioned campaign that actually backs a live marketing campaign).
 */
export enum CampaignInboxScope {
  Campaigns = 'CAMPAIGNS',
  Unattributed = 'UNATTRIBUTED'
}

/** Status pills on the campaigns inbox filter row. */
export enum CampaignInboxStatus {
  HideAutoSends = 'HIDE_AUTO_SENDS',
  Interested = 'INTERESTED',
  NeedsReply = 'NEEDS_REPLY',
  OptOuts = 'OPT_OUTS',
  Unread = 'UNREAD'
}

/** Industry collected on brand registration. Bridged to the registrar's `vertical` vocabulary. */
export enum CampaignIndustry {
  Construction = 'CONSTRUCTION',
  Other = 'OTHER',
  PropertyManagement = 'PROPERTY_MANAGEMENT',
  RealEstate = 'REAL_ESTATE'
}

/** Humanized send-timing jitter width. */
export enum CampaignJitter {
  Natural = 'NATURAL',
  Subtle = 'SUBTLE',
  Wide = 'WIDE'
}

/** The four editor sections of a mail campaign. */
export enum CampaignMailEditorSection {
  Audience = 'AUDIENCE',
  Delivery = 'DELIVERY',
  MailPiece = 'MAIL_PIECE',
  Proof = 'PROOF'
}

/** Semantic tone for a response-intent bar. */
export enum CampaignMailIntentTone {
  Danger = 'DANGER',
  Neutral = 'NEUTRAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

/** Emphasis tone for a KPI number (green for good, amber for opt-outs, else default). */
export enum CampaignMailKpiTone {
  Default = 'DEFAULT',
  Good = 'GOOD',
  Warn = 'WARN'
}

/** Pause vs Resume header action, or neither. */
export enum CampaignMailPauseAction {
  Pause = 'PAUSE',
  Resume = 'RESUME'
}

/**
 * The data phase a mail state maps to — collapses the eight states down to the set
 * that actually drives Analytics/Console content. Several states share a phase
 * (EMPTY→EMPTY, DRAFT/ADDRESS→PENDING, PRODUCTION→PRODUCING, IN_MAIL→MAILING, …).
 */
export enum CampaignMailPhase {
  Done = 'DONE',
  Empty = 'EMPTY',
  Error = 'ERROR',
  Mailing = 'MAILING',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Producing = 'PRODUCING'
}

/** Whether a format is a folded letter (letter + envelope) or a postcard (front + back). */
export enum CampaignMailPieceKind {
  Letter = 'LETTER',
  Postcard = 'POSTCARD'
}

/** Which side of the proof preview is showing. */
export enum CampaignMailProofSide {
  Envelope = 'ENVELOPE',
  Letter = 'LETTER'
}

/** How a tracked response came in — a call to the tracking number, or a QR scan. */
export enum CampaignMailResponseKind {
  Call = 'CALL',
  Qr = 'QR'
}

/** Sentiment badge on a tracked response / recent response row. */
export enum CampaignMailResponseSentiment {
  Neutral = 'NEUTRAL',
  OptOut = 'OPT_OUT',
  Positive = 'POSITIVE'
}

/** Rendering state of one marker on the production/delivery stage timeline. */
export enum CampaignMailStageStatus {
  Current = 'CURRENT',
  Done = 'DONE',
  Error = 'ERROR',
  Paused = 'PAUSED',
  Upcoming = 'UPCOMING'
}

/**
 * The lifecycle state of a physical-mail campaign. Drives the focus view's badge,
 * default tab, header CTA, and banner. In the shipped product this is DERIVED from
 * the campaign's real status + print-partner events; the mock resolver takes it as
 * an explicit `previewState` arg so the prototype's eight states can be inspected.
 * Backend: replace the mock with a real derivation and drop the preview arg.
 */
export enum CampaignMailState {
  /** Audience has flagged addresses needing review before the drop. */
  Address = 'ADDRESS',
  /** Complete. */
  Delivered = 'DELIVERED',
  /** Piece being built, proof not yet submitted. */
  Draft = 'DRAFT',
  /** Just created, nothing configured yet. */
  Empty = 'EMPTY',
  /** Proof rejected by the print partner — action needed. */
  Error = 'ERROR',
  /** Dropped, in transit / in-home — the primary live state. */
  InMail = 'IN_MAIL',
  /** Mid-delivery, further drops held. */
  Paused = 'PAUSED',
  /** Proof approved, printing at the partner. */
  Production = 'PRODUCTION'
}

/** Status-badge / banner tone for a mail lifecycle state. */
export enum CampaignMailStatusTone {
  Destructive = 'DESTRUCTIVE',
  Info = 'INFO',
  Neutral = 'NEUTRAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

/** The three tabs of the mail campaign focus view. */
export enum CampaignMailTab {
  Analytics = 'ANALYTICS',
  Console = 'CONSOLE',
  Editor = 'EDITOR'
}

export enum CampaignMessageDirection {
  Inbound = 'INBOUND',
  Outbound = 'OUTBOUND'
}

export enum CampaignScheduleMode {
  Later = 'LATER',
  Now = 'NOW'
}

/**
 * Quiet-hours window for a campaign's drip. Times are in the campaign's fixed
 * sending timezone (recipient-local windows are a follow-up); the editor lets the
 * user widen/narrow the window, not change the timezone.
 */
export type CampaignSendWindowInput = {
  endHour: Scalars['Int']['input'];
  endMinute: Scalars['Int']['input'];
  startHour: Scalars['Int']['input'];
  startMinute: Scalars['Int']['input'];
};

/** Intent/sentiment scoring applied to a reply or disposition. */
export enum CampaignSentiment {
  Negative = 'NEGATIVE',
  Neutral = 'NEUTRAL',
  OptOut = 'OPT_OUT',
  Positive = 'POSITIVE',
  /** Wrong number / auto-reply / out-of-office — a reply that isn't a person declining or engaging. */
  Unreachable = 'UNREACHABLE',
  Unscored = 'UNSCORED'
}

export type CampaignSequenceStepInput = {
  /** Raw spintax source for TEXT steps; the voicemail script for RVM steps. */
  body: Scalars['String']['input'];
  /** Wait delay before this step, in days. 0 = send immediately. */
  delayDays: Scalars['Int']['input'];
  kind: CampaignSequenceStepKind;
  /** RVM only: selected voice. */
  voiceId?: InputMaybe<Scalars['ID']['input']>;
};

/** A drip step is either a text touch or a ringless-voicemail drop. */
export enum CampaignSequenceStepKind {
  Rvm = 'RVM',
  Text = 'TEXT'
}

export enum CampaignStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Paused = 'PAUSED'
}

/** Generic strength tone for meters/bars (coverage, confidence, number health). */
export enum CampaignTone {
  Neutral = 'NEUTRAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

/**
 * Messaging use case collected on sending campaign registration. Bridged to
 * the registrar's `useCase` vocabulary. MIXED_MARKETING additionally requires
 * sub-use-cases on the wire.
 */
export enum CampaignUseCase {
  AccountNotifications = 'ACCOUNT_NOTIFICATIONS',
  AppointmentReminders = 'APPOINTMENT_REMINDERS',
  LeadFollowUp = 'LEAD_FOLLOW_UP',
  MixedMarketing = 'MIXED_MARKETING'
}

export type CancelAiEmployeeFollowUpInput = {
  /** The contact the follow-up is booked against — the Upcoming band's own scope. */
  contactId: Scalars['ID']['input'];
  /** `ContactUpcomingAgentRun.id` of a FOLLOW_UP row (the pending work item). */
  workItemId: Scalars['ID']['input'];
};

export enum CancelAiEmployeeFollowUpOutcome {
  Cancelled = 'CANCELLED',
  NotFound = 'NOT_FOUND'
}

export type CancelPartnershipInvitationInput = {
  partnerOrgId: Scalars['ID']['input'];
};

export enum CancelScheduledRunOutcome {
  AlreadyTerminal = 'ALREADY_TERMINAL',
  Cancelled = 'CANCELLED',
  Claimed = 'CLAIMED'
}

/** What fires a notification alert. */
export enum CaseAlertTrigger {
  /** A specific document type arrives on a case. */
  DocType = 'DOC_TYPE',
  /** A brand-new case appears. */
  NewCase = 'NEW_CASE'
}

export type CaseFilterInput = {
  countyFips?: InputMaybe<Scalars['String']['input']>;
  lifecycle?: InputMaybe<CaseLifecycle>;
  /** Only cases with a notice/recording date on or after this instant. */
  noticeDateAfter?: InputMaybe<Scalars['DateTime']['input']>;
  /** Only cases with a notice/recording date on or before this instant. */
  noticeDateBefore?: InputMaybe<Scalars['DateTime']['input']>;
  scraperId?: InputMaybe<Scalars['ID']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  /** Match cases carrying ALL of these tags (e.g. SERVICE_DELIVERED). */
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Whether a case is still open or has reached a terminal (closed) state. */
export enum CaseLifecycle {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

/** Bucket granularity for the new-cases-over-time trend. */
export enum CaseTrendBucket {
  Day = 'DAY',
  Week = 'WEEK'
}

export type ChangeUserRoleInput = {
  organizationId: Scalars['ID']['input'];
  role: OrganizationToUserMappingType;
  userId: Scalars['ID']['input'];
};

export enum ChatAttachmentEncoding {
  Base64 = 'BASE64',
  Utf8 = 'UTF8'
}

export type ChatAttachmentInput = {
  name: Scalars['String']['input'];
  path: Scalars['String']['input'];
  sizeBytes: Scalars['Int']['input'];
  uploadedFileId: Scalars['ID']['input'];
};

export type ChatContextInput = {
  filterId?: InputMaybe<Scalars['ID']['input']>;
  selectionIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  subjectId: Scalars['ID']['input'];
  subjectKind: ChatSubjectKind;
  view?: InputMaybe<Scalars['String']['input']>;
};

export enum ChatStatus {
  Error = 'ERROR',
  Idle = 'IDLE',
  Working = 'WORKING'
}

export enum ChatSubjectKind {
  Agent = 'AGENT',
  Campaign = 'CAMPAIGN',
  Contact = 'CONTACT',
  Deal = 'DEAL',
  DealPipeline = 'DEAL_PIPELINE',
  DealStage = 'DEAL_STAGE',
  File = 'FILE',
  Form = 'FORM',
  Organization = 'ORGANIZATION',
  Property = 'PROPERTY',
  User = 'USER'
}

export type CityNameStateInput = {
  name: Scalars['String']['input'];
  state?: InputMaybe<StateEnum>;
};

export type ClearContactDoNotContactInput = {
  contactId: Scalars['ID']['input'];
};

export type CommunicationAgentStatsInput = {
  /**
   * Rolling window in days ending at 'now'. Valid: 1..90. The resolver
   * bounds this server-side; oversized windows are clamped to 90.
   */
  days: Scalars['Int']['input'];
};

export enum CommunicationAgentStatsWindow {
  FourteenDays = 'FOURTEEN_DAYS',
  NinetyDays = 'NINETY_DAYS',
  SevenDays = 'SEVEN_DAYS',
  ThirtyDays = 'THIRTY_DAYS'
}

export enum CommunicationAgentType {
  Sms = 'SMS',
  Voice = 'VOICE'
}

export enum CommunicationDirection {
  Inbound = 'INBOUND',
  Outbound = 'OUTBOUND'
}

export type CompleteOnboardingInput = {
  flowType: OnboardingFlowType;
};

export type ConfigureMetaLeadFormInput = {
  /** Omit to leave unchanged. NEW_ONLY or LAST_90_DAYS. */
  historicalSyncMode?: InputMaybe<Scalars['String']['input']>;
  metaFormId: Scalars['String']['input'];
  metaPageId: Scalars['String']['input'];
  /** Omit to leave unchanged. */
  syncEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConnectDialerIntegrationInput = {
  campaignId?: InputMaybe<Scalars['String']['input']>;
  campaignName?: InputMaybe<Scalars['String']['input']>;
  connectionType: DialerConnectionType;
};

/** Connects and verifies a phone-enrichment provider before saving its key. */
export type ConnectPhoneEnrichmentProviderInput = {
  apiKey: Scalars['String']['input'];
  config: PhoneEnrichmentProviderConfigInput;
  providerKey: Scalars['String']['input'];
  testPhone: Scalars['String']['input'];
};

/**
 * Connect the org's own Twilio account (BYO): Account SID + the account AUTH
 * TOKEN from the customer's Twilio console (Account → Keys & credentials), which
 * of their A2P campaigns to send through, and what the account is for.
 *
 * The auth token rather than a customer-pasted API key: Twilio signs inbound
 * webhooks with it, and Goliath mints the API key browser voice needs inside
 * their account instead of asking for a second secret.
 */
export type ConnectTwilioAccountInput = {
  /**
   * Which of the customer's own US A2P campaigns (`QE…`) their numbers send
   * through — never a Messaging Service, which is a Twilio implementation detail
   * the server derives from the campaign and pins internally.
   *
   * Omit it when `previewTwilioAccountCampaigns` found none (connect succeeds with
   * texting gated until their registration is approved) or exactly one (the server
   * selects it). Required when it found several: choosing for the customer would
   * bind every number on the account to the wrong carrier registration.
   */
  a2pCampaignSid?: InputMaybe<Scalars['String']['input']>;
  accountSid: Scalars['String']['input'];
  authToken: Scalars['String']['input'];
  designation: TwilioAccountDesignation;
  /**
   * Which of the account's numbers to import, as E.164 strings from
   * `previewTwilioAccount`. Three distinct answers: an explicit NULL imports every
   * number the account has now and gains later; an explicit list imports exactly
   * those — the rest are observed and recorded as NOT_SELECTED, and every later
   * pass honors the same list; OMITTING the field entirely makes no statement, so
   * a reconnect leaves any stored selection unchanged (this is what a client
   * bundled before the field existed sends, and it must not widen an explicit
   * selection to the whole account). A number the org already carries in Goliath
   * stays carried whatever this says — narrowing a selection never detaches a
   * line.
   */
  selectedE164Numbers?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Where a user swore a consent attestation. Mirrors the server's
 * `UserAttestationSurface` name-for-name so a would-block log line and the
 * evidence row it produced describe the same place.
 */
export enum ConsentAttestationSurface {
  BulkWorkflowTrigger = 'BULK_WORKFLOW_TRIGGER',
  CallListBuilder = 'CALL_LIST_BUILDER',
  CampaignPreviousUploads = 'CAMPAIGN_PREVIOUS_UPLOADS',
  CampaignRefusalAffordance = 'CAMPAIGN_REFUSAL_AFFORDANCE',
  ComposerEmail = 'COMPOSER_EMAIL',
  ComposerText = 'COMPOSER_TEXT',
  ContactsTableBulkAction = 'CONTACTS_TABLE_BULK_ACTION',
  ContactPage = 'CONTACT_PAGE',
  PreCall = 'PRE_CALL'
}

/** The outreach channel a consent decision is about. */
export enum ConsentChannel {
  Email = 'EMAIL',
  Sms = 'SMS',
  Voice = 'VOICE'
}

export enum ContactAccessDecisionReason {
  ContactNotFound = 'CONTACT_NOT_FOUND',
  LineageAccessRevoked = 'LINEAGE_ACCESS_REVOKED',
  NoContactAccess = 'NO_CONTACT_ACCESS',
  OrganizationAccessRevoked = 'ORGANIZATION_ACCESS_REVOKED'
}

export type ContactAgentAllowedWorkflowInput = {
  whenToRun?: InputMaybe<Scalars['String']['input']>;
  workflowGroupId: Scalars['ID']['input'];
};

export type ContactAgentAppointmentTypeInput = {
  durationMinutes: Scalars['Int']['input'];
  label: Scalars['String']['input'];
};

export type ContactAgentCallBehaviorInput = {
  firstMessage: Scalars['String']['input'];
  prompt: Scalars['String']['input'];
};

export type ContactAgentCallBehaviorsInput = {
  conversationPrompt: Scalars['String']['input'];
  firstMessages: ContactAgentCallFirstMessagesInput;
  missedCall: ContactAgentCallBehaviorInput;
};

export type ContactAgentCallConfigInput = {
  behaviors: ContactAgentCallBehaviorsInput;
  callWindow?: InputMaybe<ContactAgentSendWindowInput>;
  handleInboundCalls?: InputMaybe<Scalars['Boolean']['input']>;
  intakeDefaults?: InputMaybe<ContactAgentCallIntakeDefaultsInput>;
  maxDeferralMs?: InputMaybe<Scalars['Int']['input']>;
  onUnknownCaller?: InputMaybe<ContactAgentUnknownPartyAction>;
  ringTimeoutSeconds?: InputMaybe<Scalars['Int']['input']>;
  voice: ContactAgentCallVoiceInput;
};

export type ContactAgentCallFirstMessagesInput = {
  directInbound: Scalars['String']['input'];
  outbound: Scalars['String']['input'];
};

export type ContactAgentCallIntakeDefaultsInput = {
  assigneeUserId?: InputMaybe<Scalars['ID']['input']>;
  contributorUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

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

export type ContactAgentCallVoiceInput = {
  accent?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  voiceId: Scalars['String']['input'];
};

export type ContactAgentCallsInput = {
  agentId: Scalars['ID']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type ContactAgentCaseloadInput = {
  agentId: Scalars['ID']['input'];
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  includeRemoved?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export type ContactAgentChannelsInput = {
  callConfig?: InputMaybe<ContactAgentCallConfigInput>;
  emailConfig?: InputMaybe<ContactAgentEmailConfigInput>;
  textConfig?: InputMaybe<ContactAgentTextConfigInput>;
};

export type ContactAgentConfigInput = {
  channels?: InputMaybe<ContactAgentChannelsInput>;
  prompt: Scalars['String']['input'];
  toolOverrides?: InputMaybe<Array<ContactAgentToolOverrideInput>>;
  triggerOverrides?: InputMaybe<ContactAgentTriggerOverridesInput>;
  triggerScope?: InputMaybe<ContactAgentTriggerScopeInput>;
};

export type ContactAgentConfigRevisionsInput = {
  agentId: Scalars['ID']['input'];
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
};

export enum ContactAgentConfigurableTool {
  AddEmail = 'ADD_EMAIL',
  AddNote = 'ADD_NOTE',
  AddPhone = 'ADD_PHONE',
  AddPropertyAddress = 'ADD_PROPERTY_ADDRESS',
  AddTask = 'ADD_TASK',
  Disengage = 'DISENGAGE',
  MakeCall = 'MAKE_CALL',
  NotifyUser = 'NOTIFY_USER',
  RunWorkflow = 'RUN_WORKFLOW',
  ScheduleRun = 'SCHEDULE_RUN',
  SendEmail = 'SEND_EMAIL',
  SendText = 'SEND_TEXT',
  SetAppointment = 'SET_APPOINTMENT',
  SetCustomField = 'SET_CUSTOM_FIELD',
  SetName = 'SET_NAME'
}

export type ContactAgentDayFeedInput = {
  agentId: Scalars['ID']['input'];
  limit: Scalars['Int']['input'];
  since: Scalars['DateTime']['input'];
};

export enum ContactAgentDayOfWeek {
  Fri = 'FRI',
  Mon = 'MON',
  Sat = 'SAT',
  Sun = 'SUN',
  Thu = 'THU',
  Tue = 'TUE',
  Wed = 'WED'
}

export type ContactAgentEmailConfigInput = {
  allowedMailboxIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  defaultMailboxId?: InputMaybe<Scalars['ID']['input']>;
  responseDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
  sendWindow?: InputMaybe<ContactAgentSendWindowInput>;
};

export type ContactAgentLocalTimeInput = {
  hour: Scalars['Int']['input'];
  minute: Scalars['Int']['input'];
};

export type ContactAgentSendWindowInput = {
  daysOfWeek?: InputMaybe<Array<ContactAgentDayOfWeek>>;
  endTime?: InputMaybe<ContactAgentLocalTimeInput>;
  startTime?: InputMaybe<ContactAgentLocalTimeInput>;
  timezone: Scalars['String']['input'];
};

export type ContactAgentSessionsInput = {
  agentId: Scalars['ID']['input'];
  from?: InputMaybe<Scalars['DateTime']['input']>;
  includeTest?: InputMaybe<Scalars['Boolean']['input']>;
  limit: Scalars['Int']['input'];
  offset: Scalars['Int']['input'];
  onlyFailed?: InputMaybe<Scalars['Boolean']['input']>;
  to?: InputMaybe<Scalars['DateTime']['input']>;
  triggerKinds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum ContactAgentSimChannel {
  Email = 'EMAIL',
  Form = 'FORM',
  Text = 'TEXT'
}

export enum ContactAgentStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export type ContactAgentTeamFeedInput = {
  limit: Scalars['Int']['input'];
  since: Scalars['DateTime']['input'];
};

export type ContactAgentTeamRollupInput = {
  since: Scalars['DateTime']['input'];
};

export type ContactAgentTextConfigInput = {
  onUnknownSender?: InputMaybe<ContactAgentUnknownPartyAction>;
  ownerUserId?: InputMaybe<Scalars['ID']['input']>;
  responseDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
  sendWindow?: InputMaybe<ContactAgentSendWindowInput>;
};

export type ContactAgentToolOverrideInput = {
  allowedCustomFieldIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  allowedUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  allowedWorkflows?: InputMaybe<Array<ContactAgentAllowedWorkflowInput>>;
  appointmentTypes?: InputMaybe<Array<ContactAgentAppointmentTypeInput>>;
  enabled: Scalars['Boolean']['input'];
  tool: ContactAgentConfigurableTool;
};

export type ContactAgentTriggerOverridesInput = {
  triggerOnFormSubmission?: InputMaybe<Scalars['Boolean']['input']>;
  triggerOnHumanCallEnded?: InputMaybe<Scalars['Boolean']['input']>;
  triggerOnInboundEmail?: InputMaybe<Scalars['Boolean']['input']>;
  triggerOnInboundSMS?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactAgentTriggerScopeInput = {
  allInbound?: InputMaybe<Scalars['Boolean']['input']>;
  assignedContacts?: InputMaybe<Scalars['Boolean']['input']>;
  newContacts?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ContactAgentUnknownPartyAction {
  CreateContact = 'CREATE_CONTACT',
  Ignore = 'IGNORE'
}

export enum ContactAiEmployeeScheduleStatus {
  Active = 'ACTIVE',
  Exhausted = 'EXHAUSTED',
  Paused = 'PAUSED',
  PausedErrors = 'PAUSED_ERRORS'
}

export enum ContactAiEmployeeSource {
  AutoNewContact = 'AUTO_NEW_CONTACT',
  Bulk = 'BULK',
  Campaign = 'CAMPAIGN',
  Engaged = 'ENGAGED',
  Form = 'FORM',
  Import = 'IMPORT',
  LegacyFirehose = 'LEGACY_FIREHOSE',
  Manual = 'MANUAL',
  Mention = 'MENTION',
  RingAnswer = 'RING_ANSWER',
  Workflow = 'WORKFLOW'
}

export enum ContactAiEmployeeStatus {
  Active = 'ACTIVE',
  Paused = 'PAUSED',
  Removed = 'REMOVED'
}

export type ContactCollaboratorInput = {
  createTask?: InputMaybe<CreateTaskInput>;
  role: ContactToUserMappingStatus;
  userId: Scalars['String']['input'];
};

export enum ContactCustomFieldType {
  Date = 'DATE',
  Dollar = 'DOLLAR',
  Dropdown = 'DROPDOWN',
  Link = 'LINK',
  Number = 'NUMBER',
  Text = 'TEXT'
}

export type ContactDailyVolumeInput = {
  endDate: Scalars['DateTime']['input'];
  filterTree: Scalars['JSON']['input'];
  startDate: Scalars['DateTime']['input'];
};

export enum ContactExportContentEnum {
  Emails = 'EMAILS',
  PhoneNumbers = 'PHONE_NUMBERS',
  Properties = 'PROPERTIES',
  Relatives = 'RELATIVES'
}

export type ContactFileContext = {
  contactId: Scalars['String']['input'];
};

export enum ContactLineageKind {
  CopySharedToOrg = 'COPY_SHARED_TO_ORG',
  Original = 'ORIGINAL'
}

export enum ContactMatchField {
  Address = 'ADDRESS',
  Email = 'EMAIL',
  Name = 'NAME',
  Note = 'NOTE',
  Phone = 'PHONE'
}

export enum ContactMatchKind {
  Context = 'CONTEXT',
  Exact = 'EXACT',
  Fuzzy = 'FUZZY',
  Prefix = 'PREFIX',
  Substring = 'SUBSTRING'
}

export type ContactOptionInput = {
  contactId: Scalars['String']['input'];
  userContactStatuses?: InputMaybe<Array<ContactToUserMappingStatus>>;
};

export type ContactSort = {
  /** Required only when field is CUSTOM_FIELD; forbidden for native fields. */
  customFieldId?: InputMaybe<Scalars['ID']['input']>;
  direction: SortDirection;
  field: ContactSortableField;
};

export enum ContactSortableField {
  CreatedAt = 'CREATED_AT',
  CustomField = 'CUSTOM_FIELD',
  LastActivity = 'LAST_ACTIVITY',
  LastCommunication = 'LAST_COMMUNICATION',
  LastUpdated = 'LAST_UPDATED',
  MyLastCall = 'MY_LAST_CALL',
  MyLastText = 'MY_LAST_TEXT',
  SellerIntentScore = 'SELLER_INTENT_SCORE',
  TaskHighlight = 'TASK_HIGHLIGHT'
}

export enum ContactSuggestionStatus {
  Accepted = 'ACCEPTED',
  Dismissed = 'DISMISSED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Superseded = 'SUPERSEDED'
}

export enum ContactToUserMappingStatus {
  Participant = 'PARTICIPANT',
  PointPerson = 'POINT_PERSON',
  Revoked = 'REVOKED'
}

export enum ContactToUserRevokeReason {
  OneDayClawback = 'ONE_DAY_CLAWBACK'
}

export type ContactUploadContext = {
  adaptiveConfig?: InputMaybe<AdaptiveUploadConfigInput>;
  isAdvanced?: InputMaybe<Scalars['Boolean']['input']>;
  /** "Add to Campaigns" upload: mints the contacts CRM-invisible and enrolls them into the selected campaign at confirm; persisted so a resumed review re-prompts for a campaign. */
  isCampaignUpload?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional post-import skip trace strategy, persisted so transformer review can be resumed without losing the choice. */
  skiptraceAddress?: InputMaybe<BulkEnrichSkiptraceAddress>;
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export enum ContactsBulkActionMode {
  Async = 'ASYNC',
  Sync = 'SYNC'
}

export type ContentTemplateAttachmentInput = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  fileSize: Scalars['Int']['input'];
  uploadedFileId: Scalars['ID']['input'];
};

export type ContentTemplateContextEntryInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ContentTemplateMutationInput = {
  attachments?: InputMaybe<Array<ContentTemplateAttachmentInput>>;
  bodyContent: Scalars['String']['input'];
  bodyFormat?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subjectContent?: InputMaybe<Scalars['String']['input']>;
  taskConfig?: InputMaybe<TaskTemplateConfigInput>;
};

export enum ContentTemplateType {
  Email = 'EMAIL',
  Note = 'NOTE',
  Sms = 'SMS',
  Task = 'TASK'
}

export enum ContractSignatureStatus {
  NewContract = 'NEW_CONTRACT',
  Pending = 'PENDING',
  Signed = 'SIGNED'
}

/**
 * Count request for batched sidebar-count queries.
 *
 * - id: stable identifier for the client (e.g. filterId, list-${id})
 * - input: filter criteria to count over (pagination is ignored server-side)
 */
export type CountRequest = {
  id: Scalars['ID']['input'];
  input: FilterInput;
};

/**
 * Signal family a County Status verdict is scoped to. v1 covers the three
 * families sales sells on; foreclosure spans the sale-bearing signal types so
 * trustee-sale and sheriff-sale states are not reported as empty.
 */
export enum CountyStatusFamily {
  CodeViolation = 'CODE_VIOLATION',
  Foreclosure = 'FORECLOSURE',
  Probate = 'PROBATE'
}

/**
 * County-level one-word answer, derived from the family verdicts. Null when no
 * family carries a judgeable verdict.
 */
export enum CountyStatusHeadline {
  Dark = 'DARK',
  Live = 'LIVE',
  Partial = 'PARTIAL'
}

/**
 * Per-family coverage verdict.
 *
 * LIVE / THIN / DARK are health verdicts. LOW_VOLUME and UNKNOWN are
 * data-availability states — the county is too small for a monthly comparison to
 * carry information, or no target could be formed at all. Neither means broken.
 */
export enum CountyStatusLevel {
  Dark = 'DARK',
  Live = 'LIVE',
  LowVolume = 'LOW_VOLUME',
  Thin = 'THIN',
  Unknown = 'UNKNOWN'
}

/**
 * Where a county-family's expected volume came from. Drives the confidence
 * shown next to a verdict — an OVERRIDE is a decision someone made, a
 * NATIONAL_FRONTIER is an estimate of last resort.
 */
export enum CountyStatusTargetSource {
  NationalFrontier = 'NATIONAL_FRONTIER',
  None = 'NONE',
  Override = 'OVERRIDE',
  StateFrontier = 'STATE_FRONTIER'
}

export type CreateAdminAgentRunInput = {
  agentId?: InputMaybe<Scalars['ID']['input']>;
  agentKind: Scalars['String']['input'];
  contactId?: InputMaybe<Scalars['ID']['input']>;
  generateSimulatedContact?: InputMaybe<Scalars['Boolean']['input']>;
  mode: Scalars['String']['input'];
  modelEnum: Scalars['String']['input'];
  userPrompt: Scalars['String']['input'];
};

export type CreateAgentGoalPlanInput = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  periodStartDate: Scalars['Date']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateAppointmentInput = {
  /**
   * Optional reminder to attach to the newly created appointment. When
   * omitted, the organization's global reminder (if any) is attached
   * automatically. Pass `null` to opt out of the global default for this
   * appointment specifically.
   *
   * Value is the reminder's WorkflowGroup id (an appointment reminder is a
   * hidden system-category WorkflowGroup), persisted to `Task.workflowGroupId`.
   */
  appointmentReminderWorkflowGroupId?: InputMaybe<Scalars['ID']['input']>;
  calendarProvider?: InputMaybe<Scalars['String']['input']>;
  /**
   * Contacts to attach to the appointment. May be empty or omitted — an
   * appointment doesn't require a contact (e.g. internal meetings, blockers).
   */
  contactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  createGoogleMeetLink?: InputMaybe<Scalars['Boolean']['input']>;
  createMicrosoftTeamsLink?: InputMaybe<Scalars['Boolean']['input']>;
  /** Deals to explicitly attach to the appointment. May be empty or omitted. */
  dealIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  /** Raw external email guests, persisted and synced to the calendar event as attendees. Full-list replacement. */
  externalAttendees?: InputMaybe<Array<Scalars['String']['input']>>;
  inviteContactEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  inviteUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  location?: InputMaybe<Scalars['String']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['DateTime']['input'];
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone: Timezone;
  title: Scalars['String']['input'];
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreateAppointmentReminderInput = {
  /** Single-step shorthand. Deprecated in favour of `steps`. */
  amountBefore?: InputMaybe<Scalars['Int']['input']>;
  /**
   * Mark this reminder as the organization's default — auto-attached to
   * appointments created outside the in-app form (e.g. public booking-page
   * bookings, which have no UI to pick a reminder). Setting it clears any prior
   * default, so at most one default exists per org. Persisted server-side.
   */
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  /** Single-step shorthand. Deprecated in favour of `steps`. */
  message?: InputMaybe<Scalars['String']['input']>;
  /**
   * Every SMS this reminder should send. Supply at least one; order does not
   * matter, the server sorts by lead time (longest first). Each step becomes an
   * independently scheduled send, so a step's timing can be rescheduled when the
   * appointment moves without disturbing the others.
   *
   * Mutually exclusive with the single-step `message`/`amountBefore`/`unitBefore`
   * fields below — supply one form or the other, not both.
   */
  steps?: InputMaybe<Array<AppointmentReminderStepInput>>;
  /** Single-step shorthand. Deprecated in favour of `steps`. */
  unitBefore?: InputMaybe<AppointmentReminderTimeUnit>;
};

export type CreateBusinessSubAccountInput = {
  /**
   * Outbound calls the business places on a typical business day. Stored as
   * `declaredDailyCallVolume` — the column keeps the `declared` prefix to
   * separate what the org told us from the volume we measure ourselves.
   */
  averageDailyCallVolume?: InputMaybe<Scalars['Int']['input']>;
  base: BaseSubAccountInput;
  businessEmail: Scalars['String']['input'];
  /** How many people the business employs. Stored as `businessEmployeeCount`. */
  businessEmployeeCount?: InputMaybe<Scalars['Int']['input']>;
  businessName: Scalars['String']['input'];
  businessType: Scalars['String']['input'];
  privacyPolicyUrl: Scalars['String']['input'];
  registrationNumber: Scalars['String']['input'];
  rep1Email: Scalars['String']['input'];
  rep1FirstName: Scalars['String']['input'];
  rep1JobPos?: InputMaybe<Scalars['String']['input']>;
  rep1LastName: Scalars['String']['input'];
  rep1Phone: Scalars['String']['input'];
  rep1Title?: InputMaybe<Scalars['String']['input']>;
  rep2Email?: InputMaybe<Scalars['String']['input']>;
  rep2FirstName?: InputMaybe<Scalars['String']['input']>;
  rep2JobPos?: InputMaybe<Scalars['String']['input']>;
  rep2LastName?: InputMaybe<Scalars['String']['input']>;
  rep2Phone?: InputMaybe<Scalars['String']['input']>;
  rep2Title?: InputMaybe<Scalars['String']['input']>;
  socialMediaUrls?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl: Scalars['String']['input'];
  websiteUrl: Scalars['String']['input'];
};

export type CreateCallToolsWebhookAutomationInput = {
  dispositionId: Scalars['Int']['input'];
};

/**
 * Create a campaign. Minimal by design: the message sequence is seeded server-side
 * from the purpose's registered messages and edited later in the campaign editor,
 * so no sequence/scheduling is collected here.
 */
export type CreateCampaignInput = {
  channel: CampaignChannel;
  /** The sending purpose (MessageProvisionCampaign) — required; scopes the send-set. */
  messageProvisionCampaignId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  /**
   * The campaign's explicit sending-number pick (PhoneLine ids within the purpose's
   * pool). Optional at create — a campaign can be drafted before numbers exist —
   * but launch requires a non-empty pick.
   */
  sendingPhoneLineIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateCaseAlertInput = {
  /** Required when trigger is DOC_TYPE — the document type to watch. */
  documentType?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  trigger: CaseAlertTrigger;
};

export type CreateContactAgentInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  config: ContactAgentConfigInput;
  name: Scalars['String']['input'];
  origin?: InputMaybe<AgentOrigin>;
  status?: InputMaybe<ContactAgentStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  triggerFormIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

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

export type CreateContactExternalLinkInput = {
  contactId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

/**
 * Create a contact for a specific property, optionally targeting a specific
 * person (rather than letting the server pick the property's primary owner).
 * When `targetPerson` is set, the skiptrace runs scoped to that actor and the
 * resulting contact is built from that person's data.
 */
export type CreateContactFromPropertyInput = {
  /** Property.id (esId on the wire) to attach the new contact to. */
  propertyId: Scalars['ID']['input'];
  /** When set, force the contact to be for this specific person. */
  targetPerson?: InputMaybe<CreateContactFromPropertyTargetPersonInput>;
  /**
   * How many of the top-ranked skip-traced people to create as distinct,
   * mutually-connected contacts (everyone below the cutoff becomes a subcontact on
   * each). Omitted or 1 ⇒ today's single-primary behavior. Ignored when
   * targetPerson is set. A ceiling, not a quota.
   */
  topContactCount?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateContactFromPropertyTargetPersonInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  /**
   * Pass-through to SkipTraceService:
   *  - true  → only skiptrace this person; no fallback to property's owner waterfall
   *  - false → try this person first, fall back to owners if no results
   */
  onlySkiptraceSpecifiedActor: Scalars['Boolean']['input'];
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
  type?: InputMaybe<DealType>;
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
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type: ContactCustomFieldType;
};

export type CreateDealCustomFieldInput = {
  allowMultiple?: InputMaybe<Scalars['Boolean']['input']>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  options?: InputMaybe<Array<Scalars['String']['input']>>;
  type: DealCustomFieldType;
};

export type CreateDealExternalLinkInput = {
  dealId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CreateDealInput = {
  closeDate?: InputMaybe<Scalars['DateTime']['input']>;
  commissionAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  commissionPercentBps?: InputMaybe<Scalars['Int']['input']>;
  contactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFieldValues?: InputMaybe<Array<DealCustomFieldValueInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  participantSplits?: InputMaybe<Array<DealParticipantSplitInput>>;
  priceCents?: InputMaybe<Scalars['BigInt']['input']>;
  propertyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  propertyStrings?: InputMaybe<Array<Scalars['String']['input']>>;
  stageId: Scalars['ID']['input'];
  teamSplitAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  teamSplitPercentBps?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Create a task that is explicitly attached to a deal, with no contact required. */
export type CreateDealTaskInput = {
  autoCompleteOnNoteAdded?: InputMaybe<Scalars['Boolean']['input']>;
  autoCompleteOnReassignment?: InputMaybe<Scalars['Boolean']['input']>;
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  dealId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone: Timezone;
  title: Scalars['String']['input'];
};

export type CreateDispositionManagerInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  profilePictureUploadedFileId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateEmbedFormInput = {
  allowDuplicateContact?: InputMaybe<Scalars['Boolean']['input']>;
  assignmentConfig?: InputMaybe<EmbedFormAssignmentConfigInput>;
  autoListIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  autoTagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  collectSmsConsent?: InputMaybe<Scalars['Boolean']['input']>;
  dedupePrimaryField?: InputMaybe<EmbedFormDedupeField>;
  dedupeSecondaryField?: InputMaybe<EmbedFormDedupeField>;
  descriptionText?: InputMaybe<Scalars['String']['input']>;
  enableEmailNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSlackNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSmsNotification?: InputMaybe<Scalars['Boolean']['input']>;
  fieldConfig: Scalars['JSON']['input'];
  gtmContainerId?: InputMaybe<Scalars['String']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
  marketingConsentText?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  ownerType?: InputMaybe<EmbedFormOwnerType>;
  privacyPolicyContent?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  showMarketingConsent?: InputMaybe<Scalars['Boolean']['input']>;
  showPoweredBy?: InputMaybe<Scalars['Boolean']['input']>;
  slackChannelId?: InputMaybe<Scalars['String']['input']>;
  slackChannelName?: InputMaybe<Scalars['String']['input']>;
  slackMessageTemplate?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  smsDisclaimerText?: InputMaybe<Scalars['String']['input']>;
  smsMarketingConsentText?: InputMaybe<Scalars['String']['input']>;
  smsTransactionalConsentText?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  styleConfig?: InputMaybe<Scalars['JSON']['input']>;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  successMessage?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsText?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceContent?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * AI employees wired to this form. Desired-state: the given ids become the
   * form's complete trigger-agent set. Every submission puts them on the
   * submitting contact, matched existing contacts included.
   */
  triggerAgentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreateExternalApiKeyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  scopes: Array<ExternalApiKeyScope>;
};

export type CreateIncomingWebhookInput = {
  label?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInvitationLinkInput = {
  emails?: InputMaybe<Array<Scalars['String']['input']>>;
  isPermanent?: InputMaybe<Scalars['Boolean']['input']>;
  phoneRequired?: InputMaybe<Scalars['Boolean']['input']>;
  userType?: InputMaybe<OrganizationToUserMappingType>;
};

export type CreateLibraryFileInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  uploadedFileId: Scalars['ID']['input'];
};

export type CreateNoteInput = {
  body: Scalars['String']['input'];
  contactId: Scalars['ID']['input'];
  isInternal?: InputMaybe<Scalars['Boolean']['input']>;
  voiceNote?: InputMaybe<CreateVoiceNoteInput>;
};

export type CreateNoteReplyInput = {
  body: Scalars['String']['input'];
  noteId: Scalars['ID']['input'];
};

export type CreateOnboardingAuthHoldIntentInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

export type CreatePartnershipInvitationInput = {
  direction: PartnershipDirection;
  partnerOrgId: Scalars['ID']['input'];
  /**
   * Users from the current org visible to the partner when they send leads.
   * Only meaningful for RECEIVE_ONLY or BIDIRECTIONAL. Empty array = all users.
   */
  permittedUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Admins of the partner org to notify about this invitation.
   * Empty/omitted = notify all admins. Ids that aren't partner-org admins are ignored.
   */
  recipientUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CreatePostInput = {
  identifier: Scalars['String']['input'];
};

export type CreateReferralLinkInput = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  urlExtension: Scalars['String']['input'];
};

export type CreateScraperPipelineInput = {
  locations: Array<Scalars['String']['input']>;
  signals: Array<Scalars['String']['input']>;
  standardOperatingProcedure?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  websiteUrl: Scalars['String']['input'];
};

export type CreateSolePropSubAccountInput = {
  base: BaseSubAccountInput;
  businessPhone: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mobileOtpPhone: Scalars['String']['input'];
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSubContactInput = {
  emails?: InputMaybe<Array<CreateContactEmailInput>>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  relation?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSupportAccountInput = {
  email: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  password: Scalars['String']['input'];
};

export type CreateTaskInput = {
  autoCompleteOnNoteAdded?: InputMaybe<Scalars['Boolean']['input']>;
  autoCompleteOnReassignment?: InputMaybe<Scalars['Boolean']['input']>;
  contactId: Scalars['String']['input'];
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  /** Deals to explicitly attach to the task (creates DealTask join rows). May be empty or omitted. */
  dealIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['DateTime']['input'];
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone: Timezone;
  title: Scalars['String']['input'];
};

export type CreateUserGroupInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  memberUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name: Scalars['String']['input'];
};

export type CreateVoiceNoteInput = {
  audioUploadedFileId: Scalars['ID']['input'];
  durationMs: Scalars['Int']['input'];
  peaks: Array<Scalars['Int']['input']>;
};

export type CreateVoicemailTemplateInput = {
  /** Voicemail duration in milliseconds. Uploaded files must be 60,000 ms or shorter. */
  durationMs: Scalars['Int']['input'];
  fileContentHash: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  format: VoicemailTemplateFormat;
  name: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

/**
 * Bare-minimum create WorkflowGroup input. Creates the parent
 * `WorkflowGroup` plus an initial DRAFT `WorkflowAutomation` under it.
 * The user sets triggers in the editor afterwards.
 */
export type CreateWorkflowGroupInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /** Stable folder destination. Preferred over the legacy top-level group name. */
  folderId?: InputMaybe<Scalars['ID']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  /**
   * Optional system-managed category (e.g. `PROPERTY_SIGNAL_SKIP_TRACE`). When
   * set, the workflow is seeded with the registered template graph for this
   * category. Domains with `allowsCustom: false` (PROPERTY today) MUST supply
   * a value — there is no admin bypass. Validated server-side via the shared
   * per-domain Zod.
   */
  systemCategory?: InputMaybe<Scalars['String']['input']>;
  /**
   * Optional template id used to seed the initial graph (nodes/edges/config).
   * Must match the chosen `workflowDomain`. Templates are registered per domain in
   * shared (`WORKFLOW_TEMPLATES` for contacts, `PROPERTY_WORKFLOW_TEMPLATES`,
   * `APPOINTMENT_WORKFLOW_TEMPLATES`); deals have no starter templates, so a deal
   * `templateId` is rejected. Independent of `systemCategory` for now —
   * system-category creates pass both; user-picked templates pass only this.
   */
  templateId?: InputMaybe<Scalars['String']['input']>;
  workflowDomain: WorkflowDomain;
  workflowType: WorkflowType;
};

export type CreditCartItemInput = {
  creditType: CreditType;
  quantity: Scalars['Int']['input'];
};

export enum CreditType {
  /** AI agent usage (AI Agent Credits). Purchase-only: 1 credit = 1 cent. */
  AiCredits = 'AI_CREDITS',
  EmailVerification = 'EMAIL_VERIFICATION',
  ExportProperties = 'EXPORT_PROPERTIES',
  Skiptrace = 'SKIPTRACE'
}

export enum CursorDirection {
  Next = 'NEXT',
  Previous = 'PREVIOUS'
}

export type CursorInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CursorPaginationInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<CursorDirection>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export enum DataExportStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Processing = 'PROCESSING'
}

export enum DataExportType {
  Contacts = 'CONTACTS',
  Properties = 'PROPERTIES',
  Skiptraces = 'SKIPTRACES'
}

export enum DealActivityEventType {
  Assigned = 'ASSIGNED',
  CloseDateChanged = 'CLOSE_DATE_CHANGED',
  Comment = 'COMMENT',
  CommissionChanged = 'COMMISSION_CHANGED',
  ContactLinked = 'CONTACT_LINKED',
  ContactUnlinked = 'CONTACT_UNLINKED',
  DealArchived = 'DEAL_ARCHIVED',
  DealCreated = 'DEAL_CREATED',
  DealRestored = 'DEAL_RESTORED',
  FileAdded = 'FILE_ADDED',
  FileRemoved = 'FILE_REMOVED',
  StageChanged = 'STAGE_CHANGED',
  TaskAdded = 'TASK_ADDED',
  TaskCompleted = 'TASK_COMPLETED',
  TeamSplitChanged = 'TEAM_SPLIT_CHANGED',
  Unassigned = 'UNASSIGNED',
  ValueChanged = 'VALUE_CHANGED'
}

export enum DealCustomFieldType {
  Date = 'DATE',
  Dollar = 'DOLLAR',
  Dropdown = 'DROPDOWN',
  Link = 'LINK',
  Number = 'NUMBER',
  Text = 'TEXT'
}

export type DealCustomFieldValueInput = {
  customFieldId: Scalars['ID']['input'];
  dateValue?: InputMaybe<Scalars['DateTime']['input']>;
  dropdownSelectedValues?: InputMaybe<Array<Scalars['String']['input']>>;
  numberValue?: InputMaybe<Scalars['Float']['input']>;
  textValue?: InputMaybe<Scalars['String']['input']>;
};

export type DealDetailLayoutTabInput = {
  fieldReferences: Array<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type DealFileContext = {
  dealId: Scalars['String']['input'];
};

export type DealFilters = {
  contactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  participantOrganizationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  pipelineId: Scalars['ID']['input'];
  relativeCreatedAtDate?: InputMaybe<RelativeDate>;
  relativeStageUpdatedAtDate?: InputMaybe<RelativeDate>;
  stageId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<DealStatus>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type DealMutationInput = {
  closeDate?: InputMaybe<Scalars['DateTime']['input']>;
  commissionAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  commissionPercentBps?: InputMaybe<Scalars['Int']['input']>;
  contactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  customFieldValues?: InputMaybe<Array<DealCustomFieldValueInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  fileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  order?: InputMaybe<Scalars['Int']['input']>;
  participantSplits?: InputMaybe<Array<DealParticipantSplitInput>>;
  priceCents?: InputMaybe<Scalars['BigInt']['input']>;
  propertyIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  propertyStrings?: InputMaybe<Array<Scalars['String']['input']>>;
  stageId?: InputMaybe<Scalars['ID']['input']>;
  teamSplitAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  teamSplitPercentBps?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type DealParticipantSplitInput = {
  splitAmountCents?: InputMaybe<Scalars['BigInt']['input']>;
  splitPercentBps?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};

export type DealStageCreateInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  isTerminal?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Float']['input']>;
  terminalType?: InputMaybe<DealStageTerminalType>;
  winProbability?: InputMaybe<Scalars['Int']['input']>;
};

export enum DealStageTerminalType {
  Lost = 'LOST',
  Neutral = 'NEUTRAL',
  Won = 'WON'
}

export enum DealStatus {
  AllDeals = 'ALL_DEALS',
  ArchivedDeals = 'ARCHIVED_DEALS',
  CurrentDeals = 'CURRENT_DEALS'
}

export enum DealTaskType {
  Appointment = 'APPOINTMENT',
  Task = 'TASK'
}

export enum DealType {
  Buyer = 'BUYER',
  Investment = 'INVESTMENT',
  Listing = 'LISTING',
  Undetermined = 'UNDETERMINED'
}

export type DeleteAgentPersonalGoalInput = {
  goalId: Scalars['ID']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type DeleteAppointmentInput = {
  id: Scalars['ID']['input'];
};

export type DeleteAppointmentOnDealInput = {
  dealId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type DeleteAppointmentReminderInput = {
  id: Scalars['ID']['input'];
};

export type DeleteCallToolsWebhookAutomationInput = {
  automationId: Scalars['Int']['input'];
  httpRequestId: Scalars['Int']['input'];
  webhookActionId: Scalars['Int']['input'];
};

export type DeleteContactAgentInput = {
  id: Scalars['ID']['input'];
};

export type DeleteContactExternalLinkInput = {
  contactId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type DeleteDealExternalLinkInput = {
  dealId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type DeleteDealTaskInput = {
  dealId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};

export type DeleteExternalApiKeyInput = {
  id: Scalars['ID']['input'];
};

export type DeleteNotificationsInput = {
  notificationIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type DeleteTaskInput = {
  contactId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export enum DependencyImpactGroupKind {
  ContentTemplate = 'CONTENT_TEMPLATE',
  EmailSignature = 'EMAIL_SIGNATURE',
  EmbedForm = 'EMBED_FORM',
  Filter = 'FILTER',
  LibraryFolderContents = 'LIBRARY_FOLDER_CONTENTS',
  LiveDeals = 'LIVE_DEALS',
  LiveStages = 'LIVE_STAGES',
  WorkflowAutomation = 'WORKFLOW_AUTOMATION'
}

export enum DependencyImpactSourceKind {
  ContentTemplate = 'CONTENT_TEMPLATE',
  Direct = 'DIRECT',
  EmailSignature = 'EMAIL_SIGNATURE',
  EmbedForm = 'EMBED_FORM',
  Filter = 'FILTER',
  WorkflowAutomation = 'WORKFLOW_AUTOMATION'
}

export type DependencyReplacementSelectionInput = {
  replacementId: Scalars['ID']['input'];
  targetId: Scalars['ID']['input'];
  targetKind: DependencyTargetKind;
};

export type DependencyResolutionInput = {
  impactVersion: Scalars['String']['input'];
  replacements: Array<DependencyReplacementSelectionInput>;
};

export type DependencyTargetInput = {
  targetId: Scalars['ID']['input'];
  targetKind: DependencyTargetKind;
};

export enum DependencyTargetKind {
  ContactCustomField = 'CONTACT_CUSTOM_FIELD',
  ContactCustomFieldOption = 'CONTACT_CUSTOM_FIELD_OPTION',
  ContactList = 'CONTACT_LIST',
  ContactTag = 'CONTACT_TAG',
  Deal = 'DEAL',
  DealCustomField = 'DEAL_CUSTOM_FIELD',
  DealCustomFieldOption = 'DEAL_CUSTOM_FIELD_OPTION',
  DealPipeline = 'DEAL_PIPELINE',
  DealStage = 'DEAL_STAGE',
  DealStageDeals = 'DEAL_STAGE_DEALS',
  EmailIdentity = 'EMAIL_IDENTITY',
  LibraryFolder = 'LIBRARY_FOLDER',
  PropertyList = 'PROPERTY_LIST',
  PropertyTag = 'PROPERTY_TAG',
  TwilioPhoneNumber = 'TWILIO_PHONE_NUMBER'
}

export type DetachContactAgentMailboxInput = {
  agentId: Scalars['ID']['input'];
  mailboxId: Scalars['ID']['input'];
};

export type DetachContactAgentPhoneLineInput = {
  agentId: Scalars['ID']['input'];
  phoneLineId: Scalars['ID']['input'];
};

export enum DeveloperApiKeyScope {
  Skiptrace = 'SKIPTRACE'
}

export enum DialerConnectionType {
  CallCenter = 'CALL_CENTER',
  IndependentOrg = 'INDEPENDENT_ORG'
}

/** The billing-effect class of a proposed change — drives which disclosure sentences the dialog shows. */
export enum DisclosureEffect {
  /** Charged a prorated amount immediately (an add / upgrade / ending a trial). */
  ImmediateCharge = 'IMMEDIATE_CHARGE',
  /** Loses access immediately with no further charges (cancelling during a trial). */
  ImmediateLoss = 'IMMEDIATE_LOSS',
  /** Keeps access until the period end, then loses it (a paid-subscription cancellation). */
  LossAtPeriodEnd = 'LOSS_AT_PERIOD_END',
  /** No billing impact (a no-op or a blocked change). */
  None = 'NONE',
  /** Takes effect now with no credit; the next invoice is simply lower (a removal). */
  NoCreditRemoval = 'NO_CREDIT_REMOVAL'
}

export enum DraftChannel {
  Email = 'EMAIL',
  Text = 'TEXT'
}

export type DropVoicemailInput = {
  callSid: Scalars['String']['input'];
  templateId: Scalars['ID']['input'];
};

export type EditNoteInput = {
  body: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type EditNoteReplyInput = {
  body: Scalars['String']['input'];
  id: Scalars['ID']['input'];
};

export type EditVectorInput = {
  id: Scalars['ID']['input'];
  newName: Scalars['String']['input'];
  propertySignalType?: InputMaybe<PropertySignalType>;
  type?: InputMaybe<VectorType>;
};

export type EmailAttachmentInput = {
  contentType: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  fileSize: Scalars['Int']['input'];
  uploadedFileId: Scalars['String']['input'];
};

export type EmailIdentityLookupInput = {
  clientId: Scalars['String']['input'];
  email: Scalars['String']['input'];
};

export type EmailPermanentLinkInput = {
  emails: Array<Scalars['String']['input']>;
};

export enum EmailProvider {
  Gmail = 'GMAIL',
  Outlook = 'OUTLOOK'
}

export enum EmailRecipientKind {
  Contact = 'CONTACT',
  Teammate = 'TEAMMATE'
}

export enum EmbedFormAnalyticsMode {
  Prod = 'PROD',
  RealTime = 'REAL_TIME'
}

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

export enum EmbedFormDedupeField {
  Email = 'EMAIL',
  Phone = 'PHONE'
}

export type EmbedFormEventInput = {
  /**
   * Free-form payload. Conventions per type:
   *   FIELD_CHANGE → { value }
   *   VIEW         → { utm, referrerUrl, landingUrl, gclid, fbclid, msclkid, ttclid, liFatId }
   *   ABANDON      → { lastFieldKey, filledFieldKeys }
   *   SUBMIT       → { submissionId? }
   */
  data?: InputMaybe<Scalars['JSON']['input']>;
  /** Field key for FIELD_CHANGE events. Null for VIEW/ABANDON/SUBMIT. */
  fieldKey?: InputMaybe<Scalars['String']['input']>;
  /**
   * Client-recorded timestamp (ISO-8601). Used to preserve event order when
   * events are batched and flushed later. Server falls back to NOW() when null.
   */
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Event kind. Server stores into the EmbedFormEvent table verbatim. */
  type: EmbedFormEventTypeInput;
};

export enum EmbedFormEventTypeInput {
  Abandon = 'ABANDON',
  FieldChange = 'FIELD_CHANGE',
  Submit = 'SUBMIT',
  View = 'VIEW'
}

export enum EmbedFormOwnerType {
  Org = 'ORG',
  User = 'USER'
}

export enum EmbedFormStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

export type EnrichContactOptionsInput = {
  /** Optional batch-wide address preference for the skiptrace. Omit ⇒ EITHER. */
  skiptraceAddress?: InputMaybe<BulkEnrichSkiptraceAddress>;
};

/**
 * Pins which single address a contact enrich/skiptrace should target. Provide
 * exactly one: a specific mailing Address id, or a specific property (esId). Omit
 * the whole input to keep the default waterfall (prefer mailing, fall back to property).
 */
export type EnrichContactSkiptraceAddressInput = {
  /** A specific mailing address (ContactMailingAddress.address.id) to skiptrace. */
  mailingAddressId?: InputMaybe<Scalars['ID']['input']>;
  /** A specific property (Property.id / esId) to skiptrace, suppressing the mailing default. */
  propertyId?: InputMaybe<Scalars['ID']['input']>;
};

export type EnrichContactsContext = {
  contacts: BulkTaskInput;
  options: EnrichContactOptionsInput;
};

/** Runs one explicit enrichment operation against an enabled provider. */
export type EnrichPhoneInput = {
  operation: PhoneEnrichmentOperation;
  /** A formatted or unformatted ten-digit US phone number. */
  phone: Scalars['String']['input'];
  /** Omit to use the organization's configured provider priority. */
  providerKey?: InputMaybe<Scalars['String']['input']>;
};

/** Runs one enrichment operation for several numbers in a single request. */
export type EnrichPhonesInput = {
  operation: PhoneEnrichmentOperation;
  /**
   * Formatted or unformatted ten-digit US phone numbers. Numbers that already
   * have a saved result are skipped rather than charged again.
   */
  phones: Array<Scalars['String']['input']>;
  /** Omit to use the organization's configured provider priority. */
  providerKey?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Where an EVENT workflow's example payload came from. WEBHOOK: captured from a
 * real POST to the workflow's inbound endpoint. PASTED: typed into the editor by
 * an author with no traffic yet. RUN: recovered from a past run's stored input —
 * read-only history, shown when the capture buffer predates the delivery.
 */
export enum EventWorkflowPayloadSampleSource {
  Pasted = 'PASTED',
  Run = 'RUN',
  Webhook = 'WEBHOOK'
}

export type ExportContactsContext = {
  contacts: BulkTaskInput;
};

export type ExportContext =
  { contacts: ExportContactsContext; enrichContacts?: never; properties?: never; skipTraceRequests?: never; skiptraceAndCreateContactsFromProperties?: never; skiptraceAndExportProperties?: never; }
  |  { contacts?: never; enrichContacts: EnrichContactsContext; properties?: never; skipTraceRequests?: never; skiptraceAndCreateContactsFromProperties?: never; skiptraceAndExportProperties?: never; }
  |  { contacts?: never; enrichContacts?: never; properties: ExportPropertiesContext; skipTraceRequests?: never; skiptraceAndCreateContactsFromProperties?: never; skiptraceAndExportProperties?: never; }
  |  { contacts?: never; enrichContacts?: never; properties?: never; skipTraceRequests: ExportSkipTraceRequestsContext; skiptraceAndCreateContactsFromProperties?: never; skiptraceAndExportProperties?: never; }
  |  { contacts?: never; enrichContacts?: never; properties?: never; skipTraceRequests?: never; skiptraceAndCreateContactsFromProperties: SkiptraceAndCreateContactsFromPropertiesContext; skiptraceAndExportProperties?: never; }
  |  { contacts?: never; enrichContacts?: never; properties?: never; skipTraceRequests?: never; skiptraceAndCreateContactsFromProperties?: never; skiptraceAndExportProperties: SkiptraceAndExportPropertiesContext; };

export enum ExportPhoneComplianceFilter {
  ExcludeDnc = 'EXCLUDE_DNC',
  ExcludeDncAndLitigator = 'EXCLUDE_DNC_AND_LITIGATOR',
  ExcludeDncAndLitigatorOnly = 'EXCLUDE_DNC_AND_LITIGATOR_ONLY',
  ExcludeDncOrLitigator = 'EXCLUDE_DNC_OR_LITIGATOR',
  ExcludeLitigator = 'EXCLUDE_LITIGATOR',
  None = 'NONE'
}

export type ExportPropertiesContext = {
  properties: BulkTaskInput;
};

/**
 * How much of the filter's matches the export took. ALL — every match. COUNT —
 * the first N. PAGE — one page of them (`limit` rows from `offset`).
 */
export enum ExportRowWindowKind {
  All = 'ALL',
  Count = 'COUNT',
  Page = 'PAGE'
}

/**
 * Where an export's rows came from. FILTER — it ran a saved filter (the common
 * case; the tree itself rides `ExportReport.filterRoot`). IDS — the user
 * hand-picked the rows.
 */
export enum ExportSelectionKind {
  Filter = 'FILTER',
  Ids = 'IDS'
}

export type ExportSkipTraceRequestsContext = {
  skiptraceRequests: BulkTaskInput;
};

/**
 * The scope hierarchy is a branch, not a ladder: READ is included by WRITE, and
 * ADMIN and IMPORT each include WRITE without including each other — an admin key
 * carries no migration provenance powers, and an import key administers nothing.
 * Create/update mutations expand a submitted set to everything it implies before
 * persisting.
 */
export enum ExternalApiKeyScope {
  /** Admin actions — team & partnership invites, and billing (e.g. purchasing skip-trace credits). Includes READ and WRITE. Team admins only. */
  Admin = 'ADMIN',
  /** Data-migration provenance overrides (backdated timestamps, authorship) with workflow triggers silenced. Includes READ and WRITE — but NOT admin actions, and ADMIN does not include IMPORT. Team admins only; revoke after the migration. */
  Import = 'IMPORT',
  /** Read-only queries (search, list, get). */
  Read = 'READ',
  /** Create and update queries (deals, tasks, contacts). Includes READ. */
  Write = 'WRITE'
}

export enum FeatureType {
  AiCredits = 'AI_CREDITS',
  Automations = 'AUTOMATIONS',
  CatalystEvents = 'CATALYST_EVENTS',
  DavidVoiceAgents = 'DAVID_VOICE_AGENTS',
  EmailVerification = 'EMAIL_VERIFICATION',
  ExportProperties = 'EXPORT_PROPERTIES',
  Seats = 'SEATS',
  Skiptrace = 'SKIPTRACE',
  SpicySort = 'SPICY_SORT',
  TwilioSoleProp = 'TWILIO_SOLE_PROP',
  TwilioStandardLsv = 'TWILIO_STANDARD_LSV',
  Voicemail = 'VOICEMAIL'
}

export enum FileProcessingTaskStatus {
  AuthoringTransformer = 'AUTHORING_TRANSFORMER',
  Completed = 'COMPLETED',
  Created = 'CREATED',
  Failed = 'FAILED',
  NotEnoughBalance = 'NOT_ENOUGH_BALANCE',
  PendingProcessing = 'PENDING_PROCESSING',
  PendingReview = 'PENDING_REVIEW',
  Processing = 'PROCESSING'
}

export enum FileProcessingTaskType {
  CampaignContacts = 'CAMPAIGN_CONTACTS',
  Contacts = 'CONTACTS',
  Properties = 'PROPERTIES',
  PropertySignals = 'PROPERTY_SIGNALS',
  Skiptraces = 'SKIPTRACES'
}

export type FileUploadInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  fileContentHash: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  type: FileUploadType;
};

export enum FileUploadType {
  ContactFile = 'CONTACT_FILE',
  ContactUpload = 'CONTACT_UPLOAD',
  Contract = 'CONTRACT',
  DealFile = 'DEAL_FILE',
  EmailAttachment = 'EMAIL_ATTACHMENT',
  EmailInlineImage = 'EMAIL_INLINE_IMAGE',
  LibraryFile = 'LIBRARY_FILE',
  NoteInlineImage = 'NOTE_INLINE_IMAGE',
  OptInScreenshotForTwilioSubAccountRegistration = 'OPT_IN_SCREENSHOT_FOR_TWILIO_SUB_ACCOUNT_REGISTRATION',
  OrgImage = 'ORG_IMAGE',
  PostDocumentFile = 'POST_DOCUMENT_FILE',
  PostFile = 'POST_FILE',
  ProofOfFunds = 'PROOF_OF_FUNDS',
  PropertySignalUpload = 'PROPERTY_SIGNAL_UPLOAD',
  PropertyUpload = 'PROPERTY_UPLOAD',
  SmsMedia = 'SMS_MEDIA',
  TemplatePublicAttachment = 'TEMPLATE_PUBLIC_ATTACHMENT',
  VoicemailTemplate = 'VOICEMAIL_TEMPLATE',
  VoiceNote = 'VOICE_NOTE'
}

/**
 * Which Files-page change woke a `filesUpdated` subscriber: a row was CREATED (an
 * upload or export started), reached a TERMINAL state (completed / failed / torn
 * down), or UPDATED in place — a mid-flight change to a surfaced field that is
 * neither the row appearing nor ending (an FPT status transition, a transformer
 * review flip, a file/export rename). A doorbell hint only — the client refetches
 * regardless of which one.
 */
export enum FilesUpdateKind {
  Created = 'CREATED',
  Terminal = 'TERMINAL',
  Updated = 'UPDATED'
}

export type FilterInput = {
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  includeIncompleteRecords?: InputMaybe<Scalars['Boolean']['input']>;
  pagination: FilterPaginationInput;
  strictTree?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FilterPaginationInput = {
  computeTotal?: InputMaybe<Scalars['Boolean']['input']>;
  contactSort?: InputMaybe<ContactSort>;
  cursorAfter?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  cursorAfterId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pitId?: InputMaybe<Scalars['String']['input']>;
  pitKeepAlive?: InputMaybe<Scalars['String']['input']>;
  selectCount?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
  stableDeterministicOrder?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FilterType {
  Contact = 'CONTACT',
  Deal = 'DEAL',
  Entity = 'ENTITY',
  Organization = 'ORGANIZATION',
  Owner = 'OWNER',
  Person = 'PERSON',
  Post = 'POST',
  Property = 'PROPERTY',
  User = 'USER'
}

export type FinalizeOnboardingAuthHoldAndStartTrialInput = {
  billingAddress: OnboardingBillingAddressInput;
  /**
   * The exact charge-disclosure text the browser rendered on the payment step,
   * verbatim. Persisted in the DISCLOSURE_SHOWN dispute-evidence event as a
   * client-reported cross-check; the authoritative facts (plan, trial end) are
   * derived server-side from the subscription that was actually created.
   */
  disclosureText?: InputMaybe<Scalars['String']['input']>;
  /**
   * Which version of the onboarding disclosure wording the browser rendered
   * (ONBOARDING_DISCLOSURE_VERSION). Persisted with the verbatim client text so a
   * past charge's exact disclosure can be reconstructed from the versioned copy.
   */
  disclosureVersion?: InputMaybe<Scalars['Int']['input']>;
  isAnnualPlan: Scalars['Boolean']['input'];
  paymentIntentId: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
  selectedPlanCode: PlanCode;
  /**
   * ISO timestamp of when the user checked the terms checkbox, as claimed by the
   * client. Persisted in the TERMS_ACCEPTED dispute-evidence event alongside the
   * server-derived acceptance moment (receipt of this mutation).
   */
  termsAcceptedAtIso?: InputMaybe<Scalars['String']['input']>;
  /**
   * Browser IANA timezone (Intl.DateTimeFormat().resolvedOptions().timeZone).
   * Renders the trial-end disclosure in the customer's own zone; invalid/missing
   * falls back to UTC.
   */
  timeZone?: InputMaybe<Scalars['String']['input']>;
  /**
   * The free-trial code the user entered (first 6 digits of their verified phone),
   * or empty when they entered none. The server validates it against the phone on
   * the User record and starts a trial only on a match — the decision is never
   * trusted from the client. Omitted entirely (old client) preserves the legacy
   * unconditional trial rather than surprise-charging.
   */
  trialCode?: InputMaybe<Scalars['String']['input']>;
};

export type FindDealsInput = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  hasAssignedUsers?: InputMaybe<Scalars['Boolean']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  stageId?: InputMaybe<Scalars['ID']['input']>;
  titleContains?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type FindOrCreatePropertyByEsIdInput = {
  esId: Scalars['String']['input'];
  fullAddress: Scalars['String']['input'];
};

export type FloatRangeInput = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatRangeResponseInput = {
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
};

/**
 * A thing that can live in a folder. One entry per foldable table.
 *
 * Not every kind can do everything: only FILTER can be private (and therefore
 * live in a personal folder), and TEMPLATE has no display order and so cannot be
 * reordered. The server refuses those rather than accepting them silently.
 */
export enum FoldableKind {
  ContactList = 'CONTACT_LIST',
  Filter = 'FILTER',
  LibraryFile = 'LIBRARY_FILE',
  PropertyList = 'PROPERTY_LIST',
  Template = 'TEMPLATE',
  WorkflowGroup = 'WORKFLOW_GROUP'
}

/**
 * What happens to a folder's contents when it is deleted. The default moves them
 * up to the deleted folder's parent; `DELETE_CONTENTS` is a separate, explicitly
 * confirmed action. Items (filters, lists, templates) survive either way — only
 * descendant FOLDERS are destroyed by `DELETE_CONTENTS`.
 */
export enum FolderDeleteMode {
  DeleteContents = 'DELETE_CONTENTS',
  MoveContentsToParent = 'MOVE_CONTENTS_TO_PARENT'
}

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
export enum FolderScope {
  Contact = 'CONTACT',
  Deal = 'DEAL',
  Entity = 'ENTITY',
  Library = 'LIBRARY',
  Organization = 'ORGANIZATION',
  Owner = 'OWNER',
  Person = 'PERSON',
  Post = 'POST',
  Property = 'PROPERTY',
  User = 'USER',
  Workflow = 'WORKFLOW'
}

export type GenerateAcquisitionMemoInput = {
  address: Scalars['String']['input'];
  forceRefresh?: InputMaybe<Scalars['Boolean']['input']>;
  strategy?: InputMaybe<AcquisitionMemoStrategy>;
};

export type GetAgentAnalyticsAgentDetailInput = {
  organizationId: Scalars['ID']['input'];
  period: AgentAnalyticsPeriod;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAgentAnalyticsAppointmentSummaryInput = {
  organizationId: Scalars['ID']['input'];
  period: AgentAnalyticsPeriod;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAgentAnalyticsCallDurationBucketsInput = {
  organizationId: Scalars['ID']['input'];
  period: AgentAnalyticsPeriod;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAgentAnalyticsCallHeatmapInput = {
  organizationId: Scalars['ID']['input'];
  period: AgentAnalyticsPeriod;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Unlike the sibling inputs, `userId` is required: per-phone-line activity is only
 * defined for a single agent — there is no org-wide roll-up of this read.
 */
export type GetAgentAnalyticsPhoneLineActivityInput = {
  organizationId: Scalars['ID']['input'];
  period: AgentAnalyticsPeriod;
  userId: Scalars['ID']['input'];
};

export type GetAgentAnalyticsPipelineCommissionSummaryInput = {
  organizationId: Scalars['ID']['input'];
  period: AgentAnalyticsPeriod;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAgentAnalyticsResponseChannelSummaryInput = {
  organizationId: Scalars['ID']['input'];
  period: AgentAnalyticsPeriod;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAgentGoalPlanInput = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  periodStartDate: Scalars['Date']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetContactTextThreadsInput = {
  contactId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetConversationOrCallLogInput = {
  contactPhoneNumber: Scalars['String']['input'];
  conversationId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<PaginationInput>;
  sort?: InputMaybe<SortDirection>;
  twilioPhoneNumberId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type GetInboxEmailThreadsInput = {
  contactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  cursor?: InputMaybe<Scalars['DateTime']['input']>;
  cursorId?: InputMaybe<Scalars['ID']['input']>;
  pagination: PaginationInput;
  sort: SortDirection;
  userId: Scalars['ID']['input'];
};

export type GetPropertySignalCountyDetailInput = {
  countyFips: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  windowDays?: InputMaybe<Scalars['Int']['input']>;
};

export type GetPropertySignalMappingReportInput = {
  /**
   * Explicit 5-digit county FIPS codes. Unioned with any states selected.
   * Optional if stateFips is provided.
   */
  countyFips?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Rolling window in days, by signal ingestion (createdAt). Default 30. */
  days?: InputMaybe<Scalars['Int']['input']>;
  /**
   * 2-digit state FIPS prefixes (e.g. "34", "42"). All counties in each
   * state with signals are included. Optional if countyFips is provided.
   */
  stateFips?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Per-scraper detail used by Grain 2's row expansion: a daily trend
 * over a fixed 14-day window plus a contributing-counties roll-up so
 * the user can see "where is this scraper feeding signals?". Mirrors
 * `propertySignalCountyDetail` but pivots on scraper instead of
 * countyFips.
 *
 * Admin-only.
 */
export type GetPropertySignalScraperDetailInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  scraper: Scalars['String']['input'];
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  windowDays?: InputMaybe<Scalars['Int']['input']>;
};

export type GetPropertySignalSidebarPanelsInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  windowDays?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Input to the per-state funnel. `stateAbbv` is the two-letter postal
 * code (CA, TX, …) — the resolver maps it to a 2-digit FIPS prefix
 * internally and filters via `countyFips LIKE <prefix>%`. The window
 * fields mirror every other propertySignal surface; the resolver passes
 * them through the shared `resolveWindow` helper.
 */
export type GetPropertySignalStateFunnelInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  stateAbbv: Scalars['String']['input'];
  windowDays?: InputMaybe<Scalars['Int']['input']>;
};

/** User-actionable classification of why a per-account Google Ads fetch failed. UNKNOWN means we couldn't bucket the underlying error — the UI shows a generic banner while ops triage via `detail`. */
export enum GoogleAdsErrorKind {
  /** The MCC has lost access to this customer ID (link removed, account suspended, or principal lacks permission). Fix: re-link the account in Google Ads. */
  AccountInaccessible = 'ACCOUNT_INACCESSIBLE',
  /** Refresh token revoked, expired, or rotated under a different OAuth client. Fix: re-mint the MCC refresh token and rotate the server-config secret. */
  AuthExpired = 'AUTH_EXPIRED',
  /** Developer token rejected (not approved / prohibited). Ops-facing — users can't fix this. */
  DeveloperTokenInvalid = 'DEVELOPER_TOKEN_INVALID',
  /** Google rate-limited us. Self-resolves; retry. */
  QuotaExceeded = 'QUOTA_EXCEEDED',
  Unknown = 'UNKNOWN'
}

export type HireContactAgentInput = {
  agent: CreateContactAgentInput;
  brief: Scalars['String']['input'];
};

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

export type ImportDealInput = {
  /**
   * When the record was created in the source system. Must be in the past (any
   * time since 1970). Omitted = now.
   */
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  /**
   * The deal's fields, in the same shape the ordinary createDeal mutation
   * accepts (stageId from listPipelineStages; contacts/properties/users linked
   * by id; customFieldValues from listDealCustomFields).
   */
  deal: CreateDealInput;
  /**
   * The record's id in the source system. At most 256 characters. Part of the
   * idempotency key: importing the same (sourceSystem, externalId) twice returns
   * the existing deal.
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
   * Also stamps the deal's stage-entry timestamp (lastStageChangeAt): source
   * systems don't export per-stage move history, so the deal is recorded as
   * sitting in its stage since updatedAt — falling back to createdAt, then to
   * the import time when neither is provided.
   */
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ImportGoogleSheetInput = {
  googleSheetsUrl: Scalars['String']['input'];
};

/**
 * How promote treats the superseded sibling's in-flight runs. LET_FINISH and
 * PAUSE mirror the legacy `pauseInFlightRuns` false/true; MIGRATE stops each
 * run and mints a pre-seeded replacement on the new version that continues
 * from its mapped step (see the Run Migration design page).
 */
export enum InFlightRunsStrategy {
  LetFinish = 'LET_FINISH',
  Migrate = 'MIGRATE',
  Pause = 'PAUSE'
}

export enum InboxActorKind {
  Ai = 'AI',
  Automation = 'AUTOMATION',
  User = 'USER'
}

export enum InboxAiEmployeeAttachmentStatus {
  Active = 'ACTIVE',
  Paused = 'PAUSED'
}

export enum InboxAiEmployeeOutcome {
  Escalated = 'ESCALATED',
  Negative = 'NEGATIVE',
  Replied = 'REPLIED',
  Stopped = 'STOPPED'
}

export type InboxCursorInput = {
  agentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  aiEmployeeOutcomes?: InputMaybe<Array<InboxAiEmployeeOutcome>>;
  aiEmployeeStatuses?: InputMaybe<Array<InboxAiEmployeeAttachmentStatus>>;
  archivedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  callCursor?: InputMaybe<CursorInput>;
  connectedEmails?: InputMaybe<Array<Scalars['String']['input']>>;
  emailCursor?: InputMaybe<CursorInput>;
  excludeAutomatedOutbound?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<InboxFilterType>;
  replySentiments?: InputMaybe<Array<ReplySentiment>>;
  respondedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  sentBy?: InputMaybe<Array<InboxSentBy>>;
  smsCursor?: InputMaybe<CursorInput>;
  sort: SortDirection;
  take: Scalars['Int']['input'];
  twilioPhoneNumberIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  unrespondedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  workflowGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum InboxFilterType {
  All = 'ALL',
  Calls = 'CALLS',
  Emails = 'EMAILS',
  Messages = 'MESSAGES',
  MissedCalls = 'MISSED_CALLS',
  NeedsResponse = 'NEEDS_RESPONSE',
  Unresponded = 'UNRESPONDED'
}

export enum InboxItemType {
  Call = 'CALL',
  Email = 'EMAIL',
  Message = 'MESSAGE'
}

export enum InboxSentBy {
  AiEmployee = 'AI_EMPLOYEE',
  Human = 'HUMAN',
  Workflow = 'WORKFLOW'
}

export type InitializeEmbedFormViewerInput = {
  /**
   * Attribution bag captured at page load — utm_*, click IDs (gclid,
   * fbclid, etc.), referrerUrl, landingUrl. Stored on the new session
   * row so traffic-source classification works without scanning events.
   */
  attribution?: InputMaybe<Scalars['JSON']['input']>;
  formId: Scalars['ID']['input'];
  referrer?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type InitializePostViewerInput = {
  postId: Scalars['ID']['input'];
  referrer?: InputMaybe<Scalars['String']['input']>;
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

export type IntRangeInput = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type IntRangeResponseInput = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export enum LeadType {
  Buyer = 'BUYER',
  Seller = 'SELLER'
}

/**
 * Timestamps recording when the user opened each legal document from the
 * acceptance dialog. Required: the gate forces the user to open all three
 * documents before accepting, so every acceptance carries a real open time for
 * each — folded into the acceptance evidence for the audit log. `DateTime!`
 * guarantees each value is present and a well-formed timestamp.
 */
export type LegalAgreementLinkOpensInput = {
  acceptableUsePolicyOpenedAt: Scalars['DateTime']['input'];
  privacyPolicyOpenedAt: Scalars['DateTime']['input'];
  termsOfServiceOpenedAt: Scalars['DateTime']['input'];
};

export type LinkContactAsRelatedPersonInput = {
  linkedContactId: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  parentContactId: Scalars['ID']['input'];
  relation?: InputMaybe<Scalars['String']['input']>;
};

export enum LinkState {
  Archived = 'ARCHIVED',
  Merged = 'MERGED',
  Present = 'PRESENT',
  Unavailable = 'UNAVAILABLE'
}

export type ListAdminUserActivityInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  routePrefix?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/**
 * Grain 3 county overview — one row per county. Returns totals over a
 * configurable window (defaults to YTD; the client can pick a preset
 * or a custom date range), plus fixed last-7d-vs-prior-7d aggregates
 * that drive the row delta column. Powered by the same
 * goliath_cdc_staging.public_*_current snapshots the heatmap and
 * county-detail surfaces use; one BQ scan covers both windows.
 *
 * Per the OP observability PRD (Grain 3): "One row per geo. Each row
 * is fed by N scrapers; the scrapers are listed underneath the row."
 * The contributing-scrapers list itself is fetched lazily per-row via
 * the existing `propertySignalCountyDetail` resolver when a row is
 * expanded — kept off this query so the per-page scan stays bounded.
 *
 * Admin-only.
 */
export type ListPropertySignalCountyOverviewInput = {
  countyContains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  windowDays?: InputMaybe<Scalars['Int']['input']>;
};

export type ListPropertySignalGlobalHeatmapInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  windowDays?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Grain 2 scraper overview — one row per scraper. Returns totals over
 * a configurable window (defaults to YTD; the client can pick a preset
 * or a custom range), plus fixed last-7d-vs-prior-7d aggregates that
 * drive the row delta column. Mirrors the Grain 3 county-overview
 * shape so the two surfaces feel symmetric: county overview answers
 * "which geo is bleeding"; this answers "which scraper is bleeding".
 *
 * Powered by the same goliath_cdc_staging.public_*_current snapshots
 * as the heatmap and county-detail surfaces; one BQ scan covers both
 * the totals window and the recent 14-day delta window.
 *
 * Per the OP observability PRD §grain-2: "One row per scraper. The
 * daily-driver view." The contributing-counties list is fetched
 * lazily per-row via the `scraperDetail` namespace's
 * `getPropertySignalScraperDetail` query when the row is
 * expanded — kept off this query so the per-page scan stays bounded.
 *
 * Admin-only.
 */
export type ListPropertySignalScraperOverviewInput = {
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  scraperContains?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  windowDays?: InputMaybe<Scalars['Int']['input']>;
};

export type ListWorkflowRunsInput = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  dealId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * A WORKFLOW_RUN filter tree — the Involved tab's filter-dialog
   * output. Validated against the shared WORKFLOW_RUN registry and compiled to
   * a Prisma where-clause server-side. Cannot be combined with `searchTerm`
   * (the free-text path is raw SQL); the DAO returns an empty result for that
   * combination, mirroring the existing searchTerm + dealId/propertyId rule.
   */
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  pagination: PaginationInput;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<WorkflowAutomationRunStatus>>;
  /**
   * Anchor for APPOINTMENT-domain runs. Appointments are `Task` rows in this
   * schema, so the run FK (and this filter) is named `taskId`.
   */
  taskId?: InputMaybe<Scalars['ID']['input']>;
  workflowAutomationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/**
 * Coverage band for a Live Markets county, derived server-side from the count of
 * distinct mapped properties over the trailing window:
 * - LIVE: strongest coverage (clears the live floor).
 * - EMERGING: coverage building (between the emerging floor and the live floor).
 * Counts below the emerging floor are not returned at all (gray on the map).
 */
export enum LiveMarketTier {
  Emerging = 'EMERGING',
  Live = 'LIVE'
}

export type LocationSelectableInput = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

/** Look up a partnership invitee by exactly one of phone number or email. */
export type LookupInviteeInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

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

export enum MemoNarrativeCitedDataPoint {
  Arv = 'ARV',
  Comps = 'COMPS',
  Equity = 'EQUITY',
  FlipMao = 'FLIP_MAO',
  OwnerOccupied = 'OWNER_OCCUPIED',
  Rehab = 'REHAB',
  Signals = 'SIGNALS',
  YearsOwned = 'YEARS_OWNED'
}

export enum MemoNarrativeUnavailableReason {
  CitationsInvalid = 'CITATIONS_INVALID',
  InsufficientData = 'INSUFFICIENT_DATA',
  LlmFailed = 'LLM_FAILED'
}

/**
 * The feed slice the per-type counts describe. Mirrors the list query's inputs
 * MINUS any type filter — that omission is the point: the counts must stay
 * independent of which type the caller is currently filtering to, or selecting one
 * category zeroes every other one.
 */
export type NotificationTypeCountsInput = {
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NumberRangeInput = {
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
};

/**
 * The onboarding action ledger's vocabulary (INT-613). Org-grain actions
 * (ORG_NAME_ACKNOWLEDGED, TEAM_INVITE_SENT, AUTOMATIONS_EXPLORED) count as done
 * for every member once any member records them; user-grain actions (SETUP_SEEN,
 * CELEBRATION_DISMISSED) only for the viewer.
 */
export enum OnboardingActionType {
  AutomationsExplored = 'AUTOMATIONS_EXPLORED',
  CelebrationDismissed = 'CELEBRATION_DISMISSED',
  OrgNameAcknowledged = 'ORG_NAME_ACKNOWLEDGED',
  SetupSeen = 'SETUP_SEEN',
  TeamInviteSent = 'TEAM_INVITE_SENT'
}

export type OnboardingBillingAddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  line1: Scalars['String']['input'];
  line2?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
};

export enum OnboardingFlowType {
  Invited = 'INVITED',
  NewOrg = 'NEW_ORG'
}

export enum OnboardingLifecycleState {
  Completed = 'COMPLETED',
  PaymentPending = 'PAYMENT_PENDING',
  ProfilePending = 'PROFILE_PENDING'
}

export type OpenAiEmployeeChatInput = {
  agentId: Scalars['ID']['input'];
};

export enum OrgPartnershipStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING',
  Terminated = 'TERMINATED'
}

/** Org-wide flat per-signal feed, unioning over every ScraperPipeline the requesting org owns. */
export type OrgScraperPipelineSignalsInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  /** When true, drops signals in the hard-failure status set (EXTRACTION_FAILED, ENRICHMENT_FAILED, FAILED). Client view defaults to true. */
  excludeHardFailures?: InputMaybe<Scalars['Boolean']['input']>;
  first: Scalars['Int']['input'];
  /**
   * Admin-only escape hatch: when true AND the caller is a Goliath admin, unions every
   * organization's ScraperPipelines, not just the requesting org's. Silently ignored for
   * non-admin callers — they always get their own org's signals only.
   */
  includeAllOrganizations?: InputMaybe<Scalars['Boolean']['input']>;
};

/** The honest "no" cases. Each one names a different remedy. */
export enum OrgTextingBlockedReason {
  /** The campaign exists and the carriers have not approved it yet. */
  ByoCarrierReviewing = 'BYO_CARRIER_REVIEWING',
  /**
   * The connection itself is not usable — disabled by support, or its credentials
   * were rejected. The campaign may be perfectly approved; what is missing is the
   * credential every send needs.
   */
  ByoConnectionUnusable = 'BYO_CONNECTION_UNUSABLE',
  /** Connected, but the account carries no A2P campaign to send through. */
  ByoNoCampaign = 'BYO_NO_CAMPAIGN',
  /** The account has several campaigns and none has been chosen. */
  ByoSeveralCampaigns = 'BYO_SEVERAL_CAMPAIGNS',
  /**
   * The managed registration is FAILED or CLOSED — a dead end, which is exactly why
   * connecting the org's own Twilio account is re-allowed from here.
   */
  ManagedFailed = 'MANAGED_FAILED',
  /** The managed registration is submitted and moving; nothing to do but wait. */
  ManagedInProgress = 'MANAGED_IN_PROGRESS',
  /** Neither pipeline started; both entry points are still open to this org. */
  NoRegistration = 'NO_REGISTRATION'
}

export enum OrgTextingProvenance {
  /**
   * The org's own connected Twilio account. Wins whenever a live customer-owned
   * account exists, even beside a completed managed registration — the managed
   * footprint is then idle, and naming it would point the org at a pipeline it no
   * longer sends through.
   */
  CustomerTwilio = 'CUSTOMER_TWILIO',
  /** A Goliath-managed Twilio subaccount. */
  Managed = 'MANAGED',
  /** Neither pipeline has produced anything that could answer. */
  None = 'NONE'
}

export enum OrganizationBillingStatus {
  Active = 'ACTIVE',
  Negative = 'NEGATIVE',
  None = 'NONE',
  Trialing = 'TRIALING'
}

export enum OrganizationCapability {
  CanExport = 'CAN_EXPORT',
  CanSkiptrace = 'CAN_SKIPTRACE',
  CanWorkflow = 'CAN_WORKFLOW',
  ViewAllContacts = 'VIEW_ALL_CONTACTS',
  ViewAllDeals = 'VIEW_ALL_DEALS',
  ViewAllPhones = 'VIEW_ALL_PHONES'
}

export enum OrganizationGoogleAdsAccountLinkStatus {
  Active = 'ACTIVE',
  Error = 'ERROR',
  Pending = 'PENDING',
  Revoked = 'REVOKED'
}

export enum OrganizationMembershipStatus {
  Active = 'ACTIVE',
  Suspended = 'SUSPENDED'
}

export enum OrganizationToUserMappingType {
  Admin = 'ADMIN',
  Isa = 'ISA',
  Member = 'MEMBER'
}

export type OwnerFiltersInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  currentPortfolioSize?: InputMaybe<NumberRangeInput>;
  currentPortfolioValue?: InputMaybe<NumberRangeInput>;
  ownerMailingAddress?: InputMaybe<Scalars['String']['input']>;
  ownerName?: InputMaybe<Scalars['String']['input']>;
  states?: InputMaybe<Array<Scalars['String']['input']>>;
  zipcode?: InputMaybe<Scalars['String']['input']>;
};

export enum OwnerSortField {
  CurrentPortfolioSize = 'CURRENT_PORTFOLIO_SIZE',
  CurrentPortfolioValue = 'CURRENT_PORTFOLIO_VALUE',
  LastBoughtDate = 'LAST_BOUGHT_DATE',
  LastSoldDate = 'LAST_SOLD_DATE',
  Score = 'SCORE'
}

export enum OwnerType {
  Entity = 'ENTITY',
  Individual = 'INDIVIDUAL',
  Unknown = 'UNKNOWN'
}

export type PaginateOrganizationsInput = {
  hasThreshold?: InputMaybe<Scalars['Boolean']['input']>;
  pagination: PaginationInput;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export type PaginatePropertySignalsDevInput = {
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  pagination: PaginationInput;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  selectAll?: InputMaybe<Scalars['Boolean']['input']>;
  sortByEnrichmentUpdatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  statuses?: InputMaybe<Array<PropertySignalStatus>>;
  updatedAfter?: InputMaybe<Scalars['DateTime']['input']>;
  updatedBefore?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PaginateUserNotificationsInput = {
  notificationTypeFilter?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter to a SET of types, for callers whose filter is a BUCKET of many types
   * (the notification bell's category chips: "Assigned" alone spans ten types).
   * Unlike the singular `notificationTypeFilter` — which replaces the feed's
   * default inbound-comms exclusion so one exact type can be viewed by name —
   * this narrows WITHIN that exclusion: a bucket is a view of the feed, never a
   * way to widen it. The singular filter wins if both are passed.
   */
  notificationTypeFilters?: InputMaybe<Array<Scalars['String']['input']>>;
  pagination?: InputMaybe<CursorPaginationInput>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Recipients whose feeds are combined (multi-select team view). Only admins /
   * Goliath staff may pass others; everyone else is forced to their own feed
   * server-side. Empty/omitted = the caller's own notifications.
   */
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PaginateUsersInput = {
  contactOptions?: InputMaybe<ContactOptionInput>;
  organizationId?: InputMaybe<Scalars['String']['input']>;
  pagination: PaginationInput;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  userAccessTypes?: InputMaybe<Array<UserAccessType>>;
  userRoles?: InputMaybe<Array<UserRole>>;
};

export type PaginationInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type PartnerOrgAdminsInput = {
  /** The partner organization whose admins are candidate invitation recipients. */
  organizationId: Scalars['ID']['input'];
};

export enum PartnershipDirection {
  /** Both directions active. */
  Bidirectional = 'BIDIRECTIONAL',
  /** Partner org sends leads to current org only. */
  ReceiveOnly = 'RECEIVE_ONLY',
  /** Current org sends leads to partner org only. */
  SendOnly = 'SEND_ONLY'
}

export enum PersistedAgentStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Inactive = 'INACTIVE'
}

export type PersonNameSurveyResponseInput = {
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
};

/** Why a number in a bulk request was skipped or failed. */
export enum PhoneEnrichmentBatchReason {
  /** A saved result already exists, so the number was not billed again. */
  AlreadyEnriched = 'ALREADY_ENRICHED',
  /** The same number appeared earlier in the request. */
  DuplicateNumber = 'DUPLICATE_NUMBER',
  /**
   * The provider answered and the organization was charged, but saving the result
   * failed. Ask before running it again — another attempt is another charge.
   */
  PersistFailed = 'PERSIST_FAILED',
  /** The provider call failed. Nothing was saved and nothing is retried. */
  ProviderError = 'PROVIDER_ERROR',
  /** Not a ten-digit US number. */
  UnsupportedNumber = 'UNSUPPORTED_NUMBER'
}

/** What happened to one number inside a bulk phone-data request. */
export enum PhoneEnrichmentBatchStatus {
  Enriched = 'ENRICHED',
  Failed = 'FAILED',
  Skipped = 'SKIPPED'
}

/** The lifecycle state of an organization's provider connection. */
export enum PhoneEnrichmentConnectionStatus {
  Active = 'ACTIVE',
  NotConnected = 'NOT_CONNECTED',
  Revoked = 'REVOKED',
  Unverified = 'UNVERIFIED'
}

/** A provider-neutral classification of the phone line. */
export enum PhoneEnrichmentLineType {
  FixedVoip = 'FIXED_VOIP',
  Landline = 'LANDLINE',
  Mobile = 'MOBILE',
  NonFixedVoip = 'NON_FIXED_VOIP',
  Other = 'OTHER',
  Premium = 'PREMIUM',
  TollFree = 'TOLL_FREE',
  Unknown = 'UNKNOWN',
  Voicemail = 'VOICEMAIL'
}

/** An explicit phone-data operation. Reads never execute these operations. */
export enum PhoneEnrichmentOperation {
  Validate = 'VALIDATE'
}

/** Provider-neutral preferences for phone enrichment. */
export type PhoneEnrichmentProviderConfigInput = {
  callReadyScoreThreshold: Scalars['Int']['input'];
  enabledOperations: Array<PhoneEnrichmentOperation>;
  providerPriority: Scalars['Int']['input'];
  /** Provider-specific preferences only. Credentials are never stored here. */
  providerSettings?: InputMaybe<Scalars['JSON']['input']>;
  showCarrier: Scalars['Boolean']['input'];
  showLineType: Scalars['Boolean']['input'];
  showPrepaid: Scalars['Boolean']['input'];
};

/** Identifies a phone whose saved enrichment should be read. */
export type PhoneEnrichmentReadInput = {
  /** A formatted or unformatted ten-digit US phone number. */
  phone: Scalars['String']['input'];
};

/** The provider's assessment of whether a phone number is valid. */
export enum PhoneEnrichmentValidity {
  Invalid = 'INVALID',
  Unknown = 'UNKNOWN',
  Valid = 'VALID'
}

export enum PhoneNumberAvailabilityReason {
  NonFixedVoip = 'NON_FIXED_VOIP',
  Taken = 'TAKEN',
  Unknown = 'UNKNOWN'
}

export enum PhoneType {
  Landline = 'LANDLINE',
  Mobile = 'MOBILE',
  Residential = 'RESIDENTIAL',
  Unknown = 'UNKNOWN'
}

export type PinNoteInput = {
  id: Scalars['ID']['input'];
  isPinned: Scalars['Boolean']['input'];
};

export enum PlanCode {
  Growth = 'GROWTH',
  Ramp = 'RAMP',
  Scale = 'SCALE'
}

export type PostFileContext = {
  postId: Scalars['String']['input'];
};

export enum PostInterestIntent {
  Offer = 'OFFER',
  Question = 'QUESTION'
}

export enum PostOfferFinancingType {
  Cash = 'CASH',
  Conventional = 'CONVENTIONAL',
  HardMoney = 'HARD_MONEY',
  Other = 'OTHER'
}

export enum PostOfferStatus {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED',
  Submitted = 'SUBMITTED',
  UnderReview = 'UNDER_REVIEW',
  Withdrawn = 'WITHDRAWN'
}

export type PostPhotoInput = {
  order: Scalars['Int']['input'];
  uploadedFileId: Scalars['ID']['input'];
};

export type PostPropertyMetadataInput = {
  airConditioning?: InputMaybe<Scalars['String']['input']>;
  arv?: InputMaybe<Scalars['Float']['input']>;
  baths?: InputMaybe<Scalars['Float']['input']>;
  beds?: InputMaybe<Scalars['Float']['input']>;
  builtIn?: InputMaybe<Scalars['Float']['input']>;
  dealType?: InputMaybe<Scalars['String']['input']>;
  downPayment?: InputMaybe<Scalars['Float']['input']>;
  entryFee?: InputMaybe<Scalars['Float']['input']>;
  financingNotes?: InputMaybe<Scalars['String']['input']>;
  foundationCondition?: InputMaybe<Scalars['String']['input']>;
  foundationType?: InputMaybe<Scalars['String']['input']>;
  grossMargin?: InputMaybe<Scalars['Float']['input']>;
  heatingAge?: InputMaybe<Scalars['Float']['input']>;
  heatingSystem?: InputMaybe<Scalars['String']['input']>;
  interestRate?: InputMaybe<Scalars['Float']['input']>;
  loanTerm?: InputMaybe<Scalars['String']['input']>;
  lotSize?: InputMaybe<Scalars['Float']['input']>;
  occupancy?: InputMaybe<Scalars['String']['input']>;
  parking?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  propertyConditions?: InputMaybe<Array<Scalars['String']['input']>>;
  propertyType?: InputMaybe<Scalars['String']['input']>;
  repairEstimate?: InputMaybe<Scalars['Float']['input']>;
  roofAge?: InputMaybe<Scalars['Float']['input']>;
  sqft?: InputMaybe<Scalars['Float']['input']>;
  zoning?: InputMaybe<Scalars['String']['input']>;
};

export enum PostStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED'
}

export enum PostTheme {
  Bold = 'BOLD',
  Modern = 'MODERN',
  Warm = 'WARM'
}

/**
 * Ask whether a browser dial may proceed, BEFORE handing the number to the Twilio
 * Voice SDK. A rep's dial is placed client-side and never passes through a
 * resolver, so this is the only server-side consent gate the composer can meet;
 * the TwiML `DIAL_BACKSTOP` is the redundant layer behind it.
 */
export type PrecheckCallConsentInput = {
  /** The number about to be dialed, in whatever format the caller holds it. */
  phoneNumber: Scalars['String']['input'];
};

/**
 * Look at a Twilio account WITHOUT connecting it: prove the credentials work and
 * list the A2P campaigns registered in it, so the wizard can show the customer
 * what it found before anything is stored.
 *
 * A mutation rather than a query because it carries the account AUTH TOKEN — the
 * customer's master credential. Queries can travel as GET (URL, access logs,
 * browser history) and their results are cached by variables in the client; a
 * mutation is POST-only and uncached, which is the only correct transport for a
 * secret. Nothing is persisted either way.
 */
export type PreviewTwilioAccountCampaignsInput = {
  accountSid: Scalars['String']['input'];
  authToken: Scalars['String']['input'];
};

/**
 * Credentials for `previewTwilioAccount` — same contract as
 * `PreviewTwilioAccountCampaignsInput` (a mutation because it carries the master
 * auth token; nothing is persisted), its own type so the two surfaces can diverge
 * without a shared-input surprise.
 */
export type PreviewTwilioAccountInput = {
  accountSid: Scalars['String']['input'];
  authToken: Scalars['String']['input'];
};

export type PropertyAutocompleteInput = {
  addressString: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  preferDataRich?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyComparablesCriteriaInput = {
  bathroomsMax: Scalars['Float']['input'];
  bathroomsMin: Scalars['Float']['input'];
  bedroomsMax: Scalars['Int']['input'];
  bedroomsMin: Scalars['Int']['input'];
  livingAreaMax: Scalars['Int']['input'];
  livingAreaMin: Scalars['Int']['input'];
  maxDistanceMiles: Scalars['Float']['input'];
  maxSaleAgeMonths: Scalars['Int']['input'];
  propertyTypes: Array<Scalars['String']['input']>;
  yearBuiltMax: Scalars['Int']['input'];
  yearBuiltMin: Scalars['Int']['input'];
};

export type PropertyMlsIdAutocompleteInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  mlsId: Scalars['String']['input'];
  offset?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export enum PropertyMlsStatus {
  Foreclosed = 'FORECLOSED',
  ForRent = 'FOR_RENT',
  ForSale = 'FOR_SALE',
  NotOnMarket = 'NOT_ON_MARKET',
  Other = 'OTHER',
  Pending = 'PENDING',
  PreForeclosure = 'PRE_FORECLOSURE',
  RecentlySold = 'RECENTLY_SOLD',
  Sold = 'SOLD'
}

export enum PropertyOccupancyType {
  OwnerOccupied = 'OWNER_OCCUPIED',
  Unknown = 'UNKNOWN'
}

export type PropertyParcelAutocompleteInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parcelId: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyParcelOverlayInput = {
  bounds: BoundingBoxInput;
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  includeIncompleteRecords?: InputMaybe<Scalars['Boolean']['input']>;
  zoom: Scalars['Float']['input'];
};

export enum PropertyParcelOverlaySuppressionReason {
  VertexBudgetExceeded = 'VERTEX_BUDGET_EXCEEDED',
  VisibleCountExceeded = 'VISIBLE_COUNT_EXCEEDED',
  ZoomTooLow = 'ZOOM_TOO_LOW'
}

/**
 * How a person is connected to the property. Splits the two things
 * "Owners & Related Parties" used to conflate: OWNER is on the deed,
 * RELATED_PARTY has standing in the matter without owning (personal
 * representative, executor, heir, beneficiary, spouse), and
 * PROCEDURAL_PARTICIPANT is named on a filing only for attesting to its
 * execution (witness, notary, deputy clerk).
 */
export enum PropertyPersonRelationship {
  Owner = 'OWNER',
  ProceduralParticipant = 'PROCEDURAL_PARTICIPANT',
  RelatedParty = 'RELATED_PARTY'
}

export enum PropertySignalDetailValueKind {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Money = 'MONEY',
  Text = 'TEXT'
}

export enum PropertySignalStatus {
  Archived = 'ARCHIVED',
  Chunked = 'CHUNKED',
  Created = 'CREATED',
  EnrichmentCompleted = 'ENRICHMENT_COMPLETED',
  EnrichmentFailed = 'ENRICHMENT_FAILED',
  EnrichmentStarted = 'ENRICHMENT_STARTED',
  ExtractionCompleted = 'EXTRACTION_COMPLETED',
  ExtractionFailed = 'EXTRACTION_FAILED',
  ExtractionStarted = 'EXTRACTION_STARTED',
  Failed = 'FAILED',
  NoDetailsExtracted = 'NO_DETAILS_EXTRACTED'
}

export enum PropertySignalType {
  AbsenteeOwner = 'ABSENTEE_OWNER',
  Arrest = 'ARREST',
  Assignment = 'ASSIGNMENT',
  Bankruptcy = 'BANKRUPTCY',
  Citation = 'CITATION',
  CodeViolation = 'CODE_VIOLATION',
  ContinuingLien = 'CONTINUING_LIEN',
  CountyLien = 'COUNTY_LIEN',
  DebtClaims = 'DEBT_CLAIMS',
  Divorce = 'DIVORCE',
  EnforcementComplaint = 'ENFORCEMENT_COMPLAINT',
  Eviction = 'EVICTION',
  FederalLien = 'FEDERAL_LIEN',
  FinalJudgment = 'FINAL_JUDGMENT',
  Fire = 'FIRE',
  Foreclosure = 'FORECLOSURE',
  ForRentByOwner = 'FOR_RENT_BY_OWNER',
  ForRentByOwnerFailed = 'FOR_RENT_BY_OWNER_FAILED',
  ForSaleByOwner = 'FOR_SALE_BY_OWNER',
  ForSaleByOwnerFailed = 'FOR_SALE_BY_OWNER_FAILED',
  HoaLien = 'HOA_LIEN',
  InspectionFailure = 'INSPECTION_FAILURE',
  Irrelevant = 'IRRELEVANT',
  JudgmentLien = 'JUDGMENT_LIEN',
  Lien = 'LIEN',
  LienSale = 'LIEN_SALE',
  ListingFailed = 'LISTING_FAILED',
  LisPendens = 'LIS_PENDENS',
  Marriage = 'MARRIAGE',
  MechanicLien = 'MECHANIC_LIEN',
  MedicalLien = 'MEDICAL_LIEN',
  MlsFailed = 'MLS_FAILED',
  NegativeEquity = 'NEGATIVE_EQUITY',
  NoticeOfCommencement = 'NOTICE_OF_COMMENCEMENT',
  NoticeOfDefault = 'NOTICE_OF_DEFAULT',
  PermitFiling = 'PERMIT_FILING',
  PoliceIncident = 'POLICE_INCIDENT',
  Preforeclosure = 'PREFORECLOSURE',
  Preprobate = 'PREPROBATE',
  Probate = 'PROBATE',
  PropertyAuction = 'PROPERTY_AUCTION',
  PropertyJudgment = 'PROPERTY_JUDGMENT',
  QuietTitleAction = 'QUIET_TITLE_ACTION',
  QuitClaimDeed = 'QUIT_CLAIM_DEED',
  SheriffSale = 'SHERIFF_SALE',
  StateLien = 'STATE_LIEN',
  SubstitutionOfTrustee = 'SUBSTITUTION_OF_TRUSTEE',
  TaxDeedSale = 'TAX_DEED_SALE',
  TaxDelinquency = 'TAX_DELINQUENCY',
  TenantComplaint = 'TENANT_COMPLAINT',
  TrusteeSale = 'TRUSTEE_SALE',
  Unknown = 'UNKNOWN',
  UtilityLien = 'UTILITY_LIEN',
  Vacant = 'VACANT',
  ViolentCrime = 'VIOLENT_CRIME'
}

export type PropertySignalUploadContext = {
  county?: InputMaybe<Scalars['String']['input']>;
  /**
   * Provenance for the sheet, written to the file's GCS custom-metadata block —
   * the same block the extraction reads to stamp every row it creates.
   *
   * Without it a manual upload has nothing to inherit from (there is no
   * originating ScraperRecord), so its rows land with no county and no notice
   * type: invisible to every county surface and unclassifiable as a signal type.
   * `noticeType` and `county`/`state` are what make the upload a real source
   * rather than an anonymous pile of rows.
   */
  noticeType?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  tagName?: InputMaybe<Scalars['String']['input']>;
  websiteName?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export enum PropertyType {
  Apartment = 'APARTMENT',
  Commercial = 'COMMERCIAL',
  Condo = 'CONDO',
  HomeTypeUnknown = 'HOME_TYPE_UNKNOWN',
  Lot = 'LOT',
  Manufactured = 'MANUFACTURED',
  MultiFamily = 'MULTI_FAMILY',
  SingleFamily = 'SINGLE_FAMILY',
  Townhouse = 'TOWNHOUSE'
}

export type PropertyUploadContext = {
  adaptiveConfig?: InputMaybe<AdaptiveUploadConfigInput>;
  bypassStateRestrictions?: InputMaybe<Scalars['Boolean']['input']>;
  enableSkiptrace: Scalars['Boolean']['input'];
  exportFileName?: InputMaybe<Scalars['String']['input']>;
  includeInputColumns?: InputMaybe<Scalars['Boolean']['input']>;
  isAdvanced?: InputMaybe<Scalars['Boolean']['input']>;
  tagName?: InputMaybe<Scalars['String']['input']>;
};

export enum ProspectArchiveStatus {
  Active = 'ACTIVE',
  All = 'ALL',
  Archived = 'ARCHIVED',
  MyUnread = 'MY_UNREAD'
}

export type ProvisionPhoneNumberInput = {
  phoneNumber: Scalars['String']['input'];
  target: ProvisionPhoneNumberTarget;
};

export type ProvisionPhoneNumberTarget =
  { contactAgent: ProvisionToContactAgentContext; user?: never; }
  |  { contactAgent?: never; user: ProvisionToUserContext; };

export type ProvisionSendingNumberInput = {
  /** The ACTIVE campaign the number binds to. */
  campaignId: Scalars['ID']['input'];
  /** E.164 number selected from `searchSendingNumbers`. */
  phoneNumber: Scalars['String']['input'];
};

/**
 * Target a native AI employee (`Agent`). The new number is bought unassigned and
 * then attached to the employee's line pool — employees support multiple numbers,
 * so this never displaces an existing one.
 */
export type ProvisionToContactAgentContext = {
  contactAgentId: Scalars['ID']['input'];
};

export type ProvisionToUserContext = {
  makePrimary?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ID']['input'];
};

export type PublicFileUploadInput = {
  fileContentHash: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  shortCode: Scalars['String']['input'];
  type: FileUploadType;
};

export type PublicFileUploadUrlInput = {
  fileContentHash: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  shortCode: Scalars['String']['input'];
  type: FileUploadType;
};

export type PublicPostFilterInput = {
  maxPrice?: InputMaybe<Scalars['Float']['input']>;
  minBaths?: InputMaybe<Scalars['Int']['input']>;
  minBeds?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Float']['input']>;
  propertyTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type PublishAgentGoalPlanInput = {
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  planId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type ReactivateOrganizationMemberInput = {
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

/**
 * A user swearing the canonical consent attestation over one or more contacts.
 * Everything about WHO swore it (user, org, IP, user-agent) is taken from the
 * authenticated request — never from this input.
 */
export type RecordConsentAttestationInput = {
  /**
   * Selection size for batch surfaces. It is stated inside the sworn sentence, so
   * the server rebuilds that sentence from this number — pass exactly the count
   * the user saw. Null for single-contact surfaces.
   */
  batchCount?: InputMaybe<Scalars['Int']['input']>;
  /** The channel the blocked action targeted. Null for proactive surfaces (contact page, table action). */
  channel?: InputMaybe<ConsentChannel>;
  /**
   * The contact records the refusal named. Pass it through verbatim from the
   * `CONSENT_ATTESTATION_REQUIRED` error's `contactIds`; the server re-reads and
   * org-fences every id. Empty means the value matched nobody, in which case the
   * attestation mints the person `value` names.
   */
  contactIds: Array<Scalars['ID']['input']>;
  surface: ConsentAttestationSurface;
  /**
   * The phone number / email address the blocked action was aimed at. Required
   * when `contactIds` is empty. Snapshotted onto each receipt as the strongest
   * link between the oath and a person.
   */
  value?: InputMaybe<Scalars['String']['input']>;
};

export type RecordConsentInput = {
  address: Scalars['String']['input'];
  consentMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  consentTransactional?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  organizationId: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
};

export type RecordEmbedFormEventsInput = {
  events: Array<EmbedFormEventInput>;
  formId: Scalars['ID']['input'];
  /** Client-minted UUID, kept in localStorage for the session lifetime. */
  sessionId: Scalars['String']['input'];
  /**
   * Server-minted `EmbedFormViewerSession.id` (from `initializeViewer`).
   * Present once the viewer session has been initialized; absent on events
   * that fire before initialization completes. When set, the server stamps
   * it onto each `EmbedFormEvent` row so lifecycle markers can be joined
   * back to the session without the IP/time heuristic.
   */
  viewerSessionId?: InputMaybe<Scalars['ID']['input']>;
};

export type RecordEmbedFormViewerHeartbeatInput = {
  /**
   * Total active milliseconds since `startDateTime` (NOT a delta from
   * the last heartbeat). Capped server-side at 3 minutes per beat.
   */
  durationMs: Scalars['Int']['input'];
  viewerSessionId: Scalars['ID']['input'];
};

export type RecordEventWorkflowPayloadSampleInput = {
  /** A JSON object — the shape a sender would POST. Rejected if it is not an object. */
  payload: Scalars['JSON']['input'];
  workflowGroupId: Scalars['ID']['input'];
};

export type RecordOnboardingActionsInput = {
  actions: Array<OnboardingActionType>;
  /**
   * The organization the caller believed was active when the record started. It
   * must equal the caller's active organization; the rows are always written
   * under the session's org, never under this value. The app can switch orgs in
   * session, so a record already in flight would otherwise land under whichever
   * org the session resolved to by the time the request was handled — this
   * rejects that instead of misfiling it.
   */
  organizationId: Scalars['ID']['input'];
};

export type RecordSubscriptionDisclosureAcceptanceInput = {
  /** ISO timestamp the browser recorded when the customer checked the consent box. */
  acceptedAtIso: Scalars['String']['input'];
  /** Exact disclosure + consent text the browser rendered. Stored for tamper cross-checking only — disputes quote the server-rebuilt canonical wording, not this. */
  disclosureText: Scalars['String']['input'];
  /** Version of the disclosure wording the customer saw (SUBSCRIPTION_DISCLOSURE_VERSION). */
  disclosureVersion: Scalars['Int']['input'];
  /** Short slug for the UI entry point that opened the consent dialog (e.g. files_download_block). Recorded as evidence context. */
  entryPoint?: InputMaybe<Scalars['String']['input']>;
  /** PNG data-URL screenshot of the consent dialog as rendered at the moment of acceptance. Stored in the private evidence bucket and embedded in dispute rebuttals. */
  screenshotPngDataUrl?: InputMaybe<Scalars['String']['input']>;
  /** Stripe subscription the acceptance is for. Validated against the caller's org. */
  subscriptionId: Scalars['ID']['input'];
  /** Which consent surface this acceptance came from. Defaults to SUBSCRIPTION_START. */
  surface?: InputMaybe<SubscriptionConsentSurface>;
  /** Browser IANA timezone; invalid/missing is tolerated (stored as-is for context). */
  timeZone?: InputMaybe<Scalars['String']['input']>;
};

export type RecordUserSessionEventInput = {
  clientEventId: Scalars['ID']['input'];
  eventType: UserSessionEventType;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  occurredAt: Scalars['DateTime']['input'];
  route?: InputMaybe<Scalars['String']['input']>;
  sessionId: Scalars['String']['input'];
  tabId: Scalars['String']['input'];
};

export type RecordViewingHeartbeatInput = {
  durationMs: Scalars['Int']['input'];
  sessionId: Scalars['ID']['input'];
};

export type RefundOrganizationCreditsInput = {
  creditType: CreditType;
  organizationId: Scalars['ID']['input'];
  reason: Scalars['String']['input'];
  units: Scalars['Int']['input'];
};

/**
 * Brand registration form (wizard steps 1–2, plus the step-3 first campaign). Every brand
 * registers with a campaign: the step-3 fields become an UNSUBMITTED MessageProvisionCampaign
 * bound to the new brand, submitted once the brand is approved — see parsers.ts for the lifecycle.
 */
export type RegisterA2pBrandInput = {
  brandName?: InputMaybe<Scalars['String']['input']>;
  businessType: CampaignBusinessType;
  /** First campaign's description — required; the brand can't register without a campaign. */
  campaignDescription?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  /** EIN / Tax ID. Required for every entity type except SOLE_PROPRIETOR. */
  ein?: InputMaybe<Scalars['String']['input']>;
  /** Brand contact email — required by the registrar. */
  email: Scalars['String']['input'];
  industry: CampaignIndustry;
  legalBusinessName: Scalars['String']['input'];
  /** First campaign's opt-in / message-flow narrative — required. */
  messageFlow?: InputMaybe<Scalars['String']['input']>;
  /**
   * Brand contact phone. The live registrar answers `POST /brands` with
   * `{"errors":{"PhoneNumber":["The PhoneNumber field is required."]}}` when it is absent,
   * even though the published OpenAPI marks it optional — the same spec-lies-about-required
   * pattern already found on seven campaign fields.
   */
  phone: Scalars['String']['input'];
  /** Carriers FETCH and VERIFY this URL — the registrar requires it on every campaign the brand owns. */
  privacyPolicyUrl: Scalars['String']['input'];
  /** First campaign's sample messages — at least one required. */
  sampleMessages?: InputMaybe<Array<Scalars['String']['input']>>;
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  /** User's acceptance of the registrar's campaign terms (the no-affiliate-marketing attestation). Must be true. */
  termsAndConditionsAccepted: Scalars['Boolean']['input'];
  /** Carriers FETCH and VERIFY this URL too. */
  termsAndConditionsUrl: Scalars['String']['input'];
  /** Use case for the first campaign. MIXED_MARKETING defaults its sub-use-cases server-side (none are collected here). */
  useCase: CampaignUseCase;
  website?: InputMaybe<Scalars['String']['input']>;
  zip: Scalars['String']['input'];
};

export type RegisterPushSubscriptionInput = {
  authKey: Scalars['String']['input'];
  endpoint: Scalars['String']['input'];
  p256dh: Scalars['String']['input'];
  userAgent?: InputMaybe<Scalars['String']['input']>;
};

/** Fields the registrar requires to register a sending campaign (A2P campaign). */
export type RegisterSendingCampaignInput = {
  /** The APPROVED brand (MessagingProviderBrand) this campaign registers against. */
  brandId: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  messageFlow: Scalars['String']['input'];
  sampleMessages: Array<Scalars['String']['input']>;
  /** Required when useCase is MIXED_MARKETING. */
  subUseCases?: InputMaybe<Array<CampaignUseCase>>;
  /** User's acceptance of the registrar's campaign terms (the no-affiliate-marketing attestation). Must be true. */
  termsAndConditionsAccepted: Scalars['Boolean']['input'];
  useCase: CampaignUseCase;
};

export type RejectPartnershipInvitationInput = {
  partnerOrgId: Scalars['ID']['input'];
};

export type RelativeDate = {
  isMoreThan: Scalars['Boolean']['input'];
  timeline: RelativeDateTimelineEnum;
};

export enum RelativeDateTimelineEnum {
  OneMonth = 'ONE_MONTH',
  OneWeek = 'ONE_WEEK',
  ThreeMonth = 'THREE_MONTH',
  TwoMonth = 'TWO_MONTH',
  TwoWeek = 'TWO_WEEK'
}

export type ReleasePhoneNumberContext = {
  dependencyResolution: DependencyResolutionInput;
};

export type RenderContentTemplateInput = {
  contactId?: InputMaybe<Scalars['ID']['input']>;
  contentTemplateId: Scalars['ID']['input'];
  spintaxSeed?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Render UNSAVED editor content against caller-supplied sample merge values — the
 * template editor's live preview. See TemplateRenderer.renderSampleContentWithMeta.
 */
export type RenderContentTemplatePreviewInput = {
  bodyContent: Scalars['String']['input'];
  bodyFormat: Scalars['String']['input'];
  context: Array<ContentTemplateContextEntryInput>;
  spintaxSeed?: InputMaybe<Scalars['Int']['input']>;
  subjectContent?: InputMaybe<Scalars['String']['input']>;
};

export enum RenovationType {
  Heavy = 'HEAVY',
  Light = 'LIGHT',
  Moderate = 'MODERATE',
  None = 'NONE'
}

export type ReorderAfterCallActionItemInput = {
  displayOrder: Scalars['Int']['input'];
  kind: AfterCallActionKind;
};

export type ReorderAfterCallActionsInput = {
  /** Must list every action kind exactly once. */
  items: Array<ReorderAfterCallActionItemInput>;
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
export enum ReplySentiment {
  Negative = 'NEGATIVE',
  Neutral = 'NEUTRAL',
  OptOut = 'OPT_OUT',
  Positive = 'POSITIVE',
  Unreachable = 'UNREACHABLE'
}

export enum RetryRunOutcome {
  AlreadyRunning = 'ALREADY_RUNNING',
  Retried = 'RETRIED',
  StaleRun = 'STALE_RUN'
}

/** Corrected campaign fields for a REJECTED sending campaign resubmission. */
export type RetrySendingCampaignInput = {
  campaignId: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  messageFlow: Scalars['String']['input'];
  sampleMessages: Array<Scalars['String']['input']>;
  subUseCases?: InputMaybe<Array<CampaignUseCase>>;
  /** Fresh acceptance of the registrar's campaign terms — a resubmission re-attests. Must be true. */
  termsAndConditionsAccepted: Scalars['Boolean']['input'];
  useCase: CampaignUseCase;
};

export enum RingPolicyAiRotation {
  RoundRobin = 'ROUND_ROBIN',
  Single = 'SINGLE'
}

export type RingPolicyAiStageInput = {
  agentIds: Array<Scalars['ID']['input']>;
  rotation: RingPolicyAiRotation;
};

export type RingPolicyHumanStageInput = {
  areaCodeForwardingMap?: InputMaybe<Scalars['JSON']['input']>;
  externalE164?: InputMaybe<Scalars['String']['input']>;
  phoneLineIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  ringSeconds: Scalars['Int']['input'];
  schedule?: InputMaybe<ContactAgentCallScheduleInput>;
  targetKind: CallRoundRobinTargetKind;
  userGroupId?: InputMaybe<Scalars['ID']['input']>;
};

export type RingPolicyInput = {
  aiStage?: InputMaybe<RingPolicyAiStageInput>;
  humanStage?: InputMaybe<RingPolicyHumanStageInput>;
};

export enum RingPolicyPickupBlockedReason {
  InvalidSetup = 'INVALID_SETUP',
  NoCallChannel = 'NO_CALL_CHANNEL',
  NoVoiceShell = 'NO_VOICE_SHELL',
  Paused = 'PAUSED'
}

export type RunAreaResearchInput = {
  /**
   * One county FIPS code to research. Multi-county kicks are one mutation call
   * per county, fired concurrently by the client.
   */
  countyFips: Scalars['String']['input'];
  /** Optional task/narrowing prompt; defaults to a full source-discovery pass. */
  userPrompt?: InputMaybe<Scalars['String']['input']>;
};

export type SaveFilterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * The folder this filter is saved into, by `FilterFolder.id`. Null saves it
   * ungrouped; omitted is the same for a create.
   *
   * PRIVACY FOLLOWS THE FOLDER, and on this input it is resolved BEFORE the row is
   * inserted. Filing into a personal folder makes the filter private and filing
   * into a shared one makes it shared, so an `isPrivate` sent alongside does not
   * override that — the folder is the answer. Saving with `isPrivate` omitted into
   * a personal folder therefore never leaves the filter briefly readable by the
   * whole organization, which is what would happen if the placement corrected it
   * afterwards.
   *
   * For the same reason a `folderId` that does not resolve fails the save OUTRIGHT,
   * before any row exists. Filing another user's private filter into your own
   * personal folder is refused rather than silently transferring it, and a folder
   * on a different surface than the filter's `type`, in another organization, or
   * one you cannot see, is refused too.
   */
  folderId?: InputMaybe<Scalars['ID']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  organizationId?: InputMaybe<Scalars['String']['input']>;
  queryOptions?: InputMaybe<Scalars['JSON']['input']>;
  root: Scalars['JSON']['input'];
  type: FilterType;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SaveScraperPipelineCreateContactAutomationInput = {
  config: Scalars['JSON']['input'];
  propertyFilter: Scalars['JSON']['input'];
  scraperPipelineId: Scalars['ID']['input'];
};

export type ScraperPipelineActivityInput = {
  after?: InputMaybe<Scalars['String']['input']>;
  /** Only include signals ingested at or after this instant (inclusive). */
  createdAfter?: InputMaybe<Scalars['DateTime']['input']>;
  /** Only include signals ingested at or before this instant (inclusive). */
  createdBefore?: InputMaybe<Scalars['DateTime']['input']>;
  /** When true, drops signals in the hard-failure status set (EXTRACTION_FAILED, ENRICHMENT_FAILED, FAILED) so the activity feed reflects only client-visible work. */
  excludeHardFailures?: InputMaybe<Scalars['Boolean']['input']>;
  first: Scalars['Int']['input'];
  /** Filter to signals whose enriched signal type is in this set. Null/empty includes all. */
  signalTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum ScraperPipelineIngestionBucket {
  Day = 'DAY',
  Week = 'WEEK'
}

export type ScraperPipelineIngestionTimeSeriesInput = {
  bucket: ScraperPipelineIngestionBucket;
  /** When true, hard-failure-status signals are excluded from totals and bySignalType counts. */
  excludeHardFailures?: InputMaybe<Scalars['Boolean']['input']>;
  /** Number of buckets to look back from now (e.g. 30 days, 12 weeks). Capped server-side. */
  lookback: Scalars['Int']['input'];
  /** Optional whitelist of PropertySignalType values; null/empty includes all (incl. unknown). */
  signalTypes?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * Priority band on a scraper pipeline. Both axes are INTERNAL — `clientPriority`
 * ranks customers against each other and must never appear on a client-facing type.
 */
export enum ScraperPipelinePriority {
  High = 'HIGH',
  Low = 'LOW',
  Medium = 'MEDIUM'
}

/**
 * Pipeline lifecycle. NOTE: this enum is rendered to CUSTOMERS in the Custom Data
 * view, so TESTING and BLOCKED carry deliberate customer copy in
 * `getScraperPipelineStatusDisplay` (BLOCKED shows as "On hold").
 */
export enum ScraperPipelineStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
  Implementing = 'IMPLEMENTING',
  Paused = 'PAUSED',
  RequestReceived = 'REQUEST_RECEIVED',
  Testing = 'TESTING'
}

export enum ScraperRecordKind {
  File = 'FILE',
  Json = 'JSON'
}

/** User-actionable classification of a per-property Search Console fetch failure. UNKNOWN means we couldn't bucket the underlying error — the UI shows a generic banner while ops triage via `detail`. */
export enum SearchConsoleErrorKind {
  /** Refresh token revoked, expired, or rotated under a different OAuth client. Same root cause as Google Ads AUTH_EXPIRED — they share the token. Fix: re-mint the MCC refresh token and rotate the server-config secret. */
  AuthExpired = 'AUTH_EXPIRED',
  /** The OAuth principal isn't on this site's Search Console user list (or has the wrong permission level). Fix: add the integration user as a Full User on the property at https://search.google.com/search-console/users. */
  SiteInaccessible = 'SITE_INACCESSIBLE',
  Unknown = 'UNKNOWN'
}

export type SearchPropertySignalGrain1Input = {
  actorStageStatuses?: InputMaybe<Array<Scalars['String']['input']>>;
  attemptOutcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  attemptSkipReasons?: InputMaybe<Array<Scalars['String']['input']>>;
  attemptStrategyVariants?: InputMaybe<Array<Scalars['String']['input']>>;
  attemptedMappingStrategies?: InputMaybe<Array<Scalars['String']['input']>>;
  attemptedMappingStrategiesMode?: InputMaybe<Scalars['String']['input']>;
  availableMappingInputs?: InputMaybe<Array<Scalars['String']['input']>>;
  availableMappingInputsMode?: InputMaybe<Scalars['String']['input']>;
  countyFips?: InputMaybe<Scalars['String']['input']>;
  detailsStageStatuses?: InputMaybe<Array<Scalars['String']['input']>>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  enrichmentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  extractionSubStages?: InputMaybe<Array<Scalars['String']['input']>>;
  failureReasonCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  mappingWriteStageStatuses?: InputMaybe<Array<Scalars['String']['input']>>;
  matchStrategies?: InputMaybe<Array<Scalars['String']['input']>>;
  matchedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  maxEnrichmentCount?: InputMaybe<Scalars['Int']['input']>;
  minEnrichmentCount?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  propertyIds?: InputMaybe<Array<Scalars['String']['input']>>;
  propertySignalTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  propertyStageStatuses?: InputMaybe<Array<Scalars['String']['input']>>;
  publicationSortDirection?: InputMaybe<Scalars['String']['input']>;
  scraperKey?: InputMaybe<Scalars['String']['input']>;
  scraperKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  signalIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  stageFailureCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  stateAbbv?: InputMaybe<Scalars['String']['input']>;
  statuses?: InputMaybe<Array<Scalars['String']['input']>>;
  terminalOutcomes?: InputMaybe<Array<Scalars['String']['input']>>;
  unmatchedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAtAfter?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAtBefore?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Which of the connected account's own A2P campaigns every number should send through. */
export type SelectTwilioAccountCampaignInput = {
  /** A `QE…` campaign SID from `connectedTwilioAccountCampaigns`. */
  a2pCampaignSid: Scalars['String']['input'];
};

export type SendAiEmployeeChatMessageInput = {
  message: Scalars['String']['input'];
  origin?: InputMaybe<AgentSessionUserMessageOrigin>;
  sessionId: Scalars['ID']['input'];
};

export type SendCampaignReplyInput = {
  body: Scalars['String']['input'];
  conversationId: Scalars['ID']['input'];
};

export type SendContactAgentSimEmailTurnInput = {
  agentId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
  contactId: Scalars['ID']['input'];
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type SendContactAgentSimTurnInput = {
  agentId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
  contactId: Scalars['ID']['input'];
};

export enum SendEmailFailureReason {
  AttachmentsTooLarge = 'ATTACHMENTS_TOO_LARGE',
  ContactDoNotContact = 'CONTACT_DO_NOT_CONTACT',
  InvalidSender = 'INVALID_SENDER',
  NoConnectedMailbox = 'NO_CONNECTED_MAILBOX',
  ProviderSendFailed = 'PROVIDER_SEND_FAILED',
  RecipientOptedOut = 'RECIPIENT_OPTED_OUT'
}

export type SendEmailInput = {
  /**
   * Whether Gmail should append the selected/default synced signature after the
   * authored body. Omitted preserves the current behavior (append when available).
   * False guarantees the submitted body is sent without a Goliath-appended signature.
   */
  appendSignature?: InputMaybe<Scalars['Boolean']['input']>;
  attachments?: InputMaybe<Array<EmailAttachmentInput>>;
  bcc?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Stringified TipTap email body doc. Preferred over bodyHtml — the server
   * validates and renders it; when both are present, bodyDoc wins.
   */
  bodyDoc?: InputMaybe<Scalars['String']['input']>;
  /** @deprecated Send bodyDoc — TipTap JSON is the email body source of truth; bodyHtml survives only for stale clients. */
  bodyHtml?: InputMaybe<Scalars['String']['input']>;
  cc?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Optional contact ID to associate this email with.
   * When provided, an email activity will be created for the contact's timeline.
   */
  contactId?: InputMaybe<Scalars['ID']['input']>;
  fromClientId: Scalars['String']['input'];
  fromEmail: Scalars['String']['input'];
  /**
   * Optional last message ID in the thread being replied to.
   * Used as a fallback to resolve the Gmail thread ID when the thread record has been merged.
   */
  lastMessageId?: InputMaybe<Scalars['ID']['input']>;
  signatureSendAsEmail?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
  /**
   * Optional thread ID to associate this reply with an existing email thread.
   * When provided, the sent email will be added to the existing thread instead of creating a new one.
   */
  threadId?: InputMaybe<Scalars['ID']['input']>;
  to: Array<Scalars['String']['input']>;
};

export type SendEmbedFormSlackTestMessageInput = {
  formId: Scalars['ID']['input'];
  slackChannelId: Scalars['String']['input'];
};

export type SendFilterAgentSessionTurnInput = {
  agentKind: Scalars['String']['input'];
  agentSessionId?: InputMaybe<Scalars['ID']['input']>;
  body: Scalars['String']['input'];
  modelEnum?: InputMaybe<Scalars['String']['input']>;
};

export type SendMeetingNotetakerInput = {
  /** Contacts the meeting summary note(s) will land on. */
  contactIds: Array<Scalars['ID']['input']>;
  /** Google Meet, Teams, or Zoom meeting link the bot should join. */
  meetingUrl: Scalars['String']['input'];
};

export type SendScraperPipelineSlackSampleMessageInput = {
  scraperPipelineId: Scalars['ID']['input'];
  slackChannelId: Scalars['String']['input'];
};

export type SendUserMessageInput = {
  attachments?: InputMaybe<Array<ChatAttachmentInput>>;
  body: Scalars['String']['input'];
  clientMessageId: Scalars['ID']['input'];
  context?: InputMaybe<Array<ChatContextInput>>;
  sessionId: Scalars['ID']['input'];
};

export enum ServiceType {
  DataCleaning = 'DATA_CLEANING',
  Skiptrace = 'SKIPTRACE'
}

export type SetAfterCallActionInput = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  kind: AfterCallActionKind;
};

export type SetAiEmployeeScheduleInput = {
  attachmentId: Scalars['ID']['input'];
  schedule: AiEmployeeScheduleInput;
};

export type SetAssignmentPolicyInput = {
  agentAssigneeIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  assigneeUserIds: Array<Scalars['ID']['input']>;
  owner: AssignmentPolicyOwnerInput;
  participantUserIds: Array<Scalars['ID']['input']>;
  tags: Array<Scalars['String']['input']>;
  teamIds: Array<Scalars['ID']['input']>;
  workflowGroupIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type SetCallCardFieldsInput = {
  /**
   * The whole list, in the order it should render — this replaces the current one
   * rather than adding to it. De-duped server-side; more than 8 is rejected.
   */
  customFieldIds: Array<Scalars['ID']['input']>;
};

export type SetContactAgentDefaultAssigneesInput = {
  agentId: Scalars['ID']['input'];
  assigneeUserIds: Array<Scalars['ID']['input']>;
  participantUserIds: Array<Scalars['ID']['input']>;
};

export type SetContactAgentStatusInput = {
  id: Scalars['ID']['input'];
  status: ContactAgentStatus;
};

export type SetContactAgentTriggerFormsInput = {
  agentId: Scalars['ID']['input'];
  formIds: Array<Scalars['ID']['input']>;
};

export type SetContactDoNotContactInput = {
  contactId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type SetExternalApiKeyEnabledInput = {
  enabled: Scalars['Boolean']['input'];
  id: Scalars['ID']['input'];
};

export type SetOrgDefaultRingPolicyInput = {
  policy?: InputMaybe<RingPolicyInput>;
};

export type SetOrganizationCommissionEligibilityInput = {
  eligible: Scalars['Boolean']['input'];
  organizationId: Scalars['ID']['input'];
};

export type SetOrganizationHasToSignContractInput = {
  hasToSignContract: Scalars['Boolean']['input'];
  organizationId: Scalars['ID']['input'];
};

export type SetOrganizationNjAccessInput = {
  enabled: Scalars['Boolean']['input'];
  organizationId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

/** Partial update of one outcome — an omitted field is left untouched. */
export type SetOutcomeSettingInput = {
  /**
   * The whole ordered list of actions this outcome offers — this REPLACES the
   * current one rather than adding to it. Omit to leave it alone; send an empty
   * list to make the outcome offer nothing. De-duped by kind server-side.
   */
  actions?: InputMaybe<Array<CallOutcomeActionInput>>;
  /**
   * Removes the workspace's label override, restoring the default. Needed because
   * a null `label` is indistinguishable from an omitted one over the wire.
   */
  clearLabel?: InputMaybe<Scalars['Boolean']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  keepsInFollowUpSet?: InputMaybe<Scalars['Boolean']['input']>;
  kind: CallOutcomeKind;
  /** 1–24 characters after trimming. Omit to leave the current label alone. */
  label?: InputMaybe<Scalars['String']['input']>;
};

export type SetPhoneDoNotContactInput = {
  /** True suppresses both SMS and VOICE; false clears both channels. */
  doNotContact: Scalars['Boolean']['input'];
  /** Optional human-readable provenance, stored on the suppression and its audit events. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Phone number in any accepted format. */
  value: Scalars['String']['input'];
};

export type SetPhoneLineRingPolicyInput = {
  phoneLineId: Scalars['ID']['input'];
  policy?: InputMaybe<RingPolicyInput>;
};

export type SetUserGroupMembersInput = {
  id: Scalars['ID']['input'];
  memberUserIds: Array<Scalars['ID']['input']>;
};

export enum ShareContactAssignmentRole {
  Participant = 'PARTICIPANT',
  PointPerson = 'POINT_PERSON'
}

export type ShareContactInput = {
  assignments: Array<ShareContactUserAssignmentInput>;
  excludeNoteIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  includeCalls?: InputMaybe<Scalars['Boolean']['input']>;
  includeContactCore?: InputMaybe<Scalars['Boolean']['input']>;
  includeNotes?: InputMaybe<Scalars['Boolean']['input']>;
  includeTasks?: InputMaybe<Scalars['Boolean']['input']>;
  includeTexts?: InputMaybe<Scalars['Boolean']['input']>;
  sourceContactId: Scalars['ID']['input'];
  targetOrganizationId: Scalars['ID']['input'];
};

export type ShareContactUserAssignmentInput = {
  createTask?: InputMaybe<CreateTaskInput>;
  role: ShareContactAssignmentRole;
  userId: Scalars['ID']['input'];
};

/**
 * Preview what an AI text node would generate for specific contacts.
 * `systemPrompt` comes from the editor's draft state (not the saved node)
 * so unsaved prompt edits preview correctly.
 */
export type SimulateWorkflowTextGenerationInput = {
  /** Contacts to preview against. 1–5 unique ids; each costs one uncached LLM call. */
  contactIds: Array<Scalars['ID']['input']>;
  systemPrompt: Scalars['String']['input'];
};

export enum SkipTraceStatus {
  Failed = 'FAILED',
  NotEnoughBalance = 'NOT_ENOUGH_BALANCE',
  NoRecordsFound = 'NO_RECORDS_FOUND',
  Processing = 'PROCESSING',
  RecordsFound = 'RECORDS_FOUND'
}

export type SkiptraceAndCreateContactsFromPropertiesContext = {
  /**
   * Contact list ids to add every newly created contact to, in addition to the
   * auto-created export list. Optional.
   */
  contactListIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Workflow group ids to enroll every newly created contact in once the contact
   * has been created. Optional.
   */
  contactWorkflowIds?: InputMaybe<Array<Scalars['String']['input']>>;
  enrichContacts: EnrichContactOptionsInput;
  properties: BulkTaskInput;
};

export type SkiptraceAndExportPropertiesContext = {
  properties: BulkTaskInput;
};

export type Sort = {
  direction: SortDirection;
  field: Scalars['String']['input'];
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type SquashVectorsInput = {
  content: Scalars['String']['input'];
  vectorIds: Array<Scalars['ID']['input']>;
};

export type StandardExportInput = {
  context: ExportContext;
  estimatedItemCount: Scalars['Int']['input'];
  fileName?: InputMaybe<Scalars['String']['input']>;
};

export type StandardFileUploadInput = {
  audioMetadata?: InputMaybe<AudioCaptureMetadataInput>;
  context?: InputMaybe<UploadContext>;
  file: FileUploadInput;
  uploadedFileId?: InputMaybe<Scalars['ID']['input']>;
};

export enum StateEnum {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  As = 'AS',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  Dc = 'DC',
  De = 'DE',
  Fl = 'FL',
  Ga = 'GA',
  Gu = 'GU',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Pr = 'PR',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tt = 'TT',
  Tx = 'TX',
  Ut = 'UT',
  Va = 'VA',
  Vi = 'VI',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY'
}

export type StopAiEmployeeRunsInput = {
  /** The AI employee whose live run on the contact should stop. */
  agentId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
};

export enum StopAiEmployeeRunsOutcome {
  /** No live run existed for this employee on this contact. */
  NothingRunning = 'NOTHING_RUNNING',
  /** At least one live run was told to stop; descendant sessions stop with it. */
  StopRequested = 'STOP_REQUESTED'
}

export enum StopRunOutcome {
  AlreadyTerminal = 'ALREADY_TERMINAL',
  StaleRun = 'STALE_RUN',
  StopRequested = 'STOP_REQUESTED'
}

export type SubContactMutationInput = {
  contactId: Scalars['String']['input'];
  emails?: InputMaybe<Array<CreateContactEmailInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  relation?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitContactAgentSimFormSubmissionInput = {
  agentId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
  embedFormId: Scalars['ID']['input'];
  submittedData: Scalars['JSON']['input'];
};

export type SubmitEmbedFormInput = {
  agreedToTerms?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * Cloudflare Turnstile token. Unused in v1 — plumbed so Turnstile can be
   * enabled later with zero schema change.
   */
  captchaToken?: InputMaybe<Scalars['String']['input']>;
  /**
   * Client-minted RFC 4122 UUID identifying one logical submission attempt.
   * The client keeps it stable across retries of the same submission (double
   * taps, error-and-resubmit, page reload) and rotates it only after a
   * successful submit. The server uses it to make contact creation idempotent,
   * so a visitor retrying a failed submit doesn't mint duplicate contacts.
   * Optional for backwards compatibility with cached embed bundles.
   */
  clientSubmissionId?: InputMaybe<Scalars['ID']['input']>;
  consentMarketing?: InputMaybe<Scalars['Boolean']['input']>;
  consentTransactional?: InputMaybe<Scalars['Boolean']['input']>;
  durationMinutes?: InputMaybe<Scalars['Int']['input']>;
  fieldValues: Scalars['JSON']['input'];
  filledFieldKeys?: InputMaybe<Array<Scalars['String']['input']>>;
  formId: Scalars['ID']['input'];
  /**
   * Bot trap. Hidden on-screen, should always be empty in real submissions.
   * If non-empty, the submission is silently dropped and a fake success is returned.
   */
  honeypot?: InputMaybe<Scalars['String']['input']>;
  /**
   * Snapshot of session state at submit time. Used to stamp the viewer
   * session in one write rather than waiting for a final ABANDON event
   * (which never fires on the success path).
   */
  lastFieldKey?: InputMaybe<Scalars['String']['input']>;
  /** Host page URL at the time of submission, for referrer attribution. */
  referrerUrl?: InputMaybe<Scalars['String']['input']>;
  /** Calendar booking fields (required when the form contains a calendar field). */
  slotStartTime?: InputMaybe<Scalars['String']['input']>;
  /**
   * Comma-separated tag names from the embed script tag's `tags` attribute.
   * Each tag is created if it doesn't exist and applied to the contact.
   */
  tags?: InputMaybe<Scalars['String']['input']>;
  /**
   * UTM attribution params captured from the host page URL
   * (e.g. { utm_source, utm_medium, utm_campaign }).
   * Stored as submission metadata.
   */
  utm?: InputMaybe<Scalars['JSON']['input']>;
  /**
   * Server-minted `EmbedFormViewerSession.id`. Passed so the server can
   * stamp `submittedAt` / `endDateTime` / `lastFieldKey` / `filledFieldKeys`
   * on the session row in one write — lets the analytics funnel mart treat
   * the session row as source of truth for completion.
   */
  viewerSessionId?: InputMaybe<Scalars['ID']['input']>;
  visitorTimezone?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitOnboardingProfileInput = {
  cities?: InputMaybe<Array<Scalars['String']['input']>>;
  counties?: InputMaybe<Array<Scalars['String']['input']>>;
  howDidYouHearAboutUs: Scalars['String']['input'];
  name: PersonNameSurveyResponseInput;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  rewardfulReferralId?: InputMaybe<Scalars['String']['input']>;
  role: UserRole;
  states?: InputMaybe<Array<StateEnum>>;
  zipCodes?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SubmitPostInterestInput = {
  intent: PostInterestIntent;
  message?: InputMaybe<Scalars['String']['input']>;
  offer?: InputMaybe<SubmitPostOfferInput>;
  postViewerId?: InputMaybe<Scalars['ID']['input']>;
  shortCode: Scalars['String']['input'];
  submittedByEmail?: InputMaybe<Scalars['String']['input']>;
  submittedByName?: InputMaybe<Scalars['String']['input']>;
  submittedByPhone?: InputMaybe<Scalars['String']['input']>;
};

export type SubmitPostOfferInput = {
  earnestMoneyCents?: InputMaybe<Scalars['BigInt']['input']>;
  financingDetails?: InputMaybe<Scalars['String']['input']>;
  financingType: PostOfferFinancingType;
  inspectionPeriodDays?: InputMaybe<Scalars['Int']['input']>;
  noteToSeller?: InputMaybe<Scalars['String']['input']>;
  offerAmountCents: Scalars['BigInt']['input'];
  proofOfFundsFileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  targetClosingDate?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Which consent surface recorded a subscription disclosure acceptance — each has its own versioned wording. */
export enum SubscriptionConsentSurface {
  /** An in-place change to an existing paid subscription (plan switch, seat change). */
  SubscriptionChange = 'SUBSCRIPTION_CHANGE',
  /** Committing to a new recurring subscription (ending a trial, first subscribe). */
  SubscriptionStart = 'SUBSCRIPTION_START'
}

export type SuggestLowerRiskSmsVariantsInput = {
  /** The SMS body to rewrite. May contain {{merge_field}} tokens, which are preserved. */
  body: Scalars['String']['input'];
  /** Business/brand name to identify the sender in each rewrite. Optional. */
  brandName?: InputMaybe<Scalars['String']['input']>;
  /** How many variants to return (1–5). Defaults to 3. */
  count?: InputMaybe<Scalars['Int']['input']>;
};

export type SuggestSpintaxVariantsInput = {
  /** The message to rewrite. May contain {{merge_field}} tokens, preserved verbatim. */
  body: Scalars['String']['input'];
};

/** Input for the suggestedBookingFromMessage query. */
export type SuggestedBookingFromMessageInput = {
  /** The TwilioMessage.id of the inbound SMS to derive a suggestion from. */
  twilioMessageId: Scalars['ID']['input'];
  /**
   * IANA timezone of the viewer's browser (e.g. America/Los_Angeles), used to
   * resolve relative phrases like "Monday" or "tomorrow" against a concrete day.
   * Sourced client-side via Intl.DateTimeFormat().resolvedOptions().timeZone.
   */
  viewerTimezone: Scalars['String']['input'];
};

export type SuppressChannelInput = {
  medium: SuppressionMedium;
  /** Optional human-readable provenance, stored on the suppression and its audit event. */
  reason?: InputMaybe<Scalars['String']['input']>;
  /** Phone number (any format — normalized to 10-digit NANP or E.164) or email address. */
  value: Scalars['String']['input'];
};

/** The channel a value-level opt-out suppresses. SMS/VOICE take a phone value; EMAIL takes an email address. */
export enum SuppressionMedium {
  Email = 'EMAIL',
  Sms = 'SMS',
  Voice = 'VOICE'
}

export type SuspendOrganizationMemberInput = {
  organizationId: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type TaskFilterInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  pagination?: InputMaybe<CursorPaginationInput>;
  participantOrganizationIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sourceGrnPrefix?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  taskStatus?: InputMaybe<TaskStatus>;
  timezone?: InputMaybe<Timezone>;
  unassignedOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TaskStatus {
  Future = 'FUTURE',
  Overdue = 'OVERDUE',
  Today = 'TODAY'
}

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

export enum TaskTemplateRelativeTimeUnit {
  Days = 'DAYS',
  Months = 'MONTHS',
  Weeks = 'WEEKS'
}

export type TaskTemplateTimeOfDayInput = {
  hour: Scalars['Int']['input'];
  minute: Scalars['Int']['input'];
  timezone: Timezone;
};

export type TerminatePartnershipInput = {
  partnerOrgId: Scalars['ID']['input'];
};

export enum TextMessageStatus {
  Delivered = 'DELIVERED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Sent = 'SENT',
  Skipped = 'SKIPPED'
}

export enum TimeUnit {
  Days = 'DAYS',
  Hours = 'HOURS',
  Minutes = 'MINUTES',
  Months = 'MONTHS',
  Weeks = 'WEEKS',
  Years = 'YEARS'
}

export enum Timezone {
  Aest = 'AEST',
  Akst = 'AKST',
  Ast = 'AST',
  Azot = 'AZOT',
  Brt = 'BRT',
  Bst = 'BST',
  Cet = 'CET',
  Cst = 'CST',
  Eet = 'EET',
  Est = 'EST',
  Fnt = 'FNT',
  Gst = 'GST',
  Hst = 'HST',
  Ict = 'ICT',
  Idlw = 'IDLW',
  Jst = 'JST',
  Msk = 'MSK',
  Mst = 'MST',
  Nct = 'NCT',
  Nzst = 'NZST',
  Pkt = 'PKT',
  Pst = 'PST',
  Sst = 'SST',
  Utc = 'UTC'
}

export type ToggleBulkNotificationSeenInput = {
  isSeen: Scalars['Boolean']['input'];
  notIncludedNotificationIds?: InputMaybe<Array<Scalars['String']['input']>>;
  notificationTypeFilter?: InputMaybe<Scalars['String']['input']>;
  /**
   * Filter to a SET of types, for a caller whose filter is a BUCKET of many types.
   * Same singular-vs-plural split as `PaginateUserNotificationsInput`, and for the
   * same reason — a bucket narrows WITHIN the inbound-comms exclusion instead of
   * replacing it. Both notification chromes filter by category, so without this a
   * category-filtered "select all + mark" could only send its type scope as a
   * single type (impossible for a bucket) or send none at all — which would mark
   * rows the user was not looking at.
   */
  notificationTypeFilters?: InputMaybe<Array<Scalars['String']['input']>>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['String']['input'];
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ToggleNoteHidden = {
  contactId: Scalars['ID']['input'];
  isHidden: Scalars['Boolean']['input'];
  noteId: Scalars['ID']['input'];
};

export type ToggleNoteReplyHidden = {
  contactId: Scalars['ID']['input'];
  isHidden: Scalars['Boolean']['input'];
  replyId: Scalars['ID']['input'];
};

export type ToggleNotificationSeenInput = {
  isSeen: Scalars['Boolean']['input'];
  notificationIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum TranscriptUtteranceRole {
  Agent = 'AGENT',
  Contact = 'CONTACT'
}

export enum TranscriptionStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Processing = 'PROCESSING'
}

/**
 * Discriminator for `transferPhoneNumber`. The `@oneOf` directive enforces that
 * exactly one action is set; the server never sees invalid combos. Replaces the
 * previous `PhoneNumberTransferAction` enum + parallel optional fields shape.
 */
export type TransferPhoneNumberAction =
  { assignToUser: TransferToUserContext; release?: never; }
  |  { assignToUser?: never; release: ReleasePhoneNumberContext; };

export type TransferPhoneNumberInput = {
  action: TransferPhoneNumberAction;
  twilioPhoneNumberId: Scalars['ID']['input'];
};

export type TransferToUserContext = {
  makePrimary?: InputMaybe<Scalars['Boolean']['input']>;
  targetUserId: Scalars['ID']['input'];
};

export enum TransformerAuthoringState {
  Absent = 'ABSENT',
  Completed = 'COMPLETED',
  FailedRetryable = 'FAILED_RETRYABLE',
  FailedTerminal = 'FAILED_TERMINAL',
  InProgress = 'IN_PROGRESS',
  NotApplicable = 'NOT_APPLICABLE',
  Stranded = 'STRANDED'
}

export type TriggerWorkflowRunInput = {
  recordId: Scalars['ID']['input'];
  /**
   * Where in the UI this manual trigger originated. Recorded on the run's
   * `RUN_STARTED` trigger event alongside the acting user. Omit from non-UI
   * callers (developer API) — the server records it as `UNKNOWN`.
   */
  surface?: InputMaybe<WorkflowRunManualTriggerSurface>;
  /**
   * WorkflowGroup id to trigger. The currently-ACTIVE version under this
   * group is resolved at fire time, so saved references survive workflow
   * edits (which create a new version under the same group).
   */
  workflowGroupId: Scalars['ID']['input'];
};

/**
 * What an org connected its OWN (BYO) Twilio account FOR. Chosen at connect and
 * exclusive — switching means disconnecting and reconnecting the account.
 */
export enum TwilioAccountDesignation {
  /** Bulk campaign sending — these lines never appear in team inventory or the CRM inbox */
  Bulk = 'BULK',
  /** The org's CRM/team lines: claim, 1:1 texting, voice, agents, workflows */
  Business = 'BUSINESS'
}

/**
 * Simplified registration status for frontend display.
 * The backend maps granular Prisma states to these 4 statuses.
 */
export enum TwilioRegistrationStatus {
  /** Twilio subaccount has been permanently closed — user must contact support to create a new one */
  Closed = 'CLOSED',
  /** Registration is complete and approved */
  Complete = 'COMPLETE',
  /** Registration failed due to OTP issue that requires user action */
  Failed = 'FAILED',
  /** Registration submitted, awaiting Goliath team review before Twilio submission */
  GoliathReview = 'GOLIATH_REVIEW',
  /** Registration has not been started */
  NotStarted = 'NOT_STARTED',
  /** Registration is in progress (submitted, pending review, etc.) */
  UnderProcessing = 'UNDER_PROCESSING'
}

/** Persisted/configuration health of a Twilio account for browser Voice. */
export enum TwilioVoiceAccountHealth {
  Disabled = 'DISABLED',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  NeedsAttention = 'NEEDS_ATTENTION',
  Ready = 'READY',
  SetupInProgress = 'SETUP_IN_PROGRESS',
  VoiceConfigurationRequired = 'VOICE_CONFIGURATION_REQUIRED'
}

/** Who owns the Twilio account backing a browser Voice registration. */
export enum TwilioVoiceAccountOwnership {
  CustomerOwned = 'CUSTOMER_OWNED',
  GoliathManaged = 'GOLIATH_MANAGED'
}

/** Voice eligibility of one assigned line, independent of browser Device state. */
export enum TwilioVoiceLineAvailability {
  ConfigurationRequired = 'CONFIGURATION_REQUIRED',
  LifecyclePending = 'LIFECYCLE_PENDING',
  Ready = 'READY',
  VoiceUnsupported = 'VOICE_UNSUPPORTED'
}

/** Request-time failure while producing otherwise eligible Voice credentials. */
export enum TwilioVoiceRegistrationFailure {
  TokenMintFailed = 'TOKEN_MINT_FAILED'
}

/** Whether an account-scoped coverage read resolved authoritative ownership. */
export enum TwilioVoiceTargetedAccountResolution {
  Resolved = 'RESOLVED',
  Unresolved = 'UNRESOLVED'
}

export type UnlockPostInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  shortCode: Scalars['String']['input'];
};

export type UnregisterPushSubscriptionInput = {
  endpoint: Scalars['String']['input'];
};

export type UnshareContactInput = {
  sourceContactId: Scalars['ID']['input'];
  targetOrganizationId: Scalars['ID']['input'];
};

export enum UpcomingAgentRunKind {
  Cron = 'CRON',
  FollowUp = 'FOLLOW_UP'
}

export type UpdateAgentPersonalGoalStatusInput = {
  goalId: Scalars['ID']['input'];
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  status: AgentPersonalGoalStatus;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** When enabled=false only the switch is applied; the other values are ignored (settings are kept). */
export type UpdateApiCreditAutoRechargeInput = {
  enabled: Scalars['Boolean']['input'];
  maxBudgetCents: Scalars['Int']['input'];
  rechargeAmountCents: Scalars['Int']['input'];
  thresholdUnits: Scalars['Int']['input'];
};

export type UpdateAppointmentInput = {
  addContactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  addUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  /**
   * Switch, set, or clear the reminder attached to this appointment.
   * Omit the field to leave the current reminder unchanged. Pass a
   * reminder's WorkflowGroup id to attach (replacing any existing one — at
   * most one reminder per appointment). Pass `null` to clear the reminder.
   * Persisted to `Task.workflowGroupId`.
   */
  appointmentReminderWorkflowGroupId?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Pass `true` to create the external calendar event when this appointment
   * does not have one yet — how an appointment whose create-time sync never
   * landed finally reaches a calendar. Opt-in, not defaulted: nothing records
   * whether a missing event means "the user opted out" or "the sync failed",
   * so creating one by default would mail invites for appointments
   * deliberately kept inside Goliath. Has no effect once the event exists;
   * the edit is pushed to it either way. The event is created on the ACTING
   * user's calendar, with them as organizer.
   */
  createCalendarEvent?: InputMaybe<Scalars['Boolean']['input']>;
  createGoogleMeetLink?: InputMaybe<Scalars['Boolean']['input']>;
  createMicrosoftTeamsLink?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Raw external email guests. Full-list replacement; omit to leave unchanged. Added emails invited, removed emails dropped from the event. */
  externalAttendees?: InputMaybe<Array<Scalars['String']['input']>>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  removeContactIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  removeUserIds?: InputMaybe<Array<Scalars['String']['input']>>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Timezone>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAppointmentOnDealInput = {
  appointment: UpdateAppointmentInput;
  dealId: Scalars['ID']['input'];
};

export type UpdateAppointmentReminderInput = {
  /** Single-step shorthand. Deprecated in favour of `steps`. */
  amountBefore?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  /**
   * Make this reminder the organization's default, or stop it being one. Unlike
   * the other fields this is tri-state: **omit it to leave the current default
   * untouched** — an edit to a reminder's copy or timing must not silently
   * change which reminder the org defaults to.
   *
   * `true` clears the flag on any prior default, so at most one exists per org.
   * `false` clears it on this one, leaving the org with no explicit default (the
   * server then falls back to the sole reminder, if there is exactly one).
   *
   * Without this, a default could only ever be chosen at create time, so an org
   * whose reminders all predate the flag had no way to designate one at all.
   */
  isGlobal?: InputMaybe<Scalars['Boolean']['input']>;
  /** Single-step shorthand. Deprecated in favour of `steps`. */
  message?: InputMaybe<Scalars['String']['input']>;
  /**
   * The reminder's steps after the edit. Replaces the existing set: a step that
   * is gone stops sending, a new one starts. Mutually exclusive with the
   * single-step `message`/`amountBefore`/`unitBefore` fields below.
   */
  steps?: InputMaybe<Array<AppointmentReminderStepInput>>;
  /** Single-step shorthand. Deprecated in favour of `steps`. */
  unitBefore?: InputMaybe<AppointmentReminderTimeUnit>;
};

export type UpdateBulkUserTaskCompleted = {
  isCompleted: Scalars['Boolean']['input'];
  notIncludedTaskIds?: InputMaybe<Array<Scalars['String']['input']>>;
  taskStatus: TaskStatus;
  timezone?: InputMaybe<Timezone>;
  userId: Scalars['String']['input'];
};

export type UpdateCallToolsIntegrationConfigInput = {
  defaultAgentUserId?: InputMaybe<Scalars['ID']['input']>;
  defaultBucketId?: InputMaybe<Scalars['Int']['input']>;
  defaultContributorUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  defaultTagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  dispositionRules?: InputMaybe<Scalars['JSON']['input']>;
};

/** Partial update — an omitted field is left untouched. */
export type UpdateCallWorkspaceConfigInput = {
  /** Clamped to 0–30 server-side. */
  advanceDelaySeconds?: InputMaybe<Scalars['Int']['input']>;
  autoAdvance?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Edit a draft campaign from the editor tab. Every field is optional — the sequence
 * and quiet hours are only editable while the campaign is a draft.
 */
export type UpdateCampaignInput = {
  /**
   * Optimistic-concurrency token for the sequence/quiet-hours re-author: the
   * backing workflow's `updatedAt` as loaded with the editor payload
   * (`CampaignEditor.workflowUpdatedAt`). When provided and the workflow changed
   * since (another tab/session saved), the update is rejected with CONFLICT
   * instead of silently overwriting. Omit for legacy last-write-wins behavior.
   */
  expectedWorkflowUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sendWindow?: InputMaybe<CampaignSendWindowInput>;
  /**
   * Re-author the campaign's explicit sending-number pick (PhoneLine ids within
   * its purpose's pool). Empty list is rejected — a campaign never sends from
   * nothing; omit the field to leave the pick unchanged.
   */
  sendingPhoneLineIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  sequence?: InputMaybe<Array<CampaignSequenceStepInput>>;
  /**
   * How many of a contact's phone numbers the drip texts: 1 = primary number only
   * (the default for new campaigns), 2 = every mobile on file (the same person may
   * receive the full sequence twice). Clamped server-side to {1, 2}. Draft-only,
   * like the sequence and quiet hours.
   */
  textNumbersPerContact?: InputMaybe<Scalars['Int']['input']>;
};

/** Write the campaign's auto-reply agent config from the editor. Replaces each field wholesale. */
export type UpdateCampaignTextAgentInput = {
  promptBody: Scalars['String']['input'];
};

export type UpdateCaseAlertInput = {
  documentType?: InputMaybe<Scalars['String']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};

export type UpdateCaseRecipientInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  emailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  smsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateContactAgentInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  config?: InputMaybe<ContactAgentConfigInput>;
  dailyCallCap?: InputMaybe<Scalars['Int']['input']>;
  dailyRunCap?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

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

export type UpdateContactExternalLinkInput = {
  contactId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
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

export type UpdateContactRelationshipInput = {
  id: Scalars['ID']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  relation?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateContentTemplateInput = {
  id: Scalars['ID']['input'];
  input: ContentTemplateMutationInput;
};

export type UpdateCustomFieldInput = {
  /** Dropdown only: allow apply-time automation to mint new options. Omit to leave unchanged. */
  allowAutomationOptions?: InputMaybe<Scalars['Boolean']['input']>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  optionDependencyResolutions?: InputMaybe<Array<DependencyResolutionInput>>;
  options?: InputMaybe<Array<UpsertCustomFieldOptionInput>>;
};

export type UpdateDealCustomFieldInput = {
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  optionDependencyResolutions?: InputMaybe<Array<DependencyResolutionInput>>;
  options?: InputMaybe<Array<UpsertDealCustomFieldOptionInput>>;
};

export type UpdateDealDetailLayoutInput = {
  /** The layout version last read by the client. Omit for the first save. */
  expectedVersion?: InputMaybe<Scalars['Int']['input']>;
  tabs: Array<DealDetailLayoutTabInput>;
};

export type UpdateDealExternalLinkInput = {
  dealId: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDealTaskCompletedInput = {
  dealId: Scalars['ID']['input'];
  isCompleted: Scalars['Boolean']['input'];
  taskIds: Array<Scalars['ID']['input']>;
};

export type UpdateDealTaskInput = {
  dealId: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Timezone>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateDialerIntegrationConfigInput = {
  campaignConfigId: Scalars['ID']['input'];
  defaultAgentUserId?: InputMaybe<Scalars['ID']['input']>;
  defaultContributorUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  dispositionRules?: InputMaybe<Scalars['JSON']['input']>;
  dispositions?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateEmbedFormInput = {
  allowDuplicateContact?: InputMaybe<Scalars['Boolean']['input']>;
  assignmentConfig?: InputMaybe<EmbedFormAssignmentConfigInput>;
  autoListIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  autoTagIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  collectSmsConsent?: InputMaybe<Scalars['Boolean']['input']>;
  dedupePrimaryField?: InputMaybe<EmbedFormDedupeField>;
  dedupeSecondaryField?: InputMaybe<EmbedFormDedupeField>;
  descriptionText?: InputMaybe<Scalars['String']['input']>;
  enableEmailNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSlackNotification?: InputMaybe<Scalars['Boolean']['input']>;
  enableSmsNotification?: InputMaybe<Scalars['Boolean']['input']>;
  fieldConfig?: InputMaybe<Scalars['JSON']['input']>;
  gtmContainerId?: InputMaybe<Scalars['String']['input']>;
  headerText?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  marketingConsentText?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyContent?: InputMaybe<Scalars['String']['input']>;
  privacyPolicyUrl?: InputMaybe<Scalars['String']['input']>;
  showMarketingConsent?: InputMaybe<Scalars['Boolean']['input']>;
  showPoweredBy?: InputMaybe<Scalars['Boolean']['input']>;
  slackChannelId?: InputMaybe<Scalars['String']['input']>;
  slackChannelName?: InputMaybe<Scalars['String']['input']>;
  slackMessageTemplate?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  smsDisclaimerText?: InputMaybe<Scalars['String']['input']>;
  smsMarketingConsentText?: InputMaybe<Scalars['String']['input']>;
  smsTransactionalConsentText?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<EmbedFormStatus>;
  styleConfig?: InputMaybe<Scalars['JSON']['input']>;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  successMessage?: InputMaybe<Scalars['String']['input']>;
  termsAndConditionsText?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceContent?: InputMaybe<Scalars['String']['input']>;
  termsOfServiceUrl?: InputMaybe<Scalars['String']['input']>;
  /**
   * AI employees wired to this form. Desired-state: the given ids become the
   * form's complete trigger-agent set (omit the key to leave it untouched).
   * The agent-side `setContactAgentTriggerForms` edits the same relation from
   * the other end — two doors, both desired-state.
   */
  triggerAgentIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type UpdateExternalApiKeyScopesInput = {
  id: Scalars['ID']['input'];
  scopes: Array<ExternalApiKeyScope>;
};

export type UpdateFilterInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  /**
   * Move the filter to this folder, by `FilterFolder.id`. Null ungroups it;
   * omitted leaves it where it is — including in a NESTED folder, which the
   * retired `group` name could not address and therefore silently re-filed to the
   * top level.
   *
   * Same rules as `SaveFilterInput.folderId`: privacy follows the folder, and a
   * folder on another surface, in another organization or one you cannot see is
   * refused.
   */
  folderId?: InputMaybe<Scalars['ID']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  queryOptions?: InputMaybe<Scalars['JSON']['input']>;
  root?: InputMaybe<Scalars['JSON']['input']>;
};

export type UpdateIncomingWebhookInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateLibraryFileInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrgCreditAutoRechargeInput = {
  creditType: CreditType;
  enabled: Scalars['Boolean']['input'];
  maxBudgetCents: Scalars['Int']['input'];
  rechargeAmountCents: Scalars['Int']['input'];
  thresholdUnits: Scalars['Int']['input'];
};

/**
 * Patch a single throttle policy linked to an organization. Omitted fields are left
 * unchanged; an explicit null on dailyUnitCap / unitsPerWindow clears that limit.
 */
export type UpdateOrgThrottlePolicyInput = {
  dailyUnitCap?: InputMaybe<Scalars['Int']['input']>;
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** When false, the nightly auto-management cron will no longer adjust this policy's cap. */
  isManaged?: InputMaybe<Scalars['Boolean']['input']>;
  organizationId: Scalars['ID']['input'];
  policyId: Scalars['ID']['input'];
  unitsPerWindow?: InputMaybe<Scalars['Int']['input']>;
};

/**
 * Sets or clears the co-owned-line head start. Like the timezone mutation, this
 * exists only to set or clear the one field: null (or omitted) clears it.
 */
export type UpdateOrganizationAiHeadStartInput = {
  /** Seconds a human co-owner rings alone before the AI replies. 0-3600; null clears. */
  seconds?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateOrganizationBillingCycleAnchorInput = {
  newAnchorDate: Scalars['DateTime']['input'];
  organizationId: Scalars['ID']['input'];
};

export type UpdateOrganizationBrandingInput = {
  brandLogoUploadedFileId?: InputMaybe<Scalars['ID']['input']>;
  isBrandingEnabled: Scalars['Boolean']['input'];
};

export type UpdateOrganizationInput = {
  bannerUploadedFileId?: InputMaybe<Scalars['ID']['input']>;
  logoUploadedFileId?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  profileDispositionManagerId?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Records an explicit organization-admin choice for meeting notetaker dispatch.
 * The value is intentionally non-null: the settings UI may opt in or opt out, but
 * cannot put an organization back into the legacy/unconfigured state.
 */
export type UpdateOrganizationMeetingNotetakerInput = {
  /** Required to be true when enabling; ignored when disabling. */
  acknowledged?: Scalars['Boolean']['input'];
  /** The server-issued disclosure version the admin actually reviewed. */
  acknowledgementVersion?: InputMaybe<Scalars['String']['input']>;
  enabled: Scalars['Boolean']['input'];
};

export type UpdateOrganizationTimezoneInput = {
  /**
   * An IANA zone id (e.g. "America/Chicago"), or one of the UI abbreviations
   * (EST/CST/MST/PST/HST), which is normalized to its DST-aware zone.
   *
   * Only the zones this product schedules in are accepted — the same closed set a
   * stored send window's timezone may hold. A zone outside it (e.g.
   * "America/Phoenix") is rejected rather than stored, because this value is what
   * other surfaces DEFAULT from and they could not hold it.
   *
   * `null` clears the setting and puts the organization back to having no answer —
   * it does NOT mean UTC, and it does not rewrite any timezone already stored on
   * an existing configuration.
   */
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePermittedUsersInput = {
  partnerOrgId: Scalars['ID']['input'];
  permittedUserIds: Array<Scalars['ID']['input']>;
};

/** Updates provider preferences and optionally verifies a replacement key. */
export type UpdatePhoneEnrichmentProviderInput = {
  apiKey?: InputMaybe<Scalars['String']['input']>;
  config: PhoneEnrichmentProviderConfigInput;
  providerKey: Scalars['String']['input'];
  testPhone?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  addressString?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  documentFileIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  hideFullAddress?: InputMaybe<Scalars['Boolean']['input']>;
  parcelString?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Array<PostPhotoInput>>;
  propertyId?: InputMaybe<Scalars['ID']['input']>;
  propertyMetadata?: InputMaybe<PostPropertyMetadataInput>;
  requireBuyerInfo?: InputMaybe<Scalars['Boolean']['input']>;
  showDocumentsBeforeUnlock?: InputMaybe<Scalars['Boolean']['input']>;
  theme?: InputMaybe<PostTheme>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostViewerInfoInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  viewerId: Scalars['ID']['input'];
};

export type UpdateScraperPipelineConfigurationInput = {
  locations: Array<Scalars['String']['input']>;
  scraperPipelineId: Scalars['ID']['input'];
  signals: Array<Scalars['String']['input']>;
  standardOperatingProcedure?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  websiteUrl: Scalars['String']['input'];
};

export type UpdateScraperPipelineIntegrationConfigInput = {
  scraperPipelineId: Scalars['ID']['input'];
  slackChannelIds: Array<Scalars['String']['input']>;
  slackNotifyOnMappedProperty: Scalars['Boolean']['input'];
};

export type UpdateScraperPipelineWebhooksInput = {
  scraperPipelineId: Scalars['ID']['input'];
  webhookUrls: Array<Scalars['String']['input']>;
};

export type UpdateSmrtPhoneIntegrationConfigInput = {
  defaultAgentUserId?: InputMaybe<Scalars['ID']['input']>;
  defaultContributorUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  dispositionRules?: InputMaybe<Scalars['JSON']['input']>;
  dispositions?: InputMaybe<Array<Scalars['String']['input']>>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateSupportAccountOrganizationInput = {
  organizationId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateSupportAccountPasswordInput = {
  password: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateTaskCompletedInput = {
  contactId: Scalars['String']['input'];
  isCompleted: Scalars['Boolean']['input'];
  taskIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateTaskInput = {
  contactId: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  participants?: InputMaybe<Array<Scalars['String']['input']>>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Timezone>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Toggle completion on tasks addressed by id alone — no anchoring contact and no
 * anchoring deal. For a task that HAS a contact, prefer `updateTaskCompleted`
 * (it also writes the contact-timeline activity); this input exists for the tasks
 * that have no contact to anchor to.
 */
export type UpdateTasksCompletedByIdsInput = {
  isCompleted: Scalars['Boolean']['input'];
  taskIds: Array<Scalars['ID']['input']>;
};

export type UpdateUserGroupInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  emoji?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  memberUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserHomeBaseInput = {
  /** The answer/opt-out record (HomeBaseDataSchema), or null to clear it (dev/testing reset). */
  homeBaseData?: InputMaybe<Scalars['JSON']['input']>;
};

/**
 * Consolidated profile-preference update. Role is never changed here — it is set
 * once at onboarding. Fields for the other role are simply ignored by the UI.
 */
export type UpdateUserMetadataInput = {
  agentRole?: InputMaybe<Scalars['String']['input']>;
  assetsUnderManagement?: InputMaybe<Scalars['Int']['input']>;
  cities?: InputMaybe<Array<LocationSelectableInput>>;
  counties?: InputMaybe<Array<LocationSelectableInput>>;
  handwrittenDealCriteria?: InputMaybe<Scalars['String']['input']>;
  handwrittenListingCriteria?: InputMaybe<Scalars['String']['input']>;
  investmentStrategies?: InputMaybe<Array<Scalars['String']['input']>>;
  investorType?: InputMaybe<Scalars['String']['input']>;
  listingsClosedInPastYear?: InputMaybe<Scalars['Int']['input']>;
  okayWithBadCondition?: InputMaybe<Scalars['Boolean']['input']>;
  preferredPriceRange?: InputMaybe<IntRangeInput>;
  preferredRenovationTypes?: InputMaybe<Array<RenovationType>>;
  propertyTypePreferences?: InputMaybe<Array<Scalars['String']['input']>>;
  states?: InputMaybe<Array<StateEnum>>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
  yearsOfExperience?: InputMaybe<Scalars['Int']['input']>;
  zipCodes?: InputMaybe<Array<LocationSelectableInput>>;
};

export type UpdateUserNotificationPreferencesInput = {
  browserPushEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  emailEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  inAppEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  notificationPreferenceId: Scalars['ID']['input'];
  smsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateUserProfileInput = {
  firstName: Scalars['String']['input'];
  howDidYouHearAboutUs?: InputMaybe<Scalars['String']['input']>;
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  profilePictureUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserStatsInput = {
  dealClosureRate?: InputMaybe<Scalars['Int']['input']>;
  followUpConsistency?: InputMaybe<Scalars['Int']['input']>;
  noteUpdates?: InputMaybe<Scalars['Int']['input']>;
  responseTime?: InputMaybe<Scalars['Int']['input']>;
  trustScore?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};

export type UpdateUserTourDataInput = {
  tourData: Scalars['JSON']['input'];
};

export type UpdateVoicemailTemplateInput = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type UpdateWorkflowAutomationGraphInput = {
  /**
   * Optimistic-concurrency token: the automation's `updatedAt` as loaded by the
   * editor. When provided and the row changed since (another tab, another user,
   * the campaign editor), the save is rejected with CONFLICT instead of silently
   * replacing the newer graph. Omit for legacy last-write-wins behavior.
   */
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  workflowAutomationId: Scalars['ID']['input'];
  workflowGraph: Scalars['SuperJSON']['input'];
};

export type UploadContext =
  { contactFile: ContactFileContext; contactUpload?: never; dealFile?: never; postFile?: never; propertySignalUpload?: never; propertyUpload?: never; }
  |  { contactFile?: never; contactUpload: ContactUploadContext; dealFile?: never; postFile?: never; propertySignalUpload?: never; propertyUpload?: never; }
  |  { contactFile?: never; contactUpload?: never; dealFile: DealFileContext; postFile?: never; propertySignalUpload?: never; propertyUpload?: never; }
  |  { contactFile?: never; contactUpload?: never; dealFile?: never; postFile: PostFileContext; propertySignalUpload?: never; propertyUpload?: never; }
  |  { contactFile?: never; contactUpload?: never; dealFile?: never; postFile?: never; propertySignalUpload: PropertySignalUploadContext; propertyUpload?: never; }
  |  { contactFile?: never; contactUpload?: never; dealFile?: never; postFile?: never; propertySignalUpload?: never; propertyUpload: PropertyUploadContext; };

export enum UploadReportBucket {
  AllRows = 'ALL_ROWS',
  Created = 'CREATED',
  DuplicateRows = 'DUPLICATE_ROWS',
  Failed = 'FAILED',
  Matched = 'MATCHED',
  Restored = 'RESTORED',
  Skipped = 'SKIPPED'
}

export enum UploadReportRowOutcome {
  Created = 'CREATED',
  Failed = 'FAILED',
  Matched = 'MATCHED',
  Revived = 'REVIVED',
  Skipped = 'SKIPPED'
}

export type UpsertAgentCommissionGoalInput = {
  goalPlanId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  metric: AgentCommissionGoalMetric;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  targetCents: Scalars['BigInt']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpsertAgentPersonalGoalInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayOrder?: InputMaybe<Scalars['Int']['input']>;
  goalPlanId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpsertAvailabilityScheduleInput = {
  dateOverrides?: InputMaybe<Scalars['JSON']['input']>;
  timezone: Scalars['String']['input'];
  weeklyHours: Scalars['JSON']['input'];
};

export type UpsertCallToolsIntegrationInput = {
  apiKey: Scalars['String']['input'];
  defaultAgentUserId?: InputMaybe<Scalars['ID']['input']>;
  defaultBucketId?: InputMaybe<Scalars['Int']['input']>;
  defaultContributorUserIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  defaultTagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  dispositionRules?: InputMaybe<Scalars['JSON']['input']>;
  silo: Scalars['String']['input'];
};

export type UpsertCustomFieldOptionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label: Scalars['String']['input'];
};

export type UpsertDealCustomFieldOptionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label: Scalars['String']['input'];
};

export type UpsertExportConfigurationInput = {
  config: Scalars['SuperJSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type UpsertOrganizationGoogleAdsAccountInput = {
  accountName?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  linkStatus: OrganizationGoogleAdsAccountLinkStatus;
  organizationId: Scalars['ID']['input'];
};

export type UpsertPlanOverridesInput = {
  catalystEvents?: InputMaybe<Scalars['Boolean']['input']>;
  clearOnTrialEnd?: InputMaybe<Scalars['Boolean']['input']>;
  dailyConnectedCallCap?: InputMaybe<Scalars['Int']['input']>;
  emailVerificationCap?: InputMaybe<Scalars['Int']['input']>;
  exportPropertiesCap?: InputMaybe<Scalars['Int']['input']>;
  organizationId: Scalars['ID']['input'];
  propertySignalSkipTraceUnlimited?: InputMaybe<Scalars['Boolean']['input']>;
  seatsCap?: InputMaybe<Scalars['Int']['input']>;
  skiptraceCap?: InputMaybe<Scalars['Int']['input']>;
  spicySort?: InputMaybe<Scalars['Boolean']['input']>;
  twilioSoleProp?: InputMaybe<Scalars['Boolean']['input']>;
  twilioStandardLsv?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum UserAccessType {
  Admin = 'ADMIN',
  User = 'USER'
}

/** What clicking a popover alert card does (mirrors the shared `NotificationAction` union). */
export enum UserAlertActionType {
  /** Deep-link to the calendar day (ISO date) in `UserAlertAction.targetId`. */
  OpenCalendarDay = 'OPEN_CALENDAR_DAY',
  /** Deep-link to the contact in `UserAlertAction.targetId`. */
  OpenContact = 'OPEN_CONTACT',
  OpenContactsList = 'OPEN_CONTACTS_LIST',
  /** Deep-link to the inbox call in `UserAlertAction.targetId`. */
  OpenInboxCall = 'OPEN_INBOX_CALL',
  /** Deep-link to the inbox item in `UserAlertAction.targetId`. */
  OpenInboxItem = 'OPEN_INBOX_ITEM',
  OpenPartnerships = 'OPEN_PARTNERSHIPS'
}

/**
 * What a popover alert (`UserAlertEvent`) is about — drives the card's icon
 * and kind-specific client formatting. New alert-worthy moments extend this.
 */
export enum UserAlertKind {
  InboundEmail = 'INBOUND_EMAIL',
  InboundText = 'INBOUND_TEXT',
  /** Mirror of a persisted in-app notification feed row. */
  Notification = 'NOTIFICATION'
}

export enum UserAutocompleteCrossOrgScope {
  AllOrgs = 'ALL_ORGS',
  OwnOrg = 'OWN_ORG',
  Partners = 'PARTNERS',
  PartnersOnly = 'PARTNERS_ONLY'
}

export type UserAutocompleteSearchParams = {
  crossOrgScope?: InputMaybe<UserAutocompleteCrossOrgScope>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  requireCalendarConnected?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export enum UserRole {
  Agent = 'AGENT',
  Investor = 'INVESTOR'
}

export enum UserSessionEventType {
  Heartbeat = 'HEARTBEAT',
  SessionEnded = 'SESSION_ENDED',
  SessionStarted = 'SESSION_STARTED'
}

/**
 * Who closed a channel on a value. PERSON is the human's own act (a texted STOP,
 * a carrier relaying their opt-out); TEAM is a rep or import suppressing the value
 * on the org's side. Rendered differently — "they said no" is not "we turned it off".
 */
export enum ValueConsentRevocationSource {
  Person = 'PERSON',
  Team = 'TEAM'
}

export type VectorPaginationInput = {
  pagination: PaginationInput;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
};

export enum VectorType {
  EntityRoleInEntity = 'ENTITY_ROLE_IN_ENTITY',
  EntityRoleInPropertySignal = 'ENTITY_ROLE_IN_PROPERTY_SIGNAL',
  PersonRoleInEntity = 'PERSON_ROLE_IN_ENTITY',
  PersonRoleInPropertySignal = 'PERSON_ROLE_IN_PROPERTY_SIGNAL',
  PropertySignalType = 'PROPERTY_SIGNAL_TYPE'
}

export enum VerificationStatus {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED',
  Wrong = 'WRONG'
}

export type VerifyOtpInput = {
  phoneNumber: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

/**
 * How carriers appear to be treating one number, inferred from how recipients
 * terminate its calls — carriers never tell us they have labelled a number.
 *
 * Derived at read time from the line's rolling call outcomes; never stored.
 */
export enum VoiceHealthState {
  /** Rejection rate looks like a labelled number. Stop calling from it and rotate. */
  AtRisk = 'AT_RISK',
  /** Rejection rate is within the normal band. */
  Healthy = 'HEALTHY',
  /**
   * No recent evidence to speak from — a refusal to claim, and NOT a claim that
   * the number is fine. `deriveVoiceHealthState` owns when it applies; do not
   * restate its conditions here, they are calibration and they move.
   */
  Measuring = 'MEASURING',
  /** Rejection rate is elevated — worth easing off this number. */
  Watch = 'WATCH'
}

export enum VoiceSource {
  Account = 'ACCOUNT',
  Community = 'COMMUNITY'
}

/**
 * Where one number — or the provider account behind it — stands with the carrier
 * caller-ID registries (SHAKEN/STIR attestation A + Voice Integrity).
 *
 * Always DERIVED at read time, never stored: two of these describe the account
 * rather than any progress, and both can change without a registration ever
 * moving.
 */
export enum VoiceTrustRegistrationState {
  /** The carrier registration was refused, or this number's assignment failed. */
  Failed = 'FAILED',
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
  NotEligible = 'NOT_ELIGIBLE',
  /** Registered with the carriers. Calls from this number carry full attestation. */
  Registered = 'REGISTERED',
  /** Eligible and on its way — submitted, in review, or waiting on the next sweep. */
  Registering = 'REGISTERING',
  /** The organization uses its own Twilio account and registers there itself. */
  SelfManaged = 'SELF_MANAGED'
}

export enum VoicemailDropStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Playing = 'PLAYING'
}

export enum VoicemailTemplateFormat {
  Mp3 = 'MP3'
}

export enum WorkflowAutomationRunStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Running = 'RUNNING',
  Stopped = 'STOPPED'
}

export enum WorkflowAutomationStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Paused = 'PAUSED',
  /**
   * System-initiated stop (distinct from user-initiated PAUSED), set by the SMS
   * deliverability guardrails when a workflow's carrier-filter rate trips the
   * circuit breaker or its sending number burns.
   */
  Suspended = 'SUSPENDED'
}

/**
 * Channel of a run's communication sender lane. Mirrors the raw
 * `WorkflowCommSenderState.channel` string (`TEXT` | `EMAIL`).
 */
export enum WorkflowCommChannel {
  Email = 'EMAIL',
  Text = 'TEXT'
}

export enum WorkflowDomain {
  Appointment = 'APPOINTMENT',
  Contact = 'CONTACT',
  Deal = 'DEAL',
  Event = 'EVENT',
  Property = 'PROPERTY'
}

/**
 * Rolled-up lifecycle status for a `WorkflowGroup`, derived from the
 * statuses of its child `WorkflowAutomation` versions:
 *
 *   - ACTIVE: at least one child is ACTIVE.
 *   - PAUSED: no ACTIVE child, but at least one PAUSED child.
 *   - DRAFT:  otherwise (only DRAFT/PENDING_REVIEW children, or none).
 *
 * Drives the single status pill in the Automations table.
 */
export enum WorkflowGroupStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Paused = 'PAUSED'
}

/**
 * Why a run's next comm send is sitting in the sending queue. DAILY_CAP: the
 * sending line/org spent its daily allowance. SEND_WINDOW: the recipient's local
 * clock is outside the allowed sending hours. WINDOW_LIMIT: the per-window
 * sending rate limit is saturated.
 */
export enum WorkflowQueuedSendReason {
  DailyCap = 'DAILY_CAP',
  SendWindow = 'SEND_WINDOW',
  WindowLimit = 'WINDOW_LIMIT'
}

export enum WorkflowRunBulkOperation {
  Pause = 'PAUSE',
  Resume = 'RESUME'
}

/**
 * Where in the product a manual `triggerWorkflowRun` action originated. Recorded
 * on the run's `RUN_STARTED` trigger event. Omitted by non-UI callers (e.g. the
 * developer API), which the server records as `UNKNOWN`.
 */
export enum WorkflowRunManualTriggerSurface {
  AppointmentRecord = 'APPOINTMENT_RECORD',
  ContactRecord = 'CONTACT_RECORD',
  DealEditor = 'DEAL_EDITOR',
  DeveloperApi = 'DEVELOPER_API',
  PropertyRecord = 'PROPERTY_RECORD',
  Unknown = 'UNKNOWN'
}

/**
 * Why a run's scheduledMessagePreview is null, when the preview walk proved a
 * specific cause. PENDING_CONDITION: the next send sits behind a conditional
 * branch that is only evaluated at send time. NO_UPCOMING_SEND: nothing
 * downstream of the run's current node sends a message at all.
 */
export enum WorkflowScheduledMessagePreviewUnavailableReason {
  NoUpcomingSend = 'NO_UPCOMING_SEND',
  PendingCondition = 'PENDING_CONDITION'
}

/**
 * Entity domain a `WorkflowTriggeredEvent` is about — names the noun when a bulk
 * gesture's events are coalesced into one summary toast client-side. Mirrors the
 * service-layer `WorkflowTriggeredEntityKind` union in
 * `util/realtime/realtimeWorkflowTriggered.ts` (services cannot import generated
 * GraphQL enums) — keep the two in sync.
 */
export enum WorkflowTriggeredEntityKind {
  Appointment = 'APPOINTMENT',
  Contact = 'CONTACT'
}

export enum WorkflowType {
  Email = 'EMAIL',
  Sop = 'SOP',
  Text = 'TEXT'
}

/**
 * Distinct channels of workspace-scoped change. Each domain consumer
 * filters for the channel(s) it cares about.
 */
export enum WorkspaceUpdateChannel {
  /** Sidebar upcoming-appointment count. */
  Appointments = 'APPOINTMENTS',
  /** Counts shown on the workspace home (tasks, appointments, notifications). */
  Counts = 'COUNTS',
  /** Inbox items: calls, texts, emails created or marked read/archived. */
  Inbox = 'INBOX',
  /** Sidebar unread-notification count. */
  Notifications = 'NOTIFICATIONS'
}

/**
 * How the user chose to resolve a WRONG_OWNER suggestion. Which options a given finding actually
 * offers is decided by the finding itself (a rename needs a name to write and an unengaged record),
 * so the server re-checks the choice against the offer before applying it.
 */
export enum WrongOwnerOption {
  /**
   * Leave this contact as the former owner; put the property on the named owner — the org contact
   * that already is them, or a new record.
   */
  CreateNewContact = 'CREATE_NEW_CONTACT',
  /** Rename this contact to the named owner and keep the property on it. */
  UpdateContact = 'UPDATE_CONTACT'
}

export type ZoningLocationInput = {
  cityId?: InputMaybe<Scalars['String']['input']>;
  countyFips?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<StateEnum>;
};

export type GetMyProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyProfileQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null } | null };

export type UpdateMyProfileMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
}>;


export type UpdateMyProfileMutation = { __typename?: 'RootMutation', users?: { __typename?: 'UsersMutation', updateUserProfile?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null } | null } | null };

export type GetMyCapabilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyCapabilitiesQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', myCapabilities?: Array<OrganizationCapability> | null } | null };

export type GetIntegrationSetupUrlsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIntegrationSetupUrlsQuery = { __typename?: 'RootQuery', oauthQuery?: { __typename?: 'OAuthQuery', integrationSetupUrls?: { __typename?: 'IntegrationSetupUrls', emailIntegrationsUrl: string, phoneNumbersUrl: string } | null } | null };

export type ListAppointmentsQueryVariables = Exact<{
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListAppointmentsQuery = { __typename?: 'RootQuery', users?: { __typename?: 'UsersQuery', getUserAppointments?: { __typename?: 'PaginateTaskResponse', total: number, tasks: Array<{ __typename?: 'Task', id: string, title?: string | null, startDate?: any | null, endDate?: any | null, timezone?: Timezone | null, location?: string | null, description?: string | null, outcome?: string | null, completedAt?: any | null, appointmentReminderWorkflowGroupId?: string | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null }> } | null } | null };

export type ListAppointmentRemindersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListAppointmentRemindersQuery = { __typename?: 'RootQuery', appointmentReminderQuery?: { __typename?: 'AppointmentReminderQuery', listAppointmentReminders?: Array<{ __typename?: 'AppointmentReminder', id: string, message: string, amountBefore: number, unitBefore: AppointmentReminderTimeUnit, createdAt: any }> | null } | null };

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

export type GetCreditPricesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditPricesQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getCreditPrices?: { __typename?: 'CreditPrices', skiptracePriceCents: number, exportPropertiesPriceCents: number, emailVerificationPriceCents: number } | null } | null };

export type GetCreditsPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCreditsPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getCreditsPurchaseUrl?: string | null } | null };

export type GetSeatsPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSeatsPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getSeatsPurchaseUrl?: string | null } | null };

export type GetPhoneNumbersPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPhoneNumbersPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getPhoneNumbersPurchaseUrl?: string | null } | null };

export type GetAddOnPricesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAddOnPricesQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getAddOnPrices?: { __typename?: 'AddOnPrices', extraSeatPriceCents: number } | null } | null };

export type GetBillingSummaryQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBillingSummaryQuery = { __typename?: 'RootQuery', subscriptionQuery?: { __typename?: 'SubscriptionQuery', getOrganizationBilling?: { __typename?: 'OrganizationBilling', id: string, planType?: PlanCode | null, status: OrganizationBillingStatus, isAnnualPlan?: boolean | null, featureLimits: { __typename?: 'FeatureLimits', seatsCap?: number | null, skiptraceCap?: number | null, emailVerificationCap?: number | null, exportPropertiesCap?: number | null }, creditLedger: Array<{ __typename?: 'CreditLedger', type: CreditType, unitBalance: number }> } | null } | null };

export type GetBulkTaskQueryVariables = Exact<{
  bulkTaskId: Scalars['ID']['input'];
}>;


export type GetBulkTaskQuery = { __typename?: 'RootQuery', bulkTaskQuery?: { __typename?: 'BulkTaskQuery', bulkTask?: { __typename?: 'BulkTask', id: string, status: BulkTaskStatus, estimatedItemCount?: number | null, processedItemCount?: number | null, secondsRemaining?: number | null, createdAt: any, updatedAt: any } | null } | null };

export type ListCampaignsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCampaignsQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', list?: Array<{ __typename?: 'Campaign', id: string, name: string, channel: CampaignChannel, status: CampaignStatus, statusLabel: string, meta: string, ownerName: string, lastActivityLabel: string, engagedLabel?: string | null, funnel: Array<{ __typename?: 'CampaignFunnelStat', label: string, value: string }> }> | null } | null };

export type GetCampaignQueryVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type GetCampaignQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', campaign?: { __typename?: 'Campaign', id: string, name: string, channel: CampaignChannel, status: CampaignStatus, statusLabel: string, meta: string, ownerName: string, lastActivityLabel: string, engagedLabel?: string | null, funnel: Array<{ __typename?: 'CampaignFunnelStat', label: string, value: string }>, sentimentSegments: Array<{ __typename?: 'CampaignSentimentSegment', sentiment: CampaignSentiment, flexGrow: number }> } | null } | null };

export type GetCampaignEditorQueryVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type GetCampaignEditorQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', campaignEditor?: { __typename?: 'CampaignEditor', campaignId: string, status: CampaignStatus, statusLabel: string, purposeName?: string | null, sequence: Array<{ __typename?: 'CampaignEditorStep', kind: CampaignSequenceStepKind, body: string, delayDays: number }>, sendWindow: { __typename?: 'CampaignSendWindow', startHour: number, startMinute: number, endHour: number, endMinute: number }, agent?: { __typename?: 'CampaignTextAgent', agentId: string, promptBody: string } | null } | null } | null };

export type GetCampaignAnalyticsOverviewQueryVariables = Exact<{
  period: CampaignAnalyticsPeriod;
}>;


export type GetCampaignAnalyticsOverviewQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', analyticsOverview?: { __typename?: 'CampaignAnalyticsOverview', scopeLabel: string, campaignCount: number, replyCount: number, chartTotalLabel: string, intentTotalLabel: string, kpis: Array<{ __typename?: 'CampaignStat', label: string, value: string, sublabel?: string | null, deltaLabel?: string | null, deltaUp?: boolean | null }>, messagesByDay: Array<{ __typename?: 'CampaignDayBar', label: string, value: number }>, intentBreakdown: Array<{ __typename?: 'CampaignIntentSlice', sentiment: CampaignSentiment, label: string, valueLabel: string, pct: number }>, byBrand: Array<{ __typename?: 'CampaignAnalyticsBrandRow', id: string, name: string, score: number, metaLabel: string }> } | null } | null };

export type GetCampaignAnalyticsQueryVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type GetCampaignAnalyticsQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', analytics?: { __typename?: 'CampaignAnalytics', engagementByDay: Array<{ __typename?: 'CampaignDayBar', label: string, value: number }>, intentBreakdown: Array<{ __typename?: 'CampaignIntentSlice', sentiment: CampaignSentiment, label: string, valueLabel: string, pct: number }> } | null } | null };

export type GetCampaignFunnelQueryVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type GetCampaignFunnelQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', detail?: { __typename?: 'CampaignDetail', funnelIntroLabel: string, deliverabilityLabel: string, funnel: Array<{ __typename?: 'CampaignFunnelStage', label: string, hint: string, valueLabel: string, pctLabel: string, subLabel?: string | null }> } | null } | null };

export type CreateCampaignMutationVariables = Exact<{
  name: Scalars['String']['input'];
  channel: CampaignChannel;
  messageProvisionCampaignId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CreateCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', createCampaign?: { __typename?: 'Campaign', id: string, name: string, channel: CampaignChannel, status: CampaignStatus, statusLabel: string, meta: string } | null } | null };

export type UpdateCampaignMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  sequence?: InputMaybe<Array<CampaignSequenceStepInput> | CampaignSequenceStepInput>;
  sendWindow?: InputMaybe<CampaignSendWindowInput>;
}>;


export type UpdateCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', updateCampaign?: { __typename?: 'Campaign', id: string, name: string, channel: CampaignChannel, status: CampaignStatus, statusLabel: string, meta: string } | null } | null };

export type LaunchCampaignMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type LaunchCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', launchCampaign?: { __typename?: 'Campaign', id: string, name: string, status: CampaignStatus, statusLabel: string } | null } | null };

export type PauseCampaignMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type PauseCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', pauseCampaign?: { __typename?: 'Campaign', id: string, name: string, status: CampaignStatus, statusLabel: string } | null } | null };

export type ResumeCampaignMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type ResumeCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', resumeCampaign?: { __typename?: 'Campaign', id: string, name: string, status: CampaignStatus, statusLabel: string } | null } | null };

export type EndCampaignMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type EndCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', endCampaign?: { __typename?: 'Campaign', id: string, name: string, status: CampaignStatus, statusLabel: string } | null } | null };

export type UpdateCampaignTextAgentMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
  promptBody: Scalars['String']['input'];
}>;


export type UpdateCampaignTextAgentMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', updateCampaignTextAgent?: { __typename?: 'CampaignTextAgent', agentId: string, promptBody: string } | null } | null };

export type ListCampaignContactsQueryVariables = Exact<{
  campaignId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<CampaignContactSortField>;
  sortDirection?: InputMaybe<SortDirection>;
}>;


export type ListCampaignContactsQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', campaignContacts?: { __typename?: 'CampaignContactPage', total: number, items: Array<{ __typename?: 'Contact', id: string, name?: string | null, isArchived?: boolean | null, doNotContact?: boolean | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', id: string, phoneNumber: string, phoneType: PhoneType }> | null, emails?: Array<{ __typename?: 'ContactEmail', id: string, email: string }> | null }> } | null } | null };

export type GetCampaignAudienceCountsQueryVariables = Exact<{
  campaignId: Scalars['ID']['input'];
}>;


export type GetCampaignAudienceCountsQuery = { __typename?: 'RootQuery', campaigns?: { __typename?: 'CampaignsQuery', campaignContactsCount?: number | null, campaignSkippedContactsCount?: number | null, campaignDetachedReplierSkips?: { __typename?: 'CampaignDetachedReplierSkips', count: number, replierName?: string | null } | null } | null };

export type GetContactCampaignEnrollmentsQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;


export type GetContactCampaignEnrollmentsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, name?: string | null, campaignEnrollments?: Array<{ __typename?: 'ContactCampaignEnrollment', id: string, campaignId: string, campaignName: string, channel: CampaignChannel, status: CampaignStatus, enrolledAt: any }> | null } | null } | null };

export type EnrollContactsInCampaignMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type EnrollContactsInCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', enrollContactsInCampaign?: { __typename?: 'CampaignEnrollmentResult', enrolledCount: number, rejectedCount: number, skippedDetachedReplierCount: number } | null } | null };

export type RemoveContactsFromCampaignMutationVariables = Exact<{
  campaignId: Scalars['ID']['input'];
  contactIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type RemoveContactsFromCampaignMutation = { __typename?: 'RootMutation', campaignsMutation?: { __typename?: 'CampaignsMutation', removeContactsFromCampaign?: { __typename?: 'CampaignRemovalResult', removedCount: number } | null } | null };

export type ListCommunicationChannelsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListCommunicationChannelsQuery = { __typename?: 'RootQuery', currentUser?: { __typename?: 'User', id: string, organization?: { __typename?: 'Organization', id: string, twilioPhoneNumbers?: Array<{ __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, isPrimary?: boolean | null, canSendSms: boolean, user?: { __typename?: 'User', id: string } | null }> | null } | null } | null, oauthQuery?: { __typename?: 'OAuthQuery', myActiveEmailIdentities?: Array<{ __typename?: 'EmailIdentity', id: string, email: string, provider: EmailProvider, clientId: string }> | null } | null };

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

export type GetContactQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;


export type GetContactQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, name?: string | null, createdAt?: any | null, isArchived?: boolean | null, isEnriched?: boolean | null, sellerIntentScore?: number | null, doNotContact?: boolean | null, doNotContactReason?: string | null, emails?: Array<{ __typename?: 'ContactEmail', id: string, email: string, verificationStatus: VerificationStatus }> | null, phoneNumbers?: Array<{ __typename?: 'ContactPhoneNumber', id: string, phoneNumber: string, phoneType: PhoneType, verificationStatus: VerificationStatus, dncStatus?: { __typename?: 'DncStatus', isDnc: boolean, isLitigator: boolean } | null }> | null, mailingAddresses?: Array<{ __typename?: 'ContactMailingAddress', id: string, rawText?: string | null, verificationStatus: VerificationStatus, address?: { __typename?: 'Address', addressFull?: string | null } | null }> | null, properties?: Array<{ __typename?: 'ContactProperty', id: string, propertyString?: string | null, status?: string | null }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null, lists?: Array<{ __typename?: 'ContactList', id: string, name: string }> | null, customFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType, allowMultiple: boolean, values?: { __typename?: 'ContactCustomFieldValue', textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null } | null }> | null, participants?: Array<{ __typename?: 'ContactToUserMapping', status: ContactToUserMappingStatus, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null } | null }> | null, userGroups?: Array<{ __typename?: 'UserGroup', id: string, name: string }> | null, notes?: Array<{ __typename?: 'Note', id: string, body?: string | null, createdAt?: any | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null }> | null, deals?: Array<{ __typename?: 'Deal', id: string, title: string, priceCents?: any | null, stage?: { __typename?: 'DealStage', id: string, name: string } | null }> | null } | null } | null };

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

export type SearchContactTagsQueryVariables = Exact<{
  searchTerm: Scalars['String']['input'];
}>;


export type SearchContactTagsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', searchContactTags?: { __typename?: 'ContactTagSearchResult', tags?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null, lists?: Array<{ __typename?: 'Tag', id: string, name: string, folderId?: string | null }> | null } | null } | null };

export type ListContactFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListContactFiltersQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilters?: Array<{ __typename?: 'Filter', id: string, name: string, description?: string | null, folderId?: string | null, isPrivate: boolean, isDefault: boolean, userId?: string | null, createdAt: any }> | null } | null };

export type FilterContactsQueryVariables = Exact<{
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Sort>;
}>;


export type FilterContactsQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', paginateContacts?: { __typename?: 'FilteredContactsResponse', items: Array<{ __typename?: 'Contact', id: string, name?: string | null, sellerIntentScore?: number | null, isArchived?: boolean | null, tags?: Array<{ __typename?: 'Tag', id: string, name: string }> | null }>, pagination: { __typename?: 'FilterPaginationResponse', total?: number | null, hasMore?: boolean | null } } | null } | null };

export type ListContactActivitiesQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  activityTypes?: InputMaybe<Array<ActivityType> | ActivityType>;
  direction?: InputMaybe<ActivityDirection>;
}>;


export type ListContactActivitiesQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, activities?: Array<{ __typename?: 'Activity', id: string, type?: ActivityType | null, createdAt?: any | null, isFromTeamMember?: boolean | null, createdByUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null, note?: { __typename?: 'Note', id: string, body?: string | null, createdAt?: any | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null } | null, call?: { __typename?: 'Call', id: string, direction?: CommunicationDirection | null, durationSeconds?: number | null, status?: CallStatus | null, summary?: string | null, recordingUrl?: string | null, disposition?: CallDisposition | null, dispositionNote?: string | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, createdAt?: any | null } | null, text?: { __typename?: 'TwilioMessage', id: string, message?: string | null, direction?: CommunicationDirection | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, createdAt?: any | null } | null, email?: { __typename?: 'EmailMessage', id: string, subject?: string | null, snippet?: string | null, textExtract?: string | null, fromEmail?: string | null, fromName?: string | null, toEmails?: Array<string> | null, direction?: string | null, internalDate?: any | null } | null, metadata?: { __typename?: 'AiEmployeeActivityMetadata' } | { __typename?: 'AiEmployeeEscalationActivityMetadata' } | { __typename?: 'AiEmployeeRunActivityMetadata' } | { __typename?: 'AiEmployeeScheduleActivityMetadata' } | { __typename?: 'AppointmentActivityMetadata' } | { __typename?: 'CallActivityMetadata' } | { __typename?: 'ContactArchiveActivityMetadata' } | { __typename?: 'ContactPriceActivityMetadata' } | { __typename?: 'CsvRowImportedActivityMetadata' } | { __typename?: 'DeletedAppointmentActivityMetadata' } | { __typename?: 'DeletedTaskActivityMetadata' } | { __typename?: 'EmailActivityMetadata' } | { __typename?: 'FileActivityMetadata' } | { __typename?: 'FileDeletedActivityMetadata' } | { __typename?: 'ImportantNoteActivityMetadata' } | { __typename?: 'NoteActivityMetadata' } | { __typename?: 'PersonEmailActivityMetadata' } | { __typename?: 'PersonPhoneActivityMetadata' } | { __typename?: 'ReplyActivityMetadata' } | { __typename?: 'TagListUpdatedActivityMetadata' } | { __typename?: 'TaskActivityMetadata' } | { __typename?: 'TextActivityMetadata' } | { __typename?: 'UpdateSellerMotivationActivityMetadata' } | { __typename?: 'UpdateSellerTimelineActivityMetadata' } | { __typename?: 'UpdatedAppointmentActivityMetadata' } | { __typename?: 'UpdatedEmailActivityMetadata' } | { __typename?: 'UpdatedImportantNoteActivityMetadata' } | { __typename?: 'UpdatedPhoneActivityMetadata' } | { __typename?: 'UpdatedTaskActivityMetadata', taskId?: string | null, oldValues?: { __typename?: 'TaskValues', title?: string | null, endDate?: string | null, timezone?: string | null, taskType?: string | null, participants?: Array<string> | null } | null, newValues?: { __typename?: 'TaskValues', endDate?: string | null } | null } | { __typename?: 'UserIdsActivityMetadata' } | { __typename?: 'VoicemailLeftActivityMetadata' } | null }> | null } | null } | null };

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

export type DeleteContactListsMutationVariables = Exact<{
  listIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  dependencyResolution?: InputMaybe<DependencyResolutionInput>;
}>;


export type DeleteContactListsMutation = { __typename?: 'RootMutation', contactMutation?: { __typename?: 'ContactMutation', deleteContactLists?: { __typename?: 'Organization', id: string } | null } | null };

export type AddContactTagsMutationVariables = Exact<{
  contactIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  tagIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
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


export type ListContactCustomFieldsQuery = { __typename?: 'RootQuery', contactCustomFieldQuery?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType, description?: string | null, displayOrder: number, allowMultiple: boolean, defaultValue?: string | null, options?: Array<{ __typename?: 'ContactCustomFieldOption', id: string, label: string }> | null }> | null } | null };

export type CreateContactCustomFieldMutationVariables = Exact<{
  input: CreateCustomFieldInput;
}>;


export type CreateContactCustomFieldMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', createCustomField?: { __typename?: 'ContactCustomFieldQuery', getMyOrganizationsCustomFields?: Array<{ __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType }> | null } | null } | null };

export type UpdateContactCustomFieldMutationVariables = Exact<{
  customFieldId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  options?: InputMaybe<Array<UpsertCustomFieldOptionInput> | UpsertCustomFieldOptionInput>;
  defaultValue?: InputMaybe<Scalars['String']['input']>;
  optionDependencyResolutions?: InputMaybe<Array<DependencyResolutionInput> | DependencyResolutionInput>;
}>;


export type UpdateContactCustomFieldMutation = { __typename?: 'RootMutation', contactCustomFieldMutation?: { __typename?: 'ContactCustomFieldMutation', updateCustomField?: { __typename?: 'ContactCustomField', id: string, name: string, type: ContactCustomFieldType, description?: string | null, displayOrder: number, allowMultiple: boolean, defaultValue?: string | null } | null } | null };

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

export type ListInboxThreadsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortDirection>;
  channel?: InputMaybe<InboxFilterType>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  respondedOnly?: InputMaybe<Scalars['Boolean']['input']>;
  sentBy?: InputMaybe<Array<InboxSentBy> | InboxSentBy>;
  replySentiments?: InputMaybe<Array<ReplySentiment> | ReplySentiment>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  callCursor?: InputMaybe<CursorInput>;
  smsCursor?: InputMaybe<CursorInput>;
  emailCursor?: InputMaybe<CursorInput>;
}>;


export type ListInboxThreadsQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', paginateInbox?: { __typename?: 'InboxCursorPage', items?: Array<{ __typename?: 'InboxItem', id: string, type: InboxItemType, createdAt: any, seen: boolean, contactName?: string | null, contactE164PhoneNumber?: string | null, twilioPhoneNumberId?: string | null, emailThreadId?: string | null, direction?: CommunicationDirection | null, messagesCount?: number | null, replySentiment?: ReplySentiment | null, status?: CallStatus | null, durationSeconds?: number | null, summary?: string | null, hasRecording?: boolean | null, groupCount?: number | null, groupedCallIds?: Array<string> | null, subject?: string | null, snippet?: string | null, fromEmail?: string | null, fromName?: string | null, toEmails?: Array<string> | null, isRead?: boolean | null, potentialContacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, mostRecentMessage?: { __typename?: 'TwilioMessage', id: string, message?: string | null, direction?: CommunicationDirection | null, status?: TextMessageStatus | null, createdAt?: any | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null } | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null, user?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } | null }> | null, nextCallCursor?: { __typename?: 'Cursor', date: any, id: string } | null, nextSmsCursor?: { __typename?: 'Cursor', date: any, id: string } | null, nextEmailCursor?: { __typename?: 'Cursor', date: any, id: string } | null } | null } | null };

export type GetTextThreadMessagesQueryVariables = Exact<{
  contactPhoneNumber: Scalars['String']['input'];
  conversationId?: InputMaybe<Scalars['ID']['input']>;
  twilioPhoneNumberId?: InputMaybe<Scalars['ID']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortDirection>;
}>;


export type GetTextThreadMessagesQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', getInboxMessages?: Array<{ __typename?: 'TextConversation', id: string, contactE164PhoneNumber?: string | null, twilioPhoneNumberId?: string | null, seen?: boolean | null, potentialContacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, messages?: Array<{ __typename?: 'TwilioMessage', id: string, message?: string | null, direction?: CommunicationDirection | null, status?: TextMessageStatus | null, createdAt?: any | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, errorCode?: string | null, errorMessage?: string | null, workflowAutomationName?: string | null, agentName?: string | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null }> | null }> | null } | null };

export type ListContactTextThreadsQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ListContactTextThreadsQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', getContactTextThreads?: Array<{ __typename?: 'ContactTextThread', id: string, contactE164PhoneNumber: string, twilioPhoneNumberId: string, twilioPhoneNumberE164?: string | null }> | null } | null };

export type GetEmailThreadQueryVariables = Exact<{
  threadId: Scalars['ID']['input'];
}>;


export type GetEmailThreadQuery = { __typename?: 'RootQuery', inboxQuery?: { __typename?: 'InboxQuery', getEmailThreadMessages?: Array<{ __typename?: 'EmailMessage', id: string, threadId?: string | null, subject?: string | null, snippet?: string | null, textExtract?: string | null, fromEmail?: string | null, fromName?: string | null, toEmails?: Array<string> | null, ccEmails?: Array<string> | null, internalDate?: any | null, direction?: string | null, isRead?: boolean | null, workflowAutomationName?: string | null, attachments?: Array<{ __typename?: 'UploadedFile', id: string, fileName: string }> | null }> | null } | null };

export type GetCallRecordingQueryVariables = Exact<{
  callId: Scalars['ID']['input'];
}>;


export type GetCallRecordingQuery = { __typename?: 'RootQuery', callsQuery?: { __typename?: 'CallsQuery', callRecording?: { __typename?: 'Call', id: string, recordingUrl?: string | null, summary?: string | null, disposition?: CallDisposition | null, dispositionNote?: string | null, direction?: CommunicationDirection | null, status?: CallStatus | null, durationSeconds?: number | null, createdAt?: any | null, seen?: boolean | null, contactName?: string | null, contactE164PhoneNumber?: string | null, fromPhoneNumber?: string | null, toPhoneNumber?: string | null, agentName?: string | null, transcript?: Array<{ __typename?: 'Utterance', speaker: string, text: string, start?: number | null, end?: number | null }> | null, author?: { __typename?: 'ArtifactAuthor', kind: ArtifactAuthorKind, id?: string | null, name: string } | null } | null } | null };

export type ImportContactMutationVariables = Exact<{
  input: ImportContactInput;
}>;


export type ImportContactMutation = { __typename?: 'RootMutation', crmImportMutation?: { __typename?: 'CrmImportMutation', importContact?: { __typename?: 'ImportContactResult', contactId: string, wasCreated: boolean } | null } | null };

export type ImportContactNoteMutationVariables = Exact<{
  input: ImportContactNoteInput;
}>;


export type ImportContactNoteMutation = { __typename?: 'RootMutation', crmImportMutation?: { __typename?: 'CrmImportMutation', importContactNote?: { __typename?: 'ImportContactNoteResult', noteId: string, contactId: string, metadata?: any | null } | null } | null };

export type ImportDealMutationVariables = Exact<{
  input: ImportDealInput;
}>;


export type ImportDealMutation = { __typename?: 'RootMutation', crmImportMutation?: { __typename?: 'CrmImportMutation', importDeal?: { __typename?: 'ImportDealResult', dealId: string, wasCreated: boolean } | null } | null };

export type GetDealQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
}>;


export type GetDealQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'DealQuery', getDeal?: { __typename?: 'Deal', id: string, title: string, description?: string | null, priceCents?: any | null, closeDate?: any | null, isArchived: boolean, createdAt?: any | null, updatedAt?: any | null, lastStageChangeAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, participantSplits?: Array<{ __typename?: 'DealParticipantSplit', splitAmountCents?: any | null, splitPercentBps?: number | null, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } }> | null, stage?: { __typename?: 'DealStage', id: string, name: string } | null, pipeline?: { __typename?: 'DealPipeline', id: string, name: string } | null, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, customFieldValues?: Array<{ __typename?: 'DealCustomFieldValue', id: string, textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'DealCustomField', id: string, name: string, type: DealCustomFieldType } }> | null } | null } | null };

export type FindDealsQueryVariables = Exact<{
  titleContains?: InputMaybe<Scalars['String']['input']>;
  contactId?: InputMaybe<Scalars['ID']['input']>;
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  stageId?: InputMaybe<Scalars['ID']['input']>;
  isArchived?: InputMaybe<Scalars['Boolean']['input']>;
  hasAssignedUsers?: InputMaybe<Scalars['Boolean']['input']>;
  userIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindDealsQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'DealQuery', findDeals?: { __typename?: 'FindDealsResult', totalCount: number, hasMore: boolean, deals: Array<{ __typename?: 'Deal', id: string, title: string, priceCents?: any | null, closeDate?: any | null, isArchived: boolean, updatedAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, stage?: { __typename?: 'DealStage', id: string, name: string } | null, pipeline?: { __typename?: 'DealPipeline', id: string, name: string } | null, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null }> } | null } | null };

export type ListStalledDealsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListStalledDealsQuery = { __typename?: 'RootQuery', pipelineSummaryQuery?: { __typename?: 'PipelineSummaryQuery', stalledDealsPage?: { __typename?: 'StalledDealsPage', totalCount: number, hasMore: boolean, deals: Array<{ __typename?: 'StalledDeal', id: string, name: string, value: number, stage: string, pipelineId: string, contactName?: string | null, contactId?: string | null, inactiveDays: number }> } | null } | null };

export type ListPipelinesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPipelinesQuery = { __typename?: 'RootQuery', pipelineSummaryQuery?: { __typename?: 'PipelineSummaryQuery', summaries?: Array<{ __typename?: 'PipelineSummary', id: string, name: string, total: number, deals: number, stages: Array<{ __typename?: 'PipelineStageSummary', name: string, count: number, value: number }> }> | null } | null };

export type ListPipelineStagesQueryVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
}>;


export type ListPipelineStagesQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'DealQuery', getDealPipelineStages?: Array<{ __typename?: 'DealStage', id: string, name: string, order: number, isTerminal: boolean, winProbability: number }> | null } | null };

export type CreateDealMutationVariables = Exact<{
  input: CreateDealInput;
}>;


export type CreateDealMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', createDeal?: { __typename?: 'Deal', id: string, title: string, priceCents?: any | null, closeDate?: any | null, isArchived: boolean, updatedAt?: any | null, createdAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, participantSplits?: Array<{ __typename?: 'DealParticipantSplit', splitAmountCents?: any | null, splitPercentBps?: number | null, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } }> | null, customFieldValues?: Array<{ __typename?: 'DealCustomFieldValue', id: string, textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'DealCustomField', id: string, name: string, type: DealCustomFieldType } }> | null, stage?: { __typename?: 'DealStage', id: string, name: string } | null, pipeline?: { __typename?: 'DealPipeline', id: string, name: string } | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, properties?: Array<{ __typename?: 'Property', id: string, address?: { __typename?: 'Address', addressFull?: string | null } | null }> | null } | null } | null };

export type UpdateDealMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  input: DealMutationInput;
  expectedUpdatedAt?: InputMaybe<Scalars['DateTime']['input']>;
}>;


export type UpdateDealMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', updateDeal?: { __typename?: 'Deal', id: string, title: string, priceCents?: any | null, closeDate?: any | null, isArchived: boolean, updatedAt?: any | null, lastStageChangeAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, participantSplits?: Array<{ __typename?: 'DealParticipantSplit', splitAmountCents?: any | null, splitPercentBps?: number | null, user: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null } }> | null, customFieldValues?: Array<{ __typename?: 'DealCustomFieldValue', id: string, textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'DealCustomField', id: string, name: string, type: DealCustomFieldType } }> | null, stage?: { __typename?: 'DealStage', id: string, name: string } | null, pipeline?: { __typename?: 'DealPipeline', id: string, name: string } | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, properties?: Array<{ __typename?: 'Property', id: string, address?: { __typename?: 'Address', addressFull?: string | null } | null }> | null } | null } | null };

export type ArchiveDealMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  isArchived: Scalars['Boolean']['input'];
}>;


export type ArchiveDealMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', changeArchiveStatus?: { __typename?: 'Deal', id: string, title: string, isArchived: boolean } | null } | null };

export type CreatePipelineMutationVariables = Exact<{
  title: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  stages?: InputMaybe<Array<DealStageCreateInput> | DealStageCreateInput>;
}>;


export type CreatePipelineMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', createDealPipeline?: { __typename?: 'User', id: string, myPipelines?: Array<{ __typename?: 'DealPipeline', id: string, name: string, description?: string | null, dealsCount: number }> | null } | null } | null };

export type UpdatePipelineMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpdatePipelineMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', updateDealPipeline?: { __typename?: 'DealPipeline', id: string, name: string, description?: string | null, dealsCount: number } | null } | null };

export type AddPipelineStagesMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  stages: Array<DealStageCreateInput> | DealStageCreateInput;
}>;


export type AddPipelineStagesMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', createDealStages?: { __typename?: 'DealPipeline', id: string, name: string, stages?: Array<{ __typename?: 'DealStage', id: string, name: string, order: number, isTerminal: boolean, terminalType?: DealStageTerminalType | null, winProbability: number }> | null } | null } | null };

export type UpdatePipelineStageMutationVariables = Exact<{
  stageId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isTerminal?: InputMaybe<Scalars['Boolean']['input']>;
  terminalType?: InputMaybe<DealStageTerminalType>;
  winProbability?: InputMaybe<Scalars['Int']['input']>;
}>;


export type UpdatePipelineStageMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', updateDealStage?: { __typename?: 'DealStage', id: string, name: string, order: number, description?: string | null, isTerminal: boolean, terminalType?: DealStageTerminalType | null, winProbability: number } | null } | null };

export type ReorderPipelineStagesMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  stageIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type ReorderPipelineStagesMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', reorderDealStages?: { __typename?: 'DealPipeline', id: string, name: string, stages?: Array<{ __typename?: 'DealStage', id: string, name: string, order: number }> | null } | null } | null };

export type GetPipelineAnalyticsQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;


export type GetPipelineAnalyticsQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentPipelineInventory?: { __typename?: 'AgentPipelineInventory', asOfDate: any, period: AgentAnalyticsPeriod, reportingPeriod: string, startDate: any, endDate: any, pipelines: Array<{ __typename?: 'AgentPipelineRow', pipelineId: string, pipelineName: string, wonDeals: number, lostDeals: number, activeDealsCount: number, avgStageDurationDays?: number | null, currentStageMix: Array<{ __typename?: 'AgentStageMixItem', stageName: string, dealCount: number }> }> } | null } | null };

export type ListPipelineTransitionsQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  pipelineId?: InputMaybe<Scalars['ID']['input']>;
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;


export type ListPipelineTransitionsQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentPipelineTransitions?: Array<{ __typename?: 'AgentPipelineTransitionRow', asOfDate: any, pipelineId: string, pipelineName: string, fromStageId?: string | null, fromStageName?: string | null, toStageId?: string | null, toStageName?: string | null, transitionDealsCount: number, fromStageExitDealsCount: number, wonTransitionDealsCount: number, lostTransitionDealsCount: number, transitionsToWonStage?: boolean | null, transitionsToLostStage?: boolean | null }> | null } | null };

export type ListDealActivityQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  eventTypes?: InputMaybe<Array<DealActivityEventType> | DealActivityEventType>;
}>;


export type ListDealActivityQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'DealQuery', getDeal?: { __typename?: 'Deal', id: string, events?: Array<{ __typename?: 'DealActivityEvent', id: string, eventType: DealActivityEventType, createdAt: any, payload: any, actor?: { __typename?: 'DealActivityActor', userId: string, name: string } | null }> | null } | null } | null };

export type ListDealFilesQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListDealFilesQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'DealQuery', getDeal?: { __typename?: 'Deal', id: string, files?: Array<{ __typename?: 'UploadedFile', id: string, fileName: string, fileUrl?: string | null, createdAt?: any | null }> | null } | null } | null };

export type ListDealCommentsQueryVariables = Exact<{
  dealId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListDealCommentsQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'DealQuery', getDeal?: { __typename?: 'Deal', id: string, events?: Array<{ __typename?: 'DealActivityEvent', id: string, eventType: DealActivityEventType, createdAt: any, payload: any, actor?: { __typename?: 'DealActivityActor', userId: string, name: string } | null }> | null } | null } | null };

export type AddDealCommentMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  body: Scalars['String']['input'];
}>;


export type AddDealCommentMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', addDealComment?: { __typename?: 'DealActivityEvent', id: string, eventType: DealActivityEventType, createdAt: any, payload: any, actor?: { __typename?: 'DealActivityActor', userId: string, name: string } | null } | null } | null };

export type GetDeletionImpactQueryVariables = Exact<{
  targetKind: DependencyTargetKind;
  targetId: Scalars['ID']['input'];
}>;


export type GetDeletionImpactQuery = { __typename?: 'RootQuery', dependencyQuery?: { __typename?: 'DependencyQuery', getDeletionImpact?: { __typename?: 'DeletionImpact', impactVersion: string, requiresReplacement: boolean, warnings: Array<string>, groups: Array<{ __typename?: 'DependencyImpactGroup', groupKind: DependencyImpactGroupKind, title: string, count: number }>, replacementRequirements: Array<{ __typename?: 'DependencyReplacementRequirement', targetKind: DependencyTargetKind, targetId: string, title: string, options: Array<{ __typename?: 'DependencyReplacementOption', id: string, label: string, subtitle?: string | null }> }> } | null } | null };

export type DeletePipelineMutationVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
  dependencyResolution: DependencyResolutionInput;
}>;


export type DeletePipelineMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', deleteDealPipeline?: { __typename?: 'User', id: string } | null } | null };

export type DeletePipelineStageMutationVariables = Exact<{
  stageId: Scalars['ID']['input'];
  dependencyResolution: DependencyResolutionInput;
}>;


export type DeletePipelineStageMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', deleteDealStage?: { __typename?: 'DealPipeline', id: string } | null } | null };

export type ListDealCustomFieldsQueryVariables = Exact<{
  pipelineId: Scalars['ID']['input'];
}>;


export type ListDealCustomFieldsQuery = { __typename?: 'RootQuery', dealCustomFieldQuery?: { __typename?: 'DealCustomFieldQuery', getPipelineCustomFields?: Array<{ __typename?: 'DealCustomField', id: string, name: string, type: DealCustomFieldType, displayOrder: number, allowMultiple: boolean, defaultValue?: string | null, options?: Array<{ __typename?: 'DealCustomFieldOption', id: string, label: string }> | null }> | null } | null };

export type CreateDealCustomFieldMutationVariables = Exact<{
  input: CreateDealCustomFieldInput;
  pipelineId: Scalars['ID']['input'];
}>;


export type CreateDealCustomFieldMutation = { __typename?: 'RootMutation', dealCustomFieldMutation?: { __typename?: 'DealCustomFieldMutation', createCustomField?: { __typename?: 'DealCustomFieldQuery', getPipelineCustomFields?: Array<{ __typename?: 'DealCustomField', id: string, name: string, type: DealCustomFieldType }> | null } | null } | null };

export type AttachDealFileMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  artifactId: Scalars['ID']['input'];
}>;


export type AttachDealFileMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', attachDealFileFromArtifact?: { __typename?: 'UploadedFile', id: string, fileName: string, fileUrl?: string | null, createdAt?: any | null } | null } | null };

export type RemoveDealFileMutationVariables = Exact<{
  dealId: Scalars['ID']['input'];
  fileId: Scalars['ID']['input'];
}>;


export type RemoveDealFileMutation = { __typename?: 'RootMutation', dealMutation?: { __typename?: 'DealMutation', removeDealFiles?: { __typename?: 'Deal', id: string } | null } | null };

export type ListFormsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListFormsQuery = { __typename?: 'RootQuery', embedFormQuery?: { __typename?: 'EmbedFormQuery', list?: Array<{ __typename?: 'EmbedForm', id: string, name: string, slug?: string | null, status: EmbedFormStatus, source?: string | null, ownerType: EmbedFormOwnerType, publicUrl: string, shortUrl?: string | null, submissionCount: number, createdAt: any, updatedAt: any }> | null } | null };

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

export type ListNotificationsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['String']['input']>;
  notificationTypeFilter?: InputMaybe<Scalars['String']['input']>;
  seen?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListNotificationsQuery = { __typename?: 'RootQuery', notificationQuery?: { __typename?: 'NotificationQuery', paginateUserNotifications?: { __typename?: 'PaginateUserNotificationsResponse', total: number, hasUnread: boolean, canFetchNext?: boolean | null, canFetchPrevious?: boolean | null, notifications: Array<{ __typename?: 'UserNotification', id: string, userId?: string | null, notificationType: string, title: string, content: string, seen: boolean, createdAt: string, actionType?: string | null, actionTargetId?: string | null, contactId?: string | null, dealId?: string | null, noteId?: string | null, replyId?: string | null, taskId?: string | null, callId?: string | null }> } | null } | null };

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

export type ProvisionPhoneNumberMutationVariables = Exact<{
  phoneNumber: Scalars['String']['input'];
  targetUserId: Scalars['ID']['input'];
}>;


export type ProvisionPhoneNumberMutation = { __typename?: 'RootMutation', twilioMutation?: { __typename?: 'TwilioMutation', provisionPhoneNumber?: { __typename?: 'TwilioPhoneNumber', id: string, e164Number: string, isPrimary?: boolean | null, canSendSms: boolean } | null } | null };

export type GetPropertyQueryVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;


export type GetPropertyQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchProperty?: { __typename?: 'Property', id: string, skipTraceStatus?: SkipTraceStatus | null, lastSkiptracedAt?: any | null, isStaleSkiptrace?: boolean | null, lastPropertySignalDate?: any | null, spicyLeadScore?: number | null, address?: { __typename?: 'Address', line1: string, line2?: string | null, city: string, state: string, zip: string, countyName?: string | null, addressFull?: string | null } | null } | null } | null };

export type GetPropertyOwnersQueryVariables = Exact<{
  propertyId: Scalars['ID']['input'];
}>;


export type GetPropertyOwnersQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchProperty?: { __typename?: 'Property', id: string, skipTraceStatus?: SkipTraceStatus | null, lastSkiptracedAt?: any | null, isStaleSkiptrace?: boolean | null, address?: { __typename?: 'Address', addressFull?: string | null } | null, people?: Array<{ __typename?: 'PropertyPerson', id: string, firstName?: string | null, middleName?: string | null, lastName?: string | null, suffix?: string | null, age?: number | null, isRelative?: boolean | null, relativeIds: Array<string>, ranking?: number | null, deceased?: boolean | null, isNameOnDeed?: boolean | null, phoneNumbers?: Array<{ __typename?: 'PropertyPersonPhoneNumber', number: string, type: string, ranking: number, dncStatus?: { __typename?: 'DncStatus', isDnc: boolean, isLitigator: boolean } | null }> | null, emails?: Array<{ __typename?: 'PropertyPersonEmail', email: string, ranking: number }> | null }> | null } | null } | null };

export type FindPropertiesQueryVariables = Exact<{
  addressString: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindPropertiesQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', autocompleteProperties?: { __typename?: 'PropertyAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'PropertyAutocompleteSuggestion', esId: string, fullAddress: string, line1: string, line2?: string | null, city: string, state: string, zipCode: string, parcelId: string, mlsStatus?: PropertyMlsStatus | null }> } | null } | null };

export type ListPropertyFiltersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListPropertyFiltersQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilters?: Array<{ __typename?: 'Filter', id: string, name: string, description?: string | null, folderId?: string | null, isPrivate: boolean, isDefault: boolean, userId?: string | null, createdAt: any }> | null } | null };

export type GetFilterQueryVariables = Exact<{
  filterId: Scalars['ID']['input'];
}>;


export type GetFilterQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', getFilter?: { __typename?: 'Filter', id: string, name: string, type: FilterType, description?: string | null, folderId?: string | null, root: any, isPrivate: boolean, isDefault: boolean, userId?: string | null, createdAt: any, updatedAt: any } | null } | null };

export type FilterPropertiesQueryVariables = Exact<{
  filterId?: InputMaybe<Scalars['ID']['input']>;
  filterTree?: InputMaybe<Scalars['JSON']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
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


export type FindPropertiesByParcelQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', autocompletePropertiesByParcel?: { __typename?: 'PropertyAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'PropertyAutocompleteSuggestion', esId: string, fullAddress: string, line1: string, line2?: string | null, city: string, state: string, zipCode: string, parcelId: string, mlsStatus?: PropertyMlsStatus | null }> } | null } | null };

export type FindPropertiesByMlsIdQueryVariables = Exact<{
  mlsId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type FindPropertiesByMlsIdQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', autocompletePropertiesByMlsId?: { __typename?: 'PropertyAutocompleteResponse', totalCount: number, hasMore: boolean, results: Array<{ __typename?: 'PropertyAutocompleteSuggestion', esId: string, fullAddress: string, line1: string, line2?: string | null, city: string, state: string, zipCode: string, parcelId: string, mlsStatus?: PropertyMlsStatus | null }> } | null } | null };

export type GetRelatedPropertiesQueryVariables = Exact<{
  propertyIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type GetRelatedPropertiesQuery = { __typename?: 'RootQuery', property?: { __typename?: 'PropertyQuery', fetchRelatedProperties?: Array<{ __typename?: 'PropertyMetadata', propertyId?: string | null, propertyType?: PropertyType | null, numberOfBedrooms?: number | null, numberOfBathrooms?: number | null, livingAreaSquareFeet?: number | null, yearBuilt?: number | null, lastSaleDate?: any | null, lastSaleAmount?: any | null, estimatedValueDollars?: any | null, ownerOccupied?: boolean | null, mlsStatus?: PropertyMlsStatus | null, spicyLeadScore?: number | null } | null> | null } | null };

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
  propertyIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  listIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  totalCount: Scalars['Int']['input'];
}>;


export type AddPropertiesToListMutation = { __typename?: 'RootMutation', propertyMutation?: { __typename?: 'PropertyMutation', addPropertiesToList?: { __typename?: 'AddPropertiesToListResponse', mode: AddPropertiesToListMode, bulkTaskId?: string | null } | null } | null };

export type SaveFilterMutationVariables = Exact<{
  type: FilterType;
  name: Scalars['String']['input'];
  root: Scalars['JSON']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type SaveFilterMutation = { __typename?: 'RootMutation', filterMutation?: { __typename?: 'FilterMutation', saveFilter?: { __typename?: 'Filter', id: string, name: string, type: FilterType, isPrivate: boolean, isDefault: boolean, createdAt: any, warnings?: Array<string> | null } | null } | null };

export type UpdateFilterMutationVariables = Exact<{
  filterId: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  root?: InputMaybe<Scalars['JSON']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
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


export type ListFilterFieldNamesQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', listFilterFields?: Array<{ __typename?: 'FilterFieldDescriptor', fieldId: string, label: string, category: string, component: string, hidden: boolean }> | null } | null };

export type ListFilterFieldsQueryVariables = Exact<{
  type: FilterType;
  fieldIds?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type ListFilterFieldsQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', listFilterFields?: Array<{ __typename?: 'FilterFieldDescriptor', fieldId: string, label: string, category: string, description?: string | null, component: string, acceptedValueKeys?: Array<string> | null, hidden: boolean, valueShapes?: Array<{ __typename?: 'FilterFieldValueShape', discriminatorKey?: string | null, discriminatorValue?: string | null, scalar?: { __typename?: 'FilterFieldScalarShape', type: string, acceptedValues?: Array<string> | null } | null, keys: Array<{ __typename?: 'FilterFieldValueKey', key: string, required: boolean, acceptedValues?: Array<string> | null }> }> | null, options?: Array<{ __typename?: 'FilterFieldOption', label: string, value?: string | null }> | null }> | null } | null };

export type ListMyTasksQueryVariables = Exact<{
  taskStatus?: InputMaybe<TaskStatus>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  dueBefore?: InputMaybe<Scalars['DateTime']['input']>;
  dueAfter?: InputMaybe<Scalars['DateTime']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  timezone?: InputMaybe<Timezone>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListMyTasksQuery = { __typename?: 'RootQuery', users?: { __typename?: 'UsersQuery', getUserTasks?: { __typename?: 'PaginateTaskResponse', total: number, tasks: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, contact?: { __typename?: 'Contact', id: string, name?: string | null } | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> } | null } | null };

export type ListContactTasksQueryVariables = Exact<{
  contactId: Scalars['ID']['input'];
}>;


export type ListContactTasksQuery = { __typename?: 'RootQuery', contactQuery?: { __typename?: 'ContactsQuery', contact?: { __typename?: 'Contact', id: string, name?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null } | null };

export type CreateTaskOnContactMutationVariables = Exact<{
  contactId: Scalars['String']['input'];
  title: Scalars['String']['input'];
  dueDate: Scalars['DateTime']['input'];
  timezone: Timezone;
  description?: InputMaybe<Scalars['String']['input']>;
  taskType?: InputMaybe<Scalars['String']['input']>;
  participants?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  dealIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
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
}>;


export type CreateTaskOnDealMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', createTaskOnDeal?: { __typename?: 'Deal', id: string, title: string, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null } | null };

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


export type CompleteTaskByIdMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', updateTasksCompletedByIds?: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, taskType?: string | null, timezone?: Timezone | null, completedAt?: any | null, dueDate?: any | null, participants?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null }> | null } | null };

export type CompleteTaskMutationVariables = Exact<{
  taskId: Scalars['String']['input'];
  contactId: Scalars['String']['input'];
  isCompleted?: Scalars['Boolean']['input'];
}>;


export type CompleteTaskMutation = { __typename?: 'RootMutation', tasksMutation?: { __typename?: 'TasksMutation', updateTaskCompleted?: { __typename?: 'Contact', id: string, name?: string | null, tasks?: Array<{ __typename?: 'Task', id: string, title?: string | null, completedAt?: any | null, dueDate?: any | null }> | null } | null } | null };

export type ListTeammatesQueryVariables = Exact<{
  searchTerm?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListTeammatesQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', getTeamAutocomplete?: Array<{ __typename?: 'UserAutocompleteMatch', userId: string, firstName?: string | null, lastName?: string | null, email?: string | null, phoneNumber?: string | null }> | null } | null };

export type GetTeammatesByIdsQueryVariables = Exact<{
  userIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type GetTeammatesByIdsQuery = { __typename?: 'RootQuery', teamQuery?: { __typename?: 'TeamQuery', getTeamMembersByIds?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email?: string | null }> | null } | null };

export type ListTeamInvitesQueryVariables = Exact<{ [key: string]: never; }>;


export type ListTeamInvitesQuery = { __typename?: 'RootQuery', organization?: { __typename?: 'Organization', id: string, invitations?: Array<{ __typename?: 'InvitationLink', id: string, isAlive?: boolean | null, isPermanent?: boolean | null, phoneRequired?: boolean | null, userType?: OrganizationToUserMappingType | null, email?: string | null, createdAt?: any | null }> | null } | null };

export type CreateTeamInviteMutationVariables = Exact<{
  userType?: InputMaybe<OrganizationToUserMappingType>;
  emails?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
  isPermanent?: InputMaybe<Scalars['Boolean']['input']>;
  phoneRequired?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CreateTeamInviteMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', createInvitationLink?: { __typename?: 'InvitationLink', id: string, isAlive?: boolean | null, isPermanent?: boolean | null, phoneRequired?: boolean | null, userType?: OrganizationToUserMappingType | null, email?: string | null, createdAt?: any | null } | null } | null };

export type RevokeTeamInviteMutationVariables = Exact<{
  invitationId: Scalars['ID']['input'];
}>;


export type RevokeTeamInviteMutation = { __typename?: 'RootMutation', organizationMutation?: { __typename?: 'OrganizationMutation', revokeInvitation?: { __typename?: 'InvitationLink', id: string, isAlive?: boolean | null } | null } | null };

export type GetTeamAnalyticsOverviewQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;


export type GetTeamAnalyticsOverviewQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentTeamOverview?: { __typename?: 'AgentTeamOverview', asOfDate: any, period: AgentAnalyticsPeriod, reportingPeriod: string, startDate: any, endDate: any, summary: { __typename?: 'AgentTeamSummary', agentCount: number, calls: number, completedCalls: number, conversationCalls: number, callsDeltaPct?: number | null, texts: number, textsDeltaPct?: number | null, emails: number, emailsDeltaPct?: number | null, tasks: number, tasksDeltaPct?: number | null, appointments: number, appointmentsDeltaPct?: number | null, newLeads: number, newLeadsDeltaPct?: number | null, notActedOnCount: number, activeLeadsCount: number, warmLeadsCount: number, coolingLeadsCount: number, coldLeadsCount: number, deadLeadsCount: number }, agents: Array<{ __typename?: 'AgentOverviewRow', userId: string, userName: string, userEmail?: string | null, calls: number, texts: number, emails: number, tasks: number, appointments: number, newLeads: number, notActedOnCount: number, avgSpeedToFirstCallMinutes?: number | null, avgSpeedToFirstMessageMinutes?: number | null, activeLeadsCount: number, warmLeadsCount: number, coolingLeadsCount: number, coldLeadsCount: number, deadLeadsCount: number, score: number, conversationRate?: number | null }>, pipelineExposure: Array<{ __typename?: 'AgentTeamPipelineExposureRow', pipelineId: string, pipelineName: string, userId: string, userName: string, wonDealsCount: number, lostDealsCount: number, commissionEarnedCents: number }> } | null } | null };

export type GetTeamActivityTimeseriesQueryVariables = Exact<{
  orgId: Scalars['ID']['input'];
  period?: InputMaybe<AgentAnalyticsPeriod>;
}>;


export type GetTeamActivityTimeseriesQuery = { __typename?: 'RootQuery', teamAnalyticsQuery?: { __typename?: 'TeamAnalyticsQuery', agentTeamActivityTimeseries?: { __typename?: 'AgentTeamActivityTimeseries', asOfDate: any, rows: Array<{ __typename?: 'AgentTeamActivityTimeseriesRow', asOfDate: any, calls: number, texts: number, emails: number, tasks: number, appointments: number, activeAgents: number, newLeads: number }> } | null } | null };

export type ListWorkflowsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListWorkflowsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroupsPage?: { __typename?: 'WorkflowGroupPage', total: number, items: Array<{ __typename?: 'WorkflowGroup', id: string, name: string, description?: string | null, status: WorkflowGroupStatus, workflowType?: WorkflowType | null, workflowDomain?: WorkflowDomain | null, systemCategory?: string | null, folderId?: string | null, createdAt: any, updatedAt: any, archivedAt?: any | null }> } | null } | null };

export type GetWorkflowQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;


export type GetWorkflowQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, description?: string | null, status: WorkflowGroupStatus, workflowType?: WorkflowType | null, workflowDomain?: WorkflowDomain | null, systemCategory?: string | null, folderId?: string | null, createdAt: any, updatedAt: any, archivedAt?: any | null, currentVersion?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null } | null, pendingDraft?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null } | null, versions?: Array<{ __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, createdAt: any, updatedAt: any }> | null, draftValidation?: { __typename?: 'WorkflowDraftValidation', isValid: boolean, errors: Array<string> } | null } | null } | null };

export type GetWorkflowVersionGraphQueryVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
}>;


export type GetWorkflowVersionGraphQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowAutomation?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, description?: string | null, status: WorkflowAutomationStatus, workflowType: WorkflowType, workflowDomain: WorkflowDomain, stepKinds?: Array<string> | null, graph?: any | null } | null } | null };

export type ListWorkflowRunsQueryVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  statuses?: InputMaybe<Array<WorkflowAutomationRunStatus> | WorkflowAutomationRunStatus>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListWorkflowRunsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', listWorkflowRuns?: Array<{ __typename?: 'WorkflowAutomationRun', id: string, status: WorkflowAutomationRunStatus, dryRun: boolean, createdAt: any, updatedAt: any, scheduledExecution?: any | null, contact?: { __typename?: 'Contact', id: string, name?: string | null } | null }> | null } | null };

export type GetContentTemplateQueryVariables = Exact<{
  templateId: Scalars['ID']['input'];
}>;


export type GetContentTemplateQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', contentTemplate?: { __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, bodyContent: string, bodyFormat: string, subjectContent?: string | null, folderId?: string | null, createdAt: any, updatedAt: any } | null } | null };

export type ListContentTemplatesQueryVariables = Exact<{
  type?: InputMaybe<ContentTemplateType>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type ListContentTemplatesQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', listContentTemplates?: Array<{ __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, folderId?: string | null, updatedAt: any }> | null } | null };

export type ListContentTemplateFoldersQueryVariables = Exact<{ [key: string]: never; }>;


export type ListContentTemplateFoldersQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', listContentTemplateFolders?: Array<{ __typename?: 'ContentTemplateFolder', id: string, name: string, parentFolderId?: string | null, templateCount: number, displayOrder: number }> | null } | null };

export type GetWorkflowStatsQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;


export type GetWorkflowStatsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, stats: { __typename?: 'WorkflowGroupStats', totalRuns: number, lastRunAt?: any | null, activeRuns: number, completedRuns: number, pausedRuns: number, stoppedRuns: number, failedRuns: number, messagesSent: number, replyRate?: number | null, bounceRate?: number | null, positiveReplyRate?: number | null, negativeReplyRate?: number | null, runsThatSentMessageCount: number, runsWithResponseCount: number } } | null } | null };

export type GetWorkflowVersionStatsQueryVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
}>;


export type GetWorkflowVersionStatsQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowAutomation?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus, stats: { __typename?: 'WorkflowAutomationStats', totalRuns: number, activeRuns: number, completedRuns: number, pausedRuns: number, stoppedRuns: number, failedRuns: number, messagesSent: number, sentEmailCount: number, sentTextCount: number, bouncedEmailCount: number, failedTextCount: number, replyRate?: number | null, bounceRate?: number | null, positiveReplyRate?: number | null, negativeReplyRate?: number | null, positiveReplyCount: number, negativeReplyCount: number, genuineReplyCount: number, optOutReplyCount: number, unreachableReplyCount: number } } | null } | null };

export type ListWorkflowPerformanceQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ListWorkflowPerformanceQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroupsPage?: { __typename?: 'WorkflowGroupPage', total: number, items: Array<{ __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, workflowType?: WorkflowType | null, workflowDomain?: WorkflowDomain | null, stats: { __typename?: 'WorkflowGroupStats', totalRuns: number, activeRuns: number, completedRuns: number, replyRate?: number | null, lastRunAt?: any | null } }> } | null } | null };

export type GetWorkflowThrottleUsageQueryVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  rangeDays: Scalars['Int']['input'];
}>;


export type GetWorkflowThrottleUsageQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', workflowGroupThrottleUsage?: { __typename?: 'WorkflowGroupThrottleUsage', throttleType: string, dailyCap?: number | null, usedToday: number, history: Array<{ __typename?: 'ThrottleDailyUsage', day: any, unitsSent: number }> } | null } | null };

export type CreateWorkflowMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  workflowType: WorkflowType;
  workflowDomain: WorkflowDomain;
  templateId?: InputMaybe<Scalars['String']['input']>;
  systemCategory?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createWorkflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, workflowType?: WorkflowType | null, workflowDomain?: WorkflowDomain | null, pendingDraft?: { __typename?: 'WorkflowAutomation', id: string, name: string, status: WorkflowAutomationStatus } | null } | null } | null };

export type CreateOrReturnWorkflowDraftMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;


export type CreateOrReturnWorkflowDraftMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createOrReturnWorkflowGroupDraft?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null, graph?: any | null } | null } | null };

export type UpdateWorkflowGraphMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  workflowGraph: Scalars['SuperJSON']['input'];
}>;


export type UpdateWorkflowGraphMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowAutomationGraph?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null } | null } | null };

export type RenameWorkflowMutationVariables = Exact<{
  workflowAutomationId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
}>;


export type RenameWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowAutomationName?: { __typename?: 'WorkflowAutomation', id: string, name: string, description?: string | null, status: WorkflowAutomationStatus } | null } | null };

export type PromoteWorkflowDraftMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  pauseInFlightRuns?: Scalars['Boolean']['input'];
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

export type ResumeWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;


export type ResumeWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', resumeMostRecentlyPausedWorkflow?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, currentVersion?: { __typename?: 'WorkflowAutomation', id: string, status: WorkflowAutomationStatus } | null } | null } | null };

export type DuplicateWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type DuplicateWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', duplicateWorkflowGroup?: { __typename?: 'WorkflowGroup', id: string, name: string, status: WorkflowGroupStatus, workflowType?: WorkflowType | null, workflowDomain?: WorkflowDomain | null } | null } | null };

export type DeleteWorkflowMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
}>;


export type DeleteWorkflowMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', softDeleteWorkflowGroup?: { __typename?: 'WorkflowAutomationsQuery', workflowGroup?: { __typename?: 'WorkflowGroup', id: string, status: WorkflowGroupStatus, archivedAt?: any | null } | null } | null } | null };

export type TriggerWorkflowRunMutationVariables = Exact<{
  workflowGroupId: Scalars['ID']['input'];
  recordId: Scalars['ID']['input'];
}>;


export type TriggerWorkflowRunMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', triggerWorkflowRun?: { __typename?: 'WorkflowAutomationRun', id: string, status: WorkflowAutomationRunStatus, dryRun: boolean, createdAt: any, scheduledExecution?: any | null } | null } | null };

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

export type CreateContentTemplateMutationVariables = Exact<{
  input: CreateContentTemplateInput;
}>;


export type CreateContentTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createContentTemplate?: { __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, folderId?: string | null } | null } | null };

export type UpdateContentTemplateMutationVariables = Exact<{
  input: UpdateContentTemplateInput;
}>;


export type UpdateContentTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateContentTemplate?: { __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, updatedAt: any } | null } | null };

export type DeleteContentTemplateMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
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


export type CreateContentTemplateFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', createContentTemplateFolder?: { __typename?: 'ContentTemplateFolder', id: string, name: string, parentFolderId?: string | null, displayOrder: number } | null } | null };

export type RenameContentTemplateFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type RenameContentTemplateFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', renameContentTemplateFolder?: { __typename?: 'ContentTemplateFolder', id: string, name: string } | null } | null };

export type DeleteContentTemplateFolderMutationVariables = Exact<{
  folderId: Scalars['ID']['input'];
}>;


export type DeleteContentTemplateFolderMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', deleteContentTemplateFolder?: { __typename?: 'WorkflowAutomationsQuery', listContentTemplateFolders?: Array<{ __typename?: 'ContentTemplateFolder', id: string, name: string }> | null } | null } | null };

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
}>;


export type ApplyTaskTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', applyTaskTemplate?: { __typename?: 'Task', id: string, title?: string | null, description?: string | null, endDate?: any | null, completedAt?: any | null } | null } | null };
