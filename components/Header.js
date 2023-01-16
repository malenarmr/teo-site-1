import { Button } from 'react-bootstrap';
import teoCoop from '../public/teo-coop.png'
import { AccordionContext, Row, Col, Container, Image, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import teoLogo from '../public/teo-logo.png'
import { useContext } from 'react';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


export const Header = () => {
    return (
        <>
            <section className='sectionHeader container-fluid'>
                <Button
                    variant="outline-light" size='lg'
                    style={{ zIndex: '10', fontWeight: 'bold', height: '3rem', width: '8rem', margin: '3rem', bottom: '0rem', right: '0', position: 'fixed', background: '-webkit-linear-gradient(#fff,red)',
                    webkitBackgroundClip: 'text',webkitTextFillColor: 'transparent',color: 'tomato',  }}
                > Contactar</Button>
                <div className='header' >
                    <Image src={teoCoop.src}
                        height={200}
                    />
                    <div class="typewriter">
                        <h1>Cooperativa de soluciones TI, Diseño Web, Diseño UX/UI, Desarrollo de E-Commerce</h1>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Card style={{
                        backdropFilter: 'blur(0)', backgroundColor: 'rgba(0,0,0,.8)',
                        margin: '1rem', width: '36em', height: 'fit-content', padding: '10px'
                    }}>
                        <Card.Header style={{ borderBottom: '1px solid #ffffff90', display: 'flex', justifyContent: 'center', padding: '20px' }}>
                            <Image
                                src={teoLogo.src}
                                width={70} height={50} />
                        </Card.Header>
                        <Card.Body style={{ color: '#fff', textAlign: 'justify', fontFamily: 'Montserrat' }}>Somos una cooperativa de trabajo con el objetivo brindar un producto atractivo y acorde a tus necesidades. Diseñamos y desarrollamos sitios web y aplicaciones para el proyecto que tengas en mente, tanto para grandes instituciones o empresas, hasta pequeñas páginas personales o profesionales.</Card.Body>
                    </Card>
                </div>
            </section>

        </>
    )
}
