import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, EffectCreative, Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";


export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/portfolios')
      .then(response => {
        setResultados(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);


  return (
    <>
     
      <div id="portfolio" className="portfolio" style={{ backdropFilter: 'blur(5px)', height: '100%', padding: '1rem 0rem', border: '1px solid white', borderRadius: '10px', marginTop: '1rem', boxShadow: '#ffffff90 0px 0px 20px' }}>
      <h1 className='titleSeccion'>
        Portfolio</h1>
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
          {!loading && resultados.map(({id, attributes:{ url, imageUrl, title, description} }) => {
            {console.log(resultados)}
            return (
              <SwiperSlide key={id}>
                <Card
                style={{
                  backgroundImage: `url(http://localhost:1337/${imageUrl})`,
                  backgroundSize:'100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}
