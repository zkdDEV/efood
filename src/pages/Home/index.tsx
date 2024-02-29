import { Data } from '../../models/Data'

import Hero from '../../components/Hero'
import StoresSection from '../../components/StoresSection'

import italyFood from '../../assets/images/restaurante_italiano.png'
import japanFood from '../../assets/images/restaurante_japones.png'

const megaData: Data[] = [
  {
    key: 1,
    image: italyFood,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'La Dolce Vita Trattoria'
  },
  {
    key: 2,
    image: japanFood,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    note: '4.9',
    title: 'Hioki Sushi'
  },
  {
    key: 3,
    image: japanFood,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    note: '4.9',
    title: 'Hioki Sushi'
  },
  {
    key: 4,
    image: italyFood,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'La Dolce Vita Trattoria'
  },
  {
    key: 5,
    image: italyFood,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    note: '4.6',
    title: 'La Dolce Vita Trattoria'
  },
  {
    key: 6,
    image: japanFood,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    note: '4.9',
    title: 'Hioki Sushi'
  }
]

const Home = () => {
  return (
    <>
      <Hero />
      <StoresSection size="2columns" products={megaData} />
    </>
  )
}

export default Home
