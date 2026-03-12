import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Philosophy from '@/components/Philosophy'
import T5Method from '@/components/T5Method'
import Offerings from '@/components/Offerings'
import About from '@/components/About'
import Writing from '@/components/Writing'
import Testimonial from '@/components/Testimonial'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import { getFeaturedEssays } from '@/lib/essays'

export default function HomePage() {
  const featuredEssays = getFeaturedEssays(3)

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <hr className="hr-gold" />
        <T5Method />
        <Offerings />
        <hr className="hr-gold" />
        <About />
        <Writing essays={featuredEssays} />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
