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
          <Container fluid >
          <Row style={{ display: 'flex', width: 'fit-content' }}>
            {
              !loading && resultados.map(({ id, attributes: { title, body, date, imageUrl } }) => { 
                const parsedDate = new Date(date);
                const day = parsedDate.getDate();
                const month = parsedDate.toLocaleString('en-US', { month: 'short' });
                const year = parsedDate.getFullYear().toString().slice(-2);
                return (
                  <>
                      <Col style={{ width: 'fit-content', display:'flex', justifyContent:'center' }}
                        key={title}>
                          <Card className="example-1 cardNews" style={{
                            backgroundImage: `url(http://localhost:1337/${imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}
                          >
                            <Container className="wrapperNews" >
                              <Col className="dateNews">
                                <span className="spanNews day">{day}</span>
                                <span className="spanNews month">{month}</span>
                                <span className="spanNews year">{year}</span>
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
                 
                  </>
                )
              })}
        </Row>
      </Container>
    </section>
    </>
  )
}