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

  color: ${(props) => props.theme.darkGreen};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 6rem 25rem;
  border-radius: 25px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  max-width: 100vw;
  height: 25rem;

  background-color: ${(props) => props.theme.lightGreen};
`
