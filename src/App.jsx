import React, { useContext } from 'react';
import './app.css';

import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Toggle from './components/toggle';
import { ThemeContext } from './context';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='app'
      style={{
        backgroundColor: darkMode ? '#393e46' : '#eeeeee',
        color: darkMode && '#fff',
        transition: 'all 0.2s ease-out',
      }}
    >
      <Toggle />
      <Header />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
