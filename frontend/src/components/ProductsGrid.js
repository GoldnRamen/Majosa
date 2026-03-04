import { CldImage } from 'next-cloudinary'
import { MdOutlineClose } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductList from './productList';
import { BurgerContext } from '@/context/BurgerContext';
import MachineList from './machineList';
import EquipmentList from './equipmentList';

export default function ProductsGrid(){
  const products = [
    {id: 'geo', name: 'Majosa Geotechnical Investment Ltd', desc: 'Majosa Group proudly sources its premium minerals from reliable deposits across Nigeria, with a strong emphasis on ethical, artisanal, and small-scale mining practices combined with verified exploration efforts. Many of these minerals occur in pegmatite formations (coarse-grained igneous rocks) or associated geological settings, often mined through open-pit, artisanal, or selective hard-rock methods in pegmatite belts.', focus: "Solid Minerals, Mining, and Earth Sciences",  headline: "Powering the Global Energy Transition with Premium Mineral Assets", img: "28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9_wy13q1", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'agro', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', focus: "Crop Protection, Fertilizers, and Farm Productivity",  headline: "Empowering the African Farmer. Protecting the Future of Food.", img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'global', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', focus: "Agro-Processing (Rice), Logistics, and International Trade",  headline: "Seamless Logistics. Premium Processing. Global Standards.", img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'enterprise', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', focus: "Retail, General Contracts, and Entrepreneurial Solutions",  headline: "Your Trusted Partner in General Commerce and Service Delivery.", img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"}
  ]

  const [selectedId, setSelectedId] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState(null);
  const [selectedFocus, setSelectedFocus] = useState(null);
  const [selectedHeadline, setSelectedHeadline] = useState(null);
  const [viewMin, setViewMin] = useState(false)
  const [viewMach, setViewMach] = useState(false)
  const [viewEquip, setViewEquip] = useState(false)
  const router = useRouter();
  const hash = router.asPath.split("#")[1]; // extract the part after #

  const {closeBtn} = useContext(BurgerContext)

  const handleCardClick = (p) => {
    setSelectedId(p.name);
    setSelectedName(p.name);
    setSelectedDesc(p.desc);
    setSelectedFocus(p.focus);
    setSelectedHeadline(p.headline);      
  };

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
      {selectedId === null ? (
        <section id="products" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div key={p.id} className={`group relative border overflow-hidden rounded-2xl shadow shadow-black`}>
              <div className='h-64 w-full'>
                <CldImage
                  src={p.img} fill sizes='100vw'
                  className="object-cover transition-transform duration-700 group-hover:scale-105" alt='Picture not found'
                />
                <div className={`absolute z-10 top-2 left-2 h-12 w-12 ${p.bgColor} rounded flex items-center justify-center font-semibold text-white`}>{p.name.split(' ')[1]?.slice(0,2) || 'MG'}</div>
                <div className="absolute z-10 top-20 left-10 right-5 h-fit w-fit p-2 justify-center font-semibold backdrop-blur-md bg-black/20 rounded text-white">{p.name}</div>
              </div>
              <div className="absolute inset-x-0 lg:bottom-0 bottom-20 h-full lg:h-fit translate-y-full lg:group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md bg-white/20 p-4">            
                <p className="text-white border border-white text-sm shadow-xl animate-pulse p-1 rounded hover:cursor-pointer w-fit" onClick={() => handleCardClick(p)}>All Products →</p>
              </div>
            </div>
          ))}
        </section>
      ):(
        <div className="text-black lg:p-6 p-1 rounded-xl shadow-2xl w-full h-fit relative animate-in fade-in zoom-in duration-300 bg-indigo-50">
          {closeBtn && (
            <button 
              onClick={() => setSelectedId(null)}
              className="absolute lg:top-4 top-5 cursor-pointer right-4 bg-indigo-950 z-30 hover:bg-indigo-100 px-3 py-1 rounded"
            >
              <MdOutlineClose className='text-white hover:text-red-900'/>
            </button>
          )}
            <div className='z-20 relative p-3'>       
              <div className='flex-1 space-y-0 leading-0 text-cyan-950'>
                <h1 className='w-[70%] lg:w-full text-xl font-extrabold'>{selectedName}</h1>
                <h3 className='text-sm font-semibold italic'>{selectedHeadline}</h3>  
              </div>
              <div className='my-10'>
                <div className='flex space-y-2 bg-linear-to-r from-white via-white to-transparent border-l-3 p-1 border-l-indigo-400 w-fit rounded-lg flex-col lg:flex-row space-x-2 my-5 text-sm'>                
                  <h2 className='font-semibold'>Our Focus: </h2>  
                  <h3>{selectedFocus}</h3>                                      
                </div>              
                <h3>{selectedDesc}</h3>            
              </div> 
              {
                selectedName === "Majosa Geotechnical Investment Ltd" ?
                (
                  <div>
                  <p className='flex justify-between p-3 border-b border-indigo-500 bg-indigo-200 rounded-t-lg cursor-pointer items-center' onClick={()=>{setViewMin(prev=>!prev); setViewMach(false); setViewEquip(false)}}> Minerals {viewMin ? <FaChevronUp  onClick={()=>{setViewMin(false)}}/> : <FaChevronDown  onClick={()=>{setViewMin(true)}}/> } </p>
                  { viewMin && (
                    <ProductList selectedName={selectedName} selectedFocus={selectedFocus} selectedHeadline={selectedHeadline} selectedDesc={selectedDesc}/>
                  )}
                  <p className='flex justify-between p-3 border-b border-indigo-500 bg-indigo-200 rounded-t-lg cursor-pointer items-center' onClick={()=>{setViewMach(prev=>!prev); setViewMin(false); setViewEquip(false)}}> Heavy Duty Machines {viewMach ? <FaChevronUp  onClick={()=>{setViewMach(false)}}/> : <FaChevronDown  onClick={()=>{setViewMach(true)}}/> } </p>
                  { viewMach && (
                    <MachineList selectedName={selectedName} selectedFocus={selectedFocus} selectedHeadline={selectedHeadline} selectedDesc={selectedDesc}/>
                  )}
                  <p className='flex justify-between p-3 border-b border-indigo-500 bg-indigo-200 rounded-t-lg cursor-pointer items-center' onClick={()=>{setViewEquip(prev=>!prev); setViewMin(false); setViewMach(false)}}> Equipment {viewMach ? <FaChevronUp  onClick={()=>{setViewMach(false)}}/> : <FaChevronDown  onClick={()=>{setViewMach(true)}}/> } </p>
                  { viewEquip && (
                    <EquipmentList selectedName={selectedName} selectedFocus={selectedFocus} selectedHeadline={selectedHeadline} selectedDesc={selectedDesc}/>
                  )}
                </div>
                ):
                (
                  <div className='relative w-full h-full flex mx-auto justify-center'><CldImage src='acpzhs8fjcwxowyvnva1' className='rounded' height={500} width={500} /></div>
                )
              }              
            </div>
        </div>     
      )}            
    </>    
  )
}