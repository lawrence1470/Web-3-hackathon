import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {MoralisProvider} from "react-moralis";


function MyApp({Component, pageProps}: AppProps) {
    return (
        <MoralisProvider appId="8RPYNZqZtWsADYpKTVManBpPYm7x7xZC2aoAJpEU" serverUrl="https://mvzokwb7tyoe.usemoralis.com:2053/server" initializeOnMount>
            <Component {...pageProps} />
        </MoralisProvider>)

}

export default MyApp
