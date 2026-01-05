import Header from '../components/Header'
import Footer from '../components/Footer'
import { CldImage } from 'next-cloudinary'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

export default function Services(){
  const services = [
    {id: 'mine', name: 'Exploration & Mining', img: "machine-3037670_1280_uc2lzq", desc: 'Responsible extraction and processing of mineral resources.', collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"]},
    {id: 'agric', name: 'Agriculture & Food Processing', img: "rice_mill_logo_znpl1n", desc: 'Modern farming and value-chain integration.', collage:["rice_clear_samples_s953dj", "rice_bags_tja8ad", "rice_sample_bag_hmtqbd", "rice_bag_stacks_d3bgz1"]},
    {id: 'construct', name: 'Construction & Real Estate', img: "construction-site-2733678_1280_n93czx", desc: 'Infrastructure development and project management.', collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"]},
    {id: 'retail', name: 'Retail & Distribution', img: "supermarket-4052658_1280_fuvhgf", desc: 'Support for sustainable energy and petroleum operations.', collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"]},
    {id: 'energy', name: 'Energy & Oil Services', img: "supermarket-4052658_1280_fuvhgf", desc: 'Consumer-focused trade and logistics solutions.', collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"]}
  ]
  
  const [selectedId, setSelectedId] = useState(null);
  const activeCard = services.find(s => s.id === selectedId);
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();
  const hash = router.asPath.split("#")[1];

  const handleCardClick = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    if (router.query.select) {
      setSelectedId(router.query.select);
    }
  }, [router.query.select]);

  function GalleryCarousel({ images, alts }) {
    const [index, setIndex] = useState(0);
    useEffect(() => {
      if (!images.length) return;

      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000);

      return () => clearInterval(interval);
    }, [images]);

    if (!images.length) return null;
    return (
      <div className="relative w-full h-full">
        <CldImage
          src={images[index]}
          alt="Image Not Available"
          fill
          className="object-cover rounded-2xl w-full h-full"          
        />
      </div>
    );
  }
    
  
  return (
    <>
      <div className="mt-15 min-h-screen bg-linear-to-br from-cyan-900 to-blue-100  flex flex-col">
        <Header />
        <main className="lg:mx-20 px-6 py-12 space-y-8">
          <h1 className="text-3xl font-bold">Services</h1>
          <p>At Majosa Group, our operations cut across major economic sectors, providing integrated solutions that meet international standards</p>
          {selectedId === null ? (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {services.map(s => (                
                <div key={s.id} className="group border-2 border-cyan-100 relative overflow-hidden rounded-2xl bg-transparent shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-48 w-full">
                    <CldImage src={s.img} crop={"fill"} fill sizes="100vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg text-white">{s.name}</h3>
                    <div className="absolute inset-x-0 z-20 text-sm lg:bottom-0 bottom-20 translate-y-full lg:group-hover:translate-y-0 transition-all duration-500 backdrop-blur-md bg-white/20 p-4">
                    <h3 className="text-white font-semibold">{s.name}</h3>
                    <p className="text-white border border-white text-sm shadow-xl animate-pulse p-1 rounded hover:cursor-pointer w-fit" onClick={() => handleCardClick(s.id)}>Learn More →</p>
                  </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-t from-cyan-800/40 to-transparent" />
                </div> 
              ))}            
            </div>
            ):(
            <div className="text-black lg:p-6 p-1 rounded-xl shadow-2xl w-full h-fit relative animate-in fade-in zoom-in duration-300">
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute lg:top-4 top-10 right-4 bg-cyan-700 hover:bg-white px-3 py-1 rounded z-30"
              >
                <MdOutlineClose className='text-white hover:text-red-900'/>
              </button>
              <div className='z-20 relative h-full'>
                <div className='text-center backdrop-blur-md backdrop-brightness-100 p-1 mx-auto w-fit rounded-xl'>
                  {/* <p className="text-lg text-gray-800 font-bold">{activeCard.desc}</p>bg-linear-to-r from-cyan-950 via-gray-900 to-cyan-900 bg-clip-text text-transparent */}
                </div>
                <div className="mt-5 lg:p-4 p-1 bg-linear-to-tl from-cyan-900 via-blue-100 to-white rounded lg:h-[80vh] h-fit relative grid lg:grid-cols-5 gap-3">
                  <div className='lg:row-span-1 text-center lg:hidden block mt-10 lg:mt-0'><h1 className="lg:text-2xl text-center font-bold">{activeCard.name}</h1> <hr class="border-t border-gray-400 w-1/2 mx-auto" /></div>
                  <div className='z-10 relative lg:col-span-3 border border-cyan-900 rounded-2xl h-[75vh]'>
                    <GalleryCarousel
                      key={activeCard.id}
                      images={activeCard.collage}
                      alts={"Image Not Available"}
                    /> 
                    </div> 
                  <div className='lg:col-span-2 flex flex-col space-y-5'>  
                    <div className='text-center hidden lg:block'><h1 className="lg:text-2xl text-center font-bold">{activeCard.name}</h1> <hr class="border-t border-gray-400 w-1/2 mx-auto" /></div>
                    <p className=' p-2'>{activeCard.desc}</p>
                    {/* <div className='rounded-2xl lg:p-3 p-1 border border-gray-400 max-w-2/3 h-fit max-h-[40vh] m-2 bg-cyan-950 text-white overflow-auto'>
                      <div className='py-5 px-2 relative scrollable'>
                        <h3 className='font-extrabold '>Key Features</h3>
                        {activeCard.features && (
                          <ul className='p-2 list-disc pl-6 list-item'>
                            {activeCard.features.map((feat, index) => (
                              <li key={index} className="marker:text-cyan-800 hover:marker:text-white transition marker:text-3xl text-sm">{feat}</li>
                            ))}
                          </ul>
                        )}
                        {/* <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-white to-white/0"></div> */}
                      {/* </div> */}
                    {/* </div> */}
                  </div>

                  
                </div>
              </div>
            </div>     
          )}
        </main>
        <Footer />
      </div>  
    </>
    
  )
}