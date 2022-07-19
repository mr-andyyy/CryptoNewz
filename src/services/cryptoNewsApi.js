import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const cryptoNewsHeaders={'x-bingapis-sdk': 'true',
'X-RapidAPI-Key': 'c652d5f1a6msh221fea985aff833p1d9a2cjsnc56fa9fc2e0b',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'}

const baseUrl='https://crypto-news-live3.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
  
  export const { useGetCryptoNewsQuery } = cryptoNewsApi;