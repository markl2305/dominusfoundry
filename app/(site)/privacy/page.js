import ConsentChoice from './ConsentChoice';

// Visitor privacy notice. Rewritten for compliance P1-1c (Mark 2026-10-12): analytics are consent-gated by
// public/consent/consent.js, so this page names the analytics recipients, states the Global Privacy Control
// rule and carries the withdraw control. Hosting and database providers are described by category, not
// named (canon 2026-10-07). No retention period is stated because none is set in code.
export const metadata = {
  title: 'Privacy Policy — Dominus Foundry',
  description: 'How we collect, use, and protect your information at Dominus Foundry.'
};

export default function Privacy() {
  return (
    <div className="bg-[var(--foundry-bg-alt)] min-h-screen">
      <section className="bg-gradient-to-b from-tan-200 to-tan-100 py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-navy-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-navy-700">
            Last updated: October 12, 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          
          <div className="space-y-8 text-navy-700">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Overview</h2>
              <p>
                Dominus Foundry ("we," "us," or "our") operates dominusfoundry.com. This Privacy Policy explains 
                how we collect, use, disclose, and safeguard your information when you visit our website or use 
                our services.
              </p>
              <p className="mt-3">
                Using this website does not mean you agree to analytics. Analytics run only if you choose
                &ldquo;Allow analytics&rdquo;, and you can change that choice at any time in{' '}
                <a href="#analytics-choice" className="text-navy-500 underline font-semibold">Your analytics choice</a>{' '}
                below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Personal Information You Provide</h3>
              <p>When you contact us or request services, we may collect:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Name (first and last)</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Information about your business needs and technology challenges</li>
                <li>Any other information you choose to provide in contact forms or communications</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">When You Chat With Sabina on This Site</h3>
              <p>
                If you open the chat and send a message, the message is sent to Dominus Foundry so Sabina can
                answer it. Nothing is sent until you write.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p>
                Like any website, our hosting provider receives the technical details of each request, such as your
                IP address, browser type, the page requested and the referring address, and keeps them in its logs.
              </p>
              <p className="mt-3">
                <strong>Only if you allow analytics</strong>, we also measure which pages are visited, how long
                they are viewed, the referring site (without its query string), device and browser type, and
                approximate location derived from your IP address. See{' '}
                <a href="#analytics" className="text-navy-500 underline font-semibold">Analytics</a> below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Collected by Our iOS Applications</h2>
              <p>
                Our iOS applications, including <strong>Hyperion</strong> and <strong>Hyperion Lite</strong>, collect
                additional information specific to LiDAR scanning and spatial data capture. This section supplements
                the categories above and applies in addition to them whenever you use one of our apps.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Account Information</h3>
              <p>To use the apps, you create an account that includes:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Email address</li>
                <li>First and last name</li>
                <li>Company name (optional)</li>
                <li>Trade vertical selection (e.g., Roofing, HVAC, Solar)</li>
                <li>An internal user identifier we generate to associate your account with your scans</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Camera and Photo Data</h3>
              <p>
                With your permission, the apps access your device's camera and rear-facing photo sensors to capture
                RGB images and video frames during a scan. These frames are used together with LiDAR depth data to
                build the 3D model and apply texture to the captured surfaces.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">LiDAR Depth and 3D Scan Data</h3>
              <p>
                With your permission, the apps use your device's LiDAR sensor to capture depth information about the
                physical environment you scan. From this we generate:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Raw point cloud data (3D coordinates of surfaces)</li>
                <li>Computed 3D mesh reconstructions</li>
                <li>Derived measurements such as area, pitch, perimeter, and elevation counts</li>
                <li>AI-generated structural analysis of the scan</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Microphone Data</h3>
              <p>
                With your permission, the apps may access the microphone during a scan to provide audio guidance
                cues and to record contextual ambient information that helps the AI understand the scan environment.
                We do not record voice conversations.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Precise Location Data</h3>
              <p>
                With your permission, the apps capture precise GPS coordinates at the time of each scan so that
                each scan can be tagged to the specific structure or jobsite it represents. This is more granular
                than the city/state level location described in the section above and applies only to scans you
                initiate inside the apps.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Device and Sensor Metadata</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Device model and iOS version</li>
                <li>Inertial Measurement Unit (IMU) data — accelerometer and gyroscope readings during scanning, used for motion compensation and scan quality assessment</li>
                <li>Scan duration, coverage percentage, and other quality metrics</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Diagnostics</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Crash logs and stack traces (anonymized — not linked to your account)</li>
                <li>Performance metrics such as scan processing time and upload success rates</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Usage Data</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Which features you interact with inside the apps</li>
                <li>Number of scans completed and your monthly scan quota usage</li>
                <li>Conversion-related events (e.g., taps on upgrade-to-Forge prompts)</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">How We Use Scan Data</h3>
              <p>
                Scan data — including LiDAR point clouds, camera frames, and derived 3D models — is used to:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Render the basic site report inside the app for you to view</li>
                <li>Sync your scans across devices logged into your account</li>
                <li>Improve our spatial AI models, with your scan data anonymized and the personal identifiers (your name, email, exact address) stripped from training datasets</li>
                <li>Compute aggregate, non-personal insights about commercial building stock that may inform our products and services</li>
              </ul>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">AI Training and Anonymization</h3>
              <p>
                When scan data is contributed to our AI training pipeline, it is anonymized at the scan level: no
                personally identifying information, company attribution, or specific street address is associated
                with the scan in the training dataset. Your account metadata (email, company, trade) is stored
                separately from the anonymized scan data and is never sold to third parties.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Encryption and Storage</h3>
              <p>
                All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Scans upload to our
                sovereign database in the background, by default only over WiFi to avoid unexpected cellular charges.
                You can change the cellular upload setting inside the apps at any time.
              </p>

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Permission Controls</h3>
              <p>
                Camera, microphone, and location access are all controlled by iOS-level permissions. You can revoke
                any of them at any time in iOS Settings. Revoking camera or LiDAR access will disable scanning.
                Revoking location access will leave new scans untagged. You can sign out of the apps at any time,
                and you can request deletion of your account and associated data by emailing us at{' '}
                <a
                  href="mailto:foundry@dominusfoundry.com"
                  className="text-navy-500 underline font-semibold"
                >
                  foundry@dominusfoundry.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Respond to your inquiries and provide requested services</li>
                <li>Communicate with you about our services</li>
                <li>Send service-related information and updates</li>
                <li>Improve our website and services</li>
                <li>Analyze website usage and performance</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized activity</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="font-semibold">
                We do not sell, rent, or trade your personal information to third parties.
              </p>
              <p className="mt-3">We may share your information only in the following circumstances:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Service providers:</strong> companies that run parts of this website and our business for
                  us: website hosting, database storage, email delivery (how form submissions reach us) and
                  telecommunications (text messages you have agreed to receive).
                </li>
                <li>
                  <strong>Analytics and advertising measurement, only if you allow analytics:</strong> Google
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
            </div>

            <div id="analytics">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Analytics and Cookies</h2>
              <p>
                <strong>Nothing is sent to an analytics service until you choose &ldquo;Allow analytics&rdquo;.</strong>{' '}
                Until then, and if you choose &ldquo;No analytics&rdquo;, no analytics script is loaded.
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>
                  <strong>Google Analytics</strong> (Google LLC). If you allow it, Google receives the pages you view
                  (the address without its query string or fragment), the referring site, your browser and device
                  type, and your IP address, and sets the <code>_ga</code> cookies to recognize a returning browser.
                  Google may use this data as described in its own policies.
                </li>
                <li>
                  <strong>Vercel Web Analytics.</strong> If you allow it, it counts page views without its own
                  cookies, again without query strings.
                </li>
                <li>
                  <strong>Google Ads</strong> (Google LLC). Our Google Analytics tag is linked to a Google Ads account,
                  so the same Allow also lets the Google tag tell Google Ads that a page was viewed. We run it in
                  Google&rsquo;s restricted mode: no advertising cookies are set, and we tell Google not to use the
                  data for ad personalization or remarketing. Google still receives the page address (without its query string)
                  and your IP address with each of those signals. With no choice, &ldquo;No analytics&rdquo; or a
                  Global Privacy Control signal, nothing is sent to Google Ads.
                </li>
              </ul>
              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Cookies and storage we always use</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <code>df-consent</code> (cookie and local storage): remembers your analytics choice for up to 180
                  days, so you are not asked on every page.
                </li>
                <li>
                  <code>consent_gpc</code>: set only when your browser sends a Global Privacy Control signal, so the
                  site can honor it; it expires after a day without the signal.
                </li>
                <li>
                  <code>df-theme</code> (local storage): remembers light or dark display if you choose one.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Global Privacy Control</h2>
              <p>
                If your browser sends a Global Privacy Control (GPC) signal, we treat it as &ldquo;No
                analytics&rdquo;. We do not ask you, and the signal overrides an earlier &ldquo;Allow
                analytics&rdquo; for as long as it is on. We do not sell personal information or share it for
                cross-context advertising.
              </p>
            </div>

            <div id="analytics-choice">
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Analytics Choice</h2>
              <p>
                You can change your choice here at any time. Withdrawing stops analytics on this browser,
                clears the analytics cookies this site can clear, and reloads the page.
              </p>
              <ConsentChoice />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">SMS/Text Messaging Consent</h2>
              <p className="font-semibold">
                A phone number alone is never permission to text you.
              </p>
              <p className="mt-3">
                On this website, you agree to text messages only by ticking the SMS consent checkbox on a form. The
                box is unchecked by default, and a form sent without it does not sign you up for texts. Every way to
                opt in is listed on our{' '}
                <a href="/sms-terms" className="text-navy-500 underline font-semibold">SMS Messaging Terms</a>.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li><strong>Opt-out:</strong> You can reply STOP to any message to stop SMS communications. Reply HELP for help.</li>
                <li><strong>Frequency:</strong> Message frequency varies based on your interactions (typically 1–10 messages per month). We do not send unsolicited marketing blasts.</li>
                <li><strong>Rates:</strong> Message and data rates may apply depending on your carrier and plan.</li>
                <li><strong>Privacy:</strong> Your mobile phone number and SMS opt-in consent data will not be sold, rented, or shared with any third parties for promotional or marketing purposes.</li>
                <li><strong>Consent not required:</strong> Consent to receive SMS messages is not required as a condition of purchasing any goods or services.</li>
              </ul>
              <p className="mt-4">
                For complete SMS messaging program details, see our{' '}
                <a href="/sms-terms" className="text-navy-500 underline font-semibold">SMS Messaging Terms</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Security</h2>
              <p>
                We use reasonable security measures to protect your personal information from unauthorized 
                access, disclosure, alteration, or destruction. These measures include:
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Encryption of data in transit (HTTPS/SSL)</li>
                <li>Secure servers and hosting infrastructure</li>
                <li>Limited access to personal information by authorized personnel only</li>
                <li>Regular security assessments</li>
              </ul>
              <p className="mt-4">
                However, no method of transmission over the internet or electronic storage is 100% secure. 
                While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Data Retention</h2>
              <p>
                We keep what you send us for as long as we are in conversation with you about it. We have not set
                a fixed deletion date. You can ask us to delete your information at any time, using the contact
                below, unless the law requires us to keep it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights and Choices</h2>
              <p>You have the right to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to processing of your personal information</li>
                <li>Request a copy of your personal information</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a 
                  href="mailto:mark@dominusfoundry.com" 
                  className="text-navy-500 underline font-semibold"
                >
                  mark@dominusfoundry.com
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you believe we have inadvertently collected information 
                from a child, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy 
                practices or content of these external sites. We encourage you to review the privacy policies 
                of any third-party sites you visit.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for 
                legal, regulatory, or operational reasons. We will notify you of any material changes by posting 
                the updated policy on this page with a new "Last updated" date.
              </p>
              <p className="mt-3">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect 
                your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please 
                contact us:
              </p>
              <div className="mt-4 p-6 bg-tan-100 rounded-xl border border-bronze-300">
                <p className="font-semibold text-navy-900">Dominus Foundry</p>
                <p className="mt-2">Email: <a href="mailto:mark@dominusfoundry.com" className="text-navy-500 underline">mark@dominusfoundry.com</a></p>
                <p>Phone: <a href="tel:+15055201433" className="text-navy-500 underline">(505) 520-1433</a></p>
                <p className="mt-2">Albuquerque, New Mexico</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
