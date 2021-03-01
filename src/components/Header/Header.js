import React from 'react';
import slyles from './Header.module.css';

const Header = () => {
  return (
    <div className={slyles.Header}>
      <div className={slyles.logoBlock}>
        <span className='unselectable'>Tic</span>
        <span className='unselectable'>Tac</span>
        <span className='unselectable'>Toe</span>
      </div>
      <ul className={slyles.menuBlock} >
        <li className='unselectable'>Save the score</li>
        <li className='unselectable'>Clear the score</li>
        <li className='unselectable'>Clear all statistics</li>
      </ul>
    </div>
  );
};

export default Header;
