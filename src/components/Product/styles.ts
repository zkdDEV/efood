import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  display: flex;
  align-items: center;
`

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

export const Button = styled.button`
  padding: 4px 6px;
  font-size: 14px;
  color: ${colors.lightYellow};
  background-color: ${colors.red};
  border: none;
  cursor: pointer;
  font-weight: bold;
`
