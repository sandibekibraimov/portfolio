import React from 'react';
import './header.css';

const Index = () => {
  return (
    <div className='wrapper'>
      <div className='header'>
        <div className='header-left'>
          <div className='header-left-logo'>
            <h4>S.I.</h4>
          </div>
        </div>
        <div className='header-middle'>
          <ul>
            <li>
              <i class='fas fa-phone-square'></i>
              <p>929 200 06 75</p>
            </li>
            <li>
              <i class='fas fa-envelope'></i>
              <p>sandibek@gmail.com</p>
            </li>
          </ul>
        </div>
        <div className='header-right'>
          <a href='assets/SANDIBEK_IBRAIMOV.pdf' download>
            <button>resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
