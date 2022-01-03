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
          I am a frontend engineer with background in computer systems and
          networks. I have 12+ years of IT support and technical sales
          experience which gives me a solid foundation in my software
          engineering career. Recently, I graduated from the{' '}
          <strong>General Assembly web development bootcamp.</strong> I am
          passionate about software engineering and solving complex problems
          through coding, and I am excited to work with other wonderful
          engineers and learn so much more!
        </h3>
      </div>
    </div>
  );
};

export default Index;
