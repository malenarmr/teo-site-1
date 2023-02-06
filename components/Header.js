import teoCoop from '../public/teo-coop.png';
import { Container, Image, Card } from 'react-bootstrap';
import teoLogo from '../public/teo-logo.png';
import { useTranslation } from 'next-i18next'

export default function Header() {
    const { t } = useTranslation('common');
    return (
        <>
            <Container fluid className='sectionHeader'>
                <div className="title">
                    <h1 className='h1Title'>-{t('title')}-</h1>
                    <h1 style={{ fontSize: '1rem', letterSpacing: '.2rem' }} className='h1Title'>
                        {t('web-name')} - {t('eCommerce-name')} - {t('ux-name')} - {t('maintenance-name')} 
                    </h1>
                </div>
                <div className='hedear1'>
                    <div className='header' style={{ margin: '3rem 0rem', }}>
                        <Image src={teoCoop.src}
                            height={200}
                        />
                    </div>
                    <div >
                        <Card className='cardHeader' style={{
                            backdropFilter: 'blur(0)', backgroundColor: 'rgba(0,0,0,.8)',
                            width: '36em', height: 'fit-content', padding: '0px'
                        }}>
                            <Card.Header style={{ borderBottom: '1px solid #ffffff90', display: 'flex', justifyContent: 'center', padding: '20px' }}>
                                <Image className='headerImage'
                                    src={teoLogo.src}
                                    width={70} height={50} />
                            </Card.Header>
                            <Card.Body className='cardBody' style={{ color: '#fff', textAlign: 'justify' }}>
                                <p>{t('description')}</p>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </Container>
        </>
    )
}

