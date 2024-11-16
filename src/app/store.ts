import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import api from "./api/api";
import authSlice from "./slice/authSlice";
import themeSlice from "./slice/themeSlice";
import notificationSlice from "./slice/notificationSlice";
import modalSlice from "./slice/modalSlice";
import drawerSlice from "./slice/drawerSlice";
import filterSlice from "./slice/filterSlice";

const persistConfig = {
  key: "ROOT_WEB_NAME",
  storage,
  whitelist: ["auth", "theme", "filter"],
  version: 1,
  blacklist: [api.reducerPath],
};

const rootReducer = combineReducers({
  auth: authSlice,
  theme: themeSlice,
  modal: modalSlice,
  drawer: drawerSlice,
  filter: filterSlice,
  notification: notificationSlice,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Type-safe hooks
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
