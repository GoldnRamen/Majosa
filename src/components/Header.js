import { BurgerContext } from '@/context/BurgerContext';
import Link from 'next/link'
import { useContext } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export default function Header() {
  const {headerDropDown, setHeaderDropDown} = useContext(BurgerContext)
  const toggleMenu = ()=>{
    setHeaderDropDown(prevState => !prevState)
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 h-20 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold"></div>
          <div>
            <h1 className="text-lg font-semibold text-blue-950">Majosa Group</h1>
            <p className="text-xs text-gray-500">Building Africa's Future</p>
          </div>
        </div>
        <nav className="hidden space-x-4 text-blue-900 text-sm md:flex flex-col md:flex-row">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/companies" className="hover:underline">Our Companies</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/leadership" className="hover:underline">Leadership</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>    
        {!headerDropDown ? 
        <CiMenuBurger className="md:hidden text-blue-950 cursor-pointer" onClick={toggleMenu} /> :
        <TfiClose className="md:hidden text-blue-950 cursor-pointer" onClick={toggleMenu} /> }   
        
      </div>
      {headerDropDown && (
        <div className="fixed lg:hidden right-0 left-1 top-20 z-30 bg-linear-to-br from-cyan-900 to-blue-100 bottom-1 p-10 border rounded-l-xl">
          <nav className="space-y-10 text-white text-lg flex flex-col" onClick={toggleMenu}>
            <Link href="/" className="smallNav max-w-fit">Home</Link>
            <Link href="/about" className="smallNav max-w-fit">About</Link>
            <Link href="/companies" className="smallNav max-w-fit">Our Companies</Link>
            <Link href="/services" className="smallNav max-w-fit">Services</Link>
            <Link href="/leadership" className="smallNav max-w-fit">Leadership</Link>
            <Link href="/contact" className="smallNav max-w-fit">Contact</Link>
          </nav>   
      </div>
      )}
    </header>
  )
}