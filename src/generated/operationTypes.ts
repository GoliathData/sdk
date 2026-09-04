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

export enum ActivityDirection {
  Inbound = 'INBOUND',
  Outbound = 'OUTBOUND'
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

export enum AgentAnalyticsPeriod {
  FourteenDays = 'FOURTEEN_DAYS',
  SevenDays = 'SEVEN_DAYS',
  SixtyDays = 'SIXTY_DAYS',
  ThirtyDays = 'THIRTY_DAYS',
  ThisMonth = 'THIS_MONTH',
  YearToDate = 'YEAR_TO_DATE'
}

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
 * Unit for `AppointmentReminder.amountBefore`. Capped at DAYS — a reminder
 * more than a day before the appointment isn't a meaningful product use
 * case.
 */
export enum AppointmentReminderTimeUnit {
  Days = 'DAYS',
  Hours = 'HOURS',
  Minutes = 'MINUTES'
}

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

export enum CallDisposition {
  BadNumber = 'BadNumber',
  Callback = 'Callback',
  Connected = 'Connected',
  NoAnswer = 'NoAnswer',
  NotInterested = 'NotInterested',
  Voicemail = 'Voicemail'
}

export enum CallStatus {
  Completed = 'COMPLETED',
  NoAnswer = 'NO_ANSWER',
  Ringing = 'RINGING'
}

export enum CommunicationDirection {
  Inbound = 'INBOUND',
  Outbound = 'OUTBOUND'
}

export enum ContactAgentStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
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

export enum ContactToUserMappingStatus {
  Participant = 'PARTICIPANT',
  PointPerson = 'POINT_PERSON',
  Revoked = 'REVOKED'
}

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

export type ContentTemplateMutationInput = {
  attachments?: InputMaybe<Array<ContentTemplateAttachmentInput>>;
  bodyContent: Scalars['String']['input'];
  bodyFormat?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subjectContent?: InputMaybe<Scalars['String']['input']>;
  taskConfig?: InputMaybe<TaskTemplateConfigInput>;
  taskSetSteps?: InputMaybe<Array<TaskSetStepInput>>;
};

export enum ContentTemplateType {
  Email = 'EMAIL',
  Note = 'NOTE',
  Sms = 'SMS',
  Task = 'TASK',
  /**
   * A named collection of TASK templates, each with its own due offset and
   * time-of-day, applied to a contact in one gesture. Carries no body and no
   * taskConfig of its own — see `ContentTemplate.taskSetSteps`.
   */
  TaskSet = 'TASK_SET'
}

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

export type CreateSubContactInput = {
  emails?: InputMaybe<Array<CreateContactEmailInput>>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  relation?: InputMaybe<Scalars['String']['input']>;
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

export enum CreditType {
  /** AI agent usage (AI Agent Credits). Purchase-only: 1 credit = 1 cent. */
  AiCredits = 'AI_CREDITS',
  EmailVerification = 'EMAIL_VERIFICATION',
  ExportProperties = 'EXPORT_PROPERTIES',
  Skiptrace = 'SKIPTRACE'
}

export type CursorInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

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

export enum DealType {
  Buyer = 'BUYER',
  Investment = 'INVESTMENT',
  Listing = 'LISTING',
  Undetermined = 'UNDETERMINED'
}

export enum DependencyImpactGroupKind {
  AgentConfig = 'AGENT_CONFIG',
  AssignmentPolicy = 'ASSIGNMENT_POLICY',
  AutomationTrigger = 'AUTOMATION_TRIGGER',
  BulkTask = 'BULK_TASK',
  CallList = 'CALL_LIST',
  CallRoundRobinPolicy = 'CALL_ROUND_ROBIN_POLICY',
  ContentTemplate = 'CONTENT_TEMPLATE',
  CronJob = 'CRON_JOB',
  DialerCampaignConfig = 'DIALER_CAMPAIGN_CONFIG',
  EmbedForm = 'EMBED_FORM',
  Filter = 'FILTER',
  IncomingWebhook = 'INCOMING_WEBHOOK',
  LibraryFolderContents = 'LIBRARY_FOLDER_CONTENTS',
  LiveDeals = 'LIVE_DEALS',
  LiveStages = 'LIVE_STAGES',
  MarketingCampaign = 'MARKETING_CAMPAIGN',
  OrganizationApiKey = 'ORGANIZATION_API_KEY',
  OrganizationSite = 'ORGANIZATION_SITE',
  OrgPartnership = 'ORG_PARTNERSHIP',
  Task = 'TASK',
  TaskSetSteps = 'TASK_SET_STEPS',
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

export enum DependencyTargetKind {
  Agent = 'AGENT',
  ContactCustomField = 'CONTACT_CUSTOM_FIELD',
  ContactCustomFieldOption = 'CONTACT_CUSTOM_FIELD_OPTION',
  ContactList = 'CONTACT_LIST',
  ContactTag = 'CONTACT_TAG',
  ContentTemplate = 'CONTENT_TEMPLATE',
  Deal = 'DEAL',
  DealCustomField = 'DEAL_CUSTOM_FIELD',
  DealCustomFieldOption = 'DEAL_CUSTOM_FIELD_OPTION',
  DealPipeline = 'DEAL_PIPELINE',
  DealStage = 'DEAL_STAGE',
  DealStageDeals = 'DEAL_STAGE_DEALS',
  EmailIdentity = 'EMAIL_IDENTITY',
  EmbedForm = 'EMBED_FORM',
  Filter = 'FILTER',
  LibraryFolder = 'LIBRARY_FOLDER',
  MarketingCampaign = 'MARKETING_CAMPAIGN',
  PropertyList = 'PROPERTY_LIST',
  PropertyTag = 'PROPERTY_TAG',
  ScraperPipeline = 'SCRAPER_PIPELINE',
  TwilioPhoneNumber = 'TWILIO_PHONE_NUMBER',
  UploadedFile = 'UPLOADED_FILE',
  User = 'USER',
  UserGroup = 'USER_GROUP',
  WorkflowAutomation = 'WORKFLOW_AUTOMATION',
  WorkflowGroup = 'WORKFLOW_GROUP',
  WorkflowWebhookCredential = 'WORKFLOW_WEBHOOK_CREDENTIAL'
}

export enum EmailProvider {
  Gmail = 'GMAIL',
  Outlook = 'OUTLOOK'
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

export enum EmbedFormOwnerType {
  Org = 'ORG',
  User = 'USER'
}

export enum EmbedFormStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Inactive = 'INACTIVE'
}

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

export enum OrganizationToUserMappingType {
  Admin = 'ADMIN',
  Isa = 'ISA',
  Member = 'MEMBER'
}

export enum PhoneType {
  Landline = 'LANDLINE',
  Mobile = 'MOBILE',
  Residential = 'RESIDENTIAL',
  Unknown = 'UNKNOWN'
}

export enum PlanCode {
  Growth = 'GROWTH',
  Ramp = 'RAMP',
  Scale = 'SCALE'
}

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

export enum SkipTraceStatus {
  Failed = 'FAILED',
  NotEnoughBalance = 'NOT_ENOUGH_BALANCE',
  NoRecordsFound = 'NO_RECORDS_FOUND',
  Processing = 'PROCESSING',
  RecordsFound = 'RECORDS_FOUND'
}

export type Sort = {
  direction: SortDirection;
  field: Scalars['String']['input'];
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

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

export type SubContactMutationInput = {
  contactId: Scalars['String']['input'];
  emails?: InputMaybe<Array<CreateContactEmailInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  note?: InputMaybe<Scalars['String']['input']>;
  phoneNumbers?: InputMaybe<Array<CreateContactPhoneNumberInput>>;
  relation?: InputMaybe<Scalars['String']['input']>;
};

/** The channel a value-level opt-out suppresses. SMS/VOICE take a phone value; EMAIL takes an email address. */
export enum SuppressionMedium {
  Email = 'EMAIL',
  Sms = 'SMS',
  Voice = 'VOICE'
}

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

export enum TextMessageStatus {
  Delivered = 'DELIVERED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Sent = 'SENT',
  Skipped = 'SKIPPED'
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

export type UpsertCustomFieldOptionInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label: Scalars['String']['input'];
};

export enum VerificationStatus {
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED',
  Wrong = 'WRONG'
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

export enum WorkflowDomain {
  Appointment = 'APPOINTMENT',
  Contact = 'CONTACT',
  Deal = 'DEAL',
  Event = 'EVENT',
  Property = 'PROPERTY',
  Slack = 'SLACK'
}

/**
 * Rolled-up lifecycle status for a `WorkflowGroup`, derived from the
 * statuses of its child `WorkflowAutomation` versions:
 *
 *   - ACTIVE: at least one child is ACTIVE.
 *   - PAUSED: no ACTIVE child, but at least one PAUSED or SUSPENDED child.
 *   - DRAFT:  otherwise (only DRAFT/PENDING_REVIEW children, or none).
 *
 * There is deliberately no SUSPENDED bucket — at list altitude a system stop and
 * a user pause are the same fact, "published and not running" — but a SUSPENDED
 * child still has to REACH that bucket. Leaving it out of the ladder rolled a
 * published-then-suspended group up to DRAFT, which says the opposite.
 *
 * Drives the single status pill in the Automations table.
 */
export enum WorkflowGroupStatus {
  Active = 'ACTIVE',
  Draft = 'DRAFT',
  Paused = 'PAUSED'
}

export enum WorkflowType {
  Email = 'EMAIL',
  Sop = 'SOP',
  Text = 'TEXT'
}

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

export type GetCreditPricesQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getCreditPrices?: { __typename?: 'CreditPrices', skiptracePriceCents: number, exportPropertiesPriceCents: number, emailVerificationPriceCents: number, aiAgentCreditPriceCents: number } | null } | null };

export type GetCreditsPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;

export type GetCreditsPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getCreditsPurchaseUrl?: string | null } | null };

export type GetSeatsPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;

export type GetSeatsPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getSeatsPurchaseUrl?: string | null } | null };

