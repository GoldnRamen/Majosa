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

export default function AllProductGrid(){
  const allProducts = [
    {id: 'geo1', name: 'Majosa Geotechnical Investment Ltd', desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9_wy13q1", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo2', name: 'Majosa Geotechnical Investment Ltd', desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9_wy13q1", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo3', name: 'Majosa Geotechnical Investment Ltd', desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9_wy13q1", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo4', name: 'Majosa Geotechnical Investment Ltd', desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9_wy13q1", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'agro1', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'agro2', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'agro3', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'agro4', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'global1', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'global2', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'global3', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'global4', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'enterprise1', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise2', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise3', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise4', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise5', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise6', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise7', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise8', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"}
  ]

  const [selectedId, setSelectedId] = useState(null);
    const activeCard = allProducts.find(p => p.id === selectedId);
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
                {selectedId === null ? (             
                    <section id="products" className="mt-15 p-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
                        {allProducts.map(p => (
                        <div key={p.id} className={`group relative border overflow-hidden rounded-2xl shadow shadow-black`}>
                            <div className='h-64 w-full'>
                                <CldImage
                                    src={p.img}
                                    fill
                                    sizes='100vw'
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    alt='Picture not found'
                                />
                                <div className={`absolute z-10 top-2 left-2 h-8 w-8 lg:h-12 lg:w-12 ${p.bgColor} rounded flex items-center justify-center font-semibold text-white`}>{p.name.split(' ')[1]?.slice(0,2) || 'MG'}</div>                
                                <div
                                    key={p.id}
                                    onClick={() => toggleLike(p.id)}
                                    className="absolute z-10 top-2 right-2 h-8 w-8 rounded flex items-center justify-center cursor-pointer"
                                    >
                                    {clicked[p.id] ? (
                                        <>
                                            <FaHeart onMouseEnter={()=>showHover(p.id)} onMouseLeave={()=>hideHover(p.id)} className="w-7 h-7 text-cyan-950" />
                                            {hovMsg[p.id] ? <div className='absolute z-20 top-9 right-2 text-sm w-28 bg-white rounded p-2'>Drop from Cart</div> : null}                                                                                           
                                        </>
                                    ) : (
                                        <>
                                            <CiHeart onMouseEnter={()=>showHover(p.id)} onMouseLeave={()=>hideHover(p.id)} className="w-7 h-7 text-cyan-900" />
                                            {hovMsg[p.id] ? <div className='absolute z-30 top-9 right-2 text-sm w-28 bg-white rounded p-2'>Add to Cart</div> : null}
                                        </>
                                    )}
                                </div>                               
                               
                                <div className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-white/20 lg:p-4 p-1">                        
                                    <div className='relative flex justify-between items-center text-white'>
                                        <p className="h-fit w-fit p-2 justify-center font-semibold text-white lg:text-lg text-xs">{p.name}</p>                        
                                        <p className="p-1 rounded-lg border text-sm">$50</p>                                
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </section>
                    ):(
                    <div className="text-black lg:p-6 p-1 rounded-xl shadow-2xl w-full h-fit relative animate-in fade-in zoom-in duration-300">
                        <button 
                        onClick={() => setSelectedId(null)}
                        className="absolute lg:top-4 top-10 right-4 bg-yellow-950 hover:bg-white px-3 py-1 rounded z-30"
                        >
                        <MdOutlineClose className='text-white hover:text-red-900'/>
                        </button>
                        <div className='z-20 relative h-full'>
                        <div className='text-center backdrop-blur-md backdrop-brightness-100 p-1 mx-auto w-fit rounded-xl'>
                            {/* <p className="text-lg text-gray-800 font-bold">{activeCard.desc}</p>bg-linear-to-r from-cyan-950 via-gray-900 to-cyan-900 bg-clip-text text-transparent */}
                        </div>
                        <div className={`mt-5 lg:p-4 p-1 bg-linear-to-tl from-yellow-950 via-white to-white rounded lg:h-[80vh] h-fit relative grid lg:grid-cols-5 gap-3`}>
                            <div className='lg:row-span-1 text-center lg:hidden block mt-10 lg:mt-0'><h1 className="lg:text-2xl text-center font-bold">{activeCard.name}</h1> <hr class="border-t border-gray-400 w-1/2 mx-auto" /></div>
                            <div className='z-10 relative lg:col-span-3 border border-yellow-950 rounded-2xl h-[75vh]'>
                            <GalleryCarousel
                                key={activeCard.id}
                                images={activeCard.collage}
                                alts={"Image Not Available"}
                            /> 
                            </div> 
                            <div className='lg:col-span-2 flex flex-col space-y-5'>  
                            <div className='text-center hidden lg:block'><h1 className="lg:text-2xl text-center font-bold">{activeCard.name}</h1> <hr class="border-t border-gray-400 w-1/2 mx-auto" /></div>
                            <p className=' p-2'>{activeCard.desc}</p>
                            <div className='rounded-2xl lg:p-3 p-1 border border-gray-400 max-w-2/3 h-fit max-h-[40vh] m-2 bg-yellow-950 text-white overflow-auto'>
                                <div className='py-5 px-2 relative scrollable'>
                                <h3 className='font-extrabold '>Key Features</h3>
                                {activeCard.features && (
                                    <ul className='p-2 list-disc pl-6 list-item'>
                                    {activeCard.features.map((feat, index) => (
                                        <li key={index} className="marker:text-yellow-950 hover:marker:text-white transition marker:text-3xl text-sm">{feat}</li>
                                    ))}
                                    </ul>
                                )}
                                {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-white/0"></div> */}
                                </div>
                            </div>
                            </div>           
                        </div>
                        </div>
                    </div>     
                )}
            </main>
        </div>
    <Footer />
    </>
    
  )
}