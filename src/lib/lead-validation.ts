import * as z from "zod";

/**
 * Shared lead validation used by both the client form and the API route.
 * The API route must validate independently: the endpoint is public and can be
 * POSTed to directly, bypassing any client-side checks.
 */

/** Allowlisted `source` values. Anything else is rejected and falls back to the page default. */
export const ALLOWED_SOURCES = [
  "home",
  "contactos",
  "fisioterapia-no-domicilio",
  "apoio-domicilio",
  "cuidados-de-saude",
  "cuidados-continuados-hospitalizacao",
  "analises-clinicas",
  "equipamento-hospitalar",
  "acordos-convencoes",
] as const;

export type AllowedSource = (typeof ALLOWED_SOURCES)[number];

export function isAllowedSource(value: string | null | undefined): value is AllowedSource {
  return !!value && (ALLOWED_SOURCES as readonly string[]).includes(value);
}

/**
 * Strips everything except digits and a single leading `+`, then removes the
 * Portuguese country code so validation always runs against the 9-digit
 * national number.
 *
 * "+351 912 345 678" -> "912345678"
 * "00351912345678"   -> "912345678"
 * "912.345.678"      -> "912345678"
 */
export function normalizePhone(raw: string): string {
  let digits = (raw || "").replace(/[^\d+]/g, "");

  if (digits.startsWith("+")) {
    digits = digits.slice(1);
  }
  // International prefix dialled as 00
  if (digits.startsWith("00")) {
    digits = digits.slice(2);
  }
  // Portuguese country code
  if (digits.length > 9 && digits.startsWith("351")) {
    digits = digits.slice(3);
  }

  return digits;
}

/**
 * Portuguese national numbers are 9 digits:
 *   9 -> mobile (91/92/93/96)
 *   2 -> landline (21 Lisbon, 22 Porto, 2x regional)
 *   3 -> nomadic / VoIP
 * Deliberately excludes 7xx and 8xx (premium / freephone) — not reachable
 * callback numbers for a lead.
 */
const PT_PHONE_RE = /^(9[1236]\d{7}|2\d{8}|30\d{7})$/;

export function isValidPortuguesePhone(raw: string): boolean {
  const normalized = normalizePhone(raw);

  if (!PT_PHONE_RE.test(normalized)) {
    return false;
  }
  // Reject obvious junk like 911111111 / 222222222 (every digit after the
  // 2-digit prefix identical) which passes the shape test but is never real.
  if (/^\d{2}(\d)\1{6}$/.test(normalized)) {
    return false;
  }

  return true;
}

/** A name must contain at least two letters — rejects "?", "-", "1", "x". */
const NAME_RE = /(\p{L}[\s\S]*){2,}/u;

export function isValidName(raw: string): boolean {
  const trimmed = (raw || "").trim();
  return trimmed.length >= 2 && trimmed.length <= 80 && NAME_RE.test(trimmed);
}

interface SchemaMessages {
  required: string;
  invalidName: string;
  invalidPhone: string;
}

/**
 * Builds the lead schema. `messages` carries the localized copy on the client;
 * the server passes English fallbacks since those errors are never displayed.
 */
export function createLeadSchema(messages: SchemaMessages) {
  // No `.default()` here: it would make the inferred input type diverge from the
  // output type, which breaks react-hook-form's generics. Server-side defaults
  // are applied in `leadSchema` below.
  const optionalTracking = z.string().trim().max(255);

  return z.object({
    FirstName: z
      .string()
      .trim()
      .min(1, messages.required)
      .refine(isValidName, messages.invalidName),
    telefone: z
      .string()
      .trim()
      .min(1, messages.required)
      .refine(isValidPortuguesePhone, messages.invalidPhone),
    campaign: optionalTracking,
    source: optionalTracking,
    gclid: optionalTracking,
    gcampaign: optionalTracking,
    gkeywords: optionalTracking,
    gmatchtype: optionalTracking,
    fbclid: optionalTracking,
    fbcampaign: optionalTracking,
  });
}

export const SERVER_SCHEMA_MESSAGES: SchemaMessages = {
  required: "Required field",
  invalidName: "Invalid name",
  invalidPhone: "Invalid Portuguese phone number",
};

/**
 * Server-side schema: tracking fields become optional with `""` defaults (a
 * direct API call may omit them entirely) and `source` is forced through the
 * allowlist so junk values never reach the CRM.
 */
const optionalServerField = z.string().trim().max(255).optional().default("");

export const leadSchema = createLeadSchema(SERVER_SCHEMA_MESSAGES).extend({
  campaign: optionalServerField,
  gclid: optionalServerField,
  gcampaign: optionalServerField,
  gkeywords: optionalServerField,
  gmatchtype: optionalServerField,
  fbclid: optionalServerField,
  fbcampaign: optionalServerField,
  source: optionalServerField.transform((value) =>
    isAllowedSource(value) ? value : ""
  ),
});

export type LeadInput = z.infer<typeof leadSchema>;
