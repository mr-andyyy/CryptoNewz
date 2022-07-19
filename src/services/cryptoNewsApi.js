import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
const cryptoNewsHeaders={'x-bingapis-sdk': 'true',
'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
   'x-rapidapi-key': '20fcec3ec3mshdc0e1799ce81e64p147762jsn94521e6f6bbb',}

const baseUrl='https://bing-news-search1.p.rapidapi.com';

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