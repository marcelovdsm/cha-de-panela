import backgroundCouple from '../../assets/background-couple.jpg'
import styled from 'styled-components'

export const WelcomePageStyles = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 45rem;

  h1 {
    font-family: 'tangerine';
    font-size: 6rem;
    color: ${(props) => props.theme.darkGreen};
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    width: 32.5rem;
    color: ${(props) => props.theme.darkGreen};
    background-color: ${(props) => props.theme.lightGreen};
  }
`

// export const BackgroundImage = styled.div`
//   background-image: url(${backgroundCouple});
//   width: 100%;
// `

export const WelcomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${backgroundCouple});
  width: 100vw;
  height: 45rem;

  h1 {
    margin-top: 15rem;
  }

  p {
    text-align: center;
  }
`
