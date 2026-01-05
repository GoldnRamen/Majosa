import { FaEllipsisVertical } from "react-icons/fa6";

export default function Footer(){
  return (
    <footer className="bg-linear-to-br from-cyan-900 to-blue-100  border-t mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-cyan-50">© {new Date().getFullYear()} Majosa Group. All rights reserved.</div>
        <div className="text-sm text-cyan-50">Suite A159, Worldgate Shopping Centre, Karu, Abuja | info@majosagroup.com</div>
        <div className="space-x-1 flex items-center lg:p-0 px-4 text-cyan-950">
          <a href="#">Facebook</a>
          <FaEllipsisVertical />
          <a href="#">LinkedIn</a>
          <FaEllipsisVertical />
          <a href="#">Instagram</a>
          <FaEllipsisVertical />
          <a href="#">X</a>
        </div>
      </div>
    </footer>
  )
}