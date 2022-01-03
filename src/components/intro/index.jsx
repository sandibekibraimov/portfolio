import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import './intro.css';

const Index = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className='wrapper'
      style={{
        backgroundColor: darkMode ? '#393e46' : '#eeeeee',
        color: darkMode && '#fff',
      }}
    >
      <div className='intro'>
        <div className='intro-left'>
          <img src='assets/san.jpeg' alt='' />
        </div>
        <div className='intro-right'>
          <p>hi, my name is</p>
          <h1
            style={{
              color: darkMode && '#fff',
            }}
          >
            Sandibek Ibraimov
          </h1>
          <h4
            style={{
              color: darkMode && '#fff',
            }}
          >
            A <strong>frontend engineer</strong> passionate about creating
            interactive websites and user friendly application experience.
          </h4>
          <ul>
            <li>
              <a
                href='https://github.com/sandibekibraimov'
                target='_blank'
                rel='noreferrer'
              >
                <i
                  class='fab fa-github-square'
                  style={{
                    color: darkMode && '#fff',
                  }}
                ></i>
              </a>
            </li>
            <li
              style={{
                color: darkMode && '#fff',
              }}
            >
              <a
                href='https://www.linkedin.com/in/sandibekibraimov/'
                target='_blank'
                rel='noreferrer'
              >
                <i
                  class='fab fa-linkedin'
                  style={{
                    color: darkMode && '#fff',
                  }}
                ></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
