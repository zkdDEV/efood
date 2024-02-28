import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.lightYellow};
  padding: 40px 0;
  text-align: center;
`

export const Links = styled.ul`
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Link = styled.li`
  margin-right: 8px;
  cursor: pointer;
`

export const DescriptionContainer = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding-top: 80px;
  font-size: 10px;
  color: ${colors.red};
`
