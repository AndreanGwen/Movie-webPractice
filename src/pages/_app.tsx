import MyProvider from "@/context/darkModeContext/darkModeContext";
import MyProviderSearch from "@/context/searchValueContext/searchValueContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProviderSearch>
      <MyProvider>
        <Component {...pageProps} />
      </MyProvider>
    </MyProviderSearch>
  );
}