export type GetPhoneNumbersPurchaseUrlQueryVariables = Exact<{ [key: string]: never; }>;

export type GetPhoneNumbersPurchaseUrlQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getPhoneNumbersPurchaseUrl?: string | null } | null };

export type GetAddOnPricesQueryVariables = Exact<{ [key: string]: never; }>;

export type GetAddOnPricesQuery = { __typename?: 'RootQuery', billing?: { __typename?: 'BillingQuery', getAddOnPrices?: { __typename?: 'AddOnPrices', extraSeatPriceCents: number } | null } | null };

export type GetBillingSummaryQueryVariables = Exact<{ [key: string]: never; }>;

export type GetBillingSummaryQuery = { __typename?: 'RootQuery', subscriptionQuery?: { __typename?: 'SubscriptionQuery', getOrganizationBilling?: { __typename?: 'OrganizationBilling', id: string, planType?: PlanCode | null, status: OrganizationBillingStatus, isAnnualPlan?: boolean | null, isGrandfathered: boolean, currentUnitAmountCents?: number | null, trialEnds?: any | null, cancelAt?: any | null, pendingPlanCode?: PlanCode | null, pendingPlanIsAnnual?: boolean | null, pendingPlanEffectiveAt?: any | null, featureLimits: { __typename?: 'FeatureLimits', seatsCap?: number | null, skiptraceCap?: number | null, emailVerificationCap?: number | null, exportPropertiesCap?: number | null, aiCreditsCap?: number | null }, extraSeats?: { __typename?: 'ExtraSeatsBilling', seatsCap: number, seatsUsed: number, extraSeatQuantity: number, unusedPaidSeats?: number | null, unusedPaidSeatsReleaseAt?: any | null } | null, creditLedger: Array<{ __typename?: 'CreditLedger', type: CreditType, unitBalance: number }> } | null } | null };

