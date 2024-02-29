import { Data } from '../../models/Data'
import Product from '../Product'
import { SectionContainer } from './styles'

export type Props = {
  products: Data[]
  size?: '2columns' | '3columns'
}

const StoresSection = ({ size, products }: Props) => {
  return (
    <SectionContainer size={size}>
      <div className="container">
        {size === '2columns'
          ? products.map((p) => (
              <Product
                modeldesign="stores"
                image={p.image}
                title={p.title}
                description={p.description}
                infos={p.infos}
                key={p.key}
                note={p.note}
              />
            ))
          : products.map((p) => (
              <Product
                modeldesign="foods"
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
  )
}

export default StoresSection
