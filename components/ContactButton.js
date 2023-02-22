import { Button, Container } from 'react-bootstrap';
import Link from 'next/link';
import { useTranslation } from 'next-i18next'
import { useEffect, useState } from 'react';
import arrow from '../public/arrow.png'
import Image from 'next/image';

export default function ContactButton() {
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
    const { t } = useTranslation('common');

    useEffect(() => {
        const handleScroll = () => {
            const { scrollY, innerHeight } = window;
            let height = 3500;
            if (window.innerWidth <= 420) {
              height = 5000;
            } else if (window.innerWidth <= 920){
                height = 4700;
            }
            const isBottom = scrollY + innerHeight >= height;
            setIsScrolledToBottom(isBottom);
        };



        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        if (isScrolledToBottom) {
            window.scrollTo(0, 0);
        }
    };

    return (
        <>
            <Link href='#contact'>
                <Button
                    className='contactButton'
                    size='lg'
                    style={{
                        zIndex: '100',
                        fontWeight: 'bold',
                        height: '3rem',
                        width: '8rem',
                        margin: '2rem',
                        bottom: '0rem',
                        right: '0',
                        position: 'fixed',
                        background: '#00000080',
                        ...(isScrolledToBottom
                            ? styles.contactButtonScrolled
                            : styles.contactButton),
                    }}
                    onClick={handleClick}
                >
                    {isScrolledToBottom ? (
                        <span className='contactButtonImage'>
                            <Image src={arrow} alt='arrow' height={50} />
                        </span>
                    ) : (
                        t('contact')
                    )}
                </Button>
            </Link>
        </>
    );
}

const styles = {
    contactButton: {
        borderRadius: '0.25rem',
        backgroundColor: '#00000090',
        display: 'flex',
        justifyContent: 'center',
        borderColor: 'white'
    },
    contactButtonScrolled: {
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: '50%',
        width: '4rem',
        height: '4rem',
        bottom: '0rem'
    },
    contactButtonImage: {
        display: 'inline-block',
        height: '1.5rem',
        width: '1.5rem',
        margin: '0 0.5rem',
    }
};
