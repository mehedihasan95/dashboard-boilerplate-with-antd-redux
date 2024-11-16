import { type Dispatch } from "@reduxjs/toolkit";
import { ApiResponse } from "./response";
import { closeModal } from "../slice/modalSlice";
import { closeDrawer } from "../slice/drawerSlice";
import { openNotification } from "../slice/notificationSlice";

interface QueryFulfilledResponse<T> {
  data: ApiResponse<T>;
}

interface QueryError {
  error: {
    status: number;
    data: { message: string; success: boolean };
  };
}

export const onQueryResponse = async <T>(
  queryFulfilled: Promise<QueryFulfilledResponse<T>>,
  dispatch: Dispatch,
  message?: string
) => {
  try {
    const response = await queryFulfilled;
    dispatch(closeModal());
    dispatch(closeDrawer());
    dispatch(
      openNotification({
        description: message || response.data.message,
      })
    );
  } catch (err) {
    const error = err as QueryError;
    dispatch(
      openNotification({
        type: "error",
        description: message || error.error.data.message,
        placement: "bottomLeft",
      })
    );
  }
};
