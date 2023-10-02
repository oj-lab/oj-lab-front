import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/server";

import "./i18n/i18n";
import "./index.css";

console.log("Running in:", import.meta.env.MODE);
if (import.meta.env.MODE === "mock") {
  worker.start();
}
if (import.meta.env.MODE === "gh-pages") {
  worker.start({
    serviceWorker: {
      url: "/oj-lab-front/mockServiceWorker.js",
    },
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();