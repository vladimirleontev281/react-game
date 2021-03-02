import React from 'react';
import slyles from './GamePlace.module.css';
import Player from './Player';

const Score = props => {
  return (
    <div className={slyles.Score}>
      <h3 className={'unselectable'}>Score</h3>
      <div>
        <Player {...props} player={'playerA'} />
        <Player {...props} player={'playerB'} />
      </div>
    </div>
  );
};

export default Score;