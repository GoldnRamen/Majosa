import { useRouter } from "next/router";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { CgInstagram } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";

export default function Footer(){
  const router = useRouter()
  return (
    <footer className={`${router.pathname === "/companies" ? "bg-yellow-700" : router.pathname === "/product" ? "bg-indigo-950" : router.pathname === "/services" ? "bg-gray-950":  "bg-linear-to-br from-cyan-950 to-cyan-100 mt-12"} z-40 cursor-pointer`}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-cyan-50">© {new Date().getFullYear()} Majosa Group. All rights reserved.</div>
        <div className="text-sm text-cyan-50">Suite A159, Worldgate Shopping Centre, Karu, Abuja | info@majosagroup.com</div>
        <div className="space-x-5 flex items-center lg:p-0 px-4 text-cyan-950">
          <a href="#"><FaFacebookF className="text-white cursor-pointer z-40"/></a>          
          <a href="#"><GrLinkedinOption className="text-white cursor-pointer z-40"/></a>          
          <a href="#"><CgInstagram className="text-white cursor-pointer z-40"/></a>          
          <a href="#"><BsTwitterX className="text-white cursor-pointer z-40"/></a>
        </div>
      </div>
    </footer>
  )
}