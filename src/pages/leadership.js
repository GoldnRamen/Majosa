import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Leadership(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Leadership</h1>
        <div className="mt-6 bg-white border rounded p-6 flex gap-6 items-center">
          <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center">Photo</div>
          <div>
            <h2 className="text-xl font-semibold">Dr. Mathew John Sawuta (Ph.D.)</h2>
            <p className="text-gray-600 mt-2">Group Managing Director / CEO — Dr. Mathew John Sawuta is a visionary entrepreneur and geoscientist leading the Majosa Group with a focus on sustainable industrial growth across Africa.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}