import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

import Head from 'next/head';
import { CldImage } from 'next-cloudinary';
import { SiGmail } from "react-icons/si";
import { GiPhone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

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
    <div className="mt-15 min-h-screen bg-linear-to-br from-cyan-900 to-blue-100 flex flex-col">
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
        <div className='space-y-8'>
          <h1 className="text-3xl font-bold">Contact Us</h1>          
          <div className='space-y-3 rounded ml-10 border-l-4 space-x-1'>
            <div className='bg-linear-to-r from-cyan-900 via-transparent to-transparent p-2 flex border-b'>
              <div className='flex flex-col space-y-6 border-r border-dotted px-2'>
                <FaLocationDot className='text-2xl'/>      
                <SiGmail className='text-2xl'/>        
                <GiPhone className='text-2xl'/>    
              </div>
              <div className='ml-4'>
                <div className='flex items-start p-1 space-x-2 mx-1 w-fit'>      
                  <p className="text-sm font-semibold">Corporate Headquarters: Suite A159, Worldgate Shopping Centre, Karu, Abuja, Nigeria</p>
                  </div>            
                  <div className='flex items-end p-1 space-x-2 hover:underline cursor-pointer hover:bg-white hover:text-cyan-900 hover:rounded mx-1 w-fit'>    
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meetmajosa@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold">info@majosagroup.com</a>
                  </div>            
                  <div className='flex items-end p-1 space-x-2 mx-1 w-fit'>        
                    <p className="mt-2 text-sm font-semibold">+2347056849844</p>
                  </div> 
              </div>
            </div>
          </div>           
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