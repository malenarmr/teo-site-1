import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import cap2 from '../public/slider/captura2.jpg'
import gif from '../public/slider/capturagif.gif'
import negro from '../public/slider/fondonegro.jpg'
import sandbox from '../public/slider/sandbox.jpg'

export default function Portfolio() {
  const dataImages = [
    {
      "image": `${cap2.src}`,
      'id':'0',
    },
    {
      "image": `${gif.src}`,
      'id': '1',
    },
    {
      "image": `${negro.src}`,
      'id':'2',
    },
    {
      "image": `${sandbox.src}`,
      'id':'3',
    }, 
  ]
  return (
    <>
     <h1 style={{ padding: '1rem', marginBottom:'2rem', borderBottom: '1px solid black'}}>
          Portfolio</h1>
      <div id="portfolio" className="portfolio" style={{backdropFilter: 'blur(5px)', height:'100%', padding:'1rem 0rem', border:'2px solid #ffffff90', borderRadius:'10px', marginTop:'1rem', boxShadow:'#ffffff90 0px 0px 20px' }}>
        <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper "
        transition={{
          duration: 900,
        }}
      >
            {dataImages.map(({ image, id }) => (
              <SwiperSlide key={id}>
                <img key={id} src={image} width={'100%'}/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    </>
  )
}
