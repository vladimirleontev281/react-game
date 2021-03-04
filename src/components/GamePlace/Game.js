import React from 'react';
import Cell from './Cell';
import slyles from './GamePlace.module.css';

const Game = ({winning, ...props}) => {
  const items = ['', '', '', '', '', '', '', '', ''];
  const blocked = !!winning;
  const winningLinePosition = winning ? winning : '';
  return (
    <ul className={slyles.Game}>
    {
      items.map((item, index) => <Cell key={index} index={index} blocked={blocked} {...props} />)
    }
      <li className={`${slyles.verticalLeft} unselectable`}></li>
      <li className={`${slyles.verticalRight} unselectable`}></li>
      <li className={`${slyles.horizontTop} unselectable`}></li>
      <li className={`${slyles.horizontBottom} unselectable`}></li>
      <li className={`${slyles.winningLine} ${slyles[winningLinePosition]} unselectable`}></li>
    </ul>
  );
};

export default Game;