import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact — Work With Kyle',
  description: 'Apply for a spot in The Atelier, join The Archive, or reach out to Kyle directly. Four coaching spots available.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
