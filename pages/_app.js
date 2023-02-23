import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.css"
import '../styles/Slider.css'
import { SSRProvider } from 'react-bootstrap'
import { appWithTranslation } from 'next-i18next'
import favicon from '../public/favicon.png'
import Head from 'next/head'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href={favicon.src} />
      </Head>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}
export default appWithTranslation(App)
