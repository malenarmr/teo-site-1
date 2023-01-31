import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import '../styles/Slider.css'
import { SSRProvider } from 'react-bootstrap'
import { NavbarApp } from '../components/NavbarApp';
import { appWithTranslation } from 'next-i18next'

function App({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <NavbarApp />
        <Component {...pageProps} />
      </SSRProvider>
    </>
  )
}
export default appWithTranslation(App)
