export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} Majosa Group. All rights reserved.</div>
        <div className="text-sm text-gray-600">Suite A159, Worldgate Shopping Centre, Karu, Abuja | info@majosagroup.com</div>
        <div className="space-x-3">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Instagram</a>
          <a href="#">X</a>
        </div>
      </div>
    </footer>
  )
}