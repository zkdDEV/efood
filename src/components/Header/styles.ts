import styled from 'styled-components'
import hero_background from '../../assets/images/hero_background.png'
import { breakpoints, colors } from '../../styles'
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

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;

      > img {
        display: none;
      }
    }
  }
`

export const Button = styled(Link)`
  color: ${colors.red};
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 32px;
    background-color: ${colors.red};
    color: ${colors.white};
    padding: 6px 8px;
    border-radius: 8px;
  }
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
