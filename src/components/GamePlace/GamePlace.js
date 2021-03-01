import React from 'react';
import Score from './Score';
import Game from './Game';
import slyles from './GamePlace.module.css';


const GamePlace = () => {
  return (
    <div className={slyles.GamePlace}>
      <div className={slyles.scoreBlock}>
        <Score />
      </div>
      <div className={slyles.gameBlock}>
        <Game />
      </div>
    </div>
  );
};

export default GamePlace;