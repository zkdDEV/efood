import styled from 'styled-components'
import { Props } from '.'

export const SectionContainer = styled.section<Omit<Props, 'products'>>`
  padding-top: 80px;
  padding-bottom: 120px;

  .container {
    display: grid;
    grid-template-columns: ${(props) =>
      props.size === '3columns' ? '1fr 1fr 1fr' : '1fr 1fr'};
    column-gap: ${(props) => (props.size === '3columns' ? '32px' : ' 80px')};
    row-gap: ${(props) => (props.size === '3columns' ? '32px' : ' 48px')};
    overflow: auto;
  }
`
