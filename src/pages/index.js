import Header from "@/components/Header"
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import CompaniesGrid from '@/components/CompaniesGrid'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Home(){

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
          <section id="about" className="space-y-4">
            <h2 className="text-2xl font-semibold">About Majosa Group</h2>
            <p className="text-gray-600">Majosa Group is headquartered in Abuja, Nigeria, and operates through four strong subsidiaries. We combine innovation, integrity, and excellence to create long-term value for our clients, partners, and the communities we serve.</p>
            <a href="/about" className="text-blue-600">Learn More →</a>
          </section>

          <section id="sectors" className="space-y-4">
            <h3 className="text-xl font-semibold">Sectors We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-12 border rounded relative" style={{backgroundImage: "url('images/machine-3037670_1280.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}><h4 className="bg-gray-800 rounded w-fit top-0 right-1 p-1 absolute">Mining</h4></div>
              <div className="p-12 border rounded relative" style={{backgroundImage: "url('images/dji-4223417_1280.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}><h4 className="bg-gray-800 rounded w-fit top-0 right-1 p-1 absolute">Agriculture</h4></div>
              <div className="p-12 border rounded relative" style={{backgroundImage: "url('images/construction-site-2733678_1280.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}><h4 className="bg-gray-800 rounded w-fit top-0 right-1 p-1 absolute">Construction</h4></div>
              <div className="p-12 border rounded relative" style={{backgroundImage: "url('images/supermarket-4052658_1280.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}><h4 className="bg-gray-800 rounded w-fit top-0 right-1 p-1 absolute">Retail</h4></div>              
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Our Companies</h3>
            <CompaniesGrid />
          </section>

          <section className="bg-gray-50 p-6 rounded">
            <h3 className="text-xl text-gray-400 font-semibold">Join us in shaping Africa’s growth story</h3>
            <p className="text-gray-600 mt-2">Partner with Majosa Group for investment, development, and sustainable projects across Africa.</p>
            <a href="/contact" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">Get In Touch</a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}