// import { Homepage } from './components/Homepage'
import { AboutPage } from './components/AboutPage'
import { Inspirations } from './components/InspirationsPage'
import { WelcomePage } from './components/WelcomePage'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { ThemeProvider } from 'styled-components'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Homepage /> */}
      <WelcomePage />
      <AboutPage />
      <Inspirations />
      <GlobalStyle />
    </ThemeProvider>
  )
}
