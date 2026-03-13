import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Philosophy from '@/components/Philosophy'
import T5Method from '@/components/T5Method'
import Offerings from '@/components/Offerings'
import About from '@/components/About'
import Writing from '@/components/Writing'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import SectionProgress from '@/components/SectionProgress'
import { getFeaturedEssays } from '@/lib/essays'

export default function HomePage() {
  const featuredEssays = getFeaturedEssays(3)

  return (
    <>
      <Nav />
      <SectionProgress />
      <main>
        <Hero />
        <Philosophy />
        <hr className="hr-gold" />
        <T5Method />
        <Offerings />
        <hr className="hr-gold" />
        <About />
        <Writing essays={featuredEssays} />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
