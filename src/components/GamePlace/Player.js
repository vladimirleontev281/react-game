import React, { useState, useEffect, useRef } from 'react';
import { getPlayerName, getPlayerScore } from '../../utils';
import { actionCreators } from '../../store/reduser';
import PlayerModal from './PlayerModal';
import slyles from './GamePlace.module.css';

const Player = props => {
  const {player, players, score, gameSession, dispatch, active } = props;
  const [playerName, setPlayerName] = useState(getPlayerName(players, player));
  const [isEditMode, setIsEditMode] = useState(false);
  const playerScore = getPlayerScore(score, player);

  const playerRef = useRef(null);
  const inputRef = useRef(null);

  const clickHandler = () => {
    if (!gameSession) setIsEditMode(true);
  };
  
  const blurHandler = e => {
    if (!playerRef.current.contains(e.target)) {
      setIsEditMode(false);
    };
  };

  const toggleListeners = isActivate => {
    if (isActivate) {
      document.addEventListener('click', blurHandler);
      document.addEventListener('keydown', e => {
        if (e.key === 'Enter') setIsEditMode(false);
      });
    } else {
      document.removeEventListener('click', blurHandler);
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

  return (
    <div  className={`${slyles.Player} ${gameSession ? slyles.gameSession : ''}`} 
          ref={playerRef} 
          onClick={clickHandler} 
    >
    { isEditMode
      ? <PlayerModal  value={playerName} 
                      changeHandler={e => setPlayerName(e.target.value)} 
                      inputRef={inputRef}
        />
      : <>
          <span className={'unselectable'}>{playerName}</span>
          <span className={'unselectable'}>{playerScore}</span>
          {active ? <span>your move!</span> : null}
        </>
    }
    </div>
  );
};

export default Player;