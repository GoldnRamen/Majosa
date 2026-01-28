import Header from '../components/Header'
import Footer from '../components/Footer'
import { CldImage } from 'next-cloudinary'

export default function Leadership(){
  return (
    <div className="mt-15 min-h-screen bg-linear-to-b from-cyan-900 via-cyan-50 to-cyan-800  flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <section className="max-w-6xl mx-auto py-16 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image Side */}
            <div className="group lg:mt-20">
              <div className='lg:sticky lg:top-25'>
                <div className="absolute -inset-1 bg-linear-to-r from-cyan-950 to-cyan-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                  {/* Replace with your CldImage component */}
                  <CldImage 
                    src="ceo_majosa_1_w6cl4h" 
                    height={500}
                    width={500}
                    alt="CEO Portrait" 
                    className="w-full lg:h-[80vh] h-[50vh]  object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className='relative'>
              <div className=''>
                <span className="text-cyan-200 font-semibold tracking-widest uppercase text-sm">Our Leadership</span>
                <h2 className="text-4xl font-bold mt-2 mb-6">Meet Dr. Mathew John Sawuta </h2>
                
                <div className="space-y-4 text-gray-200 leading-relaxed">
                  <p className="text-xl font-thin italic bg-linear-to-tr from-transparent via-transparent to-cyan-800 rounded-tr-3xl border-l-4 border-cyan-950 pl-4 py-2 pr-5">
                    "We aren't just building products; we are building the future of how people connect."
                  </p>
                  <div className='rounded-lg p-6 text-cyan-100 leading-relaxed space-y-4 bg-linear-to-b from-transparent to-cyan-950'>
                    <p>
                      Dr. Mathew J. Sawuta is a teacher, Space Geoscientist, Environmental Geophysicist and Mineral & Geothermal Research Expert. He has an academic background in Geo and Medical Physics. He had his Bachelor of Science Degree in Physics, where he researched on Gross Alpha and Beta Radioactivity concentration in ground water and Master of Science Degree in Applied Geophysics where he investigated the subsurface structures of parts of the Upper Benue Basin by evaluating the structural formation and estimate the sedimentary thickness using Airborne Magnetic data through Spectral Analysis, Standard Euler Deconvolution and Source Parameter Imaging (SPI) all from Nasarawa State University, Keffi. 
                    </p>
                    <p>
                      His Doctorate Degree in Applied Geophysics, which focused on use of aeromagnetic and aeroradiometric data to prospect for potential ore mineralisation zones and geothermal sources in Nasarawa state, Nigeria.
                    </p>
                    <p>
                      He joined NASRDA as a staff January 2020 as a Scientific Officer I. Dr. Mathew J. Sawuta is currently a Senior Scientific Officer with the Department of satellite mission and Data Communication of Centre for satellite Technology Development (CSTD). He was part of the satellite mission team that worked on Unmanned Moving Vehicle (UMV). Dr. Mathew has several academic research publications in several reputable local and international journals totalling 8 publications.
                    </p>
                    <p>
                      Dr. Mathew has attended and presented research papers at different conferences which includes NIP FUTO 2019, NMGS 2020 at Ife and NMGS 2025 Abuja.
                    </p>
                    <p>
                      He is also a member of different professional bodies which include, Nigerian Institute of Physics, (NIP), Nigeria Mining and Geoscience Society, (NMGS), Nigerian Association of Exploration Geophysicists (NAEG) for Geoscientist and Engineers
                    </p>
                  </div>
                  
                </div>

                <div className="mt-8 flex gap-4 justify-center">
                  {/* Add Social Links */}
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    {/* LinkedIn Icon */}
                  </a>
                  <a href="#" className="p-2 bg-cyan-950 rounded-full hover:bg-blue-100 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    {/* LinkedIn Icon */}
                  </a>
                  <a href="#" className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    {/* LinkedIn Icon */}
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