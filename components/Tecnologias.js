import React from 'react'
import jsLogo from '../public/js.png'
import phpLogo from '../public/php.png'
import htmlLogo from '../public/html.png'
import cssLogo from '../public/css.png'
import nodeLogo from '../public/node.png'
import pythonLogo from '../public/python.png'
import { Image } from 'react-bootstrap'
import fondo from '../public/fondoCuadrado.jpg'


export const Tecnologias = () => {
    return (
        <>
            <section  className='tecnologias' style={{ 
                display: 'flex', height: '12rem', justifyContent: 'space-around', alignItems: 'center' }}>
                <Image src={jsLogo.src}
                    height={100} />
                <Image src={htmlLogo.src}
                    height={100} />
                <Image src={cssLogo.src}
                    height={100} />
                <Image src={nodeLogo.src}
                    height={100} />
                <Image src={phpLogo.src}
                    height={100} />
                <Image src={pythonLogo.src}
                    height={100} />
            </section>
           
        </>
    )
}
