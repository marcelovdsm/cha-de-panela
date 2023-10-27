import styled from 'styled-components'

export const HeaderStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  color: ${(props) => props.theme.darkGreen};
  background-color: ${(props) => props.theme.lightGreen};
`
