import React from 'react'
import { Card } from 'react-bootstrap'
import diseñoWeb from '../public/desingWeb1.jpg'
import diseñoUX from '../public/diseñoux3.jpg'
import eCommerce from '../public/shopping5.jpg'
import mantenimiento from '../public/mant11.jpg'

export const Servicios = () => {
    return (
        <>
        <div style={{display:'flex', justifyContent:'center', marginTop:'3rem'}}>
            <h1 style={{color:'white', borderBottom:'2px solid white'}}>Servicios</h1>
            </div>
            <section className='sectionServicios'>
                <Card className='cardTransition'>
                    <Card.Img src={diseñoWeb.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Diseño WEB</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ blackFilter: 'blur(0)', height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)',boxShadow:'#00000070 0px 0px 10px', borderRadius: '2%', color:'#000'}}>
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
                        <Card.Body style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)',boxShadow:'#00000070 0px 0px 10px', borderRadius: '2%', color:'#000'}}>
                            Desarrollamos la tienda online que estas buscando para tu negocio, con pago seguro y tus productos al alcance.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card className='cardTransition'>
                    <Card.Img src={diseñoUX.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Diseño UX/UI</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem',backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)',boxShadow:'#00000070 0px 0px 10px', borderRadius: '2%', color:'#000'}}>
                            Hacemos que tu sitio web sea atractivo, ordenado y funcional. El/la usuarix estará a gusto al navegar por él, en una interfaz gráfica correcta, atractiva y limpia.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card className='cardTransition'>
                    <Card.Img src={mantenimiento.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Mantenimiento</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255,255, 255,.5)',boxShadow:'#00000090 0px 0px 10px', borderRadius: '2%', color:'#000'}}>
                            Hacemos que tu sitio web sea atractivo, ordenado y funcional. El/la usuarix estará a gusto al navegar por él, en una interfaz gráfica correcta, atractiva y limpia.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </section>
        </>
    )
}
