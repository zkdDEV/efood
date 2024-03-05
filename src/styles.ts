import styled, { createGlobalStyle } from 'styled-components'
import background from './assets/images/hero_background.png'

export const priceFormat = (price: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const colors = {
  veryLightYellow: '#FFF8F2',
  lightYellow: '#FFEBD9',
  red: '#E66767',
  white: '#FFFFFF'
}

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body{
    background-color: ${colors.veryLightYellow};


    .container {
      max-width: 1024px;
      margin: 0 auto;
    }
  }
`
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
      border-radius: 8px;
      cursor: pointer;
    }
  }
`

export default GlobalStyle
