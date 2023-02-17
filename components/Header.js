import teoCoop from '../public/teo-coop.png';
import { Container, Image, Card } from 'react-bootstrap';
import teoLogo from '../public/teo-logo.png';
import { useTranslation } from 'next-i18next'

export default function Header() {
    const { t } = useTranslation('common');
    return (
        <>
            <Container fluid className='sectionHeader'>
                <div className='hedear1'>
                    <div className='header' style={{ margin: '3rem 0rem', }}>
                        <Image src={teoCoop.src}
                            height={200}
                        />
                    </div>
                    <div >
                        <Card className='cardHeader'>
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

