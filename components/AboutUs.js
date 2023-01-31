import Card from 'react-bootstrap/Card';
import { useContext} from 'react';
import { AccordionContext,Accordion,useAccordionButton, Col, Container, Image, Row } from 'react-bootstrap';
import vision from '../public/vision.png'
import mision from '../public/mision.png'
import valores from '../public/valores.png'
import seguridad from '../public/seguridad.png'
import PropTypes from 'prop-types';
import { withTranslation } from 'next-i18next';

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(

    eventKey,
    () => callback && callback(eventKey),
  );

  const accordionCollapse = activeEventKey === eventKey;
  const renderChildren = ({ accordionCollapse }) => {
    //inicia en false, onclick = true, false de nuevo 
    return accordionCollapse ? children[0] : children[1];
  }
  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: accordionCollapse ? '#ffff' : 'black', color: accordionCollapse ? 'black' : 'white', borderRadius: '10px', height: '2rem', width: 'fit-content', padding: '0rem .4rem', alignItems: 'flex-end', display: 'flex',
          border: accordionCollapse ? '1px solid black' : 'none'
        }}
        onClick={decoratedOnClick}

      >
        {renderChildren({ accordionCollapse })}
      </button>
    </>
  );

}
function AboutUs({t}) {
  console.log({t}, 'nostrosooooooos');
  const data =
    [
      {
        "name": `${t('mission-name')}`,
        "image": `${mision.src}`,
        "description":`${t('mission-description')}`,
        "id": 1
      },
      {
        "name": `${t('vision-name')}`,
        "image": `${vision.src}`,
        "description": `${t('vision-description')}`,
        "id": 2
      },
      {
        "name":`${t('values-name')}`,
        "image": `${valores.src}`,
        "description": `${t('values-description')}`,
        "id": 3
      },
      {
        "name":`${t('segurity-name')}`,
        "image": `${seguridad.src}`,
        "description": `${t('segurity-description')}`,
        "id": 4
      },

    ]




  return (
    <div style={{ margin: '1rem' }}>
      <div id='aboutUs'>
        <h1 style={{ padding: '1rem', borderBottom: '1px solid black', color: 'black' }}>
        {t('title')}
          </h1>
      </div>
      <section className='aboutUsSection' >
        <Accordion
          defaultActiveKey="0">
          <div className='sectionServicios'>
            <Container fluid>
            <Row>
            {data.map(({ name, description, image, id }) => (
              <Col key={name} style={{justifyContent:'center', display:'flex'}}>
                <Card className='cardTransition'>
                  <Card.Header >
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <h1>{name}</h1>
                      <Image
                        src={image}
                        width={30} height={30} />
                    </div>
                    <ContextAwareToggle eventKey={id}>
                      <h6>{t('less')}</h6>
                      <h6>{t('more')}</h6>
                    </ContextAwareToggle>
                  </Card.Header>
                  <Accordion.Collapse style={{ background: 'white' }} eventKey={id}>
                    <Card.Body>{description}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Col>
            ))}
            </Row>
            </Container>
          </div>
        </Accordion>
      </section>
    </div>
  );
}

AboutUs.propTypes = {
  t: PropTypes.func.isRequired,
}
export default withTranslation('aboutUs')(AboutUs)