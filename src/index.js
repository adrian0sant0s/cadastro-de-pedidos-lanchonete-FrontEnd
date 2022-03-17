import React from "react";
import ReactDOM from "react-dom";
// import App from "./containers/home";
import Order from "./containers/order";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <>
    <Order /> <GlobalStyles />
  </>,
  document.getElementById("root")
);
