import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import diseñoWeb from '../public/desingWeb1.jpg'
import diseñoUX from '../public/ux3.jpg'
import eCommerce from '../public/shopping5.jpg'
import mantenimiento from '../public/mant11.jpg'
import { useTranslation } from 'next-i18next'


export default function Services () {
    const { t } = useTranslation('services')
    const data = [
        {
            "name": `${t('web-name')}`,
            "image": `${diseñoWeb.src}`,
            "description": `${t('web-description')}`,
            "id": 1
        },
        {
            "name": `${t('eCommerce-name')}`,
            "image": `${eCommerce.src}`,
            "description": `${t('eCommerce-description')}`,
            "id": 2
        },
        {
            "name": `${t('ux-name')}`,
            "image": `${diseñoUX.src}`,
            "description": `${t('ux-description')}`,
            "id": 3
        },
        {
            "name": `${t('maintenance-name')}`,
            "image": `${mantenimiento.src}`,
            "description": `${t('maintenance-description')}`,
            "id": 4
        },

    ]


    return (
        <div id='services'className='section'>
            <h1 className='titleSeccion'> Servicios</h1>
            <div className='sectionServicios'>
                <Container fluid>
                <Row xxl={12} style={{justifyContent:'center',display:'flex', marginTop:'3rem'}}>
                        {data.map(({ name, description, image }) => (
                            <Col
                             key={name} style={{justifyContent: 'center', display: 'flex', width:'fit-content' }}>
                                <Card className='cardTransition'>
                                    <Card.Img src={image} style={{ opacity: '.8', height:'100%', objectFit:'cover' }} />
                                    <Card.ImgOverlay >
                                        <Card.Header style={{ background: ' #ffffff60' }}>
                                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
                                                {name}
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className='cardBody' style={{height: '11rem', marginTop: '10rem', backdropFilter: 'blur(1px)', backgroundColor: 'rgba(255,255, 255,.7)', boxShadow: '#00000070 0px 0px 10px', borderRadius: '2%',
                                            height: '11rem'
                                        }}>
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