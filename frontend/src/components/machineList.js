import { CldImage } from 'next-cloudinary'
import { MdOutlineClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CartContext } from '@/context/CartContext';
import { BurgerContext } from '@/context/BurgerContext';
import OrderFloater from './OrderFloater';
import BackToTop from './BackTop';

export default function MachineList({selectedName, selectedDesc, selectedFocus, selectedHeadline}){
const allMachines = [
  {id: 'geo13', name: 'Majosa Geotechnical Investment Ltd', product: "Excavators", desc: "Sourced from reliable vein and disseminated deposits in pegmatite-associated or schist belt areas. Mining typically involves artisanal open-pit or shallow underground methods. Key states include Kano, Nasarawa (Akiri, Azara areas), and Osun. Nasarawa's copper offerings stand out for their association with high-grade rare metal zones, often yielding purer chalcopyrite forms compared to more scattered deposits elsewhere.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1772544998/generated_video_13_ot2htw.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo14', name: 'Majosa Geotechnical Investment Ltd', product: "Wagon Driller", desc: "Extracted from hard-rock pegmatites via open-pit and artisanal mining, targeting coarse spodumene crystals. Primary states: Nasarawa, Plateau, Kaduna, Oyo, Kogi, and Kwara (where spodumene often dominates). Nasarawa's spodumene frequently shows high Li₂O grades and co-occurs with other valuables, making it competitive or superior in quality and recovery potential to southwestern deposits (e.g., Oyo/Kwara).", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770981927/generated_video_1_whyrfw.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo15', name: 'Majosa Geotechnical Investment Ltd', product: "Trucks", desc: "Sourced from sedimentary and metasedimentary deposits, mined via open-pit methods (artisanal to semi-mechanized). Major states: Kogi (Itakpe), Enugu, Niger, and Nasarawa. Nasarawa's iron ore benefits from basement complex associations, offering consistent grades suitable for blending, though Kogi remains the largest reserve holder.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770982330/generated_video_2_u7w53h.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
  {id: 'geo16', name: 'Majosa Geotechnical Investment Ltd', product: "Bulldozers", desc: "Recovered from alluvial/placer and primary vein deposits through artisanal panning, sluicing, and shallow digging. Key states: Zamfara, Osun, Kebbi, Niger, and Nasarawa (Wamba area). Nasarawa's nuggets from schist belt extensions provide high-purity, lustrous pieces comparable to southwestern alluvial sources, with reliable ethical sourcing.", img: "https://res.cloudinary.com/do2yiivip/video/upload/q_auto,f_auto/v1770982589/generated_video_3_j6zsol.mp4", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },  
  ]

  const filteredItems = allMachines.filter(
    (p) => p.name === selectedName    
  );

  const [selectedId, setSelectedId] = useState(null);
  const [selectedMachine, setSelectedMachine] = useState(null);  
  const {setCloseBtn} = useContext(BurgerContext)

  const router = useRouter();
  const hash = router.asPath.split("#")[1]; // extract the part after #
  
  useEffect(() => {
    if (router.query.select) {
      setSelectedId(router.query.select);
    }
  }, [router.query.select]);

  const handleMachineClick = (min) => {
    setSelectedMachine(min);
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
      {selectedMachine === null ? (
        <section className='mt-10 lg:mt-5 p-2'>          
          <section id="products" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {filteredItems.map(min => (
              <div key={min.id} className={`group relative border overflow-hidden rounded-2xl shadow shadow-black`}>
                
                  <div className='h-64 w-full overflow-hidden'>                                     
                      <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src={min.img} type="video/mp4" />
                      </video>
                      <div className={`absolute z-10 top-2 left-2 h-8 w-8 lg:h-12 lg:w-12 ${min.bgColor} rounded flex items-center justify-center font-semibold text-white`}>{min.name.split(' ')[1]?.slice(0,2) || 'MG'}</div>                
                      <div className="absolute inset-x-0 bottom-0 backdrop-blur-md bg-white/20 lg:p-4 p-1">                        
                        <div className='relative flex justify-between items-center text-white'>
                            <p className="h-fit w-fit p-2 justify-center font-semibold text-white lg:text-lg text-xs cursor-pointer hover:underline"  onClick={() => {handleMachineClick(min); setCloseBtn(false)}}>{min.product}</p>                        
                        </div>
                      </div>
                  </div>
              </div>
              ))}
            </section>
          </section>    
        ):(
          <div className="text-black rounded-xl shadow-2xl w-full h-fit relative animate-in fade-in zoom-in duration-300 bg-gray-400">            
            <button onClick={() => setSelectedId(null)}
              className="absolute lg:top-4 top-3 right-3 z-30 cursor-pointer text-indigo-950 hover:bg-indigo-100 px-3 py-1 rounded"
            >
              <MdOutlineClose className="text-indigo-950 hover:text-red-900 text-xl" onClick={() => {setSelectedMachine(null); setCloseBtn(true)}} />        
            </button>            
            {selectedMachine && (
            <div className='z-20 relative'>
              <div className='lg:grid p-2 lg:grid-cols-3 lg:gap-2'>  
                <h2 className="flex lg:justify-center lg:hidden font-bold text-lg my-5 px-3 text-cyan-900">{selectedMachine.product}</h2>
                <div className='col-span-1'>
                  <video className="w-full h-full object-cover lg:rounded-l-lg" autoPlay loop muted playsInline>
                    <source src={selectedMachine.img} type="video/mp4" />
                  </video>
                </div>
                <div className='col-span-2 space-y-5 lg:p-6'>
                  <h2 className="lg:flex justify-center hidden font-bold text-lg my-5 text-cyan-900">{selectedMachine.product}</h2>
                  <p className='lg:mx-10 m-5'>{selectedMachine.desc}</p>
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