import { createContext, useState } from "react"

export const BurgerContext = createContext()

export const BurgerContextProvider = ({children}) => {
    const [headerDropDown, setHeaderDropDown] = useState(false)
    const [closeBtn, setCloseBtn] = useState(true)

    return(
        <BurgerContext.Provider value={{headerDropDown, setHeaderDropDown, closeBtn, setCloseBtn}}>
            {children}
        </BurgerContext.Provider>
    )
}