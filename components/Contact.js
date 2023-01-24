import { useState } from "react"
import phone from '../public/compucolores1.jpg'
import igLogo from '../public/igLogo.png';
import fbLogo from '../public/fbLogo.png';
import inLogo from '../public/inLogo.png'
import Link from "next/link";


const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Enviar')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Enviando...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div id="contacto" style={{ display: 'flex', flexDirection: 'column', padding:'2%', backgroundImage: `url(${phone.src})`,border:'10px, solid white', backgroundAttachment: 'scroll', backgroundPosition: '0', backgroundSize: 'cover',}}>
            <div className="container contactContainer mt-0" style={{ borderRadius: '7px', color: 'black', width: '30rem', background: '#ffffff50', boxShadow: '#00000090 0px 0px 20px', padding: '1%'}}>
                <h2 className="mb-3" style={{display:'flex', justifyContent:'center'}}>Contacto</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Nombre
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" required />
                    </div>
                    <div className="message mb-3 ">
                        <label className="form-label" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn btn-outline-dark btn-lg" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
            <div style={{ justifyContent: 'center',marginTop:'2%',marginBottom:'0',gap:'2rem', display: 'flex' }}>
                <Link href='https://www.facebook.com/TeoCooperativa'>
                    <img src={fbLogo.src} height={60} /></Link>
                <Link href='https://www.linkedin.com/company/teo-coop/?original_referer=https%3A%2F%2Fteocoop.site%2F'>
                    <img src={inLogo.src} height={60} /></Link>
                <Link href='https://www.instagram.com/teo.coop/'>
                    <img src={igLogo.src} height={60} /></Link>
            </div>
        </div>
    )
}
export default ContactForm