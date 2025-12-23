import Link from 'next/link'

const companies = [
  {id: 'geo', name: 'Majosa Geotechnical Investment Ltd', desc: 'Exploration, Mining, Borehole Drilling, Geotechnical Engineering, and Mineral Export.', img: "/images/28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9.png"},
  {id: 'agro', name: 'Majosa Agrochemical Limited', desc: 'Rice processing, fertilizer & agrochemical services, mechanized farming.', img: "/images/d0d2e546-da2c-473b-b2c3-228b659b153c.png"},
  {id: 'global', name: 'Majosa Global Services Nig. Ltd', desc: 'Construction, Oil & Gas, Real Estate and general services.', img: "/images/f9018f9c-ac22-470c-8aff-0ff288defde1.png"},
  {id: 'enterprise', name: 'Majosa Enterprise', desc: 'Retail supermarket and general merchandise.', img: "/images/0b6f32ef-3f41-4996-b1d7-0d90d3273968.png"}
]

export default function CompaniesGrid(){
  return (
    <section id="companies" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {companies.map(c => (
        <div className="group relative overflow-hidden rounded-2xl">
          <div className=''>
            <img
              src={`${c.img}`}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
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