export type GetAiCreditUsageQueryVariables = Exact<{
  windowDays?: InputMaybe<Scalars['Int']['input']>;
}>;

export type GetAiCreditUsageQuery = { __typename?: 'RootQuery', subscriptionQuery?: { __typename?: 'SubscriptionQuery', aiCreditUsage?: { __typename?: 'AiCreditUsageSummary', windowDays: number, creditsConsumed: number, balanceCredits: number, outOfCredits: boolean } | null } | null };

export type GetBulkTaskQueryVariables = Exact<{
  bulkTaskId: Scalars['ID']['input'];
}>;

export type GetBulkTaskQuery = { __typename?: 'RootQuery', bulkTaskQuery?: { __typename?: 'BulkTaskQuery', bulkTask?: { __typename?: 'BulkTask', id: string, status: BulkTaskStatus, estimatedItemCount?: number | null, processedItemCount?: number | null, secondsRemaining?: number | null, createdAt: any, updatedAt: any } | null } | null };

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

export type FindDealsQuery = { __typename?: 'RootQuery', dealQuery?: { __typename?: 'DealQuery', findDeals?: { __typename?: 'FindDealsResult', totalCount: number, hasMore: boolean, deals: Array<{ __typename?: 'Deal', id: string, title: string, priceCents?: any | null, closeDate?: any | null, isArchived: boolean, updatedAt?: any | null, commissionCents?: any | null, commissionAmountCents?: any | null, commissionPercentBps?: number | null, teamSplitAmountCents?: any | null, teamSplitPercentBps?: number | null, stage?: { __typename?: 'DealStage', id: string, name: string } | null, pipeline?: { __typename?: 'DealPipeline', id: string, name: string } | null, users?: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null }> | null, contacts?: Array<{ __typename?: 'Contact', id: string, name?: string | null }> | null, customFieldValues?: Array<{ __typename?: 'DealCustomFieldValue', textValue?: string | null, dateValue?: any | null, numberValue?: number | null, dropdownSelectedValues?: Array<string> | null, dealCustomField: { __typename?: 'DealCustomField', name: string } }> | null }> } | null } | null };

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

