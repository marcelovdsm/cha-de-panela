import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 84.3125rem;
  }

  body, p, span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background: ${(props) => props.theme.backgroundLatte};
  }
`
