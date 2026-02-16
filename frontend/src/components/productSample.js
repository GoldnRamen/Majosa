import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { MdOutlineClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CartContext } from '@/context/CartContext';
import Footer from './Footer';
import CompaniesGrid from './CompaniesGrid';
import ProductsGrid from './ProductsGrid';

export default function AllProductGrid(){
  

  const [selectedId, setSelectedId] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const router = useRouter();
    const hash = router.asPath.split("#")[1]; // extract the part after #
    const { clicked, setClicked, hovMsg, setHovMsg } = useContext(CartContext)
  
    
    const productPage = "/product";
    const handleCardClick = (id) => {
      if (router.pathname !== productPage) {
        router.push({
          pathname: productPage,
          query: { select: id },
        });
        return;
      }
  
      setSelectedId(id);
    };
  
    useEffect(() => {
      if (router.query.select) {
        setSelectedId(router.query.select);
      }
    }, [router.query.select]);
  
    function GalleryCarousel({ images, alts }) {
      const [index, setIndex] = useState(0);
  
      // Auto-rotate images
      useEffect(() => {
        if (!images.length) return;
  
        const interval = setInterval(() => {
          setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // 4s per slide
  
        return () => clearInterval(interval); // cleanup on unmount
      }, [images]);
  
      if (!images.length) return null;
  
      return (
        <div className="relative w-full mt-15 bg-cyan-50 h-full">
          <CldImage
            src={images[index]}
            alt="Image Not Available"
            fill
            className="object-cover rounded-2xl w-full h-full"
            // sizes="100vw"
          />
        </div>
      );
    }
  
    useEffect(() => {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);
  
      const toggleLike = (id) => {
      setClicked(prev => ({
          ...prev,
          [id]: !prev[id]
      }));
      };
  
      const showHover = (id) => {
          setHovMsg(prev => ({ ...prev, [id]: true }));
      };
  
      const hideHover = (id) => {
          setHovMsg(prev => ({ ...prev, [id]: false }));
  };
  return (
    <>
    <Header />
        <div className="mt-15 min-h-screen bg-linear-to-br from-cyan-50 to-white flex flex-col">
            <main className="flex-1 max-w-full lg:mx-20 px-2 py-12 space-y-8 text-cyan-950">
                <h1 className="text-3xl font-bold px-3">Our Products</h1>
                <ProductsGrid />
            </main>
        </div>
    <Footer />
    </>
    
  )
}