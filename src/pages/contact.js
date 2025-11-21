import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Contact(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">Corporate Headquarters: Suite A159, Worldgate Shopping Centre, Karu, Abuja, Nigeria</p>
          <p className="mt-2 text-gray-600">Email: info@majosagroup.com | Phone: +234 (your number here)</p>
          <div className="mt-6">
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">Map placeholder</div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}