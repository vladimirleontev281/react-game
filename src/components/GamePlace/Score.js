import React from 'react';
import slyles from './GamePlace.module.css';
import Player from './Player';

const Score = () => {
  return (
    <div className={slyles.Score}>
      <h3 className={'unselectable'}>Score</h3>
      <div>
        <Player />
        <Player />
      </div>
    </div>
  );
};

export default Score;