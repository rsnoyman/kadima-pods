import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, CardDeck, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const PodTitle = ({ name, emoji }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
    <span style={{ fontSize: 24 }}>{name}</span>
    <span style={{ fontSize: 36 }}>{emoji}</span>
  </div>
);

PodTitle.propTypes = {
  name: PropTypes.string,
  emoji: PropTypes.string,
};

const Projects = () => {
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
            <CardDeck>
              {pods.map(({ name, description, lead, contact, emoji, key }) => (
                <Card key={key} style={{ minWidth: '18rem' }}>
                  <Card.Body>
                    <Card.Title>
                      <PodTitle name={name} emoji={emoji} />
                    </Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>{description}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <span className="text-muted">{`${lead} - ${contact}`}</span>
                  </Card.Footer>
                </Card>
              ))}
            </CardDeck>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
