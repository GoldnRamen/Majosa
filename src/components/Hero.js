import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Hero(){

  const image1 = "https://cdn.pixabay.com/photo/2022/12/16/00/36/mining-mechanism-7658737_1280.jpg"
  const image2 = "https://cdn.pixabay.com/photo/2018/07/25/06/06/corn-3560744_1280.jpg"
  const image3 = "https://cdn.pixabay.com/photo/2015/01/07/10/57/mall-591337_960_720.jpg"
  const image4 = "https://cdn.pixabay.com/photo/2018/06/29/13/01/rice-3505977_1280.jpg"
  
    const [activeImage, setActiveImage] = useState(0);
    const router = useRouter();
    const hash = router.asPath.split("#")[1]; // extract the part after #
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveImage((prev) => (prev === 0 ? 1 : prev === 1 ? 2 : prev === 2 ? 3 : 0));
      }, 5000); // change image every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
     
  
    useEffect(() => {
      if (hash) {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);
  return (
    <section className="relative bg-linear-to-r from-blue-600 to-cyan-500 text-white">
      <div className="w-full h-screen relative overflow-hidden">
        <img
          src={image1}
          alt="Image 1"
          className={`w-full h-full object-cover object-center absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 0 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={image2}
          alt="Image 2"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 1 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={image3}
          alt="Image 3"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 2 ? "opacity-100" : "opacity-0"
          }`}
        />
        <img
          src={image4}
          alt="Image 4"
          className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ${
            activeImage === 3 ? "opacity-100" : "opacity-0"
          }`}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-left text-white px-4">
          <div className="mx-auto px-6 py-32 flex-1 relative md:flex-row items-center gap-8">
            <div className="absolute inset-0 bg-gray-600 h-[50vh] top-30 opacity-70 z-0 rounded-lg"></div>
            <div className="relative z-20 mt-10 md:mt-0 lg:mt-0">
              <h2 className="text-2xl lg:text-5xl md:text-3xl font-bold leading-tight">Building Africa’s Future Through Innovation and Sustainable Growth</h2>
              <p className="mt-4 text-sm md:text-lg max-w-xl">Majosa Group is a diversified African conglomerate with expertise spanning energy, agriculture, construction, mining, and retail.</p>
              <div className="mt-6 flex gap-3 md:text-lg text-xs">
                <Link href="/companies" className="md:px-5 md:py-3 p-3 max-w-fit bg-white text-blue-700 rounded-md font-semibold">
                  Explore Our Companies
                </Link>
                <a href="/contact" className="md:px-5 md:py-3 p-3 max-w-fit border border-white rounded-md">
                  Partner With Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}