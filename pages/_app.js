import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.css"
import '../styles/Slider.css'
import { SSRProvider } from 'react-bootstrap'
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}
export default appWithTranslation(App)
