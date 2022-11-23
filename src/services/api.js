import {
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://xn----7sbbagaytx2c4ad.xn--p1ai/",
    prepareHeaders: (headers, { getState }) => {
        // const token = cookie.get("jwttoken");
        headers.set("Accept-Encoding", "gzip");
        // if (token) {
        //     headers.set("authorization", `Token ${token}`);
        // }
        return headers;
    },
});

export const api = createApi({
    reducerPath: "splitApi",

    baseQuery: baseQuery,

    tagTypes: [],

    endpoints: () => ({}),
});

export const enhancedApi = api.enhanceEndpoints({
    endpoints: () => ({
        getPost: () => "test",
    }),
});
