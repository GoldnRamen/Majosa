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
    <div className="mt-15 min-h-screen bg-linear-to-br from-cyan-50 to-white flex flex-col">
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
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 text-cyan-950 gap-8">
        <div className='space-y-8'>
          <h1 className="text-3xl font-bold">Contact Us</h1>                             
          <div className="mt-6">
            <div className="w-full h-72 bg-gray-200 text-cyan-900 items-center flex flex-col justify-center">
              {/* <div className="overflow-hidden rounded-xl border-2 border-slate-200 shadow-lg bg-white">
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe               
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.510991954468!2d7.618922675018691!3d9.017062591043759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e05fca66b146b%3A0x5759e44f2a12abb1!2sWorldgate%20shopping%20centre!5e0!3m2!1sen!2sng!4v1769085090572!5m2!1sen!2sng" 
                    className="absolute top-0 left-0 w-full h-full border-0"
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>              
              </div>               */}
              <div className='space-y-3 rounded ml-10 border-l-4 space-x-1'>
            <div className='bg-linear-to-r from-transparent via-transparent to-gray-100 p-2 flex border-b'>
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
            </div>
            <div className="p-4 bg-cyan-950 flex justify-between items-center">
              <span className="text-white font-medium">Worldgate shopping centre</span>
              <a href="https://maps.google.com/?cid=6294312982886394801&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" className="bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg font-bold text-sm hover:bg-cyan-50 transition-colors">
                Open in App
              </a>
            </div>
          </div>
          <div className='space-y-3 rounded border-l-4 space-x-1'>            
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