import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from './Footer';
import ProductsGrid from './ProductsGrid';
import ScrollingWave from '@/components/BackgroundAnimation';

export default function AllProductGrid(){
  const [selectedId, setSelectedId] = useState(null);    
  const router = useRouter();
  const hash = router.asPath.split("#")[1];  
  
  useEffect(() => {
    if (router.query.select) {
      setSelectedId(router.query.select);
    }
  }, [router.query.select]);    
  
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
        
  return (
    <>
      <Header />
        <div className="mt-15 min-h-screen bg-indigo-100 flex flex-col relative">
          <main className="flex-1 max-w-full lg:mx-20 px-2 py-12 space-y-8 text-cyan-950">
            <h1 className="text-3xl font-bold px-3">Our Products</h1>
            <p>Here, we bridge the gap between Nigeria’s rich natural resources and global industrial demand. Explore our specialized divisions—spanning high-grade <b>Geotechnical mineral extraction</b>, innovative <b>Agrochemical solutions</b>, and world-class <b>Global Logistics</b>. Whether you are sourcing raw materials or scaling agricultural productivity, Majosa delivers the reliability your business demands.</p>
            <div className="relative border-y-neutral-700 border-b p-2">
              <div className="lg:fixed left-0 right-0 space-y-4 bottom-0">                  
                <ScrollingWave />
              </div>
              <ProductsGrid />                
            </div>              
          </main>          
        </div>        
      <Footer />
    </>    
  )
}