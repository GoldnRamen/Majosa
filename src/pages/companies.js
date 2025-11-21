import Header from '../components/Header'
import Footer from '../components/Footer'
import CompaniesGrid from '../components/CompaniesGrid'

export default function Companies(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-3xl font-bold">Our Companies</h1>
        <p className="text-gray-600">Each subsidiary focuses on its area of expertise while contributing to the Group's shared vision.</p>
        <CompaniesGrid />
      </main>
      <Footer />
    </div>
  )
}