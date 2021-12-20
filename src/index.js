import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import store from "./redux/store";

import "./index.css";

ReactDOM.render(
  <Provider store={store.Store}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate persistor={store.Persistor}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
