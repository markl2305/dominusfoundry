import { PageHero } from '@/components/site/primitives';
import '@/components/site/pages/legal.css';

export const metadata = {
  title: 'SMS Messaging Terms — Dominus Foundry™',
  description: 'SMS messaging terms, opt-in consent, and mobile messaging program details for Dominus Foundry™.',
};

export default function SmsTerms() {
  return (
    <>
      <PageHero title="SMS Messaging Terms" lead="Dominus Foundry™ — Mobile Messaging Program" />

      <section className="section pg-legal">
        <div className="wrap wrap-text">
          <div className="article">

            <section>
              <h2>Program Description</h2>
              <p>
                Dominus Foundry LLC (&ldquo;Dominus Foundry,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is the sender of these messages. It offers an SMS messaging
                program to communicate with customers and prospective clients regarding service inquiries,
                project updates, appointment confirmations, follow-ups, and customer support. By opting in
                to our messaging program, you agree to the terms outlined below.
              </p>
            </section>

            <section>
              <h2>How to Opt In</h2>
              {/* The one rule, stated first. Mark 2026-10-13: Foundry runs neither verbal nor START opt-in; the
                  separate, unchecked SMS checkbox on the /start form is the only way to opt in. */}
              <p className="lp-strong">
                A phone number alone is never permission to text you.
              </p>
              <p>
                The only way to opt in to text messages from Dominus Foundry LLC is the separate SMS consent
                checkbox on our intake form at{' '}
                <a href="/start">dominusfoundry.com/start</a>.
                The box is unchecked by default and is separate from the rest of the form. Sending the form
                without ticking it, giving us your number in any other way, or calling us does not opt you in.
              </p>
              <p>
                By opting in, you confirm that you are the owner or authorized user of the mobile phone
                number provided, and you consent to receive text messages from Dominus Foundry LLC at that number.
              </p>
            </section>

            <section>
              <h2>Types of Messages</h2>
              <p>Messages you may receive include:</p>
              <ul>
                <li>Responses to your inquiries and service requests</li>
                <li>Appointment and meeting confirmations or reminders</li>
                <li>Project status updates and milestones</li>
                <li>Follow-up messages related to proposals or consultations</li>
                <li>Customer support communications</li>
              </ul>
            </section>

            <section>
              <h2>Message Frequency</h2>
              <p>
                Message frequency varies based on your interactions with Dominus Foundry™. You will only
                receive messages that are relevant to your inquiry or ongoing project. Typical frequency
                ranges from 1 to 10 messages per month depending on your level of engagement with our team.
                You will not receive unsolicited marketing blasts.
              </p>
            </section>

            <section className="callout lp-callout">
              <h2>Message and Data Rates</h2>
              <p className="lp-strong">
                Message and data rates may apply. Please contact your mobile carrier for details about
                your messaging plan and any charges that may apply to messages you send or receive.
              </p>
            </section>

            <section>
              <h2>How to Opt Out (STOP)</h2>
              <p>
                You may opt out of receiving SMS messages at any time by replying <strong>STOP</strong> to
                any text message you receive from us. After you send STOP, you will receive a one-time
                confirmation message acknowledging your request. No further messages will be sent unless
                you opt in again with the checkbox on the /start form.
              </p>
              <p>
                You may also opt out by contacting us directly at{' '}
                <a href="mailto:foundry@dominusfoundry.com">
                  foundry@dominusfoundry.com
                </a>{' '}
                or{' '}
                <a href="tel:+15055201433">
                  (505) 520-1433
                </a>.
              </p>
            </section>

            <section>
              <h2>How to Get Help (HELP)</h2>
              <p>
                If you need assistance with our messaging program, reply <strong>HELP</strong> to any text
                message you receive from us. You will receive a response with our contact information and
                instructions for opting out.
              </p>
              <p>You can also reach us at:</p>
              <ul>
                <li>
                  Email:{' '}
                  <a href="mailto:foundry@dominusfoundry.com">
                    foundry@dominusfoundry.com
                  </a>
                </li>
                <li>
                  Phone:{' '}
                  <a href="tel:+15055201433">
                    (505) 520-1433
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2>Consent Not Required for Purchase</h2>
              <p>
                Consent to receive SMS messages is <strong>not</strong> required as a condition of purchasing
                any goods or services from Dominus Foundry™. You may choose not to opt in and still do
                business with us.
              </p>
            </section>

            <section>
              <h2>Privacy and Data Protection</h2>
              <p>
                We respect your privacy. Your mobile phone number and SMS opt-in consent data will{' '}
                <strong>not be sold, rented, or shared with any third parties</strong> for their promotional
                or marketing purposes. We may share your information only with service providers who help
                us deliver messages (such as our telecommunications provider), and only to the extent
                necessary to send the messages you have consented to receive.
              </p>
              <p>
                For full details on how we collect, use, and protect your information, please see our{' '}
                <a href="/privacy">
                  Privacy Policy
                </a>.
              </p>
            </section>

            <section>
              <h2>Supported Carriers</h2>
              <p>
                Our messaging program supports all major U.S. mobile carriers including AT&amp;T, T-Mobile,
                Verizon, Sprint, and their subsidiaries. Carriers are not liable for delayed or undelivered
                messages.
              </p>
            </section>

            <section>
              <h2>Contact Information</h2>
              <div className="card flat lp-contact">
                <p className="lp-strong">Dominus Foundry™</p>
                <p>
                  Email:{' '}
                  <a href="mailto:foundry@dominusfoundry.com">
                    foundry@dominusfoundry.com
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a href="tel:+15055201433">
                    (505) 520-1433
                  </a>
                </p>
                <p>Albuquerque, New Mexico</p>
                <p>
                  <a href="/privacy">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </section>

            <section className="lp-foot">
              <p className="muted">
                Last updated: October 13, 2026. By opting in to receive SMS messages from Dominus Foundry LLC,
                you acknowledge that you have read and agree to these SMS Messaging Terms.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
