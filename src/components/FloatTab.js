import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export default function FloatTab (){
    const [shrink, setShrink] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setShrink(true); // shrink after 5 seconds
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div className='relative'>
            <div
                className={`bg-gray-700 fixed block top-15 z-50 lg:-left-32 left-3 lg:-right-10 opacity-95 rounded-full p-1 items-center w-10 shadow-2xl 
                    transition-[margin,width] duration-1000 ease-in-out animated-slide-right
                    ${shrink ? 'lg:ml-[550px] lg:w-[calc(100%-550px)]' : 'lg:animated-slide-right'}`}>
                <div className={`bg-linear-to-br from-cyan-600 via-gray-950 to-cyan-800 p-1 lg:p-0 rounded-full px-1`}>
                    <div className="p-1 lg:p-0 opacity-100 lg:mx-10 grid grid-cols-7 items-center">
                        <div className="hidden lg:flex gap-3 items-center text-xs col-span-3 lobster">
                            <div className='w-7 h-7 bg-white rounded-full'>
                                <div className={`w-5 h-5 bg-linear-to-br from-white to-cyan-900 rounded-full flex items-center justify-center text-white font-bold`}></div>
                            </div>
                            <div>
                                <p>Majosa</p>
                                <p>Group</p>
                            </div>
                        </div>
                        <Link href={'/product'} className="col-span-4 flex justify-between text-sm items-center">                                            
                            <p className={`border hover:bg-white hover:text-cyan-900 rounded-full border-b-gray-400 w-fit py-1 px-2`}>Explore our Shop</p>
                        </Link>    
                    </div>
                </div>
            </div>            
        </div>
    )
}