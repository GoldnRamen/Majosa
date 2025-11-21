import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Who We Are</h1>
        <p className="mt-4 text-gray-700">Majosa Group is a diversified Nigerian conglomerate with operations across mining, agriculture, construction, and retail. Founded on integrity and innovation, the Group has steadily grown into a trusted name for quality service delivery and strategic partnerships across Africa.</p>

        <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border rounded">Vision<br/><strong>To be a globally respected African conglomerate...</strong></div>
          <div className="p-6 bg-white border rounded">Mission<br/><strong>Transforming lives and industries through responsible investment...</strong></div>
          <div className="p-6 bg-white border rounded">Core Values<br/><strong>Integrity | Innovation | Excellence | Sustainability | Empowerment</strong></div>
        </section>

      </main>
      <Footer />
    </div>
  )
}