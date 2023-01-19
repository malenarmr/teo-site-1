import { useState } from "react"
import phone from '../public/phone2.jpg'
import igLogo from '../public/igLogo.png';
import fbLogo from '../public/fbLogo.png';
import inLogo from '../public/inLogo.png'


const ContactForm = () => {
    const [formStatus, setFormStatus] = useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (

        <div style={{display:'flex',flexDirection:'column', backgroundImage: `url(${phone.src})`, backgroundAttachment: 'scroll', backgroundPosition: 'center', backgroundSize: 'cover', padding: '5%', margin: '0' }}>
            <div className="container mt-0" style={{ borderRadius: '10px', color: 'black', width: '50rem', background: '#ffffff80', boxShadow: '#00000090 0px 0px 20px', padding: '1%' }}>
                <h2 className="mb-3">Contacto</h2>
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
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea className="form-control" id="message" required />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
            <div style={{justifyContent:'flex-end', display:'flex'}}>
            <img src={fbLogo.src} height={40} />
            <img src={inLogo.src} height={40} />
            <img src={igLogo.src} height={40} />
            </div>
        </div>
    )
}
export default ContactForm