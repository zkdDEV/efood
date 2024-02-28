import { createGlobalStyle } from 'styled-components'

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
export default GlobalStyle
