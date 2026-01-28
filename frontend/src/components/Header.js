import { BurgerContext } from '@/context/BurgerContext';
import Link from 'next/link'
import { useContext } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useRouter } from 'next/router';
import { FaShoppingCart } from "react-icons/fa";
import { IoStorefront } from "react-icons/io5";

export default function Header() {
  const {headerDropDown, setHeaderDropDown} = useContext(BurgerContext)
  const toggleMenu = ()=>{
    setHeaderDropDown(prevState => !prevState)
  }
  const router = useRouter()
  return (
    <header className={`${router.pathname === "/companies" ? "bg-yellow-700" : router.pathname === "/product" ? "bg-indigo-950" : "bg-linear-to-br from-cyan-950 to-cyan-100"} shadow-sm fixed top-0 left-0 right-0 h-20 z-50`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className='w-12 h-12 bg-white rounded-full'>
            <div className={`w-10 h-10 bg-linear-to-br from-white ${router.pathname === "/companies" ? "to-yellow-900" : router.pathname === "/product" ? "to-indigo-950" : "to-cyan-900"} rounded-full flex items-center justify-center text-white font-bold`}></div>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white">Majosa Group</h1>
            <p className="text-xs text-white">Building Africa's Future</p>
          </div>
        </div>
        <nav className="hidden md:hidden space-x-4 text-white text-sm lg:flex flex-col md:flex-row">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/companies" className="hover:underline">Our Companies</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/leadership" className="hover:underline">Leadership</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/product" className="hover:underline flex items-center ml-12"><p className='text-sm'>Shop</p> <IoStorefront className={`${router.pathname != "/" ? "text-white" : ""} text-cyan-900 text-lg`} /></Link>
        </nav>    
        {!headerDropDown ? 
        <CiMenuBurger className="lg:hidden text-cyan-50 cursor-pointer" onClick={toggleMenu} /> :
        <TfiClose className="lg:hidden text-cyan-50 cursor-pointer" onClick={toggleMenu} /> }   
        
      </div>
      {headerDropDown && (
        <div className={`fixed lg:hidden right-0 left-0 top-20 z-30 ${router.pathname === "/product" ? "bg-indigo-500" : router.pathname === "/companies" ? "bg-yellow-600" : "bg-linear-to-br from-cyan-900 to-blue-100"}  bottom-0 p-10 border inset-0`}>
          <nav className="space-y-6 text-white text-sm relative flex flex-col" onClick={toggleMenu}>
            <Link href="/" className="smallNav max-w-full">Home</Link>
            <Link href="/about" className="smallNav max-w-full">About</Link>
            <Link href="/companies" className="smallNav max-w-full">Our Companies</Link>
            <Link href="/services" className="smallNav max-w-full">Services</Link>
            <Link href="/leadership" className="smallNav max-w-full">Leadership</Link>
            <Link href="/contact" className="smallNav max-w-full">Contact</Link>            
            <Link href="/product" className="hover:underline flex items-center"><p className='text-sm'>Shop</p> <IoStorefront className={`${router.pathname != "/" ? "text-white" : ""} text-cyan-900 text-lg`} /></Link>
          </nav>   
      </div>
      )}
    </header>
  )
}