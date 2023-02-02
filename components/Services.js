import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import diseñoWeb from '../public/desingWeb1.jpg'
import diseñoUX from '../public/ux2.jpg'
import eCommerce from '../public/shopping5.jpg'
import mantenimiento from '../public/mant11.jpg'
import { withTranslation } from 'next-i18next';
import PropTypes from 'prop-types';

const Services = ({ t }) => {
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
        <div id='services' style={{ margin: '1rem' }}>
            <h1 style={{ padding: '1rem', borderBottom: '1px solid black', color: 'black' }}> Servicios</h1>
            <div className='sectionServicios'>
                <Container fluid>
                    <Row>
                        {data.map(({ name, description, image }) => (
                            <Col key={name} style={{ justifyContent: 'center', display: 'flex' }}>
                                <Card className='cardTransition'style={{height:'28rem'}} >
                                    <Card.Img src={image} style={{ opacity: '.8', height:'100%', objectFit:'cover' }} />
                                    <Card.ImgOverlay >
                                        <Card.Header style={{ background: ' #ffffff60' }}>
                                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>
                                                {name}
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className='cardBody' style={{
                                            blackFilter: 'blur(0)', height: '11rem', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)', boxShadow: '#00000070 0px 0px 10px', borderRadius: '2%',
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
Services.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('services')(Services)
