import ConsentChoice from './ConsentChoice';
import { PageHero } from '@/components/site/primitives';
import ArticleIndex from '@/components/site/qp/ArticleIndex';
import '@/components/site/pages/legal.css';
import '@/app/styles/pages/qp-b.css';
import '@/app/styles/pages/articles.css';

// Visitor privacy notice. Rewritten for compliance P1-1c (Mark 2026-10-12): analytics are consent-gated by
// public/consent/consent.js, so this page names the analytics recipients, states the Global Privacy Control
// rule and carries the withdraw control. Hosting and database providers are described by category, not
// named (canon 2026-10-07). No retention period is stated because none is set in code.
// Consent by region (Mark 2026-10-14/15, shared memory 77550c45): the analytics sentences now say what the region rule
// does, adapted from the wording Mark approved for hiresabina (CONSENT-GEO-1014 §5) to this site's own vendors
// (Google Analytics, Vercel Web Analytics, cookieless Google Ads measurement); no other legal sentence changed.
export const metadata = {
  title: 'Privacy Policy — Dominus Foundry',
  description: 'How we collect, use, and protect your information at Dominus Foundry.'
};

export default function Privacy() {
  return (
    <div className="qpb qp-plain qp-legal">
      <PageHero title="Privacy Policy" lead="Last updated: October 15, 2026" />

      <section className="section pg-legal">
        <div className="wrap">
        <div className="qp-read has-index">
        <div className="qp-read-col">
          <div className="article">
            <section>
              <h2>Overview</h2>
              <p>
                Dominus Foundry ("we," "us," or "our") operates dominusfoundry.com. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or use
                our services.
              </p>
              <p>
                Using this website does not mean you agree to analytics. In the European Union, the wider EEA, the
                United Kingdom and Switzerland, analytics run only if you choose &ldquo;Allow analytics&rdquo;.
                Elsewhere they are on unless you turn them off with Your privacy choices or your browser sends a
                Global Privacy Control signal. You can change that choice at any time in{' '}
                <a href="#analytics-choice">Your analytics choice</a>{' '}
                below.
              </p>
            </section>

            <section>
              <h2>Information We Collect</h2>

              <h3>Personal Information You Provide</h3>
              <p>When you contact us or request services, we may collect:</p>
              <ul>
                <li>Name (first and last)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Information about your business needs and technology challenges</li>
                <li>Any other information you choose to provide in contact forms or communications</li>
              </ul>

              <h3>When You Chat With Sabina on This Site</h3>
              <p>
                If you open the chat and send a message, the message is sent to Dominus Foundry so Sabina can
                answer it. Nothing is sent until you write.
              </p>

              <h3>Automatically Collected Information</h3>
              <p>
                Like any website, our hosting provider receives the technical details of each request, such as your
                IP address, browser type, the page requested and the referring address, and keeps them in its logs.
              </p>
              <p>
                Our fonts are served from this site, not a font service.
              </p>
              <p>
                <strong>Analytics.</strong> In the European Union, the wider EEA, the United Kingdom and Switzerland,
                only if you allow it. Elsewhere it is on unless you turn it off with Your privacy choices or your
                browser sends a Global Privacy Control signal. We also measure which pages are visited, how long
                they are viewed, the referring site (without its query string), device and browser type, and
                approximate location derived from your IP address. See{' '}
                <a href="#analytics">Analytics</a> below.
              </p>
            </section>

            <section>
              <h2>Information Collected by Our iOS Applications</h2>
              <p>
                Our iOS applications, including <strong>Hyperion</strong> and <strong>Hyperion Lite</strong>, collect
                additional information specific to LiDAR scanning and spatial data capture. This section supplements
                the categories above and applies in addition to them whenever you use one of our apps.
              </p>

              <h3>Account Information</h3>
              <p>To use the apps, you create an account that includes:</p>
              <ul>
                <li>Email address</li>
                <li>First and last name</li>
                <li>Company name (optional)</li>
                <li>Trade vertical selection (e.g., Roofing, HVAC, Solar)</li>
                <li>An internal user identifier we generate to associate your account with your scans</li>
              </ul>

              <h3>Camera and Photo Data</h3>
              <p>
                With your permission, the apps access your device's camera and rear-facing photo sensors to capture
                RGB images and video frames during a scan. These frames are used together with LiDAR depth data to
                build the 3D model and apply texture to the captured surfaces.
              </p>

              <h3>LiDAR Depth and 3D Scan Data</h3>
              <p>
                With your permission, the apps use your device's LiDAR sensor to capture depth information about the
                physical environment you scan. From this we generate:
              </p>
              <ul>
                <li>Raw point cloud data (3D coordinates of surfaces)</li>
                <li>Computed 3D mesh reconstructions</li>
                <li>Derived measurements such as area, pitch, perimeter, and elevation counts</li>
                <li>AI-generated structural analysis of the scan</li>
              </ul>

              <h3>Microphone Data</h3>
              <p>
                With your permission, the apps may access the microphone during a scan to provide audio guidance
                cues and to record contextual ambient information that helps the AI understand the scan environment.
                We do not record voice conversations.
              </p>

              <h3>Precise Location Data</h3>
              <p>
                With your permission, the apps capture precise GPS coordinates at the time of each scan so that
                each scan can be tagged to the specific structure or jobsite it represents. This is more granular
                than the city/state level location described in the section above and applies only to scans you
                initiate inside the apps.
              </p>

              <h3>Device and Sensor Metadata</h3>
              <ul>
                <li>Device model and iOS version</li>
                <li>Inertial Measurement Unit (IMU) data — accelerometer and gyroscope readings during scanning, used for motion compensation and scan quality assessment</li>
                <li>Scan duration, coverage percentage, and other quality metrics</li>
              </ul>

              <h3>Diagnostics</h3>
              <ul>
                <li>Crash logs and stack traces (anonymized — not linked to your account)</li>
                <li>Performance metrics such as scan processing time and upload success rates</li>
              </ul>

              <h3>Usage Data</h3>
              <ul>
                <li>Which features you interact with inside the apps</li>
                <li>Number of scans completed and your monthly scan quota usage</li>
                <li>Conversion-related events (e.g., taps on upgrade-to-Forge prompts)</li>
              </ul>

              <h3>How We Use Scan Data</h3>
              <p>
                Scan data — including LiDAR point clouds, camera frames, and derived 3D models — is used to:
              </p>
              <ul>
                <li>Render the basic site report inside the app for you to view</li>
                <li>Sync your scans across devices logged into your account</li>
                <li>Improve our spatial AI models, with your scan data anonymized and the personal identifiers (your name, email, exact address) stripped from training datasets</li>
                <li>Compute aggregate, non-personal insights about commercial building stock that may inform our products and services</li>
              </ul>

              <h3>AI Training and Anonymization</h3>
              <p>
                When scan data is contributed to our AI training pipeline, it is anonymized at the scan level: no
                personally identifying information, company attribution, or specific street address is associated
                with the scan in the training dataset. Your account metadata (email, company, trade) is stored
                separately from the anonymized scan data and is never sold to third parties.
              </p>

              <h3>Encryption and Storage</h3>
              <p>
                All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Scans upload to our
                sovereign database in the background, by default only over WiFi to avoid unexpected cellular charges.
                You can change the cellular upload setting inside the apps at any time.
              </p>

              <h3>Permission Controls</h3>
              <p>
                Camera, microphone, and location access are all controlled by iOS-level permissions. You can revoke
                any of them at any time in iOS Settings. Revoking camera or LiDAR access will disable scanning.
                Revoking location access will leave new scans untagged. You can sign out of the apps at any time,
                and you can request deletion of your account and associated data by emailing us at{' '}
                <a
                  href="mailto:foundry@dominusfoundry.com"
                >
                  foundry@dominusfoundry.com
                </a>.
              </p>
            </section>

            <section>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Respond to your inquiries and provide requested services</li>
                <li>Communicate with you about our services</li>
                <li>Send service-related information and updates</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and performance</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized activity</li>
              </ul>
            </section>

            <section>
              <h2>Information Sharing and Disclosure</h2>
              <p className="lp-strong">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
              <p>We may share your information only in the following circumstances:</p>
              <ul>
                <li>
                  <strong>Service providers:</strong> companies that run parts of this website and our business for
                  us: website hosting, database storage, email delivery (how form submissions reach us) and
                  telecommunications (text messages you have agreed to receive).
                </li>
                <li>
                  <strong>Analytics and advertising measurement, under the choice described above:</strong> Google
                  Analytics and Google Ads (both Google LLC), and Vercel Web Analytics. Details below.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, subpoena, or legal process, or to
                  protect our rights, property, or safety.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all
                  or a portion of our business.
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share your information.
                </li>
              </ul>
            </section>

            <section id="analytics">
              <h2>Analytics and Cookies</h2>
              <p>
                <strong>In the European Union, the wider EEA, the United Kingdom and Switzerland, nothing is sent to
                an analytics service until you choose &ldquo;Allow analytics&rdquo;.</strong>{' '}
                Until then, and if you choose &ldquo;No analytics&rdquo;, no analytics script is loaded. Elsewhere
                analytics are on unless you choose &ldquo;No analytics&rdquo; with Your privacy choices or your
                browser sends a Global Privacy Control signal, and then no analytics script is loaded.
              </p>
              <ul>
                <li>
                  <strong>Google Analytics</strong> (Google LLC). When it is on, Google receives the pages you view
                  (the address without its query string or fragment), the referring site, your browser and device
                  type, and your IP address, and sets the <code>_ga</code> cookies to recognize a returning browser.
                  Google may use this data as described in its own policies.
                </li>
                <li>
                  <strong>Vercel Web Analytics.</strong> When it is on, it counts page views without its own
                  cookies, again without query strings.
                </li>
                <li>
                  <strong>Google Ads</strong> (Google LLC). Our Google Analytics tag is linked to a Google Ads account,
                  so the same analytics choice also lets the Google tag tell Google Ads that a page was viewed. We run it in
                  Google&rsquo;s restricted mode: no advertising cookies are set, and we tell Google not to use the
                  data for ad personalization or remarketing. Google still receives the page address (without its query string)
                  and your IP address with each of those signals. With &ldquo;No analytics&rdquo;, a Global Privacy
                  Control signal or, in the EU, EEA, UK and Switzerland, no choice, nothing is sent to Google Ads.
                </li>
              </ul>
              <h3>Cookies and storage we always use</h3>
              <ul>
                <li>
                  <code>df-consent</code>: remembers your analytics choice so you are not asked on every page. It
                  is kept in two places, a cookie (named <code>__Host-df-consent</code>) and a copy in your
                  browser&rsquo;s local storage, and each is
                  honoured for 180 days from when you chose; after that you are asked again. Changing your choice
                  below replaces both.
                </li>
                <li>
                  <code>consent_gpc</code>: set only when your browser sends a Global Privacy Control signal, so the
                  site can honor it. It is cleared on the first page you load without the signal, and lasts a day
                  at most.
                </li>
                <li>
                  <code>__Host-consent_region</code>: set on each page you load, from the country our hosting
                  provider derives from your IP address, so the site knows whether to ask before analytics run. It
                  lasts a day at most.
                </li>
                <li>
                  <code>df-theme</code> (local storage): remembers light or dark display if you choose one.
                </li>
              </ul>
            </section>

            <section>
              <h2>Global Privacy Control</h2>
              <p>
                If your browser sends a Global Privacy Control (GPC) signal, we treat it as &ldquo;No
                analytics&rdquo;. We do not ask you, and the signal overrides an earlier &ldquo;Allow
                analytics&rdquo; for as long as it is on. Outside the EU, EEA, UK and Switzerland, where analytics
                are otherwise on, the signal turns them off in the same way. We do not sell personal information or share it for
                cross-context advertising.
              </p>
            </section>

            <section id="analytics-choice">
              <h2>Your Analytics Choice</h2>
              <p>
                You can change your choice here at any time. Withdrawing stops analytics on this browser,
                clears the analytics cookies this site can clear, and reloads the page.
              </p>
              <ConsentChoice />
              <p>Use Your privacy choices at the foot of any page to allow analytics or turn them off at any time.</p>
            </section>

            <section>
              <h2>SMS/Text Messaging Consent</h2>
              <p className="lp-strong">
                A phone number alone is never permission to text you.
              </p>
              <p>
                Text messages come from Dominus Foundry LLC. The only way to agree to them is the separate SMS
                consent checkbox on our intake form at{' '}
                <a href="/start">/start</a>. The box is unchecked
                by default; sending the form without it, giving us your number another way, or calling us does not
                sign you up. We do not take opt-ins by phone or by text keyword. Full terms:{' '}
                <a href="/sms-terms">SMS Messaging Terms</a>.
              </p>
              <ul>
                <li><strong>Opt-out:</strong> You can reply STOP to any message to stop SMS communications. Reply HELP for help.</li>
                <li><strong>Frequency:</strong> Message frequency varies based on your interactions (typically 1–10 messages per month). We do not send unsolicited marketing blasts.</li>
                <li><strong>Rates:</strong> Message and data rates may apply depending on your carrier and plan.</li>
                <li><strong>Privacy:</strong> Your mobile phone number and SMS opt-in consent data will not be sold, rented, or shared with any third parties for promotional or marketing purposes.</li>
                <li><strong>Consent not required:</strong> Consent to receive SMS messages is not required as a condition of purchasing any goods or services.</li>
              </ul>
              <p>
                For complete SMS messaging program details, see our{' '}
                <a href="/sms-terms">SMS Messaging Terms</a>.
              </p>
            </section>

            <section>
              <h2>Data Security</h2>
              <p>
                We use reasonable security measures to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul>
                <li>Encryption of data in transit (HTTPS/SSL)</li>
                <li>Secure servers and hosting infrastructure</li>
                <li>Limited access to personal information by authorized personnel only</li>
                <li>Regular security assessments</li>
              </ul>
              <p>
                However, no method of transmission over the internet or electronic storage is 100% secure.
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                We keep what you send us for as long as we are in conversation with you about it. We have not set
                a fixed deletion date. You can ask us to delete your information at any time, using the contact
                below, unless the law requires us to keep it.
              </p>
            </section>

            <section>
              <h2>Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to processing of your personal information</li>
                <li>Request a copy of your personal information</li>
              </ul>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a
                  href="mailto:mark@dominusfoundry.com"
                >
                  mark@dominusfoundry.com
                </a>.
              </p>
            </section>

            <section>
              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect
                personal information from children. If you believe we have inadvertently collected information
                from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy
                practices or content of these external sites. We encourage you to review the privacy policies
                of any third-party sites you visit.
              </p>
            </section>

            <section>
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for
                legal, regulatory, or operational reasons. We will notify you of any material changes by posting
                the updated policy on this page with a new "Last updated" date.
              </p>
              <p>
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect
                your information.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please
                contact us:
              </p>
              <div className="card flat lp-contact">
                <p className="lp-strong">Dominus Foundry</p>
                <p>Email: <a href="mailto:mark@dominusfoundry.com">mark@dominusfoundry.com</a></p>
                <p>Phone: <a href="tel:+15055201433">(505) 520-1433</a></p>
                <p>Albuquerque, New Mexico</p>
              </div>
            </section>

          </div>
        </div>
        <ArticleIndex />
        </div>
        </div>
      </section>
    </div>
  );
}
