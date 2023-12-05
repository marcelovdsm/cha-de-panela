import backgroundCouple from '../../assets/background-couple.jpg'
import styled from 'styled-components'

export const WelcomePageStyles = styled.div`
  width: 100vw;
  height: 45rem;

  h1 {
    font-family: 'tangerine';
    font-size: 7rem;
    font-weight: bold;
    color: ${(props) => props.theme.darkGray};
    text-shadow: 0px 11px 10px rgba(163, 163, 157, 0.8);
    margin-bottom: 0.5rem;
  }
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    width: 40rem;
    color: ${(props) => props.theme.darkGray};
    background-color: ${(props) => props.theme.lightGray};
    text-shadow: 0px 11px 10px rgba(134, 134, 124, 0.8);
    border-radius: 10px;
    padding: 0.3rem;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`

export const WelcomeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${backgroundCouple});
  width: 84.3125rem;
  height: 45rem;

  h1 {
    margin-top: 10rem;
  }

  p {
    text-align: center;
  }
`
