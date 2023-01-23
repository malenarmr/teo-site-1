import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import imagenFondo from '../public/diseñoUX.jpg'


export const Noticias = () => {
  return (
    <section style={{ backgroundColor: '#fff', padding: '1rem' }}>
      <Container className='noticias'>
        <Col style={{ justifyContent: 'flex-start', padding: '0px', marginBottom: '1rem' }} xs={12} md={6}>
          <Card style={{ overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
            <div style={{ width: '50%', backgroundImage: `url(${imagenFondo.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            </div>
            <div style={{ margin: '1rem' }}>
  
              <h3>Titulo noticias</h3>
              <h6>"Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco </h6>
            </div>
          </Card>
          <Card style={{ backgroundColor: `url(${imagenFondo.src})` }}></Card>
        </Col>
        <Col style={{ justifyContent: 'flex-start', padding: '0px', marginBottom: '1rem' }} xs={12} md={6}>
          <Card style={{ backgroundImage: `url(${imagenFondo.src})` }}></Card>
          <Card style={{ backgroundImage: `url(${imagenFondo.src})` }}></Card>
        </Col>
      </Container>
    </section>
  )
}
