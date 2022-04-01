import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, contactData, footerData } from '../data/staticData';
import useAboutData from '../data/aboutData';
import usePodsData from '../data/podsData';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState([]);
  const [pods, setPods] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  const podsData = usePodsData();
  const aboutData = useAboutData();

  useEffect(() => {
    setHero({ ...heroData });
    setAbout([...aboutData]);
    setPods([...podsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, pods, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
