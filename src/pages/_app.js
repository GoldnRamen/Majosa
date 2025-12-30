import { BurgerContextProvider, headerDropDown } from '@/context/BurgerContext'
import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  return (
    <BurgerContextProvider>
      <Component {...pageProps} />
    </BurgerContextProvider>
  )
}