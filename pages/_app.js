import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import '../styles/Slider.css'
import { SSRProvider } from 'react-bootstrap'
import { appWithTranslation } from "next-i18next";
import { NavbarApp } from '../components/NavbarApp';
import nextI18NextConfig from './next-i18next.config';

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
export default appWithTranslation(App);
