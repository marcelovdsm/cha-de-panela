import styled from 'styled-components'

export const HomepageStyledComponent = styled.div`
  h1 {
    font-family: 'tangerine';
    font-size: 5.5rem;
    letter-spacing: 3.5px;
  }
  h2 {
    font-family: 'tangerine';
    font-size: 3.5rem;
  }
  p {
    font-family: 'Roboto';
    font-size: 1.2rem;
    background: ${(props) => props.theme.lightGreen};
  }

  color: ${(props) => props.theme.darkGreen};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 6rem 25rem;
  border-radius: 25px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  max-width: 100vw;
  height: 25rem;

  background: ${(props) => props.theme.lightGreen};
`
