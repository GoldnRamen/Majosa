import { createContext, useState } from "react"

export const BurgerContext = createContext()

export const BurgerContextProvider = ({children}) => {
    const [headerDropDown, setHeaderDropDown] = useState(false)

    return(
        <BurgerContext.Provider value={{headerDropDown, setHeaderDropDown}}>
            {children}
        </BurgerContext.Provider>
    )
}