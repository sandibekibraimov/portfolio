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
          Hi, My name is Sandibek Ibraimov. I’ve always been fascinated and
          interested in learning how things work and that is how I first
          discovered my love and passion for technology and computers.
          <br /> I got my very first personal computer Pentium III when I was 11
          years old and I loved it. I used to disassemble it to see how parts
          are connected. This experience brought me to pursue IT career. <br />I
          am a frontend software engineer with a master's degree in computer
          systems and networks. I have 13+ years of IT technical support
          experience which gives me a solid foundation in my software
          engineering career.
          <br /> I am passionate about building web apps with user-friendly
          interfaces. I have developed and implemented personal web projects
          using{' '}
          <strong>
            JavaScript, React, Redux, Express, Node.js, MongoDB, HTML, CSS
          </strong>{' '}
          stack of technologies. I am obsessed in continuing gaining experience
          by building websites using my skills.
        </h3>
      </div>
    </div>
  );
};

export default Index;
