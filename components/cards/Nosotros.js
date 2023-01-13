import teoLogo from '../../public/teo-logo.png'
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useContext } from 'react';
import { AccordionContext, Row, Col, Container, Image } from 'react-bootstrap';
import vision from '../../public/vision.png'
import mision from '../../public/mision.png'
import valores from '../../public/valores.png'
import seguridad from '../../public/seguridad.png'

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{
        backgroundColor: isCurrentEventKey ? '#ffff' : 'black', color: isCurrentEventKey ? 'black' : 'white',
        border: 'none', borderRadius: '10px', height: '2rem', width: '5rem', border:'1px solid white'
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function Nosotros() {
  return (
    <section className='nosotrosSection'>
      <Container >
        <Accordion defaultActiveKey="0" style={{ padding: '1rem' }}>
          <Card style={{ margin: '1rem', width: '36em', height: 'fit-content', boxShadow: ' #8ad8f7 7px 7px 15px', border: 'none' }}>
            <Card.Header style={{
              background: 'black', height: 'unset', color: 'white'
            }} >
              <div style={{display:'flex', justifyContent:'space-between'}}>
              <h1 style={{fontWeight: 'bold', background: '-webkit-linear-gradient(#05B8FF, #8ad8f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>Sobre nosotros</h1>
              <Image
                src={teoLogo.src}
                width={70} height={50} />
                </div>
         
              <ContextAwareToggle eventKey="0">Ver más</ContextAwareToggle>
   
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Somos una cooperativa de trabajo con el objetivo brindar un producto atractivo y acorde a tus necesidades. Diseñamos y desarrollamos sitios web y aplicaciones para el proyecto que tengas en mente, tanto para grandes instituciones o empresas, hasta pequeñas páginas personales o profesionales.</Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className='div1' style={{flexDirection:'row', display:'flex'}}>
            <Card style={{ margin: '1rem', width: '20rem', height: 'fit-content', boxShadow: '#d1ade3 7px 7px 15px', border: 'none' }}>
              <Card.Header style={{
                background: 'black', height: 'unset', color: 'white'
              }} >
                <div style={{display:'flex', justifyContent:'space-between'}}>
                  <h1 style={{
                    fontWeight: 'bold', background: '-webkit-linear-gradient(#AE4EDE,#d1ade3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>Misión</h1>
                  <Image
                src={mision.src}
                width={30} height={30} />
                  </div>
                  <ContextAwareToggle eventKey="1">Ver más</ContextAwareToggle>
                
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Somos una cooperativa de trabajo con el objetivo brindar un producto atractivo y acorde a tus necesidades. Diseñamos y desarrollamos sitios web y aplicaciones para el proyecto que tengas en mente, tanto para grandes instituciones o empresas, hasta pequeñas páginas personales o profesionales.</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card style={{ margin: '1rem', width: '20rem', height: 'fit-content', boxShadow: '#fad9cc 7px 7px 15px', border: 'none' }}>
              <Card.Header style={{
                background: 'black', height: 'unset', color: 'white'
              }} >
                 <div style={{display:'flex', justifyContent:'space-between'}}>
                  <h1 style={{
                    fontWeight: 'bold', background: '-webkit-linear-gradient(#F58C62, #fad9cc)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>Visión</h1>
                  <Image
                src={vision.src}
                width={30} height={30} />
                  </div>
                  <ContextAwareToggle eventKey="2">Ver más</ContextAwareToggle>
               
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Teo-Coop será una cooperativa que brindará servicios a medida y escalables sin importar el lugar en donde se encuentre el cliente, siempre basándose en sus valores éticos.</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card style={{ margin: '1rem', width: '20rem', height: 'fit-content', boxShadow:'#f1ecb2 7px 7px 15px', border: 'none' }}>
              <Card.Header style={{
                background: 'black', height: 'unset', color: 'white'
              }} >
                 <div style={{display:'flex', justifyContent:'space-between'}}>
                  <h1 style={{
                    fontWeight: 'bold', background: '-webkit-linear-gradient(#FFEF3D,#f1ecb2)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>Valores</h1>
                  <Image
                src={valores.src}
                width={30} height={30} />
                  </div>
                  <ContextAwareToggle eventKey="3">Ver más</ContextAwareToggle>
               
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Respeto, responsabilidad, compromiso, empatía, amor, pasión, amistad, perseverancia, confianza, motivación, diversidad, inclusión, solidaridad y compromiso social.</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card style={{ margin: '1rem', width: '20rem', height: 'fit-content', boxShadow: '#b8e9d0 7px 7px 15px', border: 'none' }}>
              <Card.Header style={{
                background: 'black', height: 'unset', color: 'white'
              }} >
                 <div style={{display:'flex', justifyContent:'space-between'}}>
                  <h1 style={{
                    fontWeight: 'bold', background: '-webkit-linear-gradient(#56F6A2, #b8e9d0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                  }}>Seguridad</h1>
                  <Image
                src={seguridad.src}
                width={30} height={30} />
                  </div>
                  <ContextAwareToggle eventKey="4">Ver más</ContextAwareToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>Hoy en día la seguridad informática es primordial, integrando la seguridad en el ciclo de desarrollo producimos aplicaciones robustas y a menor costo.</Card.Body>
              </Accordion.Collapse>
            </Card>
          </div>
        </Accordion>
      </Container>

    </section>
  );
}

