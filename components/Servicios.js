import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import diseñoWeb from '../public/desingWeb1.jpg'
import diseñoUX from '../public/ux2.jpg'
import eCommerce from '../public/shopping5.jpg'
import mantenimiento from '../public/mant11.jpg'

export const Servicios = () => {
    return (
        <div id='servicios' >
            <h1 style={{ padding: '1rem', borderBottom: '1px solid black', color: 'black' }}> Servicios</h1>
            <div className='sectionServicios'>
                <Card className='cardTransition'>
                    <Card.Img src={diseñoWeb.src} style={{ opacity: '.8' }} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Diseño WEB</Card.Title>
                        </Card.Header>
                        <Card.Body className='cardBody' style={{ blackFilter: 'blur(0)', height: '11rem', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)', boxShadow: '#00000070 0px 0px 10px', borderRadius: '2%', }}>
                            Contanos qué es lo que necesitás, nosotrxs juntamos la funcionalidad y tu marca para conseguir experiencias digitales atractivas, fáciles e interesantes.s
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
                <Card className='cardTransition'>
                    <Card.Img src={eCommerce.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>E-Commerce</Card.Title>
                        </Card.Header>
                        <Card.Body className='cardBody' style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)', boxShadow: '#00000070 0px 0px 10px', borderRadius: '2%' }}>
                            Desarrollamos la tienda online que estas buscando para tu negocio, con pago seguro y tus productos al alcance.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
                <Card className='cardTransition'>
                    <Card.Img src={diseñoUX.src} style={{ filter: 'saturate(90%)' }} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Diseño UX/UI</Card.Title>
                        </Card.Header>
                        <Card.Body className='cardBody' style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)', boxShadow: '#00000070 0px 0px 10px', borderRadius: '2%' }}>
                            Hacemos que tu sitio web sea atractivo, ordenado y funcional. El/la usuarix estará a gusto al navegar por él, en una interfaz gráfica correcta, atractiva y limpia.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
                <Card className='cardTransition'>
                    <Card.Img src={mantenimiento.src} style={{ opacity: '.7' }} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Mantenimiento</Card.Title>
                        </Card.Header>
                        <Card.Body className='cardBody' style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)', boxShadow: '#00000090 0px 0px 10px', borderRadius: '2%' }}>
                            Hacemos que tu sitio web sea atractivo, ordenado y funcional. El/la usuarix estará a gusto al navegar por él, en una interfaz gráfica correcta, atractiva y limpia.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </div>
        </div>
    )
}
