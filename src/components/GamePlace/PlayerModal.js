import React from 'react';
import slyles from './GamePlace.module.css';

const PlayerModal = ({value, onChangeHandler, inputRef}) => {
  const SYMBOL_MAX_QUANTITY = 20;
  return (
    <div className={`${slyles.PlayerModal} unselectable`}>
      <div>
        <span className={slyles.playerNameModalDescrip}>{`max ${SYMBOL_MAX_QUANTITY} symbols`}</span>
        <input  className={slyles.playerNameModalInput} 
                value={value} 
                onChange={onChangeHandler} 
                maxLength={SYMBOL_MAX_QUANTITY} 
                ref={inputRef}
        />
      </div>
    </div>
  )
}
export default PlayerModal;