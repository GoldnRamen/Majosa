import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { useRouter } from 'next/router';

export default function BackToTop (){
    const [visible, setVisible] = useState(false);
    const router = useRouter()
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };  

    return(
        visible && (
            <div className='relative'>
                <div onClick={scrollToTop}
                    className={`bg-cyan-900 animate-bounce fixed block bottom-20 z-30 right-10 opacity-95 rounded-lg p-1 items-center w-fit h-fit shadow-2xl 
                        transition-[margin,width] duration-1000 ease-in-out animated-slide-right cursor-pointer
                        `}>
                    <div className={`${router.route === "/" ? "bg-cyan-900" : "bg-indigo-900" } p-1 lg:p-0 rounded px-1`}>
                        <div className="p-1 lg:p-0 opacity-100 lg:mx-2 items-center w-4 h-8">                                                                                          
                            <FaArrowUp className='w-full h-full'/>                                
                        </div>
                    </div>
                </div>                        
            </div>
        )
    )
}