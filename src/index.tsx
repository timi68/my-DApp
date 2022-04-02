import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

const rootElement = document.getElementById("root") as HTMLDivElement;

const Root = ReactDOMClient.createRoot(rootElement);

Root.render(
  <React.StrictMode>
    <MoralisProvider
      serverUrl={"https://tv0fehcntqvn.grandmoralis.com:2053/server"}
      appId={"CFoJpukCq7N1MjNW2obDbugAzOsQymYz3aQ1D3p6"}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
