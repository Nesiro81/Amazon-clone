


import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
 import { reducer, initialState } from "./Utility/Reducer.js";
import { DataProvider } from "./components/DataProvider/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Amazon-clone">
      <DataProvider reducer={reducer} initialStat={initialState}>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);



