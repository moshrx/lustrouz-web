import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { renderPolicyBody } from '../lib/renderPolicy'

const sections = [
  {
    title: 'Who We Are',
    body: `**Lustrouz Aesthetics** is a medical skincare clinic located at 1275 Finch Ave W, North York, ON M3J 0L5, Toronto, Canada. We are the data controller responsible for your personal information collected through this website and in the course of providing our services.

For any privacy-related questions, please contact us at +1 (437) 980-1164 or via Instagram @lustrouz_bynzsha.`,
  },
  {
    title: 'Information We Collect',
    body: `We collect information in the following ways:

**Information you provide directly:**
- Full name, email address, and phone number provided during booking or enquiry
- Skin health history, medical conditions, allergies, and treatment preferences shared during consultations — used solely to deliver safe, personalized care
- Photos taken before and after treatments, only with your explicit written consent
- Payment information processed securely through our third-party booking and payment platform (we do not store card numbers directly)
- Communications sent to us by phone, email, or direct message

**Information collected automatically:**
- Pages visited, time spent on site, referring URLs, and browser/device type via standard analytics tools
- Cookies and similar tracking technologies (see Section 6)`,
  },
  {
    title: 'How We Use Your Information',
    body: `We use your personal information only for the purposes for which it was collected:

- To confirm, manage, and follow up on your appointments
- To deliver safe, personalized treatments based on your skin history and health information
- To send appointment reminders, aftercare instructions, and booking confirmations
- To respond to your enquiries and provide client support
- To comply with applicable health, safety, and legal obligations
- To improve our website and service quality through anonymized analytics

We do not use your personal information for automated decision-making or profiling.`,
  },
  {
    title: 'Legal Basis for Processing (PIPEDA / Canadian Privacy Law)',
    body: `Lustrouz Aesthetics operates under Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario privacy standards. We collect and process your personal information on the following bases:

- **Consent:** You provide consent when booking a service, submitting an enquiry, or agreeing to treatment
- **Contractual necessity:** Processing required to fulfil your appointment or service agreement
- **Legal obligation:** Where we are required to retain records by applicable health or business regulations
- **Legitimate interests:** For improving our services and communicating relevant updates, balanced against your privacy rights

You may withdraw consent at any time. Doing so may affect our ability to provide services.`,
  },
  {
    title: 'Sharing of Personal Information',
    body: `We do not sell, rent, or trade your personal information. We may share it only in the following limited circumstances:

- **Service providers:** Our booking platform, payment processor, and scheduling tools receive the minimum information required to operate. These providers are contractually required to protect your data.
- **Legal requirements:** Where required by law, court order, or regulatory authority
- **Safety:** Where necessary to protect the health or safety of you or another person
- **Business transfer:** In the unlikely event of a business sale or merger, your data would be transferred to the successor entity, subject to the same privacy obligations

We will never share your health or skin condition information with third parties for marketing or commercial purposes.`,
  },
  {
    title: 'Cookies & Analytics',
    body: `Our website may use the following types of cookies:

- **Essential cookies:** Required for core site functionality such as navigation and security
- **Analytics cookies:** Anonymous data on how visitors use the site (e.g., Google Analytics or equivalent), used to improve the user experience
- **Preference cookies:** Store your settings such as language or display preferences

You can control or disable cookies through your browser settings at any time. Disabling essential cookies may affect site functionality. We do not use advertising or cross-site tracking cookies.`,
  },
  {
    title: 'Data Retention',
    body: `We retain your personal information for as long as necessary to:

- Maintain your client treatment record and support continuity of care
- Comply with applicable legal, tax, and regulatory obligations (typically 7 years for business records under Canadian law)
- Resolve disputes or enforce our agreements

Health and skin consultation records are retained in accordance with professional standards for aesthetic practice. Once the retention period has passed, your data is securely deleted or anonymized.

To request early deletion of your data, please contact us directly. We will process your request within 30 days, subject to any overriding legal obligations.`,
  },
  {
    title: 'Your Privacy Rights',
    body: `Under PIPEDA and applicable Canadian privacy law, you have the right to:

- **Access:** Request a copy of the personal information we hold about you
- **Correction:** Ask us to correct inaccurate or incomplete information
- **Withdrawal of consent:** Withdraw consent for non-essential processing at any time
- **Deletion:** Request removal of your data, subject to legal retention obligations
- **Complaint:** Lodge a complaint with the Office of the Privacy Commissioner of Canada (OPC) if you believe your privacy rights have been violated

To exercise any of these rights, contact us at the details in Section 9. We will respond within 30 days.`,
  },
  {
    title: 'Data Security',
    body: `We take the security of your personal information seriously and implement appropriate technical and organizational measures including:

- Secure, password-protected client management systems
- Encrypted transmission of data via HTTPS on our website
- Restricted access to personal and health information on a need-to-know basis
- Use of reputable, security-certified third-party platforms for booking and payments

No method of electronic transmission or storage is 100% secure. If you have concerns about the security of your information, please contact us directly.`,
  },
  {
    title: 'Contact & Complaints',
    body: `For any questions, access requests, or concerns about this Privacy Policy:

**Lustrouz Aesthetics**
1275 Finch Ave W, North York, ON M3J 0L5
Toronto, Canada

Phone: +1 (437) 980-1164
Instagram: @lustrouz_bynzsha

If you are not satisfied with our response, you may contact the **Office of the Privacy Commissioner of Canada** at www.priv.gc.ca or 1-800-282-1376.`,
  },
]


export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.title = 'Privacy Policy · Lustrouz Aesthetics'
    return () => { document.title = 'Lustrouz Aesthetics · Medical Skincare Clinic · Toronto' }
  }, [])

  return (
    <div className="site-shell">
      <Navbar />
      <main id="main">
        <section className="pt-36 pb-16 sm:pt-40 sm:pb-20 px-5 sm:px-8 lg:px-12" style={{ background: 'var(--color-surface)' }}>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs tracking-widest uppercase mb-5 font-medium" style={{ color: 'var(--color-accent-dark)', letterSpacing: '0.24em' }}>
              <span className="inline-block w-8 h-px align-middle mr-3" style={{ background: 'var(--color-accent)' }} />
              Legal
            </p>
            <h1 className="font-serif mb-5" style={{ color: 'var(--color-text)', fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.08, fontWeight: 400 }}>
              Privacy{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>Policy</em>
            </h1>
            <p className="font-sans font-light mb-6" style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.85 }}>
              Last updated: June 2025. This policy explains how Lustrouz Aesthetics collects, uses, and protects your personal information in accordance with Canadian privacy law (PIPEDA).
            </p>
            <Link to="/terms" className="inline-flex items-center gap-2 text-sm font-sans transition-colors duration-200" style={{ color: 'var(--color-accent)' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
              View Terms &amp; Conditions →
            </Link>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-5 sm:px-8 lg:px-12" style={{ background: 'var(--color-bg)' }}>
          <div className="max-w-3xl mx-auto">
            {sections.map((s, i) => (
              <div key={s.title} className="mb-12 sm:mb-14"
                style={i > 0 ? { paddingTop: '2.5rem', borderTop: '1px solid rgba(23,23,23,0.1)' } : undefined}>
                <h2 className="font-serif mb-5" style={{ color: 'var(--color-text)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', fontWeight: 400, lineHeight: 1.2 }}>
                  {i + 1}. {s.title}
                </h2>
                {renderPolicyBody(s.body)}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
