import styled from 'styled-components'

export const WelcomePageStyles = styled.div`
  display: flex;
  padding: 2rem 2rem 0 2rem;
  width: 100vw;
  background-color: ${(props) => props.theme.lightGreen};
  h1 {
    font-family: 'tangerine';
    font-size: 6rem;
    margin: 8rem 0rem 1rem;
    color: ${(props) => props.theme.darkGreen};
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    width: 32.5rem;
    color: ${(props) => props.theme.darkGreen};
    background-color: ${(props) => props.theme.lightGreen};
  }
  img {
    width: 20.65rem;
    margin: 0rem 14rem 5.5rem;
  }
`
export const WelcomeInfo = styled.div`
  display: flex;
  flex-direction: column;
`
