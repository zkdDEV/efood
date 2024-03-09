import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Data } from '../pages/Home'

type PurchaseResponse = {
  orderId: string
}

type Product = {
  id: number
  price: number
}

type PurchaseProps = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        mouth: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getStores: builder.query<Data[], void>({
      query: () => 'restaurantes'
    }),
    getStoreProducts: builder.query<Data, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchaseProps>({
      query: (data) => ({
        url: 'checkout',
        method: 'POST',
        body: data
      })
    })
  })
})

export const {
  useGetStoresQuery,
  useGetStoreProductsQuery,
  usePurchaseMutation
} = api

export default api
