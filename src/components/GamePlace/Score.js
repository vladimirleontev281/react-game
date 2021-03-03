import React from 'react';
import slyles from './GamePlace.module.css';
import Player from './Player';

const Score = props => {
  const {activePlayer, winning} = props;
  return (
    <div className={slyles.Score}>
      <h3 className={'unselectable'}>Score</h3>
      <div>
        <Player {...props} player={'playerA'} active={!winning && activePlayer === 'playerA'} />
        <Player {...props} player={'playerB'} active={!winning && activePlayer === 'playerB'}/>
      </div>
    </div>
  );
};

export default Score;