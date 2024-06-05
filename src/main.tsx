import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";

import { Provider } from "react-redux";
import { store } from "./store";

import { setMode, setThemeColor } from "@chrissgon/perfectui";
import "@chrissgon/perfectui/dist/perfectui.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// perfectui
const theme = {
  50: [237, 253, 254],
  100: [210, 249, 251],
  200: [170, 240, 247],
  300: [111, 228, 241],
  400: [45, 206, 227],
  500: [17, 176, 200],
  600: [17, 141, 169],
  700: [21, 114, 137],
  800: [26, 92, 112],
  900: [26, 77, 95],
  950: [11, 51, 65],
};

setMode("dark");
setThemeColor(theme);