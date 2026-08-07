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
            Last updated: May 6, 2026
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
                We are committed to protecting your privacy. By using our website or services, you agree to the 
                collection and use of information in accordance with this policy.
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

              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>General location information (city/state level)</li>
              </ul>
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
                  <strong>Service Providers:</strong> With trusted third-party service providers who assist us in 
                  operating our website and conducting our business (e.g., email service providers, analytics tools). 
                  These providers are contractually obligated to protect your information.
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

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to improve your experience on our website and 
                analyze usage patterns. Cookies are small data files stored on your device.
              </p>
              
              <h3 className="text-xl font-semibold text-navy-900 mt-6 mb-3">Types of Cookies We Use:</h3>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> Required for the website to function properly
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand how visitors use our website 
                  (we use Google Analytics)
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and measure 
                  campaign effectiveness (Google Ads)
                </li>
              </ul>

              <p className="mt-4">
                You can control cookies through your browser settings. However, disabling cookies may limit 
                your ability to use certain features of our website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">Google Analytics and Google Ads</h2>
              <p>
                We use Google Analytics to analyze website traffic and Google Ads to display advertisements. 
                These services may collect information about your online activities over time and across different 
                websites.
              </p>
              <p className="mt-3">
                You can opt out of Google Analytics by installing the{' '}
                <a 
                  href="https://tools.google.com/dlpage/gaoptout" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy-500 underline font-semibold"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
              <p className="mt-3">
                You can manage your Google Ads settings at{' '}
                <a 
                  href="https://adssettings.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy-500 underline font-semibold"
                >
                  Google Ads Settings
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-4">SMS/Text Messaging Consent</h2>
              <p>
                When you submit a form or request information, you may opt in to receive text messages from us.
                By providing your phone number and checking the SMS consent checkbox, you agree that we may
                contact you via SMS for service updates and follow-ups related to your inquiry.
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li><strong>Opt-in:</strong> You opt in by providing your phone number and checking the SMS consent checkbox on our web forms, by verbally agreeing during a phone call, or by texting a keyword to our business number.</li>
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
                We implement reasonable security measures to protect your personal information from unauthorized 
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
                We retain your personal information only as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required or permitted by law. When 
                information is no longer needed, we securely delete or anonymize it.
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
                  href="mailto:foundry@dominusfoundry.com" 
                  className="text-navy-500 underline font-semibold"
                >
                  foundry@dominusfoundry.com
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
                <p className="mt-2">Email: <a href="mailto:foundry@dominusfoundry.com" className="text-navy-500 underline">foundry@dominusfoundry.com</a></p>
                <p>Phone: <a href="tel:+18668492113" className="text-navy-500 underline">(866) 849-2113</a></p>
                <p className="mt-2">Albuquerque, New Mexico</p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-bronze-300">
              <p className="text-sm text-navy-600">
                By using our website and services, you acknowledge that you have read and understood this 
                Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
