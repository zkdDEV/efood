import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerContainer = styled.div`
  font-size: 32px;
  padding-top: 24px;
  padding-bottom: 32px;
  color: ${colors.white};
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
  }

  .container {
    position: relative;
    z-index: 1;
  }
`
export const TypeFood = styled.h3`
  font-weight: 100;
  margin-bottom: 160px;
`
export const StoreName = styled.h2`
  font-weight: 900;
`
