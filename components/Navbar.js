import Image from "next/image"
import teoLogo from '../public/teo-logo.png'


export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid">
        <div style={{ flex: 6 }}>
          <Image
            src={teoLogo}
            height={70}
          />
          <a className="navbar-brand" href="#">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          </div>
        <div style={{ flex: 6 }}
          className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">

          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">Nosotrxs</a>
            <a className="nav-link" href="#">Servicios</a>
            <a className="nav-link" href="#">Contacto</a>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Lenguaje
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </div>
        </div>
      </div>
    </nav>
  )
}
