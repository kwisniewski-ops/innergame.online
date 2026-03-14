import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Gap from '@/components/Gap'
import T5Method from '@/components/T5Method'
import Offerings from '@/components/Offerings'
import About from '@/components/About'
import Testimonial from '@/components/Testimonial'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Gap />
        <hr className="section-rule" />
        <T5Method />
        <hr className="section-rule" />
        <Offerings />
        <About />
        <hr className="section-rule" />
        <Testimonial />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
