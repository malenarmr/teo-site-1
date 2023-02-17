import Card from 'react-bootstrap/Card';
import { useContext, useState } from 'react';
import { Button, AccordionContext, Accordion, useAccordionButton, Col, Container, Image, Row } from 'react-bootstrap';
import vision from '../public/vision.png'
import mision from '../public/mision.png'
import valores from '../public/valores.png'
import seguridad from '../public/seguridad.png'
import { useTranslation } from 'next-i18next'

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
        <Container fluid>
          <Row  style={{ justifyContent: 'center', display: 'flex', marginTop: '4rem' }}>
            {data.map(({ name, description, image, id }) => (
              <Col key={name} style={{ justifyContent: 'center', display: 'flex', width: 'fit-content' }}>
                <Card className='cardAbout cardTransition'>
                  <Card.Header >
                    <div style={{ display: 'flex', justifyContent:'space-between', overflow:'hidden' }}>
                      <h1 style={{ fontSize: '2rem'}} >{name}</h1>
                      <Image
                        src={image}
                        width={30} height={30} />
                    </div>
                  </Card.Header>
                  <Card.Body style={{ fontSize: '.8rem', height:'7rem' }}>
                    {description}</Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}
