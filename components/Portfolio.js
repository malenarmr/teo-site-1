import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import { Card } from "react-bootstrap";
import cap2 from '../public/slider/captura2.jpg'
import gif from '../public/slider/capturagif.gif'
import negro from '../public/slider/fondonegro.jpg'
import image2 from '../public/slider/captura916-01.jpg'
import Link from "next/link";

export default function Portfolio() {
  const dataImages = [
    {
      "image": `${cap2.src}`,
      'id':'0',
    },
    {
      "image": `${gif.src}`,
      'id': '2',
    },
    {
      "image": `${negro.src}`,
      'id2':'3',
    },
   
  ]
  return (
    <>
      <div id="portfolio" className="swiperFondo" style={{ borderRadius: '15px', background: '#000', boxShadow: '#ffffff50 0 0 20px', padding: '10px' }}>
        <h1 style={{ padding: '1rem', borderBottom: '1px solid #FFF', color: '#FFF' }}>
          Portfolio</h1>
        <div>
          <Swiper
           
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {dataImages.map(({ image, id }) => (
              <SwiperSlide key={id}>
                <img key={id} src={image} width={'100%'}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
