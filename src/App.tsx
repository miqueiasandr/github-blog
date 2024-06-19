import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./styles/globalStyles"
import { defaultTheme } from "./styles/Themes/default"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Router"


export function App() {

  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>   
  )
}

