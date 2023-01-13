import Image from 'next/image';
import logoTeo from '../public/teo-logo.png'
import teoCoop from '../public/teo-coop.png'

export const Header = () => {
    return (
        <>
            <section className='sectionHeader container-fluid'>
                <div className='header' >
                    <Image src={teoCoop}
                        height={150} />
                    <div class="typewriter">
                        <h1>Cooperativa de soluciones TI, Diseño Web, Diseño UX/UI, Desarrollo de E-Commerce</h1>
                    </div>
                </div>

            </section>

        </>
    )
}
