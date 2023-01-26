import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCreative } from "swiper";
import { Card } from "react-bootstrap";
import cap2 from '../public/slider/captura2.jpg'
import gif from '../public/slider/capturagif.gif'
import negro from '../public/slider/fondonegro.jpg'


import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div id="portfolio" className="swiperFondo" style={{ borderRadius: '15px', background: '#000', boxShadow: '#ffffff50 0 0 20px', padding: '10px' }}>
        <h1 style={{ padding: '1rem', borderBottom: '1px solid #FFF', color: '#FFF' }}>
          Portfolio</h1>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            navigation={true}
            modules={[EffectCreative]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Link href="https://teocoop.site/">
                <Card className="swipercard1" style={{ height: '30rem', width: '55rem', display: 'flex', backgroundImage: `url(${cap2.src})`, backgroundPosition: 'center', objectFit: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: '0', border: 'none' }}>
                </Card>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="swipercard" style={{ height: '30rem', width: '55rem', display: 'flex', backgroundImage: `url(${negro.src})`, backgroundPosition: 'center', objectFit: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: '0', border: 'none' }}>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card style={{ height: ' 30rem', width: '55rem', justifyContent: 'center', background: 'black' }}>
                <img src={gif.src} width='100%' />
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
