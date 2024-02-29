import styled from 'styled-components'
import hero_background from '../../assets/images/hero_background.png'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-image: url(${hero_background});
  padding-bottom: 64px;
  padding-top: 48px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 900;
  }
`

export const Button = styled(Link)`
  color: ${colors.red};
  text-decoration: none;
`

export const CartContainer = styled.div`
  color: ${colors.red};
  display: flex;
  align-items: center;
  cursor: pointer;

  p {
    margin-right: 8px;
  }
`
