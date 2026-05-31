import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { BOOKING_URL } from '../lib/constants'
import { renderPolicyBody } from '../lib/renderPolicy'

const sections = [
  {
    title: 'Acceptance of Terms',
    body: `By accessing this website, booking a service, or attending Lustrouz Aesthetics, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.

These terms apply to all clients, visitors, and users of our website located at lustrouz.ca and our clinic at 1275 Finch Ave W, North York, ON M3J 0L5, Toronto, Canada.

We reserve the right to update these terms at any time. Changes take effect immediately upon posting to this page. Continued use of our services constitutes acceptance of the updated terms.`,
  },
  {
    title: 'Services',
    body: `Lustrouz Aesthetics provides professional medical aesthetic and skincare treatments performed by a Certified Medical Aesthetician. Our services include, but are not limited to:

- Signature and advanced facial treatments
- Chemical peels and resurfacing treatments
- Hydradermabrasion and oxygen infusion facials
- Microneedling and collagen induction therapy
- Scalp restoration and hair regrowth therapies
- Skin tag removal
- B.Shape body contouring

All treatments are subject to a consultation assessment. We reserve the right to decline or modify a service if it is deemed unsuitable for a client's skin type, health status, or medical history.`,
  },
  {
    title: 'Consultations & Medical Suitability',
    body: `All new clients are required to complete a health and skin history intake form prior to their first treatment. It is your responsibility to disclose any medical conditions, medications, allergies, skin conditions, recent cosmetic procedures, or contraindications that may affect your suitability for treatment.

Failure to disclose relevant health information may result in adverse outcomes for which Lustrouz Aesthetics cannot be held liable. We reserve the right to postpone or decline treatment if we determine it is not safe or appropriate for you at that time.

Certain treatments are contraindicated during pregnancy, breastfeeding, or for clients with specific medical conditions. Our team will advise you accordingly at consultation.`,
  },
  {
    title: 'Booking & Appointments',
    body: `Appointments can be made online through our booking platform, by phone, or by direct message on Instagram. A booking confirmation will be sent to the contact details you provide.

By booking an appointment, you agree to arrive on time for your scheduled slot. If you arrive more than 15 minutes late, we may need to shorten or reschedule your treatment to avoid impacting other clients.

We reserve the right to require a deposit to secure bookings, particularly for longer treatments or first-time clients. Deposit requirements will be communicated at the time of booking.`,
  },
  {
    title: 'Cancellation, No-Show & Refund Policy',
    body: `**Cancellation deadline:** Clients must cancel or reschedule their appointment **at least 24 hours before the scheduled appointment time** to be eligible for a full refund or free rebooking.

**Late cancellations:** Cancellations made less than 24 hours before the appointment time are not eligible for a refund. A rebooking fee may be charged for the next appointment.

**No-shows:** Clients who do not attend their appointment without notice will forfeit any deposit paid and may be required to pay a rebooking fee before securing future appointments.

**How to cancel:** Contact us by phone at +1 (437) 980-1164 or via Instagram DM (@lustrouz_bynzsha) with your full name and appointment details. Cancellation requests sent outside business hours are timestamped at receipt.

**Refund processing:** Approved refunds are returned to the original payment method within 5–10 business days, subject to your bank or card issuer's processing times.

**Exceptions:** We understand emergencies happen. Cancellations due to documented medical emergencies will be considered on a case-by-case basis at our discretion.`,
  },
  {
    title: 'Pricing & Payment',
    body: `All prices are listed in Canadian dollars (CAD) and are subject to applicable taxes. Prices are subject to change without notice. The price in effect at the time of booking confirmation applies to that appointment.

Payment is due at the time of service unless a deposit arrangement has been agreed in advance. We accept major credit and debit cards via our secure payment platform.

Promotional offers, packages, and gift cards are non-transferable, non-refundable, and cannot be combined with other offers unless explicitly stated. Package sessions must be used within 12 months of purchase.`,
  },
  {
    title: 'Treatment Results & Expectations',
    body: `Results from aesthetic treatments vary between individuals based on skin type, age, lifestyle, adherence to aftercare instructions, and other factors outside our control. Lustrouz Aesthetics makes no guarantee of specific outcomes.

Before-and-after images displayed on our website and social media represent individual client results and are not a guarantee of the results you will achieve.

Multiple sessions may be required to achieve desired outcomes for certain treatments. Our team will advise on realistic expectations during your consultation.`,
  },
  {
    title: 'Aftercare & Client Responsibility',
    body: `Written or verbal aftercare instructions are provided following each treatment. It is your responsibility to follow these instructions carefully. Failure to follow aftercare advice may affect your results and increase the risk of adverse reactions, for which Lustrouz Aesthetics cannot be held responsible.

Please contact us promptly if you experience any unexpected or prolonged reactions following treatment. Do not self-treat any reaction without first consulting our clinic.`,
  },
  {
    title: 'Photography & Consent',
    body: `Before and after photographs may be taken for treatment monitoring and record-keeping purposes with your explicit written consent. We will request your permission before taking any photographs.

With your separate, voluntary consent, images may be used for marketing purposes on our website or social media. You may withdraw this consent at any time by contacting us, and we will remove your images from future use as soon as reasonably practicable.

We will never use your images without obtaining prior written consent.`,
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website — including text, images, logos, graphics, treatment descriptions, and design — is the property of Lustrouz Aesthetics and is protected by applicable Canadian copyright law.

You may not reproduce, distribute, modify, or use our content for commercial purposes without our prior written permission. Personal, non-commercial use for reference is permitted provided credit is given.`,
  },
  {
    title: 'Partner Shop — GlyMed Plus Canada',
    body: `The "Shop" link on our website directs you to **GlyMed Plus Canada** (glymedpluscanada.ca), an independent third-party retailer that we recommend and promote to our clients. This is not a Lustrouz Aesthetics store.

**Important things to know:**

- GlyMed Plus Canada is an independent business. Lustrouz Aesthetics does not own, operate, or control their website, inventory, pricing, or fulfilment.
- Purchases made on GlyMed Plus Canada are subject to their own terms of service, privacy policy, and return/refund policies. We encourage you to review these before purchasing.
- Lustrouz Aesthetics is not responsible for any products purchased, transactions completed, or disputes arising from your use of the GlyMed Plus Canada website.
- We promote GlyMed Plus Canada because we believe in the quality of their professional skincare products and use them in our clinic. This is a recommendation, not a guarantee of any specific product outcome.
- If you have questions about which GlyMed products are suitable for your skin, we are happy to advise you during a consultation.`,
  },
  {
    title: 'Website Use & Disclaimer',
    body: `This website is provided for informational purposes only. The content on this site does not constitute medical advice and should not be used as a substitute for professional medical or dermatological consultation.

While we make every effort to ensure the accuracy of information on this site, we make no warranties, express or implied, regarding the completeness, accuracy, or suitability of the content for any particular purpose.

We are not responsible for the content or practices of any third-party websites linked from our site.`,
  },
  {
    title: 'Limitation of Liability',
    body: `To the fullest extent permitted by applicable law, Lustrouz Aesthetics and its staff shall not be liable for:

- Any indirect, incidental, or consequential loss or damage arising from your use of our website or services
- Adverse reactions occurring as a result of undisclosed health conditions or failure to follow aftercare instructions
- Loss of data, business interruption, or any other loss not caused by our direct negligence

Our total liability in connection with any claim shall not exceed the amount you paid for the service to which the claim relates.

Nothing in these terms excludes liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.`,
  },
  {
    title: 'Governing Law',
    body: `These Terms and Conditions are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein.

Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.`,
  },
  {
    title: 'Contact',
    body: `For any questions regarding these Terms and Conditions, please contact us:

**Lustrouz Aesthetics**
1275 Finch Ave W, North York, ON M3J 0L5
Toronto, Canada

Phone: +1 (437) 980-1164
Instagram: @lustrouz_bynzsha`,
  },
]


export default function Terms() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.title = 'Terms & Conditions · Lustrouz Aesthetics'
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
              Terms &{' '}
              <em style={{ color: 'var(--color-accent)', fontStyle: 'italic', fontWeight: 300 }}>Conditions</em>
            </h1>
            <p className="font-sans font-light mb-6" style={{ color: 'var(--color-muted)', fontSize: '1rem', lineHeight: 1.85 }}>
              Last updated: June 2025. These terms govern your use of our website and services. Please read them carefully before booking or attending an appointment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy-policy" className="inline-flex items-center gap-2 text-sm font-sans transition-opacity duration-200" style={{ color: 'var(--color-accent)' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                View Privacy Policy →
              </Link>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-sans transition-opacity duration-200" style={{ color: 'var(--color-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}>
                Book an Appointment →
              </a>
            </div>
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
