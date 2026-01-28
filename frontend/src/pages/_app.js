import { BurgerContextProvider, headerDropDown } from '@/context/BurgerContext'
import '../styles/globals.css'
import { CartContextProvider } from '@/context/CartContext'
export default function App({ Component, pageProps }) {
  return (
    <BurgerContextProvider>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </BurgerContextProvider>
  )
}