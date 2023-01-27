import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import diseñoWeb from '../public/desingWeb1.jpg'
import diseñoUX from '../public/ux2.jpg'
import eCommerce from '../public/shopping5.jpg'
import mantenimiento from '../public/mant11.jpg'

export const Servicios = () => {
    const data = [
        {
            "name": "Diseño Web",
            "image": `${diseñoWeb.src}`,
            "date": "1/1/2020",
            "description": "Contanos qué es lo que necesitás, nosotrxs juntamos la funcionalidad y tu marca para conseguir experiencias digitales atractivas, fáciles e interesantes.s",
            "id": 1
        },
        {
            "name": "E-Commerce",
            "image": `${eCommerce.src}`,
            "date": "1/1/2023",
            "description": "Desarrollamos la tienda online que estas buscando para tu negocio, con pago seguro y tus productos al alcance.",
            "id": 2
        },
        {
            "name": "Diseñp UX/UI",
            "image": `${diseñoUX.src}`,
            "date": "1/1/2023",
            "description": "Hacemos que tu sitio web sea atractivo, ordenado y funcional. El/la usuarix estará a gusto al navegar por él, en una interfaz gráfica correcta, atractiva y limpia.",
            "id": 3
        },
        {
            "name": "Mantenimiento",
            "image": `${mantenimiento.src}`,
            "date": "1/1/2023",
            "description": "Si ya tenes tu sitio pero lo tenés abandonado o fuera de uso, nos encargamos de poner al día tu website sea el vivo reflejo de tu marca comercial o personal.",
            "id": 4
        },

    ]


    return (
        <div id='servicios' style={{ margin: '1rem' }}>
            <h1 style={{ padding: '1rem', borderBottom: '1px solid black', color: 'black' }}> Servicios</h1>
            <div className='sectionServicios'>
                <Container fluid>
                    <Row>
                        {data.map(({ name, description, image }) => (
                            <Col key={name} style={{ justifyContent: 'center', display: 'flex' }}>
                                <Card className='cardTransition' >
                                    <Card.Img src={image} style={{ opacity: '.8' }} />
                                    <Card.ImgOverlay>
                                        <Card.Header style={{ background: ' #ffffff60' }}>
                                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
                                                {name}
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className='cardBody' style={{ blackFilter: 'blur(0)', height: '11rem', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)', boxShadow: '#00000070 0px 0px 10px', borderRadius: '2%', }}>
                                            {description}
                                        </Card.Body>
                                    </Card.ImgOverlay>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    )
}
