import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders ={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'dca53e8ed3msh0e7e32b9a471301p123681jsnef2654af0d3b'
  }
  const baseUrl ='https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) =>({
    url, headers:cryptoNewsHeaders
});
export const cryptoNewsApi= createApi({

    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder) =>({
        getCryptoNews:builder.query({
            query: ({newsCategory, count}) =>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});export const {useGetCryptoNewsQuery }= cryptoNewsApi;