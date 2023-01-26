import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { AccordionContext, Col, Container, Image, Row } from 'react-bootstrap';
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

  const accordionCollapse = activeEventKey === eventKey;
  const renderChildren = ({ accordionCollapse }) => {
    //inicia en false, onclick = true, false de nuevo 
    return accordionCollapse ? children[0] : children[1];
  }
  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: accordionCollapse ? '#ffff' : 'black', color: accordionCollapse ? 'black' : 'white', borderRadius: '10px', height: '2rem', width: 'fit-content', padding: '0rem .4rem', alignItems: 'flex-end', display: 'flex',
          border: accordionCollapse ? '1px solid black' : 'none'
        }}
        onClick={decoratedOnClick}

      >
        {renderChildren({ accordionCollapse })}
      </button>
    </>
  );

}
export default function Nosotros() {
  const data =
    [
      {
        "name": "Mision",
        "image": `${mision.src}`,
        "date": "1/1/2020",
        "description": "Somos una cooperativa de trabajo con el objetivo brindar un producto atractivo y acorde a tus necesidades. Diseñamos y desarrollamos sitios web y aplicaciones para el proyecto que tengas en mente, tanto para grandes instituciones o empresas, hasta pequeñas páginas personales o profesionales.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        "id": 1
      },
      {
        "name": "Vision",
        "image": `${vision.src}`,
        "date": "1/1/2023",
        "description": "Teo-Coop será una cooperativa que brindará servicios a medida y escalables sin importar el lugar en donde se encuentre el cliente, siempre basándose en sus valores éticos.",
        "id": 2
      },
      {
        "name": "Valores",
        "image": `${valores.src}`,
        "date": "1/1/2023",
        "description": "Respeto, responsabilidad, compromiso, empatía, amor, pasión, amistad, perseverancia, confianza, motivación, diversidad, inclusión, solidaridad y compromiso social",
        "id": 3
      },
      {
        "name": "Seguridad",
        "image": `${seguridad.src}`,
        "date": "1/1/2023",
        "description": "Hoy en día la seguridad informática es primordial, integrando la seguridad en el ciclo de desarrollo producimos aplicaciones robustas y a menor costo.",
        "id": 4
      },

    ]




  return (
    <div style={{ margin: '1rem' }}>
      <div id='nosotros'>
        <h1 style={{ padding: '1rem', borderBottom: '1px solid black', color: 'black' }}>
          Sobre nosotrxs</h1>
      </div>
      <section className='nosotrosSection' >
        <Accordion
          defaultActiveKey="0">
          <div className='sectionServicios'>
            <Container fluid>
            <Row>
            {data.map(({ name, description, image }) => (
              <Col style={{justifyContent:'center', display:'flex'}}>
                <Card className='cardTransition'>
                  <Card.Header >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h1>{name}</h1>
                      <Image
                        src={image}
                        width={30} height={30} />
                    </div>
                    <ContextAwareToggle eventKey="1">
                      <h6>Ver menos</h6>
                      <h6>Ver más</h6>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse style={{ background: 'white' }} eventKey="1">
                    <Card.Body>{description}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Col>
            ))}
            </Row>
            </Container>
          </div>
        </Accordion>
      </section>
    </div>
  );
}

