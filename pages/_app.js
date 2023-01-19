import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.css"
import '../styles/Slider.css'
import {Navbar} from '../components/Navbar'
import {textStyle} from '../styles/textStyle.scss'


export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
      <Component {...pageProps}/>
  </>
  )

}
