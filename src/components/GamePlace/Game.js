import React from 'react';
import slyles from './GamePlace.module.css';

const Cell = props => {
  return <li className={`${slyles.Cell} unselectable`}></li>
};

const Game = () => {
  const items = ['', '', '', '', '', '', '', '', ''];
  return (
    <ul className={slyles.Game}>
    {
      items.map((item, index) => <Cell className={slyles.Cell} key={index} />)
    }
      <li className={`${slyles.verticalLeft} unselectable`}></li>
      <li className={`${slyles.verticalRight} unselectable`}></li>
      <li className={`${slyles.horizontTop} unselectable`}></li>
      <li className={`${slyles.horizontBottom} unselectable`}></li>
    </ul>
  );
};

export default Game;