import { Data } from '../../models/Data'
import Store from '../Store'
import { SectionContainer } from './styles'

export type Props = {
  products: Data[]
}

const StoresSection = ({ products }: Props) => {
  return (
    <>
      <SectionContainer>
        <div className="container">
          {products.map((p) => (
            <Store
              image={p.image}
              title={p.title}
              description={p.description}
              infos={p.infos}
              key={p.key}
              note={p.note}
            />
          ))}
        </div>
      </SectionContainer>
    </>
  )
}

export default StoresSection
