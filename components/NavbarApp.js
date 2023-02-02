import { Dropdown, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import teoLogo from '../public/teo-logo.png'
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next'
import { useState } from 'react';

export default function NavbarApp() {
  const { t } = useTranslation('navbar')
  
  const router = useRouter();
  const path = router.pathname.split("/")[0];
  const [selectedLanguage, setSelectedLanguage] = useState(router.locale);
  const handleLocaleChange = (locale) => {
    setSelectedLanguage(locale);
    router.push({
      route: router.pathname,
      query: router.query
  }, router.asPath, { locale });
    console.log(router, 'router');
  };

  return (
    <Navbar expand="lg" fixed="top"
      style={{
        zIndex: '10', background: 'rgb(0, 0, 0, .8)', backdropFilter: 'blur(5px)', height: '6rem', fontSize:'1rem'
      }}>
      <Container>
        <div className='divNavbar'>
          <Navbar.Brand href="/">
            <img
              style={{ filter: 'drop-shadow(0px 0px 5px #ffffff60)' }}
              src={teoLogo.src}
              width="70"
              className="d-inline-block align-top"
              alt="teo logo"
            />
          </Navbar.Brand>
          <Navbar.Brand className='Brand' style={{ color: 'white', fontSize: '1.5rem' }} href="/">
            {t('home')}
          </Navbar.Brand>
        </div>
        <Dropdown drop='start' style={{ margin: '1rem' }}>
          <Dropdown.Toggle
            style={{background: 'transparent', border: 'none', margin: '0', padding: '0' }}>
            {selectedLanguage === "es" ? "Language" : "Idioma"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleLocaleChange("es")}>
              Español🇪🇸
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleLocaleChange("en")}>
              English🇬🇧
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Toggle className='navbarColor' aria-controls="basic-navbar-nav" style={{ background: 'white' }} />
        <Navbar.Collapse className='collapseLenguaje' id="basic-navbar-nav">
          <div style={{ display: 'flex', flex: 6, alignItems: 'center' }}>
            <Nav className="me-auto" style={{ gap: '2rem' }}>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#aboutUs">{t('about-us')}</Nav.Link>
              <Nav.Link href="#services">{t('services')}</Nav.Link>
              <Nav.Link href="#news">{t('news')}</Nav.Link>
              <Nav.Link href="#contact">{t('contact')}</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
