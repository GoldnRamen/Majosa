import Header from '../components/Header'
import Footer from '../components/Footer'
import { CldImage } from 'next-cloudinary'
import { useState } from 'react'

export default function Leadership(){
  const [seeP1, setSeeP1] = useState(true)
  const [seeP2, setSeeP2] = useState(false)
  const [seeP3, setSeeP3] = useState(false)

  const handleSee1 = ()=>{
    setSeeP1(true)
    setSeeP2(false)
    setSeeP3(false)
  }
  const handleSee2 = ()=>{
    setSeeP1(false)
    setSeeP2(true)
    setSeeP3(false)
  }
  const handleSee3 = ()=>{
    setSeeP1(false)
    setSeeP2(false)
    setSeeP3(true)
  }
  return (
    <div className="mt-15 min-h-screen bg-linear-to-b from-cyan-900 to-cyan-50  flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <section className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group lg:mt-20">
              <div className='lg:sticky lg:top-20'>
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-950 to-cyan-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">                  
                  <CldImage src="ceo_majosa_1_w6cl4h" height={500} width={500} alt="CEO Portrait" 
                    className="w-full lg:h-[80vh] h-[50vh] object-cover"
                  />
                </div>
              </div>
            </div>            
            <div className='relative'>
              <div>
                <span className="text-cyan-200 font-semibold tracking-widest uppercase text-sm">Our Leadership</span>
                <h2 className="text-4xl font-bold mt-2 mb-6">Meet Dr. Mathew John Sawuta </h2>                
                <div className="space-y-4 text-gray-200 leading-relaxed">
                  <p className="text-xl font-thin italic bg-linear-to-tr from-transparent via-transparent to-cyan-800 rounded-tr-3xl border-l-4 border-cyan-950 pl-4 py-2 pr-5">
                    "We aren't just building products; we are building the future of how people connect."
                  </p>
                  <div className='rounded-lg p-6 text-cyan-100 leading-relaxed space-y-4 bg-linear-to-b from-transparent to-cyan-950'>
                    {seeP1 && 
                      <p>Dr. Mathew J. Sawuta is a teacher, Space Geoscientist, Environmental Geophysicist and Mineral & Geothermal Research Expert. He has an academic background in Geo and Medical Physics. He had his Bachelor of Science Degree in Physics, where he researched on Gross Alpha and Beta Radioactivity concentration in ground water and Master of Science Degree in Applied Geophysics where he investigated the subsurface structures of parts of the Upper Benue Basin by evaluating the structural formation and estimate the sedimentary thickness using Airborne Magnetic data through Spectral Analysis, Standard Euler Deconvolution and Source Parameter Imaging (SPI) all from Nasarawa State University, Keffi.</p>}
                    {seeP2 && 
                      <>
                        <p>His Doctorate Degree in Applied Geophysics, which focused on use of aeromagnetic and aeroradiometric data to prospect for potential ore mineralisation zones and geothermal sources in Nasarawa state, Nigeria.</p>
                        <p>He joined NASRDA as a staff January 2020 as a Scientific Officer I. Dr. Mathew J. Sawuta is currently a Senior Scientific Officer with the Department of satellite mission and Data Communication of Centre for satellite Technology Development (CSTD). He was part of the satellite mission team that worked on Unmanned Moving Vehicle (UMV). Dr. Mathew has several academic research publications in several reputable local and international journals totalling 8 publications.</p>
                      </>
                    }
                    {seeP3 && 
                      <>
                        <p>Dr. Mathew has attended and presented research papers at different conferences which includes NIP FUTO 2019, NMGS 2020 at Ife and NMGS 2025 Abuja.</p>
                        <p>He is also a member of different professional bodies which include, Nigerian Institute of Physics, (NIP), Nigeria Mining and Geoscience Society, (NMGS), Nigerian Association of Exploration Geophysicists (NAEG) for Geoscientist and Engineers</p>
                      </>
                    }                    
                  </div>                  
                </div>

                <div className="mt-8 flex gap-4 justify-center">                  
                  <a onClick={handleSee1} className={`p-2 ${seeP1 ? "bg-cyan-950 " : "bg-gray-100 "} border-cyan-950 border-2 rounded-full hover:bg-blue-100 transition-colors`}>
                    {/* <span className="sr-only">LinkedIn</span>                     */}
                  </a>
                  <a onClick={handleSee2} className={`p-2 ${seeP2 ? "bg-cyan-950 " : "bg-gray-100 "} border-cyan-950 border-2 rounded-full hover:bg-blue-100 transition-colors`}>
                    {/* <span className="sr-only">LinkedIn</span>                     */}
                  </a>
                  <a onClick={handleSee3} className={`p-2 ${seeP3 ? "bg-cyan-950 " : "bg-gray-100 "} border-cyan-950 border-2 rounded-full hover:bg-blue-100 transition-colors`}>
                    {/* <span className="sr-only">LinkedIn</span>                     */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>            
      </main>
      <Footer />
    </div>
  )
}