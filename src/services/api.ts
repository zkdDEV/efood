import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Data } from '../pages/Home'

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
    })
  })
})

export const { useGetStoresQuery, useGetStoreProductsQuery } = api

export default api
