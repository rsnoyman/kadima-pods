import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  // const { paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="Frequently Asked Questions" />
        <Row className="about-wrapper">
          <Col>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <Accordion>
                {about.map(({ question, answer, key }, i) => (
                  <Card
                    key={key}
                    style={{
                      background: 'rgba(255, 255, 255, 0.3)',
                      fontSize: 18,
                      margin: '5px',
                      borderRadius: '15px',
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Header}
                      style={{ fontWeight: 'bold', padding: '15px' }}
                      eventKey={`${i}`}
                    >
                      {question}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${i}`}>
                      <Card.Body>{answer}</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                ))}
              </Accordion>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
