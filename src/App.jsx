import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Philosophy from './components/Philosophy'
import BeautyConcerns from './components/BeautyConcerns'
import BeforeAfter from './components/BeforeAfter'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import BShapeSpotlight from './components/BShapeSpotlight'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const target = location.state?.scrollTo
    if (!target) return
    requestAnimationFrame(() => {
      document.querySelector(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    window.history.replaceState({}, '')
  }, [location.state])

  return (
    <div className="site-shell">
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <Philosophy />
        <BeautyConcerns />
        <BShapeSpotlight />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <VisitUs />
      </main>
      <Footer />
    </div>
  )
}
