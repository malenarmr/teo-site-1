import { useState, useRef, useEffect } from "react"
import igLogo from '../public/igLogo.png';
import fbLogo from '../public/fbLogo.png';
import inLogo from '../public/inLogo.png'
import Link from "next/link";
import send from '../public/share.png';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';
import { withTranslation } from 'next-i18next';

const ContactForm = ({t}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [buttonText, setButtonText] = useState(`${t('send')}`);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText(`${t('sending')}`);
        emailjs
            .sendForm(
                "service_mqqrxfb",
                "template_kviff59",
                e.target,
                "G7vAVR0LUQmtaC9lW"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormData({ name: "", email: "", message: "" });
                    setButtonText(`${t('sent')}`);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id="contact">
            <div className="container contactContainer mt-0" style={{ borderRadius: '7px', color: 'black', width: '30rem', background: '#ffffff90', boxShadow: '#00000090 0px 0px 20px', padding: '1%' }}>
                <h2 className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                        {t('name')}
                        </label>
                        <input
                            style={{ textTransform: 'uppercase' }}
                            required
                            className="form-control"
                            type="text"
                            name="name"
                            placeholder= {t('your-name')}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email" type="email">
                            Email
                        </label>
                        <input
                            style={{ textTransform: 'uppercase' }}
                            required
                            className="form-control"
                            type="email"
                            name="email"
                            placeholder= {t('your-email')}
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="message mb-3 ">
                        <label className="form-label">  {t('message')}</label>
                        <textarea
                            style={{ textTransform: 'uppercase' }}
                            required
                            name="message"
                            placeholder= {t('your-message')}
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control" type="text" />
                    </div>
                    <button style={{ alignItems: 'center', display: 'flex' }}
                        className="btn btn-outline-dark btn-lg" type="submit" value="Send"                >
                        {buttonText}
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
};
ContactForm.propTypes = {
    t: PropTypes.func.isRequired,
}
export default  withTranslation('contacto')(ContactForm)