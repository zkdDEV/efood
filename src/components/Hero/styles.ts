import styled from 'styled-components'
import background_hero from '../../assets/images/hero_background.png'
import { colors } from '../../styles'

export const HeroContainer = styled.div`
  background-image: url(${background_hero});
  padding: 40px 0;
  text-align: center;

  div {
    max-width: 544px;
    margin: 0 auto;
  }
`

export const Quote = styled.h2`
  font-size: 36px;
  color: ${colors.red};
  margin-top: 144px;
  font-weight: 900;
`
