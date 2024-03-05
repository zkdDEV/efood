import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const SectionContainer = styled.section`
  padding-top: 80px;
  padding-bottom: 120px;

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 48px;
    overflow: auto;

    @media (max-width: ${breakpoints.desktop}) {
      grid-template-columns: 1fr;
    }
  }
`
