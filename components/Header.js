import teoCoop from '../public/teo-coop.png'
import { Container, Image, Card, Button, Modal, ModalBody } from 'react-bootstrap';
import teoLogo from '../public/teo-logo.png'
import { useState } from 'react';
import ContactForm from './ContactForm';

export const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Container fluid className='sectionHeader'>
                <Button
                    onClick={handleShow}
                    className='btnHeader'
                    variant="outline-light" size='lg'
                    style={{ zIndex: '10', fontWeight: 'bold', height: '3rem', width: '8rem', margin: '1rem', bottom: '0rem', right: '0', position: 'fixed', background: '#00000080' }}
                > Contactar</Button>
                <Modal style={{background:'#00000090'}}
                 show={show} onHide={handleClose}>
                    <ModalBody>
                    <ContactForm/>
                    </ModalBody>
                </Modal>

                <div className='header' >
                    <Image src={teoCoop.src}
                        height={200}
                    />
                </div>
                <div className='cardHeader' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                    <Card style={{
                        backdropFilter: 'blur(0)', backgroundColor: 'rgba(0,0,0,.8)',
                        margin: '1rem', width: '36em', height: 'fit-content', padding: '0px'
                    }}>
                        <Card.Header style={{ borderBottom: '1px solid #ffffff90', display: 'flex', justifyContent: 'center', padding: '20px' }}>
                            <Image className='headerImage'
                                src={teoLogo.src}
                                width={70} height={50} />
                        </Card.Header>
                        <Card.Body style={{ color: '#fff', textAlign: 'justify', fontFamily: 'Montserrat' }}>Somos una cooperativa de trabajo con el objetivo brindar un producto atractivo y acorde a tus necesidades. Diseñamos y desarrollamos sitios web y aplicaciones para el proyecto que tengas en mente, tanto para grandes instituciones o empresas, hasta pequeñas páginas personales o profesionales.</Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
