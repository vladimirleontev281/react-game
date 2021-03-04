import React from 'react';
// import { actionCreators } from "../../store/reduser";
import slyles from './Header.module.css';
import animate from '../animate.module.css';

const Header = ({thunks}) => {
  const animation = `${animate.animate__animated} ${animate.animate__fadeIn}`;
  // const animation = `${animate.animate__animated} ${animate.animate__slideInRight}`;
  const cssClasses = `${slyles.Header} ${animation}`;
  return (
    <div className={cssClasses}>
      <div className={slyles.logoBlock}>
        <span className={`unselectable ${animate.animate__animated} ${animate.animate__zoomIn}`}>Tic</span>
        <span className={`unselectable ${animate.animate__animated} ${animate.animate__zoomIn}`}>Tac</span>
        <span className={`unselectable ${animate.animate__animated} ${animate.animate__zoomIn}`}>Toe</span>
      </div>
      <ul className={`${slyles.menuBlock} ${animate.animate__animated} ${animate.animate__fadeIn}`} >
        <li className='unselectable' onClick={() => {thunks.resetScore()}}>Reset the score</li>
        <li className='unselectable' onClick={() => {thunks.clearBase()}}>Clear all statistics</li>
      </ul>
    </div>
  );
};

export default Header;
