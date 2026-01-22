import Header from "@/components/Header"
import Image from "next/image"
import { CldImage } from "next-cloudinary"
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import CompaniesGrid from '@/components/CompaniesGrid'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import BubbleBackground from "@/components/BackgroundAnimation"
import OrganicWave from "@/components/BackgroundAnimation"
import RegularWave from "@/components/BackgroundAnimation"
import FloatTab from "@/components/FloatTab"

export default function Home(){
  const sectors = [
  {id: 'mine', name: 'Mining', img: "machine-3037670_1280_uc2lzq"},
  {id: 'agric', name: 'Agriculture', img: "dji-4223417_1280_uiglsz"},
  {id: 'construct', name: 'Construction', img: "construction-site-2733678_1280_n93czx"},
  {id: 'retail', name: 'Retail', img: "supermarket-4052658_1280_fuvhgf"}
]

  return (
    <div className="min-h-screen flex flex-col mt-15 bg-cyan-50">
      <Header />
      <main className="flex-1">
        <FloatTab />
        <Hero />
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-12 text-cyan-950">
          
          <section id="about" className="relative border-y-neutral-700 border-b p-2">
            <RegularWave />
            <div className="absolute space-y-4 top-10">
              <h2 className="text-2xl font-semibold">About Majosa Group</h2>
              <p className="">Majosa Group is headquartered in Abuja, Nigeria, and operates through four strong subsidiaries. We combine innovation, integrity, and excellence to create long-term value for our clients, partners, and the communities we serve.</p>
              <a href="/about" className="text-cyan-950 border border-cyan-950 text-sm shadow-xl animate-pulse hover:z-10 hover:animate-none hover:bg-cyan-950 hover:text-white p-1 rounded hover:cursor-pointer">Learn More →</a>
            </div>            
          </section>

          <section id="sectors" className="space-y-4">
            <h3 className="text-xl font-semibold">Sectors We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {sectors.map(s => (                
                <div key={s.id} className="group border-b border-cyan-950 relative overflow-hidden rounded-2xl bg-transparent shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-48 w-full">
                    <CldImage src={s.img} crop={"fill"} fill sizes="100vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg text-cyan-950">{s.name}</h3>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-t from-cyan-800/40 to-transparent" />
                </div> 
              ))}            
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Our Companies</h3>
            <CompaniesGrid />
          </section>

          <section className="bg-linear-to-br from-blue-100 via-cyan-50 to-transparent p-6 rounded">
            <h3 className="text-xl text-gray-400 font-semibold">Join us in shaping Africa’s growth story</h3>
            <p className="text-gray-600 mt-2">Partner with Majosa Group for investment, development, and sustainable projects across Africa.</p>
            <a href="/contact" className="inline-block mt-4 px-4 py-2 bg-cyan-800 text-cyan-50 rounded">Get In Touch</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}