/**
 * Guards the 10DLC SMS consent contract. Run: node scripts/test-sms-consent.mjs
 *
 * These assertions are not decoration. The TCR campaign record and the public
 * /sms-terms page both ASSERT that an unchecked-by-default SMS consent checkbox
 * exists and that ticking it is recorded. Twice now that assertion has been
 * false in production (fce6b62 shipped the control to two components nothing
 * imported; 0287055 then replaced the compliant pattern with a bundled
 * "calls, emails, and texts" sentence). If any of these go red, the registry
 * holds a false statement and the campaign must not be resubmitted.
 *
 * src/lib/sms-consent.js is ESM inside a CommonJS package, so it is loaded through
 * a data: URL rather than a bare import — that keeps the module itself free of
 * any test-only build tooling.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(here, "..", "src", "lib", "sms-consent.js"), "utf8");
const {
  readSmsConsent, buildConsentRecord, SMS_CONSENT_TEXT, SMS_CONSENT_VERSION,
} = await import("data:text/javascript;base64," + Buffer.from(src).toString("base64"));

let pass=0, fail=0;
const t=(name,got,want)=>{ const ok=JSON.stringify(got)===JSON.stringify(want);
  console.log(`${ok?"  PASS":"* FAIL"}  ${name}  got=${JSON.stringify(got)} want=${JSON.stringify(want)}`);
  ok?pass++:fail++; };

console.log("--- accepted encodings (the two our forms actually produce) ---");
t("boolean true  (IntakeForm JSON)", readSmsConsent(true), true);
t('string "on"   (FormData checked)', readSmsConsent("on"), true);

console.log("--- refusals: absent/unchecked ---");
t("undefined (field omitted)", readSmsConsent(undefined), false);
t("null",  readSmsConsent(null),  false);
t("false", readSmsConsent(false), false);
t('empty string (unchecked)', readSmsConsent(""), false);

console.log("--- refusals: adversarial truthy-looking values ---");
for (const v of ["true","TRUE","yes","1",1,"off","checked",{},[]])
  t(`fabrication attempt ${JSON.stringify(v)}`, readSmsConsent(v), false);

console.log("--- grant requires a phone number ---");
const r1=buildConsentRecord({raw:"on", phone:"+15055551234", sourceForm:"intake"});
t("ticked + phone -> granted", r1.granted, true);
t("ticked + phone -> not flagged", r1.claimed_without_phone, false);
const r2=buildConsentRecord({raw:"on", phone:"   ", sourceForm:"intake"});
t("ticked + blank phone -> NOT granted", r2.granted, false);
t("ticked + blank phone -> flagged claimed_without_phone", r2.claimed_without_phone, true);
const r3=buildConsentRecord({raw:undefined, phone:"+15055551234"});
t("unticked + phone -> not granted", r3.granted, false);
t("unticked -> not flagged as claimed", r3.claimed_without_phone, false);

console.log("--- evidence integrity ---");
t("version stamped server-side", r1.disclosure_version, SMS_CONSENT_VERSION);
t("text stamped server-side", r1.disclosure_text, SMS_CONSENT_TEXT);
t("client cannot override text", buildConsentRecord({raw:true,phone:"+15055551234",smsConsentText:"I agree to spam"}).disclosure_text, SMS_CONSENT_TEXT);
t("timestamp is ISO", /^\d{4}-\d{2}-\d{2}T.*Z$/.test(r1.recorded_at), true);

console.log("--- required TCR disclosures present in the displayed text ---");
for (const [label,needle] of [["STOP","Reply STOP to opt out"],["HELP","HELP for help"],
  ["frequency","Message frequency varies (typically 1–10 msgs/mo)"],
  ["rates","Message and data rates may apply"],["not a condition","Consent is not a condition of purchase"],
  ["privacy link text","Privacy Policy"],["sms terms text","SMS Terms"]])
  t(`discloses ${label}`, SMS_CONSENT_TEXT.includes(needle), true);

console.log(`\n${fail===0?"ALL GREEN":"RED"}  pass=${pass} fail=${fail}`);
process.exit(fail?1:0);
