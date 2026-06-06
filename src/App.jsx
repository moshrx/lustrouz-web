import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSeoMeta } from './lib/useSeoMeta'
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

  useSeoMeta({
    title: 'Lustrouz Aesthetics · Medical Skincare Clinic · Toronto',
    description: 'Lustrouz Aesthetics is a refined medical skincare clinic led by Shahama Nellanchery, Certified Medical Aesthetician. Customized treatments for acne, pigmentation, sensitivity & barrier repair in North York, Toronto.',
    canonical: 'https://lustrouz.com/',
    ogImage: 'https://lustrouz.com/og-image.jpg',
  })

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
