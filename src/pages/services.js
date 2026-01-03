import Header from '../components/Header'
import Footer from '../components/Footer'
import { CldImage } from 'next-cloudinary'

export default function Services(){
  const services = [
    {id: 'mine', name: 'Exploration & Mining', img: "machine-3037670_1280_uc2lzq"},
    {id: 'agric', name: 'Agriculture & Food Processing', img: "dji-4223417_1280_uiglsz"},
    {id: 'construct', name: 'Construction & Real Estate', img: "construction-site-2733678_1280_n93czx"},
    {id: 'retail', name: 'Retail & Distribution', img: "supermarket-4052658_1280_fuvhgf"},
    {id: 'energy', name: 'Energy & Oil Services', img: "supermarket-4052658_1280_fuvhgf"}
  ]
  return (
    <div className="mt-15 min-h-screen bg-linear-to-br from-cyan-900 to-blue-100  flex flex-col">
      <Header />
      <main className="lg:mx-20 px-6 py-12 space-y-8">
        <h1 className="text-3xl font-bold">Services</h1>
        <p>At Majosa Group, our operations cut across major economic sectors, providing integrated solutions that meet international standards</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map(s => (                
            <div key={s.id} className="group border-2 border-cyan-100 relative overflow-hidden rounded-2xl bg-transparent shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
              <div className="relative h-48 w-full">
                <CldImage src={s.img} crop={"fill"} fill sizes="100vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-white">{s.name}</h3>
                <div className="absolute inset-x-0 z-20 text-sm lg:bottom-0 bottom-20 translate-y-full lg:group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md bg-white/20 p-4">
                <h3 className="text-white font-semibold">{s.name}</h3>
                <p className="text-white border border-white text-sm shadow-xl animate-pulse p-1 rounded hover:cursor-pointer w-fit" onClick={() => handleCardClick(s.id)}>Learn More →</p>
              </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-t from-cyan-800/40 to-transparent" />
            </div> 
          ))}            
        </div>
      </main>
      <Footer />
    </div>
  )
}