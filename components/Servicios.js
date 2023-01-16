import React from 'react'
import { Card } from 'react-bootstrap'
import diseñoWeb from '../public/diseñoUX1.jpg'
import diseñoUX from '../public/ux2.jpg'
import eCommerce from '../public/shopping5.jpg'
import mantenimiento from '../public/1111.jpg'



export const Servicios = () => {
    return (
        <>
        <div style={{display:'flex', justifyContent:'center', marginTop:'3rem'}}>
            <h1 style={{color:'white', borderBottom:'2px solid white', paddingBottom:'.5rem', width:'fit-content'}}>Servicios</h1>
            </div>
            <section className='sectionServicios'>
                <Card>
                    <Card.Img src={diseñoWeb.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Diseño WEB</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ blackFilter: 'blur(0)', height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,.6)', borderRadius: '2%', color: 'white' }}>
                            Contanos qué es lo que necesitás, nosotrxs juntamos la funcionalidad y tu marca para conseguir experiencias digitales atractivas, fáciles e interesantes.s
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card>
                    <Card.Img src={eCommerce.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>E-Commerce</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,.6)', borderRadius: '2%', color: 'white' }}>
                            Desarrollamos la tienda online que estas buscando para tu negocio, con pago seguro y tus productos al alcance.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card>
                    <Card.Img src={diseñoUX.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Diseño UX/UI</Card.Title>
                        </Card.Header>
                        <Card.Body style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,.6)', borderRadius: '2%', color: 'white' }}>
                            Hacemos que tu sitio web sea atractivo, ordenado y funcional. El/la usuarix estará a gusto al navegar por él, en una interfaz gráfica correcta, atractiva y limpia.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>

                <Card >
                    <Card.Img src={mantenimiento.src} />
                    <Card.ImgOverlay>
                        <Card.Header style={{ background: ' #ffffff60' }}>
                            <Card.Title style={{ fontWeight: 'bold', justifyContent: 'center', display: 'flex' }}>Mantenimiento</Card.Title>
                        </Card.Header >
                        <Card.Body style={{ height: '11rem', display: 'flex', bottom: '0', marginTop: '10rem', backdropFilter: 'blur(2px)', backgroundColor: 'rgba(0,0,0,.6)', borderRadius: '2%', color: 'white' }}>
                            Si ya tenes tu sitio pero lo tenés abandonado o fuera de uso, nos encargamos de poner al día tu website sea el vivo reflejo de tu marca comercial o personal.
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </section>
        </>
    )
}
