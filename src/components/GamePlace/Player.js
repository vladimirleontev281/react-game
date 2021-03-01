import React from 'react';
import slyles from './GamePlace.module.css';

const Player = () => {
  return (
    <div className={slyles.Player}>
      <span>Player:</span>
      <span>0</span>
    </div>
  );
};

export default Player;