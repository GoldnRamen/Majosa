import Link from 'next/link'

const companies = [
  {id: 'geo', name: 'Majosa Geotechnical Investment Ltd', desc: 'Exploration, Mining, Borehole Drilling, Geotechnical Engineering, and Mineral Export.'},
  {id: 'agro', name: 'Majosa Agrochemical Limited', desc: 'Rice processing, fertilizer & agrochemical services, mechanized farming.'},
  {id: 'global', name: 'Majosa Global Services Nig. Ltd', desc: 'Construction, Oil & Gas, Real Estate and general services.'},
  {id: 'enterprise', name: 'Majosa Enterprise', desc: 'Retail supermarket and general merchandise.'}
]

export default function CompaniesGrid(){
  return (
    <section id="companies" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {companies.map(c => (
        <div key={c.id} className="p-4 border rounded-lg shadow-sm bg-white">
          <div className="h-12 w-12 bg-gray-700 rounded flex items-center justify-center font-semibold">{c.name.split(' ')[1]?.slice(0,2) || 'MG'}</div>
          <h3 className="mt-3 text-gray-700 font-semibold">{c.name}</h3>
          <p className="text-sm mt-2 text-gray-600">{c.desc}</p>
          <div className="mt-4">
            <Link href="/companies" className="text-blue-600">Learn More →</Link>
          </div>
        </div>
      ))}
    </section>
  )
}