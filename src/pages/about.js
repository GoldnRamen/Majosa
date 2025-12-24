import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function About(){
    const image1 = "https://ideogram.ai/assets/image/lossless/response/5EyoXob3QjycyUsXvuPF3A"
    const image2 = "https://ideogram.ai/assets/image/lossless/response/VbWet9HdQsSrdqrAK-aR4Q"
    const image3 = "https://ideogram.ai/assets/progressive-image/balanced/response/nBZcTmDdQdyhqmmyjftCzQ"
    const image4 = "https://ideogram.ai/assets/image/lossless/response/uN26Jw0jQ_WN2hCfwxX3Tw"
  
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
    <div className="min-h-screen mt-15 bg-linear-to-br from-cyan-900 to-blue-100 flex flex-col">
      <Header />
      <main className="flex-1 py-12 space-y-10">
        <h1 className="text-3xl font-bold p-3 text-center">Who We Are</h1>
        <div className="w-full grid grid-cols-4 h-[80vh] relative overflow-hidden" style={{backgroundImage: 'url("https://imagine-public.x.ai/imagine-public/images/1fab00e1-5785-42db-a02f-48883647c1e2.png?cache=1")', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
          
        </div>
        <div className='max-w-6xl mx-auto px-2'>
          <p className="mt-4 text-white">Majosa Group is a diversified Nigerian conglomerate with operations across mining, agriculture, construction, and retail. Founded on integrity and innovation, the Group has steadily grown into a trusted name for quality service delivery and strategic partnerships across Africa.</p>
          <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
            <div className="p-3 bg-white border rounded flex items-center gap-5"><img className='w-28' src="https://res.cloudinary.com/do2yiivip/image/upload/v1766583109/vision_grafuh.png" /><div><strong>Vision</strong><br/><p>To be a globally respected African conglomerate...</p></div></div>
            <div className="p-3 bg-white border rounded flex items-center gap-5"><img className='w-28' src="https://res.cloudinary.com/do2yiivip/image/upload/v1766583109/values_fubsnx.png" /><div><strong>Mission</strong><br/><p>Transforming lives and industries through responsible investment...</p></div></div>
            <div className="p-3 bg-white border rounded flex items-center gap-5"><img className='w-28' src="https://res.cloudinary.com/do2yiivip/image/upload/v1766583097/mission_tn56zi.png" /><div><strong>Core Values</strong><br/><p>Integrity | Innovation | Excellence | Sustainability | Empowerment</p></div></div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}