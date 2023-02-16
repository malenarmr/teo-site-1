import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { AccordionContext, Accordion, useAccordionButton, Col, Container, Image, Row } from 'react-bootstrap';
import vision from '../public/vision.png'
import mision from '../public/mision.png'
import valores from '../public/valores.png'
import seguridad from '../public/seguridad.png'
import { useTranslation } from 'next-i18next'

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
          backgroundColor: accordionCollapse ? 'white' : '#6eeaf2', borderRadius: '7px', height: 'fit-content', width: 'fit-content', padding: '.3rem',
          border: accordionCollapse ? '1px solid black' : 'none'
        }}
        onClick={decoratedOnClick}

      >
        {renderChildren({ accordionCollapse })}
      </button>
    </>
  );
}
export default function AboutUs() {
  const { t } = useTranslation('aboutUs')

  const data = [
    {
      "name": `${t('mission-name')}`,
      "image": `${mision.src}`,
      "description": `${t('mission-description')}`,
      "id": 1
    },
    {
      "name": `${t('vision-name')}`,
      "image": `${vision.src}`,
      "description": `${t('vision-description')}`,
      "id": 2
    },
    {
      "name": `${t('values-name')}`,
      "image": `${valores.src}`,
      "description": `${t('values-description')}`,
      "id": 3
    },
    {
      "name": `${t('segurity-name')}`,
      "image": `${seguridad.src}`,
      "description": `${t('segurity-description')}`,
      "id": 4
    },

  ]

  return (
    <div className='section'>
      <div id='aboutUs' >
        <h1 className='titleSeccion'>
          {t('title')}
        </h1>
      </div>
      <div className='aboutUsSection' >
        <Accordion >
          <Container fluid>
            <Row xxl={6} style={{ justifyContent: 'center', display: 'flex', marginTop: '4rem' }}>
              {data.map(({ name, description, image, id }) => (
                <Col key={name} style={{ justifyContent: 'center', display: 'flex', width: 'fit-content' }}>
                  <Card className='cardTransition' style={{ height: 'fit-content' }}>
                    <Card.Header>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h1 style={{ fontSize: '2rem' }} >{name}</h1>
                        <Image
                          src={image}
                          width={30} height={30} />
                      </div>
                      <ContextAwareToggle eventKey={id} >
                        <h6 style={{ fontSize: '.7rem', margin: '0' }}>{t('less')}</h6>
                        <h6 style={{ fontSize: '.7rem', margin: '0' }}>{t('more')}</h6>
                      </ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse className='accordioCollapse' eventKey={id}>
                      <Card.Body style={{ background: 'white', fontSize: '.8rem' }}>{description}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </Accordion>
      </div>
    </div>
  );
}
