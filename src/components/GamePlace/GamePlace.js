import React from 'react';
import Score from './Score';
import Game from './Game';
import slyles from './GamePlace.module.css';
import animate from '../animate.module.css';


const GamePlace = props => {
  return (
    <div className={slyles.GamePlace}>
      <div className={`${slyles.scoreBlock} ${animate.animate__animated} ${animate.animate__slideInLeft}`}>
        <Score {...props} />
      </div>
      <div className={slyles.gameBlock}>
        <Game {...props} />
      </div>
    </div>
  );
};

export default GamePlace;