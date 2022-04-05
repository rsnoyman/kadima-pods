import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const PodName = styled.span`
  font-size: 24px;
`;

const PodEmoji = styled.span`
  font-size: 36px;
`;

const CardBody = styled(Card.Body)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

function PodTitle({ name, emoji }) {
  return (
    <TitleWrapper>
      <PodName>{name}</PodName>
      <PodEmoji>{emoji}</PodEmoji>
    </TitleWrapper>
  );
}

PodTitle.propTypes = {
  name: PropTypes.string,
  emoji: PropTypes.string,
};

function Projects() {
  const { pods } = useContext(PortfolioContext);

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Pods" />
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <Row xs={1} md={3} lg={4} className="g-4">
              {pods.map(({ name, description, lead, contact, emoji, key }) => (
                <Col key={key}>
                  <Card className="h-100">
                    <CardBody>
                      <Card.Title>
                        <PodTitle name={name} emoji={emoji} />
                      </Card.Title>
                      <Card.Text style={{ textAlign: 'left' }}>{description}</Card.Text>
                    </CardBody>
                    <Card.Footer>
                      <span>{`${lead} - ${contact}`}</span>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Fade>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
