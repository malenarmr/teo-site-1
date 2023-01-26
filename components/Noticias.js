import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import imagenFondo from '../public/diseñoUX.jpg'



export const Noticias = () => {
  const data =
    [
      {
        "name": "noticias1",
        "image":`${imagenFondo.src}`,
        "date": "1/1/2020",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        "id": 1
      },
      {
        "name": "noticias2",
        "image": `${imagenFondo.src}`,
        "date": "1/1/2023",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        "id": 2
      },
      {
        "name": "noticias3",
        "image":`${imagenFondo.src}`,
        "date": "1/1/2023",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        "id": 3
      },
      {
        "name": "noticias4",
        "image": `${imagenFondo.src}`,
        "date": "1/1/2023",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        "id": 4
      },
      {
        "name": "noticias5",
        "image": `${imagenFondo.src}`,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        "date": "1/1/2023",
        "id": 5,
      }
    ]


  return (
    <section id='noticias' style={{ borderRadius: '10px', background: '#000', boxShadow: '#ffffff58 0 0 20px', marginTop: '3rem', padding: '10px' }}>
      <h1 style={{ padding: '1rem', borderBottom: '1px solid #fff', color: '#fff' }}> Noticias</h1>
      <Container fluid className='noticias' >
        <Row xl={3}>
          {data.map(({ date, description, image, name }) => (
             <Col style={{justifyContent:'center', display:'flex'}}>
            <Card className='cardNoticias' style={{ height: '18rem', overflow: 'hidden', display: 'flex', flexDirection: 'row' }}>
              <img src={image} style={{ width: '100%', height:'100%'}}></img>
              <div style={{ margin: '.5rem' }}>
                <h3 style={{ padding: '0' }}>{name}</h3>
                <h6>{date}</h6>
                <h6>{description}</h6>
              </div>
            </Card>
            </Col>
          ))}
      
        </Row>
      </Container>
    </section>
  )
}
