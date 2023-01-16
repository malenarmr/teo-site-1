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
                backgroundColor:'black',
                display: 'flex', padding:'4% 0px 4% 0px' , justifyContent: 'space-around', alignItems: 'end', margin:'0px 10px', }}>
                <Image src={jsLogo.src}
                    height={120}
                    width={120} />
                <Image src={htmlLogo.src}
                    height={120}
                    width={120} />
                <Image src={cssLogo.src}
                    height={120}
                    width={120} />
                <Image src={nodeLogo.src}
                    height={120} />
                <Image src={phpLogo.src}
                    height={120} />
                <Image src={pythonLogo.src}
                    height={120} />
            </section>
         
       
        </>
    )
}
