import React, { Component } from "react";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "sweetalert2/dist/sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { wrapper } from "../store";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
