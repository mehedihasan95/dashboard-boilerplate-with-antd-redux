export const StatusType = Object.freeze({
  // General Statuses
  ACTIVE: "active",
  INACTIVE: "inactive",
  AVAILABLE: "available",
  UNAVAILABLE: "unavailable",
  OCCUPIED: "occupied",
  COMPLETED: "completed",
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  DELAYED: "delayed",
  CANCELLED: "cancelled",
  FAILED: "failed",

  // Approval Statuses
  APPROVED: "approved",
  REJECTED: "rejected",
  AWAITING_APPROVAL: "awaiting_approval",
  ON_HOLD: "on_hold",

  // Development Process Statuses
  UNDER_REVIEW: "under_review",
  QA_PENDING: "qa_pending",
  IN_QA: "in_qa",
  QA_FAILED: "qa_failed",
  READY_FOR_DEPLOYMENT: "ready_for_deployment",
  DEPLOYED: "deployed",
  DEPRECATED: "deprecated",
  ARCHIVED: "archived",

  // User Access or Permissions Statuses
  READ: "read",
  WRITE: "write",
  UPDATE: "update",
  DELETE: "delete",
  CREATE: "create",
  LOCKED: "locked",
  RESTRICTED: "restricted",

  // Miscellaneous Statuses
  WARNING: "warning",
  INCONSISTENT: "inconsistent",
  NOT_PROVIDED: "not_provided",
  NOT_APPLICABLE: "not_applicable",
  EXPIRED: "expired",
  CONFIRMED: "confirmed",
  REVOKED: "revoked",

  // Task/Issue Specific Statuses
  NEW: "new",
  OPEN: "open",
  CLOSED: "closed",
  BLOCKED: "blocked",
  RESOLVED: "resolved",

  // User/Session Specific Statuses
  LOGGED_IN: "logged_in",
  LOGGED_OUT: "logged_out",
  SESSION_EXPIRED: "session_expired",
  BANNED: "banned",
  GUEST: "guest",
});
