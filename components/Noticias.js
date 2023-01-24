import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import imagenFondo from '../public/diseñoUX.jpg'

export const Noticias = () => {
  return (
    <section id='noticias' style={{ borderRadius: '10px', background: '#000', boxShadow: '#ffffff58 0 0 20px', marginTop: '3rem', padding: '10px' }}>
      <h1 style={{ padding: '1rem', borderBottom: '1px solid #fff', color: '#fff' }}> Noticias</h1>
      <Container style={{ justifyContent: 'center', display: 'flex' }}>
        <div className='noticias'>
          <Col xs={12} md={6} style={{ width: 'fit-content', padding: '0' }}>
            <Card style={{height:'18rem', overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
              <div style={{width: '50%', backgroundImage: `url(${imagenFondo.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
              <div style={{ margin: '.5rem' }}>
                <h3 style={{ padding: '0' }}>Titulo noticias</h3>
                <h6>1/1/2023</h6>
                <h6>"Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco </h6>
              </div>
            </Card>
            <Card style={{height:'18rem', overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '50%', backgroundImage: `url(${imagenFondo.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
              <div style={{ margin: '.5rem' }}>
                <h3 style={{ padding: '0' }}>Titulo noticias</h3>
                <h6>1/1/2023</h6>
                <h6>"Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco </h6>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{height:'18rem', overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '50%', backgroundImage: `url(${imagenFondo.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
              <div style={{ margin: '.5rem' }}>
                <h3 style={{ padding: '0' }}>Titulo noticias</h3>
                <h6>1/1/2023</h6>
                <h6>"Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco </h6>
              </div>
            </Card>
            <Card style={{height:'18rem', overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
              <div style={{ width: '50%', backgroundImage: `url(${imagenFondo.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
              <div style={{ margin: '.5rem' }}>
                <h3 style={{ padding: '0' }}>Titulo noticias</h3>
                <h6>1/1/2023</h6>
                <h6>"Lorem ipsum dolor sit amet, consectetur<br /> adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et dolore<br /> magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco </h6>
              </div>
            </Card>
          </Col>
        </div>
      </Container>
    </section>
  )
}
