import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services(){
  const services = ['Exploration & Mining', 'Agriculture & Food Processing', 'Construction & Real Estate', 'Energy & Oil Services', 'Retail & Distribution']
  return (
    <div className="mt-15 min-h-screen bg-linear-to-br from-cyan-900 to-blue-100  flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Services</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map(s => (
            <div key={s} className="p-6 bg-white text-black border rounded">{s}</div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}