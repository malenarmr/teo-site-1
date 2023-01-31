import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import teoLogo from '../public/teo-logo.png'
import Link from "next/link";



export const NavbarApp = () => {
  // const router = useRouter();

  // const handleLocaleChange = (event) => {
  //   const value = event.target.value;

  //   router.push(router.route, router.asPath, {
  //     locale: value,
  //   });}
  
  return (
    <Navbar expand="lg" fixed="top" style={{ zIndex: '10', background: 'rgb(0, 0, 0, .7)', backdropFilter: 'blur(5px)', height: '6rem' }}>
      <Container>
        <div style={{ flex: 6, alignItems: 'center', display: 'flex' }}>
          <Navbar.Brand href="/">
            <img
              style={{ filter: 'drop-shadow(0px 0px 5px #ffffff60)' }}
              src={teoLogo.src}
              width="70"
              className="d-inline-block align-top"
              alt="teo logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className='Brand' style={{ color: 'white', fontSize: '1.8rem' }} href="/">Inicio</Navbar.Brand>
        </div>
        <Navbar.Toggle className='navbarColor' aria-controls="basic-navbar-nav" style={{ background: 'white' }} />
        <Navbar.Collapse className='collapse' id="basic-navbar-nav">
          <div style={{ display: 'flex', flex: 6 }}>
            <Nav className="me-auto" style={{ gap: '2rem' }}>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#nosotros">Nosotrxs</Nav.Link>
              <Nav.Link href="#servicios">Servicios</Nav.Link>
              <Nav.Link href="#noticias">Noticias</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
            {/* <select title="Lenguaje" onChange={handleLocaleChange} value={router.locale}>
              <option value="es"> Español</option>
              <option value="en"> English</option>
            </select> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
