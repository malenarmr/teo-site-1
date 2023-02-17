import React, { useState, useEffect } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'


export const News = () => {
  const [loading, setLoading] = useState(true);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:1337/api/news-posts')
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
      {resultados.length > 0 ? (
        <div className='section'>
          <div id='news'>
          <h1 className='titleSeccion'> Noticias</h1>
          </div>
          <section  style={{ borderRadius: '10px', marginTop: '3rem', padding: '10px'}}>
            <Container fluid style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
              <Row style={{ display: 'flex', width: 'fit-content'}}>
                {!loading && resultados.map(({ id, attributes: { title, body, date, imageUrl } }) => {
                  const keyDinamic = `${id}${title}`
                  const parsedDate = new Date(date);
                  const day = parsedDate.getDate();
                  const month = parsedDate.toLocaleString('en-US', { month: 'short' });
                  const year = parsedDate.getFullYear().toString().slice(-2);
                  return (
                    <>
                    <div key={keyDinamic}>
                      <Col style={{ width: 'fit-content', display: 'flex', justifyContent: 'center' }}>
                        <Card className="example-1 cardNews cardTransition" style={{
                          backgroundImage: `url(http://localhost:1337/${imageUrl})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}>
                          <Container className="wrapperNews">
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
                      </div>
                    </>
                  )
                })}
              </Row>
            </Container>
          </section>
        </div>
      ) : (
        <div className='section' id='news'>
        <h1 className='titleSeccion' style={{textAlign:'center', whiteSpace:'pre', width:'fit-content', padding:'0 1.5rem'}}>
          Sin resultados temporalmente</h1>
          </div>
      )}
    </>
  );
}  