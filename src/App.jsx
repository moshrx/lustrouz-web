import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Philosophy from './components/Philosophy'
import Treatments from './components/Treatments'
import Testimonials from './components/Testimonials'
import BeautyConcerns from './components/BeautyConcerns'
import VisitUs from './components/VisitUs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#F5F0EB' }}>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Treatments />
        <BeautyConcerns />
        <Testimonials />
        <VisitUs />
      </main>
      <Footer />
    </div>
  )
}
