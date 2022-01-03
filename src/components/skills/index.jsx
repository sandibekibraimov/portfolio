import React, { useContext } from 'react';
import { ThemeContext } from '../../context';

import { skillsData } from '../../skillsData';
import './skills.css';

const Index = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='wrapper'>
      <div className='skills'>
        <div className='skills-headline'>
          <p>technical</p>
          <h1>Skills</h1>
        </div>
        <div
          className='skills-container'
          style={{
            backgroundColor: darkMode ? '#636363' : '#ffffff',
            color: darkMode && '#fff',
          }}
        >
          {skillsData.map((item) => (
            <div className='skill-item' key={item.id}>
              <h4
                style={{
                  color: darkMode && '#fff',
                }}
              >
                {item.name}
              </h4>
              <img src={item.img} alt='' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
