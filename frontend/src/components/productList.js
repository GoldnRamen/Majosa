import { CldImage } from 'next-cloudinary'
import { MdOutlineClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CartContext } from '@/context/CartContext';

export default function ProductList({selectedName}){
const allProducts = [
    {id: 'geo1', name: 'Majosa Geotechnical Investment Ltd', product: "Copper Ore", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770979606/generated_video_c4xane.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo2', name: 'Majosa Geotechnical Investment Ltd', product: "Lithium", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770981927/generated_video_1_whyrfw.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo3', name: 'Majosa Geotechnical Investment Ltd', product: "Iron Ore", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770982330/generated_video_2_u7w53h.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo4', name: 'Majosa Geotechnical Investment Ltd', product: "Gold", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770982589/generated_video_3_j6zsol.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo5', name: 'Majosa Geotechnical Investment Ltd', product: "Beryllium", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770987262/generated_video_4_qb7etn.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo6', name: 'Majosa Geotechnical Investment Ltd', product: "Tantalite", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770987834/generated_video_5_xc8axs.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo7', name: 'Majosa Geotechnical Investment Ltd', product: "Tin", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770988262/generated_video_7_ngm0mu.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo8', name: 'Majosa Geotechnical Investment Ltd', product: "Monazite", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770988534/generated_video_8_fxr3rt.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo9', name: 'Majosa Geotechnical Investment Ltd', product: "Tourmaline", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770989337/generated_video_9_kfbstr.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo10', name: 'Majosa Geotechnical Investment Ltd', product: "Aquamarine", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1771234826/generated_video_10_thwnh5.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo11', name: 'Majosa Geotechnical Investment Ltd', product: "Lepidolite", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1771235481/generated_video_11_iwvk4k.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'geo12', name: 'Majosa Geotechnical Investment Ltd', product: "Spodumene", desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1771235907/generated_video_12_i5pekn.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'agro1', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'agro2', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'global1', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'global2', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'enterprise1', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
    {id: 'enterprise2', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"},
  ]

   const filteredItems = allProducts.filter(
    (p) => p.name === selectedName
  );
  const [selectedId, setSelectedId] = useState(null);
    const router = useRouter();
    const hash = router.asPath.split("#")[1]; // extract the part after #
    const { clicked, setClicked, hovMsg, setHovMsg } = useContext(CartContext)
  
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
        <section className='mt-10 lg:mt-5 p-2'>
            <h1 className='w-[70%] lg:w-full text-xl mb-4'>{selectedName}</h1>
            <section id="products" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {filteredItems.map(p => (
                <div key={p.id} className={`group relative border overflow-hidden rounded-2xl shadow shadow-black`}>
                    <div className='h-64 w-full overflow-hidden'>                  
                        <video
                        className="w-full h-full object-cover"    
                        autoPlay
                        loop
                        muted
                        playsInline
                        >
                        <source                                  
                            src={p.img}
                            type="video/mp4"
                        />
                        </video>
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
                                <p className="h-fit w-fit p-2 justify-center font-semibold text-white lg:text-lg text-xs">{p.product}</p>                        
                                <p className="p-1 rounded-lg border text-sm">$50</p>                                
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </section>
        </section>        
    </>
  )}