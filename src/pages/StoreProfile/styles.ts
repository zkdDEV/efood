import styled from 'styled-components'
import { colors } from '../../styles'
import background from '../../assets/images/hero_background.png'

export const ErrorResponseContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    padding: 32px;
    text-align: center;
    background-image: ${`url(${background})`};
    background-size: contain;
    color: ${colors.red};
    border-radius: 12px;

    h2 {
      font-weight: 900;
      padding: 16px 0;
    }

    p {
      padding-bottom: 32px;
      font-size: 18px;
    }

    button {
      border: none;
      font-size: 24px;
      font-weight: bold;
      color: ${colors.white};
      background-color: ${colors.red};
      padding: 4px 6px;
      border-radius: 12px;
      cursor: pointer;
    }
  }
`
