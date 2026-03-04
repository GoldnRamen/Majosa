import { CldImage } from 'next-cloudinary'
import { MdOutlineClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '@/context/CartContext';
import { BurgerContext } from '@/context/BurgerContext';
import OrderFloater from './OrderFloater';
import BackToTop from './BackTop';

export default function ProductList({selectedName, selectedDesc, selectedFocus, selectedHeadline}){
const allProducts = [
  {id: 'geo1', name: 'Majosa Geotechnical Investment Ltd', product: "Copper Ore", desc: "Sourced from reliable vein and disseminated deposits in pegmatite-associated or schist belt areas. Mining typically involves artisanal open-pit or shallow underground methods. Key states include Kano, Nasarawa (Akiri, Azara areas), and Osun. Nasarawa's copper offerings stand out for their association with high-grade rare metal zones, often yielding purer chalcopyrite forms compared to more scattered deposits elsewhere.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770979606/generated_video_c4xane.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo2', name: 'Majosa Geotechnical Investment Ltd', product: "Lithium", desc: "Extracted from hard-rock pegmatites via open-pit and artisanal mining, targeting coarse spodumene crystals. Primary states: Nasarawa, Plateau, Kaduna, Oyo, Kogi, and Kwara (where spodumene often dominates). Nasarawa's spodumene frequently shows high Li₂O grades and co-occurs with other valuables, making it competitive or superior in quality and recovery potential to southwestern deposits (e.g., Oyo/Kwara).", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770981927/generated_video_1_whyrfw.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo3', name: 'Majosa Geotechnical Investment Ltd', product: "Iron Ore", desc: "Sourced from sedimentary and metasedimentary deposits, mined via open-pit methods (artisanal to semi-mechanized). Major states: Kogi (Itakpe), Enugu, Niger, and Nasarawa. Nasarawa's iron ore benefits from basement complex associations, offering consistent grades suitable for blending, though Kogi remains the largest reserve holder.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770982330/generated_video_2_u7w53h.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo4', name: 'Majosa Geotechnical Investment Ltd', product: "Gold", desc: "Recovered from alluvial/placer and primary vein deposits through artisanal panning, sluicing, and shallow digging. Key states: Zamfara, Osun, Kebbi, Niger, and Nasarawa (Wamba area). Nasarawa's nuggets from schist belt extensions provide high-purity, lustrous pieces comparable to southwestern alluvial sources, with reliable ethical sourcing.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770982589/generated_video_3_j6zsol.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo5', name: 'Majosa Geotechnical Investment Ltd', product: "Beryllium", desc: "Primarily from beryl in pegmatites, extracted artisanal via open-pit or hand-sorting in rare metal zones. Key states: Nasarawa (Keffi-Nasarawa belt), Plateau, Bauchi, and Kaduna. Nasarawa excels here with Nb-Ta-Be-Li rich pegmatites, delivering higher-grade beryl (often gem-associated) than less evolved belts elsewhere.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770987262/generated_video_4_qb7etn.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo6', name: 'Majosa Geotechnical Investment Ltd', product: "Tantalite", desc: "Mined from columbite-tantalite in pegmatites and granitic settings through artisanal open-pit and gravity separation. Primary states: Nasarawa (Afu, Udege Beki, Wamba), Plateau (Jos), Bauchi, and Kaduna. Nasarawa's tantalite from the Nassarawa-Keffi belt is renowned for high Ta content and crystal quality in complex pegmatites, often outperforming Plateau's historically dominant but depleted deposits.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770987834/generated_video_5_xc8axs.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo7', name: 'Majosa Geotechnical Investment Ltd', product: "Tin", desc: "Cassiterite sourced from pegmatites and alluvial/eluvial deposits, mined artisanal via open-pit, dredging, or panning. Key states: Plateau (Jos), Nasarawa (Afu, Wamba), Bauchi, and Kaduna. Nasarawa's tin from rare metal pegmatites offers excellent luster and co-mineralization benefits, rivaling or surpassing the classic Jos Plateau output in modern contexts.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770988262/generated_video_7_ngm0mu.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo8', name: 'Majosa Geotechnical Investment Ltd', product: "Monazite", desc: "Heavy mineral sands from alluvial or beach placers, concentrated via gravity methods in artisanal operations. Key states: Nasarawa (Keffi, Wamba, Akwanga—most REE-rich), Plateau, Cross River, and Kogi. Nasarawa leads in REE concentration (monazite-rich zones), providing superior rare earth content compared to other states' more dispersed or lower-grade sands.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770988534/generated_video_8_fxr3rt.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo9', name: 'Majosa Geotechnical Investment Ltd', product: "Tourmaline", desc: "Gem-quality tourmaline from pegmatites, hand-mined artisanal in pockets or zones. Key states: Oyo (Itesiwaju, Iwajowa), Kwara, Nasarawa (Keffi, Nasarawa Eggon), Kaduna, and Osun. Nasarawa's zoned pegmatites yield vibrant, high-quality multicolored varieties (including blue/green/pink), often matching or exceeding southwestern gem hotspots in color intensity and clarity.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770989337/generated_video_9_kfbstr.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo10', name: 'Majosa Geotechnical Investment Ltd', product: "Aquamarine", desc: "Beryl variety from pegmatites, selectively mined artisanal in weathered zones for gem-grade material. Key states: Nasarawa (deep blue finds in Keffi/Nasarawa areas), Oyo (Olode), Kaduna, and Plateau. Nasarawa's recent deep blue-green aquamarine discoveries stand out for exceptional saturation and transparency, frequently superior to other localities' paler varieties.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1771234826/generated_video_10_thwnh5.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo11', name: 'Majosa Geotechnical Investment Ltd', product: "Lepidolite", desc: "Mined from mica-rich pegmatites through selective artisanal extraction and open-pit operations. Key states: Nasarawa (Keffi, Wamba areas), Ekiti, Kogi, Kaduna, and parts of Plateau. Nasarawa's lepidolite is notably abundant and well-zoned in evolved pegmatites, often with higher lithium content and sparkling mica quality than more lepidolite-dominant west-central deposits (e.g., Ekiti/Kogi).", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1771235481/generated_video_11_iwvk4k.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo12', name: 'Majosa Geotechnical Investment Ltd', product: "Spodumene", desc: "Extracted from hard-rock pegmatites via open-pit and artisanal mining, targeting coarse spodumene crystals. Primary states: Nasarawa, Plateau, Kaduna, Oyo, Kogi, and Kwara (where spodumene often dominates). Nasarawa's spodumene frequently shows high Li₂O grades and co-occurs with other valuables, making it competitive or superior in quality and recovery potential to southwestern deposits (e.g., Oyo/Kwara).", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1771235907/generated_video_12_i5pekn.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
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
  const [selectedMineral, setSelectedMineral] = useState(null);  
  const {setCloseBtn} = useContext(BurgerContext)

  const router = useRouter();
  const hash = router.asPath.split("#")[1]; // extract the part after #
  
  useEffect(() => {
    if (router.query.select) {
      setSelectedId(router.query.select);
    }
  }, [router.query.select]);

  const handleMineralClick = (min) => {
    setSelectedMineral(min);
  }

  function GalleryCarousel({ images, alts }) {
    const [index, setIndex] = useState(0);
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
        <CldImage src={images[index]} alt="Image Not Available" fill
          className="object-cover rounded-2xl w-full h-full"          
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
    
  return (
    <>          
      {selectedMineral === null ? (
        <section className='mt-10 lg:mt-5 p-2'>          
          <section id="products" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredItems.map(min => (
              <div key={min.id} className={`group relative border overflow-hidden rounded-t-2xl shadow shadow-black`}>
                
                  <div className='h-64 w-full overflow-hidden'>                                     
                      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src={min.img} type="video/mp4" />
                      </video>
                      <div className={`absolute z-10 top-2 left-2 h-8 w-8 lg:h-12 lg:w-12 ${min.bgColor} rounded flex items-center justify-center font-semibold text-white`}>{min.name.split(' ')[1]?.slice(0,2) || 'MG'}</div>                
                      <div className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-white/20 lg:p-4 p-1">                        
                        <div className='relative flex justify-between items-center text-white'>
                            <p className="h-fit w-fit p-2 justify-center font-semibold text-white lg:text-lg text-xs cursor-pointer hover:underline"  onClick={() => {handleMineralClick(min); setCloseBtn(false)}}>{min.product}</p>                        
                        </div>
                      </div>
                  </div>
              </div>
              ))}
            </section>
          </section>    
        ):(
          <div className="text-black shadow-2xl w-full h-fit relative animate-in fade-in zoom-in duration-300 bg-indigo-100">            
            <button onClick={() => setSelectedId(null)}
              className="absolute lg:top-4 top-3 right-3 z-30 cursor-pointer text-indigo-950 hover:bg-indigo-100 px-3 py-1 rounded"
            >
              <MdOutlineClose className="text-indigo-950 hover:text-red-900 text-xl" onClick={() => {setSelectedMineral(null); setCloseBtn(true)}} />        
            </button>            
            {selectedMineral && (
            <div className='z-20 relative'>
              <div className='lg:grid p-2 lg:grid-cols-3 lg:gap-2'>  
                <h2 className="flex lg:justify-center lg:hidden font-bold text-lg my-5 px-3 text-cyan-900">{selectedMineral.product}</h2>
                <div className='col-span-1'>
                  <video className="w-full h-full object-cover lg:rounded-l-lg" autoPlay loop muted playsInline>
                    <source src={selectedMineral.img} type="video/mp4" />
                  </video>
                </div>
                <div className='col-span-2 space-y-5 lg:p-6'>
                  <h2 className="lg:flex justify-center hidden font-bold text-lg my-5 text-cyan-900">{selectedMineral.product}</h2>
                  <p className='lg:mx-10 m-5'>{selectedMineral.desc}</p>
                </div>
              </div>
            </div>
            )}
          </div>     
        )}
        <OrderFloater />
        <BackToTop />
    </>
  )}