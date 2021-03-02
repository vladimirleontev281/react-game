import React, { useState, useEffect, useRef } from 'react';
import { getPlayerName, getPlayerScore } from '../../utils';
import { actionCreators } from '../../store/reduser';
import PlayerModal from './PlayerModal';
import slyles from './GamePlace.module.css';

const Player = props => {
  const {player, players, score, dispatch } = props;
  const [playerName, setPlayerName] = useState(getPlayerName(players, player));
  const [isEditMode, setIsEditMode] = useState(false);
  const playerScore = getPlayerScore(score, player);

  const playerRef = useRef(null);
  const inputRef = useRef(null);
  
  const onBlurHandler = e => {
    if (!playerRef.current.contains(e.target)) {
      setIsEditMode(false);
    };
  };
  
  const toggleListeners = isActivate => {
    if (isActivate) {
      document.addEventListener('click', onBlurHandler);
      document.addEventListener('keydown', e => {
        if (e.key === 'Enter') setIsEditMode(false);
      });
    } else {
      document.removeEventListener('click', onBlurHandler);
      document.addEventListener('keydown', e => {
        if (e.key === 'Enter') setIsEditMode(false);
      });
    }
  };
  useEffect(() => {
    if (isEditMode) {
      inputRef.current.select();
      toggleListeners(true);
    } else {
      dispatch(actionCreators.setUserName(player, playerName));
      toggleListeners(false);
    }
    return () => {toggleListeners(false);}
  }, [isEditMode]);

  // console.log(players);
  return (
    <div className={slyles.Player} ref={playerRef} onClick={() => setIsEditMode(true)} >
    { isEditMode
      ? <PlayerModal  value={playerName} 
                      onChangeHandler={e => setPlayerName(e.target.value)} 
                      inputRef={inputRef}
        />
      : <>
          <span className={'unselectable'}>{playerName}</span>
          <span className={'unselectable'}>{playerScore}</span>
        </>
    }
    </div>
  );
};

export default Player;