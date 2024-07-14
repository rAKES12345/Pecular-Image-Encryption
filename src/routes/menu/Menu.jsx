// src/components/menu/Menu.jsx
import React from 'react';
import './Menu.css';

const Menu = ({ options, handleLogout }) => {
  return (
    <div className='menu'>
      <div className='menu-heading'> PECULIAR IMAGE ENCRYPTION</div>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            {option === 'Logout' ? (
              <button onClick={handleLogout}>{option}</button>
            ) : (
              <a href={`/${option.toLowerCase()}`}>{option}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
