import React from 'react'
import igLogo from '../public/igLogo.png';
import fbLogo from '../public/fbLogo.png';
import inLogo from '../public/inLogo.png'
import { Image } from 'react-bootstrap';
export const Footer = () => {
  return (
    <footer className="footer container-fluid">
      <div style={{display:'flex', alignItems:'flex-start', flexDirection:'row'}}>
      <Image src={fbLogo.src} height={40} />
      <Image src={inLogo.src} height={40} />
      <Image src={igLogo.src} height={40} />
<p>© Copyright Teo Coop. All Rights Reserved</p>
     
      </div> 
    </footer>
  )
}
