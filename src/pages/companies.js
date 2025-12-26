import Header from '../components/Header'
import Footer from '../components/Footer'
import CompaniesGrid from '../components/CompaniesGrid'

export default function Companies(){
  return (
    <div className="mt-15 min-h-screen bg-linear-to-br from-cyan-900 to-blue-100 flex flex-col">
      <Header />
      <main className="flex-1 max-w-full mx-20 px-6 py-12 space-y-8">
        <h1 className="text-3xl font-bold">Our Companies</h1>
        <p className="text-white">
          Majosa Group is headquartered in Abuja, Nigeria, and operates through four strong subsidiaries.
          Each subsidiary focuses on its area of expertise while contributing to the Group's shared vision.  
        </p>
        <CompaniesGrid />
        <p className="text-white">We combine innovation, integrity, and excellence to create long-term value for our clients, partners, and the communities we serve.</p>
      </main>
      <Footer />
    </div>
  )
}