import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux/";
import { store } from "../store/store";
import React from "react";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
