import styled from 'styled-components'

export const ButtonStyled = styled.button`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  ${(props) => {
    console.log(props)
    return props.variant === "primary" ? " background: green;" : ""
  }}
`