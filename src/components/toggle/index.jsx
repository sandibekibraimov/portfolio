import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import './toggle.css';

const Index = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className='toggle'>
      <i class='fas fa-sun'></i>
      <i class='fas fa-moon'></i>
      <input
        type='button'
        className='toggle_btn'
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      />
    </div>
  );
};

export default Index;
