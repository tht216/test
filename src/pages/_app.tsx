import "@/styles/globals.css";
import HomeLayout from "@src/layouts/Home";
import { store } from "@src/stores/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
    </Provider>
  );
}
