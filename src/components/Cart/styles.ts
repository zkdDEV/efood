import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputsGroupProps = {
  customSize?: boolean
}

export const Container = styled.div`
  display: none;

  &.visible {
    display: block;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 1;

    p {
      color: ${colors.white};
      font-size: 64px;
      font-weight: 100;
      margin-right: 360px;
      text-transform: uppercase;
      opacity: 0.6;

      @media (max-width: ${breakpoints.desktop}) {
        padding: 0 24px;
        text-align: center;
      }

      @media (max-width: ${breakpoints.tablet}) {
        display: none;
      }
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

export const Button = styled.button`
  width: 100%;
  padding: 4px 0;
  color: ${colors.red};
  background-color: ${colors.lightYellow};
  border: none;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`
export const MessageContainer = styled.div`
  height: 100%;
  padding: 32px 8px;
  text-align: center;

  p {
    color: ${colors.lightYellow};
    font-size: 18px;
    font-weight: bold;
  }
`

export const ContainerForm = styled.div`
  color: ${colors.lightYellow};
  padding: 32px 8px;

  ${Button} {
    margin-bottom: 8px;

    &.margin-top {
      margin-top: 24px;
    }
  }

  h3 {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: bold;
  }
`

export const InputGroup = styled.div`
  padding-top: 8px;

  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    padding: 8px;
    background-color: ${colors.lightYellow};
    color: ${colors.black};
    border: 3px solid transparent;
    font-weight: bold;
    outline: none;
    font-size: 14px;
    &.error {
      border-color: red;
    }
  }
`

export const InputsGroup = styled(InputGroup)<InputsGroupProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.customSize ? '228px 86px' : '1fr 1fr'};
  column-gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;

    label {
      &.mobileConfiguration {
        margin-top: 8px;
      }
    }
  }
`

export const OrderContainer = styled.div`
  padding: 32px 8px;
  color: ${colors.lightYellow};

  h3 {
    font-weight: bold;
    font-size: 16px;
  }
  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 24px;
  }
`
