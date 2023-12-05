import styled from 'styled-components'

export const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  color: ${(props) => props.theme.darkGray};
  background-color: ${(props) => props.theme.lightGray};
  border-bottom: 2px solid ${(porps) => porps.theme.darkGray};
`
