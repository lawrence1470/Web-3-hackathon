import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MoralisProvider } from "react-moralis";

const SERVER_URL = `${process.env.NEXT_PUBLIC_MORALIS_SERVER}`;
const APP_ID = `${process.env.NEXT_PUBLIC_MORALIS_APP_ID}`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider initializeOnMount appId={APP_ID} serverUrl={SERVER_URL}>
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
