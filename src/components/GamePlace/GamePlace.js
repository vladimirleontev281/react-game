import React from 'react';
import Score from './Score';
import Game from './Game';
import slyles from './GamePlace.module.css';


const GamePlace = props => {
  return (
    <div className={slyles.GamePlace}>
      <div className={slyles.scoreBlock}>
        <Score {...props} />
      </div>
      <div className={slyles.gameBlock}>
        <Game {...props} />
      </div>
    </div>
  );
};

export default GamePlace;