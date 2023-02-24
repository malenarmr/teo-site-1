import teoCoop from '../public/teo-coop.png';
import { Container, Image, Card } from 'react-bootstrap';
import nube from '../public/teo-logo.png';
import { useTranslation } from 'next-i18next'

export default function Header() {
    const { t } = useTranslation('common');
    return (
        <>
            <Container fluid className='sectionHeader'>
            
                <div className='header1'>
                <Image src={teoCoop.src} 
                            height={150} />
                        <Image className='headerImage'
                            src={nube.src}
                            width={250} height={170} />
                </div>
                <div className='titleHeader'>
                    <div className='btn-shine'>
                        <p className='titleGde' style={{ fontSize: '2.5rem' }}>
                            {t('title')}</p>
                        <p className='titleC' style={{ fontSize: '1.2rem' }}>
                            {t('eCommerce-name')} - {t('web-name')} - {t('ux-name')} - {t('maintenance-name')}</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

