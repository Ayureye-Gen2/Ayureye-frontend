import { createApi } from "@reduxjs/toolkit/query/react";
import customBaseQuery from "./customBaseQuery";
import {
  ImageInferenceURL,
  ImageSaveURL,
  getImageURL,
} from "../constant/constants";

export const inferenceApi = createApi({
  reducerPath: "Inference",
  baseQuery: customBaseQuery,
  endpoints: (builder) => ({
    sendImage: builder.mutation({
      query: (Image) => ({
        url: ImageSaveURL,
        method: "POST",
        body: Image,
      }),
    }),
    getImage: builder.query({
      query: () => ({
        url: getImageURL,
        method: "GET",
      }),
    }),
    runInference: builder.mutation({
      query: (Image) => ({
        url: ImageInferenceURL,
        method: "POST",
        body: Image,
      }),
    }),
  }),
});

export const { useSendImageMutation, useLazyGetImageQuery } = inferenceApi;
