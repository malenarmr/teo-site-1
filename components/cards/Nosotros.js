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
        border: 'none', borderRadius: '10px', height: '2rem', width: '5rem', border: '1px solid white'
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default function Nosotros() {
  return (
    <>
    <div id='nosotros'>
    <h1 style={{ padding: '1rem', borderBottom: '1px solid white', color: 'white' }}>
      Sobre nosotrxs</h1>
    </div>
    <section className='nosotrosSection' >
        <Accordion className='accordionClase'
          defaultActiveKey="0">
          <div className='sectionServicios'>
            <Card className='cardTransition'>
              <Card.Header >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h1>Misión</h1>
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

            <Card className='cardTransition'>
              <Card.Header >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h1>Visión</h1>
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

            <Card className='cardTransition'>
              <Card.Header  >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h1>Valores</h1>
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

            <Card className='cardTransition'>
              <Card.Header >
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <h1 >Seguridad</h1>
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
    </section>
    </>
  );
}

