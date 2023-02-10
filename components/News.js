import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import imagenFondo from '../public/diseñoUX.jpg'
import axios from 'axios'


export const News = () => {
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState([]);
  const [resultadosImg, setResultadosImg] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/news-posts')
      .then(response => {
        setResultados(response.data.data);
        setLoading(false);
      })
    axios.get('http://localhost:1337/api/upload/files/')
      .then(response => {
        setResultadosImg(response);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1 style={{ padding: '1rem', marginBottom: '2rem', borderBottom: '1px solid black', color: 'black' }}> Noticias</h1>
      <section id='news' style={{ borderRadius: '10px', background: '#000', boxShadow: '#ffffff58 0 0 20px', marginTop: '3rem', padding: '10px' }}>
        {
          !loading && resultados.map(({ id, attributes: { title, body, date } }) => {
            const imagenFilter = resultadosImg.data.filter(img => img.id === id);
            return (
              <>
                <Row className='rowNews'>
                  {imagenFilter.map(({ url, id }) => (
                    <Col>
                    <Card className="example-1 cardNews"
                      key={id}
                     >
                      <Container className="wrapperNews" style={{
                        backgroundImage: `url(http://localhost:1337${url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}>
                        <Col className="dateNews">
                          <span className="spanNews day">12</span>
                          <span className="spanNews month">Aug</span>
                          <span className="spanNews year">2016</span>
                        </Col>
                        <Col className="dataNews">
                          <div className="content">
                            <span className="author spanNews">Teo-Coop</span>
                            <h1 className="titleNews h1News">
                              <a className="aNews" href="#">
                               {title}
                              </a>
                            </h1>
                            <p className="textNews">
                              {body}
                            </p>
                          </div>
                        </Col>
                      </Container>
                    </Card>
                    </Col>
                  ))
                  }
                </Row>
              </>
            )
          })}
      </section>
    </>
  )
}