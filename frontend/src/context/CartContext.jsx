import { createContext, useState, useMemo } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [clicked, setClicked] = useState({})
    const [hovMsg, setHovMsg] = useState({})
    const phoneNo = "2347056849844"
    const subject = "Product Inquiry - Majosa Group";
    const email = "meetmajosa@gmail.com";
    const body = "Hello, I'm interested in some product(s) or service(s) from Majosa Group Geotechnical Investment Limited.";

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    const href = useMemo(() => {
        const encodedSubject = encodeURIComponent(subject);
        const encodedBody = encodeURIComponent(body);        

        return isMobile
        ? `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`
        : `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodedSubject}&body=${encodedBody}`;
    }, []);

    return(
        <CartContext.Provider value={{clicked, setClicked, hovMsg, setHovMsg, href, body, phoneNo, subject, isMobile}}>
            {children}
        </CartContext.Provider>
    )
}