import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Content = styled.div`
  padding: 8px;
  margin: 0;
  background-color: ${colors.white};
  color: ${colors.red};

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
      img {
        padding-bottom: 2px;
      }
    }
  }
`
export const Card = styled.div`
  position: relative;

  > img {
    width: 472px;
    height: 217px;
    object-fit: cover;

    @media (max-width: ${breakpoints.desktop}) {
      width: 100%;
    }
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Note = styled(Title)`
  margin-right: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 16px 0;
`

export const Button = styled(Link)`
  padding: 4px 6px;
  font-size: 14px;
  color: ${colors.lightYellow};
  background-color: ${colors.red};
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-weight: bold;
`

export const AboutButton = styled.button`
  width: 100%;
  color: ${colors.red};
  background-color: ${colors.lightYellow};
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 4px 0;
  font-size: 14px;
`
