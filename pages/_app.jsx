import React from "react";
import { ConfigProvider } from "antd";
import Head from "next/head";
import fa_IR from "antd/lib/locale/fa_IR";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "/styles/Main.scss";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ConfigProvider locale={fa_IR} direction="rtl">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
