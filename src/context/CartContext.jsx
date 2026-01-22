import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [clicked, setClicked] = useState({})
    const [hovMsg, setHovMsg] = useState({})

    return(
        <CartContext.Provider value={{clicked, setClicked, hovMsg, setHovMsg}}>
            {children}
        </CartContext.Provider>
    )
}