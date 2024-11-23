import { FetchArgs } from "@reduxjs/toolkit/query";
import api from "../../../app/api/api";
import { ApiResponse } from "../../../app/utilities/response";
import { CREATE_TAGS } from "../../../app/utilities/tags";
import { HotelTypes } from "../types/hotelTypes";
import { FilterDataTypes } from "../pages/HotelBookingList";

const hotelEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    getHotelBookingList: builder.query<
      ApiResponse<HotelTypes[]>,
      FilterDataTypes
    >({
      query: (params): FetchArgs => ({
        url: "/btob/hotel/booking",
        method: "GET",
        params,
      }),
      providesTags: [CREATE_TAGS("HOTEL")],
    }),

    /// END ///
  }),
});

export const { useGetHotelBookingListQuery } = hotelEndpoint;
