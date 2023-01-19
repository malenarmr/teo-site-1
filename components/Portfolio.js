import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCreative } from "swiper";
import teoLogo from '../public/teo-logo.png'
import { Card } from "react-bootstrap";
import compu from '../public/compu.jpg'
import teoSite from '../public/teosite.jpg'
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div style={{ background: 'black' }}>
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
          modules={[  EffectCreative]}
          className="mySwiper"
        >


          <SwiperSlide>
            <Link href="https://teocoop.site/">
              <Card style={{ height: '30rem', width: '55rem', display: 'flex', backgroundImage: `url(${teoSite.src})`, backgroundPosition: 'center', objectFit: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: '0' }}>
              </Card></Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="https://teocoop.site/">
              <Card style={{ height: '30rem', width: '55rem', display: 'flex', backgroundImage: `url(${teoSite.src})`, backgroundPosition: 'center', objectFit: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', margin: '0' }}>
              </Card></Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>

  )
}
