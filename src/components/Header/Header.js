import React from 'react';
// import { actionCreators } from "../../store/reduser";
import slyles from './Header.module.css';

const Header = ({thunks}) => {

  return (
    <div className={slyles.Header}>
      <div className={slyles.logoBlock}>
        <span className='unselectable'>Tic</span>
        <span className='unselectable'>Tac</span>
        <span className='unselectable'>Toe</span>
      </div>
      <ul className={slyles.menuBlock} >
        <li className='unselectable' onClick={() => {thunks.resetScore()}}>Reset the score</li>
        <li className='unselectable' onClick={() => {thunks.clearBase()}}>Clear all statistics</li>
      </ul>
    </div>
  );
};

export default Header;
