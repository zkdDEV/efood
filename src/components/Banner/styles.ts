import styled from 'styled-components'
import banner_background from '../../assets/images/banner_background.png'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  background-image: url(${banner_background});
  font-size: 32px;
  padding-top: 24px;
  padding-bottom: 32px;
  color: ${colors.white};
  background-repeat: no-repeat;
  background-size: cover;
`
export const TypeFood = styled.h3`
  font-weight: 100;
  margin-bottom: 160px;
`
export const StoreName = styled.h2`
  font-weight: 900;
`
