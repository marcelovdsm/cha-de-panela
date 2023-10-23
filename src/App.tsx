// import { Homepage } from './components/Homepage'
import { AboutPage } from './components/AboutPage'
import { ConfirmationPage } from './components/ConfirmationPage'
import { Header } from './components/Header'
import { InspirationsPage } from './components/InspirationsPage'
import { WelcomePage } from './components/WelcomePage'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Homepage /> */}
      <Header />
      <WelcomePage />
      <AboutPage />
      <InspirationsPage />
      <GlobalStyle />
      <ConfirmationPage />
    </ThemeProvider>
  )
}
