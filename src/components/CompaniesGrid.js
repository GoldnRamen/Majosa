import Link from 'next/link'
import { CldImage } from 'next-cloudinary'

const companies = [
  {id: 'geo', name: 'Majosa Geotechnical Investment Ltd', desc: 'Exploration, Mining, Borehole Drilling, Geotechnical Engineering, and Mineral Export.', img: "28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9_wy13q1"},
  {id: 'agro', name: 'Majosa Agrochemical Limited', desc: 'Rice processing, fertilizer & agrochemical services, mechanized farming.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j"},
  {id: 'global', name: 'Majosa Global Services Nig. Ltd', desc: 'Construction, Oil & Gas, Real Estate and general services.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu"},
  {id: 'enterprise', name: 'Majosa Enterprise', desc: 'Retail supermarket and general merchandise.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri"}
]

export default function CompaniesGrid(){
  return (
    <section id="companies" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {companies.map(c => (
        <div className="group relative overflow-hidden rounded-2xl">
          <div className='h-64 w-full'>
            <CldImage
              src={c.img}
              fill
              sizes='100vw'
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute z-10 top-2 left-2 h-12 w-12 bg-gray-700 rounded flex items-center justify-center font-semibold">{c.name.split(' ')[1]?.slice(0,2) || 'MG'}</div>
            <div className="absolute z-10 top-20 left-10 right-5 h-fit w-fit p-2 justify-center font-semibold backdrop-blur-md bg-black/20 rounded">{c.name}</div>
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md bg-white/20 p-4">
            <h3 className="text-white font-semibold">Explore More</h3>
            <Link href="/companies" className="text-cyan-800">Learn More →</Link>
          </div>
        </div>
      ))}
    </section>
  )
}