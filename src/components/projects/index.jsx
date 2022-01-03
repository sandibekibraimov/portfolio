import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import { projectsData } from '../../projectsData';
import './projects.css';

const Index = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='wrapper'>
      <div className='projects'>
        <div className='projects-headline'>
          <p>portfolio</p>
          <h1>Projects</h1>
        </div>
        <div
          className='projects-container'
          style={{
            backgroundColor: darkMode ? '#636363' : '#ffffff',
            color: darkMode && '#fff',
          }}
        >
          {projectsData.map((item) => (
            <div className='project-item' key={item.id}>
              <div className='project-item-left'>
                <img src={item.img} alt={item.name} />
              </div>
              <div className='project-item-right'>
                <h3>{item.name}</h3>
                <h4
                  style={{
                    color: darkMode && '#fff',
                  }}
                >
                  {item.description}
                </h4>
                <ul>
                  <li>
                    <a href={item.github} target='_blank' rel='noreferrer'>
                      <i
                        class='fab fa-github-square'
                        style={{
                          color: darkMode && '#fff',
                        }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href={item.link} target='_blank' rel='noreferrer'>
                      <i
                        class='fas fa-globe'
                        style={{
                          color: darkMode && '#fff',
                        }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
