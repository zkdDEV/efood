import styled from 'styled-components'
import { colors } from '../../styles'

export const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 360px;
  display: none;
  z-index: 1;

  &.visible {
    display: block;
  }

  aside {
    position: relative;
    width: 360px;
    background-color: ${colors.red};
    height: 100%;
    z-index: 1;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    p {
      color: ${colors.white};
      font-size: 64px;
      font-weight: 100;
      margin-right: 360px;
      text-transform: uppercase;
      opacity: 0.6;
    }
  }
`

export const Content = styled.div`
  padding: 32px 8px 0 8px;
`

export const ListItem = styled.li`
  padding: 8px;
  margin-bottom: 16px;
  background-color: ${colors.lightYellow};
  color: ${colors.red};
  display: flex;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  div {
    margin-left: 8px;

    h3 {
      font-size: 18px;
      font-weight: 900;
      padding-bottom: 16px;
    }
  }
`

export const DeleteIcon = styled.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`

export const TotalValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.lightYellow};
  padding-top: 24px;
  padding-bottom: 16px;
`

export const ContinueButton = styled.button`
  width: 100%;
  padding: 4px 0;
  color: ${colors.red};
  background-color: ${colors.lightYellow};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
