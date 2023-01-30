import { useState, useRef } from "react"
import igLogo from '../public/igLogo.png';
import fbLogo from '../public/fbLogo.png';
import inLogo from '../public/inLogo.png'
import Link from "next/link";
import send from '../public/share.png';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_mqqrxfb",
                "template_9al2ma9",
                form.current,
                "G7vAVR0LUQmtaC9lW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    (console.log(error.text))
                }
            );
    };
    return (
        <div id="contacto">
            <div className="container contactContainer mt-0" style={{ borderRadius: '7px', color: 'black', width: '30rem', background: '#ffffff90', boxShadow: '#00000090 0px 0px 20px', padding: '1%' }}>
                <h2 className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>Contacto</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Nombre
                        </label>
                        <input className="form-control" name="user_name" type="text" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email" type="email">
                            Email
                        </label>
                        <input className="form-control" type="email" name='user_email' required />
                    </div>

                    <div className="message mb-3 ">
                        <label className="form-label"> Mensaje</label>
                        <textarea className="form-control" name='message' type="text" />
                    </div>

                    <button style={{ alignItems: 'center', display: 'flex' }}
                        className="btn btn-outline-dark btn-lg" type="submit" value="Send">
                        send
                        <img src={send.src}
                            style={{ marginLeft: '10px' }} height={20} width={20} />
                    </button>
                </form>
            </div>
            <div className="divContactImage" style={{ justifyContent: 'center', marginTop: '2%', marginBottom: '0', gap: '2rem', display: 'flex' }}>
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