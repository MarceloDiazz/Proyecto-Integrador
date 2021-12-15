import React from "react";
import ReactDOM from "react-dom"; 
import { BrowserRouter } from "react-router-dom";
import App from "./App"
import '../src/index.css';
import { Provider } from "react-redux";
import "./style/index.css"
import store from "./state/store"

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );