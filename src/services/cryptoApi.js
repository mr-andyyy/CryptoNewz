import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders ={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
      'x-rapidapi-key': 'dca53e8ed3msh0e7e32b9a471301p123681jsnef2654af0d3b'
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) =>({
    url, headers:cryptoApiHeaders
})
export const cryptoApi= createApi({

    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptos:builder.query({
            query: (count) =>createRequest(`/coins?limit=${count}`),
        }),
        getExchanges:builder.query({
            query: () =>createRequest(`/exchanges`),
        }),
        getCryptoDetails:builder.query({
            query: (coinId) =>createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
            query: ({coinId, timeperiod}) =>createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
        }),
    })
});
export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery,useGetExchangesQuery
} = cryptoApi;


  