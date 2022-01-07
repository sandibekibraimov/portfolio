import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './about.css';

const Index = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='wrapper'>
      <div className='about'>
        <div className='about-headline'>
          <p>some info</p>
          <h1>About me</h1>
        </div>
        <h3
          style={{
            backgroundColor: darkMode ? '#636363' : '#ffffff',
            color: darkMode && '#fff',
          }}
        >
          Hi, my name is Sandibek Ibraimov and I am a frontend developer with
          engineering background in computer systems and networks. I have 12+
          years of IT technical support experience which gives me a solid
          foundation in my software engineering career. I am passioned about
          building web apps with user friendly interfaces. I have developed and
          implemented personal web projects using JavaScript, React, Redux,
          Express, Node.js, MongoDB, HTML, CSS stack of technologies. I am
          obsessed in continuing gaining experience by building websites using
          my skills.
        </h3>
      </div>
    </div>
  );
};

export default Index;
