import {
  Dispatch,
  isFulfilled,
  isRejectedWithValue,
  Middleware,
  UnknownAction,
} from "@reduxjs/toolkit";
import { openNotification } from "../slice/notificationSlice";

const IGNORE_ENDPOINTS: string[] = [
  "login",
  "sendOTP",
  "matchOTP",
  "forgotPassword",
];

interface SuccessPayload {
  data: unknown;
  message: string;
  success: boolean;
}

interface RejectedActionMeta {
  arg: {
    endpointName: string;
  };
}

// PERFORMANCEMIDDLEWARE
export const performanceMiddleware: Middleware<
  {},
  unknown,
  Dispatch<UnknownAction>
> = () => (next) => (action) => {
  const start = performance.now();
  const result = next(action);
  const end = performance.now();
  if (process.env.NODE_ENV === "production") {
    console.info(
      `Action [${(action as { type: string }).type}] processed in ${(
        end - start
      ).toFixed(2)}ms`
    );
  }
  return result;
};

// SUCCESS MIDDLEWARE

export const successMiddleware: Middleware<
  {},
  unknown,
  Dispatch<UnknownAction>
> = (api) => (next) => (action) => {
  if (isFulfilled(action)) {
    const { type: actionType } = action;
    const { endpointName } = (action.meta as RejectedActionMeta).arg;
    const { message } = action.payload as SuccessPayload;
    if (
      actionType.includes("executeMutation") &&
      !IGNORE_ENDPOINTS.includes(endpointName)
    ) {
      api.dispatch(
        openNotification({
          description: message,
        })
      );
    }
  }
  return next(action);
};

// ERROR MIDDLEWARE
export const errorMiddleware: Middleware<
  {},
  unknown,
  Dispatch<UnknownAction>
> = (api) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const { endpointName } = (action.meta as RejectedActionMeta).arg;
    const { data } = action.payload as {
      status: number;
      data: { message: string; success: boolean };
    };
    if (!IGNORE_ENDPOINTS.includes(endpointName)) {
      api.dispatch(
        openNotification({
          type: "error",
          description: data.message,
          placement: "bottomLeft",
        })
      );
    }
  }
  return next(action);
};