export type ListFilterFieldNamesQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', listFilterFields?: Array<{ __typename?: 'FilterFieldDescriptor', fieldId: string, label: string, category: string, component: string }> | null } | null };

export type ListFilterFieldsQueryVariables = Exact<{
  type: FilterType;
  fieldIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;

export type ListFilterFieldsQuery = { __typename?: 'RootQuery', filterQuery?: { __typename?: 'FilterQuery', listFilterFields?: Array<{ __typename?: 'FilterFieldDescriptor', fieldId: string, label: string, category: string, description?: string | null, component: string, acceptedValueKeys?: Array<string> | null, hidden: boolean, retired: boolean, valueShapes?: Array<{ __typename?: 'FilterFieldValueShape', discriminatorKey?: string | null, discriminatorValue?: string | null, scalar?: { __typename?: 'FilterFieldScalarShape', type: string, acceptedValues?: Array<string> | null } | null, keys: Array<{ __typename?: 'FilterFieldValueKey', key: string, required: boolean, acceptedValues?: Array<string> | null }> }> | null, options?: Array<{ __typename?: 'FilterFieldOption', label: string, value?: string | null }> | null }> | null } | null };

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

export type GetContentTemplateQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', contentTemplate?: { __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, bodyContent: string, bodyFormat: string, subjectContent?: string | null, folderId?: string | null, createdAt: any, updatedAt: any, taskSetSteps?: Array<{ __typename?: 'TaskSetStep', id: string, taskTemplate: { __typename?: 'ContentTemplate', id: string, name: string }, dueOffset: { __typename?: 'TaskTemplateRelativeDateOffset', amount: number, unit: TaskTemplateRelativeTimeUnit }, preferredTimeOfDay: { __typename?: 'TaskTemplateTimeOfDay', hour: number, minute: number, timezone: Timezone } }> | null } | null } | null };

export type ListContentTemplatesQueryVariables = Exact<{
  type?: InputMaybe<ContentTemplateType>;
  folderId?: InputMaybe<Scalars['ID']['input']>;
}>;

export type ListContentTemplatesQuery = { __typename?: 'RootQuery', workflowAutomationsQuery?: { __typename?: 'WorkflowAutomationsQuery', listContentTemplates?: Array<{ __typename?: 'ContentTemplate', id: string, name: string, type: ContentTemplateType, folderId?: string | null, updatedAt: any, taskSetSteps?: Array<{ __typename?: 'TaskSetStep', id: string, taskTemplate: { __typename?: 'ContentTemplate', id: string, name: string }, dueOffset: { __typename?: 'TaskTemplateRelativeDateOffset', amount: number, unit: TaskTemplateRelativeTimeUnit }, preferredTimeOfDay: { __typename?: 'TaskTemplateTimeOfDay', hour: number, minute: number, timezone: Timezone } }> | null }> | null } | null };

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

export type UpdateWorkflowGraphMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', updateWorkflowAutomationGraph?: { __typename?: 'WorkflowAutomation', id: string, workflowGroupId: string, name: string, status: WorkflowAutomationStatus, stepKinds?: Array<string> | null, workflowGroup: { __typename?: 'WorkflowGroup', id: string, draftValidation?: { __typename?: 'WorkflowDraftValidation', isValid: boolean, errors: Array<string> } | null } } | null } | null };

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
  overrides?: InputMaybe<ApplyTaskTemplateOverridesInput>;
}>;

export type ApplyTaskTemplateMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', applyTaskTemplate?: { __typename?: 'Task', id: string, title?: string | null, description?: string | null, endDate?: any | null, completedAt?: any | null } | null } | null };

export type ApplyTaskSetMutationVariables = Exact<{
  templateId: Scalars['ID']['input'];
  contactId: Scalars['ID']['input'];
  dealIds?: InputMaybe<Array<Scalars['ID']['input']> | Scalars['ID']['input']>;
}>;

export type ApplyTaskSetMutation = { __typename?: 'RootMutation', workflowAutomationsMutation?: { __typename?: 'WorkflowAutomationsMutation', applyTaskSet?: { __typename?: 'ApplyTaskSetPayload', tasks: Array<{ __typename?: 'Task', id: string, title?: string | null, description?: string | null, endDate?: any | null, completedAt?: any | null }>, failedStep?: { __typename?: 'ApplyTaskSetFailedStep', index: number, taskTemplateId: string, message: string } | null } | null } | null };
