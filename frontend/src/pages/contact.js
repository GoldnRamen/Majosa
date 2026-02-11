import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

import Head from 'next/head';
import { CldImage } from 'next-cloudinary';
import { SiGmail } from "react-icons/si";
import { GiPhone } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";

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
      <main className='lg:grid lg:grid-cols-5 lg:h-screen h-full lg:bg-center bg-cover bg-no-repeat flex' style={{backgroundImage: "url('https://res.cloudinary.com/do2yiivip/image/upload/v1770800309/1fab00e1-5785-42db-a02f-48883647c1e2_wlj7ru.jpg')"}}>
        <div className='lg:col-span-2 relative lg:mx-0 md:mx-auto mx-3 lg:bg-cyan-50 backdrop-blur-sm bg-white/70'>
          <div className='lg:absolute lg:top-15 mt-10 sticky'>
            <div className="mx-8">
              <h1 className="text-3xl text-cyan-950 mb-3 font-bold">Contact Us</h1>
              <ContactForm />   
            </div>
          </div>
          <div className='lg:hidden flex-1 mt-4'>
                <div className="w-full text-cyan-900 flex flex-col justify-start">
                  <div className='space-y-3 rounded backdrop-blur-md bg-black/10 space-x-1'>
                    <div className='p-2 flex border-b relative'>
                      <div className='flex flex-col space-y-12 border-r border-dotted px-2'>
                        <FaLocationDot className='text-2xl'/>      
                        <SiGmail className='text-2xl'/>        
                        <GiPhone className='text-2xl'/>    
                      </div>
                      <div className=' space-y-3'>
                        <div className='flex items-start p-1 space-x-2 mx-1 w-fit'>      
                          <p className="text-xs font-semibold">Corporate Headquarters: Suite A159, Worldgate Shopping Centre, Karu, Abuja, Nigeria</p>
                          </div>            
                          <div className='flex items-end p-1 space-x-2 hover:underline cursor-pointer hover:bg-white hover:text-cyan-900 hover:rounded mx-1 w-fit absolute bottom-16'>    
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meetmajosa@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold">info@majosagroup.com</a>
                          </div>            
                          <div className='flex items-end p-1 space-x-2 mx-1 w-fit absolute bottom-2'>        
                            <p className="mt-2 text-xs font-semibold">+2347056849844</p>
                          </div> 
                      </div>
                    </div>
                  </div>
                </div>  
                <div className="p-4 bg-cyan-950 flex justify-center items-center">
                  <a href="https://maps.google.com/?cid=6294312982886394801&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" className="flex gap-2 bg-cyan-100 cursor-pointer text-slate-950 px-4 py-2 rounded-lg font-bold text-sm hover:bg-cyan-50 transition-colors items-center">
                    <BiCurrentLocation /> Location in Map
                  </a>
                </div>                 
              </div>
        </div>
        <div className='col-span-3 hidden lg:block'>
          <Head>
            <title>Contact Us - Majosa Group</title>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ 
                __html: JSON.stringify(addressSchema).replace(/</g, '\\u003c') 
              }}
            />
          </Head>
          <div className="flex w-full mx-auto px-6 text-cyan-950 gap-8 relative bg-none lg:bg-cover lg:bg-center lg:bg-no-repeat h-screen" style={{backgroundImage: "url('https://res.cloudinary.com/do2yiivip/image/upload/v1770800309/1fab00e1-5785-42db-a02f-48883647c1e2_wlj7ru.jpg')"}}>
              <div className='absolute hidden lg:block left-0 right-0 bottom-0'>
                <div className="w-full text-white flex flex-col justify-start">
                  <div className='space-y-3 rounded backdrop-blur-md bg-black/10 space-x-1'>
                    <div className='p-2 flex border-b'>
                      <div className='flex flex-col space-y-6 border-r border-dotted px-2'>
                        <FaLocationDot className='text-2xl'/>      
                        <SiGmail className='text-2xl'/>        
                        <GiPhone className='text-2xl'/>    
                      </div>
                      <div className=' space-y-3'>
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
                <div className="p-4 bg-cyan-950 flex justify-center items-center">
                  <a href="https://maps.google.com/?cid=6294312982886394801&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" className="flex gap-2 bg-cyan-100 cursor-pointer text-slate-950 px-4 py-2 rounded-lg font-bold text-sm hover:bg-cyan-50 transition-colors items-center">
                    <BiCurrentLocation /> Location in Map
                  </a>
                </div>              
              </div>  
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}