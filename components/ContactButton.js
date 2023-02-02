import { Button} from 'react-bootstrap';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'

export default function ContactButton () { 
    const { t } = useTranslation('common')
    return (
        <>
        <Link href='#contact'>
            <Button
            className='contactButton'
               size='lg'
                style={{ zIndex: '10', fontWeight: 'bold', height: '3rem', width: '8rem', margin: '2rem', bottom: '0rem', right: '0', position: 'fixed', background: '#00000080' }}
            > {t('contact')}
            </Button>
            </Link>
        </>
    )
}
