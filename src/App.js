import React, { useEffect, useReducer, useRef } from 'react';
import reducer, { initialState, actionCreators } from "./store/reduser";
import thunkCreators from "./store/thunkCreators";
import { getWinning } from "./utils";

import Header from "./components/Header/Header";
import GamePlace from "./components/GamePlace/GamePlace";
import Footer from "./components/Footer/Footer";
import slyles from './App.module.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunks = Object.keys(thunkCreators).reduce((ac, key) => {
    ac[key] = thunkCreators[key](state, dispatch);
    return ac;
  }, {});

  const players = state.players;
  const previousPlayers = useRef(players);

  useEffect(() => {
    thunks.initGame();
  }, []);

  const winning = getWinning(state.game);
  useEffect(() => {
    if (winning) {
      thunks.addWinning(winning);
      setTimeout(() => {
        thunks.newGame();
      }, 2000);
    }
  }, [winning]);

  useEffect(() => {
    if (players[0] !== previousPlayers.current[0] || players[1] !== previousPlayers.current[1]) {
      thunks.findAndSetResults(state.players[0], state.players[1]);
    }
    previousPlayers.current = players;
  }, [players]);

  useEffect(() => {
    console.log(state);
  });

  return (
    <div className={slyles.App}>
      <Header dispatch={dispatch} thunks={thunks} />
      <GamePlace  players={state.players} 
                  score={state.score} 
                  activePlayer={state.activePlayer}
                  activeIcon={state.activeIcon}
                  dispatch={dispatch} 
                  thunks={thunks}
                  gameSession={state.gameSession}
                  winning={state.winning}
      />
      <Footer />
    </div>
  );
};

export default App;
