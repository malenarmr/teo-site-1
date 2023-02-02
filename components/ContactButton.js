import { Button, Modal, ModalBody } from 'react-bootstrap';
import { useState } from 'react';
import ContactForm from './ContactForm';
import PropTypes from 'prop-types';
import { withTranslation } from 'next-i18next';
import Link from 'next/link';

const ContactButton = ({t}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Link href='#contact'>
            <Button
                variant="outline-light" size='lg'
                style={{ zIndex: '10', fontWeight: 'bold', height: '3rem', width: '8rem', margin: '1rem', bottom: '0rem', right: '0', position: 'fixed', background: '#00000080' }}
            > {t('contact')}
            </Button>
            </Link>
        </>
    )
}
ContactButton.propTypes = {
    t: PropTypes.func.isRequired,
}
export default  withTranslation('common')(ContactButton)