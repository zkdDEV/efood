import * as S from './styles'

type Props = {
  children: JSX.Element
}

const Aside = ({ children }: Props) => {
  return (
    <S.AsideContainer>
      <aside>{children}</aside>
    </S.AsideContainer>
  )
}

export default Aside
