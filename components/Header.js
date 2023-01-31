import teoCoop from '../public/teo-coop.png';
import { Container, Image, Card } from 'react-bootstrap';
import teoLogo from '../public/teo-logo.png';
import PropTypes from 'prop-types';
import { withTranslation } from 'next-i18next';

const Header = ({ t }) => {
    return (
        <>
            <Container fluid className='sectionHeader'>
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
                        <Card.Body style={{ color: '#fff', textAlign: 'justify', fontFamily: 'Montserrat' }}>
                            {t('description')}
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
Header.propTypes = {
    t: PropTypes.func.isRequired,
}
export default withTranslation('header')(Header)
