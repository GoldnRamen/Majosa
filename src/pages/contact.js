import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

import Head from 'next/head';
import { CldImage } from 'next-cloudinary';

export default function Contact(){
   const addressSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Majosa Group",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suite A159, Worldgate Shopping Centre",
      "addressLocality": "Karu",
      "addressRegion": "Abuja",
      "addressCountry": "NG"
    }
   }
  return (
    <div className="mt-15 min-h-screen flex flex-col">
      <Header />
      <Head>
        <title>Contact Us - Majosa Group</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(addressSchema).replace(/</g, '\\u003c') 
          }}
        />
      </Head>
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="mt-4 text-gray-600">Corporate Headquarters: Suite A159, Worldgate Shopping Centre, Karu, Abuja, Nigeria</p>
          <p className="mt-2 text-gray-600">Email: info@majosagroup.com | Phone: +234 (your number here)</p>
          <div className="mt-6">
            <div className="w-full h-48 bg-gray-200 text-cyan-900 items-center flex flex-col justify-center">
              <CldImage src='google-5849613_1280_iid3sd' width={100} height={30} />
              <a 
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                View in mobile on Google Maps
              </a>
            </div>
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