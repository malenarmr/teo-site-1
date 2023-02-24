import { useState } from "react"
import igLogo from '../public/igLogo.png';
import fbLogo from '../public/fbLogo.png';
import inLogo from '../public/inLogo.png'
import Link from "next/link";
import send from '../public/share.png';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'next-i18next'
import instagram from '../public/instagram.png'
import facebook from '../public/facebook.png'
import linkedin from '../public/linkedin.png'


export default function ContactForm() {
    const { t } = useTranslation('contact')
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
            <div className="container contactContainer mt-0"
                style={{ borderRadius: '7px', color: 'black', width: '30rem', backgroundColor: '#00000040', backdropFilter: 'blur(10px)', boxShadow: '#ffffff40 0px 0px 20px', padding: '1%', color: 'white', fontFamily: 'rubik' }}>
                <h2 className="mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                    {t('contact')}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            {t('name')}
                        </label>
                        <div>
                            <input
                                required
                                className="form-control"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div></div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email" type="email">
                            Email
                        </label>
                        <input
                            required
                            className="form-control"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="message mb-3 ">
                        <label className="form-label">  {t('message')}</label>
                        <textarea
                            required
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-control" type="text" />
                    </div>
                    <div className="row" style={{ marginRight: '1%', display: 'flex', justifyContent: 'flex-end' }}>
                        <button style={{ width: 'fit-content', alignItems: 'center', display: 'flex', backgroundColor: '#00000090', border: '1px solid #fff', color: 'white' }}
                            className="btn btn-outline-dark btn-lg contactButton" type="submit" value="Send"                >
                            {buttonText}
                            <img src={send.src}
                                style={{ marginLeft: '10px' }} height={20} width={20} />
                        </button>
                    </div>
                </form>
            </div>
            <div className="divContactImage" style={{ justifyContent: 'center', margin: '2%', gap: '2rem', display: 'flex' }}>
               
                <Link
                    href='https://www.facebook.com/TeoCooperativa'>
                    <img src={fbLogo.src} height={60} width={60} /></Link>
                <Link
                    href='https://www.linkedin.com/company/teo-coop/?original_referer=https%3A%2F%2Fteocoop.site%2F'>
                    <img src={inLogo.src} height={60} width={60} /></Link>
                <Link href='https://www.instagram.com/teo.coop/'>
                    <img src={igLogo.src} height={60} width={60} /></Link>
            </div>

        </div>
    )
};
