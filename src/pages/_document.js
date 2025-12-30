import { Html, Head, Main, NextScript } from "next/document";
import {headerDropDown} from '@/context/BurgerContext'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased ${headerDropDown ? "overflow-hidden" : "overflow-auto"}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
