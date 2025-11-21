import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold"></div>
          <div>
            <h1 className="text-lg font-semibold text-blue-950">Majosa Group</h1>
            <p className="text-xs text-gray-500">Building Africa's Future</p>
          </div>
        </div>
        <nav className="space-x-4 text-blue-900 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/companies" className="hover:underline">Our Companies</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/leadership" className="hover:underline">Leadership</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  )
}