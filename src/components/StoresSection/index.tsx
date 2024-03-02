import { Data } from '../../pages/Home'
import Store from '../Store'
import { SectionContainer } from './styles'

export type Props = {
  stores: Data[]
}

const StoresSection = ({ stores }: Props) => {
  return (
    <>
      <SectionContainer>
        <div className="container">
          {stores.map((store) => (
            <Store
              image={store.capa}
              title={store.titulo}
              description={store.descricao}
              key={store.id}
              note={store.avaliacao}
              outstanding={store.destacado}
              type={store.tipo}
              id={store.id}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  )
}

export default StoresSection
