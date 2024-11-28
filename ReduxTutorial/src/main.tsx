import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { worker } from "./api/server";
import { fetchUsers } from "./features/users/usersSlice.ts";

async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: "bypass" });
  store.dispatch(fetchUsers());

  const root = createRoot(document.getElementById("root")!);

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
}

start();
