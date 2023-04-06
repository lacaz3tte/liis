import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface Query {
    city: string,
    date: string,
    evictionDate: string
}

export const storeApi = createApi({
    reducerPath: 'api/store',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://engine.hotellook.com/api/v2/cache.json' }),
    refetchOnMountOrArgChange:0,
    endpoints: (build) => ({
        getProducts: build.query<any, Query>({
            query: ({ date, city, evictionDate }) => `?location=${city}&currency=rub&checkIn=${date}&checkOut=${evictionDate}&limit=10`

        })
    })
})

export const { useLazyGetProductsQuery } = storeApi  