import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Treatments from '../components/Treatments'
import Footer from '../components/Footer'
import { BOOKING_URL } from '../lib/constants'

const HOME_TITLE = 'Lustrouz Aesthetics · Medical Skincare Clinic · Toronto'
const TREATMENTS_TITLE = 'Treatments · Lustrouz Aesthetics · Medical Skincare in North York'

export default function TreatmentsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    document.title = TREATMENTS_TITLE
    return () => { document.title = HOME_TITLE }
  }, [])

  return (
    <div className="site-shell">
      <Navbar />
      <main id="main">
        <section
          className="treatments-hero"
        >
          <div className="container-shell treatments-hero__inner">
            <p className="eyebrow">
              Our Services
            </p>
            <h1 className="display-title">
              Treatments <em className="script-accent">tailored to you.</em>
            </h1>
            <p className="lead-copy">
              Every session is built around your skin, from in-depth consultation to a custom protocol designed for visible, lasting results.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book a Consultation
            </a>
          </div>
        </section>
        <Treatments />
      </main>
      <Footer />
    </div>
  )
}
