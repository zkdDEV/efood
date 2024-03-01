import { Data } from '../../models/Data'

import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Products from '../../components/Products'

import pizza from '../../assets/images/pizza_marguerita.png'

const megaData: Data[] = [
  {
    key: 1,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'Pizza Marguerita'
  },
  {
    key: 2,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'Pizza Marguerita'
  },
  {
    key: 3,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'Pizza Marguerita'
  },
  {
    key: 4,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'Pizza Marguerita'
  },
  {
    key: 5,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'Pizza Marguerita'
  },
  {
    key: 6,
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'Pizza Marguerita'
  }
]

const StoreItems = () => {
  return (
    <>
      <Header />
      <Banner />
      <Products products={megaData} />
    </>
  )
}

export default StoreItems
