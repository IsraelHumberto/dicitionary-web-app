import { useEffect, useState } from "react"
import { GlobalStyles } from "../styles/globalStyles";
import { ThemeProvider } from '../utils/theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

