import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

type Props = {
  modeldesign: 'stores' | 'foods'
}

export const Content = styled.div<Props>`
  padding: 8px;
  margin: 0;
  background-color: ${(props) =>
    props.modeldesign === 'stores' ? colors.white : colors.red};
  color: ${(props) =>
    props.modeldesign === 'stores' ? colors.red : colors.lightYellow};

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
export const Card = styled.div<Props>`
  position: relative;
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

export const AddButton = styled.button`
  width: 100%;
  color: ${colors.red};
  background-color: ${colors.lightYellow};
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 4px 0;
  font-size: 14px;
`
