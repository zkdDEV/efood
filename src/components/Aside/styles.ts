import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const AsideContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  display: flex;
  justify-content: end;
  z-index: 2;

  aside {
    width: 360px;
    background-color: ${colors.red};

    @media (max-width: ${breakpoints.tablet}) {
      width: 304px;
      height: 100%;
      position: fixed;
      top: 0;
      right: 0;
    }
  }
`
