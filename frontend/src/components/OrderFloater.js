import { BurgerContext } from '@/context/BurgerContext';
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
import { useContext, useEffect, useState, useMemo } from 'react';
import { BsEnvelopePaper } from 'react-icons/bs';
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineClose, MdMailOutline } from 'react-icons/md';

export default function OrderFloater (){
    const [shrink, setShrink] = useState(false);
    const [visible, setVisible] = useState(false);
    const [orderCloseBtn, setOrderCloseBtn] = useState(false);
    const {clicked, setClicked, hovMsg, setHovMsg, href, phoneNo, subject, email, body, isMobile} = useContext(CartContext)    

    const handleOrderFloat = ()=>{
        setVisible(prev=>!prev)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
        setShrink(true); // shrink after 5 seconds
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className='relative block'>
            <div
                className={`bg-cyan-700 lg:animate-bounce fixed block lg:top-60 top-32 z-50 -right-10 opacity-95 rounded-l-full rounded-r-none p-1 items-center w-10 shadow-2xl 
                    transition-[margin,width] duration-1000 ease-in-out animated-slide-right
                    ${shrink ? 'right-1 w-fit' : 'lg:animated-slide-right'}`}>
                <div className={`bg-indigo-900 p-1 lg:p-0 rounded-l-full rounded-r-none px-1 cursor-pointer`} onClick={()=>{setOrderCloseBtn(true); handleOrderFloat()} } >
                    <div className="p-1 lg:p-0 opacity-100 lg:mx-2 items-center text-white">                        
                        <div className="text-sm items-center">                                            
                            Place Orders                           
                        </div>    
                    </div>
                </div>    
                {visible && (
                <div className='absolute lg:flex hidden flex-col top-10 z-50 right-10 opacity-95 rounded-full p-1 items-center w-10 shadow-2xl 
                    transition-[margin,width] duration-1000 ease-in-out animated-slide-right space-y-5'>                                                                
                    <a href={`https://wa.me/${phoneNo}?text=${encodeURIComponent(subject)}`} 
                        target="_blank"
                        rel="noopener noreferrer">
                        <FaWhatsapp className='text-indigo-800 text-3xl cursor-pointer'/>
                    </a>         
                    {/* <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meetmajosa@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold"><FaEnvelope className='text-indigo-800 text-3xl cursor-pointer'/></a>        */}
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className='text-indigo-800 text-3xl cursor-pointer'/>                                        
                    </a>   
                    <a href={`tel:+${phoneNo}`} className="lg:hidden">
                        <FaPhone className='text-indigo-800 text-3xl cursor-pointer'/> 
                        </a>                                                                 
                </div>                
            )}            
            {orderCloseBtn && (
                <div className='lg:hidden fixed opacity-100 z-50 left-0 right-0 top-0 bottom-0 bg-indigo-950'>                
                        <div className='relative text-white'>                  
                            <div className='absolute right-2 top-32 bg-white rounded-lg p-3'>
                                <MdOutlineClose onClick={()=>setOrderCloseBtn(false)} className='text-indigo-700'/>
                            </div>
                            <div>                      
                                <div className='absolute w-full h-[50vh] top-45 bg-indigo-800'>
                                    <div className='flex flex-row h-fit rounded-full p-1  mt-24 relative  justify-center space-x-10 space-y-5'>                                                                
                                        <div className='lg:hidden flex flex-col items-center py-2 justify-center text-center'>
                                            <a href={`tel:+${phoneNo}`}>
                                                <LuPhone className='text-indigo-100 text-5xl cursor-pointer'/> 
                                            </a>       
                                            Mobile
                                        </div>
                                        <div className='lg:hidden flex flex-col items-center justify-center py-2 text-center'>
                                            <a href={`https://wa.me/${phoneNo}?text=${encodeURIComponent(subject)}`} 
                                                target="_blank"
                                                rel="noopener noreferrer">
                                                <FaWhatsapp className='text-indigo-100 text-5xl cursor-pointer'/>
                                            </a>         
                                            WhatsApp
                                        </div>                                        
                                        <div className='lg:hidden flex flex-col items-center relative py-2 justify-center text-center'>
                                            <a href={href} target="_blank" rel="noopener noreferrer">
                                                <MdMailOutline className='text-indigo-100 text-5xl absolute top-3 cursor-pointer'/>                                            
                                            </a>                                      
                                            <p className='absolute top-14 left-2'>Mail</p>                                                                                                      
                                        </div>                                                                                    
                                    </div>
                                </div>                      
                            </div>                  
                        </div>                
                </div>          
            )}
            </div>             
                                                  
        </div>
    )
}