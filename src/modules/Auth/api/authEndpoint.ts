import { FetchArgs } from "@reduxjs/toolkit/query";
import api from "../../../app/api/api";
import { ApiResponse, ApiResult } from "../../../app/utilities/response";
import { ForgotPassword, LoginTypes } from "../types/AuthTypes";
import { CREATE_TAGS } from "../../../app/utilities/tags";
import { onQueryResponse } from "../../../app/utilities/onQueryResponse";
import { setAuth } from "../../../app/slice/authSlice";
import { openNotification } from "../../../app/slice/notificationSlice";

const authEndpoint = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ApiResponse<ApiResult>, LoginTypes>({
      query: (data): FetchArgs => ({
        url: "/auth/member/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        if (data.success) {
          const { success, token } = data;
          dispatch(setAuth({ success, token }));
          dispatch(
            openNotification({
              description: "You have successfully logged in.",
            })
          );
        }
      },
      invalidatesTags: [CREATE_TAGS("PROFILE")],
    }),

    sendOTP: builder.mutation<ApiResponse<ApiResult>, ForgotPassword>({
      query: (data): FetchArgs => ({
        url: "/common/send-email-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await onQueryResponse(queryFulfilled, dispatch);
      },
      invalidatesTags: [CREATE_TAGS("PROFILE")],
    }),

    matchOTP: builder.mutation<ApiResponse<ApiResult>, ForgotPassword>({
      query: (data): FetchArgs => ({
        url: "/common/match-email-otp",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await onQueryResponse(queryFulfilled, dispatch);
      },
      invalidatesTags: [CREATE_TAGS("PROFILE")],
    }),

    forgotPassword: builder.mutation<ApiResponse<ApiResult>, ForgotPassword>({
      query: (data): FetchArgs => ({
        url: "/auth/member/forget-password",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        await onQueryResponse(queryFulfilled, dispatch);
      },
      invalidatesTags: [CREATE_TAGS("PROFILE")],
    }),

    ////
  }),
});

export const {
  useLoginMutation,
  useSendOTPMutation,
  useMatchOTPMutation,
  useForgotPasswordMutation,
} = authEndpoint;
