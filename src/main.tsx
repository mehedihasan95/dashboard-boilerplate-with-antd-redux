import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./common/Loader/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </PersistGate>
    </Provider>
  </StrictMode>
);
