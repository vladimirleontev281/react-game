import React, { useState, useEffect, useRef } from 'react';
import slyles from './GamePlace.module.css';

const Cell = ({index, blocked, gameSession, activeIcon, activePlayer, thunks}) => {
    const previousGameSession = useRef(gameSession);
    const [staus, setStaus] = useState('pending');
    const classes = `${staus === 'cross' ? slyles.cross : ''} ${staus === 'zero' ? slyles.zero : ''} ${blocked ? slyles.blocked : ''}`;
    

    const clickHandler = e => {
        setStaus(activeIcon);
        thunks.makeGameMove({cell: e.target.dataset.index, player: activePlayer});
    };

    useEffect(() => {
        if (!gameSession && previousGameSession.current) setStaus('pending');
    }, [gameSession]);

    useEffect(() =>{
        previousGameSession.current = gameSession;
    });
    return (
        <li className={`${slyles.Cell} ${classes} unselectable`}
            data-index={index}
            onClick={clickHandler}
        ></li>
    )
  };
  export default Cell;